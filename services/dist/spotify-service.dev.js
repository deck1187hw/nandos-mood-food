"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');

var _ = require('lodash');

var API_URL = "https://api.spotify.com/v1";

var Spotify = function Spotify(accessToken) {
  _classCallCheck(this, Spotify);

  this.accessToken = accessToken;
};

module.exports = Spotify;