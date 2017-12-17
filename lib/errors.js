'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on lipcore-p2p Module {0}'
};

module.exports = require('lipcore-lib').errors.extend(spec);
