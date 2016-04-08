'use strict';

function addRequestHeaders(config) {
  // JSON formatted authentication header (XML format allowed as well)
  var dsAuthHeader = JSON.stringify({
    'Username': "maheshmeka16@gmail.com ",
    'Password': 'JOHNGALT123$',
    'IntegratorKey': 'UMAD-be58b730-4f93-4b28-87b0-85f7746d4310'
  });

  // DocuSign authorization header
  return {
    headers: {
      'X-DocuSign-Authentication': dsAuthHeader
    }
  };
}

module.exports = addRequestHeaders;
