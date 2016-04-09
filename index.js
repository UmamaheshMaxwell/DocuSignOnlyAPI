'use strict';
var config = require('./config/config');
var DocuSign = require('./src/DocuSign');
var templateBody = require('./post-json/templateBody.js');
var envelopeRequest = require('./post-json/envelopeBody.js');
var recipientRequest = require('./post-json/recipientBody.js');

var config = {
  email:  config.DOCUSIGN_USERNAME,
  password: config.DOCUSIGN_PASSWORD,
  key: config.DOCUSIGN_INTEGRATORKEY
};

// Authenticate API 
var docuSign = new DocuSign(config);

    docuSign.login()
      .then(function (response) {
        console.log(response);
      })
      .catch(function(err){
            console.log(err);
      });

// Authenticate API and Create Template  
    docuSign.login()
      .then(function (response) {
         console.log(response);
         return docuSign.CreateTemplate(response.accountId, templateBody)
      }).then(function (response) {
		     console.log(response);
		  }).catch(function(err){
		      	console.log(err);
     	});


// Authenticate API and create envelope 
      docuSign.login()
        .then(function (response) {
          console.log(response);    
          return docuSign.CreateEnvelope(response.accountId, envelopeRequest)
         }).then(function (response) {
         		console.log(response);
         }).catch(function(err){
    	     console.log(err);
        });

 
 // Authenticate API, create envelope and get recipientView
    var accountId;
      docuSign.login()
        .then(function (response) { 
          accountId =  response.accountId;
          console.log(accountId);    
          return docuSign.CreateEnvelope(response.accountId, envelopeRequest);
        }).then(function (response) {
          console.log(accountId); 
          console.log(response.envelopeId); 
          return docuSign.GetRecipientView(accountId, response.envelopeId, recipientRequest);
        }).then(function (response) { 
           console.log(response);       
        }).catch(function(err){
          console.log(err);
      });
    

module.exports = DocuSign;

