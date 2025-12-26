const mockArticles = [
  {
    id: "1",
    title: "What is SalesTarget?",
    updated: "Updated over 8 months ago",
    content: `Salestarget is a cold email software that offers various features tailored to enhance outreach campaigns.`,
    features: [
      {
        title: "Unlimited Email Accounts",
        description: "You may connect as many email accounts as you need.",
      },
      {
        title: "Done-For-You Automatic Email Accounts/ Domains Setup",
        description:
          "An outstanding feature that will save you countless hours on your campaign setup.",
      },
      {
        title: "Unlimited Warmup",
        description:
          "With the largest warmup pool on the market, salestarget ensures your emails never land in spam.",
      },
      {
        title: "What Copilot Can Do",
        type: "heading",
        isHeading: true
      },
    ],
    accounts: [
      {
        title: "How to connect Google Accounts?",
        description:
          "If you want to connect your Google Account, you may check this article to learn the process.",
      },
    ],
    msaccounts: [
      {
        title:
          "How to connect an email account that is not Google or Microsoft?",
        description:
          "If you want to connect an email account that is not a Google or Microsoft account, you should use the IMAP/SMTP option and follow the steps in this article.",
      },
    ],
    imap: [
      {
        title: "What to do if you are not able to connect IMAP?",
        description:
          "Please check if you are able to connect that account through this Microsoft tool. /n This tool should be able to tell us whether the problem is on Salestarget's side, or whether there's something going on with the accounts themselves. /nPlease send a screenshot of the results page to our chat support, and we'll try our best to help you resolve the issue. /nIMAP host for Google should be imap.gmail.com, and for other providers, you can most of the time find them on the provider's website, or directly from your webmail. You may also check this article for the most popular providers.",
      },
    ],

    faq: [
      {
        title: " Am I able to connect aliases with salestarget?",
        description:
          "There is no option to add alias email accounts to salestarget.",
      },
    ],
  },
  {
    id: "2", // Unique ID for routing
    title: "Quick Start Guide?",
    updated:
      "Check this article to get setup with salestarget in just a few short minutes.",
    content: `salestarget is a cold email software that offers various features tailored to enhance outreach campaigns. 
                It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
    features: [
      {
        title: "How to connect your accounts",
        description:
          "Sometimes setup of the account can be challenging, that's why we prepared a step-by-step guide to make it easier for our users.",
      },
      {
        title: " -->Connect Your Google Account with OAuth Method",
        description:
          "Connecting your Google Workspace account to salestarget using OAuth authentication allows seamless access and integration between the two platforms. Follow these step-by-step instructions to set up OAuth access in your Google Workspace account and connect it with salestarget. ",
      },
      
    ],
   
  },
  {
    id: "3", // Unique ID for routing
    title:
      "Rotating IP's and sending algorithms in the cold email space = high deliverability?",
    updated: "Updated over 8 months ago",
    content: `At Salestarget.ai we maintain a dynamic pool of hundreds of proxy IPs that are continuously rotated based on key metrics, including usage volume and account reputation.`,
    features: [
      {
        title: "Challenges with Conventional IP Rotation:",
        description:
          "Traditional IP rotation practices often result in the loss of good reputation IPs or delay in removing blacklisted IPs, leading to potential delivery problems and reputation damage. Other cold email tools out there only have a handful of IPs, don't monitor blacklists, don't rotate IPs, are all STATIC, etc.",
      },
      {
        title: "Unique Features of Salestarget.ai:",
        description:
          "Unlike many cold email tools that rely on static IPs and lack blacklist monitoring or rotation capabilities, salestarget.ai offers:\n A vast pool of rotating proxy IPs. \n Constant monitoring and proactive management of IP reputation. \n Location Independence: Using salestarget.ai from different locations does not impact deliverability because our rotating proxy IPs, not user IP addresses, interact directly with email servers.",
      },
      
    ],
   
  },
  {
    id: "4", // Unique ID for routing
    title: "Setting up your account",
    updated: "Updated over 8 months ago",
    content: `Setting up your SalesTarget account is quick and easy. Follow these steps to get started:`,
    features: [
      {
        title: "Sign Up & Login",
        description:
          "Visit SalesTarget and click Sign Up. Enter your email address and create a password. Verify your email to activate your account.",
      },
      {
        title: "Configure Your Profile",
        description:
          "Add your name, company details, and role. Set up your email signature for personalized outreach. Choose your timezone and preferences.",
      },
      {
        title: "Connect Email Accounts",
        description:
          "Link multiple email accounts for sending campaigns. Enable email warm-up to improve deliverability. Verify email settings and SPF, DKIM, and DMARC records.",
      },
    ],
    
  },
  {
    id: "5", // Unique ID for routing
    title: "Navigating the dashboard",
    updated: "Updated over 8 months ago",
    content: `The SalesTarget dashboard provides an intuitive interface to manage your cold email campaigns efficiently. Here's a breakdown of key sections:`,
    features: [
      {
        title: " Dashboard Overview 📊",
        description:
          "Get a quick summary of campaign performance, email deliverability, and lead status. Track key metrics like open rates, reply rates, and bounce rates.",
      },
      {
        title: " Email Campaigns 📩",
        description:
          "Create, edit, and manage cold email sequences. Use the AI sequence generator for personalized email copy. Monitor campaign performance in real-time.",
      },
      {
        title: "Settings & Integrations ⚙️",
        description:
          "Connect multiple email accounts for sending. Configure integrations with CRM, Zapier, or webhooks. Adjust user permissions and manage billing details.",
      },
    ],
   
  },
  {
    id: "6", // Unique ID for routing
    title: "First steps with campaigns",
    updated: "Updated over 8 months ago",
    content: `Starting your first cold email campaign with SalesTarget is simple. Follow these steps to set up and launch your outreach successfully.`,
    features: [
      {
        title: " Create a Campaign 📝",
        description:
          'Click "New Campaign" and name it appropriately. Select email accounts for sending. Set sending limits to avoid spam detection.',
      },
      {
        title: "Craft Your Email Sequence ✉️",
        description:
          "Use AI Sequence Generator for high-converting templates. Personalize emails with dynamic variables ({first_name}, {company}). Set up follow-ups to increase engagement.",
      },
      {
        title: "Launch & Monitor 📊",
        description:
          "Start the campaign and track performance (open, click, reply rates). Use AI Inbox Manager for automated replies. Adjust messaging and audience based on analytics.",
      },
    ],
    
  },
  {
    id: "7", // Unique ID for routing
    title: "Api Connection",
    updated: "Updated over 8 months ago",
    content: `SalesTarget allows seamless API integration to automate lead management, campaign creation, and email tracking. Here's how to connect via API:`,
    features: [
      {
        title: "Generate API Key 🔑",
        description:
          'Go to Settings > API Access. Click "Generate API Key" and copy it. Store it securely, as it provides access to your account.',
      },
      {
        title: " Common API Endpoints 🌐",
        description:
          "Fetch Leads: GET /leads, Add New Lead: POST /leads, Create Campaign: POST /campaigns, Check Campaign Status: GET /campaigns/{id}, Send Test Email: POST /emails/test.",
      },
      {
        title: "Integrate with CRM & Other Tools 🔄",
        description:
          "Sync SalesTarget with HubSpot, Zapier, or custom CRMs via API. Automate lead transfers and follow-ups.",
      },
    ],
    
  },
  {
    id: "8", // Unique ID for routing
    title: "Data processing pipelines",
    updated: "Updated over 8 months ago",
    content: `SalesTarget uses data processing pipelines to handle, filter, and enrich lead data efficiently. These pipelines ensure accurate targeting, high email deliverability, and seamless automation.`,
    features: [
      {
        title: "Data Ingestion 📥",
        description:
          "Import lead data from CSV files, CRM systems, or Lead Explorer. API integration allows real-time lead collection.",
      },
      {
        title: " Campaign Execution 🚀",
        description:
          "Assigns verified leads to specific email sequences. Ensures throttled sending to prevent spam flags. Uses AI-generated personalization for better engagement.",
      },
      {
        title: " Data Storage & Security 🔐",
        description:
          "GDPR-compliant lead data handling. Secure encryption for all stored information. API/Webhook support for seamless CRM synchronization.",
      },
    ],
    
  },
  {
    id: "9", // Unique ID for routing
    title: "Security best practices",
    updated: "Updated over 8 months ago",
    content: `Ensuring data security in SalesTarget is crucial for protecting sensitive lead information and maintaining compliance. Follow these best practices to safeguard your account and campaigns.`,
    features: [
      {
        title: "Account Security 🔑",
        description:
          "Use Strong Passwords – Combine uppercase, lowercase, numbers, and symbols. Enable Two-Factor Authentication (2FA) – Adds an extra layer of security. Limit User Permissions – Only grant access based on roles.",
      },
      {
        title: " API Security 🔗",
        description:
          "Keep API Keys Private – Never expose them in public repositories. Use HTTPS for API Requests – Ensures encrypted communication. Rotate API Keys Regularly – Prevents unauthorized access.",
      },
      {
        title: " Preventing Phishing & Social Engineering 🛡️",
        description:
          "Verify Email Sources – Avoid clicking on unknown links. Educate Team Members – Train them on recognizing security threats. Report Suspicious Activity – Contact support if you notice anomalies.",
      },
    ],
   
  },
  {
    id: "10", // Unique ID for routing
    title: "What is LeadExplorer?",
    updated: "Updated over 8 months ago",
    content: `Lead Explorer in a cold email platform helps identify and qualify potential leads by leveraging a B2B lead database. It allows users to filter prospects based on industry, company size, job role, and other criteria, ensuring targeted outreach for higher conversion rates.`,
    features: [
      {
        title: "Advanced Lead Filtering ",
        description:
          "Sort leads by industry, company size, job role, and location.",
      },
      {
        title: "Verified Contact Data",
        description: "Access accurate emails and direct contacts.",
      },
      {
        title: "Real-Time Lead Updates",
        description: "Get the latest lead insights and changes.",
      },
    ],
    
  },
  {
    id: "11", // Unique ID for routing
    title: "Researching Leads?",
    updated: "Updated over 8 months ago",
    content: `Before launching your campaigns, verify your leads to avoid high bounce rates, which can harm your sender's reputation. Emails sent to non-existent addresses get permanently bounced, so removing them is crucial for better deliverability.`,
    features: [
      {
        title: "Bulk Verification",
        description:
          'When uploading a CSV file, check "Verify leads" before clicking Upload All.',
      },
      {
        title: "Individual Verification",
        description:
          'Select leads from the Leads Tab and click "Verify Leads" in the top right corner.',
      },
      {
        title: "Unlimited Warmup",
        description:
          "With the largest warmup pool on the market, salestarget ensures your emails never land in spam.",
      },
    ],
   
  },
  {
    id: "12", // Unique ID for routing
    title: "Searching Leads?",
    updated: "Updated over 8 months ago",
    content: `Lead searching is the process of identifying and qualifying potential customers for outreach. A good lead searching platform provides accurate, verified data, advanced filtering, CRM integration, and automation tools to enhance efficiency.`,
    features: [
      {
        title: "How accurate is the lead data?",
        description:
          "The platform should offer real-time verification, email validation, and up-to-date company details to minimize bounces.",
      },
      {
        title: "Does it allow advanced filtering?",
        description:
          "A good platform should enable searches by industry, company size, location, job title, revenue, and other key parameters for precision targeting.",
      },
      {
        title: "What are the compliance and data protection measures?",
        description:
          "GDPR and CCPA compliance, along with opt-in email lists, ensure legal and ethical outreach.",
      },
    ],
    
  },
  {
    id: "13",
    title: "Transferring domains from one email provider to another",
    updated: "Updated over 8 months ago",
    content: `To move your domain from one email service provider to another, there are several important steps that need to be followed. This guide will walk you through the process in how to transfer domains from one email provider to another. You can watch the video walkthrough by clicking here.`,
    features: [
      {
        title: "Step 1: Cancel Subscription with Old Email Service Provider",
        description:
          "The first step in the migration process is to cancel the subscription with your old email service provider. This is to ensure that there are no conflicts when you try to add the domain to the new email service provider.",
      },
      {
        title: "Step 2: Delete DNS Records",
        description:
          "This is a crucial step. Before adding the domain to the new email service provider, you will need to delete all old email provider's DNS records in the domain's DNS zone. This includes MX records, SPF, DKIM, and any verification DNS records that may exist. Here are the steps on how to delete DNS Records.Log into the platform where your domain is registered (e.g., GoDaddy, Bluehost, etc.). In this example, we will use GoDaddy.Navigate to the DNS management section. This might be called DNS Zone or something similar depending on your domain registrar.Find the DNS records of the domain you are trying to migrate and view all records.Select and delete the verification record (if any)Delete the MX records.Delete the SPF record. If you encounter an error, try editing the SPF record, delete the value part and click save. Then, try deleting it again.Delete the DKIM record.",
      },
      {
        title: "Step 3: Add Domain to New Email Service Provider",
        description:
          "Now that you have deleted the necessary DNS records, it's time to add your domain to your new email service provider. Here are the steps on how to add a domain to the new email service provider.Log in to your new email service provider's workspace.Navigate to the section where you can add a domain. This might be under settings or domain management.Enter your domain name and follow the on-screen instructions to complete the addition process.",
      },
    ],
   
  },
  {
    id: "14",
    title: "Setting up Reply-to email address",
    updated: "Updated over 8 months ago",
    content: `You can set up a reply-to address when setting up the SMTP connection. This can be done if you'd like to send through a different email provider, and receive a response on a completely different inbox, or get all your salestarget replies to your business email. There are two ways you can set the reply-to email address. Both ways demand having your reply-to address connected to salestarget. Here are the two ways to set them up.`,
    features: [
      {
        title: "",
        description:
          "Click on the email account you would like to enable the reply-to address for. Then navigate to the Settings section and set your reply-to address.",
      },
      {
        title: "",
        description:
          "Set the reply-to address when connecting an account through the IMAP/SMTP method by checking the 'Set reply-to' in the SMTP part.",
      },
     
    ],
   
  },
  {
    id: "15",
    title: "Checklist before campaign launch",
    updated: "Updated over 8 months ago",
    content: `We understand that you want to do a full checklist before you proceed to do a campaign launch. Here are some of the checkers to test if they are set up correctly.`,
    features: [
      {
        title: "",
        description:
          "For domains, you may use SPF and DKIM check. For email deliverability, try our inbox placement feature.",
      },
      
    ],
    
  },
  {
    id: "16",
    title: "Create a separate workspace and invite team members",
    updated: "Updated over 8 months ago",
    content: `Workspaces are completely separate salestarget spaces and are primarily meant for agency customers who were using multiple salestarget login accounts to manage their end-customers. `,
    features: [
      {
        title: "",
        description:
          "Now they can manage their customers (while keeping their data separate) within a single log-in account.",
      },
      {
        title: "",
        description:
          "You no longer need to share the same login with your team members to access the account since they can have their own credentials. If a person is already an salestarget user, this workspace will be added to their list. If they are not using salestarget, they will be asked to create a new account.",
      },
     
    ],
   
  },
  {
    id: "17",
    title: "Email Service Providers Matching",
    updated: "Updated over 8 months ago",
    content: `Email Service Providers Matching is a feature that improves deliverability and helps people to get better results. 

 

With this feature. it will try to match the users sending inboxes with the recipient's inboxes (your Google accounts send emails to Google leads, Outlook accounts send emails to Outlook leads, etc). `,
    features: [
      {
        title: "",
        description:
          "You can activate Email Service Provider Matching by following these steps:",
      },
      {
        title: "",
        description:
          "Open the target campaign Go to the Campaign Options tab. Select Advanced Options -> Provider Matching. You can create custom ESP routing rule to select which ESP sends or does not send emails to which recipient ESPs.",
      },
      {
        title: "Unlimited Warmup",
        description:
          "With the largest warmup pool on the market, salestarget ensures your emails never land in spam.",
      },
    ],
    

    faq: [
      {
        title:
          " What will happen if none of my mailboxes match my lead's mailboxes?",
        description:
          "No worries, if none of your mailboxes match your prospect's mailboxes, the campaign will go out as normal.",
      },
      {
        title:
          "What happens if only 1 inbox matches 80% of your leads' inboxes (Google for example)",
        description:
          "If only 1 inbox matches 80% of your leads' inboxes, the campaign needs to wait for the 1 account to be available for 80% of the leads. As for the remaining 20%, even if there is no match, the campaign will work still as usual.",
      },
      {
        title:
          "How can we make sure that the maximum number of new leads is still met, as we are not aware of the number of Google or Outlook boxes?",
        description:
          " It might impact the sending limit if the campaign waits for an account from a matched provider to become available.",
      },
    ],
  },
  {
    id: "18",
    title: "Why do I need DNS records?",
    updated: "Updated over 8 months ago",
    content: `salestarget doesn't actually do any of the sending - we send the email information to the email provider of the sending accounts you've connected, which then sends your emails. So you will not need to add any SPF/DKIM records for salestarget, but you will need to add them for your email provider (ESP). Check your ESPs documentation and how to obtain these records.`,
    features: [
      {
        title: "",
        description:
          "Our servers (IPs) send information like when the email needs to be sent, what it needs to look like (including styling, variables, spintax) + things like the open tracking code using your custom tracking subdomain. This information is sent to your connected sending account's mail servers, which then do the actual email sending.",
      },
      {
        title: "",
        description:
          " You need to get email inboxes from email providers such as GSuite, Outlook, and others.",
      },
      {
        title: "",
        description:
          "And that is also why users need to warm up their specific domains / sending accounts for 3-4 weeks minimum.",
      },
    ],
    
  },
  {
    id: "19",
    title: "How to set up SPF and DKIM for cPanel email accounts",
    updated: "Updated over 8 months ago",
    content: `Here are the instructions for the most popular cPanel email providers. If your accounts are created on a different provider's cPanel, the instructions could apply to your accounts too.`,
    features: [
      {
        title: "BlueHost",
        description: "SPF, DKIM",
      },
      {
        title: "Hostgator",
        description: "SPF and DKIM",
      },
      {
        title: "TitanMail",
        description: "SPF, DKIM",
      },
    ],
    
  },
  {
    id: "20",
    title: "Ways to add a signature",
    updated: "Updated over 8 months ago",
    content: `These are special variables that you will have to write down manually in the campaign editor. It essentially takes the value from the sending account's name, whatever value is set in the account's settings section. As the sending email accounts are rotated, their specific settings value are used.`,
    features: [
      {
        title: "Add a signature using an image",
        description:
          "Host and upload your image on Google Photos. Click Share and select Create link to get the shared link of the image.",
      },
      {
        title: "Adding a signature using HTML",
        description:
          "Get the HTML code. You may use some of the online signature generators to get the HTML code. Once you have the HTML code, paste it to the Sequence editors in the Code View.",
      },
    ],
   
  },
  {
    id: "21",
    title: "How Warm-Up Works and Why it's Important 🤓",
    updated: "Updated over 8 months ago",
    content: `Check this article to understand how you can use account warmup to increase deliverability chances and the reputation of your emails. 📈`,
    features: [
      {
        title: "",
        description:
          "The warmup functionality mimics human conversations between email accounts.But in this case, your 'friends' are other salestarget.ai users who have also enabled the warmup feature. You can be sure that all of them will open your email and a high percentage will write you back with a 'thoughtful' and positive sentimentThe emails written by the salestarget AI algorithm signal to Google, Outlook, and other ESPs that your email account and sending domain are relevant and legitimate. This increases the likelihood that the messages that are sent to the cold leads in your outreach campaigns will also actually land in their inbox and subsequently be opened and replied to.The bottom line is that the warmup will improve the deliverability of your cold email accounts by mimicking human conversations in the salestarget.ai user pooWhen you connect a sending account to salestarget, warming up the accounts also warms up your SMTP sending server and IMAP servers as welOn top of the deliverability benefits, your outreach email accounts will also stay alive for longer and the likelihood of you 'burning' through an account is significantly lower.",
      },
      
    ],
    
  },
  {
    id: "22",
    title: 'What is "read emulation" in Warmup',
    updated: "Updated over 8 months ago",
    content: `Read Emulation is an advanced warmup feature that mimics reading warm-up emails like a real human. It sends signals to ESPs (the email provider) that your messages are relevant as they will be "read" by the email receiver which has a positive impact on the deliverability and reputation of your domains.`,
    features: [
      
    ],

    faq: [
      {
        title: "Do you recommend that I disable Read Emulation?",
        description:
          "We suggest that you always enable the Read Emulation feature unless you have been instructed otherwise.Also, the reason we gave an option to enable/disable this feature is that there are certain third-party SMTP providers who have their own tracking analytics system.In order to keep track of it, these providers insert a tracking pixel. That tracking pixel gets triggered when the Read Emulation feature is enabled and treats the email as a real email.So, for SMTP providers who don't want warmup emails to affect their tracking analytics, we gave them the option to disable the Read Emulation feature.",
      },
    ],
  },
  {
    id: "23",
    title: "Warmup filters - Google and Microsoft🚦",
    updated: "Updated over 8 months ago",
    content: `Once you enable the warmup for your accounts, warmup emails will start to land in your Inbox and you can recognize them with the warmup tag.We only want to filter out emails that hit the inbox and NOT the spam inbox. Any email that hits the spam inbox, we automatically move back to the inbox.To keep your main inbox clean and filter out your warmup emails to a separate warmup folder, you can create warmup filters using the filter tag. `,
    features: [
      {
        title: "How to create the warmup filter in Gmail?",
        description:
          'Open the warmup settings for any of your accounts (the warmup tag is the same for all the accounts connected to a workspace). Copy the filter tag.Go into your email account and create a folder called "Warmup".In your email account, create a filter, and in "Subject" and "Has the words" use your warmup tag. Click "Create filter" for the settings to open.Choose these rules:Skip the Inbox (Archive it)Mark as readApply the label: WarmupAlso apply filter to matching conversations.Once you\'re done, click Create Filter.',
      },
      {
        title: "How to create the warmup filter in Outlook?",
        description:
          'If you use an Outlook account and you want to create the warmup filter, follow these steps.Open the warmup settings for any of your accounts (the warmup tag is the same for all the accounts connected to a workspace). Copy the filter tag.On your email, navigate to Rules.In the condition, select Rules or body includes.Enter the warmup tag.Add two actionsMark the email as read.Move to the salestarget Warmup folder. If this folder does not exist, create a new one.Click Save.To run this rule, click the triangle icon "Run this rule now" in the Rules sectio',
      },
      
    ],
   
  },
  {
    id: "24",
    title: "How do I make sure my emails will get delivered? 📦",
    updated: "Updated over 8 months ago",
    content: `Considering the security and privacy of the recipient's address, and for technical reasons, there can't be a system that accurately identifies which emails landed in the lead's inbox and which went to their spam folder.`,
    features: [
      {
        title: "",
        description:
          "However, our Inbox Placement feature can check if your emails land in the inbox, promotions, or spam folders and gives detailed deliverability insights. It helps by automating placement tests, providing insights into blacklists, spam triggers, and email health, allowing you to optimize campaigns and improve deliverability while spending less time on manual tasks. In a nutshell, ultimately deliverability of the email accounts can only be speculated based on the following factors.Your own domain's reputation and how old it is.Reputation of email service provider's IP.Whether or not you are using SPF, DKIM AND DMARC.If there are any links/images that you have included - even the open tracking pixels can have an impact.You can also check your deliverability score (and if everything is set up correctly) by going by the following:Campaign - Sequence editorPreview emailCheck deliverability score",
      },
      {
        title: "Done-For-You Automatic Email Accounts/ Domains Setup",
        description:
          "An outstanding feature that will save you countless hours on your campaign setup.",
      },
      {
        title: "Unlimited Warmup",
        description:
          "With the largest warmup pool on the market, salestarget ensures your emails never land in spam.",
      },
    ],
    
  },
  {
    id: "25",
    title:
      "Scale Your Cold Email Campaigns With Secondary Sending Domains - The Strategy & How To Implement It",
    updated: "Updated over 8 months ago",
    content: `Here is the strategy you may consider in creating a secondary domain to scale up your cold outreach, get more replies, and more revenue. Watch the video about scaling your cold email campaigns by clicking the link here. `,
    features: [
      {
        title: "",
        description: "Buy domains that are similar to your main domain.",
      },
      {
        title: "",
        description:
          "We’ve run an analysis recently on 32M cold emails and have seen worse performance (reply rate) with domain extensions such as biz, online etc. You may check this list to know the domains with the worst reputation.",
      },
      {
        title: "",
        description: "Avoid hyphens and numbers, use letters only.",
      },
    ],
   
  },
  {
    id: "26",
    title:
      "Cold Email Copywriting Framework We Use To Get 400+ Replies Monthly",
    updated: "Updated over 8 months ago",
    content: `If you test enough targeting/messaging combos, you'll find 100% a combo that works or you'll find out there's no product-market fit. If you don't have product-market-fit and are testing out a new offer it's especially important to test out tons of angles.`,
    features: [
      {
        title: "",
        description:
          "Instead of giving you 1 strategy, we're going to give you multiple different strategies so you will always have things to test.",
      },
      {
        title: "",
        description:
          "For some offers, we found a working campaign after 3 tries, for others it took 3 months and 40 campaigns. You need to get into the habit of testing new things daily and weekly.",
      },
      
    ],
    
  },
  {
    id: "27",
    title: "What to do if your 'Open Rate' is low📉",
    updated: "Updated over 8 months ago",
    content: `Tracking open rates is not always the ideal form to gauge the performance. The true KPI would be the positive replies rate. There are different opinions on whether you should keep open tracking enabled or will it increase the reply rate and perceived deliverability with open tracking disabled. The open tracking pixel could technically hurt deliverability, but it is difficult to gauge the extent of it.`,
    features: [
      {
        title: "Email accounts not set up properly.",
        description:
          "If you do not have SPF, DKIM, DMARC set up properly for your accounts that could negatively impact deliverability.",
      },
      {
        title: "Bad subject lines.",
        description:
          "If your subject line is generic, salesy, and not targeted, there's less chance people will open it.",
      },
      {
        title: "Email account not warmed up enough or not using warm-up.",
        description:
          "If you haven't warmed up your emails for at least 2-3 weeks before sending cold emails, you might see lower open rates. Your own domain's reputation and how old it is, along with the reputation of your sending accounts affect your deliverability.",
      },
    ],
    
  },
  {
    id: "28",
    title: "Why do emails bounce?",
    updated: "Updated over 8 months ago",
    content: `Email bounces means your email cannot be delivered to your recipient. Whenever that happens, you'll get a report back in your inbox with the details of the bounce. You may have noticed similar reports like the one below in your inbox. There are two categories of why emails bounce.`,
    features: [
      {
        title: "Hard bounce",
        description:
          "A hard bounce happens when the email address you're trying to send an email to is no longer valid or has never existed. ",
      },
      {
        title: "Soft Bounce",
        description:
          "Soft bounces are less common and a bit trickier to troubleshoot. Soft bounces happen when the recipient's email is valid, but it cannot be delivered due to other reasons",
      },
      {
        title: "",
        description:
          "In this case, the best course of action would be to stop your cold outreach and only let warmup run for a few weeks. After a few weeks, you can start sending cold emails again and monitor if there is any improvement in bounces. Also, consider lowering your overall cold outreach volume.",
      },
    ],
   
  },
  {
    id: "29",
    title: "Why am I getting 100% open rate?💯",
    updated: "Updated over 8 months ago",
    content: `If you go to Analytics and see a 100% open rate, here are the possible reasons you may check it out:`,
    features: [
      {
        title: "",
        description:
          "If you have deleted leads from your campaign at any point, you could be seeing statistics for those deleted leads as well.",
      },
      {
        title: "",
        description:
          "If you are viewing the analytics for only a specific date range (like a week), it reports the sent and opens within that specific time frame.",
      },
      {
        title: "",
        description:
          "With the largest warmup pool on the market, salestarget ensures your emails never land in spam.",
      },
    ],
   
  },
  {
    id: "30",
    title: "CRM Import",
    updated: "Updated over 8 months ago",
    content: `You can connect your CRM (Hubspot, Salesforce, and Pipedrive) to salestarget and import the leads to your campaigns or lists. In your CRM (Hubspot, Salesforce, and Pipedrive) you will need to create a List/Filter View with the leads that you want to import to salestarget.`,
    features: [
      {
        title: "",
        description:
          "You can connect your CRM (Hubspot, Salesforce, and Pipedrive) to salestarget and import the leads to your campaigns or lists. In your CRM (Hubspot, Salesforce, and Pipedrive) you will need to create a List/Filter View with the leads that you want to import to salestarget.",
      },
      {
        title: "",
        description:
          "Connecting Pipedrive, Connecting Hubspot, ​Connecting Salesforce",
      },
      {
        title: "",
        description:
          "Once connected, follow the steps from these articles to import your leads to salestarget from your CRM:",
      },
      {
        title: "",
        description:
          "Importing leads from Pipedrive, Importing leads from Hubspot, ​Importing leads from Salesforce",
      },
    ],
    
  },
  {
    id: "31",
    title: "Slack integration",
    updated: "Updated over 8 months ago",
    content: `Slack integration allows you to receive notifications in Slack when a specific event occurs.`,
    features: [
      {
        title: "Unlimited Email Accounts",
        description: "You may connect as many email accounts as you need.",
      },
      
    ],
   
  },
  {
    id: "32",
    title: "How to use Webhooks? 🕸🪝",
    updated: "Updated over 8 months ago",
    content: `WebHooks are notifications sent over the Web and triggered whenever a certain event occurs. 

 

In this case, the event is a new campaign event in salestarget. As soon as an event occurs (such as emails being opened or replies arriving), a notification with the response data is immediately sent to the webhook URL which is set in the configuration panel.`,
    features: [
      {
        title: "Available events",
        description:
          "salestarget webhook notifications are sent via a POST request, while the request body (with response data) is in JSON format. salestarget users who understand how to handle webhooks will be able to take advantage of this advanced feature. Our team cannot troubleshoot your code or provide step-by-step development instructions.",
      },
     
    ],
   
  },
  {
    id: "33",
    title:
      "How To Create High-ROI Cold Email Campaigns by Scraping B2B Emails from Twitter (incl. Template)",
    updated: "Updated over 8 months ago",
    content: `This method is great for ramping up your outreach campaign that is highly relevant to your target market. To create a high ROI Cold Email Campaign by scraping the B2B emails from Twitter, follow the procedures below.`,
    features: [
      {
        title: "",
        description:
          "Log in to Twitter. Search for keywords that are related to the desired interest.",
      },
      {
        title: "",
        description:
          "Look for an account with a high follower count and relevant to your target. Copy their link and navigate to Scrapybird. This tool is used to get leads from Twitter.",
      },
      {
        title: "",
        description:
          "Verify the leads. Once finished verifying the leads, start uploading the leads to the campaign.",
      },
    ],
    
  },
  {
    id: "34",
    title: "How to use Builtwith for lead mining",
    updated: "Updated over 8 months ago",
    content: `Builtwith is a feature that builds lists based on what technologies certain companies are using. It shows which sites use shopping carts, analytics, hosting and many more. Filter by location, traffic, vertical, and more.

`,
    features: [
      {
        title: "",
        description:
          "If you are an eCommerce solution provider, you should know which companies use technology similar to yours like Shopify, Magento, Pretashop, and etc. It can filter by location or a keyword that appears on the homepage of the website. ",
      },
      {
        title: "",
        description:
          "If you are a TikTok ad agency, search for TikTok tracking pixel trends to get the list of websites that track conversions from TikTok ads.",
      },
     
    ],
    
  },
  {
    id: "35",
    title: "How to use Launch Gravity to extract leads",
    updated: "Updated over 8 months ago",
    content: `Launch Gravity is a lead database that tracks new business creations and web activity over the month. It focuses on fundable startups and always a good idea to pitch a service or product to recently funded companies because they have money to spend and looking to reinvest in growth and utility.`,
    features: [
      {
        title: "",
        description:
          "They also provide reports and data about Inc. 5000 (fastest-growing companies), Y combinator batches, and Companies founded by former Facebook employees. Having this type of fresh and segmented data also is a great way to do generic personalization/ice-breakers at scale, e.g. “Congrats on getting funding for {{companyName}}!”, “Congrats on your recent ProductHunt launch!”",
      },
      
    ],
   
  },
  {
    id: "36",
    title: "How to manage the Unibox & Best Practices on how to reply to leads",
    updated: "Updated over 8 months ago",
    content: `Unibox is a built-in centralized master inbox where you get all the replies from your leads. It will show all the emails from your connected inboxes, sent by the leads that you contacted. 

 `,
    features: [
      {
        title: "",
        description:
          "So instead of logging in to your email provider for each account, or setting up forwarding for each account to your main inbox, you can access all the emails in one place.",
      },
      {
        title:
          "There are 8 default tabs in Unibox, you can add more by creating custom labels.",
        description:
          "All emails, Interested, Meeting booked, Meeting complete, Closed, Out of Office, Wrong person,Not interested",
      },
     
    ],
   
  },
  {
    id: "37",
    title: "Schedule a reply",
    updated: "Updated over 8 months ago",
    content: `You can schedule a reply to be sent at a later time/date`,
    features: [
      {
        title: "",
        description:
          "Scheduling a reply involves setting a specific time for a message or response to be sent. This can be done in various communication platforms, such as email clients, messaging apps, or social media management tools.",
      },
     
    ],
   
  },
  {
    id: "38",
    title: "How to remove a lead from campaigns",
    updated: "Updated over 8 months ago",
    content: `There are three ways to remove a lead from the campaign.`,
    features: [
      {
        title: "Change the lead status",
        description:
          'To remove a lead from campaigns, you can change the lead status to any status other than the default "Lead" status. By doing so, the sequence for this lead will be stopped automatically so no more emails in this campaign will be sent to this lead.',
      },
      {
        title: "Here are the steps to change the status of your leads:",
        description:
          "Go to the Leads section of the campaign or CRM --> Leads section, Click on the lead, Change the status in the pop-up window",
      },
      
    ],
   
  },
  {
    id: "39",
    title: "Email Outreach plans comparison",
    updated: "Updated over 8 months ago",
    content: `If you are still not sure what plan suits you the best`,
    features: [
      {
        title: "Check below",
        description: "You may connect as many email accounts as you need.",
      },
     
    ],
   

    faq: [
      {
        title: " Do you offer custom pricing?",
        description:
          "Our custom pricing is available above the Light Speed plan, and there are no plans between Growth and HyperGrowth plan.",
      },
      {
        title:
          "How can I increase my limits if I am on HyperGrowth/LightSpeed plan?",
        description:
          " Users can also buy add-ons if they're already on the HyperGrowth or Light Speed plan and would like to send a higher volume. The pricing is +$87/mo for an extra add-on of +25k uploaded contacts. You can stack as many of these as you want, and make this upgrade from your billing page.",
      },
      {
        title:
          "I want to use your platform only to warm up my email addresses, do you have a plan only for warmup?",
        description:
          " There is no warmup-only plan, the warmup service is offered as part of our email outreach plans.",
      },
      {
        title: "Are leads limits being reset every month?",
        description:
          " The uploaded leads limit counts any contact that you have uploaded to salestarget and that is in a campaign (active or paused). These do not work like credits, and do not reset every month - so if you need more space, you can upgrade your account or delete old campaigns and leads.",
      },
    ],
  },
  {
    id: "40",
    title: "Lead Finder plans comparison",
    updated: "Updated over 8 months ago",
    content: `What features are included in different Lead Finder plans`,
    features: [
      {
        title: "",
        description: "If you are still not sure what plan suits you the best",
      },
      {
        title: "",
        description: "check below faqs",
      },
    
    ],
   

    faq: [
      {
        title:
          " If I purchase a Lead Finder, can I send and warmup emails too?",
        description:
          "Lead Finder is a separate data product from our Email outreach tool, so you won't be able to send and warmup email accounts with just Lead Finder.",
      },
    ],
  },
  {
    id: "41",
    title: "Add-on pricing",
    updated: "Updated over 8 months ago",
    content: `The pricing of custom plans and add-ons`,
    features: [
      {
        title: "Add-on for Email Outreach plans",
        description:
          "ou can purchase add-ons (available for Hyper Growth and Light Speed plans) to increase the uploaded contact limit",
      },
      {
        title: "Add-on for Lead Finder plans",
        description:
          "You can purchase add-ons (available for Supersonic leads and higher lead plans) to get more lead credits.",
      },
     
    ],
   
  },
  {
    id: "42",
    title: "salestarget Privacy Center",
    updated: "Updated over 8 months ago",
    content: ``,
    features: [
      {
        title: "Request access to collected data",
        description:
          "In compliance with data privacy regulations (e.g. GDPR, CCPA, etc.), you may formally request and obtain a report detailing the information salestarget has collected on you. Once your request is submitted, we will review, process, and respond to your request promptly in accordance to regulatory compliance guidelines.",
      },
      {
        title:
          "Opt out of salestarget - object to our processing, opt out of sales, and request deletion of your profile",
        description:
          "Under the CCPA, California residents have the right to opt out of “sales” of their business information. Similarly, under the GDPR (and other European data protection laws), individuals in the EEA, the UK, and Switzerland have the right to object to our processing of their business data. ",
      },
     
    ],
   
  },
  {
    id: "43",
    title: "salestarget Sub-processors",
    updated: "Updated over 8 months ago",
    content: `To support the delivery of our services, salestarget may engage and use data processors with access to certain Service Data (each, a “Sub-processor”). This table provides important information about the identity, location, and role of each Sub-processor.`,
    features: [
      {
        title: "Amazon Web Services (AWS)",
        description: "",
      },
      {
        title: "Google Cloud Platform (GCP)",
        description: "",
      },
      {
        title: "Hetzner",
        description:
          "With the largest warmup pool on the market, salestarget ensures your emails never land in spam.",
      },
    ],
    
  },
  {
    id: "44",
    title: "DPA (Data Processing Addendum Document)",
    updated: "Updated over 8 months ago",
    content: `We offer data processing addendums (DPAs) for our customers that operate in the EU that would be considered controllers of personal data for purposes of the General Data Protection Regulation (the GDPR) in connection with their use of salestarget's services. `,
    features: [
      {
        title: "",
        description:
          "Our DPA supplements our Terms of Service and Privacy Policy, and contains contractual terms that address the GDPR’s requirements for data processing agreements between controllers and processors, including with respect to personal data transfer, and that reflect our data privacy and security commitments to our clients. You can see our Data Processing Addendum Document here. The PDF version is attached to this article.",
      },
     
    ],
    
  },
  {
    id: "45",
    title: "salestarget CRM",
    updated: "Updated over 8 months ago",
    content: `salestarget CRM is designed for cold outreach campaigns and integrates multiple communication channels, including email, SMS, and calls. It is built on top of emailing functionalities, making it a comprehensive multi-channel platform.`,
    features: [
      {
        title: "",
        description:
          "Multi-channel integration Allows handling of emails, calls, SMS, tasks, LinkedIn connections, all within the same platform",
      },
      {
        title: "",
        description:
          "Unified Inbox Allows you to view all incoming emails, calls, SMS, and tasks in one main inbox view.",
      },
      {
        title: "",
        description:
          "Opportunity Management You can track different stages of lead statuses such as interested, meetings booked, completed, won, and custom",
      },
    ],
    
  },
  {
    id: "46",
    title: "CRM Features",
    updated: "Updated over 8 months ago",
    content: `Using salestarget CRM is straightforward. Upon accessing the CRM tab`,
    features: [
      {
        title: "",
        description:
          "Inbox contains Emails, Calls, SMS, Tasks, and Everything. ",
      },
      {
        title: "",
        description:
          'Emails tab will display all emails from your Unibox Primary and Other folders, including all lead statuses (out of office, not interested, etc.). To stop displaying emails from outside salestarget, disable "Other" folder in the Preferences, AI automation tab.',
      },
      {
        title: "",
        description:
          "Opportunities give you a consolidated view of all your interested prospects from campaigns and Lists. You can switch between the two by selecting the desired source of opportunities.",
      },
    ],
    
  },
  {
    id: "47",
    title: "How to purchase phone numbers",
    updated: "Updated over 8 months ago",
    content: `salestarget CRM makes it easy to call and text right from the platform. This guide will show you how to use these features and how to register for A2P 10DLC, which you'll need for sending SMS to US numbers.`,
    features: [
      {
        title: "",
        description:
          "Double-check your information, all the details you submit must be correct.",
      },
      {
        title: "",
        description:
          "If there's a problem or your registration has failed right after submitting, contact support via chat.",
      },
     
    ],
   
  },
  {
    id: "48",
    title: "How to add the Website Visitors script to Webflow?",
    updated: "Updated over 8 months ago",
    content: `Salestarget is a cold email software that offers various features tailored to enhance outreach campaigns.`,
    features: [
      {
        title: "Unlimited Email Accounts",
        description: "You may connect as many email accounts as you need.",
      },
      {
        title: "Done-For-You Automatic Email Accounts/ Domains Setup",
        description:
          "An outstanding feature that will save you countless hours on your campaign setup.",
      },
      {
        title: "Unlimited Warmup",
        description:
          "With the largest warmup pool on the market, salestarget ensures your emails never land in spam.",
      },
    ],
   
  },
  {
    id: "49",
    title: "Getting started with the Website Visitors feature",
    updated: "Updated over 8 months ago",
    content: `To start tracking your website visitors, you will have to complete a couple of initial steps`,
    features: [
      {
        title: "",
        description:
          "The Website Visitors feature can detect individual visitor information from US-based traffic - including business email addresses, job titles, what pages they've visited on your website, etc. If you're on a paid plan for this feature, you can also get additional 'company-only' visitor resolutions for free.",
      },
      {
        title: "",
        description:
          "The visitor information does not come from your existing campaigns or lists. Instead, it is discovered and enriched by our powerful AI-powered algorithm. Long story short, this helps you discover data for all warm/inbound leads that you'd have otherwise missed.  ",
      },
      
    ],
   
  },
  {
    id: "50",
    title: "salestarget.ai Website Visitor ID Legal Compliance Onboarding",
    updated: "Updated over 8 months ago",
    content: `Welcome to salestarget.ai Website Visitor ID Tool! 🚀`,
    features: [
      {
        title: "",
        description:
          "This document will guide you through the necessary legal compliance steps to ensure that our service is used responsibly and in accordance with relevant laws. Our commitment to privacy and data protection is at the forefront of our operations, and we want to ensure the same for your use of our product. This document is provided for informational purposes only and is not intended to constitute legal advice.",
      },
      {
        title: "",
        description:
          "Ultimately, it is your responsibility to ensure that you are collecting and using personal information in compliance with all applicable laws and regulations. If you have any questions please consult legal counsel.",
      },
     
    ],
    
  },
  {
    id: "51",
    title: "Inbox Placement feature",
    updated: "Updated over 8 months ago",
    content: `What is Inbox Placement feature and how to launch and configure tests`,
    features: [
      {
        title: "",
        description:
          "Bad results from your cold email campaigns, Without visibility into your email performance, you can’t troubleshoot problems. Your IPs or domains might get blacklisted, impacting future campaigns.",
      },
      {
        title: "",
        description:
          "That's what the Inbox Placement feature helps with - providing you with the tools and insights to help your emails reach your ideal clients.",
      },
      
    ],
    
  },
  {
    id: "52",
    title: "Inbox Placement: one-time tests",
    updated: "Updated over 8 months ago",
    content: `You will need a Growth or HyperGrowth Inbox Placement subscription. Get it here. The plan is shareable across all the workspaces you own.`,
    features: [
      {
        title: "",
        description:
          "Before running Inbox Placement tests, set the maximum number of inbox placement tests per day in the sending account settings:",
      },
      
    ],
    
  },
  {
    id: "53",
    title: "Inbox Placement - automated tests",
    updated: "Updated over 8 months ago",
    content: `How to launch automated tests`,
    features: [
      {
        title: "What is the Automated Inbox Placement Test?",
        description:
          "It’s a feature that automatically checks if your emails land in the inbox, promotions, or spam folders and gives detailed deliverability insights.It helps by automating placement tests, providing insights into blacklists, spam triggers, and email health, allowing you to optimize campaigns and improve deliverability while spending less time on manual tasks.",
      },
     
    ],
    
  },
  {
    id: "54",
    title: "Monthly email volume",
    updated: "Updated over 8 months ago",
    content: `Monthly Email Volume Overview`,
    features: [
      {
        title: "What is your average monthly email volume?",
        description:
          "Our average monthly email volume refers to the total number of emails we send out through our platform each month. This includes newsletters, promotional emails, transactional messages, and automated campaigns. On average, we send approximately [X,000 to Y,000 emails/month], but this number can fluctuate based on campaign schedules, customer segmentation, and seasonal marketing efforts. If you're referring to your own monthly email usage, you can typically find this data in your account dashboard under 'Email Analytics' or 'Usage Reports.'",
      },
    ],
    
  },
  {
    id: "55",
    title: "Required email accounts",
    updated: "Updated over 8 months ago",
    content: `Email Account Requirements`,
    features: [
      {
        title: "How many email accounts are required to send monthly emails?",
        description:
          "Only one email account is required to send monthly emails, regardless of the volume. This account will be used as the sender for all outgoing emails to maintain consistency and ensure deliverability. If you're managing multiple brands or campaigns, additional email accounts can be added, but they are not mandatory unless you need separate sender identities.",
      },

    
    ],
   
  },
  {
    id: "56",
    title: "Required domains",
    updated: "Updated over 8 months ago",
    content: `Number of Domains Needed for Sending Emails`,
    features: [
      {
        title: "How many domains are required to send monthly emails?",
        description:
          "You need at least one verified domain to send emails effectively. This domain is used for the sender address (e.g., yourname@yourdomain.com) and must be properly authenticated using SPF, DKIM, and optionally DMARC to ensure high deliverability and avoid spam filters. While one domain is sufficient for most cases, multiple domains can be used if you're sending emails on behalf of different brands or departments.",
      },
    ],
   
  },
  {
    id: "57",
    title:
      "💰 What are the total monthly costs for sending emails through our platform?",
    updated: "Updated over 8 months ago",
    content: `Email Campaign Cost Breakdown`,
    features: [
      {
        title: "",
        description:
          "The monthly cost for sending emails depends on three main components: the number of email accounts you use, the number of domains required, and a flat-rate sending & warmup fee. Here's how it works: ",
      },
      {
        title:
          "1. Email Accounts Cost. There are two types of email accounts you can choose from:",
        description:
          "Warmed-Up Email Accounts – These accounts are pre-warmed and ready to send at full volume immediately. Cost: $10 per account per month.",
      },
      {
        title: "",
        description:
          "Unwarmed Email Accounts – These are new accounts that require a warmup period before reaching full sending capacity. Cost: $5 per account per month.",
      },
      {
        title: "",
        description:
          "Each account is generally safe to send about 30–50 emails per day, depending on warmup status and domain reputation. The more emails you want to send per day, the more accounts you'll need. For example, if you're sending 300 emails per day, you'll typically need about 10 email accounts.",
      },
      {
        title: "2. Domains Cost",
        description:
          "Domains are used to increase email deliverability and reduce the chances of emails landing in spam. Each domain is priced at $15 per month. We recommend using 1 domain for every 5 email accounts. This ensures sending is well-distributed and your domain reputation remains strong. So, if you're using 10 email accounts, you’ll need 2 domains.",
      },
      {
        title: "3. Sending & Warmup Service Fee",
        description:
          "This is a flat monthly fee of $85, which covers the infrastructure and ongoing management of your email sending system. It includes: Sending infrastructure and IP rotation",
      },
      {
        title: "",
        description: "Automated warmup processes for new accounts",
      },
      {
        title: "",
        description: "Deliverability monitoring",
      },
      {
        title: "",
        description: "Best-practice configurations to improve inbox placement",
      },
      {
        title: "",
        description: "This fee is fixed and does not change based on volume.",
      },
      {
        title: "🧮 Built-In Cost Calculator",
        description:
          "To make planning easy, we’ve integrated a calculator directly into our platform. Simply enter how many emails you want to send per day, and it will automatically calculate:",
      },
      {
        title: "",
        description: "Total monthly email volume",
      },
      {
        title: "",
        description: "Number of email accounts required",
      },
      {
        title: "",
        description: "Number of domains needed (1 per 5 accounts)",
      },
      {
        title: "",
        description: "Email account cost",
      },
      {
        title: "",
        description: "Domain cost",
      },
      {
        title: "",
        description: "Flat warmup and sending service fee",
      },
      {
        title: "Total upfront cost and monthly recurring cost",
      },
      {
        title: "🔎 Example",
        description: "If you want to send 300 emails per day:",
      },
      {
        title: "",
        description: "You’ll need about 10 email accounts",
      },
      {
        title: "",
        description: "You’ll need 2 domains",
      },
      {
        title: "",
        description: "If you choose unwarmed accounts, that's $50 (10 × $5)",
      },
      {
        title: "",
        description: "Domains cost $30 (2 × $15)",
      },
      {
        title: "",
        description: "Plus the $85 sending & warmup service fee",
      },
      {
        title: "",
        description:
          "That brings your total monthly cost to $165/month for unwarmed accounts, or $215/month if you go with warmed-up accounts.",
      },
    ],
   
  },
  {
    id: "58",
    title: "Why is it important to warm up your domain and email accounts?",
    updated: "Updated over 8 months ago",
    content: `In cold email outreach, the success of your campaigns greatly depends on your email deliverability. Warming up your domain and email accounts properly ensures that your emails land in the inbox rather than the spam folder. This article outlines the reasons why warm-up is essential and offers best practices and a proven plan for optimal results.`,
    features: [
      {
        title: "Why Warm Up Your Domain and Email Accounts?",
        description:
          "Warming up your email accounts and domains is a fundamental step in successful cold email outreach. If you don't warm up your email accounts properly, your messages could end up in the spam folder, or worse, your domain could be blacklisted. Warming up gradually builds trust with Internet Service Providers (ISPs) and email systems, signaling that your email practices are legitimate and trustworthy.",
        image: "",
      },
      {
        title: "Improve Deliverability",
        description:
          "By gradually increasing the volume of sent emails, your email accounts and domain establish a positive reputation with ISPs. This increases the likelihood of your emails landing in the inbox rather than being flagged as spam.",
      },
       {
        title: "Warm-Up Plan – Initial Phase (Days 1–7)",
        description:
          "Send 5–10 emails per day to trusted/internal contacts. The goal is to build initial engagement and avoid triggering spam filters.",
      },

      {
        title: "Warm-Up Plan – Progression Phase (Days 8–14)",
        description:
          "Increase to 20–25 emails per day. Begin including real prospects with personalized content. Encourage replies and interactions.",
      },
      {
        title: "Warm-Up Plan – Full Capacity Phase (Day 15+)",
        description:
          "Send up to 30 emails per day per account. Maintain quality and relevance to preserve domain reputation and inbox placement.",
      },
    ],
   
  },
  {
    id: "59",
    title:
      "What are the limits for domain and email accounts on SalesTarget.ai?",
    updated: "Updated over 8 months ago",
    content: `Number of Domains Needed for Sending Emails`,
    features: [
      {
        title:
          "What are the limits for domain and email accounts on SalesTarget.ai?",
        description:
          "SalesTarget.ai sets specific limits on the number of emails you can send per day per account to ensure that your domain’s reputation stays intact, especially during the warm-up phase. By adhering to these limits, you can maintain a positive sender reputation, which is essential for avoiding spam filters and ensuring your emails reach your recipients' inbox.",
      },
      {
        title: "Domain Limit:",
        description:
          "Each domain can support up to 5 email accounts. It's important to note that all accounts under the same domain share the same reputation. If one account sends too many emails too quickly and gets flagged, it can negatively affect all other email accounts under that domain. Therefore, warming up all email accounts within a domain together, at a controlled pace, is critical.",
      },
      {
        title: "Email Account Limit:",
        description:
          "Each email account is allowed to send up to 30 emails per day. This limit helps prevent overuse of the account and ensures it doesn’t raise red flags with ISPs. Gradually increasing this limit as part of your warm-up plan helps ensure that the account builds a good reputation and avoids triggering spam filters.",
      },
      {
        title: "Build Trust with ISPs",
        description:
          "ISPs look for patterns in email behavior. If you send too many emails too quickly from a new domain or account, it can appear suspicious. A well-warmed domain demonstrates to ISPs that you’re a legitimate sender, reducing the chances of being flagged or blacklisted.",
      },
      {
        title: "Maximize Open Rates",
        description:
          "As you build your sender reputation, recipients are more likely to open your emails, thus improving engagement and making future email campaigns more effective. Warmed-up email accounts tend to have better open rates, which is crucial for email marketing success.",
      },
    ],
   
  },
  {
    id: "60",
    title: "What is the warm-up plan for SalesTarget.ai users?",
    updated: "Updated over 8 months ago",
    content: `Number of Domains Needed for Sending Emails`,
    features: [
      {
        title: "SalesTarget.ai Email Warm-Up Strategy",
        description:
          "Each domain can have up to 5 email accounts. All accounts share the domain reputation, so warm-up should be managed carefully. Each account is limited to sending 30 emails per day to maintain a healthy sender profile.",
        image: "",
      },
     
      
      {
        title: "",
        description:
          "Initial Phase (Days 1–7): Daily Emails per Account: Start small with 5–10 emails per account per day. Focus: During this phase, it’s essential to send emails only to trusted contacts, such as internal colleagues or known contacts. This helps ensure that the email interactions are genuine and that any issues with the email’s appearance (such as formatting or links) can be addressed before reaching real prospects. Goal: The goal is to begin establishing positive engagement (opens, clicks, replies) with a small, safe group.",
      },
      {
        title: "",
        description:
          "Progression Phase (Days 8–14): Daily Emails per Account: Gradually increase to 20–25 emails per account per day. Focus: Begin sending emails to real prospects, but still at a controlled pace. You should aim for personalized content, compelling subject lines, and calls to action that encourage engagement. Goal: The goal is to gain higher engagement rates while maintaining careful control over the volume of emails sent to avoid appearing spammy.",
      },
      {
        title: "",
        description:
          "Full Capacity Phase (Days 15 and Beyond): Daily Emails per Account: Once your domain and email accounts have gained a good reputation, increase the daily limit to 30 emails per account. Focus: Continue sending relevant, personalized emails with a high level of engagement. Now that the accounts have a strong reputation, you can scale up email outreach while ensuring ongoing engagement. Goal: At this point, your email accounts should be fully warmed up, and you should aim to maintain high engagement while expanding your outreach to larger lists.",
        image:"/Blog9_img2.png"
      },
      {
        title: "What is the warm-up plan for SalesTarget.ai users?",
        description:
          "SalesTarget.ai recommends a strategic warm-up plan for users to gradually increase email volume over time. This ensures that both the domain and individual email accounts maintain a good reputation and helps to improve deliverability. Below is a detailed breakdown of the warm-up phases:",
      },
    ],
   
  },
  {
    id: "61",
    title: "What are the tips for a successful warm-up?",
    updated: "Updated over 8 months ago",
    features: [
      {
        title: "Tips for a Successful Warm-Up",
        description:
          "• Monitor email activity like open rates, replies, and bounces.\n• Avoid spammy content (all-caps, too many links, or attachments).\n• Encourage engagement to signal trust.\n• Use warm-up and reputation monitoring tools.",
        image: "",
      },
      
    ],
    
  },
  {
    id: "62",
    title: "How to Set Up Your Email Account on SalesTarget.ai",
    updated: "",
    content: `Setting up your email account on SalesTarget.ai is an essential step to start your email outreach campaigns. This step-by-step guide walks you through the process of configuring your email account, whether you’re using pre-warmed email accounts, linking an existing Gmail or G-Suite account, or purchasing a custom domain.`,
    features: [
      {
        title: "Step 1: Log In to Your Account",
        description:
          "Navigate to SalesTarget.ai and log in with your credentials. If it's your first time logging in, complete the email verification process.",
        image: "/setting_salestarget_account.png",
      },
      {
        title: "Step 2: Navigate to the Email Accounts Section",
        description:
          'After logging in, go to the left sidebar of your dashboard. Click on "Email Accounts" to begin setting up your email account.',
        image: "",
      },
       {
        title: 'Step 3: Click "Add New" to Start Adding Your Domain',
        description:
          'In the Email Accounts section, click "Add New" to begin configuring your email.',
        image: "/blog9_emailaccounts.png",
      },
      {
        title: "Step 4: Connect Your Email (Choose One of the 4 Options)",
        description:
          "You’ll be redirected to the Connect Email page, where you can choose from the following options.",
        image: "/blog9_connectemail.png",
      },
      {
        title: "Option 1: Pre-Warmed Email Accounts",
        description:
          "These accounts are ready-to-use and warmed up, so you can start sending emails immediately. Benefits include:\n- Ready-to-use accounts and domains\n- Start sending emails instantly\n- Optimized for maximum email deliverability",
        image: "",
      },
      {
        title: "Option 2: Create Your Own Domain",
        description:
          "You can purchase a custom domain directly from SalesTarget.ai. After selecting a domain, you’ll receive 5 email accounts for that domain. Note: DNS propagation can take up to 24 hours.",
        image: "/blog9_create_domain.png",
      },
      {
        title: "Option 3: Link Existing Gmail or G-Suite Accounts",
        description:
          "If you already have a Gmail or G-Suite account, you can link it directly by selecting Gmail/G-Suite and authenticating with Google.",
        image: "",
      },
      {
        title: "Option 4: Mail Pilot",
        description:
          'This option allows you to configure an external email provider or custom SMTP setup by choosing "Mail Pilot" and following the instructions.',
        image: "",
      },
      {
        title: "Final Notes on DNS Propagation",
        description:
          "DNS changes may take up to 24 hours to fully propagate. If your email is not set up after that time, consult the Help Center or contact support.",
        image: "",
      },
    ],
    
    faq: [
      {
        title: "How long does it take for my email account to be fully set up?",
        description:
          "DNS propagation can take 24–72 hours. During this time, your account may not be fully operational.",
      },
      {
        title: "Can I link my existing email account to SalesTarget.ai?",
        description:
          'Yes. Use the "Link Existing Accounts" option and authenticate with Google to connect your Gmail or G-Suite account.',
      },
      {
        title:
          "What is the difference between Pre-Warmed Email Accounts and linking my own domain?",
        description:
          "Pre-Warmed: Ready-to-use and optimized for deliverability.\nCustom Domain: Purchase and set up your domain, which may take up to 24 hours.",
      },
      {
        title: "How do I know if my domain is fully set up?",
        description:
          "You’ll receive a notification once setup is complete. You can also monitor email delivery and inbox placement.",
      },
      {
        title: "Can I set up multiple email accounts under the same domain?",
        description:
          "Yes, you get 5 email accounts with each purchased domain. These will show as “Active” once set up.",
      },
      {
        title: "What happens if I exceed the daily email sending limit?",
        description:
          "Each account can send up to 30 emails/day. Exceeding this limit will temporarily pause sending until the next day.",
      },
      {
        title: "Do I need to install any software to connect my email account?",
        description:
          "No installation required. The entire process is handled within the SalesTarget.ai platform.",
      },
    ],
  },

  {
    id: "63",
    title: "How do I add a new email account on SalesTarget.ai?",
    updated: "",
    content: ``,
    features: [
     
    ],
    

    faq: [
      
    ],
  },
  {
    id: "64",
    title:
      "What are the four options for setting up an email account on SalesTarget.ai?",
    updated: "",
    content: ``,
    features: [
      
    ],
   

    faq: [
      
      ,
    ],
  },
  {
    id: "65",
    title: "what is Co-pilot?",
    updated: "",
    content: ``,
    features: [
      
    ],
    

    faq: [
      
    ],

    
  },

  {
    id: "67",
    title: "Meet Copilot - The Free AI Sales Assistant in SalesTarget.ai",
    updated: "",
    content: `Copilot in SalesTarget.ai is your always-on AI sales assistant that helps with cold email outreach, lead generation, sales analytics, and Memory — all in one place.


`,
    metaTitle: "Meet Copilot — Free AI Sales Assistant in SalesTarget.ai",
    metaDescription: "Copilot is your free AI sales assistant inside SalesTarget.ai. Write cold emails, generate leads, update CRM, analyze pipeline, and use Memory for context-aware outreach.",
    metaKeywords: "Salestarget.ai, Copilot ,AI sales assistant ,sales automation ,AI email outreach,lead generation,CRM AI,sales analytics,B2B sales AI ",
    features: [
      {
        content:"👉It works across AI Email Outreach, Lead Explorer, Sales Analytics, and Memory, so you can move from ICP → outreach → deals → pipeline growth without switching tools.",
        type:"paragraph",
        isParagraph:true
      },
      {
        content:"👉Copilot is completely free to use.",
        type:"paragraph",
        isParagraph:true
      },
      {
        src: "/intro.jpg",
        alt: " SalesTarget.ai Copilot dashboard showing options to find prospects, generate campaigns, write sequences, and view analytics with an AI-powered chat interface.",
        caption: "",
        type: "image",
        isImage: true
      },
        {
         title : "Quick Highlights",
         type: "heading",
         isHeading: true
       },
       {
        title : "What is Copilot?",
        description: "A free AI assistant inside SalesTarget.ai ",
        },
        {
        title : "What does it do? ",
        description: "Writes cold email sequences, suggests audiences, summarizes activity, reads your website for context, and recommends next steps."
        },
        {
          title : "Who is it for? ",
          description : " Founders, SDRs, sales teams, agencies "
        },
        {
          title : "Why does it matter? ",
          description : "Less manual work, faster pipeline, more meetings booked"
        },
        {
          title : "How much does it cost? ",
          description : "Copilot is free. Other modules have 7-day free trials and credits",
        },
       {
  title: "What Copilot Can Do",
  type: "heading", 
  isHeading: true
},
        {
          title: "1. AI Email Outreach (Cold Email Writer)",
          type:"heading",
          isHeading:true
        },
        {
          description : "	Generate 3–5 step email sequences from a short brief",
  
        },
        {
          description : "	Personalize intros using company, role, or industry context.",
        },
        {
          description: "	Suggest subject lines, CTAs, and A/B test variations.",
        },
        {
          description: "	Adjust tone: friendly, formal, concise, or persuasive.",
        },
        {
           content: "Example Prompt:",
    isParagraph: true
        },
        {
           src: "/hello.jpg",
  alt: "SalesTarget.ai Copilot generating a 4-step cold email outreach sequence for Heads of Sales at US SaaS companies with AI-written subject lines and personalized email copy.",
  caption: "Create a 4-step cold email sequence for Heads of Sales at US SaaS companies (50–200 employees). Keep each email under 120 words",
  type: "image",
  isImage: true
        },
    
        {
          title: "2. AI Lead Generation (Lead Explorer) ",
            type:"heading",
          isHeading:true
        },
        {
          description : "	Turn your ICP (Ideal Customer Profile) into filters.	",
    
  
        },
        {
          description : "	Suggest lookalike accounts and adjacent segments.",
        },
        {
          description : "	Recommend safe sending list sizes for testing.",
        },
          {
           content: "Example Prompt:",
    isParagraph: true
        },
        {
           src: "/Leads.jpg",
  alt: " SalesTarget.ai Copilot suggesting ICP filters for APAC SaaS companies and generating a 25-contact test list for cold email outreach.",
  caption: "Suggest 3 ICP filters for APAC SaaS companies likely to care about lowering CAC. Then propose a 25-contact test list",
  type: "image",
  isImage: true
        },
     
        {
          title: "3.Sales Analytics Assistant ",
            type:"heading",
          isHeading:true
        },
        {
          description : "	Summarize campaign results.",
        },
        {
          description : "	Highlight which sequences and subject lines perform best.",
        },
        {
          description : "	Recommend next steps to improve reply and conversion rates.",
        },
        {
           content: "Example Prompt:",
    isParagraph: true
        },
          {
           content: "Summarize the last 3 campaigns and suggest 2 optimizations to improve open rates.",
    isParagraph: true
        },
      
        {
          title:"4. Memory (Business Data Awareness) ",
            type:"heading",
          isHeading:true,
        },
        {
          content:"Memory is where Copilot becomes truly context-aware. Instead of starting from scratch, you can add your website and ICP details, and Copilot will personalize everything.",
          isParagraph: true
        },
        {
            src: "/memory.jpg",
            alt: "SalesTarget Copilot Memory feature asking the user to enter their website URL to extract business data.",
            caption: "Optional caption text",
            type: "image",
            isImage: true
        },
        {
            stepTitle: "Step 1. Add Your Website",
            isStep: true
        },  
        {
          content: "Enter your website URL, and Copilot instantly extracts your company name, description, awards, and outreach goals. ",
          isParagraph: true
        },
        {
         
          src : "/memory1.jpg",
           alt: "SalesTarget Copilot Memory panel for entering website details including URL,company name, description, awards, and outreach goals.",
            caption: "",
            isImage: true
        },
        {
          src:"/memory2.jpg",
          alt: "SalesTarget Copilot Memory screen for defining Ideal Customer Profiles with fields like company size, challenges, and unique selling points.",
          caption: "",
          isImage: true
        },
        {
            stepTitle: "Step 2. Define Customer Profiles",
            isStep: true
        },  
        {
            content: "Add Ideal Customer Profiles (ICPs) — company size, problems solved, benefits, and unique selling points.",
            isParagraph: true
        },
        {
              src: "/memory3.jpg",
              alt: "Image description",
              caption: "",
              isImage: true
        },
         {
            stepTitle: "Step 3. Add Guidance Rules",
            isStep: true
        },  
         {
            content: "Set up smart rules (up to 10) to guide tone, style, and outreach strategy.",
            isParagraph: true
        },
       {
         content: "Example Rules:",
         isParagraph: true
       },
        {
          description : " Keep subject lines under 6 words.",
        },
        {
          description : "Always include a calendar link in the last email ",
        },
        {
          description : " Prioritize SaaS companies in APAC  ",
        },
        {
  src: "/Picture9.jpg",
  alt: " SalesTarget Copilot Memory Guidance tab where users can add up to 10 smart rules to guide outreach preferences.",
  caption: "",
  isImage: true
},     
      {
  src: "/Picture10.jpg",
  alt: " SalesTarget Copilot popup for adding a new rule, with example text: “Always include a calendar link in the last email.”",
  caption: "",
  isImage: true
},
        
     
        {
          title:"Why Memory Matters",
            type:"heading",
          isHeading:true
        },
        {
          title: "Consistent Messaging ",
          description:"Copilot always speaks in your brand voice"
        },
        {
          title:"Context-Aware Responses",
          description:"Prompts and drafts reflect your ICP and positioning."
        },
        {
          title: "Faster Setup ",
          description:" No need to repeat background info. "
        },
        {
          title:"Smarter Outreach ",
          description:"Recommendations tied to your real business data."
        },
        
         {
              content: " Example Prompt:",
              isParagraph: true
        },
         {
              content: "Based on our website and ICP for mid-market SaaS teams, draft a 3-step cold email sequence to highlight automation benefits.”",
              isParagraph: true
        },
        {
            title: "Your Copilot Workspace",
            isHeading: true
        },
        {
              content: "With the SalesTarget.ai Copilot dashboard, you can:",
              isParagraph: true
        },
        {
          title:"New Chat ",
          description:"Ask Copilot anything (e.g., “Find ideal prospects” or “Summarize this campaign”)."
        },
        {
          title:"Memory",
          description:"Add your website so Copilot can read and use your business data."
        },
        {
          title:"Analytics",
          description:"Review campaign outcomes and get improvement suggestions."
        },
        {
          title:"How Copilot Fits Your Sales Workflow",
          isHeading: true
        },
        {
          title:"	Define ICP ",
          description:"Copilot builds filters in Lead Explorer."
        },
        {
          title:"Generate List ",
          description:"Copilot recommends size + adjacent segments."
        },
        {
          title:"	Write Outreach Sequence ",
          description:"Copilot drafts, personalizes, and A/B tests."
        },
        {
          title:" Send in Batches ",
          description:"→ Copilot monitors and optimizes"
        },
        {
          title : "	Use Memory",
          description: "Copilot references your website for smarter outputs." 
        },
        {
          title : " Quick Start (In 10 Minutes) ",
          isHeading: true
        },
        {
          description: "Log in to SalesTarget.ai → find Copilot in the sidebar."
        },
        {
          description : "Pick a goal (e.g., “Book 5 FinTech discovery calls this week”)."
        },
        {
          description : "Paste your ICP (or let Copilot ask questions)"
        },
        {
          description : " Generate a sequence → choose tone + personalization "
        },
        {
          description : "	Create a 25-contact test list → hit send."
        },
        {
          description : "	Add your website to Memory → let Copilot tailor outputs."
        },
        {
          title: "Free Access Recap",
          isHeading: true
        },
        {
          title:"Copilot (AI sales assistant)",
          description: "Always free"
        },
        {
          title:"AI Email Outreach",
          description:"7-day trial + 100 credits"
        },
        {
          title: "Lead Explorer",
          description: "7-day trial + 100 credits"
        },
        {
          title:"Upload Data",
          description:"100 credits (CSV + enrichment)"
        },
     
        {
          title: "Prompt Recipes (Copy/Paste)",
          isHeading: true
        },
       {
        title:"Subject lines",
        description:"10 subject lines for SaaS Heads of Sales about reducing prospecting time "
       },
       {
        title:"Personalization:",
        description:"1-sentence opener using {first_name}, {company}, and {recent_news}"
       },
       {
        title:"Objection handling",
        description:"Reply to ‘We’re doing this in-house’ with a short invite for a 15-minute teardown."
       },
       {
        title:"Follow-ups",
        description:"Day-3 follow-up if opened but no reply. Offer 2 time slots"
       },
       {
        title:"Deals Summary",
        description:"Summarize last 5 emails with Contoso and propose next action"
       },
       {
        title:"Memory prompt",
        description:"Use our website content and generate a 3-step outreach for SMB FinTech prospects."
       },
       {
        title:"Best Practices",
        isHeading: true
       },
       {
        description:"Start with 25–50 contacts, then scale"
       },
       {
        description:"Keep ICP segments tight (industry + role + region)"
       },
       {
        description:"Cold emails ≤120 words, subject lines 4–6 words"
       },
       {
        description:"Use one clear CTA per email."
       },
       {
        description:"Add your website to Memory early so Copilot learns your messaging"
       },
       {
        title:"Who Benefits Most",
        isHeading: true
       },
       {
        title:"Founders & Solo Sellers",
        description:"Faster to first meetings"
       },
       {
        title:"SDRs / BDRs",
        description:"Build lists + launch campaigns faster."
       },
       {
        title:"Sales Leaders / RevOps",
        description:"Cleaner pipeline, weekly clarity"
       },
       {
        title:"Agencies",
        description:"Reusable playbooks for multiple clients"
       }

    ],
    

    faq: [

      {
      title:"Is Copilot free?",
      description:"Yes. Copilot is completely free inside SalesTarget.ai"
      },

      {
        title:"Does Copilot replace sales reps?",
        description:"No. It assists reps with writing, research, and recommendations. Strategy and relationships stay human."
      },

      {
        title:"How do trials/credits work?",
        description:"Copilot is free. Email Outreach, Lead Explorer, and Upload Data come with 100 credits each. CRM has a 7-day trial."
      },

      {
        title:"Is my sales data secure?",
        description : "Yes. Your workspace data stays in your account. Imports, lists, and enrichment are private to you"
      },

      {
        title:"Does Memory store my website data?",
        description:"Yes. When you add your website, Copilot securely pulls content for context-aware responses. Data remains private to your account."
      },
      {
        title:"Ready to Try Copilot?",
        description:"Log in to SalesTarget.ai, enter your ICP and sales goal, and let Copilot handle outreach, lead generation, CRM insights, analytics, and website-based Memory — all in one place"
      },
      {
        title:"Need help? Email support@salestarget.ai for a quick start playbook."
      }
    ],

    
    
  },

  {
    id: "68",
    title: "Try SalesTarget.ai Free — Do Real Sales Work in 7 Days",
    updated: "",
    content: `Choosing a sales platform shouldn’t feel like a leap of faith. You need proof it fits your workflow and actually moves pipeline. That’s why SalesTarget.ai gives you hands-on access to the core tools—so you can build lists, run AI email outreach, and track deals before you ever pay.Below is a clear breakdown of what’s included, how credits work (with separate buckets you can track), and a one-week plan to see results fast.`,
   metaTitle: "Try SalesTarget.ai Free | 7-Day Trial with AI Email, CRM & Copilot",
    metaDescription: "Start a 7-day free trial of SalesTarget.ai. Build lead lists, run AI-powered outreach, manage CRM, and get unlimited help from Copilot—all before you pay.",
    metaKeywords: "SalesTarget.ai, free trial, AI email outreach, CRM trial, B2B leads, sales automation, AI sales assistant, Copilot",

    features: [
      
      {
        title:"What you get (at a glance)",
        isHeading:true

      },
      {
        isTable: true,
        headers: ["Product/Feature", "Free Access " , " What it lets you do "],
        rows : [["AI Email Outreach", "7-day trial + 100 credits" , "Create multi-step sequences, have AI write &amp; personalize copy, A/B test subject lines, and automate follow-ups."] ,


        ["CRM", "7-day trial" , "Track opportunities, stages, tasks, notes, and pipeline analytics—all in one place."],

        ["Lead Explorer (AI-powered)" , "7-day trial + 100 credits" , "Find ICP-matched, verified B2B contacts with AI suggestions for lookalike accounts; enrich and save lists to campaigns."],

        ["Copilot (AI assistant)" , "Free" , "Ask for campaign ideas, write copy, summarize activity, and get next-best actions anywhere in the app."] ,

        ["Upload Your Data (BYO leads)" , "100 credits" , "Import a CSV and we'll automatically add missing details, remove duplicates, and put each column in the right place—ready for AI Email Outreach and CRM ."]
      ]
      },

      {
        title: "Credits dashboard:",
        description:"You get three separate 100-credit buckets—Lead Explorer, AI Email Outreach, and Upload Your Data. Your live balances are visible in the app so you can plan usage with no surprises."
      },
  
    
      {
        title: "Why start with a trial?",
        isHeading:true
      },
      {
        title:"Low risk, high signal.",
        description:"In a week you’ll know if SalesTarget.ai fits your team."
      },
      {
        title:"Real work, not demos.",
        description:"Build a list, run AI outreach, log replies, move deals."
      },
      {
        title:"Everything connected.",
        description:"Lead Explorer ↔ AI Email ↔ CRM, with Copilot helping at each step."
      },
      {
        title: "Get started in minutes",
        isHeading:true
      },
      {
        description:"Create your workspace at salestarget.ai and log in.",
      },
      {
        description:"Activate trials for AI Email Outreach, CRM, and Lead Explorer (Copilot is free and ready).",
      },
      {
        description:"Define your ICP (industry, role, company size, region).",
      },
      {
        description:"Draft a sequence with Copilot (3–5 steps), personalize with variables, and set your sending window.",
      },
      {
        description:"Launch a small batch (e.g., 25 contacts), then scale what works.",
      },
      {
        title:"A 7-day blueprint (so you get real signal)",
        isHeading:true
      },
      {
        title:"Day 1 — Setup & strategy",
        description:"Connect your sender email, define your ICP, and ask Copilot for angles and subject lines."
      },
      {
        title:"Day 2 — Build your first list (Lead Explorer)",
        description:"Use filters + AI suggestions to generate a tight segment. Spend Lead Explorer credits on best-fit contacts."
      },
      {
        title:"Day 3 — Sequence (AI Email Outreach)",
        description:"Use Copilot to draft and personalize a 3–5 step sequence. Add a clear CTA."
      },
      {
        title:"Day 4 — Send &; monitor",
        description:"Start with a small cohort. Track opens, clicks, and replies. Push engaged contacts into CRM."
      },
      {
        title:"Day 5 — Follow-ups &; deals (CRM)",
        description:"Log calls/notes, move opportunities through stages, set tasks. Ask Copilot to summarize progress."
      },
      {
        title:"Day 6 — Improve",
        description:"Test a new subject line or opener. Try a second micro-segment (different industry or seniority)."
      },
      {
        title:"Day 7 — Review outcomes",
        description:"Check replies and meetings booked, opportunities created, and pipeline value. Decide what to scale."
      },
      {
        title:"Tips to stretch your credits",
        isHeading:true
      },
      {
        description:"Aim for quality &gt; quantity: one tightly defined segment beats a broad blast.",
      },
      {
        description:"Use Copilot for fast personalization to lift replies without manual work.",
      },
      {
        description:"Batch test 2 subject lines × 2 openers; keep the winner, pause the loser.",
      },
      {
        description:"Keep CRM stages tidy—clean data makes your week-one analytics meaningful..",
      },

    ],
    

    faq: [
      {
        title: "How do the credits work?",
        description: "You have three 100-credit buckets during your free access: Lead Explorer (100), AI Email Outreach (100), and Upload Your Data (100). Your remaining balances update in real time in the app."
      },
      {
        title: "Is Copilot really free?",
        description: "Yes. Copilot remains free for ideation, writing, summaries, and guidance—before, during, and after your trials."
      },
      {
        title: "What happens when the 7-day trials end?",
        description: "Access to AI Email Outreach, Lead Explorer, and CRM pauses until you upgrade. Your workspace and data remain intact. Copilot stays free."
      },
      {
        title: "Can I invite my team?",
        description: "Absolutely—add teammates so you can test collaboration, assignments, and shared pipeline."
      },
      {
        title: "Ready to try it?",
        isHeading:true
      },
      {
        title:"AI Email Outreach:",
        description:"7-day free trial + 100 credits"
      },
      {
        title:"CRM:",
        description:"7-day free trial "
      },
      {
        title:"Lead Explorer (AI-powered):",
        description:"7-day free trial + 100 credits"
      },
      {
        title:"Upload Your Data:",
        description:"100 credits"
      },
      {
        title:"Copilot (AI assistant):",
        description:"Free"
      },
      {
        title:"Start here: salestarget.ai → create your workspace → enable the trials. Need help? Email support@salestarget.ai—we’ll get you productive on Day 1."
      }
    ],
  },

  {
    id: "69",
    title: "The Ultimate Cold Email Warm-Up Plan to Build a Strong Sender Reputation",
    updated: "",
    content: `Cold email outreach is still one of the fastest ways to generate B2B leads. But here’s the
catch — if your emails don’t land in the inbox, they’ll never be read. Deliverability is
everything.
Think about it: You can write the perfect subject line, the smartest copy, and have a killer
offer. But if Gmail or Outlook thinks you’re spammy, your prospects won’t even see it.
That’s why having a solid email warm-up plan is non-negotiable. Whether you’re launching
your very first outbound campaign or adding new domains to scale, a structured warm-up
process ensures your messages reach inboxes — not spam folders.
In this guide, I’ll walk you through a proven warm-up strategy we use at SalesTarget.ai, plus
how our automated warm-up tool can save you from all the manual effort.`,
metaTitle: "The Ultimate Cold Email Warm-Up Plan | Build Strong Sender Reputation",
    metaDescription: "Learn how to warm up cold email accounts the right way. Follow our proven 3-step warm-up plan and automate the process with SalesTarget.ai to boost deliverability.",
    metaKeywords: "cold email warm-up , email deliverability,sender reputation,B2B outreach,SalesTarget.ai warm-up tool,inbox placement,AI email automation",

    features: [
      {
        title:"What Is Email Warm-Up (and Why Does It Matter)?",
        isHeading:true,
      
      },
      {
        content : "Email warm-up is the process of gradually building trust with inbox providers before you send cold campaigns at scale.Inbox providers like Gmail, Outlook, and Yahoo constantly monitor how people interact with your emails. If you suddenly blast hundreds of cold emails from a fresh domain, it raises red flags — and your messages are likely to land in spam.",
        isParagraph:true
      },
      {
        content:"A warm-up plan fixes this by:",
        isParagraph:true
      },
      {
        description:"Gradually increasing sending volume."
      },
      {
        description:"Simulating natural email behavior (opens, replies, forwards)."
      },
      {
        description:"Improving engagement signals.",
      },
      {
        description:"Protecting your domain reputation for the long term."
      },
      {
        content:"Without warm-up, even the best-crafted campaigns risk being wasted in spam.",
        isParagraph:true
      },
      {
        title:"The SalesTarget.ai Warm-Up Formula",
        isHeading:true
      },
      {
        content:"We recommend a simple, structured approach for every new domain and email account.",
        isParagraph: true
      },
      {
        description:"Each domain can connect up to 5 email accounts."
      },
      {
        description:"Each account can safely send 30 emails per day once warmed up."
      },
      {
        description:"That means one domain = 150 high-quality cold emails/day at full strength."
      },
      {
        content:"Here’s how to get there:",
        isParagraph:true
      },
      {
        stepTitle:"Step 1: Start Small",
        isStep: true
      },
      {
        description:"Begin with 5 emails per account per day."
      },
      {
        description:"Keep this steady during the first week."
      },
      {
        description:"Focus on sending personalized messages unlikely to be flagged as spam."
      },
      {
         stepTitle:"Step 2: Gradually Increase Volume",
        isStep: true
      },
      {
        description:"After week 1, increase sending by +10 emails per account per week."
      },
      {
        description:"Example timeline:"
      },
      {
        description:"Week 1 → 5 emails/account"
      },
      {
        description:"Week 2 → 15 emails/account"
      },
      {
        description:"Week 3 → 25 emails/account "
      },
      {
        description:"Week 4 → 35 emails/account"
      },
      {
        stepTitle:"Step 3: Maintain the Reputation",
        isStep:true
      },
      {
        description:"Stay consistent at 30/day/account."
      },
      {
        description:"Add new domains/accounts if you need more volume."
      },
      {
        description:"Never jump from low to high overnight."
      },
      {
        content:"Think of warm-up like going to the gym — you wouldn’t lift 200 lbs on Day 1. Build gradually to avoid injury (or in this case, the spam folder).",
        isParagraph:true
      },
      {
        title:"Automating Warm-Up with SalesTarget.ai",
        isHeading:true
      },
      {
        content:"Manually sticking to a warm-up schedule takes discipline. And honestly, most teams forget or get inconsistent.",
        isParagraph:true
      },
      {
        content:"That’s why we built the SalesTarget.ai automated warm-up tool. With one click, it handles everything for you:",
        isParagraph:true
      
      },
      {
        description:"Positive engagement simulation → Generates realistic opens, replies, and forwards."
      },
      {
        description:"Reputation training → Inbox providers begin trusting your domain."
      },
      {
        description:"Set-and-forget convenience → No micromanaging."
      },
      {
        content:"This means you’ll never have to worry about your cold emails being stuck in spam again.",
        isParagraph:true
      },
      {
        title:"Putting It All Together",
        isHeading:true
      },
      {
        content:"A successful cold email strategy starts with one thing: deliverability. Without it, even the best campaign won’t convert.",
        isParagraph:true
      },
      {
        content:"Here’s the winning formula to remember:",
        isParagraph:true
      },
      {
        description:"Use 5 accounts per domain."
      },
      {
        description:"Stick to 30 emails/day/account."
      },
      {
        description:"Follow the gradual warm-up schedule (5 → 15 → 25 → 30)."
      },
      {
        description:"Use SalesTarget.ai’s automated warm-up tool to stay consistent."
      },
      {
        content:"Combine discipline with automation, and you’ll build a bulletproof sender reputation that gets you into more inboxes and books more meetings.",
        isParagraph:true
      },
      {
        title:" Beyond Warm-Up: Meet Copilot",
        isHeading:true
      },
      {
        content:"Warm-up gets your emails into the inbox. But what do you say once you’re there? That’s where Copilot in SalesTarget.ai comes in.",
        isParagraph:true
      },
      {
        title:"Copilot is your AI-powered sales assistant that helps you:",
        isHeading:true
      },
      {
        description:"Find the right leads instantly from a 50M+ verified database."
      },
      {
        description:"Generate complete cold email campaigns with sequences and follow-ups."
      },
      {
        description:"Analyze performance and show you which campaigns drive revenue."
      },
      {
        description:"Recommend expert next steps to improve results."
      },
      {
        content:"Think of it this way: Warm-up = delivery. Copilot = conversion. Together, they cover the entire cold email journey.",
        isParagraph:true
      },
      {
        title:"Ready to Scale Cold Email Outreach?",
        isHeading:true
      },
      {
        content:"SalesTarget.ai is more than just a warm-up tool. It’s a complete outbound sales platform that gives you:",
        isParagraph:true
      },
      {
        title:"Cold Email Outreach",
        description:"with deliverability safeguards."
      },
      {
        title:"Lead Explorer",
        description:"with 50M+ verified B2B contacts."
      },
      {
        title:"CRM",
        description:"to manage conversations and deals."
      },
      {
        title:"Copilot AI",
        description:"to plan, launch, and optimize campaigns."
      },
      {
        content:"Start with a free trial today and launch inbox-ready campaigns in minutes.",
        isParagraph:true
      },
      {
        content:"Get Started with SalesTarget.ai",
        isParagraph:true
      }

    ],
    

    faq: [
      {
      title:"How long does email warm-up take?",
      description: "Typically, it takes 3–4 weeks to fully warm up a new account. The exact time depends on your sending volume, engagement rates, and how consistent you are with the process."
      },
      {
        title:"Can I skip warm-up if I already have an old domain?",
        description:"Not recommended. Even if your domain is aged, if it hasn’t been used for outreach recently, inbox providers may still flag sudden spikes in volume. A light warm-up is always a safe step."
      },
      {
        title:"How many emails should I start with during warm-up?",
        description:"We suggest starting with 5 emails per account per day and gradually increasing by +10 each week until you reach 30/day/account."
      },
      {
        title:"What happens if I send too many emails too soon?",
        description:"Your domain reputation could suffer, leading to emails going to spam or promotions tab. In some cases, providers may even suspend your account."
      },
      {
        title:"Do I need multiple domains for cold outreach?",
        description:"Yes, if you plan to scale. Each domain can safely manage up to 5 accounts, sending about 150 emails/day in total. More domains = higher safe sending volume."
      },
      {
        title:"Why use an automated warm-up tool instead of manual warm-up? ",
        description:" Manual warm-up requires discipline and consistency, but most teams forget or lose track. Automated tools like SalesTarget.ai simulate real engagement (opens, replies, forwards) — ensuring your reputation grows steadily without manual effort."
      }
    ],
  },
  
 {
    id: "70",
    title: "CRM Setup & FAQ Guide",
    updated: "",
    content: `Welcome to the SalesTarget.ai CRM FAQ Guide. This resource provides clear,
step-by-step answers to common questions so you can maximize our CRM’s
features. Use it as a quick reference to manage your dashboard, emails, deals,
meetings, tasks, reports, and team members effectively.`,
// metaTitle: "The Ultimate Cold Email Warm-Up Plan | Build Strong Sender Reputation",
//     metaDescription: "Learn how to warm up cold email accounts the right way. Follow our proven 3-step warm-up plan and automate the process with SalesTarget.ai to boost deliverability.",
//     metaKeywords: "cold email warm-up , email deliverability,sender reputation,B2B outreach,SalesTarget.ai warm-up tool,inbox placement,AI email automation",

    features: [
      {
        title:"1. What is the core value of SalesTarget.ai CRM?",
        type:"heading",
        isHeading: true
      
      },
      {
        content:"Answer: SalesTarget.ai CRM provides a centralized hub to manage your entire sales process—emails, tasks, meetings, deals, reports, and team collaboration—without switching between multiple tools. It’s designed to streamline lead management,improve productivity, and give leadership a clear overview of sales performance.",
        type:"paragraph",
        isParagraph: true
      },

       {
        title:"2. How does the Dashboard help me?",
        type:"heading",
        isHeading: true
      
      },
      {
        content:" Answer: The Dashboard gives you a snapshot view of your organization’s activity.You can instantly see:",
        type:"paragraph",
        isParagraph: true
      },
      {
        description:"Email stats"
      },
      {
        description:"Tasks and Meetings"
      },
      {
        description:"Closed Deals"
      },
      {
        description:"Recommended Leads"
      },
      {
        content: "This means you don’t need to dig through multiple reports to understand where your pipeline stands.",
        type: "paragraph",
        isParagraph: true
      },

      {
        title:"3. Can my team manage emails directly inside the CRM?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: Yes. Once your email is linked, you can send, receive, and reply to emails directly from the platform—keeping communication centralized.",
        type:"paragraph",
        isParagraph: true
      },

      {
        title:"4. How do Deals work inside SalesTarget.ai?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: Deals can be created, assigned, and tracked through customizable stages. You can drag-and-drop deals as they progress, giving full pipeline visibility.",
        type:"paragraph",
        isParagraph: true
      },

      {
        title:"5. How does the Meetings feature integrate with my workflow?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: You can schedule and assign meetings directly from the CRM. Meetings can also be dragged across different statuses (e.g., scheduled, completed), ensuring follow-ups are tracked.",
        type:"paragraph",
        isParagraph: true
      },

      {
        title:"6. How do Tasks help my team stay accountable?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: Managers can assign tasks to team members, and agents update the status upon completion. This ensures visibility for admins and accountability for team members.",
        type:"paragraph",
        isParagraph: true
      },

      {
        title:"7. What type of reporting can I access?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: The Reports section provides insights into:",
        type:"paragraph",
        isParagraph: true
      },
      {
        description:"Emails sent and delivered"
      },
      {
        description:"Email trends"
      },
      {
        description:"Analytics and organizational statistics"
      },
      {
        content:"This helps you track performance and optimize sales strategies.",
        type:"paragraph",
        isParagraph: true
      },

      {
        title:"8. How easy is it to onboard new team members?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: Adding members is simple: go to Configurations → Members, click \"Add Member,\" enter their email, assign a role, and send an invite.",
        type:"paragraph",
        isParagraph: true
      },

      {
        title:"9. Does SalesTarget.ai CRM integrate with other tools we already use?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: Yes, however, the integration is still under progress and will be available once the platform is updated.",
        type:"paragraph",
        isParagraph: true
      },

      {
        title:"10. Is there automation for repetitive tasks (e.g., email sequences, reminders)?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: Yes. SalesTarget.ai automates repetitive tasks to save time and boost efficiency.",
        type:"paragraph",
        isParagraph: true
      },
      {
        description:"Email automation: Multi-step sequences, smart follow-ups, and response tracking that stop when a reply is received."
      },
      {
        description:"Task automation: Auto-scheduled tasks, reminders, and lead assignment to keep workflows moving."
      },
      {
        description:"Other automation: Lead cleanup, contact validation, and CRM syncing to stay organized with less manual effort."
      },
      {
        content:"These features significantly boost productivity by eliminating manual work while maintaining professional communication flow.",
        type:"paragraph",
        isParagraph: true
      },

      {
        title:"11. How secure is my company's data on SalesTarget.ai?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: We prioritize your data security with multiple layers of protection.",
        type:"paragraph",
        isParagraph: true
      },
      {
        description:"Safeguards: Technical, organizational, and physical measures are in place, though no system is 100% risk-free."
      },
      {
        description:"Compliance: Data is processed under laws like CCPA, with strict confidentiality obligations"
      },
      {
        description:"Usage: Your data is only used for authorized purposes defined in our agreement."
      },
      {
        description:"Rights: You can access, update, or delete your information anytime. European users have additional GDPR rights."
      },
      {
        description:"Transfers: International data transfers follow standard contractual safeguards."
      },

      {
        title:"12. Can I customize pipelines, reports, or dashboards for my business needs?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: Yes. SalesTarget.ai CRM offers extensive customization to fit your business needs.",
        type:"paragraph",
        isParagraph: true
      },
      {
        description:"Workflows: Create custom workflows tailored to your processes for maximum efficiency."
      },
      {
        description:"Reports: Generate detailed, customizable reports for data-driven decisions."
      },
      {
        description:"Configuration: Easily configure the CRM setup to align with your business requirements."
      },
      {
        description:"Advanced options: Custom workflows, fully customizable filters & segments, and dynamic segmentation for smarter, personalized outreach."
      },
      {
        content:"Our flexible customization ensures your CRM adapts seamlessly to your workflow and customer management needs.",
        type:"paragraph",
        isParagraph: true
      },

      {
        title:"13. Does the CRM support mobile access for my sales team?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: Yes. Our CRM supports mobile access for your sales team.",
        type:"paragraph",
        isParagraph: true
      },
      {
        description:"Comprehensive features: Lead management, task scheduling, smart inbox for communications, and automated workflows."
      },
      {
        description:"All-in-one dashboard: Manage emails and pipelines seamlessly on the go."
      },
      {
        description:"One-click integrations: Connect with major platforms and use auto-sync to keep pipelines organized and conversion-ready."
      },
      {
        description:"Clean interface: A clutter-free design makes it easy to manage leads, track interactions, and close deals faster from anywhere."
      },

      {
        title:"14. How scalable is SalesTarget.ai CRM as my team grows?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: SalesTarget.ai CRM is built for performance and scalability as your team grows.",
        type:"paragraph",
        isParagraph: true
      },
      {
        description:"Enterprise-ready architecture: Supports everything from individual users to large enterprise teams."
      },
      {
        description:"Flexible credit system: Scalable pricing plans with generous lead credits that expand with your usage."
      },
      {
        description:"Advanced integration capabilities: One-click integrations, auto-sync for high lead volumes, and duplicate detection for clean data."
      },
      {
        description:"Real-time performance: Instant updates to lead lists with 99%+ verified contact accuracy."
      },
      {
        description:"Whether you're scaling from startup to enterprise, the platform adapts seamlessly with minimal setup.",
      },

      {
        title:"15. How does the Dashboard help me stay on top of my sales activity?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: The Dashboard provides a quick overview of your activity, including:",
        type:"paragraph",
        isParagraph: true
      },
      {
        description:"Email statistics"
      },
      {
        description:"Tasks and Meetings"
      },
      {
        description:"Closed Deals"
      },
      {
        description:"Recommended Leads"
      },
      {
        content:"This allows you to track performance at a glance without digging into multiple sections.",
        type:"paragraph",
        isParagraph: true
      },
  //       {
  //   src: "/dashboard-screenshot.png",
  //   alt: "SalesTarget dashboard interface",
  //   caption:"",
  //   type: "image",
  //   isImage: true
  // },

      {
        title:"16. Can I manage emails directly from the Inbox?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: Yes. The Inbox integrates your email directly into the CRM for seamless communication. You can:",
        type:"paragraph",
        isParagraph: true
      },
      {
        description:"Link your email account"
      },
      {
        description:"Send and receive emails"
      },
      {
        description:"Compose replies without leaving the platform"
      },
  //     {
  //       stepTitle:"Status",
  //       isStep: true
  //     },
  //       {
  //   src: "/dashboard-screenshot.png",
  //   alt: "SalesTarget dashboard interface",
  //   caption:"",
  //   type: "image",
  //   isImage: true
  // },
  //     {
  //       stepTitle:"All inbox",
  //       isStep: true,

  //     },
  //       {
  //   src: "/dashboard-screenshot.png",
  //   alt: "SalesTarget dashboard interface",
  //   caption:"",
  //   type: "image",
  //   isImage: true
  // },
  //    {
      
  //       stepTitle:"Campaigns",
  //       isStep: true
  //     },
  //       {
  //   src: "/dashboard-screenshot.png",
  //   alt: "SalesTarget dashboard interface",
  //   caption:"",
  //   type: "image",
  //   isImage: true
  // },


      {
        title:"17. What can I find under the Lists section?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: The Lists section contains all your assigned lists, including:",
        type:"paragraph",
        isParagraph: true
      },
      {
        description:"Tasks"
      },
      {
        description:"Meetings"
      },
      {
        description:"Deals"
      },
      {
        content:"This ensures everything is organized and easy to access in one place.",
        type:"paragraph",
        isParagraph: true
      },
    
  //       {
  //   src: "/dashboard-screenshot.png",
  //   alt: "SalesTarget dashboard interface",
  //   caption:"",
  //   type: "image",
  //   isImage: true
  // },     
  //        {
  //   stepTitle: "Leads",
  //   isStep: true
  // },     
  //      {
  //   src: "/dashboard-screenshot.png",
  //   alt: "SalesTarget dashboard interface",
  //   caption:"",
  //   type: "image",
  //   isImage: true
  // },


      {
        title:"18. How do I create and manage Deals in SalesTarget.ai CRM?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: Deals can be easily created, assigned, and tracked through your pipeline stages.",
        type:"paragraph",
        isParagraph: true
      },
      {
       stepTitle:"To create a Deal:",
        isStep: true
      },
      {
        description:"Go to CRM → Deals"
      },
      {
        description:"Click Add New (top-left corner)"
      },
      {
        description:"Fill in the required fields"
      },
      {
        description:"Click Save"
      },
      {
        content:"Once created, you can drag the deal across statuses as it progresses.",
        type:"paragraph",
        isParagraph: true
      },
  //       {
  //   src: "/dashboard-screenshot.png",
  //   alt: "SalesTarget dashboard interface",
  //   caption:"",
  //   type: "image",
  //   isImage: true
  // },

      {
        title:"19. How do I schedule and track Meetings inside the CRM?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: Meetings can be managed and scheduled directly from the platform.",
        type:"paragraph",
        isParagraph: true
      },
      {
        stepTitle:"To schedule a Meeting:",
        isStep: true
      },
      {
        description:"Go to CRM → Meetings"
      },
      {
        description:"Click Add New (top-left corner)"
      },
      {
        description:"Fill in the required fields"
      },
      {
        description:"Click Save"
      },
      {
        content:"You can then move meetings across statuses (e.g., scheduled, completed) as they progress.",
        type:"paragraph",
        isParagraph: true
      },
  //      {
  //   src: "/dashboard-screenshot.png",
  //   alt: "SalesTarget dashboard interface",
  //   caption:"",
  //   type: "image",
  //   isImage: true
  // },
    // {
    //   stepTitle:"Add meeting",
    //   isStep: true
    // },
  //   {
  //      src: "/dashboard-screenshot.png",
  //   alt: "SalesTarget dashboard interface",
  //   caption:"",
  //   type: "image",
  //   isImage: true
  // },

      {
        title:"20. How do Tasks keep my team accountable?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: Tasks allow managers to assign and track work for team members.",
        type:"paragraph",
        isParagraph: true
      },
      {
        stepTitle:"To create/assign a Task:",
        isStep: true
      },
      {
        description:"Go to CRM → Tasks"
      },
      {
        description:"Click Add New (top-left corner)"
      },
      {
        description:"Fill in the required fields"
      },
      {
        description:"Select the Assignee (agent name)"
      },
      {
        description:"Click Save"
      },
      {
        content:"Agents update the status upon completion, ensuring visibility for admins.",
        type:"paragraph",
        isParagraph: true
      },
  //       {
  //   src: "/dashboard-screenshot.png",
  //   alt: "SalesTarget dashboard interface",
  //   caption:"",
  //   type: "image",
  //   isImage: true
  // },   
  //   {
  //   stepTitle: "Add Task",
  //   isStep: true
  // },
  //  {
  //   src: "/dashboard-screenshot.png",
  //   alt: "SalesTarget dashboard interface",
  //   caption:"",
  //   type: "image",
  //   isImage: true
  // },
 

      {
        title:"21. What type of Reports can I generate?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: Reports provide detailed analytics to optimize performance. You can access:",
        type:"paragraph",
        isParagraph: true
      },
      {
        description:"Emails sent and delivered"
      },
      {
        description:"Email performance trends"
      },
      {
        description:"Organization-wide analytics and statistics"
      },
  //       {
  //   src: "/dashboard-screenshot.png",
  //   alt: "SalesTarget dashboard interface",
  //   caption:"",
  //   type: "image",
  //   isImage: true
  // },

      {
        title:"22. How do I add new team members to the CRM?",
        type:"heading",
        isHeading: true
      },
      {
        content:"Answer: Adding new members is quick and simple.",
        type:"paragraph",
        isParagraph: true
      },
      {
        stepTitle:"To add a new member:",
        isStep: true
      },
      {
        description:"Go to \"Configurations\" → \"Members\"."
      },
      {
        description:"Click \"Add Member\"."
      },
      {
        description:"Enter the email address"
      },
      {
        description:"Select a \"Role\"."
      },
      {
        description:"Click \"Invite\"."
      },
      {
        content:"This ensures your team can collaborate effectively inside the CRM.",
        type:"paragraph",
        isParagraph: true
      },
    //   {
    //      src: "/dashboard-screenshot.png",
    // alt: "SalesTarget dashboard interface",
    // caption:"",
    // type: "image",
    // isImage: true
    //   },
  //      {
  //   stepTitle: "Add",
  //   isStep: true
  // },
  // {
  //    src: "/dashboard-screenshot.png",
  //   alt: "SalesTarget dashboard interface",
  //   caption:"",
  //   type: "image",
  //   isImage: true
  // },
  // {
  //   stepTitle: "Workspace and Teams",
  //   isStep: true
  // },
  //  {
  //   src: "/dashboard-screenshot.png",
  //   alt: "SalesTarget dashboard interface",
  //   caption:"",
  //   type: "image",
  //   isImage: true
  // },


    ]

    

 },

 {
  id: "71",
  title: "Creating Your First Email Sequence: A Beginner’s Guide to Cold Email Outreach",
  updated: "",
  content: `Cold email outreach is one of the most effective ways to start conversations, book meetings, and generate revenue — especially when powered by the right cold email platform and AI-assisted tools. If you’re new to outbound email automation, building your first sequence might seem complex. With SalesTarget.ai’s clean workflow and AI sequence generator, however, you can create high-converting outreach flows in minutes.

This guide walks you through the exact steps to create, personalize, automate, and launch your email sequence.`,
  metaTitle: "Creating Your First Email Sequence | Cold Email Outreach Guide",
  metaDescription: "Learn how to create your first email sequence using AI-powered cold email outreach tools. Step-by-step setup, personalization, automation, and best practices.",
  features: [
    {
      title: "What Is Cold Email Outreach?",
      description: `Cold email outreach is the practice of contacting prospects who haven't interacted with you before — with a focus on relevance, personalization, and clear value. Modern teams rely heavily on {{ <a href='https://salestarget.ai/email-outreach'>AI email automation</a> }}  and outreach tools to personalize messaging, schedule follow-ups, and maintain high deliverability.

Cold email outreach works even better when you start with {{ <a href='https://salestarget.ai/lead-explorer' > verified business data </a>  }} that helps you reach the right decision-makers with confidence. A good cold outreach sequence helps you stay consistent without doing all the work manually.`
    },

    {
      title: "How to Create Your First Email Sequence in SalesTarget.ai",
      description: "You can build email sequences in two ways:"
    },

    {
      stepTitle: "1) Manually using the Campaign Editor",
      isStep: true
    },
    {
      content: "(Templates → Leads → Settings → Schedule)",
      type: "paragraph",
      isParagraph: true
    },
    {
      stepTitle: "2) Automatically using the AI Sequence Generator",
      isStep: true
    },
    {
      content: "(Enter company details → Select steps → Auto-generate)",
      type: "paragraph",
      isParagraph: true
    },
    {
      content: "Both options simplify the cold email outreach process — even for beginners.",
      type: "paragraph",
      isParagraph: true
    },

    {
      stepTitle: "1. Add Steps (Your Email Flow)",
      isStep: true
    },
    {
      content: `Inside the Templates tab, each step is organized into clean cards:`,
      type: "paragraph",
      isParagraph: true
    },
    {
      stepTitle: "Configure each step",
      isStep: true
    },
    {
      description:` Add subject line variants`
    },
    {
      description: `Write the email body`
    },
    {
      description: `Set the delay (for example, “Send next message in 3 days”)`
    },
    {
      description: `Duplicate or delete steps as needed`
    },
    {
      content: `A solid cold email sequence typically includes 3–5 steps:`,
      type: "paragraph",
      isParagraph: true
    },
    {
      stepTitle: "Common sequence structure",
      isStep: true
    },
    {
      description: `Initial introduction`
    },
    {
      description: `Follow-up`
    },
    {
      description: `Value or case study email`
    },
    {
      description: `Soft bump`
    },
    {
      description: `Final nudge`
    },
    {
      content:`This structure gives your outreach a natural flow while keeping everything automated.`,
      isParagraph: true
    },
    {
      stepTitle: "2. Add Delays Between Follow-Ups",
      isStep: true
    },
    {
      content: `Every step includes a delay field so you can control timing with options like “Send next message in X days”.`,
      type: "paragraph",
      isParagraph: true
    },
    {
      stepTitle: "Why spacing matters",
      isStep: true
    },
    {
      content: `Spreading out messages helps with:`,
      isParagraph: true
    },
    {
      description:`Better deliverability`
    },
    {
      description: ` Healthier sender reputation`
    },
    {
      description: `A less intrusive experience for prospects`
    },
    {
      stepTitle: "How SalesTarget.ai handles sending rules",
      isStep: `true`
    },
    {
      content:`SalesTarget.ai also ensures that:`,
      isParagraph: true
    },
    {
      description: `Once someone replies, the sequence stops`
    },
    {
      description: `Bounced contacts are skipped`
    },
    {
      description: ` Sending follows your configured schedule`
    },
    {
      stepTitle: "3. Personalization (Tokens + AI Tools)",
      isStep: true
    },
    {
      content: "Personalization significantly improves cold email performance. In SalesTarget.ai, you can use tokens such as:",
      type: "paragraph",
      isParagraph: true
    },
    {
      stepTitle: "Personalization tokens",
      isStep: true
    },
    {
      description: ` firstName`
    },
    {
      description: `{{companyName}} `
    },
    {
      description:  ` {{signature}} `
    },
    {
      content: "You can also enhance messaging with built-in AI tools:",
      type: "paragraph",
      isParagraph: true
    },
    {
      stepTitle: "AI tools inside SalesTarget.ai",
      isStep: true
    },
    {
      description: `AI Sequence Generator`
    },
    {
      description: `AI tools inside SalesTarget.ai`
    },
    {
      description: `AI Sequence Generator`
    },
    {
      description: `AI Spintax Generator`
    },
    {
      description: `AI Content Generator`
    },
    {
     content: `These help your outreach stay human, relevant, and scalable.`,
     isParagraph: true
    },

    {
      stepTitle: "Copy-Paste Personalization Examples",
      isStep: true
    },
    {
      isHeading: true,
      title: "Example 1: Short Intro Email"
    },
    {
      content: `Subject: Quick question, {{firstName}}

Body:
Hey {{firstName}}, noticed {{companyName}} has been exploring ways to improve {{goal/challenge}}. Thought I’d reach out because we’ve helped similar teams save time and get faster results with simple, automated outreach.

Would it make sense to share a quick idea?`,
      type: "paragraph",
      isParagraph: true
    },
    {
      isHeading: true,
      title: "Example 2: Case-Study Style Email"
    },
    {
      content: `Subject: A quick idea for {{companyName}}

Body:
Hi {{firstName}},
We recently helped a company in your industry improve {{specific metric}} by {{X%}} using AI-powered outreach. Since many teams struggle with {{pain point}}, this might be useful for you as well.

Happy to share what worked if you’re exploring new approaches.`,
      type: "paragraph",
      isParagraph: true
    },

    {
      stepTitle: "4. Configure Sending Logic (Settings + Schedule)",
      isStep: true
    },
    {
      content: "SalesTarget.ai gives you full control over when and how emails send.",
      type: "paragraph",
      isParagraph: true
    },
    {
      stepTitle: "Schedule controls",
      isStep: true
    },
    {
      description: `Sending days`
    },
    {
      description:` Time windows`
    },
    {
      description: `Timezone`
    },
    {
      description: ` Daily email limit`
    },
    {
      stepTitle: "Settings controls",
      isStep: true
    },
    {
      description: ` Domain and sender controls`
    },
    {
      description: `Reply management`
    },
    {
      description: `Unsubscribe and compliance options`
    },
    {
      content:`These settings help maintain high email deliverability and improve cold outreach performance`,
      isParagraph: true
    },

    {
      stepTitle: "5. Preview and Test Your Sequence",
      isStep: true
    },
      {
      content: "Before activating your sequence, use the Send Test Email option and preview the full flow.",
      type: "paragraph",
      isParagraph: true
    },
    {
      stepTitle: "What to check before going live",
      isStep: true
    },
    {
      description:`A quick test helps you catch: `
    },
    {
      description:`Personalization token issues`
    },
    {
      description:`Formatting errors`
    },
    {
      description:`Broken links`
    },
    {
      description:`Long paragraphs`
    },
    {
      description: `Tone inconsistencies`
    },
    {
      content: "Once your sequence goes live, you can track replies and manage conversations directly inside your CRM so every lead is followed up on.",
      type: "paragraph",
      isParagraph: true
    },

    {
      stepTitle: "Using the AI Sequence Generator",
      isStep: true
    },
    {
      content: "The AI Sequence Generator is the fastest way to create a full multi-step email sequence. It asks for:",
      type: "paragraph",
      isParagraph: true
    },
    {
      stepTitle: "Inputs required",
      isStep: true
    },
    {
      description: ` Company name`
    },
    {
      description: `Your services`
    },
    {
      description: `Target audience`
    },
    {
      description: `Case studies`
    },
    {
      description: `Number of steps`
    },
    {
      stepTitle: "What the AI generates",
      isStep: true
    },
    {
      content: `Based on your inputs, it generates:`,
      isParagraph: true
    },
    {
      description: `Subject line variants`
    },
    {
      description: ` Full email bodies`
    },
    {
      description: `Suggested delays`
    },
    {
      description: `Multiple versions you can choose from`
    },
    {
      content: `Then, with one click, you can insert everything into your campaign using “Use Sequence”.`,
      isParagraph:true
    },
    {
      stepTitle: "Final Thoughts",
      isStep: true
    },
    {
      content: `Creating your first email sequence doesn’t need to be complicated. With SalesTarget.ai’s intuitive editor, AI-powered outreach tools, and smart sending logic, anyone can build high-performing cold email sequences that drive real replies and results.`,
      type: "paragraph",
      isParagraph: true
    }
  ],

  faq: [
    {
      title: "How do I start cold email outreach as a beginner?",
      description: "Use short, personalized messaging and build a multi-step sequence. Let the platform automate follow-ups."
    },
    {
      title: "How do I automate cold outreach emails?",
      description: "Create steps, set delays, configure schedules, and let your AI email automation tool handle the rest."
    },
    {
      title: "How do I improve cold email deliverability?",
      description: "Warm up your domain, limit sending volume, avoid spam-triggering text, and personalize your emails."
    },
    {
      title: "What’s the best cold email software for sales teams?",
      description: "Use a platform with personalization, AI generation, smart scheduling, and reputation controls — like SalesTarget.ai."
    },
    {
      title: "What’s the best platform to send cold emails from?",
      description: "A dedicated cold email platform with deliverability protection, not a basic Gmail or Outlook account."
    }
  ]
} ,

{
  id: "72",
  title: "LinkedIn Automation — Complete Help Center Guide",
  updated: "",
  metaTitle: "LinkedIn Automation — Full Guide for SalesTarget",
  metaDescription:
    "Automate LinkedIn connection requests, messages, profile views, likes, endorsements, and follow actions using SalesTarget. Learn how to build sequences, set limits, import leads, and track campaign performance.",
  content: `LinkedIn Automation in SalesTarget.ai lets you automate connection requests, profile visits, post likes, skill endorsements, follow-up messages, and profile follows — all inside a single workflow.

This guide explains how to create campaigns, select leads, build sequences, configure limits, and track performance.`,
  features: [
    {
      title: "What You Can Automate in SalesTarget",
      description:
        "SalesTarget supports a full set of LinkedIn engagement actions and automation behaviors so you can run complete outreach workflows from one place."
    },

    // Supported LinkedIn Actions
    {
      isHeading: true,
      title: "Supported LinkedIn Actions"
    },
    { description: "Send Connection Request" },
    { description: "Send Message (after connection is accepted)" },
    { description: "Send Email (if an email account is selected in Step 1)" },
    { description: "View Profile" },
    { description: "Like Post" },
    { description: "Follow Profile" },
    { description: "Endorse Skills" },

    // Supported Automation Behaviors
    {
      isHeading: true,
      title: "Supported Automation Behaviors"
    },
    { description: "Multi-step follow-up sequences with timed steps" },
    { description: "If/else conditions based on connection accepted, email opened, or email clicked" },
    { description: "Multichannel outreach combining LinkedIn and email" },
    { description: "Support for multiple LinkedIn accounts per workspace" },
    { description: "Safe daily limits and warm-up mode" },
    { description: "Working hours and timezone controls" },
    { description: "LinkedIn Inbox to view and reply to all responses" },
    { description: "CRM activity logging for every interaction" },

    {
      stepTitle: "How LinkedIn Automation Works",
      isStep: true
    },
    {
      description: "LinkedIn Automation in SalesTarget.ai runs through a simple four-step setup so you can go from campaign idea to live outreach in minutes."
    },

    // 1. Create a Campaign
    {
      stepTitle: "1. Create a Campaign",
      isStep: true
    },
    {
      description: "Start by creating a new LinkedIn campaign and choosing which accounts will send your actions."
    },
    { description: "Enter a Campaign Name." },
    { description: "Select a LinkedIn account (multiple accounts are supported)." },
    { description: "Optionally select an email account if you plan to include email steps." },
    {
      description:
        "If no email account is selected, Send Email actions will be disabled so your workflow remains LinkedIn-only."
    },

    {
      isHeading: true,
      title: "Warmup Mode"
    },
    {
      description:
        "Warmup Mode gradually increases your daily action limits each week to keep your LinkedIn account safe."
    },
    {
      description:
        "For example, if your safe limit for this week is 5 connection requests per day, next week it may increase to 10 depending on account behavior."
    },
    {
      description: "Recommended starting limits include:"
    },
    { description: "5 connection requests per day" },
    { description: "10 messages per day" },
    { description: "20 profile views per day" },
    { description: "20 post likes per day" },
    { description: "20 skill endorsements per day" },
    { description: "20 find email actions per day" },
    {
      description:
        "Warmup Mode automatically adjusts these limits over time so you can scale outreach without triggering LinkedIn restrictions."
    },

    // 2. Select Your Leads
    {
      stepTitle: "2. Select Your Leads",
      isStep: true
    },
    {
      description:
        "You can add leads from LinkedIn searches or from a CSV file, depending on where your prospect lists live today."
    },

    {
      isHeading: true,
      title: "A. LinkedIn Search URLs"
    },
    {
      description: "Paste a LinkedIn search URL from regular LinkedIn, Sales Navigator, or Recruiter."
    },
    {
      description: "Choose how many profiles to import, for example 100–500 prospects at a time."
    },

    {
      isHeading: true,
      title: "B. CSV Upload"
    },
    {
      description: "Upload a CSV file when you already have a lead list outside LinkedIn."
    },
    { description: "Required fields: First Name, Last Name, and LinkedIn URL." },
    {
      description:
        "Optional fields: Email, Company, Job Title, Location, and Industry — these improve personalization and filtering."
    },
    {
      description: "A sample CSV template is provided so you can format your file correctly."
    },

    // 3. Build Your LinkedIn Sequence
    {
      stepTitle: "3. Build Your LinkedIn Sequence",
      isStep: true
    },
    {
      description:
        "Use Add Step to define which LinkedIn actions, conditions, and delays run for each lead in your campaign."
    },

    {
      isHeading: true,
      title: "A. Available LinkedIn Actions"
    },
    {
      description: "Send Connection — write a manual note or generate an AI-personalized message."
    },
    {
      description: "Send Connection supports variables such as {{firstName}} with a 300-character message limit."
    },
    {
      description:
        "Send Message — sends follow-up messages after a connection request is accepted and can be chained into multi-step messaging."
    },
    {
      description:
        "Send Email — appears only if an email account was selected during campaign setup so you can add email touchpoints."
    },
    {
      description: "View Profile — warms up the lead by visiting their profile before you send a connection request."
    },
    {
      description: "Like Post — adds soft engagement on recent posts to increase visibility before outreach."
    },
    {
      description: "Follow Profile — follows the prospect so your content appears more often in their feed."
    },
    {
      description: "Endorse Skills — endorses displayed skills to create a friendly, value-first interaction."
    },

    {
      isHeading: true,
      title: "B. Conditions"
    },
    {
      description:
        "Conditions control the logic of your workflow so different actions run depending on how a prospect responds."
    },
    { description: "If Connected — only run the next steps when the connection request has been accepted." },
    { description: "If Email Opened — branch when an email has been opened at least once." },
    { description: "If Email Clicked — branch when a tracked link in your email has been clicked." },
    {
      description: "Example flow: Send Connection → Wait 2 days → If Connected → Send Message."
    },

    {
      isHeading: true,
      title: "C. Delays"
    },
    {
      description: "Each step can wait for a specific amount of time before running so your outreach feels natural."
    },
    { description: "Use delays measured in hours for same-day follow-ups." },
    { description: "Use delays measured in days for slower, long-term nurturing." },
    {
      description:
        "Proper delays help prevent over-activity and keep your sending patterns aligned with real human behavior."
    },

    {
      isHeading: true,
      title: "D. AI Personalization"
    },
    {
      description:
        "SalesTarget.ai can personalize both connection request messages and follow-up messages after someone connects."
    },
    {
      description:
        "AI analyzes public LinkedIn profile details such as the headline, biography, job title, and company information."
    },
    {
      description: "You can choose from preset personalization styles including Professional Insight, Role Mention, Activity-Based, and Interest Opener."
    },
    {
      description:
        "If AI cannot generate a personalized output for a specific lead, your fallback template is used automatically so the sequence never breaks."
    },

    // 4. Verify & Launch
    {
      stepTitle: "4. Verify & Launch",
      isStep: true
    },
    {
      description:
        "Before launching your LinkedIn campaign, review each step to make sure the flow, limits, and personalization look correct."
    },
    { description: "Check personalization variables and tokens for errors." },
    { description: "Validate that each step has the correct action, condition, and delay." },
    { description: "Confirm your LinkedIn and email account selections." },
    { description: "Ensure daily limits and warm-up settings are safe for your account history." },
    {
      description: "When everything looks good, click Launch to start the campaign."
    },

    {
      isHeading: true,
      title: "LinkedIn Inbox"
    },
    {
      description:
        "The LinkedIn Inbox collects all conversations from every connected LinkedIn account in one place."
    },
    { description: "Read new messages without switching between LinkedIn accounts." },
    { description: "Reply manually to keep responses natural and context-aware." },
    { description: "View full chat history for each prospect so you always know the previous touchpoints." },

    {
      isHeading: true,
      title: "My Network"
    },
    {
      description: "My Network shows all LinkedIn connections synced from your connected accounts."
    },
    { description: "View contact details for each connection." },
    { description: "Filter or export parts of your network for deeper analysis or external use." },
    { description: "Start manual outreach flows directly from your synced network." },

    {
      isHeading: true,
      title: "LinkedIn Accounts Management"
    },
    {
      description:
        "Under the Accounts section you can manage every LinkedIn account linked to SalesTarget.ai."
    },
    { description: "Add multiple LinkedIn accounts for different team members or brands." },
    { description: "View which accounts are connected, paused, or suspended." },
    { description: "Check average usage for each account to understand daily activity levels." },
    { description: "Sync account data if changes were made directly in LinkedIn." },
    { description: "Remove accounts that no longer need to run campaigns." },
    { description: "Reconnect accounts if access has expired or permissions changed." },

    {
      isHeading: true,
      title: "Account Settings"
    },

    // Account Limits as separate descriptions
    {
      isHeading: true,
      title: "A. Account Limits"
    },
    { description: "Adjust daily limits for your LinkedIn actions so they stay within safe ranges." },
    { description: "Connections — control how many invitations are sent per day." },
    { description: "Messages — cap the number of automated messages per day." },
    { description: "Views — limit how many profiles are viewed daily." },
    { description: "Likes — define how many posts can be liked per day." },
    { description: "Endorsements — control how many skills are endorsed daily." },
    {
      description: "Warmup Mode gradually increases these limits over time based on account behavior."
    },

    // Profile Settings as separate descriptions (matching your point format)
    {
      isHeading: true,
      title: "B. Profile Settings"
    },
    { description: "First Name" },
    { description: "Last Name" },
    { description: "Company" },
    { description: "Job Title" },
    { description: "Timezone" },
    { description: "Working Days" },
    { description: "Working Hours" },
    {
      description:
        "LinkedIn actions only run within your selected working days, hours, and timezone so outreach looks human."
    },

    // Analytics & Reporting
    {
      isHeading: true,
      title: "Analytics & Reporting"
    },
    {
      description:
        "The Analytics dashboard tracks all major LinkedIn automation metrics so you can measure campaign performance."
    },

    {
      isHeading: true,
      title: "Metrics Displayed"
    },
    { description: "Connection Requests" },
    { description: "Accepted Connections" },
    { description: "Messages Sent" },
    { description: "Replies Received" },
    { description: "Response Rate" },
    { description: "Active Accounts" },
    { description: "Total Accounts" },

    {
      isHeading: true,
      title: "Views"
    },
    { description: "Daily performance view" },
    { description: "Weekly performance view" },
    { description: "Monthly performance view" },
    { description: "Yearly performance view" },
    {
      description: "A per-account table provides a detailed breakdown of activity for each LinkedIn account."
    },

    // Troubleshooting
    {
      isHeading: true,
      title: "Troubleshooting"
    },

    {
      isHeading: true,
      title: "1. Connection Request Not Sent"
    },
    { description: "Daily connection limit reached." },
    { description: "The person is already a connection." },
    { description: "Temporary LinkedIn restriction on your account." },
    { description: "Invalid or unsupported profile URL." },

    {
      isHeading: true,
      title: "2. Message Not Sent"
    },
    { description: "The prospect is not yet a 1st-degree connection." },
    { description: "Your daily message limit has been reached." },
    { description: "A required personalization variable is missing or empty." },

    {
      isHeading: true,
      title: "3. No Leads Imported"
    },
    { description: "The LinkedIn URL is invalid or not supported for import." },
    { description: "Search results are restricted or not accessible." }
  ],

  faq: [
    {
      title: "Are LinkedIn actions automated?",
      description:
        "Yes. All actions you add to a sequence — such as connection requests, profile views, likes, follows, endorsements, and messages — run automatically within your daily limits and working hours after you launch the campaign."
    },
    {
      title: "Do I need a Chrome extension?",
      description:
        "No. SalesTarget.ai runs LinkedIn automation entirely in the cloud, so your campaigns continue even if your browser is closed or your device is offline."
    },
    {
      title: "Can I combine LinkedIn and Email steps?",
      description:
        "Yes. If you select an email account during campaign setup, you can mix LinkedIn and email actions in a single workflow. If no email account is selected, email steps remain disabled."
    },
    {
      title: "Can I automate LinkedIn follow-up messages?",
      description:
        "Yes. You can add multiple Send Message steps with delays so follow-ups are sent automatically once a lead becomes a 1st-degree connection."
    },
    {
      title: "Do replies sync into SalesTarget?",
      description:
        "Yes. Replies from your connected LinkedIn accounts appear in the LinkedIn Inbox, and activity logs are recorded on each lead’s timeline."
    },
    {
      title: "Can I upload my own lead list?",
      description:
        "Yes. You can upload leads via CSV as long as the file includes First Name, Last Name, and LinkedIn URL. Optional fields like Email or Job Title improve personalization and targeting."
    },
    {
      title: "Does SalesTarget support multiple LinkedIn accounts?",
      description:
        "Yes. You can connect multiple LinkedIn accounts and choose which one runs each campaign. Limits and warm-up settings are applied per account."
    },
    {
      title: "Is LinkedIn automation safe?",
      description:
        "Yes. SalesTarget.ai uses warm-up mode, daily action limits, random pacing, and working-hour controls to keep your outreach safe and aligned with typical LinkedIn usage patterns."
    },
    {
      title: "How do I track campaign performance?",
      description:
        "Use the Analytics dashboard to monitor connection requests, acceptance rate, messages sent, replies, and response rate, with views available by day, week, month, or year."
    },
    {
      title: "What happens if someone is already a connection?",
      description:
        "SalesTarget.ai automatically skips the connection request step for existing connections, and you can use the If Connected condition to route them directly into message-based follow-ups."
    }
  ]
},

{
  id: "73",
  title: "CRM Guide: Lead Activity, Meetings, Tasks & Activity Feed",
  updated: "",
  content: `
<p>This guide walks you through how Lead Activity, Meetings, Tasks, and the Activity Feed
work inside SalesTarget.ai CRM — including auto-sync for Zoom and Google Meet
meetings.</p> 
`,
  metaTitle: "CRM Guide: Lead Activity, Meetings, Tasks & Activity Feed",
  metaDescription:"",
  features: [
    // 1) Section heading: Lead Activity
    {
      isHeading: true,
      title: '1. Lead Activity'
    },
    {
      isStep: true,
      stepTitle: 'Track every interaction with a lead in one timeline.'
    },
    {
      isParagraph: true,
      content: `
        <p>The Lead Activity page gives you a complete history of everything that has happened with</p>
        <p>a lead. Every email, task, meeting, follow-up, or data update is logged automatically..</p>
      `
    },
    {
      title: 'What Lead Activity shows',
      description: `
        <p>Inside a lead’s activity timeline you can see:</p>
        <ul>
          <li><strong>Email events:</strong> <br/> sent, opened, clicked, delivered, bounced, and replied.</li>
          <br/><li><strong>Campaign engagement:</strong> <br/> Engagement from Email Outreach campaigns</li>
          <br/><li><strong>Status changes:</strong> <br/> New → Contacted → Interested → Meeting → Deal → Won.</li>
          <br/><li><strong>Meetings:</strong> <br/> Zoom/Google Meet events created inside the CRM,<br/> Scheduled → Rescheduled → Completed → Cancelled</li>
          <br/><li><strong>Tasks:</strong> <br/> follow-ups, completed tasks, and overdue items linked to the lead.</li>
          <br/><li><strong>Notes:</strong><br/> internal comments and context from your team.</li>
          <br/><li><strong>Assignment &amp; ownership:</strong> <br/> when a lead is assigned or reassigned.</li>
          <br/><li><strong>Data updates:</strong> <br/> Email, phone, company, enrichment changes</li>
        </ul>
      `
    },
    {
      title: 'Automatic meeting sync ',
      description: `
        <p>Whenever you schedule a meeting (Zoom or Google Meet) <br/> </p>
        <ul type="none">
          <li>✔ It appears in <strong> Lead Activity </strong> </li> <br/>
          <li>✔ It appears in<strong> Meetings </strong> </li> <br/>
          <li>✔ It’s added to the<strong> Activity Feed </strong> </li><br/>
          <li> ✔ And if linked to a deal → updated in the<strong> Deal Timeline </strong> </li>
        </ul>
         <p> No manual logging required.</p>
      `
    },
    
    // 2) Section heading: Meetings
    {
      isHeading: true,
      title: '2. Meetings (Zoom + Google Meet Integration)'
    },
    {
      isStep: true,
      stepTitle: 'Manage all your calls without leaving the CRM.'
    },
    {
      isParagraph: true,
      content: `
      <p>The <strong>Meetings</strong> section is your centralized view for all upcoming and completed meetings.</p>
      `
    },
    {
      title: 'What you can do in Meetings',
     
    },
    {
      description: 'Create Zoom meetings'
    },
    {
      description: 'Create Google Meet meetings'
    },
    {
      description: 'Add meetings manually'
    },
    {
      description: 'Sync meetings to the correct lead'
    },
    {
      description: `Track meeting outcome: <br/>
      <ul>
        <li>Scheduled</li><br/>
        <li>Completed</li><br/>
        <li>Rescheduled</li><br/>
        <li>Cancelled</li>
      </ul>`
    },
    {
      description: 'View past & upcoming meetings at a glance'
    },
    {
      title: 'CRM Auto-Sync Behavior',
      description: `
      <p>Every meeting created from the CRM is automatically displayed in:</p>
      `
    },
    {
      description: 'Lead Activity'
    },
    {
      description: 'Meetings page'
    },
    {
      description: 'Global Activity Feed'
    },
    {
      description: 'Deal Timeline (if linked to a deal)'
    },
    // {
    //   isImage: true,
    //   src: '/images/help/crm-create-meeting.png',
    //   alt: 'Create Meeting popup in SalesTarget.ai CRM',
    //   caption: 'Schedule Zoom or Google Meet calls directly from the Create Meeting popup.'
    // },
    // 3) Section heading: Task Management
    {
      isHeading: true,
      title: '3. Task Management'
    },
    {
      isStep: true,
      stepTitle: 'Stay organized with follow-ups, reminders, and to-dos.'
    },
    {
      isParagraph: true,
      content: `
      <p>The Tasks section helps you manage actionable next steps so nothing slips through the cracks.</p>
      `
    },
    {
      stepTitle: 'Features',
      isStep: true
    },
    {
      description: 'Create tasks anywhere in the CRM'
    },
    {
      description: 'Assign tasks to yourself or team members'
    },
    {
      description: 'Add due dates, notes, and reminders.'
    },
    {
      description: `Track status with:<br/>
      <ul>
        <li>Pending</li><br/>
        <li>In Progress</li><br/>
        <li>Completed</li>
      </ul>`
    },
    {
      description: 'Task shows inside the Lead Activity timeline'
    },
    {
      description: 'Overdue tasks highlighted'
    },
    {
      title: 'Auto-Sync',
      description: `
      <p>Every task created in the CRM is logged in:</p>
      <ul type="none">
        <li>✔ The Tasks page </li> <br/>
        <li>✔ Lead Activity  </li> <br/>
        <li>✔ Global Activity Feed  </li> <br/>
      </ul>
      
      `
    },
    // {
    //   isImage: true,
    //   src: '/images/help/crm-tasks-dashboard.png',
    //   alt: 'Tasks dashboard in SalesTarget.ai CRM',
    //   caption: 'Use the Tasks dashboard to track follow-ups, due dates, and overdue items.'
    // },
    // 4) Section heading: Activity Feed
    {
      isHeading: true,
      title: '4. Activity Feed (Global Log)'
    },
    {
      isStep: true,
      stepTitle: 'See everything happening across your CRM.'
    },
    {
      isParagraph: true,
      content: `<p> The Activity Feed shows all actions performed across your SalesTarget.ai workspace.</p>`
    },
    {
      stepTitle: 'What You’ll See',
      isStep: true
    },
    {
      description: 'Emails sent, opened, clicked, replied'
    },
    {
      description: 'Tasks created, updated, completed'
    },
    {
      description: 'Meetings scheduled (Zoom + Google Meet)'
    },
    {
      description: `Notes added`
    },
    {
      description: `Leads created or updated`
    },
    {
      description: `Deals created, moved, or won`
    },
    {
      description: `Campaign replies`
    },
    {
      description: `Status changes`
    },
    {
      description: `Owner assignments`
    },
    {
      stepTitle: 'Why it matters',
      isStep: true
    },
    {
      description: `Full visibility for managers`
    },
    {
      description: `Clear audit trail`
    },
    {
      description: `Team transparency`
    },
    {
      description: `Easy tracking of high-intent interactions`
    }
    // {
    //   isImage: true,
    //   src: '/images/help/crm-activity-feed.png',
    //   alt: 'Activity Feed view in SalesTarget.ai CRM',
    //   caption: 'Use filters in the Activity Feed to focus on specific teams, channels, or interaction types.'
    // }
  ],

  faq: [
    {
      title: 'What is Lead Activity in SalesTarget.ai?',
      description: `
      <p> Lead Activity is a timeline showing all emails, meetings, tasks, and updates related to a
specific lead. </p>
        
      `
    },
    {
      title: 'Will my Zoom or Google Meet meetings appear automatically?',
      description: `
        <p>Yes. Any meeting scheduled inside SalesTarget.ai automatically appears in Lead Activity,
Meetings, Activity Feed, and Deals (if linked).</p>
      `
    },
    {
      title: 'Can I assign tasks to team members?',
      description: `
        <p>Yes. You can create tasks and assign them to any team member, along with a due date and
notes.</p>
       
      `
    },
    {
      title: 'Where do I see meetings linked to a lead?',
      description: `
        <p>Inside Lead Activity → look for “Meeting Scheduled.”</p>
        <p>You can also view all meetings in the Meetings page.</p>
      `
    },
    {
      title: 'Do tasks show inside Lead Activity?',
      description: `
        <p>Yes — tasks created for a lead are automatically shown in the timeline.</p>
      `
    },
    {
      title: 'Are email engagement metrics logged here?',
      description: `
        <p>Yes. Opens, clicks, replies, and bounces are visible in Lead Activity and the Activity Feed.</p>
      `
    },
    {
      title: 'Does the CRM track campaign analytics?',
      description: `
        <p>Not inside Lead Activity — but it shows individual engagements (opens/replies) triggered by
campaigns.</p>
        
      `
    },
    {
      title: 'Can I view previous conversations with a lead?',
      description: `
        <p>Yes — all replies are visible through Inbox + Lead Activity integration.</p>
      `
    }
  ]
  
    
},

{
  id: "74",
  title: "A/B Testing in SalesTarget",
  updated: "",
  content: `
<p>A/B testing in SalesTarget helps you identify which version of your email performs better by
automatically testing two variants and continuing with the best-performing one.<br/>
Instead of guessing, SalesTarget splits traffic, tracks performance, and selects the winner for
you.</p>
`,
  metaTitle: "A/B Testing in SalesTarget",
  metaDescription: "",
  features: [
    {
      isHeading: true,
      title: 'What Can You A/B Test?'
    },
    {
      isStep: true,
      stepTitle: 'In a campaign step, you can create two variants and test:'
    },
    {
      description: 'Subject lines'
    },
    {
      description: 'Email content'
    },
    {
      description: 'Subject line + email content together'
    },
    {
      isParagraph: true,
      content: `
      <p>Only <strong> 2 variants </strong> are allowed per step to keep results clear and reliable.</p>
      `
    },

    {
      isHeading: true,
      title: 'Where A/B Testing Is Configured'
    },
   
    {
      isParagraph: true,
      content: `
      <p>A/B testing is configured inside your Campaign Settings.</p>
      <p>Path:<br/>
      <strong>Campaign → Settings → Auto optimize A/B Testing</strong></p>
      `
    },

    {
      isHeading: true,
      title: 'How to Set Up A/B Testing in SalesTarget'
    },
    {
      isStep: true,
      stepTitle: 'Step 1: Create Variants in Templates'
    },
    {
      isParagraph: true,
      content: `
      <ol>
        <li>&nbsp; 1. Go to <strong>Campaign → Templates</strong></li><br/>
        <li>&nbsp; 2. Open a campaign step (e.g., Step 1)</li><br/>
        <li>&nbsp; 3. Create: <br/>
          <ul style="list-style-type: circle;">
            <li>&nbsp; &nbsp; &nbsp; <strong> Variant 1 </strong></li><br/>
            <li>&nbsp; &nbsp; &nbsp; <strong> Variant 2 </strong></li>
          </ul>
        </li><br/>
        <li>&nbsp; 4. Add different subject lines and/or email content for each variant</li>
      </ol>
      `
    },

    {
      isStep: true,
      stepTitle: 'Step 2: Enable Auto Optimize A/B Testing'
    },
    {
      isParagraph: true,
      content: `
      <ol>
        <li>&nbsp; 1. Go to <strong>Campaign → Settings</strong></li><br/>
        <li>&nbsp; 2. Scroll to <strong>Auto optimize A/B Testing</strong></li><br/>
        <li>&nbsp; 3. Enable:</li> <br/>
        <li>
         &nbsp; &nbsp;  ✅ Automatically select the best performing variant after a certain number of emails
        </li>
      </ol>
      `
    },

    {
      isStep: true,
      stepTitle: 'Step 3: Choose the Winning Metric'
    },
    {
      isParagraph: true,
      content: `
      <p>Under <strong>Choose winning metric</strong>, select one:</p>
      <ul>
        <li>&nbsp; &bull; Open Rate → Best for testing subject lines</li><br/>
        <li>&nbsp; &bull; Reply Rate → Best for testing email content</li><br/>
        <li>&nbsp; &bull; Click Rate → Best for emails with links</li><br/>
        <li>&nbsp; &bull; None → Disables winner selection</li>
      </ul>
      <p>This metric is used to decide which variant wins.</p>
      `
    },

    {
      isStep: true,
      stepTitle: 'Step 4: Add Leads and Schedule the Campaign'
    },
    {
      isParagraph: true,
      content : `
      <ul>
        <li>1. Go to <strong>Leads</strong></li><br/>
        <li>2. Add leads using: <br/>
          <ul>
            <li>&nbsp; Upload CSV</li><br/>
            <li>&nbsp; Lead Explorer</li><br/>
            <li>&nbsp; Add List to Campaign</li><br/>
          </ul>
        </li><br/>
        <li>3. Go to <strong>Schedule</strong></li><br/>
        <li>4. Set: <br/>
          <ul>
            <li>&nbsp; Start date</li><br/>
            <li>&nbsp; Time zone</li><br/>
            <li>&nbsp; Sending days and hours</li> <br/>
          </ul>
        </li><br/>
        <li>Click <strong>Launch</strong></li>
      </ul>
      `
    },

    {
      isHeading: true,
      title: ' How Traffic Is Split'
    },
    {
      isParagraph: true,
      content: `SalesTarget splits leads <strong> 50/50 </strong> during the testing phase.`
    },
    {
      isParagraph: true,
      content: `
      <p>SalesTarget automatically splits leads 50/50 between both variants during the testing phase.</p>
      <p>Example:</p>
      <ul>
        <li><strong> &bull; Total leads:</strong> 200</li><br/>
        <li><strong> &bull; Variants:</strong> 2</li>
      </ul>
      <p><strong>Testing Phase</strong></p>
      <ul>
        <li> &bull; First <strong>100 leads</strong> are used for testing</li><br/>
        <li> &bull; 50 leads → Variant A</li><br/>
        <li> &bull; 50 leads → Variant B</li><br/>
      </ul>
      <p><strong>Winner Phase</strong></p><br/>
      <ul>
        <li> &bull; Remaining <strong>100 leads</strong> are sent only to the winning variant</li><br/>
      </ul>
      `
    },

    {
      isHeading: true,
      title: ' How the Winner Is Chosen'
    },
    {
      isStep: true,
      stepTitle: 'SalesTarget automatically compares both variants using the selected metric.'
    },
    {
      isParagraph: true,
      content: `
      <ul>
        <li> &bull; SalesTarget compares both variants using the<strong> selected metric. </strong></li><br/>
        <li> &bull; Once enough data is collected (from the first 50% of leads), the system:<br/>
          <ul>
            <li>&nbsp; &nbsp;Automatically selects the winner</li><br/>
            <li>&nbsp; &nbsp;Disables the losing variant</li><br/>
          </ul>
        </li>
      </ul>
      <p>No manual action is required.</p>
      `
    },

    {
      isHeading: true,
      title: ' Minimum Sample Size'
    },
    {
      isParagraph: true,
      content: `
      <ul>
        <li>&nbsp; &bull; A/B testing always uses 50% of total leads</li><br/>
        <li>&nbsp; &bull; This ensures statistically meaningful results</li><br/>
        <li>&nbsp; &bull; The sample size is handled automatically</li><br/>
      </ul>
      `
    },

    {
      isHeading: true,
      title: ' What Happens After a Winner Is Selected?'
    },
    {
      isParagraph: true,
      content: `
      <p>Once the winner is chosen:</p>
      <ul>
        <li>● ❌Losing variant is disabled automatically</li><br/>
        <li>● ✅ Winning variant continues for:<br/>
          <ul>
            <li>○ All remaining leads</li><br/>
            <li>○ Any new leads added later</li>
          </ul>
        </li>
      </ul>
      `
    },

    {
      isHeading: true,
      title: 'Important Rules to Know'
    },
    {
      isParagraph: true,
      content: `
      <ul>
        <li> &bull; Only 2 variants are allowed per step</li><br/>
        <li> &bull; Editing variants during an active test is not recommended</li><br/>
        <li> &bull; If a campaign is running or completed, some settings become read-only</li><br/>
      </ul>
      `
    },

    {
      isHeading: true,
      title: 'When You Should Avoid A/B Testing'
    },
    {
      isParagraph: true,
      content: `
      <ul>
        <li> &bull; Very small lead lists</li><br/>
        <li> &bull; Time-sensitive campaigns</li><br/>
        <li> &bull; Testing multiple changes at once</li><br/>
      </ul>
      `
    },

    {
      isHeading: true,
      title: 'Best Practices (Quick Tips)'
    },
    {
      isParagraph: true,
      content: `
      <ul>
        <li>  &bull; Test one change at a time</li><br/>
        <li>  &bull; Use Open Rate for subject line tests</li><br/>
        <li> &bull; Use Reply Rate for email content tests</li><br/>
        <li> &bull; Make sure email open or click tracking is enabled when required</li><br/>
        <li> &bull; Allow enough leads for meaningful results</li>
      </ul>
      `
    },

    {
      isHeading: true,
      title: ' In Short'
    },
    {
      isParagraph: true,
      content: `
      <p>A/B testing in SalesTarget is:</p>
      <ul>
        <li> &bull; Automatic</li><br/>
        <li> &bull; Easy to configure</li><br/>
        <li> &bull; Fully optimized for cold outreach</li>
      </ul>
      <p>Create variants → choose a metric → launch the campaign.<br/>
      SalesTarget takes care of the rest.</p>
      `
    }
  ],

  faq: [
    {
      title: 'How many variants can I create in one step?',
      description: `
      <p>You can create up to 2 variants per step.</p>
      `
    },
    {
      title: 'How is traffic split?',
      description: `
      <p>Traffic is split 50/50 automatically during the testing phase.</p>
      `
    },
    {
      title: 'How is the winner selected?',
      description: `
      <p>The winner is selected based on the metric you choose:</p>
      <ul>
        <li>Open Rate</li><br/>
        <li>Reply Rate</li><br/>
        <li>Click Rate</li>
      </ul>
      `
    },
    {
      title: 'Can I manually select a winner?',
      description: `
      <p>No. Winner selection is fully automatic to avoid bias.</p>
      `
    },
    {
      title: 'What happens to future leads?',
      description: `
      <p>All future leads are sent only to the winning variant.</p>
      `
    }
  ]
}





];

export default mockArticles;
