var envelopeRequest = {
      emailSubject: 'Maxwell Envelope Document',
      documents: [
        {
          name: 'Forms/MasterForm.pdf',
          documentId: 1
        },
        {
          name: 'Forms/TextTags_Example.pdf',
          documentId: 2
        }
      ],
      recipients: {
        signers: [
          {
            email: 'maheshmeka16@gmail.com',
            name: 'Umamaheswararao Meka',
            recipientId: 1,
            tabs: {
              signHereTabs: [
                {
                  xPosition: '100',
                  yPosition: '100',
                  documentId: '1',
                  pageNumber: '1'
                },
                {
                  xPosition: '100',
                  yPosition: '600',
                  documentId: '2',
                  pageNumber: '1'
                }
              ]
            }
          }
        ]
      },
      status: 'created'
    }

 module.exports = envelopeRequest;  