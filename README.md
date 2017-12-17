Lipcore P2P
=======

`lipcore-p2p` adds [Lipcoin protocol](https://en.bitcoin.it/wiki/Protocol_documentation) support for Lipcore.

See [the main lipcore repo](https://github.com/lipcoin/lipcore) for more information.

## Getting Started

```sh
npm install lipcore-p2p
```
In order to connect to the Lipcoin network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('lipcore-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [lipcore guide](http://lipcore.co/guide/peer.html) on the usage of the `Peer` class.

## Contributing

See [CONTRIBUTING.md](https://github.com/lipcoin/lipcore/blob/master/CONTRIBUTING.md) on the main lipcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/lipcoin/lipcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 The Litecore Core Developers
Copyright 2017 The Lipcoin Core Developers