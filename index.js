'use strict';
var config = require('./config/config');
var DocuSign = require('./src/DocuSign');
var templateBody = require('./post-json/templateBody.js');
var envelopeRequest = require('./post-json/envelopeBody.js');

var config = {
  email:  config.DOCUSIGN_USERNAME,
  password: config.DOCUSIGN_PASSWORD,
  key: config.DOCUSIGN_INTEGRATORKEY
};

// Authenticate API and create Template
var docuSign = new DocuSign(config);
    
    docuSign.login()
      .then(function (response) {
        console.log(response);
        docuSign.CreateTemplate(response.accountId, templateBody)
		  .then(function (response) {
		       console.log(response);
		   }).catch(function(err){
		      	console.log(err);
     	});
  });

// Authenticate API and create envelope
    docuSign.login()
      .then(function (response) {    
         docuSign.CreateEnvelope(response.accountId, envelopeRequest)
      .then(function (response) {
       		console.log(response);
      }).catch(function(err){
  	     console.log(err);
     });
  });

module.exports = DocuSign;

