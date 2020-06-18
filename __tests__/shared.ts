import { EventEmitter } from 'events'
import { AsyncCallOptions, AsyncCall, MessageChannel } from '../src/Async-Call'
import { AsyncGeneratorCall } from '../src/Async-Call-Generator'

const impl = {
    add: (x: number, y: number) => x + y,
    undef: () => {},
    throws: async () => {
        throw new Error()
    },
}
export class JestChannel extends EventEmitter implements MessageChannel {
    constructor(public otherSide: JestChannel) {
        super()
    }
    emit(event: any, data: any): boolean {
        return super.emit.call(this.otherSide, event, data)
    }
}
export function createChannelPair() {
    const server = new JestChannel(undefined!)
    const client = new JestChannel(server)
    server.otherSide = client
    return { server, client }
}
export function createServer<T extends object = typeof impl>(
    opt: Omit<AsyncCallOptions, 'messageChannel'> = {},
    _: T = impl as any,
) {
    const { client, server } = createChannelPair()
    AsyncCall(_, { messageChannel: server, log: false, ...opt })
    return AsyncCall<T>({}, { messageChannel: client, log: false, ...opt })
}
const impl2 = {
    *gen(...number: number[]) {
        yield* number
    },
}
export function createGeneratorServer<T extends object = typeof impl2>(
    opt: Omit<AsyncCallOptions, 'messageChannel'> = {},
    _: T = impl2 as any,
) {
    const { client, server } = createChannelPair()
    AsyncGeneratorCall(_, { messageChannel: server, log: false, ...opt })
    return AsyncGeneratorCall<T>({}, { messageChannel: client, log: false, ...opt })
}
test('', () => {})