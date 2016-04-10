// Status should be 'created' stop E-mails
var envelopeRequest = {
    "emailSubject": "Please sign this document...",
    "emailBlurb": "Sent from the DocuSign API",
    "status": "sent",
    "compositeTemplates": [
        {
            "inlineTemplates": [
                {
                    "sequence": "1",
                    "recipients": {
                        "signers": [
                            {
                               "email": "maheshmeka16@gmail.com",
                               "name": "Umamaheswararao Meka",
                               "recipientId": "1",
                               "defaultRecipient": "true",
                               "tabs":{
                                  "textTabs":[
                                        {
                                           "tabLabel":"primary|nameLast",
                                           "value":"Umamaheswararao"
                                        },
                                        {
                                           "tabLabel":"primary|nameFirst",
                                           "value":"Meka"
                                        },
                                        {
                                           "tabLabel":"primary|ssn", 
                                           "value":"1234-123-1234"
                                        },
                                        {
                                           "tabLabel":"primary|jobTitle",
                                           "value":"Tech Lead"
                                        },
                                        {
                                           "tabLabel":"employeeid",
                                           "value":"VLSP1246"
                                        },
                                        {
                                           "tabLabel":"birthplace",
                                           "value":"India"
                                        },
                                        {
                                           "tabLabel":"primary|addressCity",
                                           "value":"Bangalore"
                                        },
                                        {
                                           "tabLabel":"employer|businessName",
                                           "value":"Healthcare"
                                        },
                                        {
                                           "tabLabel":"family|dateHire",
                                           "value":"22/09/2014"
                                        },
                                        {
                                           "tabLabel":"employeeid",
                                           "value":"VLSP1246"
                                        }                                                                                                                                                                
                                     ],
                                   "radioGroupTabs":[
                                        {
                                           "groupName":"primary|gender",
                                           "radios":[
                                              {
                                                 "value":"male",
                                                 "selected":true
                                              }
                                           ],
                                         },

                                         {  
                                           "groupName":"uscitizen",
                                           "radios":[
                                              {
                                                 "value":"no",
                                                 "selected":true
                                              }
                                           ]
                                          },

                                          { 
                                           "groupName":"greencard",
                                           "radios":[
                                              {
                                                 "value":"no",
                                                 "selected":true
                                              }
                                           ]
                                          },

                                          {
                                           "groupName":"visa",
                                           "radios":[
                                              {
                                                 "value":"no",
                                                 "selected":true
                                              }
                                           ]
                                         }
                                     ]
                                  }                                
                            }
                        ]
                    }
                }
            ],
            "document": {
                "name": "Forms/MasterForm.pdf",
                "documentId": "1",
                "transformPdfFields": "true"
            }
        }
    ]
}

 module.exports = envelopeRequest;  