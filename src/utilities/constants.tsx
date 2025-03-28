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
      content: `Setting up your SalesTarget account is quick and easy. Follow these steps to get started:`,
      features: [
        {
          title: 'Sign Up & Login',
          description: 'Visit SalesTarget and click Sign Up. Enter your email address and create a password. Verify your email to activate your account.'
        },
        {
          title: 'Configure Your Profile',
          description: 'Add your name, company details, and role. Set up your email signature for personalized outreach. Choose your timezone and preferences.'
        },
        {
          title: 'Connect Email Accounts',
          description: 'Link multiple email accounts for sending campaigns. Enable email warm-up to improve deliverability. Verify email settings and SPF, DKIM, and DMARC records.'
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
      id: '5', // Unique ID for routing
      title: 'Navigating the dashboard',
      updated: 'Updated over 8 months ago',
      content: `The SalesTarget dashboard provides an intuitive interface to manage your cold email campaigns efficiently. Here’s a breakdown of key sections:`,
      features: [
        {
          title: ' Dashboard Overview 📊',
          description: 'Get a quick summary of campaign performance, email deliverability, and lead status. Track key metrics like open rates, reply rates, and bounce rates.'
        },
        {
          title: ' Email Campaigns 📩',
          description: 'Create, edit, and manage cold email sequences. Use the AI sequence generator for personalized email copy. Monitor campaign performance in real-time.'
        },
        {
          title: 'Settings & Integrations ⚙️',
          description: 'Connect multiple email accounts for sending. Configure integrations with CRM, Zapier, or webhooks. Adjust user permissions and manage billing details.'
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
      id: '6', // Unique ID for routing
      title: 'First steps with campaigns',
      updated: 'Updated over 8 months ago',
      content: `Starting your first cold email campaign with SalesTarget is simple. Follow these steps to set up and launch your outreach successfully.`,
      features: [
        {
          title: ' Create a Campaign 📝',
          description: 'Click "New Campaign" and name it appropriately. Select email accounts for sending. Set sending limits to avoid spam detection.'
        },
        {
          title: 'Craft Your Email Sequence ✉️',
          description: 'Use AI Sequence Generator for high-converting templates. Personalize emails with dynamic variables ({first_name}, {company}). Set up follow-ups to increase engagement.'
        },
        {
          title: 'Launch & Monitor 📊',
          description: 'Start the campaign and track performance (open, click, reply rates). Use AI Inbox Manager for automated replies. Adjust messaging and audience based on analytics.'
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
      id: '7', // Unique ID for routing
      title: 'Api Connection',
      updated: 'Updated over 8 months ago',
      content: `SalesTarget allows seamless API integration to automate lead management, campaign creation, and email tracking. Here’s how to connect via API:`,
      features: [
        {
          title: 'Generate API Key 🔑',
          description: 'Go to Settings > API Access. Click "Generate API Key" and copy it. Store it securely, as it provides access to your account.'
        },
        {
          title: ' Common API Endpoints 🌐',
          description: 'Fetch Leads: GET /leads, Add New Lead: POST /leads, Create Campaign: POST /campaigns, Check Campaign Status: GET /campaigns/{id}, Send Test Email: POST /emails/test.'
        },
        {
          title: 'Integrate with CRM & Other Tools 🔄',
          description: 'Sync SalesTarget with HubSpot, Zapier, or custom CRMs via API. Automate lead transfers and follow-ups.'
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
      id: '8', // Unique ID for routing
      title: 'Data processing pipelines',
      updated: 'Updated over 8 months ago',
      content: `SalesTarget uses data processing pipelines to handle, filter, and enrich lead data efficiently. These pipelines ensure accurate targeting, high email deliverability, and seamless automation.`,
      features: [
        {
          title: 'Data Ingestion 📥',
          description: 'Import lead data from CSV files, CRM systems, or Lead Explorer. API integration allows real-time lead collection.'
        },
        {
          title: ' Campaign Execution 🚀',
          description: 'Assigns verified leads to specific email sequences. Ensures throttled sending to prevent spam flags. Uses AI-generated personalization for better engagement.'
        },
        {
          title: ' Data Storage & Security 🔐',
          description: 'GDPR-compliant lead data handling. Secure encryption for all stored information. API/Webhook support for seamless CRM synchronization.'
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
      id: '9', // Unique ID for routing
      title: 'Security best practices',
      updated: 'Updated over 8 months ago',
      content: `Ensuring data security in SalesTarget is crucial for protecting sensitive lead information and maintaining compliance. Follow these best practices to safeguard your account and campaigns.`,
      features: [
        {
          title: 'Account Security 🔑',
          description: 'Use Strong Passwords – Combine uppercase, lowercase, numbers, and symbols. Enable Two-Factor Authentication (2FA) – Adds an extra layer of security. Limit User Permissions – Only grant access based on roles.'
        },
        {
          title: ' API Security 🔗',
          description: 'Keep API Keys Private – Never expose them in public repositories. Use HTTPS for API Requests – Ensures encrypted communication. Rotate API Keys Regularly – Prevents unauthorized access.'
        },
        {
          title: ' Preventing Phishing & Social Engineering 🛡️',
          description: 'Verify Email Sources – Avoid clicking on unknown links. Educate Team Members – Train them on recognizing security threats. Report Suspicious Activity – Contact support if you notice anomalies.'
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
      title: 'Researching Leads?',
      updated: 'Updated over 8 months ago',
      content: `Before launching your campaigns, verify your leads to avoid high bounce rates, which can harm your sender's reputation. Emails sent to non-existent addresses get permanently bounced, so removing them is crucial for better deliverability.`,
      features: [
        {
          title: 'Bulk Verification',
          description: 'When uploading a CSV file, check "Verify leads" before clicking Upload All.'
        },
        {
          title: 'Individual Verification',
          description: 'Select leads from the Leads Tab and click "Verify Leads" in the top right corner.'
        },
        {
          title: 'Unlimited Warmup',
          description: 'With the largest warmup pool on the market, salestarget ensures your emails never land in spam.'
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
      id: '12', // Unique ID for routing
      title: 'Searching Leads?',
      updated: 'Updated over 8 months ago',
      content: `Lead searching is the process of identifying and qualifying potential customers for outreach. A good lead searching platform provides accurate, verified data, advanced filtering, CRM integration, and automation tools to enhance efficiency.`,
      features: [
        {
          title: 'How accurate is the lead data?',
          description: 'The platform should offer real-time verification, email validation, and up-to-date company details to minimize bounces.'
        },
        {
          title: 'Does it allow advanced filtering?',
          description: 'A good platform should enable searches by industry, company size, location, job title, revenue, and other key parameters for precision targeting.'
        },
        {
          title: 'What are the compliance and data protection measures?',
          description: 'GDPR and CCPA compliance, along with opt-in email lists, ensure legal and ethical outreach.'
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
  ];

  export default mockArticles;