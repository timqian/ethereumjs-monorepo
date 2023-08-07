import { Event } from '../../types'

import type { Config } from '../../config'
import type { Peer } from '../peer/peer'
import type { Sender } from './sender'
export interface ProtocolOptions {
  config: Config

  /* Handshake timeout in ms (default: 8000) */
  timeout?: number
}

export type Message = {
  name: string
  code: number
  payload?: any
  // TODO: check semantics of this field
  response?: number
  // TODO: check if this should be optional
  encode?: Function
  // TODO: check if this should be optional
  decode?: Function
}

/**
 * Protocol message
 * @typedef {Object} Protocol~Message
 * @property {string} name message name
 * @property {number} code message code
 * @property {response} response code of response message
 * @property {boolean} flow true if message includes flow control
 * @property {function(...*): *} encode encode message arguments
 * @property {function(*): *} decode decodes message payload
 */

/**
 * Base class for all wire protocols
 * @memberof module:net/protocol
 */
export abstract class Protocol {
  public config: Config
  public timeout: number
  public opened: boolean
  protected peer: Peer | undefined
  private sender: Sender | undefined
  private _status: any
  private messageQueue: Message[] = []

  /**
   * Create new protocol
   */
  constructor(options: ProtocolOptions) {
    this.config = options.config
    this.timeout = options.timeout ?? 8000

    this.opened = false
    this.peer = options.peer
    this.sender = options.sender
    this.timeout = options.timeout ?? 8000
    this._status = {}
    this.sender.on('message', (message: any) => {
      try {
        if (this.peer.pooled) {
          this.handle(message)
        } else {
          this.messageQueue.push(message)
          // Expected message queue growth is in the single digits
          // so this adds a guard here if something goes wrong
          if (this.messageQueue.length >= 50) {
            const error = new Error('unexpected message queue growth for peer')
            this.config.events.emit(Event.PROTOCOL_ERROR, error, this.peer)
          }
        }
      } catch (error: any) {
        this.config.events.emit(Event.PROTOCOL_ERROR, error, this.peer)
      }
    })
    this.sender.on('error', (error: Error) =>
      this.config.events.emit(Event.PROTOCOL_ERROR, error, this.peer)
    )
  }

  /**
   * Opens protocol and any associated dependencies
   */
  async open(): Promise<boolean | void> {
    this.opened = true
  }

  /**
   * Perform handshake given a sender from subclass.
   */
  async handshake(sender: Sender) {
    const status = this.encodeStatus()
    sender.sendStatus(status)
    return new Promise((resolve, reject) => {
      let timeout: any = setTimeout(() => {
        timeout = null
        reject(new Error(`Handshake timed out after ${this.timeout}ms`))
      }, this.timeout)
      const handleStatus = (status: any) => {
        if (timeout !== null && timeout !== 0) {
          clearTimeout(timeout)
          resolve(this.decodeStatus(status))
        }
      }
      if (sender.status !== undefined && sender.status !== null && sender.status !== 0) {
        handleStatus(sender.status)
      } else {
        sender.once('status', handleStatus)
      }
    })
  }

  /**
   * Abstract getter for name of protocol
   */
  get name() {
    return 'protocol'
  }

  /**
   * Protocol versions supported
   */
  get versions(): number[] {
    throw new Error('Unimplemented')
  }

  /**
   * Messages defined by this protocol
   */
  get messages(): Message[] {
    throw new Error('Unimplemented')
  }

  /**
   * Encodes status into status message payload. Must be implemented by subclass.
   */
  encodeStatus(): any {
    throw new Error('Unimplemented')
  }

  /**
   * Decodes status message payload into a status object.  Must be implemented
   * by subclass.
   * @param _status status message payload
   */
  decodeStatus(_status: any): Object {
    throw new Error('Unimplemented')
  }

  /**
   * Encodes message into proper format before sending
   * @param message message definition
   * @param args message arguments
   */
  encode(message: Message, args: any): any {
    if (message.encode) {
      return message.encode(args)
    }
    return args
  }

  /**
   * Decodes message payload
   * @param message message definition
   * @param payload message payload
   */
  decode(message: Message, payload: any): any {
    if (message.decode) {
      return message.decode(payload)
    }
    return payload
  }

  /**
   * Handle unhandled messages along handshake
   */
  handleMessageQueue() {
    for (const message of this.messageQueue) {
      this.handle(message)
    }
  }

  abstract handle(incoming: Message): void
}
