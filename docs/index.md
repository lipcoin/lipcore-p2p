# Peer-to-Peer
The `lipcore-p2p` module provides peer-to-peer networking capabilities for [Lipcore](https://github.com/lipcoin/lipcore), and includes [Peer](peer.md) and [Pool](pool.md) classes. A [Message](messages.md) class is also exposed, in addition to [several types of messages](messages.md). Pool will maintain connection to several peers, Peers represents a node in the lipcoin network, and Message represents data sent to and from a Peer. For detailed technical information about the lipcoin protocol, please visit the [Protocol Specification](https://en.bitcoin.it/wiki/Protocol_specification) on the Lipcoin Wiki.

## Installation
Peer-to-peer is implemented as a separate module.

For node projects:

```bash
npm install lipcore-p2p --save
```

## Quick Start

```javascript
var Peer = require('lipcore-p2p').Peer;
var peer = new Peer({host: '167.114.174.71'});

// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});

peer.connect();
```
