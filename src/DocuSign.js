'use strict';

var request = require('request');
var endpoint = require('./endpoints');
var Helper = require('./helper/Helper');


function DocuSign(config, req) { 
  this.helper = new Helper(config, req || request);
}

DocuSign.prototype.login = function () {  
  return this.helper
    .get(endpoint.LOGIN_URL, '', 'GET')
    .then(function (response) {
      return response.loginAccounts[0];
    });
};

DocuSign.prototype.CreateTemplate = function (accountId, body) {
  return this.helper
    .get(endpoint.TEMPLATE_URL(accountId), body, 'POST')
    .then(function (response) {
      return response;
    });
};

DocuSign.prototype.CreateEnvelope = function (accountId, body) {  
  return this.helper
    .get(endpoint.ENVELOPE_URL(accountId), body, 'POST')  
    .then(function (response) {
      return response;
    });
};

DocuSign.prototype.GetRecipientView = function (accountId, envelopeId,recipientRequest) {
  var self = this;  
  return this.helper
    .get(endpoint.RECIPIENT_VIEW_URL(accountId, envelopeId), recipientRequest, 'POST')    
    .then(function (response) {       
        return response;
    });
};

module.exports = DocuSign;
