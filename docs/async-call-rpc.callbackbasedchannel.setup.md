<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [async-call-rpc](./async-call-rpc.md) &gt; [CallbackBasedChannel](./async-call-rpc.callbackbasedchannel.md) &gt; [setup](./async-call-rpc.callbackbasedchannel.setup.md)

## CallbackBasedChannel.setup() method

Setup the CallbackBasedChannel.

**Signature:**

```typescript
setup(
        jsonRPCHandlerCallback: (jsonRPCPayload: unknown) => Promise<unknown | undefined>,
        isValidJSONRPCPayload: (data: unknown) => boolean | Promise<boolean>,
    ): (() => void) | void
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  jsonRPCHandlerCallback | (jsonRPCPayload: unknown) =&gt; Promise&lt;unknown \| undefined&gt; | A function that will execute the JSON RPC request then give the result back. If the result is undefined, it means no response is created. |
|  isValidJSONRPCPayload | (data: unknown) =&gt; boolean \| Promise&lt;boolean&gt; |  |

**Returns:**

(() =&gt; void) \| void

a function that unregister the setup.

