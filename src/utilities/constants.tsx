const mockArticles = [
    {
      id: '1',
      title: 'What is SalesTarget?',
      updated: 'Updated over 8 months ago',
      content: `Salestarget is a cold email software that offers various features tailored to enhance outreach campaigns.`,
      features: [
        {
          title: 'Unlimited Email Accounts',
          description: 'You may connect as many email accounts as you need.'
        },
        {
          title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
          description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        },
        {
          title: 'Unlimited Warmup',
          description: 'With the largest warmup pool on the market, salestarget ensures your emails never land in spam.'
        }
      ],
      accounts:[
        {
        title:"How to connect Google Accounts?",
        description:"If you want to connect your Google Account, you may check this article to learn the process."
      }
      ],
      msaccounts:[
        {
        title:"How to connect an email account that is not Google or Microsoft?",
        description:"If you want to connect an email account that is not a Google or Microsoft account, you should use the IMAP/SMTP option and follow the steps in this article."
      }
      ],
      imap:[
        {
        title:"What to do if you are not able to connect IMAP?",
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Instantly's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
      }
      ],

      faq:[
        {
        title:" Am I able to connect aliases with salestarget?",
        description:"There is no option to add alias email accounts to salestarget."
      }
      ]
    },
    {
      id: '2', // Unique ID for routing
      title: 'Quick Start Guide?',
      updated: 'Updated over 8 months ago',
      content: `salestarget is a cold email software that offers various features tailored to enhance outreach campaigns. 
                It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
      features: [
        {
          title: 'Unlimited Email Accounts',
          description: 'You may connect as many email accounts as you need.'
        },
        {
          title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
          description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        },
        {
          title: 'Unlimited Warmup',
          description: 'With the largest warmup pool on the market, salestarget ensures your emails never land in spam.'
        }
      ],
      accounts:[
        {
        title:"How to connect Google Accounts?",
        description:"If you want to connect your Google Account, you may check this article to learn the process."
      }
      ],
      msaccounts:[
        {
        title:"How to connect an email account that is not Google or Microsoft?",
        description:"If you want to connect an email account that is not a Google or Microsoft account, you should use the IMAP/SMTP option and follow the steps in this article."
      }
      ],
      imap:[
        {
        title:"What to do if you are not able to connect IMAP?",
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Instantly's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
      }
      ],

      faq:[
        {
        title:" Am I able to connect aliases with salestarget?",
        description:"There is no option to add alias email accounts to salestarget."
      }
      ]
    },
    {
      id: '3', // Unique ID for routing
      title: 'Backend Infrastructure?',
      updated: 'Updated over 8 months ago',
      content: `Infrastructure is a cold email software that offers various features tailored to enhance outreach campaigns. 
                It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
      features: [
        {
          title: 'Unlimited Email Accounts',
          description: 'You may connect as many email accounts as you need.'
        },
        {
          title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
          description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        },
        {
          title: 'Unlimited Warmup',
          description: 'With the largest warmup pool on the market, salestarget ensures your emails never land in spam.'
        }
      ],
      accounts:[
        {
        title:"How to connect Google Accounts?",
        description:"If you want to connect your Google Account, you may check this article to learn the process."
      }
      ],
      msaccounts:[
        {
        title:"How to connect an email account that is not Google or Microsoft?",
        description:"If you want to connect an email account that is not a Google or Microsoft account, you should use the IMAP/SMTP option and follow the steps in this article."
      }
      ],
      imap:[
        {
        title:"What to do if you are not able to connect IMAP?",
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Instantly's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
      }
      ],

      faq:[
        {
        title:" Am I able to connect aliases with salestarget?",
        description:"There is no option to add alias email accounts to salestarget."
      }
      ]
    },
    {
      id: '4', // Unique ID for routing
      title: 'Quick Start Guide?',
      updated: 'Updated over 8 months ago',
      content: `Salestarget is a cold email software that offers various features tailored to enhance outreach campaigns. 
                It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
      features: [
        {
          title: 'Unlimited Email Accounts',
          description: 'You may connect as many email accounts as you need.'
        },
        {
          title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
          description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        },
        {
          title: 'Unlimited Warmup',
          description: 'With the largest warmup pool on the market, salestarget ensures your emails never land in spam.'
        }
      ],
      accounts:[
        {
        title:"How to connect Google Accounts?",
        description:"If you want to connect your Google Account, you may check this article to learn the process."
      }
      ],
      msaccounts:[
        {
        title:"How to connect an email account that is not Google or Microsoft?",
        description:"If you want to connect an email account that is not a Google or Microsoft account, you should use the IMAP/SMTP option and follow the steps in this article."
      }
      ],
      imap:[
        {
        title:"What to do if you are not able to connect IMAP?",
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Instantly's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
      }
      ],

      faq:[
        {
        title:" Am I able to connect aliases with salestarget?",
        description:"There is no option to add alias email accounts to salestarget."
      }
      ]
    },
    {
      id: '5', // Unique ID for routing
      title: 'Quick Start Guide?',
      updated: 'Updated over 8 months ago',
      content: `Salestarget is a cold email software that offers various features tailored to enhance outreach campaigns. 
                It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
      features: [
        {
          title: 'Unlimited Email Accounts',
          description: 'You may connect as many email accounts as you need.'
        },
        {
          title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
          description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        },
        {
          title: 'Unlimited Warmup',
          description: 'With the largest warmup pool on the market, salestarget ensures your emails never land in spam.'
        }
      ],
      accounts:[
        {
        title:"How to connect Google Accounts?",
        description:"If you want to connect your Google Account, you may check this article to learn the process."
      }
      ],
      msaccounts:[
        {
        title:"How to connect an email account that is not Google or Microsoft?",
        description:"If you want to connect an email account that is not a Google or Microsoft account, you should use the IMAP/SMTP option and follow the steps in this article."
      }
      ],
      imap:[
        {
        title:"What to do if you are not able to connect IMAP?",
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Instantly's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
      }
      ],

      faq:[
        {
        title:" Am I able to connect aliases with salestarget?",
        description:"There is no option to add alias email accounts to salestarget."
      }
      ]
    },
    {
      id: '6', // Unique ID for routing
      title: 'Quick Start Guide?',
      updated: 'Updated over 8 months ago',
      content: `Salestarget is a cold email software that offers various features tailored to enhance outreach campaigns. 
                It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
      features: [
        {
          title: 'Unlimited Email Accounts',
          description: 'You may connect as many email accounts as you need.'
        },
        {
          title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
          description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        },
        {
          title: 'Unlimited Warmup',
          description: 'With the largest warmup pool on the market, salestarget ensures your emails never land in spam.'
        }
      ],
      accounts:[
        {
        title:"How to connect Google Accounts?",
        description:"If you want to connect your Google Account, you may check this article to learn the process."
      }
      ],
      msaccounts:[
        {
        title:"How to connect an email account that is not Google or Microsoft?",
        description:"If you want to connect an email account that is not a Google or Microsoft account, you should use the IMAP/SMTP option and follow the steps in this article."
      }
      ],
      imap:[
        {
        title:"What to do if you are not able to connect IMAP?",
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Instantly's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
      }
      ],

      faq:[
        {
        title:" Am I able to connect aliases with salestarget?",
        description:"There is no option to add alias email accounts to salestarget."
      }
      ]
    },
    {
      id: '7', // Unique ID for routing
      title: 'Quick Start Guide?',
      updated: 'Updated over 8 months ago',
      content: `Salestarget is a cold email software that offers various features tailored to enhance outreach campaigns. 
                It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
      features: [
        {
          title: 'Unlimited Email Accounts',
          description: 'You may connect as many email accounts as you need.'
        },
        {
          title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
          description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        },
        {
          title: 'Unlimited Warmup',
          description: 'With the largest warmup pool on the market, salestarget ensures your emails never land in spam.'
        }
      ],
      accounts:[
        {
        title:"How to connect Google Accounts?",
        description:"If you want to connect your Google Account, you may check this article to learn the process."
      }
      ],
      msaccounts:[
        {
        title:"How to connect an email account that is not Google or Microsoft?",
        description:"If you want to connect an email account that is not a Google or Microsoft account, you should use the IMAP/SMTP option and follow the steps in this article."
      }
      ],
      imap:[
        {
        title:"What to do if you are not able to connect IMAP?",
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Instantly's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
      }
      ],

      faq:[
        {
        title:" Am I able to connect aliases with salestarget?",
        description:"There is no option to add alias email accounts to salestarget."
      }
      ]
    },
    {
      id: '8', // Unique ID for routing
      title: 'Quick Start Guide?',
      updated: 'Updated over 8 months ago',
      content: `Salestarget is a cold email software that offers various features tailored to enhance outreach campaigns. 
                It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
      features: [
        {
          title: 'Unlimited Email Accounts',
          description: 'You may connect as many email accounts as you need.'
        },
        {
          title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
          description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        },
        {
          title: 'Unlimited Warmup',
          description: 'With the largest warmup pool on the market, salestarget ensures your emails never land in spam.'
        }
      ],
      accounts:[
        {
        title:"How to connect Google Accounts?",
        description:"If you want to connect your Google Account, you may check this article to learn the process."
      }
      ],
      msaccounts:[
        {
        title:"How to connect an email account that is not Google or Microsoft?",
        description:"If you want to connect an email account that is not a Google or Microsoft account, you should use the IMAP/SMTP option and follow the steps in this article."
      }
      ],
      imap:[
        {
        title:"What to do if you are not able to connect IMAP?",
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Instantly's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
      }
      ],

      faq:[
        {
        title:" Am I able to connect aliases with salestarget?",
        description:"There is no option to add alias email accounts to salestarget."
      }
      ]
    },
    {
      id: '9', // Unique ID for routing
      title: 'Quick Start Guide?',
      updated: 'Updated over 8 months ago',
      content: `Salestarget is a cold email software that offers various features tailored to enhance outreach campaigns. 
                It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
      features: [
        {
          title: 'Unlimited Email Accounts',
          description: 'You may connect as many email accounts as you need.'
        },
        {
          title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
          description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        },
        {
          title: 'Unlimited Warmup',
          description: 'With the largest warmup pool on the market, salestarget ensures your emails never land in spam.'
        }
      ],
      accounts:[
        {
        title:"How to connect Google Accounts?",
        description:"If you want to connect your Google Account, you may check this article to learn the process."
      }
      ],
      msaccounts:[
        {
        title:"How to connect an email account that is not Google or Microsoft?",
        description:"If you want to connect an email account that is not a Google or Microsoft account, you should use the IMAP/SMTP option and follow the steps in this article."
      }
      ],
      imap:[
        {
        title:"What to do if you are not able to connect IMAP?",
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Instantly's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
      }
      ],

      faq:[
        {
        title:" Am I able to connect aliases with salestarget?",
        description:"There is no option to add alias email accounts to salestarget."
      }
      ]
    },
  ];

  export default mockArticles;