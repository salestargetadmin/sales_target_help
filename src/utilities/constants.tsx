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
    {
      id: '13',
      title: 'Transferring domains from one email provider to another',
      updated: 'Updated over 8 months ago',
      content: `To move your domain from one email service provider to another, there are several important steps that need to be followed. This guide will walk you through the process in how to transfer domains from one email provider to another. You can watch the video walkthrough by clicking here.`,
      features: [
        {
          title: 'Step 1: Cancel Subscription with Old Email Service Provider',
          description: 'The first step in the migration process is to cancel the subscription with your old email service provider. This is to ensure that there are no conflicts when you try to add the domain to the new email service provider.'
        },
        {
          title: 'Step 2: Delete DNS Records',
          description: "This is a crucial step. Before adding the domain to the new email service provider, you will need to delete all old email provider's DNS records in the domain's DNS zone. This includes MX records, SPF, DKIM, and any verification DNS records that may exist. Here are the steps on how to delete DNS Records.Log into the platform where your domain is registered (e.g., GoDaddy, Bluehost, etc.). In this example, we will use GoDaddy.Navigate to the DNS management section. This might be called DNS Zone or something similar depending on your domain registrar.Find the DNS records of the domain you are trying to migrate and view all records.Select and delete the verification record (if any)Delete the MX records.Delete the SPF record. If you encounter an error, try editing the SPF record, delete the value part and click save. Then, try deleting it again.Delete the DKIM record."
        },
        {
          title: 'Step 3: Add Domain to New Email Service Provider',
          description: "Now that you have deleted the necessary DNS records, it's time to add your domain to your new email service provider. Here are the steps on how to add a domain to the new email service provider.Log in to your new email service provider's workspace.Navigate to the section where you can add a domain. This might be under settings or domain management.Enter your domain name and follow the on-screen instructions to complete the addition process."
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '14',
      title: 'Setting up Reply-to email address',
      updated: 'Updated over 8 months ago',
      content: `You can set up a reply-to address when setting up the SMTP connection. This can be done if you'd like to send through a different email provider, and receive a response on a completely different inbox, or get all your salestarget replies to your business email. There are two ways you can set the reply-to email address. Both ways demand having your reply-to address connected to salestarget. Here are the two ways to set them up.`,
      features: [
        {
          title: '',
          description: 'Click on the email account you would like to enable the reply-to address for. Then navigate to the Settings section and set your reply-to address.'
        },
        {
          title: '',
          description: "Set the reply-to address when connecting an account through the IMAP/SMTP method by checking the 'Set reply-to' in the SMTP part."
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '15', 
      title: 'Checklist before campaign launch',
      updated: 'Updated over 8 months ago',
      content: `We understand that you want to do a full checklist before you proceed to do a campaign launch. Here are some of the checkers to test if they are set up correctly.`,
      features: [
        {
          title: '',
          description: 'For domains, you may use SPF and DKIM check. For email deliverability, try our inbox placement feature.'
        },
        // {
        //   title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
        //   description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        // },
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '16',
      title: 'Create a separate workspace and invite team members',
      updated: 'Updated over 8 months ago',
      content: `Workspaces are completely separate salestarget spaces and are primarily meant for agency customers who were using multiple salestarget login accounts to manage their end-customers. `,
      features: [
        {
          title: '',
          description: 'Now they can manage their customers (while keeping their data separate) within a single log-in account.'
        },
        {
          title: '',
          description: 'You no longer need to share the same login with your team members to access the account since they can have their own credentials. If a person is already an salestarget user, this workspace will be added to their list. If they are not using salestarget, they will be asked to create a new account.'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '17',
      title: 'Email Service Providers Matching',
      updated: 'Updated over 8 months ago',
      content: `Email Service Providers Matching is a feature that improves deliverability and helps people to get better results. 

 

With this feature. it will try to match the users sending inboxes with the recipient's inboxes (your Google accounts send emails to Google leads, Outlook accounts send emails to Outlook leads, etc). `,
      features: [
        {
          title: '',
          description: 'You can activate Email Service Provider Matching by following these steps:'
        },
        {
          title: '',
          description: 'Open the target campaign Go to the Campaign Options tab. Select Advanced Options -> Provider Matching. You can create custom ESP routing rule to select which ESP sends or does not send emails to which recipient ESPs.'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
      // }
      // ],

      faq:[
        {
        title:" What will happen if none of my mailboxes match my lead’s mailboxes?",
        description:"No worries, if none of your mailboxes match your prospect's mailboxes, the campaign will go out as normal."
      },
      {
        title:"What happens if only 1 inbox matches 80% of your leads’ inboxes (Google for example)",
        description:"If only 1 inbox matches 80% of your leads' inboxes, the campaign needs to wait for the 1 account to be available for 80% of the leads. As for the remaining 20%, even if there is no match, the campaign will work still as usual."
      },
      {
        title:"How can we make sure that the maximum number of new leads is still met, as we are not aware of the number of Google or Outlook boxes?",
        description:" It might impact the sending limit if the campaign waits for an account from a matched provider to become available."
      }
      ]
    },
    {
      id: '18',
      title: 'Why do I need DNS records?',
      updated: 'Updated over 8 months ago',
      content: `salestarget doesn't actually do any of the sending - we send the email information to the email provider of the sending accounts you've connected, which then sends your emails. So you will not need to add any SPF/DKIM records for salestarget, but you will need to add them for your email provider (ESP). Check your ESPs documentation and how to obtain these records.`,
      features: [
        {
          title: '',
          description: 'Our servers (IPs) send information like when the email needs to be sent, what it needs to look like (including styling, variables, spintax) + things like the open tracking code using your custom tracking subdomain. This information is sent to your connected sending account\'s mail servers, which then do the actual email sending.'
        },
        {
          title: '',
          description: ' You need to get email inboxes from email providers such as GSuite, Outlook, and others.'
        },
        {
          title: '',
          description: 'And that is also why users need to warm up their specific domains / sending accounts for 3-4 weeks minimum.'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '19',
      title: 'How to set up SPF and DKIM for cPanel email accounts',
      updated: 'Updated over 8 months ago',
      content: `Here are the instructions for the most popular cPanel email providers. If your accounts are created on a different provider's cPanel, the instructions could apply to your accounts too.`,
      features: [
        {
          title: 'BlueHost',
          description: 'SPF, DKIM'
        },
        {
          title: 'Hostgator',
          description: 'SPF and DKIM'
        },
        {
          title: 'TitanMail',
          description: 'SPF, DKIM'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '20',
      title: 'Ways to add a signature',
      updated: 'Updated over 8 months ago',
      content: `These are special variables that you will have to write down manually in the campaign editor. It essentially takes the value from the sending account's name, whatever value is set in the account's settings section. As the sending email accounts are rotated, their specific settings value are used.`,
      features: [
        {
          title: 'Add a signature using an image',
          description: 'Host and upload your image on Google Photos. Click Share and select Create link to get the shared link of the image.'
        },
        {
          title: 'Adding a signature using HTML',
          description: 'Get the HTML code. You may use some of the online signature generators to get the HTML code. Once you have the HTML code, paste it to the Sequence editors in the Code View.'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '21',
      title: 'How Warm-Up Works and Why it\'s Important 🤓',
      updated: 'Updated over 8 months ago',
      content: `Check this article to understand how you can use account warmup to increase deliverability chances and the reputation of your emails. 📈`,
      features: [
        {
          title: '',
          description: 'The warmup functionality mimics human conversations between email accounts.But in this case, your ‘friends’ are other salestarget.ai users who have also enabled the warmup feature. You can be sure that all of them will open your email and a high percentage will write you back with a ‘thoughtful’ and positive sentimentThe emails written by the salestarget AI algorithm signal to Google, Outlook, and other ESPs that your email account and sending domain are relevant and legitimate. This increases the likelihood that the messages that are sent to the cold leads in your outreach campaigns will also actually land in their inbox and subsequently be opened and replied to.The bottom line is that the warmup will improve the deliverability of your cold email accounts by mimicking human conversations in the salestarget.ai user pooWhen you connect a sending account to salestarget, warming up the accounts also warms up your SMTP sending server and IMAP servers as welOn top of the deliverability benefits, your outreach email accounts will also stay alive for longer and the likelihood of you ‘burning’ through an account is significantly lower.'

        },
        // {
        //   title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
        //   description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        // },
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '22',
      title: 'What is "read emulation" in Warmup',
      updated: 'Updated over 8 months ago',
      content: `Read Emulation is an advanced warmup feature that mimics reading warm-up emails like a real human. It sends signals to ESPs (the email provider) that your messages are relevant as they will be "read" by the email receiver which has a positive impact on the deliverability and reputation of your domains.`,
      features: [
      //   {
      //     title: 'Unlimited Email Accounts',
      //     description: 'You may connect as many email accounts as you need.'
      //   },
      //   {
      //     title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
      //     description: 'An outstanding feature that will save you countless hours on your campaign setup.'
      //   },
      //   {
      //     title: 'Unlimited Warmup',
      //     description: 'With the largest warmup pool on the market, salestarget ensures your emails never land in spam.'
      //   }
      // ],
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
      // }
      ],

      faq:[
        {
        title:"Do you recommend that I disable Read Emulation?",
        description:"We suggest that you always enable the Read Emulation feature unless you have been instructed otherwise.Also, the reason we gave an option to enable/disable this feature is that there are certain third-party SMTP providers who have their own tracking analytics system.In order to keep track of it, these providers insert a tracking pixel. That tracking pixel gets triggered when the Read Emulation feature is enabled and treats the email as a real email.So, for SMTP providers who don't want warmup emails to affect their tracking analytics, we gave them the option to disable the Read Emulation feature."
      }
      ]
    },
    {
      id: '23',
      title: 'Warmup filters - Google and Microsoft🚦',
      updated: 'Updated over 8 months ago',
      content: `Once you enable the warmup for your accounts, warmup emails will start to land in your Inbox and you can recognize them with the warmup tag.We only want to filter out emails that hit the inbox and NOT the spam inbox. Any email that hits the spam inbox, we automatically move back to the inbox.To keep your main inbox clean and filter out your warmup emails to a separate warmup folder, you can create warmup filters using the filter tag. `,
      features: [
        {
          title: 'How to create the warmup filter in Gmail?',
          description: 'Open the warmup settings for any of your accounts (the warmup tag is the same for all the accounts connected to a workspace). Copy the filter tag.Go into your email account and create a folder called "Warmup".In your email account, create a filter, and in "Subject" and "Has the words" use your warmup tag. Click "Create filter" for the settings to open.Choose these rules:Skip the Inbox (Archive it)Mark as readApply the label: WarmupAlso apply filter to matching conversations.Once you\'re done, click Create Filter.'
        },
        {
          title: 'How to create the warmup filter in Outlook?',
          description: 'If you use an Outlook account and you want to create the warmup filter, follow these steps.Open the warmup settings for any of your accounts (the warmup tag is the same for all the accounts connected to a workspace). Copy the filter tag.On your email, navigate to Rules.In the condition, select Rules or body includes.Enter the warmup tag.Add two actionsMark the email as read.Move to the salestarget Warmup folder. If this folder does not exist, create a new one.Click Save.To run this rule, click the triangle icon "Run this rule now" in the Rules sectio'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '24',
      title: 'How do I make sure my emails will get delivered? 📦',
      updated: 'Updated over 8 months ago',
      content: `Considering the security and privacy of the recipient's address, and for technical reasons, there can't be a system that accurately identifies which emails landed in the lead's inbox and which went to their spam folder.`,
      features: [
        {
          title: '',
          description: 'However, our Inbox Placement feature can check if your emails land in the inbox, promotions, or spam folders and gives detailed deliverability insights. It helps by automating placement tests, providing insights into blacklists, spam triggers, and email health, allowing you to optimize campaigns and improve deliverability while spending less time on manual tasks. In a nutshell, ultimately deliverability of the email accounts can only be speculated based on the following factors.Your own domain\'s reputation and how old it is.Reputation of email service provider\'s IP.Whether or not you are using SPF, DKIM AND DMARC.If there are any links/images that you have included - even the open tracking pixels can have an impact.You can also check your deliverability score (and if everything is set up correctly) by going by the following:Campaign - Sequence editorPreview emailCheck deliverability score'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '25',
      title: 'Scale Your Cold Email Campaigns With Secondary Sending Domains - The Strategy & How To Implement It',
      updated: 'Updated over 8 months ago',
      content: `Here is the strategy you may consider in creating a secondary domain to scale up your cold outreach, get more replies, and more revenue. Watch the video about scaling your cold email campaigns by clicking the link here. `,
      features: [
        {
          title: '',
          description: 'Buy domains that are similar to your main domain.'
        },
        {
          title: '',
          description: 'We’ve run an analysis recently on 32M cold emails and have seen worse performance (reply rate) with domain extensions such as biz, online etc. You may check this list to know the domains with the worst reputation.'
        },
        {
          title: '',
          description: 'Avoid hyphens and numbers, use letters only.'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '26',
      title: 'Cold Email Copywriting Framework We Use To Get 400+ Replies Monthly',
      updated: 'Updated over 8 months ago',
      content: `If you test enough targeting/messaging combos, you'll find 100% a combo that works or you'll find out there's no product-market fit. If you don't have product-market-fit and are testing out a new offer it's especially important to test out tons of angles.`,
      features: [
        {
          title: '',
          description: 'Instead of giving you 1 strategy, we\'re going to give you multiple different strategies so you will always have things to test.'
        },
        {
          title: '',
          description: 'For some offers, we found a working campaign after 3 tries, for others it took 3 months and 40 campaigns. You need to get into the habit of testing new things daily and weekly.'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '27',
      title: "What to do if your 'Open Rate' is low📉",
      updated: 'Updated over 8 months ago',
      content: `Tracking open rates is not always the ideal form to gauge the performance. The true KPI would be the positive replies rate. There are different opinions on whether you should keep open tracking enabled or will it increase the reply rate and perceived deliverability with open tracking disabled. The open tracking pixel could technically hurt deliverability, but it is difficult to gauge the extent of it.`,
      features: [
        {
          title: 'Email accounts not set up properly.',
          description: 'If you do not have SPF, DKIM, DMARC set up properly for your accounts that could negatively impact deliverability.'
        },
        {
          title: 'Bad subject lines.',
          description: 'If your subject line is generic, salesy, and not targeted, there\'s less chance people will open it.'
        },
        {
          title: 'Email account not warmed up enough or not using warm-up.',
          description: 'If you haven\'t warmed up your emails for at least 2-3 weeks before sending cold emails, you might see lower open rates. Your own domain\'s reputation and how old it is, along with the reputation of your sending accounts affect your deliverability.'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '28',
      title: 'Why do emails bounce?',
      updated: 'Updated over 8 months ago',
      content: `Email bounces means your email cannot be delivered to your recipient. Whenever that happens, you'll get a report back in your inbox with the details of the bounce. You may have noticed similar reports like the one below in your inbox. There are two categories of why emails bounce.`,
      features: [
        {
          title: 'Hard bounce',
          description: 'A hard bounce happens when the email address you\'re trying to send an email to is no longer valid or has never existed. '
        },
        {
          title: 'Soft Bounce',
          description: 'Soft bounces are less common and a bit trickier to troubleshoot. Soft bounces happen when the recipient\'s email is valid, but it cannot be delivered due to other reasons'
        },
        {
          title: '',
          description: 'In this case, the best course of action would be to stop your cold outreach and only let warmup run for a few weeks. After a few weeks, you can start sending cold emails again and monitor if there is any improvement in bounces. Also, consider lowering your overall cold outreach volume.'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '29',
      title: 'Why am I getting 100% open rate?💯',
      updated: 'Updated over 8 months ago',
      content: `If you go to Analytics and see a 100% open rate, here are the possible reasons you may check it out:`,
      features: [
        {
          title: '',
          description: 'If you have deleted leads from your campaign at any point, you could be seeing statistics for those deleted leads as well.'
        },
        {
          title: '',
          description: 'If you are viewing the analytics for only a specific date range (like a week), it reports the sent and opens within that specific time frame.'
        },
        {
          title: '',
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '30',
      title: 'CRM Import',
      updated: 'Updated over 8 months ago',
      content: `You can connect your CRM (Hubspot, Salesforce, and Pipedrive) to salestarget and import the leads to your campaigns or lists. In your CRM (Hubspot, Salesforce, and Pipedrive) you will need to create a List/Filter View with the leads that you want to import to salestarget.`,
      features: [
        {
          title: '',
          description: 'You can connect your CRM (Hubspot, Salesforce, and Pipedrive) to salestarget and import the leads to your campaigns or lists. In your CRM (Hubspot, Salesforce, and Pipedrive) you will need to create a List/Filter View with the leads that you want to import to salestarget.'
        },
        {
          title: '',
          description: 'Connecting Pipedrive, Connecting Hubspot, ​Connecting Salesforce'
        },
        {
          title: '',
          description: 'Once connected, follow the steps from these articles to import your leads to salestarget from your CRM:'
        },
        {
          title: '',
          description: 'Importing leads from Pipedrive, Importing leads from Hubspot, ​Importing leads from Salesforce'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '31',
      title: 'Slack integration',
      updated: 'Updated over 8 months ago',
      content: `Slack integration allows you to receive notifications in Slack when a specific event occurs.`,
      features: [
        {
          title: 'Unlimited Email Accounts',
          description: 'You may connect as many email accounts as you need.'
        },
        // {
        //   title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
        //   description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        // },
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '32',
      title: 'How to use Webhooks? 🕸🪝',
      updated: 'Updated over 8 months ago',
      content: `WebHooks are notifications sent over the Web and triggered whenever a certain event occurs. 

 

In this case, the event is a new campaign event in salestarget. As soon as an event occurs (such as emails being opened or replies arriving), a notification with the response data is immediately sent to the webhook URL which is set in the configuration panel.`,
      features: [
        {
          title: 'Available events',
          description: 'salestarget webhook notifications are sent via a POST request, while the request body (with response data) is in JSON format. salestarget users who understand how to handle webhooks will be able to take advantage of this advanced feature. Our team cannot troubleshoot your code or provide step-by-step development instructions.'
        },
        // {
        //   title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
        //   description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        // },
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '33',
      title: 'How To Create High-ROI Cold Email Campaigns by Scraping B2B Emails from Twitter (incl. Template)',
      updated: 'Updated over 8 months ago',
      content: `This method is great for ramping up your outreach campaign that is highly relevant to your target market. To create a high ROI Cold Email Campaign by scraping the B2B emails from Twitter, follow the procedures below.`,
      features: [
        {
          title: '',
          description: 'Log in to Twitter. Search for keywords that are related to the desired interest.'
        },
        {
          title: '',
          description: 'Look for an account with a high follower count and relevant to your target. Copy their link and navigate to Scrapybird. This tool is used to get leads from Twitter.'
        },
        {
          title: '',
          description: 'Verify the leads. Once finished verifying the leads, start uploading the leads to the campaign.'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '34',
      title: 'How to use Builtwith for lead mining',
      updated: 'Updated over 8 months ago',
      content: `Builtwith is a feature that builds lists based on what technologies certain companies are using. It shows which sites use shopping carts, analytics, hosting and many more. Filter by location, traffic, vertical, and more.

`,
      features: [
        {
          title: '',
          description: 'If you are an eCommerce solution provider, you should know which companies use technology similar to yours like Shopify, Magento, Pretashop, and etc. It can filter by location or a keyword that appears on the homepage of the website. '
        },
        {
          title: '',
          description: 'If you are a TikTok ad agency, search for TikTok tracking pixel trends to get the list of websites that track conversions from TikTok ads.'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '35',
      title: 'How to use Launch Gravity to extract leads',
      updated: 'Updated over 8 months ago',
      content: `Launch Gravity is a lead database that tracks new business creations and web activity over the month. It focuses on fundable startups and always a good idea to pitch a service or product to recently funded companies because they have money to spend and looking to reinvest in growth and utility.`,
      features: [
        {
          title: '',
          description: 'They also provide reports and data about Inc. 5000 (fastest-growing companies), Y combinator batches, and Companies founded by former Facebook employees. Having this type of fresh and segmented data also is a great way to do generic personalization/ice-breakers at scale, e.g. “Congrats on getting funding for {{companyName}}!”, “Congrats on your recent ProductHunt launch!”'
        },
        // {
        //   title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
        //   description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        // },
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '36',
      title: 'How to manage the Unibox & Best Practices on how to reply to leads',
      updated: 'Updated over 8 months ago',
      content: `Unibox is a built-in centralized master inbox where you get all the replies from your leads. It will show all the emails from your connected inboxes, sent by the leads that you contacted. 

 `,
      features: [
        {
          title: '',
          description: 'So instead of logging in to your email provider for each account, or setting up forwarding for each account to your main inbox, you can access all the emails in one place.'
        },
        {
          title: 'There are 8 default tabs in Unibox, you can add more by creating custom labels.',
          description: 'All emails, Interested, Meeting booked, Meeting complete, Closed, Out of Office, Wrong person,Not interested'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '37',
      title: 'Schedule a reply',
      updated: 'Updated over 8 months ago',
      content: `You can schedule a reply to be sent at a later time/date`,
      features: [
        {
          title: '',
          description: 'Scheduling a reply involves setting a specific time for a message or response to be sent. This can be done in various communication platforms, such as email clients, messaging apps, or social media management tools.'
        },
        // {
        //   title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
        //   description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        // },
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '38',
      title: 'How to remove a lead from campaigns',
      updated: 'Updated over 8 months ago',
      content: `There are three ways to remove a lead from the campaign.`,
      features: [
        {
          title: 'Change the lead status',
          description: 'To remove a lead from campaigns, you can change the lead status to any status other than the default "Lead" status. By doing so, the sequence for this lead will be stopped automatically so no more emails in this campaign will be sent to this lead.'
        },
        {
          title: 'Here are the steps to change the status of your leads:',
          description: 'Go to the Leads section of the campaign or CRM --> Leads section, Click on the lead, Change the status in the pop-up window'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '39',
      title: 'Email Outreach plans comparison',
      updated: 'Updated over 8 months ago',
      content: `If you are still not sure what plan suits you the best`,
      features: [
        {
          title: 'Check below',
          description: 'You may connect as many email accounts as you need.'
        },
        // {
        //   title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
        //   description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        // },
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
      // }
      // ],

      faq:[
        {
        title:" Do you offer custom pricing?",
        description:"Our custom pricing is available above the Light Speed plan, and there are no plans between Growth and HyperGrowth plan."
      },
      {
        title:"How can I increase my limits if I am on HyperGrowth/LightSpeed plan?",
        description:" Users can also buy add-ons if they're already on the HyperGrowth or Light Speed plan and would like to send a higher volume. The pricing is +$87/mo for an extra add-on of +25k uploaded contacts. You can stack as many of these as you want, and make this upgrade from your billing page."
      },
      {
        title:"I want to use your platform only to warm up my email addresses, do you have a plan only for warmup?",
        description:" There is no warmup-only plan, the warmup service is offered as part of our email outreach plans."
      },
      {
        title:"Are leads limits being reset every month?",
        description:" The uploaded leads limit counts any contact that you have uploaded to salestarget and that is in a campaign (active or paused). These do not work like credits, and do not reset every month - so if you need more space, you can upgrade your account or delete old campaigns and leads."
      }, 
      
      ]
    },
    {
      id: '40',
      title: 'Lead Finder plans comparison',
      updated: 'Updated over 8 months ago',
      content: `What features are included in different Lead Finder plans`,
      features: [
        {
          title: '',
          description: 'If you are still not sure what plan suits you the best'
        },
        {
          title: '',
          description: 'check below faqs'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
      // }
      // ],

      faq:[
        {
        title:" If I purchase a Lead Finder, can I send and warmup emails too?",
        description:"Lead Finder is a separate data product from our Email outreach tool, so you won't be able to send and warmup email accounts with just Lead Finder."
      }
       ]
    },
    {
      id: '41',
      title: 'Add-on pricing',
      updated: 'Updated over 8 months ago',
      content: `The pricing of custom plans and add-ons`,
      features: [
        {
          title: 'Add-on for Email Outreach plans',
          description: 'ou can purchase add-ons (available for Hyper Growth and Light Speed plans) to increase the uploaded contact limit'
        },
        {
          title: 'Add-on for Lead Finder plans',
          description: 'You can purchase add-ons (available for Supersonic leads and higher lead plans) to get more lead credits.'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '42',
      title: 'salestarget Privacy Center',
      updated: 'Updated over 8 months ago',
      content: ``,
      features: [
        {
          title: 'Request access to collected data',
          description: 'In compliance with data privacy regulations (e.g. GDPR, CCPA, etc.), you may formally request and obtain a report detailing the information salestarget has collected on you. Once your request is submitted, we will review, process, and respond to your request promptly in accordance to regulatory compliance guidelines.'
        },
        {
          title: 'Opt out of salestarget - object to our processing, opt out of sales, and request deletion of your profile',
          description: 'Under the CCPA, California residents have the right to opt out of “sales” of their business information. Similarly, under the GDPR (and other European data protection laws), individuals in the EEA, the UK, and Switzerland have the right to object to our processing of their business data. '
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '43',
      title: 'salestarget Sub-processors',
      updated: 'Updated over 8 months ago',
      content: `To support the delivery of our services, salestarget may engage and use data processors with access to certain Service Data (each, a “Sub-processor”). This table provides important information about the identity, location, and role of each Sub-processor.`,
      features: [
        {
          title: 'Amazon Web Services (AWS)',
          description: ''
        },
        {
          title: 'Google Cloud Platform (GCP)',
          description: ''
        },
        {
          title: 'Hetzner',
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '44',
      title: 'DPA (Data Processing Addendum Document)',
      updated: 'Updated over 8 months ago',
      content: `We offer data processing addendums (DPAs) for our customers that operate in the EU that would be considered controllers of personal data for purposes of the General Data Protection Regulation (the GDPR) in connection with their use of salestarget's services. `,
      features: [
        {
          title: '',
          description: 'Our DPA supplements our Terms of Service and Privacy Policy, and contains contractual terms that address the GDPR’s requirements for data processing agreements between controllers and processors, including with respect to personal data transfer, and that reflect our data privacy and security commitments to our clients. You can see our Data Processing Addendum Document here. The PDF version is attached to this article.'
        },
        // {
        //   title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
        //   description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        // },
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '45',
      title: 'salestarget CRM',
      updated: 'Updated over 8 months ago',
      content: `salestarget CRM is designed for cold outreach campaigns and integrates multiple communication channels, including email, SMS, and calls. It is built on top of emailing functionalities, making it a comprehensive multi-channel platform.`,
      features: [
        {
          title: '',
          description: 'Multi-channel integration Allows handling of emails, calls, SMS, tasks, LinkedIn connections, all within the same platform'
        },
        {
          title: '',
          description: 'Unified Inbox Allows you to view all incoming emails, calls, SMS, and tasks in one main inbox view.'
        },
        {
          title: '',
          description: 'Opportunity Management You can track different stages of lead statuses such as interested, meetings booked, completed, won, and custom'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '46',
      title: 'CRM Features',
      updated: 'Updated over 8 months ago',
      content: `Using salestarget CRM is straightforward. Upon accessing the CRM tab`,
      features: [
        {
          title: '',
          description: 'Inbox contains Emails, Calls, SMS, Tasks, and Everything. '
        },
        {
          title: '',
          description: 'Emails tab will display all emails from your Unibox Primary and Other folders, including all lead statuses (out of office, not interested, etc.). To stop displaying emails from outside salestarget, disable "Other" folder in the Preferences, AI automation tab.'
        },
        {
          title: '',
          description: 'Opportunities give you a consolidated view of all your interested prospects from campaigns and Lists. You can switch between the two by selecting the desired source of opportunities.'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '47',
      title: 'How to purchase phone numbers',
      updated: 'Updated over 8 months ago',
      content: `salestarget CRM makes it easy to call and text right from the platform. This guide will show you how to use these features and how to register for A2P 10DLC, which you'll need for sending SMS to US numbers.`,
      features: [
        {
          title: '',
          description: 'Double-check your information, all the details you submit must be correct.'
        },
        {
          title: '',
          description: 'If there\'s a problem or your registration has failed right after submitting, contact support via chat.'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '48',
      title: 'How to add the Website Visitors script to Webflow?',
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '49',
      title: 'Getting started with the Website Visitors feature',
      updated: 'Updated over 8 months ago',
      content: `To start tracking your website visitors, you will have to complete a couple of initial steps`,
      features: [
        {
          title: '',
          description: 'The Website Visitors feature can detect individual visitor information from US-based traffic - including business email addresses, job titles, what pages they\'ve visited on your website, etc. If you\'re on a paid plan for this feature, you can also get additional \'company-only\' visitor resolutions for free.'
        },
        {
          title: '',
          description: 'The visitor information does not come from your existing campaigns or lists. Instead, it is discovered and enriched by our powerful AI-powered algorithm. Long story short, this helps you discover data for all warm/inbound leads that you\'d have otherwise missed.  '
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '50',
      title: 'salestarget.ai Website Visitor ID Legal Compliance Onboarding',
      updated: 'Updated over 8 months ago',
      content: `Welcome to salestarget.ai Website Visitor ID Tool! 🚀`,
      features: [
        {
          title: '',
          description: 'This document will guide you through the necessary legal compliance steps to ensure that our service is used responsibly and in accordance with relevant laws. Our commitment to privacy and data protection is at the forefront of our operations, and we want to ensure the same for your use of our product. This document is provided for informational purposes only and is not intended to constitute legal advice.'
        },
        {
          title: '',
          description: 'Ultimately, it is your responsibility to ensure that you are collecting and using personal information in compliance with all applicable laws and regulations. If you have any questions please consult legal counsel.'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '51',
      title: 'Inbox Placement feature',
      updated: 'Updated over 8 months ago',
      content: `What is Inbox Placement feature and how to launch and configure tests`,
      features: [
        {
          title: '',
          description: 'Bad results from your cold email campaigns, Without visibility into your email performance, you can’t troubleshoot problems. Your IPs or domains might get blacklisted, impacting future campaigns.'
        },
        {
          title: '',
          description: 'That\'s what the Inbox Placement feature helps with - providing you with the tools and insights to help your emails reach your ideal clients.'
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '52',
      title: 'Inbox Placement: one-time tests',
      updated: 'Updated over 8 months ago',
      content: `You will need a Growth or HyperGrowth Inbox Placement subscription. Get it here. The plan is shareable across all the workspaces you own.`,
      features: [
        {
          title: '',
          description: 'Before running Inbox Placement tests, set the maximum number of inbox placement tests per day in the sending account settings:'
        },
        // {
        //   title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
        //   description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        // },
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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
      id: '53',
      title: 'Inbox Placement - automated tests',
      updated: 'Updated over 8 months ago',
      content: `How to launch automated tests`,
      features: [
        {
          title: 'What is the Automated Inbox Placement Test?',
          description: 'It’s a feature that automatically checks if your emails land in the inbox, promotions, or spam folders and gives detailed deliverability insights.It helps by automating placement tests, providing insights into blacklists, spam triggers, and email health, allowing you to optimize campaigns and improve deliverability while spending less time on manual tasks.'
        },
        // {
        //   title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
        //   description: 'An outstanding feature that will save you countless hours on your campaign setup.'
        // },
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
      //   description:"Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers."
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