import { JSONSerialization, NoSerialization } from '../src/index.js'
import { withSnapshotDefault } from './utils/test.js'
import { BSON_Serialization } from '../utils-src/node/bson.js'
import { expect, it } from 'vitest'

it(
    'json',
    withSnapshotDefault('serialization-json-default', async (f) => {
        const server = f({ opts: { serializer: JSONSerialization() } })
        expect(await server.undefined()).toMatchInlineSnapshot(`null`)
    }),
)

it(
    'json with keep undefined',
    withSnapshotDefault('serialization-json-keep-undefined', async (f) => {
        const server = f({ opts: { serializer: JSONSerialization(undefined, undefined, 'keep') } })
        expect(await server.undefined()).toMatchInlineSnapshot(`undefined`)
    }),
)

it(
    'json with no keep',
    withSnapshotDefault('serialization-json-no-keep', async (f) => {
        const server = f({ opts: { serializer: JSONSerialization(undefined, undefined, false) } })
        expect(await server.undefined()).toMatchInlineSnapshot(`undefined`)
    }),
)

it(
    'bson',
    withSnapshotDefault('serialization-bson', async (f) => {
        const server = f({ opts: { serializer: BSON_Serialization(require('bson')) } })
        expect(await server.add(1, 2)).toMatchInlineSnapshot(`3`)
        expect(await server.undefined()).toMatchInlineSnapshot(`undefined`)
        await expect(server.throws()).rejects.toThrowErrorMatchingInlineSnapshot(`"impl error"`)
    }),
)

it(
    'no-serialization',
    withSnapshotDefault('serialization-no-serialization', async (f) => {
        const server = f({ opts: { serializer: NoSerialization } })
        expect(await server.add(1, 2)).toMatchInlineSnapshot(`3`)
        expect(await server.undefined()).toMatchInlineSnapshot(`undefined`)
        await expect(server.throws()).rejects.toThrowErrorMatchingInlineSnapshot(`"impl error"`)
    }),
)
