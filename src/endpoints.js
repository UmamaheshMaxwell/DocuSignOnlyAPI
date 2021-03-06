'use strict';
var config = require('../config/config.js')

var endpoint = {

    // Gets the login information
  LOGIN_URL : config.DOCUSIGN_BASEURL + '/login_information',

  //Creates the template
  TEMPLATE_URL : function(accountId) {
  	return config.DOCUSIGN_BASEURL + '/accounts/'+ accountId + '/templates';
  },

  // Creates envelope
  ENVELOPE_URL: function(accountId) {
  	return config.DOCUSIGN_BASEURL + '/accounts/'+ accountId + '/envelopes';
  },

  RECIPIENT_VIEW_URL: function (accountId, envelopeId) {
    return config.DOCUSIGN_BASEURL + '/accounts/'+ accountId +'/envelopes' + '/' + envelopeId + '/views/recipient';
  }
};

module.exports = endpoint;
