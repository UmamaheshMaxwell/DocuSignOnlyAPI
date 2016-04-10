var body = {// Status should be 'created' stop E-mails
              envelopeTemplateDefinition: {   
                name: "Who is JohnGalt ?",
                shared: true,
                password: "sample string 4",
                newPassword: "sample string 5",
                description: "He believes in the power and glory of the human mind, and the right of the individual to use his/her mind solely for him/herself",
                lastModified: "04/04/2016",
                lastModifiedBy: {
                  userName: "sample string 1",
                  email: "sample string 2",
                  userId: "sample string 3",
                  userType: "sample string 4",
                  userStatus: "sample string 5",
                  uri: "sample string 6"
                },
                pageCount: "8",
                uri: "sample string 9",
                folderName: "sample string 10",
                folderId: "sample string 11",
                folderUri: "sample string 12",
                parentFolderUri: "sample string 13",
                owner: {}
              },

              recipients: {
                  signers: 
                  [
                    {
                      email: "maheshmeka16@gmail.com",
                      name: "Umamaheswararao Meka",
                      recipientId: "1",
                      defaultRecipient: "true",
                      tabs:{
                        textTabs:[
                              {
                                 "tabLabel":"primary|nameLast",
                                 "value":"Umamaheswararao"
                              },
                              {
                                 "tabLabel":"primary|nameFirst",
                                 "value":"Meka"
                              },
                              {
                                 "tabLabel":"primary|dob",
                                 "value":"04/16/1982"
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
                          radioGroupTabs:[
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
              },

              documents: [
                        {
                          documentId: "12345",                         
                          //remoteUrl: '../Forms/MasterForm.pdf',
                          name: "Forms/MasterForm.pdf",
                          // //password: sample string 5,
                          transformPdfFields: true,
                          status : "created",
                          fileExtension: "pdf",
                          matchBoxes: [
                            {
                              pageNumber: "1",
                              xPosition: "2",
                              yPosition: "3",
                              width: "4",
                              height: "5"
                            }
                          ],
                          order: "sample string 8",
                          pages: "sample string 9",
                          documentFields: [
                            {
                              name: "sample string 1",
                              value: "sample string 2"
                            }
                          ],
                          encryptedWithKeyManager: "sample string 10",
                         // documentBase64: sample string 11,
                          applyAnchorTabs: true
                        }
                      ],
            }

 module.exports = body;           