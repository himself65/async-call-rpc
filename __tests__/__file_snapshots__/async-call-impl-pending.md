# Timeline

## T=0 Log: testRunner/log

```php
Array [
    "Request should not resolve before this line",
]
```

## T=1 Message: client => server

```php
Object {
    "id": 0,
    "jsonrpc": "2.0",
    "method": "add",
    "params": Array [
        1,
        2,
    ],
}
```

## T=2 Log: server/log

```php
Array [
    "rpc.%cadd%c(%o, %o%c)
%o %c@0",
    "color: #d2c057",
    "",
    1,
    2,
    "",
    Promise {},
    "color: gray; font-style: italic;",
]
```

## T=3 Message: server => client

```php
Object {
    "id": 0,
    "jsonrpc": "2.0",
    "result": 3,
}
```
