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
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      updated: 'Check this article to get setup with salestarget in just a few short minutes.',
      content: `salestarget is a cold email software that offers various features tailored to enhance outreach campaigns. 
                It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
      features: [
        {
          title: 'How to connect your accounts',
          description: 'Sometimes setup of the account can be challenging, that\'s why we prepared a step-by-step guide to make it easier for our users.'
        },
        {
          title: ' -->Connect Your Google Account with OAuth Method',
          description: 'Connecting your Google Workspace account to salestarget using OAuth authentication allows seamless access and integration between the two platforms. Follow these step-by-step instructions to set up OAuth access in your Google Workspace account and connect it with salestarget. '
        },
        // {
        //   title: 'Unlimited Warmup',
        //   description: 'With the largest warmup pool on the market, salestarget ensures your emails never land in spam.'
        // }
      ],
      // accounts:[
      //   {
      //   title:"How to connect Google Accounts?",
      //   description:"If you want to connect your Google Account, you may check this article to learn the process."
      // }
      // ],
      // msaccounts:[
      //   {
      //   title:"How to connect an email account that is not Google or Microsoft?",
      //   description:"If you want to connect an email account that is not a Google or Microsoft account, you should use the IMAP/SMTP option and follow the steps in this article."
      // }
      // ],
      // imap:[
      //   {
      //   title:"What to do if you are not able to connect IMAP?",
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
      // }
      // ],

      // faq:[
      //   {
      //   title:" Am I able to connect aliases with salestarget?",
      //   description:"There is no option to add alias email accounts to salestarget."
      // }
      // ]
    },
    {
      id: '3', // Unique ID for routing
      title: 'Rotating IP\'s and sending algorithms in the cold email space = high deliverability?',
      updated: 'Updated over 8 months ago',
      content: `At Salestarget.ai we maintain a dynamic pool of hundreds of proxy IPs that are continuously rotated based on key metrics, including usage volume and account reputation.`,
      features: [
        {
          title: 'Challenges with Conventional IP Rotation:',
          description: 'Traditional IP rotation practices often result in the loss of good reputation IPs or delay in removing blacklisted IPs, leading to potential delivery problems and reputation damage. Other cold email tools out there only have a handful of IPs, don\'t monitor blacklists, don\'t rotate IPs, are all STATIC, etc.'
        },
        {
          title: 'Unique Features of Salestarget.ai:',
          description: 'Unlike many cold email tools that rely on static IPs and lack blacklist monitoring or rotation capabilities, salestarget.ai offers:\n A vast pool of rotating proxy IPs. \n Constant monitoring and proactive management of IP reputation. \n Location Independence: Using salestarget.ai from different locations does not impact deliverability because our rotating proxy IPs, not user IP addresses, interact directly with email servers.'
        },
        // {
        //   title: 'Unlimited Warmup',
        //   description: 'With the largest warmup pool on the market, salestarget ensures your emails never land in spam.'
        // }
      ],
      // accounts:[
      //   {
      //   title:"How to connect Google Accounts?",
      //   description:"If you want to connect your Google Account, you may check this article to learn the process."
      // }
      // ],
      // msaccounts:[
      //   {
      //   title:"How to connect an email account that is not Google or Microsoft?",
      //   description:"If you want to connect an email account that is not a Google or Microsoft account, you should use the IMAP/SMTP option and follow the steps in this article."
      // }
      // ],
      // imap:[
      //   {
      //   title:"What to do if you are not able to connect IMAP?",
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
      // }
      // ],

      // faq:[
      //   {
      //   title:" Am I able to connect aliases with salestarget?",
      //   description:"There is no option to add alias email accounts to salestarget."
      // }
      // ]
    },
    {
      id: '4', // Unique ID for routing
      title: 'Setting up your account',
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
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '10', // Unique ID for routing
      title: 'What is LeadExplorer?',
      updated: 'Updated over 8 months ago',
      content: `Lead Explorer in a cold email platform helps identify and qualify potential leads by leveraging a B2B lead database. It allows users to filter prospects based on industry, company size, job role, and other criteria, ensuring targeted outreach for higher conversion rates.`,
      features: [
        {
          title: 'Advanced Lead Filtering ',
          description: 'Sort leads by industry, company size, job role, and location.'
        },
        {
          title: 'Verified Contact Data',
          description: 'Access accurate emails and direct contacts.'
        },
        {
          title: 'Real-Time Lead Updates',
          description: 'Get the latest lead insights and changes.'
        }
      ],
      // accounts:[
      //   {
      //   title:"How to connect Google Accounts?",
      //   description:"If you want to connect your Google Account, you may check this article to learn the process."
      // }
      // ],
      // msaccounts:[
      //   {
      //   title:"How to connect an email account that is not Google or Microsoft?",
      //   description:"If you want to connect an email account that is not a Google or Microsoft account, you should use the IMAP/SMTP option and follow the steps in this article."
      // }
      // ],
      // imap:[
      //   {
      //   title:"What to do if you are not able to connect IMAP?",
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
      // }
      // ],

      // faq:[
      //   {
      //   title:" Am I able to connect aliases with salestarget?",
      //   description:"There is no option to add alias email accounts to salestarget."
      // }
      // ]
    },
    {
      id: '11', // Unique ID for routing
      title: 'What is LeadExplorer?',
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
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '12', // Unique ID for routing
      title: 'What is LeadExplorer?',
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
        description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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