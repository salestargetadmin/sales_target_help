const mockArticles = [

  {
    id: "1",
    title: "What is SalesTarget?",
    updated: "Updated over 8 months ago",
    content: `
      SalesTarget.ai is an <strong>AI-powered, multi-channel sales outreach platform</strong> that helps
      businesses find qualified leads and engage them through <strong>email and LinkedIn automation</strong>,
      while managing conversations and deals in one system. <br/> <br/> SalesTarget combines <strong>lead discovery</strong>, 
      <strong>outreach automation</strong>, <strong>AI assistance</strong>, and <strong>CRM</strong> into a single workspace — 
      so sales teams can generate pipelines faster without juggling multiple tools.
    `,
    features: [
      {
        content: `SalesTarget is built around six core capabilities:`,
        isParagraph: 'true',
      },
      {
        isStep: 'true',
        stepTitle: "1. Lead Explorer",
      },
      {
        content: `Discover and qualify high-intent B2B leads in seconds using advanced filters such as:`,
        isParagraph: 'true',
      },
      {
        content: `
         &nbsp; &nbsp;● Job title
        <br/> &nbsp; &nbsp;● Industry
        <br/> &nbsp; &nbsp;● Company size
        <br/> &nbsp; &nbsp;● Location
        <br/> &nbsp; &nbsp;● Technologies used`,
        isParagraph: 'true',
      },
      {
        content: `You get accurate prospect data so you can build targeted lists quickly.`,
        isParagraph: 'true',
      },
      {
        isStep: 'true',
        stepTitle: "2. Email Outreach",
      },
      {
        content: `Launch personalized cold email campaigns at scale:`,
        isParagraph: 'true',
      },
      {
        content: `
        &nbsp; &nbsp;● Create multi-step email sequences    
        <br/>&nbsp; &nbsp;● Use AI to write and optimize messages
        <br/>&nbsp; &nbsp;● Control sending speed and schedules
        <br/>&nbsp; &nbsp;● Track opens, replies, and performance
        <br/>&nbsp; &nbsp;● Improve deliverability with warm-up and inbox placement tools.`,
        isParagraph: 'true',
      },
      {
        isStep: 'true',
        stepTitle: "3. LinkedIn Automation",
      },
      {
        content: `Automate LinkedIn outreach to grow your pipeline:`,
        isParagraph: 'true',
      },
      {
        content: `
        &nbsp; &nbsp;● Send connection requests
        <br/>&nbsp; &nbsp;● Follow up with LinkedIn messages
        <br/>&nbsp; &nbsp;● Combine LinkedIn and email steps inside one sequence
        <br/>&nbsp; &nbsp;● Reach prospects where they are most active`,
        isParagraph: 'true',
      },
      {
        isStep: 'true',
        stepTitle: "4. Copilot (AI Assistant)",
      },
      {
        content: `Copilot help you`,
        isParagraph: `true`
      },
      {
        content: `
        &nbsp; &nbsp;● Generate lead lists
        <br/>&nbsp; &nbsp;● Write cold email and LinkedIn messages
        <br/>&nbsp; &nbsp;● Optimize subject lines and follow-ups
        <br/>&nbsp; &nbsp;● Improve outreach strategy`,
        isParagraph: 'true',
      },
      {
        content: `It acts as your built-in sales assistant.`,
        isParagraph: `true`
      },
      {
        isStep: 'true',
        stepTitle: "5. Lead Validation",
      },
      {
        content: `Verify email addresses before sending:`,
        isParagraph: 'true',
      },
      {
        content: `
        &nbsp; &nbsp;● Reduce bounce rates
        <br/>&nbsp; &nbsp;● Protect sender reputation
        <br/>&nbsp; &nbsp;● Improve inbox placement`,
        isParagraph: 'true',
      },
      {
        content: `This ensures your campaigns stay healthy and compliant.`,
        isParagraph: 'true',
      },
      {
        isStep: 'true',
        stepTitle: "6. CRM Manager",
      },
      {
        content: `Manage leads and deals in one place:`,
        isParagraph: 'true',
      },
      {
        content: `
        &nbsp; &nbsp;● Track conversations and activities
        <br/>&nbsp; &nbsp;● Organize pipeline stages
        <br/>&nbsp; &nbsp;● Assign tasks and follow-ups
        <br/>&nbsp; &nbsp;● View full lead history`,
        isParagraph: 'true',
      },
      {
        content: `No need for an external CRM to start selling. `,
        isParagraph: 'true',
      },

      {
        title: "How SalesTarget Works",
        type: "heading",
        isHeading: 'true',
      },
      {
        content: `
      1.<strong> Find Leads </strong> - <br/> &nbsp; &nbsp; Use Lead Explorer to build targeted prospect lists.
       <br/>
      2.<strong> Create Sequences </strong> - <br/> &nbsp; &nbsp; Build outreach sequences using email and LinkedIn steps.
       <br/>
      3.<strong> Write with AI </strong> - <br/> &nbsp; &nbsp; Use Copilot to generate personalized messages. <br/>
      4.<strong> Validate & Warm Up </strong> - <br/> &nbsp; &nbsp; Verify emails and warm up accounts for better deliverability. <br/>
      5.<strong> Launch Campaigns </strong> - <br/> &nbsp; &nbsp; Start sending automatically across channels. <br/>
      6.<strong> Manage Replies & Deals </strong> - <br/> &nbsp; &nbsp; Handle responses in the Unibox and move deals through CRM. <br/> ` ,

        isParagraph: 'true',

      },
      {
        title: "Who is SalesTarget for?",
        type: "heading",
        isHeading: 'true',
      },
      {
        content: `
      &nbsp; &nbsp;● B2B sales teams,<br/>
      &nbsp; &nbsp;● Startup founders,<br/>
      &nbsp; &nbsp;● Growth marketers,<br/>
      &nbsp; &nbsp;● Agencies,<br/>
      &nbsp; &nbsp;● SDRs and outbound teams <br/><br/> `,
        isParagraph: 'true',
      },
      {
        title: "Why Teams Choose SalesTarget",
        type: "heading",
        isHeading: 'true',
      },
      {
        content: `  
      &nbsp; &nbsp;● Multi-channel outreach (Email + LinkedIn),<br/>
      &nbsp; &nbsp;● Built-in lead database,<br/>
      &nbsp; &nbsp;● AI-powered copywriting,<br/>
      &nbsp; &nbsp;● Email verification & deliverability tools,<br/>
      &nbsp; &nbsp;● Unified inbox and CRM,<br/>
      &nbsp; &nbsp;● Simple workflows for teams`,
        isParagraph: 'true'
      },
      {
        title: "In Summary",
        type: "heading",
        isHeading: 'true',
      },
      {
        content: `  
     SalesTarget.ai helps you:
     <br/><br/>
     &nbsp; &nbsp;✔ Find verified leads
     <br/>&nbsp; &nbsp;✔ Reach them via email and LinkedIn
     <br/>&nbsp; &nbsp;✔ Automate follow-ups
     <br/>&nbsp; &nbsp;✔ Manage conversations and deals
     <br/>&nbsp; &nbsp;✔ Close more sales`,
        isParagraph: 'true'
      },
      {
        content: `All from one AI-powered platform.`,
        isParagraph: 'true',

      }

    ],
  },

  {
    id: "2",
    title: "Quick Start Guide — Launch Your First Multi-Channel Campaign on SalesTarget",
    updated: "Updated recently",
    content: `
      This guide will help you go from<strong> signup to the first live campaign </strong> using SalesTarget’s real workflow:<br/><br/>
      <strong>Lead Explorer → Email + LinkedIn Outreach → CRM → Analytics</strong>
    `,
    features: [
      {
        stepTitle: "Step 1: Create Your Account & Organization",
        isStep: 'true',
      },
      {
        content: `&nbsp; 1. Sign up and verify your email.<br/>&nbsp; 2. Set your:<br/>&nbsp; &nbsp; - Company name<br/>&nbsp; &nbsp; - Industry<br/>&nbsp; &nbsp; - Timezone<br/>&nbsp; &nbsp; - Working hours<br/>&nbsp; 3. (Optional) Invite team members and assign roles (Owner, Admin, Editor, Viewer).<br/><br/>This ensures campaigns run only during your business hours.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Connect Your Outreach Channels",
        isStep: 'true'
      },
      {
        content: `
          <strong>Connect Email Accounts</strong>`,
        isParagraph: 'true',
      },
      {
        content: `
          Go to <strong>Settings → Email Accounts</strong> and connect via:<br/> 
          &nbsp; &nbsp;● Google / Outlook (OAuth)<br/>
          &nbsp; &nbsp;● Or SMTP/IMAP<br/><br/>
          Before sending:<br/>
          &nbsp; &nbsp;&bull;  Set daily limits (start with 20–50/day)<br/>
          &nbsp; &nbsp;&bull;  Enable inbox warm-up<br/>
          &nbsp; &nbsp;&bull;  Ensure SPF, DKIM, and DMARC are configured<br/>
          &nbsp; &nbsp;&bull;  Add sender name and signature<br/><br/>SalesTarget automatically:<br/>
          &nbsp; &nbsp;&bull;  Rotates inboxes<br/>
          &nbsp; &nbsp;&bull;  Monitors account health<br/>
          &nbsp; &nbsp;&bull;  Protects deliverability<br/><br/>`,
        isParagraph: 'true',
      },
      {
        content: `
          <strong>Connect LinkedIn Account (Optional but Recommended)</strong>`,
        isParagraph: 'true',
      },
      {
        content: `
          Go to <strong>LinkedIn Automation → Connect Account</strong>`,
        isParagraph: 'true',
      },
      {
        content: `
          SalesTarget will:<br/>
          &nbsp; &bull; Assign a residential proxy automatically<br/>
          &nbsp; &bull;  Apply LinkedIn safe limits<br/>
          &nbsp; &bull; Enable warm-up mode<br/>&nbsp; &bull;
           Simulate human behavior (random gaps & breaks)<br/>
            
             `,
        isParagraph: 'true',
      },
      {
        content: `Set:`,
        isParagraph: 'true',
      },
      {
        content: `&nbsp; &bull;  Working days <br/> 
        &nbsp; &bull; Working hours <br/> 
        &nbsp; &bull; Daily action limits.`,
        isParagraph: 'true',
      },
      {
        content: `This allows safe Linkedin automation.`,
        isParagraph: 'true',
      },

      {
        stepTitle: "Step 3: Find Leads with Lead Explorer",
        isStep: 'true',
      },
      {
        content: `
          Open <strong>Lead Explorer</strong> and filter by:<br/>
          &nbsp; &nbsp; &bull; Job title<br/>
          &nbsp; &nbsp; &bull; Industry<br/>
          &nbsp; &nbsp; &bull; Company size<br/>
          &nbsp; &nbsp; &bull; Location<br/>
          &nbsp; &nbsp; &bull; Revenue<br/>`,
        isParagraph: 'true',
      },
      {
        content: `Preview leads before exporting.`,
        isParagraph: 'true',
      },
      {
        content: `
           You can:<br/>
           &nbsp; &nbsp; &bull; Send leads directly to a campaign<br/>
           &nbsp; &nbsp; &bull; Or save them to CRM<br/><br/>
          All emails are verified before use to reduce bounce rates.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 4: Create Your First Campaign",
        isStep: 'true',
      },
      {
        content: `
          Go to <strong>Campaigns</strong> → <strong>Create Campaign</strong>`,
        isParagraph: 'true',
      },
      {
        content: `Choose`,
        isParagraph: 'true',
      },
      {
        content: `
           &nbsp; &nbsp; &bull; Email campaign<br/>
           &nbsp; &nbsp; &bull; LinkedIn campaign<br/>
           &nbsp; &nbsp; &bull; Or Multi-channel (Email + LinkedIn)`,
        isParagraph: 'true',
      },
      {
        content: `
 Name your campaign clearly<br/>
           (e.g., “SaaS Founders – US”)`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 5: Build Your Sequence (Email + LinkedIn)",
        isStep: `true`
      },
      {
        content: `
          Example multi-channel sequence:<br/>&nbsp;&nbsp;&nbsp;1. Day 0 → Email<br/>&nbsp;&nbsp;&nbsp;2. Day 1 → LinkedIn profile visit<br/>&nbsp;&nbsp;&nbsp;3. Day 2 → LinkedIn connection request<br/>&nbsp;&nbsp;&nbsp;4. Day 5 → Email follow-up<br/>&nbsp;&nbsp;&nbsp;5. Day 7 → LinkedIn message<br/><br/>
          You can configure:<br/>&nbsp; &nbsp; &bull; Delays<br/>&nbsp; &nbsp; &bull; Conditions (if accepted, if replied)<br/>&nbsp; &nbsp; &bull; Working hours<br/>&nbsp; &nbsp; &bull; Action limits<br/><br/>
          SalesTarget automatically schedules actions using:<br/>&nbsp; &nbsp; &bull; Timezone awareness<br/>&nbsp; &nbsp; &bull; Capacity-based distribution<br/>&nbsp; &nbsp; &bull; Randomized timing`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 6: Write Messages with AI Copilot",
        isStep: `true`
      },
      {
        content: `
          Use<strong> AI Copilot </strong> to:<br/>
          &nbsp; &nbsp; &bull; Generate cold emails<br/>
          &nbsp; &nbsp; &bull; Create LinkedIn messages<br/>
          &nbsp; &nbsp; &bull; Write follow-ups<br/>
          &nbsp; &nbsp; &bull; Suggest subject lines<br/><br/>
          AI uses:<br/>
          &nbsp; &nbsp; &bull; Prospect profile<br/>
          &nbsp; &nbsp; &bull; Company data<br/>
          &nbsp; &nbsp; &bull; Job role<br/><br/>
          <br/>
          You can edit everything before sending. <br/>
          Fallback templates are used if AI fails.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 7: Validate & Prepare",
        isStep: `true`,
      },
      {
        content: `
          Before launching:<br/>
          &nbsp; &nbsp; &bull; Validate email addresses<br/>
          &nbsp; &nbsp; &bull; Confirm inbox warm-up is active<br/>
          &nbsp; &nbsp; &bull; Check LinkedIn limits<br/>
          &nbsp; &nbsp; &bull; Review sequence logic<br/>
          &nbsp; &nbsp; &bull; Confirm unsubscribe footer<br/><br/>
          This protects your:<br/>
          &nbsp; &nbsp; &bull; Domain reputation<br/>
          &nbsp; &nbsp; &bull; LinkedIn account safety`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 8: Launch Campaign",
        isStep: `true`,
      },
      {
        content: `
          Click <strong>Start Campaign</strong>.`,
        isParagraph: 'true',
      },
      {
        content: `
          SalesTarget will:<br/>&nbsp; &nbsp; &bull; Distribute leads across accounts<br/>
          &nbsp; &nbsp; &bull; Respect all daily limits<br/>
          &nbsp; &nbsp; &bull; Send messages only during working hours<br/>
          &nbsp; &nbsp; &bull; Pause follow-ups when a lead replies<br/><br/>
          You don’t need to manually send anything.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 9: Manage Replies in Unified Inbox",
        isStep: `true`,
      },
      {
        content: `
          Open <strong>Unibox</strong> to:<br/>
          &nbsp; &nbsp; &bull; Reply to email responses<br/>
          &nbsp; &nbsp; &bull; Reply to LinkedIn messages<br/>
          &nbsp; &nbsp; &bull; See conversation history<br/>
          &nbsp; &nbsp; &bull; Auto-categorize replies (positive, negative, OOO)<br/><br/>

          Hot leads are highlighted automatically.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 10: Move Leads into CRM",
        isStep: `true`,
      },
      {
        content: `
          From Unibox or Campaign:<br/>
          &nbsp; &nbsp; &bull; Mark lead as Interested<br/>
          &nbsp; &nbsp; &bull; Create a Deal<br/>
          &nbsp; &nbsp; &bull; Add notes<br/>
          &nbsp; &nbsp; &bull; Schedule meetings<br/>
          &nbsp; &nbsp; &bull; Track pipeline stages<br/><br/>
          All activity (email + LinkedIn) stays linked to the lead.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 11: Monitor Performance",
        isStep: `true`,
      },
      {
        content: `
          Track:<br/>
          &nbsp; &nbsp; &bull; Open rates<br/>
          &nbsp; &nbsp; &bull; Reply rates<br/>
          &nbsp; &nbsp; &bull; Connection acceptance<br/>
          &nbsp; &nbsp; &bull; Campaign progress<br/>
          &nbsp; &nbsp; &bull; Account health<br/><br/>
          Use analytics to:<br/>
          &nbsp; &nbsp; &bull; Improve sequences<br/>
          &nbsp; &nbsp; &bull; Adjust ICP<br/>
          &nbsp; &nbsp; &bull; Scale volume safely`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Best Practice for New Users",
        isStep: `true`,
      },
      {
        content: `
      &nbsp; &nbsp; &bull; Start with 50–100 leads <br/>
      &nbsp; &nbsp; &bull; Use short messages <br/>
      &nbsp; &nbsp; &bull; Personalize with AI <br/>
      &nbsp; &nbsp; &bull; Combine Email + LinkedIn <br/>
      &nbsp; &nbsp; &bull; Always warm up accounts <br/>
      &nbsp; &nbsp; &bull; Increase volume gradually`,
        isParagraph: 'true',
      },
      {
        stepTitle: "You’re Ready 🚀",
        isStep: `true`,
      },
      {
        content: `
      With SalesTarget.AI, you can:<br/>
      ✔ Discover leads<br/>
      ✔ Reach them via email & LinkedIn<br/>
      ✔ Automate follow-ups<br/>
      ✔ Manage conversations<br/>
      ✔ Track deals<br/>
      ✔ Scale safely<br/>
      All from one platform.
    `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Next Recommended Guides",
        isStep: `true`,
      },
      {
        content: `
      &nbsp; &nbsp; &bull; Setting up your account<br/>
      &nbsp; &nbsp; &bull; First steps with campaigns<br/>
      &nbsp; &nbsp; &bull; Lead Explorer overview<br/>
      &nbsp; &nbsp; &bull; Deliverability best practices<br/>
    `,
        isParagraph: 'true',
      }

    ],
  },
  {
    id: "3",
    title: "How Salestarget Optimizes Sending Behavior for Deliverability",
    content: `Deliverability is the foundation of successful cold outreach.<br/>
If your emails don’t reach the inbox, your campaigns fail — no matter how good your copy is.<br/><br/>
Salestarget is built with <strong>deliverability-first</strong> architecture that controls how, when, and from where emails are sent to protect your sender reputation and maximize inbox placement.<br/><br/>
This article explains <strong>how Salestarget optimizes sending behavior automatically.</strong>`,

    features: [
      {
        title: "Why Deliverability Matters",
        isHeading: true
      },
      {
        content: `Email providers (Google, Outlook, and Yahoo) Evaluate:<ul>
&nbsp; &bull; Sending volume<br/>
&nbsp; &bull; Sending patterns<br/>
&nbsp; &bull; Bounce rate<br/>
&nbsp; &bull; Spam complaints<br/>
&nbsp; &bull; Engagement (opens, replies)<br/>
&nbsp; &bull; Domain authentication<br/>
</ul>
Aggressive or unnatural sending behavior triggers spam filters and blacklisting.<br/>
SalesTarget prevents this by enforcing <strong>natural, safe, and reputation-aware sending behavior.</strong>`,
        isParagraph: true
      },

      {
        title: "1. Inbox Warm-Up (Reputation Building)",
        isHeading: true
      },
      {
        content: `When you connect a new email account, SalesTarget:<ul>
<li>&nbsp; &bull; Starts with <strong>low daily volume</strong></li>
<li>&nbsp; &bull; Gradually increases send limits over time</li>
<li>&nbsp; &bull; Simulates real conversations</li>
<li>&nbsp; &bull; Builds positive engagement signals</li>
</ul>
This allows your domain and inbox to earn trust before full-scale outreach begins.<br/>
Warm-up helps:<ul>
<li>&nbsp; &bull; Avoid spam folder placement</li>
<li>&nbsp; &bull; Reduce sudden spikes in volume</li>
<li>&nbsp; &bull; Establish sender reputation safely</li>
</ul>`,
        isParagraph: true
      },

      {
        title: "2. Daily Sending Limits per Inbox",
        isHeading: true
      },
      {
        content: `SalesTarget enforces <strong>per-inbox daily limits</strong>, even if you try to exceed them.<br/>
You control:<ul>
<li>&nbsp; &bull; Initial limits (e.g., 20–50/day)</li>
<li>&nbsp; &bull; Growth over time (as reputation improves)</li>
</ul>
SalesTarget prevents:<ul>
<li>&nbsp; &bull; Sudden volume spikes</li>
<li>&nbsp; &bull; Provider throttling</li>
<li>&nbsp; &bull; Account flags</li>
</ul>
This keeps your sending pattern stable and predictable.`,
        isParagraph: true
      },

      {
        title: "3. Inbox Rotation (Load Distribution)",
        isHeading: true
      },
      {
        content: `If you connect multiple email accounts, SalesTarget:<ul>
<li>&nbsp; &bull; Distributes emails across inboxes</li>
<li>&nbsp; &bull; Ensures no single account is overloaded</li>
<li>&nbsp; &bull; Balances daily volume automatically</li>
</ul>
Instead of:<br/>
❌ 1 inbox sending 1,000 emails<br/>
SalesTarget uses:<br/>
✅ 10 inboxes sending 100 emails each<br/><br/>
This reduces risk and increases scale safely.`,
        isParagraph: true
      },

      {
        title: "4. Natural Scheduling & Timezone Awareness",
        isHeading: true
      },
      {
        content: `SalesTarget does not send emails in bulk bursts.<br/>
It:<ul>
<li>&nbsp; &bull; Schedules emails only during working hours</li>
<li>&nbsp; &bull; Spreads sends across the day</li>
<li>&nbsp; &bull; Uses randomized timing</li>
<li>&nbsp; &bull; Respects account timezone</li>
</ul>
This creates:<ul>
<li>&nbsp; &#10003; Human-like behavior</li>
<li>&nbsp; &#10003; Consistent sending patterns</li>
<li>&nbsp; &#10003; Lower spam detection</li>
</ul>`,
        isParagraph: true
      },

      {
        title: "5. Lead Validation Before Sending",
        isHeading: true
      },
      {
        content: `Before leads are added to campaigns, SalesTarget validates them by checking:<ul>
<li>&nbsp; &bull; Email format</li>
<li>&nbsp; &bull; Domain existence</li>
<li>&nbsp; &bull; Mailbox availability</li>
<li>&nbsp; &bull; Disposable email detection</li>
<li>&nbsp; &bull; Role-based address detection (info@, support@)</li>
</ul>
Invalid and risky emails are removed before sending.<br/>
This reduces:<ul>
<li>&nbsp; &bull; Bounce rate</li>
<li>&nbsp; &bull; ISP penalties</li>
<li>&nbsp; &bull; Reputation damage</li>
</ul>`,
        isParagraph: true
      },

      {
        title: "6. Domain Authentication Monitoring (SPF, DKIM, DMARC)",
        isHeading: true
      },
      {
        content: `SalesTarget monitors your domain health by checking:<ul>
<li>&nbsp; &bull; SPF records</li>
<li>&nbsp; &bull; DKIM signing</li>
<li>&nbsp; &bull; DMARC policy</li>
</ul>
If misconfigured:<ul>
<li>&nbsp; &bull; You are alerted</li>
<li>&nbsp; &bull; Sending is restricted</li>
<li>&nbsp; &bull; Errors are flagged</li>
</ul>
This ensures your domain is trusted by receiving servers.`,
        isParagraph: true
      },

      {
        title: "7. Reply-Aware Sequence Control",
        isHeading: true
      },
      {
        content: `When a prospect replies:<ul>
<li>&nbsp; &bull; SalesTarget automatically <strong>stops follow-ups</strong></li>
<li>&nbsp; &bull; Removes them from automated sending</li>
<li>&nbsp; &bull; Moves them into manual reply flow (Unibox + CRM)</li>
</ul>
This prevents:<ul>
<li>&nbsp; &bull; Sending to engaged contacts</li>
<li>&nbsp; &bull; Triggering spam complaints</li>
<li>&nbsp; &bull; Damaging engagement signals</li>
</ul>`,
        isParagraph: true
      },

      {
        title: "8. Bounce, Unsubscribe & Complaint Handling",
        isHeading: true
      },
      {
        content: `SalesTarget automatically:<ul>
<li>&nbsp; &bull; Removes hard-bounced emails</li>
<li>&nbsp; &bull; Honors unsubscribe requests</li>
<li>&nbsp; &bull; Suppresses risky addresses</li>
<li>&nbsp; &bull; Tracks complaint rates</li>
</ul>
Accounts with unhealthy metrics are:<ul>
<li>&nbsp; &bull; Throttled</li>
<li>&nbsp; &bull; Flagged</li>
<li>&nbsp; &bull; Protected from overuse</li>
</ul>`,
        isParagraph: true
      },

      {
        title: "9. Account Health Monitoring",
        isHeading: true
      },
      {
        content: `Each email account has a health score based on:<ul>
<li>&nbsp; &bull; Bounce rate</li>
<li>&nbsp; &bull; Open rate</li>
<li>&nbsp; &bull; Reply rate</li>
<li>&nbsp; &bull; Spam signals</li>
<li>&nbsp; &bull; Domain authentication</li>
</ul>
If health drops:<ul>
<li>&nbsp; &bull; Sending slows down</li>
<li>&nbsp; &bull; Rotation skips unhealthy inboxes</li>
<li>&nbsp; &bull; Alerts are triggered</li>
</ul>
This prevents long-term damage.`,
        isParagraph: true
      },

      {
        title: "What SalesTarget Does NOT Do",
        isHeading: true
      },
      {
        content: `SalesTarget does NOT:<ul>
<li>&nbsp; &cross; Rotate IPs artificially</li>
<li>&nbsp; &cross; Mask sender identity</li>
<li>&nbsp; &cross; Use unsafe sending tricks</li>
<li>&nbsp; &cross; Bypass spam filters illegally</li>
<li>&nbsp; &cross; Use shady infrastructure</li>
</ul>
Deliverability is achieved through:<ul>
<li>&nbsp; &#10003; Behavior</li>
<li>&nbsp; &#10003; Reputation</li>
<li>&nbsp; &#10003; Engagement</li>
<li>&nbsp; &#10003; Safety</li>
<li>&nbsp; &#10003; Control</li>
</ul>
Not hacks.`,
        isParagraph: true
      },

      {
        title: "Best Practices for Users",
        isHeading: true
      },
      {
        content: `To get best results:<ul>
<li> &nbsp; &bull; Warm up new domains and inboxes</li>
<li> &nbsp; &bull; Start with low volume</li>
<li> &nbsp; &bull; Use verified leads</li>
<li> &nbsp; &bull; Write human messages</li>
<li> &nbsp; &bull; Avoid spam keywords</li>
<li> &nbsp; &bull; Combine Email + LinkedIn</li>
<li> &nbsp; &bull; Increase volume gradually</li>
</ul>
SalesTarget enforces the technical side — your content drives engagement.`,
        isParagraph: true
      },

      {
        title: "Summary",
        isHeading: true
      },
      {
        content: `SalesTarget optimizes deliverability by controlling:<ul>
<li>&nbsp; &#10003; How fast emails are sent</li>
<li>&nbsp; &#10003; How many emails are sent</li>
<li>&nbsp; &#10003; Which inbox sends them</li>
<li>&nbsp; &#10003; When they are sent</li>
<li>&nbsp; &#10003; Who they are sent to</li>
</ul>
Through:<ul>
<li>&nbsp: &bull; Warm-up</li>
<li>&nbsp: &bull; Rotation</li>
<li>&nbsp: &bull; Validation</li>
<li>&nbsp: &bull; Scheduling</li>
<li>&nbsp: &bull; Health monitoring</li>
<li>&nbsp: &bull; Sequence control</li>
</ul>
SalesTarget ensures your outreach stays:<br/>
📥 In inbox<br/>
📈 Scalable<br/>
🛡 Safe`,
        isParagraph: true
      }
    ]
  },
  {
    id: "4",
    title: "Setting Up Your Account",
    content: `This guide walks you through setting up your SalesTarget.AI account properly so you can launch safe, high-performing multi-channel campaigns (Email + LinkedIn).<br/>A proper setup ensures:<ul><li>&nbsp; &bull; Strong deliverability</li><li>&nbsp; &bull; Account safety</li><li>&nbsp; &bull; Accurate tracking</li><li>&nbsp; &bull; Smooth CRM workflow</li></ul>`,
    features: [
      {
        title: "Step 1: Create Your Organization",
        isHeading: true
      },
      {
        content: `After signing up:<ol><li> &nbsp; 1. Enter your company name</li><li> &nbsp; 2. Select your industry</li><li> &nbsp; 3. Set your timezone</li><li> &nbsp; 4. Configure working hours</li></ol>`,
        isParagraph: true
      },
      {
        content: `Your timezone and working hours are important because:<ul><li>&nbsp; &bull; Email sending follows your configured schedule</li><li>&nbsp; &bull; LinkedIn automation respects business hours</li><li>&nbsp; &bull; Campaign execution is timezone-aware</li></ul>You can update these anytime in Organization Settings.`,
        isParagraph: true
      },

      {
        title: "Step 2: Add Team Members (Optional)",
        isHeading: true
      },
      {
        content: `If you're working with a team:<ol><li>&nbsp; 1. Go to <strong>Settings → Team Management</strong></li><li>&nbsp; 2. Invite users via email</li><li>&nbsp; 3. Assign roles:</li></ol><ul><li>&nbsp; &bull; <strong>Owner</strong> – Full access (billing + settings)</li><li>&nbsp; &bull; <strong>Admin</strong> – Manage accounts and integrations</li><li>&nbsp; &bull; <strong>Editor</strong> – Create and manage campaigns</li><li>&nbsp; &bull; <strong>Viewer</strong> – Read-only access</li></ul>`,
        isParagraph: true
      },
      {
        content: `Role-based access ensures:<ul><li>Controlled permissions</li><li>Secure account management</li><li>Clear campaign ownership</li></ul>`,
        isParagraph: true
      },

      {
        title: "Step 3: Connect Your Email Account",
        isHeading: true
      },
      {
        content: `Email is required for outreach campaigns.<br/>Go to:<br/><strong>Settings → Email Accounts → Add Account</strong><br/><br/>You can connect using:<ul><li> &nbsp; &bull; Google OAuth (recommended)</li><li> &nbsp; &bull; Outlook OAuth</li><li> &nbsp; &bull; SMTP/IMAP (custom providers)</li></ul>`,
        isParagraph: true
      },
      {
        title: "Before Sending Emails",
        isHeading: true
      },
      {
        content: `Make sure your domain has:<ul><li> &nbsp; &bull; SPF configured</li><li> &nbsp; &bull; DKIM enabled</li><li> &nbsp; &bull; DMARC policy active</li></ul>These records authenticate your domain and improve deliverability.<br/><br/>If you're unsure, refer to:<ul><li>&nbsp; &bull; DNS setup guide</li><li>&nbsp; &bull; SPF &amp; DKIM setup article</li></ul>`,
        isParagraph: true
      },

      {
        title: "Step 4: Configure Email Sending Settings",
        isHeading: true
      },
      {
        content: `After connecting your inbox:<ul><li> &nbsp; &bull; Set daily sending limits (start with 20–50/day)</li><li> &nbsp; &bull; Enable warm-up for new accounts</li><li> &nbsp; &bull; Add sender name and signature</li><li> &nbsp; &bull; Enable tracking preferences (opens, clicks)</li></ul>`,
        isParagraph: true
      },
      {
        content: `SalesTarget automatically:<ul><li> &nbsp; &bull; Rotates inboxes (if multiple connected)</li><li> &nbsp; &bull; Monitors account health</li><li> &nbsp; &bull; Applies safe sending behavior</li></ul>`,
        isParagraph: true
      },

      {
        title: "Step 5: Connect Your LinkedIn Account (Optional but Recommended)",
        isHeading: true
      },
      {
        content: `To enable LinkedIn automation:<ol><li> &nbsp; &bull; Go to <strong>LinkedIn Automation</strong></li><li> &nbsp; &bull; Click <strong>Connect LinkedIn</strong></li><li> &nbsp; &bull; Authorize via secure OAuth</li></ol>`,
        isParagraph: true
      },
      {
        content: `SalesTarget automatically:<ul><li> &nbsp; &bull; Assigns a residential proxy</li><li> &nbsp; &bull; Applies LinkedIn-safe daily limits</li><li> &nbsp; &bull; Enables human-like timing behavior</li><li> &nbsp; &bull; Distributes actions across your schedule</li></ul>`,
        isParagraph: true
      },
      {
        content: `You can configure:<ul><li> &nbsp; &bull; Daily limits (connections, messages, visits)</li><li> &nbsp; &bull; Working days</li><li> &nbsp; &bull; Working hours</li><li> &nbsp; &bull; Warm-up mode</li></ul>This ensures safe LinkedIn automation.`,
        isParagraph: true
      },

      {
        title: "Step 6: Review Account Health",
        isHeading: true
      },
      {
        content: `Before launching campaigns, confirm:<ul><li>&nbsp; ✔ Email account connected</li><li>&nbsp; ✔ Domain authentication verified</li><li>&nbsp; ✔ Warm-up enabled (if new inbox)</li><li>&nbsp; ✔ LinkedIn account connected (if using multi-channel)</li><li>&nbsp; ✔ Working hours configured</li></ul>`,
        isParagraph: true
      },
      {
        content: `A properly configured account prevents:<ul><li>&nbsp; &bull; Spam placement</li><li>&nbsp; &bull; Account restrictions</li><li>&nbsp; &bull; Sending errors</li><li>&nbsp; &bull; Reputation damage</li></ul>`,
        isParagraph: true
      },

      {
        title: "Step 7: Connect Optional Integrations",
        isHeading: true
      },
      {
        content: `You can enhance your workflow by connecting:<ul><li>&nbsp; &bull; Google Calendar (meeting scheduling)</li><li>&nbsp; &bull; Zoom (video meetings)</li><li>&nbsp; &bull; Calendly (availability links)</li><li>&nbsp; &bull; Slack (notifications)</li><li>&nbsp; &bull; CRM imports (Salesforce, HubSpot, Pipedrive)</li></ul>`,
        isParagraph: true
      },
      {
        content: `These integrations allow:<ul><li>&nbsp; &bull; Meeting automation</li><li>&nbsp; &bull; CRM synchronization</li><li>&nbsp; &bull; Real-time team alerts</li></ul>`,
        isParagraph: true
      },

      {
        title: "What Happens After Setup?",
        isHeading: true
      },
      {
        content: `Once your account is configured:<ul><li>&nbsp; &bull; Leads automatically sync into CRM</li><li>&nbsp; &bull; Campaigns follow safe sending rules</li><li>&nbsp; &bull; Replies appear in the Unibox</li><li>&nbsp; &bull; Activity logs update in real-time</li><li>&nbsp; &bull; Analytics begin tracking performance</li></ul>`,
        isParagraph: true
      },
      {
        content: `You’re now ready to:<ul><li>&nbsp; &bull; Discover leads</li><li>&nbsp; &bull; Create campaigns</li><li>&nbsp; &bull; Launch multi-channel outreach</li></ul>`,
        isParagraph: true
      },

      {
        title: "Recommended Next Steps",
        isHeading: true
      },
      {
        content: `After setting up your account:<ol><li>&nbsp; 1. Review the Quick Start Guide</li><li>&nbsp; 2. Connect your first email account</li><li>&nbsp; 3. Enable warm-up</li><li>&nbsp; 4. Launch a small test campaign (50–100 leads)</li></ol>Starting small helps you scale safely.`,
        isParagraph: true
      },

      {
        title: "Summary",
        isHeading: true
      },
      {
        content: `Setting up your SalesTarget account correctly ensures:<ul><li>✔ Safe email deliverability</li><li>✔ LinkedIn automation compliance</li><li>✔ Accurate tracking</li><li>✔ Team collaboration</li><li>✔ Smooth CRM integration</li></ul><br/>A few minutes of proper setup protects your domain, your LinkedIn account, and your long-term outreach performance.`,
        isParagraph: true
      }
    ]
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
  // {
  //   id: "10", // Unique ID for routing
  //   title: "What is LeadExplorer?",
  //   updated: "Updated over 8 months ago",
  //   content: `Lead Explorer in a cold email platform helps identify and qualify potential leads by leveraging a B2B lead database. It allows users to filter prospects based on industry, company size, job role, and other criteria, ensuring targeted outreach for higher conversion rates.`,
  //   features: [
  //     {
  //       title: "Advanced Lead Filtering ",
  //       description:
  //         "Sort leads by industry, company size, job role, and location.",
  //     },
  //     {
  //       title: "Verified Contact Data",
  //       description: "Access accurate emails and direct contacts.",
  //     },
  //     {
  //       title: "Real-Time Lead Updates",
  //       description: "Get the latest lead insights and changes.",
  //     },
  //   ],

  // },
  // {
  //   id: "11", // Unique ID for routing
  //   title: "Researching Leads?",
  //   updated: "Updated over 8 months ago",
  //   content: `Before launching your campaigns, verify your leads to avoid high bounce rates, which can harm your sender's reputation. Emails sent to non-existent addresses get permanently bounced, so removing them is crucial for better deliverability.`,
  //   features: [
  //     {
  //       title: "Bulk Verification",
  //       description:
  //         'When uploading a CSV file, check "Verify leads" before clicking Upload All.',
  //     },
  //     {
  //       title: "Individual Verification",
  //       description:
  //         'Select leads from the Leads Tab and click "Verify Leads" in the top right corner.',
  //     },
  //     {
  //       title: "Unlimited Warmup",
  //       description:
  //         "With the largest warmup pool on the market, salestarget ensures your emails never land in spam.",
  //     },
  //   ],

  // },

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
        image: "/Blog9_img2.png"
      },
      {
        title: "What is the warm-up plan for SalesTarget.ai users?",
        description:
          "SalesTarget.ai recommends a strategic warm-up plan for users to gradually increase email volume over time. This ensures that both the domain and individual email accounts maintain a good reputation and helps to improve deliverability. Below is a detailed breakdown of the warm-up phases:",
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
        content: "👉It works across AI Email Outreach, Lead Explorer, Sales Analytics, and Memory, so you can move from ICP → outreach → deals → pipeline growth without switching tools.",
        type: "paragraph",
        isParagraph: true
      },
      {
        content: "👉Copilot is completely free to use.",
        type: "paragraph",
        isParagraph: true
      },
      {
        src: "/intro.jpg",
        alt: " SalesTarget.ai Copilot dashboard showing options to find prospects, generate campaigns, write sequences, and view analytics with an AI-powered chat interface.",
        caption: "",
        type: "image",
        isImage: true
      },
      {
        title: "Quick Highlights",
        type: "heading",
        isHeading: true
      },
      {
        title: "What is Copilot?",
        description: "A free AI assistant inside SalesTarget.ai ",
      },
      {
        title: "What does it do? ",
        description: "Writes cold email sequences, suggests audiences, summarizes activity, reads your website for context, and recommends next steps."
      },
      {
        title: "Who is it for? ",
        description: " Founders, SDRs, sales teams, agencies "
      },
      {
        title: "Why does it matter? ",
        description: "Less manual work, faster pipeline, more meetings booked"
      },
      {
        title: "How much does it cost? ",
        description: "Copilot is free. Other modules have 7-day free trials and credits",
      },
      {
        title: "What Copilot Can Do",
        type: "heading",
        isHeading: true
      },
      {
        title: "1. AI Email Outreach (Cold Email Writer)",
        type: "heading",
        isHeading: true
      },
      {
        description: "	Generate 3–5 step email sequences from a short brief",

      },
      {
        description: "	Personalize intros using company, role, or industry context.",
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
        type: "heading",
        isHeading: true
      },
      {
        description: "	Turn your ICP (Ideal Customer Profile) into filters.	",


      },
      {
        description: "	Suggest lookalike accounts and adjacent segments.",
      },
      {
        description: "	Recommend safe sending list sizes for testing.",
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
        type: "heading",
        isHeading: true
      },
      {
        description: "	Summarize campaign results.",
      },
      {
        description: "	Highlight which sequences and subject lines perform best.",
      },
      {
        description: "	Recommend next steps to improve reply and conversion rates.",
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
        title: "4. Memory (Business Data Awareness) ",
        type: "heading",
        isHeading: true,
      },
      {
        content: "Memory is where Copilot becomes truly context-aware. Instead of starting from scratch, you can add your website and ICP details, and Copilot will personalize everything.",
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

        src: "/memory1.jpg",
        alt: "SalesTarget Copilot Memory panel for entering website details including URL,company name, description, awards, and outreach goals.",
        caption: "",
        isImage: true
      },
      {
        src: "/memory2.jpg",
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
        description: " Keep subject lines under 6 words.",
      },
      {
        description: "Always include a calendar link in the last email ",
      },
      {
        description: " Prioritize SaaS companies in APAC  ",
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
        title: "Why Memory Matters",
        type: "heading",
        isHeading: true
      },
      {
        title: "Consistent Messaging ",
        description: "Copilot always speaks in your brand voice"
      },
      {
        title: "Context-Aware Responses",
        description: "Prompts and drafts reflect your ICP and positioning."
      },
      {
        title: "Faster Setup ",
        description: " No need to repeat background info. "
      },
      {
        title: "Smarter Outreach ",
        description: "Recommendations tied to your real business data."
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
        title: "New Chat ",
        description: "Ask Copilot anything (e.g., “Find ideal prospects” or “Summarize this campaign”)."
      },
      {
        title: "Memory",
        description: "Add your website so Copilot can read and use your business data."
      },
      {
        title: "Analytics",
        description: "Review campaign outcomes and get improvement suggestions."
      },
      {
        title: "How Copilot Fits Your Sales Workflow",
        isHeading: true
      },
      {
        title: "	Define ICP ",
        description: "Copilot builds filters in Lead Explorer."
      },
      {
        title: "Generate List ",
        description: "Copilot recommends size + adjacent segments."
      },
      {
        title: "	Write Outreach Sequence ",
        description: "Copilot drafts, personalizes, and A/B tests."
      },
      {
        title: " Send in Batches ",
        description: "→ Copilot monitors and optimizes"
      },
      {
        title: "	Use Memory",
        description: "Copilot references your website for smarter outputs."
      },
      {
        title: " Quick Start (In 10 Minutes) ",
        isHeading: true
      },
      {
        description: "Log in to SalesTarget.ai → find Copilot in the sidebar."
      },
      {
        description: "Pick a goal (e.g., “Book 5 FinTech discovery calls this week”)."
      },
      {
        description: "Paste your ICP (or let Copilot ask questions)"
      },
      {
        description: " Generate a sequence → choose tone + personalization "
      },
      {
        description: "	Create a 25-contact test list → hit send."
      },
      {
        description: "	Add your website to Memory → let Copilot tailor outputs."
      },
      {
        title: "Free Access Recap",
        isHeading: true
      },
      {
        title: "Copilot (AI sales assistant)",
        description: "Always free"
      },
      {
        title: "AI Email Outreach",
        description: "7-day trial + 100 credits"
      },
      {
        title: "Lead Explorer",
        description: "7-day trial + 100 credits"
      },
      {
        title: "Upload Data",
        description: "100 credits (CSV + enrichment)"
      },

      {
        title: "Prompt Recipes (Copy/Paste)",
        isHeading: true
      },
      {
        title: "Subject lines",
        description: "10 subject lines for SaaS Heads of Sales about reducing prospecting time "
      },
      {
        title: "Personalization:",
        description: "1-sentence opener using {first_name}, {company}, and {recent_news}"
      },
      {
        title: "Objection handling",
        description: "Reply to ‘We’re doing this in-house’ with a short invite for a 15-minute teardown."
      },
      {
        title: "Follow-ups",
        description: "Day-3 follow-up if opened but no reply. Offer 2 time slots"
      },
      {
        title: "Deals Summary",
        description: "Summarize last 5 emails with Contoso and propose next action"
      },
      {
        title: "Memory prompt",
        description: "Use our website content and generate a 3-step outreach for SMB FinTech prospects."
      },
      {
        title: "Best Practices",
        isHeading: true
      },
      {
        description: "Start with 25–50 contacts, then scale"
      },
      {
        description: "Keep ICP segments tight (industry + role + region)"
      },
      {
        description: "Cold emails ≤120 words, subject lines 4–6 words"
      },
      {
        description: "Use one clear CTA per email."
      },
      {
        description: "Add your website to Memory early so Copilot learns your messaging"
      },
      {
        title: "Who Benefits Most",
        isHeading: true
      },
      {
        title: "Founders & Solo Sellers",
        description: "Faster to first meetings"
      },
      {
        title: "SDRs / BDRs",
        description: "Build lists + launch campaigns faster."
      },
      {
        title: "Sales Leaders / RevOps",
        description: "Cleaner pipeline, weekly clarity"
      },
      {
        title: "Agencies",
        description: "Reusable playbooks for multiple clients"
      }

    ],


    faq: [

      {
        title: "Is Copilot free?",
        description: "Yes. Copilot is completely free inside SalesTarget.ai"
      },

      {
        title: "Does Copilot replace sales reps?",
        description: "No. It assists reps with writing, research, and recommendations. Strategy and relationships stay human."
      },

      {
        title: "How do trials/credits work?",
        description: "Copilot is free. Email Outreach, Lead Explorer, and Upload Data come with 100 credits each. CRM has a 7-day trial."
      },

      {
        title: "Is my sales data secure?",
        description: "Yes. Your workspace data stays in your account. Imports, lists, and enrichment are private to you"
      },

      {
        title: "Does Memory store my website data?",
        description: "Yes. When you add your website, Copilot securely pulls content for context-aware responses. Data remains private to your account."
      },
      {
        title: "Ready to Try Copilot?",
        description: "Log in to SalesTarget.ai, enter your ICP and sales goal, and let Copilot handle outreach, lead generation, CRM insights, analytics, and website-based Memory — all in one place"
      },
      {
        title: "Need help? Email support@salestarget.ai for a quick start playbook."
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
        title: "What you get (at a glance)",
        isHeading: true

      },
      {
        isTable: true,
        headers: ["Product/Feature", "Free Access ", " What it lets you do "],
        rows: [["AI Email Outreach", "7-day trial + 100 credits", "Create multi-step sequences, have AI write &amp; personalize copy, A/B test subject lines, and automate follow-ups."],


        ["CRM", "7-day trial", "Track opportunities, stages, tasks, notes, and pipeline analytics—all in one place."],

        ["Lead Explorer (AI-powered)", "7-day trial + 100 credits", "Find ICP-matched, verified B2B contacts with AI suggestions for lookalike accounts; enrich and save lists to campaigns."],

        ["Copilot (AI assistant)", "Free", "Ask for campaign ideas, write copy, summarize activity, and get next-best actions anywhere in the app."],

        ["Upload Your Data (BYO leads)", "100 credits", "Import a CSV and we'll automatically add missing details, remove duplicates, and put each column in the right place—ready for AI Email Outreach and CRM ."]
        ]
      },

      {
        title: "Credits dashboard:",
        description: "You get three separate 100-credit buckets—Lead Explorer, AI Email Outreach, and Upload Your Data. Your live balances are visible in the app so you can plan usage with no surprises."
      },


      {
        title: "Why start with a trial?",
        isHeading: true
      },
      {
        title: "Low risk, high signal.",
        description: "In a week you’ll know if SalesTarget.ai fits your team."
      },
      {
        title: "Real work, not demos.",
        description: "Build a list, run AI outreach, log replies, move deals."
      },
      {
        title: "Everything connected.",
        description: "Lead Explorer ↔ AI Email ↔ CRM, with Copilot helping at each step."
      },
      {
        title: "Get started in minutes",
        isHeading: true
      },
      {
        description: "Create your workspace at salestarget.ai and log in.",
      },
      {
        description: "Activate trials for AI Email Outreach, CRM, and Lead Explorer (Copilot is free and ready).",
      },
      {
        description: "Define your ICP (industry, role, company size, region).",
      },
      {
        description: "Draft a sequence with Copilot (3–5 steps), personalize with variables, and set your sending window.",
      },
      {
        description: "Launch a small batch (e.g., 25 contacts), then scale what works.",
      },
      {
        title: "A 7-day blueprint (so you get real signal)",
        isHeading: true
      },
      {
        title: "Day 1 — Setup & strategy",
        description: "Connect your sender email, define your ICP, and ask Copilot for angles and subject lines."
      },
      {
        title: "Day 2 — Build your first list (Lead Explorer)",
        description: "Use filters + AI suggestions to generate a tight segment. Spend Lead Explorer credits on best-fit contacts."
      },
      {
        title: "Day 3 — Sequence (AI Email Outreach)",
        description: "Use Copilot to draft and personalize a 3–5 step sequence. Add a clear CTA."
      },
      {
        title: "Day 4 — Send &; monitor",
        description: "Start with a small cohort. Track opens, clicks, and replies. Push engaged contacts into CRM."
      },
      {
        title: "Day 5 — Follow-ups &; deals (CRM)",
        description: "Log calls/notes, move opportunities through stages, set tasks. Ask Copilot to summarize progress."
      },
      {
        title: "Day 6 — Improve",
        description: "Test a new subject line or opener. Try a second micro-segment (different industry or seniority)."
      },
      {
        title: "Day 7 — Review outcomes",
        description: "Check replies and meetings booked, opportunities created, and pipeline value. Decide what to scale."
      },
      {
        title: "Tips to stretch your credits",
        isHeading: true
      },
      {
        description: "Aim for quality &gt; quantity: one tightly defined segment beats a broad blast.",
      },
      {
        description: "Use Copilot for fast personalization to lift replies without manual work.",
      },
      {
        description: "Batch test 2 subject lines × 2 openers; keep the winner, pause the loser.",
      },
      {
        description: "Keep CRM stages tidy—clean data makes your week-one analytics meaningful..",
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
        isHeading: true
      },
      {
        title: "AI Email Outreach:",
        description: "7-day free trial + 100 credits"
      },
      {
        title: "CRM:",
        description: "7-day free trial "
      },
      {
        title: "Lead Explorer (AI-powered):",
        description: "7-day free trial + 100 credits"
      },
      {
        title: "Upload Your Data:",
        description: "100 credits"
      },
      {
        title: "Copilot (AI assistant):",
        description: "Free"
      },
      {
        title: "Start here: salestarget.ai → create your workspace → enable the trials. Need help? Email support@salestarget.ai—we’ll get you productive on Day 1."
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
        title: "What Is Email Warm-Up (and Why Does It Matter)?",
        isHeading: true,

      },
      {
        content: "Email warm-up is the process of gradually building trust with inbox providers before you send cold campaigns at scale.Inbox providers like Gmail, Outlook, and Yahoo constantly monitor how people interact with your emails. If you suddenly blast hundreds of cold emails from a fresh domain, it raises red flags — and your messages are likely to land in spam.",
        isParagraph: true
      },
      {
        content: "A warm-up plan fixes this by:",
        isParagraph: true
      },
      {
        description: "Gradually increasing sending volume."
      },
      {
        description: "Simulating natural email behavior (opens, replies, forwards)."
      },
      {
        description: "Improving engagement signals.",
      },
      {
        description: "Protecting your domain reputation for the long term."
      },
      {
        content: "Without warm-up, even the best-crafted campaigns risk being wasted in spam.",
        isParagraph: true
      },
      {
        title: "The SalesTarget.ai Warm-Up Formula",
        isHeading: true
      },
      {
        content: "We recommend a simple, structured approach for every new domain and email account.",
        isParagraph: true
      },
      {
        description: "Each domain can connect up to 5 email accounts."
      },
      {
        description: "Each account can safely send 30 emails per day once warmed up."
      },
      {
        description: "That means one domain = 150 high-quality cold emails/day at full strength."
      },
      {
        content: "Here’s how to get there:",
        isParagraph: true
      },
      {
        stepTitle: "Step 1: Start Small",
        isStep: true
      },
      {
        description: "Begin with 5 emails per account per day."
      },
      {
        description: "Keep this steady during the first week."
      },
      {
        description: "Focus on sending personalized messages unlikely to be flagged as spam."
      },
      {
        stepTitle: "Step 2: Gradually Increase Volume",
        isStep: true
      },
      {
        description: "After week 1, increase sending by +10 emails per account per week."
      },
      {
        description: "Example timeline:"
      },
      {
        description: "Week 1 → 5 emails/account"
      },
      {
        description: "Week 2 → 15 emails/account"
      },
      {
        description: "Week 3 → 25 emails/account "
      },
      {
        description: "Week 4 → 35 emails/account"
      },
      {
        stepTitle: "Step 3: Maintain the Reputation",
        isStep: true
      },
      {
        description: "Stay consistent at 30/day/account."
      },
      {
        description: "Add new domains/accounts if you need more volume."
      },
      {
        description: "Never jump from low to high overnight."
      },
      {
        content: "Think of warm-up like going to the gym — you wouldn’t lift 200 lbs on Day 1. Build gradually to avoid injury (or in this case, the spam folder).",
        isParagraph: true
      },
      {
        title: "Automating Warm-Up with SalesTarget.ai",
        isHeading: true
      },
      {
        content: "Manually sticking to a warm-up schedule takes discipline. And honestly, most teams forget or get inconsistent.",
        isParagraph: true
      },
      {
        content: "That’s why we built the SalesTarget.ai automated warm-up tool. With one click, it handles everything for you:",
        isParagraph: true

      },
      {
        description: "Positive engagement simulation → Generates realistic opens, replies, and forwards."
      },
      {
        description: "Reputation training → Inbox providers begin trusting your domain."
      },
      {
        description: "Set-and-forget convenience → No micromanaging."
      },
      {
        content: "This means you’ll never have to worry about your cold emails being stuck in spam again.",
        isParagraph: true
      },
      {
        title: "Putting It All Together",
        isHeading: true
      },
      {
        content: "A successful cold email strategy starts with one thing: deliverability. Without it, even the best campaign won’t convert.",
        isParagraph: true
      },
      {
        content: "Here’s the winning formula to remember:",
        isParagraph: true
      },
      {
        description: "Use 5 accounts per domain."
      },
      {
        description: "Stick to 30 emails/day/account."
      },
      {
        description: "Follow the gradual warm-up schedule (5 → 15 → 25 → 30)."
      },
      {
        description: "Use SalesTarget.ai’s automated warm-up tool to stay consistent."
      },
      {
        content: "Combine discipline with automation, and you’ll build a bulletproof sender reputation that gets you into more inboxes and books more meetings.",
        isParagraph: true
      },
      {
        title: " Beyond Warm-Up: Meet Copilot",
        isHeading: true
      },
      {
        content: "Warm-up gets your emails into the inbox. But what do you say once you’re there? That’s where Copilot in SalesTarget.ai comes in.",
        isParagraph: true
      },
      {
        title: "Copilot is your AI-powered sales assistant that helps you:",
        isHeading: true
      },
      {
        description: "Find the right leads instantly from a 50M+ verified database."
      },
      {
        description: "Generate complete cold email campaigns with sequences and follow-ups."
      },
      {
        description: "Analyze performance and show you which campaigns drive revenue."
      },
      {
        description: "Recommend expert next steps to improve results."
      },
      {
        content: "Think of it this way: Warm-up = delivery. Copilot = conversion. Together, they cover the entire cold email journey.",
        isParagraph: true
      },
      {
        title: "Ready to Scale Cold Email Outreach?",
        isHeading: true
      },
      {
        content: "SalesTarget.ai is more than just a warm-up tool. It’s a complete outbound sales platform that gives you:",
        isParagraph: true
      },
      {
        title: "Cold Email Outreach",
        description: "with deliverability safeguards."
      },
      {
        title: "Lead Explorer",
        description: "with 50M+ verified B2B contacts."
      },
      {
        title: "CRM",
        description: "to manage conversations and deals."
      },
      {
        title: "Copilot AI",
        description: "to plan, launch, and optimize campaigns."
      },
      {
        content: "Start with a free trial today and launch inbox-ready campaigns in minutes.",
        isParagraph: true
      },
      {
        content: "Get Started with SalesTarget.ai",
        isParagraph: true
      }

    ],


    faq: [
      {
        title: "How long does email warm-up take?",
        description: "Typically, it takes 3–4 weeks to fully warm up a new account. The exact time depends on your sending volume, engagement rates, and how consistent you are with the process."
      },
      {
        title: "Can I skip warm-up if I already have an old domain?",
        description: "Not recommended. Even if your domain is aged, if it hasn’t been used for outreach recently, inbox providers may still flag sudden spikes in volume. A light warm-up is always a safe step."
      },
      {
        title: "How many emails should I start with during warm-up?",
        description: "We suggest starting with 5 emails per account per day and gradually increasing by +10 each week until you reach 30/day/account."
      },
      {
        title: "What happens if I send too many emails too soon?",
        description: "Your domain reputation could suffer, leading to emails going to spam or promotions tab. In some cases, providers may even suspend your account."
      },
      {
        title: "Do I need multiple domains for cold outreach?",
        description: "Yes, if you plan to scale. Each domain can safely manage up to 5 accounts, sending about 150 emails/day in total. More domains = higher safe sending volume."
      },
      {
        title: "Why use an automated warm-up tool instead of manual warm-up? ",
        description: " Manual warm-up requires discipline and consistency, but most teams forget or lose track. Automated tools like SalesTarget.ai simulate real engagement (opens, replies, forwards) — ensuring your reputation grows steadily without manual effort."
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
        title: "1. What is the core value of SalesTarget.ai CRM?",
        type: "heading",
        isHeading: true

      },
      {
        content: "Answer: SalesTarget.ai CRM provides a centralized hub to manage your entire sales process—emails, tasks, meetings, deals, reports, and team collaboration—without switching between multiple tools. It’s designed to streamline lead management,improve productivity, and give leadership a clear overview of sales performance.",
        type: "paragraph",
        isParagraph: true
      },

      {
        title: "2. How does the Dashboard help me?",
        type: "heading",
        isHeading: true

      },
      {
        content: " Answer: The Dashboard gives you a snapshot view of your organization’s activity.You can instantly see:",
        type: "paragraph",
        isParagraph: true
      },
      {
        description: "Email stats"
      },
      {
        description: "Tasks and Meetings"
      },
      {
        description: "Closed Deals"
      },
      {
        description: "Recommended Leads"
      },
      {
        content: "This means you don’t need to dig through multiple reports to understand where your pipeline stands.",
        type: "paragraph",
        isParagraph: true
      },

      {
        title: "3. Can my team manage emails directly inside the CRM?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: Yes. Once your email is linked, you can send, receive, and reply to emails directly from the platform—keeping communication centralized.",
        type: "paragraph",
        isParagraph: true
      },

      {
        title: "4. How do Deals work inside SalesTarget.ai?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: Deals can be created, assigned, and tracked through customizable stages. You can drag-and-drop deals as they progress, giving full pipeline visibility.",
        type: "paragraph",
        isParagraph: true
      },

      {
        title: "5. How does the Meetings feature integrate with my workflow?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: You can schedule and assign meetings directly from the CRM. Meetings can also be dragged across different statuses (e.g., scheduled, completed), ensuring follow-ups are tracked.",
        type: "paragraph",
        isParagraph: true
      },

      {
        title: "6. How do Tasks help my team stay accountable?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: Managers can assign tasks to team members, and agents update the status upon completion. This ensures visibility for admins and accountability for team members.",
        type: "paragraph",
        isParagraph: true
      },

      {
        title: "7. What type of reporting can I access?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: The Reports section provides insights into:",
        type: "paragraph",
        isParagraph: true
      },
      {
        description: "Emails sent and delivered"
      },
      {
        description: "Email trends"
      },
      {
        description: "Analytics and organizational statistics"
      },
      {
        content: "This helps you track performance and optimize sales strategies.",
        type: "paragraph",
        isParagraph: true
      },

      {
        title: "8. How easy is it to onboard new team members?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: Adding members is simple: go to Configurations → Members, click \"Add Member,\" enter their email, assign a role, and send an invite.",
        type: "paragraph",
        isParagraph: true
      },

      {
        title: "9. Does SalesTarget.ai CRM integrate with other tools we already use?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: Yes, however, the integration is still under progress and will be available once the platform is updated.",
        type: "paragraph",
        isParagraph: true
      },

      {
        title: "10. Is there automation for repetitive tasks (e.g., email sequences, reminders)?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: Yes. SalesTarget.ai automates repetitive tasks to save time and boost efficiency.",
        type: "paragraph",
        isParagraph: true
      },
      {
        description: "Email automation: Multi-step sequences, smart follow-ups, and response tracking that stop when a reply is received."
      },
      {
        description: "Task automation: Auto-scheduled tasks, reminders, and lead assignment to keep workflows moving."
      },
      {
        description: "Other automation: Lead cleanup, contact validation, and CRM syncing to stay organized with less manual effort."
      },
      {
        content: "These features significantly boost productivity by eliminating manual work while maintaining professional communication flow.",
        type: "paragraph",
        isParagraph: true
      },

      {
        title: "11. How secure is my company's data on SalesTarget.ai?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: We prioritize your data security with multiple layers of protection.",
        type: "paragraph",
        isParagraph: true
      },
      {
        description: "Safeguards: Technical, organizational, and physical measures are in place, though no system is 100% risk-free."
      },
      {
        description: "Compliance: Data is processed under laws like CCPA, with strict confidentiality obligations"
      },
      {
        description: "Usage: Your data is only used for authorized purposes defined in our agreement."
      },
      {
        description: "Rights: You can access, update, or delete your information anytime. European users have additional GDPR rights."
      },
      {
        description: "Transfers: International data transfers follow standard contractual safeguards."
      },

      {
        title: "12. Can I customize pipelines, reports, or dashboards for my business needs?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: Yes. SalesTarget.ai CRM offers extensive customization to fit your business needs.",
        type: "paragraph",
        isParagraph: true
      },
      {
        description: "Workflows: Create custom workflows tailored to your processes for maximum efficiency."
      },
      {
        description: "Reports: Generate detailed, customizable reports for data-driven decisions."
      },
      {
        description: "Configuration: Easily configure the CRM setup to align with your business requirements."
      },
      {
        description: "Advanced options: Custom workflows, fully customizable filters & segments, and dynamic segmentation for smarter, personalized outreach."
      },
      {
        content: "Our flexible customization ensures your CRM adapts seamlessly to your workflow and customer management needs.",
        type: "paragraph",
        isParagraph: true
      },

      {
        title: "13. Does the CRM support mobile access for my sales team?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: Yes. Our CRM supports mobile access for your sales team.",
        type: "paragraph",
        isParagraph: true
      },
      {
        description: "Comprehensive features: Lead management, task scheduling, smart inbox for communications, and automated workflows."
      },
      {
        description: "All-in-one dashboard: Manage emails and pipelines seamlessly on the go."
      },
      {
        description: "One-click integrations: Connect with major platforms and use auto-sync to keep pipelines organized and conversion-ready."
      },
      {
        description: "Clean interface: A clutter-free design makes it easy to manage leads, track interactions, and close deals faster from anywhere."
      },

      {
        title: "14. How scalable is SalesTarget.ai CRM as my team grows?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: SalesTarget.ai CRM is built for performance and scalability as your team grows.",
        type: "paragraph",
        isParagraph: true
      },
      {
        description: "Enterprise-ready architecture: Supports everything from individual users to large enterprise teams."
      },
      {
        description: "Flexible credit system: Scalable pricing plans with generous lead credits that expand with your usage."
      },
      {
        description: "Advanced integration capabilities: One-click integrations, auto-sync for high lead volumes, and duplicate detection for clean data."
      },
      {
        description: "Real-time performance: Instant updates to lead lists with 99%+ verified contact accuracy."
      },
      {
        description: "Whether you're scaling from startup to enterprise, the platform adapts seamlessly with minimal setup.",
      },

      {
        title: "15. How does the Dashboard help me stay on top of my sales activity?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: The Dashboard provides a quick overview of your activity, including:",
        type: "paragraph",
        isParagraph: true
      },
      {
        description: "Email statistics"
      },
      {
        description: "Tasks and Meetings"
      },
      {
        description: "Closed Deals"
      },
      {
        description: "Recommended Leads"
      },
      {
        content: "This allows you to track performance at a glance without digging into multiple sections.",
        type: "paragraph",
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
        title: "16. Can I manage emails directly from the Inbox?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: Yes. The Inbox integrates your email directly into the CRM for seamless communication. You can:",
        type: "paragraph",
        isParagraph: true
      },
      {
        description: "Link your email account"
      },
      {
        description: "Send and receive emails"
      },
      {
        description: "Compose replies without leaving the platform"
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
        title: "17. What can I find under the Lists section?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: The Lists section contains all your assigned lists, including:",
        type: "paragraph",
        isParagraph: true
      },
      {
        description: "Tasks"
      },
      {
        description: "Meetings"
      },
      {
        description: "Deals"
      },
      {
        content: "This ensures everything is organized and easy to access in one place.",
        type: "paragraph",
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
        title: "18. How do I create and manage Deals in SalesTarget.ai CRM?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: Deals can be easily created, assigned, and tracked through your pipeline stages.",
        type: "paragraph",
        isParagraph: true
      },
      {
        stepTitle: "To create a Deal:",
        isStep: true
      },
      {
        description: "Go to CRM → Deals"
      },
      {
        description: "Click Add New (top-left corner)"
      },
      {
        description: "Fill in the required fields"
      },
      {
        description: "Click Save"
      },
      {
        content: "Once created, you can drag the deal across statuses as it progresses.",
        type: "paragraph",
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
        title: "19. How do I schedule and track Meetings inside the CRM?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: Meetings can be managed and scheduled directly from the platform.",
        type: "paragraph",
        isParagraph: true
      },
      {
        stepTitle: "To schedule a Meeting:",
        isStep: true
      },
      {
        description: "Go to CRM → Meetings"
      },
      {
        description: "Click Add New (top-left corner)"
      },
      {
        description: "Fill in the required fields"
      },
      {
        description: "Click Save"
      },
      {
        content: "You can then move meetings across statuses (e.g., scheduled, completed) as they progress.",
        type: "paragraph",
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
        title: "20. How do Tasks keep my team accountable?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: Tasks allow managers to assign and track work for team members.",
        type: "paragraph",
        isParagraph: true
      },
      {
        stepTitle: "To create/assign a Task:",
        isStep: true
      },
      {
        description: "Go to CRM → Tasks"
      },
      {
        description: "Click Add New (top-left corner)"
      },
      {
        description: "Fill in the required fields"
      },
      {
        description: "Select the Assignee (agent name)"
      },
      {
        description: "Click Save"
      },
      {
        content: "Agents update the status upon completion, ensuring visibility for admins.",
        type: "paragraph",
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
        title: "21. What type of Reports can I generate?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: Reports provide detailed analytics to optimize performance. You can access:",
        type: "paragraph",
        isParagraph: true
      },
      {
        description: "Emails sent and delivered"
      },
      {
        description: "Email performance trends"
      },
      {
        description: "Organization-wide analytics and statistics"
      },
      //       {
      //   src: "/dashboard-screenshot.png",
      //   alt: "SalesTarget dashboard interface",
      //   caption:"",
      //   type: "image",
      //   isImage: true
      // },

      {
        title: "22. How do I add new team members to the CRM?",
        type: "heading",
        isHeading: true
      },
      {
        content: "Answer: Adding new members is quick and simple.",
        type: "paragraph",
        isParagraph: true
      },
      {
        stepTitle: "To add a new member:",
        isStep: true
      },
      {
        description: "Go to \"Configurations\" → \"Members\"."
      },
      {
        description: "Click \"Add Member\"."
      },
      {
        description: "Enter the email address"
      },
      {
        description: "Select a \"Role\"."
      },
      {
        description: "Click \"Invite\"."
      },
      {
        content: "This ensures your team can collaborate effectively inside the CRM.",
        type: "paragraph",
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
        description: ` Add subject line variants`
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
        content: `This structure gives your outreach a natural flow while keeping everything automated.`,
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
        description: `Better deliverability`
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
        content: `SalesTarget.ai also ensures that:`,
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
        description: ` {{signature}} `
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
        description: ` Time windows`
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
        content: `These settings help maintain high email deliverability and improve cold outreach performance`,
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
        description: `A quick test helps you catch: `
      },
      {
        description: `Personalization token issues`
      },
      {
        description: `Formatting errors`
      },
      {
        description: `Broken links`
      },
      {
        description: `Long paragraphs`
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
        isParagraph: true
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
  },

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
    metaDescription: "",
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
        content: `
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
  },

  {
    id: "75",
    title: "Campaigns Overview: How Campaigns Work in SalesTarget.ai",
    updated: "",
    content: `Campaigns are the core of email outreach in SalesTarget.ai.<br/>  A campaign controls:<br/> <ul className="type-disc ml-4"> <li>&nbsp; ● Who you contact</li> <li>&nbsp; ● What emails are sent</li> <li> &nbsp; ● When emails are sent</li> <li>&nbsp; ●  What happens after someone replies.</li> </ul>

This article explains how campaigns work at a high level, so you understand the full flow before creating or managing one.`,
    metaTitle: "Campaigns Overview | How Email Campaigns Work in SalesTarget.ai",
    metaDescription: "Learn how campaigns work in SalesTarget.ai. Understand campaign tabs, lead management, email templates, scheduling, and reply handling for effective cold email outreach.",
    metaKeywords: "SalesTarget.ai campaigns, email outreach campaigns, cold email automation, campaign management, email sequences, lead management, campaign analytics",
    features: [
      {
        title: "What Is a Campaign in SalesTarget.ai?",
        isHeading: true
      },
      {
        content: "If you've used cold email tools before, a campaign is similar to an automated email sequence tied to a lead list.",
        isParagraph: true
      },
      {
        content: "A campaign is a complete outreach setup that connects:",
        isParagraph: true
      },
      {
        description: "Leads (people you want to contact)"
      },
      {
        description: "Email templates (what messages are sent)"
      },
      {
        description: "Email accounts (from where emails are sent)"
      },
      {
        description: "Schedule and settings (when and how emails are sent)"
      },
      {
        description: "Unibox and CRM (what happens after replies)"
      },
      {
        content: "Once a campaign is active, SalesTarget.ai handles sending, follow-ups, reply tracking, and analytics automatically.",
        isParagraph: true
      },

      {
        title: "Where Campaigns Fit in SalesTarget.ai",
        isHeading: true
      },
      {
        content: `Campaigns are part of the <strong>Email Outreach (Cold Email Outreach)</strong> module. They act as the link between:`,
        isParagraph: true
      },
      {
        description: `<strong>Lead Explorer </strong>(finding leads)`
      },
      {
        description: `<strong>Email Accounts </strong>(sending emails)`
      },
      {
        description: `<strong>Templates </strong>(email sequences)`
      },
      {
        description: `<strong>Unibox </strong>(managing replies)`
      },
      {
        description: `<strong>CRM </strong>(tracking deals, tasks, and meetings)`
      },
      {
        content: `In simple terms:<br/> 👉 Campaigns bring everything together and make outreach run automatically.`,
        isParagraph: true
      },

      {
        title: "Campaign Tabs in SalesTarget.ai",
        isHeading: true
      },
      {
        content: `Each campaign is organized into<strong> five main tabs.</strong> <br/> Each tab controls a different part of the campaign.`,
        isParagraph: true
      },

      {
        title: "1. Analytics",
        isHeading: true
      },
      {
        content: `Shows how your campaign is performing once it is active.<br/> You can track:`,
        isParagraph: true
      },
      {
        description: "Emails sent"
      },
      {
        description: "Opens"
      },
      {
        description: "Clicks"
      },
      {
        description: "Replies"
      },
      {
        description: "Bounces"
      },
      {
        description: "Unsubscribes"
      },
      {
        content: "Analytics become visible only after the campaign starts sending emails.",
        isParagraph: true
      },

      {
        title: "2. Templates",
        isHeading: true
      },
      {
        content: "This is where you create and manage the email sequence used in the campaign. Templates define:",
        isParagraph: true
      },
      {
        description: "The first cold email"
      },
      {
        description: "Follow-up emails"
      },
      {
        description: "Time gap between each step"
      },
      {
        description: "A/B variants for testing"
      },
      {
        content: `Templates control<strong> what emails are sent and in what order.</strong>`,
        isParagraph: true
      },

      {
        title: "3. Leads",
        isHeading: true
      },
      {
        content: "This tab shows all leads added to the campaign. <br/>Leads can be added in three ways:",
        isParagraph: true
      },
      {
        description: "Upload a CSV file"
      },
      {
        description: "Add leads directly from Lead Explorer"
      },
      {
        description: "Attach an existing saved list"
      },
      {
        content: "Each lead moves through the campaign based on replies, bounces, and completion of steps.",
        isParagraph: true
      },

      {
        title: "4. Settings",
        isHeading: true
      },
      {
        content: "Settings control<strong> how emails are </strong>sent and<strong> when follow-ups stop.</strong> <br/> Here you manage:",
        isParagraph: true
      },
      {
        description: "Which email account is used"
      },
      {
        description: "Whether follow-ups stop after a reply"
      },
      {
        description: "Open and link tracking"
      },
      {
        description: "Plain-text or HTML sending"
      },
      {
        description: "A/B testing rules"
      },
      {
        content: "These settings help protect deliverability and control campaign behavior.",
        isParagraph: true
      },

      {
        title: "5. Schedule",
        isHeading: true
      },
      {
        content: "The Schedule tab controls <strong>when emails are sent.</strong><br/> You can:",
        isParagraph: true
      },
      {
        description: "Send the campaign immediately"
      },
      {
        description: "Schedule a start date and time"
      },
      {
        description: "Choose the time zone"
      },
      {
        description: "Set a gap between emails"
      },
      {
        content: "This helps emails go out at the right time and avoids sending too fast.",
        isParagraph: true
      },

      {
        title: "How a Campaign Works (Simple Flow)",
        isHeading: true
      },
      {
        content: "Here's what happens when you run a campaign:",
        isParagraph: true
      },
      {
        description: "Leads are added to the campaign"
      },
      {
        description: "Templates define the email sequence"
      },
      {
        description: "Email accounts send emails based on settings and schedule"
      },
      {
        description: "Follow-ups are sent automatically if no reply is received"
      },
      {
        description: "Replies appear in Unibox"
      },
      {
        description: "Campaign analytics update in real time"
      },
      {
        content: "This process runs automatically once the campaign is active.",
        isParagraph: true
      },

      {
        title: "What Happens When a Lead Replies?",
        isHeading: true
      },
      {
        content: "When a lead replies to a campaign email:",
        isParagraph: true
      },
      {
        description: `The reply appears in <strong>Unibox</strong>`
      },
      {
        description: "Follow-up emails stop automatically (if enabled)"
      },
      {
        description: "You can update the lead status (Interested, Follow-up Needed, etc.)"
      },
      {
        description: "The lead can be added to CRM with one click"
      },
      {
        content: "This helps you move from outreach to sales without losing context.",
        isParagraph: true
      },

      {
        title: "Lead Status Inside a Campaign",
        isHeading: true
      },
      {
        content: "Each lead in a campaign has a clear status:",
        isParagraph: true
      },
      {
        description: `<strong>Active</strong> – Currently receiving campaign emails`
      },
      {
        description: `<strong>Replied</strong> – Lead has replied and exited the sequence`
      },
      {
        description: `<strong>Bounced</strong> – Email could not be delivered`
      },
      {
        description: `<strong>Skipped</strong> – Lead did not meet campaign conditions`
      },
      {
        description: `<strong>Completed</strong> – All sequence steps are finished`
      },
      {
        content: "These statuses help you understand campaign progress quickly.",
        isParagraph: true
      },

      {
        title: "Campaigns vs Templates (Quick Clarification)",
        isHeading: true
      },
      {
        description: `<strong>Campaign</strong> controls execution (leads, accounts, schedule, analytics)`
      },
      {
        description: `<strong>Template</strong> controls messaging (email content and follow-ups)`
      },
      {
        content: "A campaign uses one template to send emails to many leads.",
        isParagraph: true
      },

      {
        title: "Why Campaigns Matter",
        isHeading: true
      },
      {
        content: "Campaigns help you:",
        isParagraph: true
      },
      {
        description: "Run outreach at scale without manual work"
      },
      {
        description: "Protect sender reputation with controlled sending"
      },
      {
        description: "Track replies and engagement in one place"
      },
      {
        description: "Move interested leads directly into CRM"
      },
      {
        content: "Once set up correctly, campaigns run in the background while you focus on replies and conversions.",
        isParagraph: true
      },

      {
        title: "What This Article Covers (and What It Doesn't)",
        isHeading: true
      },
      {
        content: "This article explains<strong> how campaigns work at a high level.</strong><br/> Detailed guides for:",
        isParagraph: true
      },
      {
        description: "Creating a campaign"
      },
      {
        description: "Adding leads"
      },
      {
        description: "Setting up templates"
      },
      {
        description: "Email account setup"
      },
      {
        description: "Campaign optimization"
      },
      {
        content: "are covered in separate articles.",
        isParagraph: true
      }
    ]



  },

  {
    id: "76",
    title: "Campaign vs Sequence: Understanding the Difference",
    updated: "",
    content: `Campaigns and sequences are closely related in SalesTarget.ai, but they serve <strong> two different purposes.</strong> <br/><br/> This article explains the difference in simple terms, so you know <strong> when you're working with a campaign and when you're working with a sequence (template).</strong>`,
    metaTitle: "Campaign vs Sequence | Understanding the Difference in SalesTarget.ai",
    metaDescription: "Learn the difference between campaigns and sequences in SalesTarget.ai. Understand when to create campaigns, when to reuse sequences, and how they work together for email outreach.",
    metaKeywords: "campaign vs sequence, email templates, campaign management, sequence templates, email outreach, SalesTarget.ai campaigns, email automation",
    features: [
      {
        title: "What Is a Campaign?",
        isHeading: true
      },
      {
        content: `A<strong> campaign </strong>controls<strong> how outreach is executed. </strong> <br/>A campaign decides:`,
        isParagraph: true
      },
      {
        description: "Which leads will receive emails"
      },
      {
        description: "Which email accounts are used"
      },
      {
        description: "When emails are sent (schedule and time zone)"
      },
      {
        description: "When follow-ups should stop"
      },
      {
        description: "How replies, bounces, and analytics are handled"
      },
      {
        content: `In short: <br/>👉 <strong>A campaign runs the outreach.</strong>`,
        isParagraph: true
      },
      {
        content: "Once a campaign is active, SalesTarget.ai automatically sends emails, tracks replies, and updates analytics.",
        isParagraph: true
      },

      {
        title: "What Is a Sequence (Template)?",
        isHeading: true
      },
      {
        content: `A <strong>sequence</strong> (also called a template) controls<strong> what emails are sent. </strong> <br/>A sequence defines:`,
        isParagraph: true
      },
      {
        description: "The email content"
      },
      {
        description: "The order of emails"
      },
      {
        description: "Follow-up messages"
      },
      {
        description: "The gap between each step"
      },
      {
        description: "A/B variants for testing"
      },
      {
        content: `In short:<br/> 👉<strong> A sequence defines the message flow.</strong>`,
        isParagraph: true
      },
      {
        content: "A sequence does not send emails by itself. It is used inside a campaign.",
        isParagraph: true
      },

      {
        title: "Simple Way to Remember the Difference",
        isHeading: true
      },
      {
        description: `<strong>Campaign = Execution</strong>`
      },
      {
        description: `<strong>Sequence = Messaging</strong>`
      },
      {
        content: "Or another way:",
        isParagraph: true
      },
      {
        description: `Campaign decides <strong>who, when, and how</strong>`
      },
      {
        description: `Sequence decides <strong>what to say and in what order</strong>`
      },

      {
        title: "How Campaigns and Sequences Work Together",
        isHeading: true
      },
      {
        content: "In SalesTarget.ai:",
        isParagraph: true
      },
      {
        description: "You create a sequence (email template)"
      },
      {
        description: "You create a campaign"
      },
      {
        description: "You attach the sequence to the campaign"
      },
      {
        description: "The campaign sends the sequence to selected leads"
      },
      {
        content: `One campaign uses<strong> one sequence, </strong>but the same sequence can be reused across<strong> multiple campaigns.</strong>`,
        isParagraph: true
      },

      {
        title: "What Campaigns Handle (Not Sequences)",
        isHeading: true
      },
      {
        content: "Campaigns manage:",
        isParagraph: true
      },
      {
        description: "Lead lists"
      },
      {
        description: "Email accounts and domains"
      },
      {
        description: "Sending limits and schedules"
      },
      {
        description: "Reply handling"
      },
      {
        description: "Analytics and performance tracking"
      },
      {
        description: "Lead status updates"
      },
      {
        content: `Sequences do<strong> not </strong>manage any of these.`,
        isParagraph: true
      },

      {
        title: "What Sequences Handle (Not Campaigns)",
        isHeading: true
      },
      {
        content: "Sequences manage:",
        isParagraph: true
      },
      {
        description: "Email copy"
      },
      {
        description: "Follow-up structure"
      },
      {
        description: "Timing between steps"
      },
      {
        description: "A/B testing of content"
      },
      {
        content: `Sequences do<strong> not:</strong>`,
        isParagraph: true
      },
      {
        description: "Choose leads"
      },
      {
        description: "Send emails"
      },
      {
        description: "Track analytics on their own"
      },

      {
        title: "Example to Make It Clear",
        isHeading: true
      },
      {
        content: `Example:`,
        isParagraph: true
      },
      {
        description: `You want to reach 500 SaaS founders`
      },
      {
        description: `You write a 3-step cold email follow-up.`
      },
      {
        content: "What you do:",
        isParagraph: true
      },
      {
        description: "Create a sequence with 3 emails"
      },
      {
        description: "Create a campaign"
      },
      {
        description: "Add 500 leads to the campaign"
      },
      {
        description: "Attach the sequence"
      },
      {
        description: "Set schedule and email accounts"
      },
      {
        description: "Start the campaign"
      },
      {
        content: "The campaign sends the sequence to all 500 leads automatically.",
        isParagraph: true
      },

      {
        title: "When Should You Create a New Campaign?",
        isHeading: true
      },
      {
        content: "Create a new campaign when:",
        isParagraph: true
      },
      {
        description: "You are targeting a different audience"
      },
      {
        description: "You want to use different email accounts or domains"
      },
      {
        description: "You want a different sending schedule"
      },
      {
        description: "You want to isolate performance or risk"
      },

      {
        title: "When Should You Reuse a Sequence?",
        isHeading: true
      },
      {
        content: "Reuse a sequence when:",
        isParagraph: true
      },
      {
        description: "The message stays the same"
      },
      {
        description: "Only the audience changes"
      },
      {
        description: "You want consistent messaging across campaigns"
      },
      {
        content: "This saves time and keeps outreach consistent.",
        isParagraph: true
      },

      {
        title: "Common Mistakes to Avoid",
        isHeading: true
      },
      {
        description: "Editing sequences when you actually want to change campaign settings"
      },
      {
        description: "Creating multiple sequences when only the audience is different"
      },
      {
        description: "Expecting a sequence to send emails without a campaign"
      },
      {
        content: `Remember:<br/> <strong> 👉 Sequences don't send emails — campaigns do.</strong>`,
        isParagraph: true
      },

      {
        title: "Quick Summary",
        isHeading: true
      },
      {
        isTable: true,
        headers: ["Campaign", "Sequence"],
        rows: [
          ["Runs the outreach", "Defines email content"],
          ["Manages leads and accounts", "Manages message steps"],
          ["Controls schedule and limits", "Controls follow-up flow"],
          ["Tracks analytics", "Supports A/B testing"],
          ["Required to send emails", "Used inside a campaign"]
        ]
      },

      {
        title: "Final Takeaway",
        isHeading: true
      },
      {
        content: `If you remember one thing:  <br/>&nbsp; <strong>Campaigns execute outreach. <br/> &nbsp; Sequences define what is sent.</strong>`,
        isParagraph: true
      },
      {
        content: "Understanding this difference helps you build cleaner campaigns, reuse templates effectively, and avoid confusion as you scale outreach.",
        isParagraph: true
      }
    ],


  },

  {
    id: "77",
    title: "Campaign Limits Explained (Domains, Accounts & Volume)",
    updated: "",
    content: `Campaign limits in SalesTarget.ai exist to<strong> protect deliverability, prevent spam issues, and keep email sending safe and predictable.</strong><br/><br/>This article explains the three main types of limits:<br/>
  <ul class="type-disc ml-4">
    <li>&nbsp; ● Domains</li>
    <li>&nbsp; ● Email accounts</li>
    <li>&nbsp; ● Sending volume</li>
  </ul><br/>
  Understanding these limits helps you run campaigns without burning inboxes or domains.`,
    metaTitle: "Campaign Limits Explained | Domains, Accounts & Volume in SalesTarget.ai",
    metaDescription: "Learn how campaign limits work in SalesTarget.ai. Understand domain limits, email account capacity, and sending volume to protect deliverability and scale safely.",
    metaKeywords: "campaign limits, email sending limits, domain limits, email account limits, sending volume, deliverability protection, email outreach limits, SalesTarget.ai",
    features: [
      {
        title: "Why Campaign Limits Exist",
        isHeading: true
      },
      {
        content: `Email providers closely monitor sending behavior.<br/>Sending too fast or from too many leads can damage sender reputation.`,
        isParagraph: true
      },
      {
        content: "SalesTarget.ai applies limits to:",
        isParagraph: true
      },
      {
        description: "Keep sending patterns natural"
      },
      {
        description: "Protect inbox placement"
      },
      {
        description: "Stop sudden volume spikes"
      },
      {
        description: "Reduce bounces and spam flags"
      },
      {
        content: `Limits are not restrictions — they are<strong> safety controls.</strong>`,
        isParagraph: true
      },

      {
        title: "Domain Limits",
        isHeading: true
      },
      {
        content: `A <strong>domain</strong> is the part after @ in your email address <br/>&nbsp; (example: yourdomain.com).`,
        isParagraph: true
      },

      {
        title: "How domains are used in campaigns",
        isHeading: true
      },
      {
        description: "Campaigns send emails from email accounts connected to a domain"
      },
      {
        description: "One domain can have multiple email accounts"
      },
      {
        description: "Each domain has its own reputation"
      },

      {
        title: "Domain limits in SalesTarget.ai",
        isHeading: true
      },
      {
        description: `One domain can have<strong> up to 5 email accounts </strong>`
      },
      {
        description: `You can connect or purchase<strong> multiple domains </strong>`
      },
      {
        description: `Campaign volume is spread across domains to reduce risk`
      },

      {
        title: "Why domain limits matter",
        isHeading: true
      },
      {
        content: "Sending too many emails from one domain can:",
        isParagraph: true
      },
      {
        description: "Lower inbox placement"
      },
      {
        description: "Increase spam complaints"
      },
      {
        description: "Cause domain-level blocks"
      },
      {
        content: "Using multiple domains helps isolate risk and scale safely.",
        isParagraph: true
      },

      {
        title: "Email Account Limits",
        isHeading: true
      },
      {
        content: `An<strong> email account</strong> is a single inbox<br/>&nbsp; (example: name@yourdomain.com).`,
        isParagraph: true
      },

      {
        title: "How email accounts work in campaigns",
        isHeading: true
      },
      {
        description: "Campaigns send emails through connected email accounts"
      },
      {
        description: "Each account has its own daily sending capacity"
      },
      {
        description: "Accounts can be rotated across campaigns"
      },

      {
        title: "Recommended sending volume per account",
        isHeading: true
      },
      {
        description: `<strong>Around 30 emails per day per account</strong> (recommended)`
      },
      {
        description: "Sending gradually helps maintain a healthy sender reputation"
      },

      {
        title: "Why account limits matter",
        isHeading: true
      },
      {
        content: "Sending too many emails from one inbox can:",
        isParagraph: true
      },
      {
        description: "Trigger spam filters"
      },
      {
        description: "Increase bounce rates"
      },
      {
        description: "Cause temporary or permanent blocks"
      },
      {
        content: "Campaigns respect these limits automatically.",
        isParagraph: true
      },

      {
        title: "Campaign Sending Volume",
        isHeading: true
      },
      {
        content: "Campaign volume is calculated using:",
        isParagraph: true
      },
      {
        description: "Number of active email accounts"
      },
      {
        description: "Sending limits per account"
      },
      {
        description: "Campaign schedule and gaps between emails"
      },

      {
        title: "Example",
        isHeading: true
      },
      {
        content: `If you have:`,
        isParagraph: true
      },
      {
        description: "1 domain"
      },
      {
        description: "5 email accounts"
      },
      {
        description: "~30 emails per account per day"
      },
      {
        content: "You can safely send:",
        isParagraph: true
      },
      {
        description: `<strong>~150 emails per day </strong>across that campaign`
      },
      {
        content: "To increase volume safely, you add:",
        isParagraph: true
      },
      {
        description: "More email accounts"
      },
      {
        description: "More domains"
      },

      {
        title: "How SalesTarget.ai Handles Volume Automatically",
        isHeading: true
      },
      {
        content: "SalesTarget.ai automatically:",
        isParagraph: true
      },
      {
        description: "Distributes emails across connected accounts"
      },
      {
        description: "Respects daily sending limits"
      },
      {
        description: "Applies gaps between emails"
      },
      {
        description: "Stops follow-ups when a lead replies"
      },
      {
        content: "You don't need to manually calculate sending limits.",
        isParagraph: true
      },

      {
        title: "What Happens If You Exceed Limits?",
        isHeading: true
      },
      {
        content: "If limits are reached:",
        isParagraph: true
      },
      {
        description: "Emails are queued and automatically sent the next day during your defined sending hours"
      },
      {
        description: "Sending continues gradually"
      },
      {
        description: "No emails are dropped"
      },
      {
        description: "Deliverability protection remains active"
      },
      {
        content: "This prevents sudden spikes and keeps sending safe.",
        isParagraph: true
      },

      {
        title: "Best Practices for Campaign Limits",
        isHeading: true
      },
      {
        description: "Start with low volume and increase gradually"
      },
      {
        description: "Use multiple email accounts per domain"
      },
      {
        description: "Avoid sending high volume from a single inbox"
      },
      {
        description: "Separate campaigns by domain if scaling"
      },
      {
        description: "Monitor bounces and replies regularly"
      },
      {
        content: "Following limits leads to better replies and inbox placement.",
        isParagraph: true
      },

      {
        title: "Quick Summary",
        isHeading: true
      },
      {
        description: `<strong>Domains</strong> control reputation at a higher level`
      },
      {
        description: `<strong>Email accounts</strong> control daily sending capacity`
      },
      {
        description: `<strong>Campaign volume</strong> is the total safe output across accounts`
      },
      {
        description: "Limits exist to protect deliverability, not slow you down"
      },

      {
        title: "Final Takeaway",
        isHeading: true
      },
      {
        content: `If you want to scale campaigns safely:<br/> &nbsp;<strong> Increase accounts and domains — not per-account volume.</strong>`,
        isParagraph: true
      },
      {
        content: "Campaign limits help you grow outreach while keeping inboxes healthy.",
        isParagraph: true
      }
    ]
  },

  {

    id: "78",
    title: "Creating Your First Campaign (Email & Multichannel)",
    updated: "",
    content: `This guide walks you through creating your first campaign in SalesTarget.ai.<br/><br/>By the end of this article, you'll know how to set up a campaign, add leads, attach a sequence, schedule it, and start sending emails safely.`,
    metaTitle: "Creating Your First Campaign | Email & Multichannel Guide in SalesTarget.ai",
    metaDescription: "Step-by-step guide to creating your first campaign in SalesTarget.ai. Learn how to set up campaigns, add leads, attach sequences, configure settings, and launch email outreach safely.",
    metaKeywords: "create campaign, first campaign, email campaign setup, multichannel campaign, campaign creation, SalesTarget.ai campaigns, email outreach setup, campaign guide",
    features: [
      {
        title: "Before You Start",
        isHeading: true
      },
      {
        content: "Make sure you have the following ready:",
        isParagraph: true
      },
      {
        description: "At least one email account connected and active"
      },
      {
        description: "A sequence (template) ready, or a plan to create one"
      },
      {
        description: "Leads available (CSV, Lead Explorer, or a saved list)"
      },
      {
        content: "If these are not ready, complete those steps first before creating a campaign.",
        isParagraph: true
      },

      {
        title: "Step 1: Create a New Campaign",
        isHeading: true
      },
      {
        description: "Go to the Campaigns section in SalesTarget.ai"
      },
      {
        description: "Click Add Campaign"
      },
      {
        description: "Enter a campaign name"
      },
      {
        content: "Choose a name that clearly describes:",
        isParagraph: true
      },
      {
        description: "Target audience"
      },
      {
        description: "Purpose of the campaign"
      },
      {
        content: `<strong>Example:</strong><br/>&nbsp; US SaaS Founders – Product Demo Outreach`,
        isParagraph: true
      },

      {
        src: "/78i1.png",
        alt: "SalesTarget.ai campaign creation screen with Add Campaign button and campaign name input field",
        caption: "",
        isImage: true
      },

      {
        title: "Step 2: Attach a Sequence (Template)",
        isHeading: true
      },
      {
        content: "Go to the Templates tab.<br/>Here you can:",
        isParagraph: true
      },
      {
        description: "Select an existing sequence <strong>or</strong>"
      },
      {
        description: "Create a new sequence"
      },
      {
        content: "Your sequence can include:",
        isParagraph: true
      },
      {
        description: "Initial cold email"
      },
      {
        description: "One or more follow-ups"
      },
      {
        description: "Time gaps between steps"
      },
      {
        description: "A/B variants (optional)"
      },
      {
        content: "This sequence defines what emails will be sent during the campaign.",
        isParagraph: true
      },

      {
        src: "/78i2.png",
        alt: "SalesTarget.ai campaign creation screen with Add Campaign button and campaign name input field",
        caption: "",
        isImage: true
      },

      {
        title: "Step 3: Add Leads to the Campaign",
        isHeading: true
      },
      {
        content: "You can add leads to your campaign in three ways.",
        isParagraph: true
      },

      {
        title: "Option 1: Upload a CSV",
        isHeading: true
      },
      {
        description: "Upload your CSV file"
      },
      {
        description: "Map columns such as name, email, company, etc."
      },
      {
        description: "Confirm the upload"
      },

      {
        title: "Option 2: Add Leads from Lead Explorer",
        isHeading: true
      },
      {
        description: "Use filters or AI search to find leads"
      },
      {
        description: "Select the leads"
      },
      {
        description: "Add them directly to the campaign"
      },

      {
        src: "/78i3.png",
        alt: "SalesTarget.ai campaign creation screen with Add Campaign button and campaign name input field",
        caption: "",
        isImage: true
      },

      {
        title: "Option 3: Attach an Existing List",
        isHeading: true
      },
      {
        description: "Select a previously saved list"
      },
      {
        description: "Add it to the campaign"
      },
      {
        content: "All selected leads will appear in the Leads tab of the campaign.",
        isParagraph: true
      },

      {
        title: "Step 4: Select Email Account(s) & Configure Campaign Settings",
        isHeading: true
      },

      {
        title: "Select Email Account(s)",
        isHeading: true
      },
      {
        content: "Choose the email account(s) you want to use for this campaign.",
        isParagraph: true
      },
      {
        description: "You can select one or multiple email accounts"
      },
      {
        description: "Emails are sent automatically based on safe sending limits"
      },
      {
        description: "Using multiple accounts helps spread volume and protect deliverability"
      },
      {
        content: "Once selected, all emails in this campaign will be sent from these accounts.",
        isParagraph: true
      },

      {
        src: "/78ii4.png",
        alt: "SalesTarget.ai campaign creation screen with Add Campaign button and campaign name input field",
        caption: "",
        isImage: true
      },

      {
        title: "Configure Campaign Settings",
        isHeading: true
      },
      {
        content: "Open the Settings tab and review the following options:",
        isParagraph: true
      },
      {
        description: "<strong>Stop follow-ups on reply</strong> – Recommended to avoid over-emailing"
      },
      {
        description: "<strong>Open & link tracking</strong> – Enable if you want engagement insights"
      },
      {
        description: "<strong>Plain-text or HTML</strong> – Plain-text is usually safer for cold outreach"
      },
      {
        description: "<strong>A/B testing rules</strong> – Apply if you're testing variants"
      },
      {
        content: "These settings control how the campaign behaves once it starts.",
        isParagraph: true
      },
      {
        src: "/78i5.png",
        alt: "SalesTarget.ai campaign creation screen with Add Campaign button and campaign name input field",
        caption: "",
        isImage: true
      },

      {
        title: "Step 5: Set the Schedule & Launch the Campaign",
        isHeading: true
      },
      {
        content: "Go to the Schedule tab.<br/>You can:",
        isParagraph: true
      },
      {
        description: "<strong>Send Now</strong> – Start sending immediately <strong>or</strong>"
      },
      {
        description: "Schedule the campaign"
      },
      {
        content: "If scheduling:",
        isParagraph: true
      },
      {
        description: "Choose start date and time"
      },
      {
        description: "Select time zone"
      },
      {
        description: "Set gap between emails"
      },
      {
        content: "Before launching the campaign, review the following:",
        isParagraph: true
      },
      {
        description: "Leads count"
      },
      {
        description: "Selected email accounts"
      },
      {
        description: "Sequence content"
      },
      {
        description: "Schedule and settings"
      },
      {
        content: "Once everything looks correct, click <strong>Launch Campaign</strong>.",
        isParagraph: true
      },
      {
        src: "/78i6.png",
        alt: "SalesTarget.ai campaign creation screen with Add Campaign button and campaign name input field",
        caption: "",
        isImage: true
      },

      {
        title: "What Happens After You Start?",
        isHeading: true
      },
      {
        content: "Once the campaign is active:",
        isParagraph: true
      },
      {
        description: "Emails are sent automatically"
      },
      {
        description: "Follow-ups are sent if no reply is received"
      },
      {
        description: "Replies appear in Unibox"
      },
      {
        description: "Follow-ups stop automatically when someone replies"
      },
      {
        description: "Analytics update in real time"
      },
      {
        content: "You don't need to manually send or track emails.",
        isParagraph: true
      },

      {
        title: "Common Tips for First Campaigns",
        isHeading: true
      },
      {
        description: "Start with a small lead list"
      },
      {
        description: "Keep sequences short and simple"
      },
      {
        description: "Avoid high sending volume on day one"
      },
      {
        description: "Monitor replies and bounces closely"
      },
      {
        description: "Make small changes between campaigns"
      },

      {
        title: "Final Checklist",
        isHeading: true
      },
      {
        content: "Before launching your first campaign, confirm:",
        isParagraph: true
      },
      {
        description: "Email accounts are active"
      },
      {
        description: "Leads are verified"
      },
      {
        description: "Sequence is reviewed"
      },
      {
        description: "Schedule is correct"
      },
      {
        description: "Follow-ups stop on reply"
      },

      {
        title: "What's Next?",
        isHeading: true
      },
      {
        content: "After your first campaign:",
        isParagraph: true
      },
      {
        description: "Monitor analytics"
      },
      {
        description: "Reply to leads in Unibox"
      },
      {
        description: "Move interested leads into CRM"
      },
      {
        description: "Optimize future campaigns based on results"
      }
    ]
  },

  {
    id: "79",
    title: "How to Structure a High-Converting Campaign",
    content: `A well-structured campaign improves reply rates, protects deliverability, and ensures your
outreach feels relevant instead of spammy.
This guide explains how to structure a high-converting email or multichannel campaign in
SalesTarget.ai using proven best practices.`,
    updated: "",
    metaTitle: "High-Converting Campaign Structure | Best Practices for SalesTarget.ai",
    metaDescription: "Learn how to structure a high-converting email or multichannel campaign in SalesTarget.ai. This guide covers goals, audience segmentation, messaging, follow-ups, and more for effective outreach.",
    metaKeywords: "high-converting campaign, cold email outreach, email sequence structure, multichannel campaigns, campaign best practices, SalesTarget.ai campaigns",
    features: [
      {
        title: "What Makes a Campaign “High-Converting”?",
        isHeading: true
      },
      {
        content: `  A high-converting campaign is one that:`,
        isParagraph: true
      },
      {
        description: `Reaches the right audience`
      },
      {
        description: `Sends relevant messages at the right time`
      },
      {
        description: `Follows up without over-emailing`
      },
      {
        description: `Stops automatically when a reply is received`
      },
      {
        description: `Delivers personalized messages at scale`
      },
      {
        content: `Structure matters more than volume. Most campaigns fail due to poor setup—not poor copy.`,
        isParagraph: true
      },
      {
        title: "1. Start With a Clear Campaign Goal",
        isHeading: true,
      },
      {
        content: `
        Before creating a campaign, define one primary objective.<br/> Common goals:`,
        isParagraph: true
      },
      {
        description: `Book a demo `
      },
      {
        description: `Start a conversation`
      },
      {
        description: `Validate interest`
      },
      {
        description: `Re-engage cold leads`
      },
      {

        content: `Avoid mixing goals in a single campaign. One campaign = one outcome.<br/> <strong>Example:</strong><br/>Book product demo with US SaaS founders`,
        isParagraph: true

      },
      {
        title: "2. Segment Your Audience Properly",
        isHeading: true,
      },
      {
        description: `
          Job title`
      },
      {
        description: `Industry`
      },
      {
        description: `Company size`
      },
      {
        description: `Geography`
      },
      {
        description: `Use case`
      },
      {
        content: `
        Smaller, focused segments convert better than large generic lists.
        <br/><strong>Tip:</strong><br/> If you need different messaging, create separate campaigns.
      `,
        isParagraph: true
      },
      {
        title: "3. Use a Simple, Focused Sequence",
        isHeading: true,
      },
      {
        content: `
        High-converting campaigns usually have:`,
        isParagraph: true
      },
      {
        description: `1 initial email`
      },
      {
        description: `2–3 follow-ups`
      },
      {
        description: `Clear gaps between messages`
      },
      {
        content: `
        Avoid long or aggressive sequences. Recommended structure:`,
        isParagraph: true
      },
      {
        description: `Day 1 → Initial email`
      },
      {
        description: `Day 3 → Follow-up #1`
      },
      {
        description: `Day 6 → Follow-up #2`
      },
      {
        description: `Day 9 → Final follow-up (optional)`
      },
      {
        content: `
        Each follow-up should add value—not repeat the same message.
      `,
        isParagraph: true
      },
      {
        title: "4. Keep Emails Short and Personal",
        isHeading: true,
      },
      {
        content: `
        High-converting emails are:`,
        isParagraph: true
      },
      {
        description: `Short (3–6 sentences)`
      },
      {
        description: `Easy to scan`
      },
      {
        description: `Focused on the reader, not your product`
      },
      {
        content: `
        Use personalization wisely:`,
        isParagraph: true
      },
      {
        description: `First name`
      },
      {
        description: `Company`
      },
      {
        description: `Role or industry`
      },
      {
        content: `
        Avoid over-personalization that feels forced.
      `,
        isParagraph: true
      },
      {
        title: "5. Use One Clear Call-to-Action",
        isHeading: true,
      },
      {
        content: `
        Every email should ask for one simple action. <br/> Good examples:`,
        isParagraph: true
      },
      {
        description: `Open to a quick chat?`
      },
      {
        description: `Worth exploring?`
      },
      {
        description: `Should I send more details?`
      },
      {
        content: `
        Avoid:`,
        isParagraph: true
      },
      {
        description: `Multiple links`
      },
      {
        description: `Long booking instructions`
      },
      {
        description: `Heavy sales language`
      },
      {
        content: `
        Simple CTAs convert better.
      `,
        isParagraph: true
      },
      {
        title: "6. Configure Follow-Up Rules Correctly",
        isHeading: true,
      },
      {
        content: `
        Always enable:`,
        isParagraph: true
      },
      {
        description: `Stop follow-ups on reply`
      },
      {
        content: `
        This prevents:`,
        isParagraph: true
      },
      {
        description: `Over-emailing`
      },
      {
        description: `Awkward follow-ups after replies`
      },
      {
        description: `Negative sender reputation`
      },
      {
        content: `
        Follow-ups should trigger <strong>only if there’s no response.</strong>
      `,
        isParagraph: true
      },
      {
        title: "7. Set Safe Sending Limits",
        isHeading: true,
      },
      {
        content: `
        High-converting campaigns protect deliverability.<br/> Best practices:`,
        isParagraph: true
      },
      {
        description: `Start with low volume`
      },
      {
        description: `Use warmup mode`
      },
      {
        description: `Spread volume across multiple email accounts if needed`
      },


      //start here


      {
        title: "Why Repeated Campaigns Can Hurt Deliverability Over Time",
        isHeading: true,
      },
      {
        content: `
       Sending multiple campaigns from the same email account isn’t inherently bad.
The problem starts when campaigns are sent too frequently, at high volume, or with low
engagement.`,
        isParagraph: true
      },
      {
        content: `Email providers track sender reputation over time. If your campaigns consistently generate:`,
        isParagraph: true
      },
      {
        description: `Low reply rates`
      },
      {
        description: `High bounce rates`
      },
      {
        description: `Bounces or spam signalss`
      },
      {
        content: `Your inbox trust score slowly declines.`,
        isParagraph: true
      },
      {
        content: `
        This is why some users feel like “after 4–5 campaigns, emails start going to spam.”
It’s not the campaign count — it’s reputation decay from poor signals.
      `,
        isParagraph: true
      },
      {
        content: `
        To prevent this:
      `,
        isParagraph: true
      },
      {
        description: `Keep daily send limits conservative`
      },
      {
        description: `Stop follow-ups immediately on reply`
      },
      {
        description: `Focus on relevance over volume`
      },
      {
        description: `Give inboxes recovery time between campaigns`
      },
      {
        content: `Well-structured campaigns protect your sender reputation and allow you to run campaigns
continuously without burning inboxes.`,
        isParagraph: true
      },
      {
        title: "8. Schedule for Natural Timing",
        isHeading: true,
      },
      {
        content: `Send emails:`
      },
      {
        description: `During business hours`
      },
      {
        description: `In the recipient’s time zone`
      },
      {
        description: `With gaps between steps`
      },
      {
        content: `Avoid:`,
        isParagraph: true
      },
      {
        description: `Late-night sending`
      },
      {

        description: `Back-to-back emails`
      },
      {
        description: `Weekend blasts (unless relevant)`
      },
      {
        title: "9. Track the Right Metrics ",
        isHeading: true
      },
      {
        content: "Don’t judge campaigns by open rates alone.",
        isParagraph: true
      },
      {
        content: "Focus on:",
        isParagraph: true
      },
      {
        description: "Reply rate"
      },
      {
        description: "Positive replies"
      },
      {
        description: "Bounces"
      },
      {
        description: "Unsubscribes"
      },
      {
        content: "Low replies usually mean:",
        isParagraph: true
      },
      {
        description: "Wrong audience"
      },
      {
        description: "Weak message"
      },
      {
        description: "Too much volume"
      },
      {
        title: "10. Iterate Between Campaigns",
        isHeading: true
      },
      {
        content: "High conversion comes from iteration.",
        isParagraph: true
      },
      {
        content: "After each campaign:",
        isParagraph: true
      },
      {
        description: `Review replies`
      },
      {
        description: `Adjust subject lines`
      },
      {
        description: `Refine targeting`
      },
      {
        content: `Small improvements compound over time.`,
        isParagraph: `true`
      },
      {
        title: `Common Mistakes to Avoid`,
        isHeading: true
      },
      {
        description: `Sending one campaign to mixed audiences`
      },
      {
        description: `Using long, sales-heavy emails`
      },
      {
        description: `Adding too many follow-ups`
      },
      {
        description: `Increasing volume too quickly`
      },
      {
        description: `Ignoring replies or bounce data`
      },
      {
        title: `Final Checklist for High-Converting Campaigns`,
        isHeading: true
      },
      {
        content: `Before launching, confirm:`,
        isParagraph: true
      },
      {
        description: `Goal is clearly defined`
      },
      {
        description: `Audience is well-segmented`
      },
      {
        description: `Sequence is short and focused`
      },
      {
        description: `CTA is simple`
      },
      {
        description: `Follow-ups stop on reply`
      },
      {
        description: `Sending limits are safe`
      },
      {
        description: `Schedule looks natural`
      },


      {
        title: "What’s Next?",
        isHeading: true,
      },
      {
        content: `Once your campaign is live:`,
        isParagraph: true
      },
      {
        description: `Monitor replies daily`
      },
      {
        description: `Respond quickly to interested leads`
      },
      {
        description: `Use insights to improve the next campaign`
      }

    ],


  },

  {

    id: "80",
    title: "Follow-Up Logic Explained: Timing, Steps &amp; Stops",
    content: `Follow-ups are a critical part of any outbound campaign.<br/>In SalesTarget, follow-ups are time-based, rule-driven, and automatically stopped when a reply is received.This guide explains how follow-up logic works, how to structure follow-ups correctly, and how SalesTarget prevents over-emailing.`,
    features: [
      {
        title: "How Follow-Ups Work in SalesTarget",
        isHeading: true
      },
      {
        content: `SalesTarget uses a step-based follow-up system.<br/><br/>Each follow-up:<ul><li>Is a separate step in a sequence</li><li>Runs after a defined delay</li><li>Sends only if no reply is received</li><li>There is no manual triggering required once the campaign starts</li></ul>`,
        isParagraph: true
      },
      {
        title: "Follow-Ups Are Time-Based (Not Manual)",
        isHeading: true
      },
      {
        content: `Every follow-up runs based on the delay you set between steps.<br/><br/>Example:<br/>Step 1 → Initial Email<br/>Wait 2 days<br/>Step 2 → Follow-up Email<br/>Wait 3 days<br/>Step 3 → Final Follow-up<br/>SalesTarget checks for replies before each step.<br/>If a reply exists, the next follow-up is skipped.`,
        isParagraph: true
      },
      {
        title: "How Many Follow-Ups Should You Add?",
        isHeading: true
      },
      {
        content: `For most campaigns, start with 1 initial email and 2-3 follow-ups. More follow-ups do not always mean better results. Best practice is to keep sequences short and stop before outreach feels repetitive.`,
        isParagraph: true
      },
      {
        title: "Follow-Up Delays Explained",
        isHeading: true
      },
      {
        content: `Delays control when the next email is sent. You can set delays as X days. Delays help maintain natural timing, avoid back-to-back emails, protect deliverability, and avoid very short delays (same-day follow-ups) for cold outreach.`,
        isParagraph: true
      },
      {
        title: "What Triggers a Follow-Up?",
        isHeading: true
      },
      {
        content: `A follow-up is sent only if all conditions below are met:<ul><li>The previous email was sent</li><li>No reply has been received</li><li>The campaign is active</li><li>Sending limits are not exceeded</li><li>The current time falls within your schedule</li></ul>If any condition fails, the follow-up is skipped or delayed.`,
        isParagraph: true
      },
      {
        title: "What Stops Follow-Ups Automatically",
        isHeading: true
      },
      {
        content: `SalesTarget.ai automatically stops follow-ups when:<ul><li>A recipient replies to any email in the sequence</li></ul>This happens even if the reply is short, not positive, or comes after a follow-up is scheduled. Once a reply is detected, no further emails are sent to that lead.`,
        isParagraph: true
      },
      {
        title: "Why 'Stop Follow-Ups on Reply' Is Important",
        isHeading: true
      },
      {
        content: `Stopping follow-ups on reply prevents awkward double-emails, protects sender reputation, improves campaign experience, and keeps outreach respectful. This setting should always be enabled for cold campaigns.`,
        isParagraph: true
      },
      {
        title: "What Happens If Sending Limits Are Reached",
        isHeading: true
      },
      {
        content: `If sending limits are reached, emails are queued and sent the next day during your scheduled time. Sending continues gradually with no emails dropped, ensuring deliverability protection remains active.`,
        isParagraph: true
      },
      {
        title: "Follow-Ups and Scheduling",
        isHeading: true
      },
      {
        content: `Follow-ups respect the campaign schedule and run only during defined working hours. They also follow time zone settings. If a follow-up is due outside working hours, it is delayed, not skipped.`,
        isParagraph: true
      },
      {
        title: "Tracking Follow-Up Performance",
        isHeading: true
      },
      {
        content: `You can monitor follow-ups through campaign analytics, replies in Unibox, and lead-level activity. This helps you understand which step gets replies, when prospects respond, and whether follow-ups improve engagement.`,
        isParagraph: true
      },
      {
        title: "Common Follow-Up Mistakes to Avoid",
        isHeading: true
      },
      {
        content: `Avoid these common mistakes:<ul><li>Adding too many follow-ups</li><li>Using the same message repeatedly</li><li>Setting very short delays</li><li>Increasing volume too fast</li><li>Not reviewing replies</li></ul>Follow-ups should add value, not pressure.`,
        isParagraph: true
      },
      {
        title: "Best Practices for Follow-Up Logic",
        isHeading: true
      },
      {
        content: `Best practices include:<ul><li>Keep follow-ups simple and relevant</li><li>Add clear time gaps between steps</li><li>Always stop on reply</li><li>Review follow-up performance after each campaign</li><li>Adjust timing before increasing volume</li></ul>`,
        isParagraph: true
      },
      {
        title: "Summary",
        isHeading: true
      },
      {
        content: `In SalesTarget:<ul><li>Follow-ups are time-based</li><li>Each follow-up is a sequence step</li><li>Replies automatically stop future emails</li><li>Scheduling and limits are always respected</li><li>A well-structured follow-up flow improves replies while keeping outreach safe.</li></ul>`,
        isParagraph: true
      }
    ],


  },

  {
    id: "81",
    title: "Stopping Rules: When a Lead Should Exit a Campaign",
    content: `Stopping rules define when a lead should automatically stop receiving emails in a campaign. <br/> In SalesTarget, stopping rules are designed to prevent over-emailing, protect deliverability, and ensure respectful outreach. This article explains exactly when and why a lead exits a campaign.`,
    features: [
      {
        title: "What Does 'Exiting a Campaign' Mean?",
        isHeading: true
      },
      {
        content: `When a lead exits a campaign:`,
        isParagraph: true
      },
      {
        description: "No further emails are sent to that lead"
      },
      {
        description: " All remaining follow-up steps are skipped"
      },
      {
        description: "The campaign continues for other leads"
      },
      {
        content: `Exit rules apply <strong> at the individual lead level,</strong> not the entire campaign.`,
        isParagraph: true
      },
      {
        title: "Primary Stopping Rule: Reply Received",
        isHeading: true
      },
      {
        content: `<strong>1. Lead Replies to Any Email</strong><br/>This is the<strong> most important and default stopping rule.</strong><br/> If a lead replies:<br/><ul><li>All future follow-ups for that lead stop automatically</li><li>It does not matter which step they reply to</li><li>It does not matter whether the reply is positive or negative</li><li>Once a reply is detected, the lead exits the campaign immediately</li></ul>`,
        isParagraph: true
      },
      {
        description: `All future follow-ups for that lead stop automatically`
      },
      {
        description: `It does not matter which step they reply to`
      },
      {
        description: `It does not matter whether the reply is positive or negative`
      },
      {
        content: `Once a reply is detected, the lead exits the campaign immediately.`,
        isParagraph: true
      },
      {
        title: "Why 'Stop Follow-Ups on Reply' Matters",
        isHeading: true
      },
      {
        content: `Stopping on reply:`,
        isParagraph: true
      },
      {
        description: "Prevents awkward follow-up emails"
      },
      {
        description: "Protects sender reputation"
      },
      {
        description: "Improves campaign experience"
      },
      {
        description: "Keeps outreach respectful"
      },
      {
        content: "This rule should always be enabled for cold outreach campaigns.",
        isParagraph: true
      },
      {
        title: "Manual Lead Removal",
        isHeading: true
      },
      {
        content: `<strong>2. Lead Is Manually Removed from the Campaign</strong><br/>A lead exits the campaign if:<ul><li>You manually remove the lead</li><li>The lead is excluded from the campaign list</li></ul>Once removed:<ul><li>No further emails are sent to that lead</li><li>Previously scheduled steps are canceled</li></ul>This is useful when a lead becomes irrelevant or should be paused.`,
        isParagraph: true
      },
      {
        content: `A lead exits the campaign if:`,
        isParagraph: true
      },
      {
        description: `You manually remove the lead`
      },
      {
        description: `The lead is excluded from the campaign list`
      },
      {
        content: `Once removed:`,
        isParagraph: true
      },
      {
        description: `No further emails are sent to that lead`,

      },
      {
        description: `Previously scheduled steps are canceled`
      },
      {
        content: `This is useful when a lead becomes irrelevant or should be paused.`,
        isParagraph: `true`
      },
      {
        title: "Campaign-Level Stops (Affect All Leads)",
        isHeading: true
      },

      {
        content: `<strong>3. Campaign Is Paused or Stopped</strong>`,
        isParagraph: true
      },
      {
        content: `If a campaign is paused or stopped:`,
        isParagraph: true
      },
      {
        description: `All sending is halted`
      },
      {
        description: `No emails or follow-ups are sent`
      },
      {
        description: `Leads do not progress through steps`
      },
      {
        content: ` When resumed, the campaign continues based on: `,
        isParagraph: true
      },
      {
        description: "Schedule"
      },
      {
        description: "Sending Limits"
      },
      {
        description: "Lead Status"
      },
      {
        title: "What Does NOT Stop a Lead Automatically",
        isHeading: true
      },
      {
        content: `It’s important to clarify what does not cause a lead to exit by default:`,
        isParagraph: true
      },
      {
        description: "Email opens"
      },
      {
        description: "Link clicks"
      },
      {
        description: "No response"
      },
      {
        description: "Delayed replies"
      },
      {
        description: "Pending follow-ups"
      },
      {
        content: `Unless a reply is received or the lead is manually removed, follow-ups continue as scheduled.`,
        isParagraph: true
      },
      {
        title: "What Happens When Limits Are Reached (Not an Exit)",
        isHeading: true
      },
      {
        content: `Reaching daily sending limits does not remove a lead from a campaign.<br/> If limits are reached:`,
        isParagraph: true
      },
      {
        description: "Emails are queued"
      },
      {
        description: "Emails resume the next day during your scheduled time"
      },
      {
        description: "No emails are dropped"
      },
      {
        description: "Deliverability protection remains active"
      },

      {
        content: `The lead stays in the campaign and continues normally.`,
        isParagraph: true
      },
      {
        title: "Stopping vs Skipping a Step",
        isHeading: true
      },
      {
        content: `Important distinction:`,
        isParagraph: true
      },
      {
        description: `<strong>Stopping</strong> → Lead exits the campaign permanently`
      },
      {
        description: "<strong>Skipping</strong> → A specific step is skipped, but the lead may continue"
      },
      {
        content: `Example:`,
        isParagraph: true
      },
      {
        description: "A reply → lead exits"
      },
      {
        description: "Outside working hours → email is delayed, not stopped"
      },
      {
        title: "Best Practices for Stopping Rules",
        isHeading: true
      },
      {
        description: "Always stop follow-ups on reply"
      },
      {
        description: "Review replies regularly in Unibox"
      },
      {
        description: "Remove leads manually if they become irrelevant"
      },
      {
        description: "Avoid forcing leads through long sequences"
      },
      {
        content: `Stopping rules are about <strong> respect, safety, and relevance.</strong>`,
        isParagraph: true
      },
      {
        title: "Summary",
        isHeading: true
      },
      {
        content: `In SalesTarget.ai, a lead exits a campaign when:<ul><li>A reply is received</li><li>The lead is manually removed</li><li>The campaign is paused or stopped</li><li>All other conditions (opens, clicks, limits, scheduling) do not remove the lead automatically</li></ul>Clear stopping rules help you run safer, higher-quality campaigns.`,
        isParagraph: true
      },
      {
        description: `A reply is received`
      },
      {
        description: `The lead is manually removed`
      },
      {
        description: `The campaign is paused or stopped`
      },
      {
        content: `All other conditions (opens, clicks, limits, scheduling) <strong>do not remove the lead automatically</strong>`,
        isParagraph: true
      },
      {
        content: `Clear stopping rules help you run safer, higher-quality campaigns.`,
        isParagraph: true
      }
    ]
  },

  {
    id: "82",
    title: "How Leads Move Through a Campaign",
    content: `This article explains how a lead progresses through a campaign in SalesTarget—from the moment it is added until it exits the campaign. <br/> Understanding this flow helps you:<br/>`,
    features: [
      {
        description: `Predict when emails are sent`
      },
      {
        description: `Know why a lead received (or did not receive) an email`
      },
      {
        description: `Control timing, follow-ups, and stopping behavior`
      },
      {
        title: "Step 1: A Lead Enters the Campaign",
        isHeading: true
      },
      {
        content: `A lead enters a campaign when:`,
        isParagraph: true
      },
      {
        description: `You upload a CSV`
      },
      {
        description: `You add leads from Lead Explorer`
      },
      {
        description: `You attach a saved list`
      },
      {
        content: `Once added:`,
        isParagraph: true
      },
      {
        description: `The lead appears in the campaign’s Leads tab`
      },
      {
        description: `The system prepares the lead for the first step in the sequence`
      },
      {
        content: `The lead does not receive an email immediately unless:`,
        isParagraph: true
      },
      {
        description: `The campaign is active`
      },
      {
        description: `The schedule allows sending`
      },
      {
        description: `Sending limits are not exceeded`
      },
      {
        title: `Step 2: The First Email Is Sent`,
        isHeading: true
      },
      {
        content: `When the campaign is active and conditions are met:`,
        isParagraph: true
      },
      {
        description: `The first email in the sequence is sent`
      },
      {
        description: `The lead moves to the next step in the sequence`
      },
      {
        description: `The delay timer for the next step begins`
      },
      {
        content: `Before sending, SalesTarget.ai checks:`,
        isParagraph: true
      },
      {
        description: `Campaign schedule`
      },
      {
        description: `Daily sending limits`
      },
      {
        description: `Stop-on-reply rule`
      },
      {
        description: `Email account availability`
      },
      {
        content: `If any condition fails, sending is delayed (not skipped).`,
        isParagraph: true
      },
      {
        title: `Step 3: The Lead Waits for the Next Step`,
        isHeading: true
      },
      {
        content: `After an email is sent:`,
        isParagraph: true
      },
      {
        description: `The system waits for the delay you defined (days).`
      },
      {
        description: `During this waiting period, the lead is monitored for replies`
      },
      {
        content: `If a reply is received`,
        isParagraph: true
      },
      {
        description: `The lead immediately exits the campaign`
      },
      {
        description: `No further follow-ups are sent`
      },
      {
        content: `If no reply is received`,
        isParagraph: true
      },
      {
        description: `The lead immediately exits the campaign`
      },
      {
        description: `No further follow-ups are sent`
      },
      {
        content: `If no reply is received:`,
        isParagraph: true
      },
      {
        description: `The lead continues to the next step after the delay ends`
      },
      {
        title: `Step 4: Follow-Up Emails Are Sent`,
        isHeading: true
      },
      {
        content: `Each follow-up:`,
        isParagraph: true
      },
      {
        description: `Is a separate step in the sequence`
      },
      {
        description: `Runs only after its delay is completed`
      },
      {
        description: `Sends only if the lead has not replied`
      },
      {
        content: `This process repeats until:`,
        isParagraph: true
      },
      {
        description: `The sequence ends`
      },
      {
        description: `Or the lead exits the campaign`
      },

      {
        title: "Step 5: Scheduling Controls When Leads Move",
        isHeading: true
      },
      {
        content: `Lead movement depends on schedule settings:`,
        isParagraph: true
      },
      {
        description: `Emails are sent only during your start time and end time.`
      },
      {
        description: `Time zone settings are respected`
      },
      {
        description: `If a step is due outside working hours, it is delayed`
      },
      {
        content: `Leads do not move forward outside your allowed schedule.`,
        isParagraph: true
      },
      {
        title: "Step 6: Sending Limits Affect Speed, Not Progress",
        isHeading: true
      },
      {
        content: `Daily sending limits do not remove leads from a campaign. If limits are reached:`,
        isParagraph: true
      },
      {
        description: `Emails are queued`
      },
      {
        description: `Emails resume the next day during your scheduled time`
      },
      {
        description: `Sending continues gradually`
      },
      {
        description: `No emails are dropped`
      },
      {
        description: `The lead remains active and continues normally`
      },
      {
        title: "Step 7: When a Lead Exits the Campaign",
        isHeading: true
      },
      {
        content: `A lead exits the campaign when:`,
        isParagraph: true
      },
      {
        description: `The lead replies to any email`
      },
      {
        description: `The lead is manually removed`
      },
      {
        description: `The campaign is paused or stopped`
      },
      {
        title: "What Does NOT Change Lead Flow",
        isHeading: true
      },
      {
        content: `These actions do not automatically stop or remove a lead:`,
        isParagraph: true
      },
      {
        description: `Email opens`
      },
      {
        description: `Link clicks`
      },
      {
        description: `Delays in response`
      },
      {
        description: `Reaching daily sending limits`
      },
      {
        content: `Unless a reply is received or the lead is removed manually, the lead continues through the sequence.`,
        isParagraph: true
      },
      {
        title: "Lead Movement Example",
        isHeading: true
      },
      {
        content: `Example sequence:`,
        isParagraph: true
      },
      {
        description: `Step 1 → Initial email`
      },
      {
        description: `Wait 2 days`
      },
      {
        description: `Step 2 → Follow-up`
      },
      {
        description: `Wait 3 days`
      },
      {
        description: `Step 3 → Final follow-up`
      },
      {
        content: `Lead flow:`,
        isParagraph: true
      },
      {
        description: `Lead enters campaign`
      },
      {
        description: `Step 1 email is sent`
      },
      {
        description: `System waits 2 days`
      },
      {
        description: `If no reply → Step 2 is sent`
      },
      {
        description: `System waits 3 days`
      },
      {
        description: `If no reply → Step 3 is sent`
      },
      {
        description: `Sequence ends`
      },
      {
        content: `If the lead replies at any step, the flow stops immediately.`,
        isParagraph: true
      },
      {
        title: "Why This Flow Matters",
        isHeading: true
      },
      {
        content: `This structured flow:`,
        isParagraph: true
      },
      {
        description: `Prevents over-emailing`
      },
      {
        description: `Maintains natural timing`
      },
      {
        description: `Protects deliverability`
      },
      {
        description: `Makes campaign behavior predictable`
      },
      {
        content: `You always know:`,
        isParagraph: true
      },
      {
        description: `Why an email was sent`
      },
      {
        description: `When the next email will go out`
      },
      {
        description: `Why a lead stopped receiving emails`
      },
      {
        title: "Summary",
        isHeading: true
      },
      {
        content: `In SalesTarget:`,
        isParagraph: true
      },
      {
        description: `Leads enter a campaign through import or selection`
      },
      {
        description: `Each step runs after a defined delay`
      },
      {
        description: `Replies stop all future steps`
      },
      {
        description: `Scheduling controls timing`
      },
      {
        description: `Limits control volume, not logic`
      },
      {
        description: `Leads exit only when a stopping rule is met`
      },
      {
        content: `This ensures campaigns run in a controlled, safe, and predictable way.`,
        isParagraph: true
      }
    ]
  },

  {
    id: "83",
    title: "What Happens When a Lead Replies Mid-Sequence",
    content: `When a lead replies while they are still in the middle of a sequence, SalesTarget automatically changes how that lead is handled to prevent over-emailing and keep outreach respectful.<br/> <br/> This article explains what happens step by step when a reply is received.`,
    features: [
      {
        title: "1. The Reply Is Detected",
        isHeading: true
      },
      {
        content: `<strong>When the campaign setting “Stop after reply” is enabled and a lead replies to any email in a campaign:</strong>`,
        isParagraph: true
      },
      {
        description: `The reply is captured in Unibox`
      },
      {
        description: `The system immediately marks that lead as having replied`
      },
      {
        description: `The lead is flagged to stop further automated emails`
      },
      {
        content: `This happens regardless of:`,
        isParagraph: true
      },
      {
        description: `Which step the reply came from`
      },
      {
        description: `Whether the reply is positive or negative`
      },
      {
        description: `How short or long the reply is`
      },
      {
        title: "How to Enable “Stop Sending Emails After a Reply”",
        isHeading: true
      },
      {
        content: `To make sure SalesTarget stops follow-ups when a lead replies:`,
        isParagraph: true
      },
      {
        description: `Open your campaign`
      },
      {
        description: `Go to the <strong>Settings</strong> tab`
      },
      {
        description: `Find the option <strong>“Stop after reply”</strong>`
      },
      {
        description: `Turn the toggle <strong>ON</strong>`
      },
      {
        description: `Save the campaign settings`
      },
      {
        content: `Once this option is enabled, any lead who replies will automatically stop receiving further automated emails in that campaign.`,
        isParagraph: true
      },
      {
        src: "/83i1.png",
        alt: " SalesTarget.ai Copilot dashboard showing options to find prospects, generate campaigns, write sequences, and view analytics with an AI-powered chat interface.",
        caption: "",
        type: "image",
        isImage: true
      },
      {
        title: "2. All Future Follow-Ups Are Stopped",
        isHeading: true
      },
      {
        content: `Once a reply is detected:<ul><li>All remaining steps in the sequence are canceled for that lead</li><li>No further follow-up emails are sent</li><li>Scheduled emails for that lead are removed from the queue</li><li>The campaign continues normally for other leads.</li></ul>`,
        isParagraph: true
      },
      {
        description: `All remaining steps in the sequence are canceled for that lead`
      },
      {
        description: `No further follow-up emails are sent`
      },
      {
        description: `Scheduled emails for that lead are removed from the queue`
      },
      {
        content: `The campaign continues normally for other leads`,
        isParagraph: true
      },
      {
        title: "3. The Lead Exits the Campaign Flow",
        isHeading: true
      },
      {
        content: `After replying:This ensures the system does not send:<ul><li>Reminders</li><li>Follow-ups</li><li>Final emails</li></ul>after a human response is received.`,
        isParagraph: true
      },
      {
        description: `The lead no longer progresses to the next step`
      },
      {
        description: `Delay timers for that lead stop`
      },
      {
        description: `The lead is effectively removed from the automation path`
      },
      {
        title: "4. The Reply Appears in Unibox",
        isHeading: true
      },
      {
        content: `All replies are visible in Unibox, where you can:<ul><li>Read the message</li><li>Reply manually</li><li>See the full conversation history</li></ul>This allows you to take over the conversation without automation interfering.`,
        isParagraph: true
      },
      {
        title: "5. What Does NOT Happen When a Lead Replies",
        isHeading: true
      },
      {
        content: `When a lead replies:<ul><li>The campaign is not stopped for other leads</li><li>The lead is not re-added automatically</li><li>No new automated emails are sent to that lead</li><li>No follow-up is triggered automatically</li></ul>Automation stops and control switches to you.`,
        isParagraph: true
      },
      {
        title: "6. What If the Reply Comes After a Follow-Up Is Scheduled?",
        isHeading: true
      },
      {
        content: `If a follow-up was already scheduled:<ul><li>The system checks for replies before sending</li><li>If a reply exists, the follow-up is skipped</li><li>No email is sent to that lead</li></ul>This prevents accidental double-emailing.`,
        isParagraph: true
      },
      {
        title: "7. Why This Behavior Is Important",
        isHeading: true
      },
      {
        content: `Stopping emails on reply:<ul><li>Prevents awkward follow-ups</li><li>Protects sender reputation</li><li>Improves recipient experience</li><li>Keeps outreach compliant and human</li></ul>This is a core safety rule in SalesTarget.`,
        isParagraph: true
      },
      {
        title: "8. Best Practices After a Lead Replies",
        isHeading: true
      },
      {
        content: `When a reply arrives:<ul><li>Respond manually from Unibox</li><li>Move the lead to CRM if interested</li><li>Pause or remove the lead from the campaign if needed</li><li>Update lead status or notes</li><li>Do not re-add the lead to the same campaign unless needed.</li></ul>`,
        isParagraph: true
      },
      {
        title: "Summary",
        isHeading: true
      },
      {
        content: `In SalesTarget, when a lead replies mid-sequence:<ul><li>The reply is captured in Unibox</li><li>All future automated steps stop (when the setting is enabled)</li><li>The lead exits the campaign flow</li><li>You take over the conversation manually</li></ul>This ensures automation never continues once a real conversation begins.`,
        isParagraph: true
      }
    ]
  },

  {
    id: "84",
    title: "What Happens When a Lead Does NOT Reply",
    content: `When a lead does not reply to your email, SalesTarget continues the campaign based on the sequence, timing, and rules you have configured.<br/> <br/> This article explains what happens to a lead when there is no reply and how the system decides when to send the next email.`,
    features: [
      {
        title: "1. The Lead Remains Active in the Campaign",
        isHeading: true
      },
      {
        content: `If a lead does not reply:<ul><li>The lead stays active in the campaign</li><li>The system does not remove the lead automatically</li><li>The lead continues to the next step in the sequence</li><li>No action is required from you for the campaign to continue.</li></ul>`,
        isParagraph: true
      },
      {
        description: `The lead stays active in the campaign`
      },
      {
        description: `The system does not remove the lead automatically`
      },
      {
        description: `The lead continues to the next step in the sequence`
      },
      {
        content: `No action is required from you for the campaign to continue.`,
        isParagraph: true
      },
      {
        title: "2. Delay Timer Starts After Each Email",
        isHeading: true
      },
      {
        content: `After an email is sent:<ul><li>The system waits for the delay you configured (hours or days)</li><li>During this time, the lead is monitored for replies</li><li>If no reply is received by the end of the delay, the lead moves to the next step</li><li>The next follow-up email is sent</li></ul>`,
        isParagraph: true
      },
      {
        description: `The system waits for the delay you configured (hours or days)`
      },
      {
        description: `During this time, the lead is monitored for replies`
      },
      {
        content: `If no reply is received by the end of the delay`,
        isParagraph: true
      },
      {
        description: `The lead moves to the next step`,
        isParagraph: true
      },
      {
        description: `The next follow-up email is sent`,
        isParagraph: true
      },
      {
        title: "3. Follow-Up Emails Are Sent Automatically",
        isHeading: true
      },
      {
        content: `For leads who do not reply:`,
        isParagraph: true
      },
      {
        description: `Follow-up emails are sent automatically`
      },
      {
        description: `Each follow-up is a separate step`
      },
      {
        description: `Messages are sent in the order defined in the sequence`
      },
      {
        content: `This continues until:`,
        isParagraph: true
      },
      {
        description: `The lead replies`
      },
      {
        description: `Or the sequence reaches its final step`
      },
      {
        title: "4. Scheduling Still Applies",
        isHeading: true
      },
      {
        content: `Even when a lead does not reply:`,
        isParagraph: true
      },
      {
        description: `Emails are sent only during your scheduled start and end times.`
      },
      {
        description: `Time zone settings are respected`
      },
      {
        description: `If a follow-up is due outside the scheduled time, it will be delayed.`
      },
      {
        content: `The lead does not skip steps due to timing — it only waits.`,
        isParagraph: true
      },
      {
        title: "5. Sending Limits Do Not Remove the Lead",
        isHeading: true
      },
      {
        content: `If daily sending limits are reached:`,
        isParagraph: true
      },
      {
        description: `The email is queued`
      },
      {
        description: `It is sent the next day during your scheduled time`
      },
      {
        description: `The lead remains in the campaign`
      },
      {
        content: `No leads are dropped because of limits.`,
        isParagraph: true
      },
      {
        title: "6. What Does NOT Happen When a Lead Does Not Reply",
        isHeading: true
      },
      {
        content: `When there is no reply:`,
        isParagraph: true
      },
      {
        description: `The lead is not removed automatically`
      },
      {
        description: `The campaign does not stop`
      },
      {
        description: `The lead is not marked as completed immediately`
      },
      {
        description: `No manual action is required`
      },
      {
        content: `The system simply follows the sequence as designed.`,
        isParagraph: true
      },
      {
        title: "7. When Does a Lead Stop Without Reply?",
        isHeading: true
      },
      {
        content: `A lead will only stop without replying if:`,
        isParagraph: true
      },
      {
        description: `The sequence reaches its last step`
      },
      {
        description: `The campaign is paused or stopped`
      },
      {
        description: `The lead is manually removed`
      },
      {
        content: `Lack of reply alone does not stop a lead.`,
        isParagraph: true
      },
      {
        title: "Example Flow (No Reply)",
        isHeading: true
      },
      {
        content: `Example sequence:`,
        isParagraph: true
      },
      {
        description: `Step 1 → Initial email`
      },
      {
        description: `Wait 2 days`
      },
      {
        description: `Step 2 → Follow-up`
      },
      {
        description: `Wait 3 days`
      },
      {
        description: `Step 3 → Final follow-up`
      },
      {
        content: `If no reply:`,
        isParagraph: true
      },
      {
        description: `Step 1 is sent`
      },
      {
        description: `The system waits 2 days`
      },
      {
        description: `Step 2 is sent`
      },
      {
        description: `The system waits 3 days`
      },
      {
        description: `Step 3 is sent`
      },
      {
        description: `Sequence ends`
      },
      {
        content: `The lead receives all steps unless a stopping rule is triggered.`,
        isParagraph: true
      },
      {
        title: "Why This Matters",
        isHeading: true
      },
      {
        content: `This behaviour ensures:`,
        isParagraph: true
      },
      {
        description: `No leads are forgotten`
      },
      {
        description: `Follow-ups are consistent`
      },
      {
        description: `Timing stays predictable`
      },
      {
        description: `Automation remains controlled`
      },
      {
        content: `You can design your sequence knowing exactly what will happen when a lead is silent.`,
        isParagraph: true
      },
      {
        title: "Summary",
        isHeading: true
      },
      {
        content: `In SalesTarget, when a lead does not reply:`,
        isParagraph: true
      },
      {
        description: `The lead stays active`
      },
      {
        description: `Follow-ups are sent after each delay`
      },
      {
        description: `Scheduling and limits are respected`
      },
      {
        description: `The lead stops only when the sequence ends or a stop rule is triggered`
      },
      {
        content: `This keeps your outreach structured and reliable.`,
        isParagraph: true
      }
    ]
  },
  {
    id: "85",
    title: "What Is Lead Enrichment and Why Your Sales Team Cant Afford to Skip It in 2026",
    content: `Here's a number that should bother you: the average B2B contact database decays at roughly 30% every year.<br/><br/>Job changes. Company rebrands. Acquisitions. People leaving roles. That email address you paid good money for in January? By December, there's a one-in-three chance it belongs to someone who no longer works there — or bounces straight to nowhere.<br/><br/>And if your sales team is still doing outbound with that data, you're not just wasting budget. You're actively damaging your domain reputation with every bounce, every wrong-person email, every reply that says "I left this company six months ago."<br/><br/>Lead enrichment fixes this. But it does something far more valuable than just keeping your data clean — it gives your team the full picture of who they're reaching out to before the first message is sent.`,
    metaTitle: "What Is Lead Enrichment and Why It Matters for Your Sales Team in 2026",
    metaDescription: "Learn how lead enrichment turns raw contacts into full buying profiles — and why bad data is quietly killing your outbound reply rates, deliverability, and budget.",
    metaKeywords: "lead enrichment, B2B data enrichment, sales data quality, contact enrichment, outbound sales, intent data, firmographics, SalesTarget.ai",
    features: [
      {
        title: "What Lead Enrichment Actually Means",
        isHeading: true
      },
      {
        content: `In plain terms: lead enrichment is the process of taking a basic contact (a name, an email, maybe a company name) and filling in everything else that makes that contact useful.`,
        isParagraph: true
      },
      {
        content: `That "everything else" includes things like:`,
        isParagraph: true
      },
      {
        description: `Job title, seniority level, department`
      },
      {
        description: `Direct phone number and verified work email`
      },
      {
        description: `Company size, revenue range, funding stage`
      },
      {
        description: `Industry, location, headcount growth`
      },
      {
        description: `Tech stack — what tools they're currently using`
      },
      {
        description: `Buying signals — recent hiring activity, funding rounds, leadership changes`
      },
      {
        description: `Intent data — whether they've been actively researching your category`
      },
      {
        content: `A raw lead without enrichment is just a name on a list. An enriched lead is a full buying profile — someone you actually understand before you reach out.`,
        isParagraph: true
      },
      {
        content: `The difference between a 1% reply rate and a 12% reply rate isn't the copy. It's how well you know the person before you write a single word.`,
        isParagraph: true
      },
      {
        title: "Lead Enrichment vs. a Contact Database — What's the Difference?",
        isHeading: true
      },
      {
        content: `This is a question a lot of founders get wrong, so it's worth being precise.`,
        isParagraph: true
      },
      {
        content: `A contact database (think the old-school way of buying lists) gives you static, one-time data. You get a spreadsheet, you run your campaign, and that's it. No verification. No updates. No signal of whether those people are actually in the market for what you sell.`,
        isParagraph: true
      },
      {
        content: `Lead enrichment is a live process. It continuously layers additional data onto your contacts — pulling from multiple sources, verifying accuracy in real time, and updating records as things change.`,
        isParagraph: true
      },
      {
        content: `The best enrichment platforms today don't just pull from one database. They aggregate data across dozens of providers, cross-reference signals, and give you a confidence score on every field. That's a fundamentally different thing to what most teams are still doing.`,
        isParagraph: true
      },
      {
        content: `SalesTarget.ai, for instance, draws on 50+ data providers and 840M+ profiles to enrich leads — so instead of trusting a single source, you're getting a consensus view across the market's best data.`,
        isParagraph: true
      },
      {
        title: "Why Bad Data Is Costing More Than You Think",
        isHeading: true
      },
      {
        content: `Most founders underestimate the true cost of bad data. It doesn't show up as a line item — it shows up as a slowly declining reply rate, a rising bounce rate, an SDR who's burning two hours a day calling wrong numbers.`,
        isParagraph: true
      },
      {
        content: `Here's what it actually costs:`,
        isParagraph: true
      },
      {
        title: "Email Deliverability",
        isHeading: true
      },
      {
        content: `Every hard bounce signals to Gmail and Outlook that your domain might be sending spam. When your bounce rate crosses 2%, deliverability starts to tank. Enrichment and validation keeps you below that threshold and protects the domain you've spent years building.`,
        isParagraph: true
      },
      {
        title: "SDR Time and Morale",
        isHeading: true
      },
      {
        content: `A rep spending 40% of their day researching leads manually before reaching out isn't selling — they're doing data work. Enrichment automates the research layer completely, which means more dials, more conversations, more pipeline.`,
        isParagraph: true
      },
      {
        title: "Wasted Ad Spend and Sequence Costs",
        isHeading: true
      },
      {
        content: `If you're running outbound sequences, you're paying per email sent, per contact touched. Sending to bad data isn't just ineffective — you're paying for the privilege of damaging your sender reputation.`,
        isParagraph: true
      },
      {
        content: `A study from Gartner found that poor data quality costs organizations an average of $12.9 million per year. For a startup or scaling company, that shows up as burned budget and missed quota.`,
        isParagraph: true
      },
      {
        title: "What Good Enrichment Looks Like in Practice",
        isHeading: true
      },
      {
        content: `Let's say a prospect downloads a lead magnet from your website. You get their email. That's it.`,
        isParagraph: true
      },
      {
        content: `With enrichment, that email becomes a full profile within seconds:`,
        isParagraph: true
      },
      {
        description: `Name, title, direct number`
      },
      {
        description: `Company revenue and employee count`
      },
      {
        description: `Current tech stack — they're using Salesforce and HubSpot`
      },
      {
        description: `Recent trigger — the company just raised a Series B`
      },
      {
        description: `Intent signal — they've been reading articles about your category for the last 3 weeks`
      },
      {
        content: `Now your SDR doesn't send a generic cold email. They send something like: "Congrats on the Series B — usually means the team starts thinking about scaling outbound. Curious if you're looking at adding a data layer to what you're doing with HubSpot."`,
        isParagraph: true
      },
      {
        content: `That's not a cold email anymore. That's a warm, relevant, timely message that actually gets replied to.`,
        isParagraph: true
      },
      {
        title: "The ROI Founders Actually Care About",
        isHeading: true
      },
      {
        content: `If you want to put a number on it, here's the simple math:`,
        isParagraph: true
      },
      {
        content: `Assume your team sends 1,000 emails a week. With unverified, unenriched data, you might see a 15% bounce rate and a 2% reply rate. That's 150 bounced, 17 replies.`,
        isParagraph: true
      },
      {
        content: `With enrichment and validation: bounce rate drops below 1%, reply rate climbs to 8–12% because the targeting and personalisation are sharper. That's 80–120 replies from the same 1,000 sends.`,
        isParagraph: true
      },
      {
        content: `Same team. Same budget. Five to six times the output — just from knowing who you're reaching and making sure the data is clean before you press send.`,
        isParagraph: true
      },
      {
        title: "How to Get Started",
        isHeading: true
      },
      {
        content: `If you're not enriching today, the starting point is simpler than most people think:`,
        isParagraph: true
      },
      {
        description: `Audit your current list — how many contacts have job titles? Company size? Verified emails?`
      },
      {
        description: `Run your list through a validation tool to find the bounce candidates before they find you`
      },
      {
        description: `Layer enrichment on top — firmographics, technographics, intent signals`
      },
      {
        description: `Build enrichment into your inbound flow so every new lead gets filled in automatically`
      },
      {
        content: `The teams pulling ahead in outbound right now aren't the ones with the biggest lists. They're the ones with the best data. And the gap between the two is only getting wider.`,
        isParagraph: true
      },
      {
        content: `SalesTarget.ai gives your team access to 840M+ verified profiles, 4,000+ data signals, and real-time intent data — all in one platform. Try it free and see the difference enrichment makes from the first campaign.`,
        isParagraph: true
      }
    ]
  },
  {
    id: "86",
    title: "ZoomInfo vs Apollo vs SalesTarget.ai: Which B2B Data Platform Gives You the Most in 2026?",
    content: `If you've been researching B2B data and lead enrichment platforms recently, you've probably landed on the same three or four names: ZoomInfo, Apollo.io, and the newer wave of intelligence platforms like SalesTarget.ai.<br/><br/>Each of them will tell you they're the best. That's not useful.<br/><br/>What's actually useful is understanding what each platform optimises for, where each one has real gaps, and which one fits the motion you're trying to run in 2026 — because the answer is genuinely different depending on your stage, your team size, and how sophisticated your outbound is.<br/><br/>This comparison is honest. We'll call out where SalesTarget.ai is the stronger choice, but also where ZoomInfo and Apollo genuinely earn their reputation.`,
    metaTitle: "ZoomInfo vs Apollo vs SalesTarget.ai: Best B2B Data Platform in 2026?",
    metaDescription: "An honest breakdown of ZoomInfo, Apollo, and SalesTarget.ai — what each platform does well, where they fall short, and which one fits your sales team in 2026.",
    metaKeywords: "ZoomInfo vs Apollo, B2B data platform comparison, SalesTarget.ai review, lead enrichment platforms 2026, Apollo alternative, ZoomInfo alternative, B2B prospecting tools",
    features: [
      {
        title: "The Quick Summary",
        isHeading: true
      },
      {
        description: `ZoomInfo: best-in-class data quality and enterprise integrations, but extremely expensive and built for large sales teams that need a lot of hand-holding`
      },
      {
        description: `Apollo.io: great value for early-stage teams that want an all-in-one starter tool. Strong contact database but intent signals and enrichment depth are limited`
      },
      {
        description: `SalesTarget.ai: the strongest choice if enrichment depth, intent signals, and scale matter. 840M+ profiles, 4,000+ data signals, 50+ providers — built for teams that want intelligence-first prospecting without the ZoomInfo price tag`
      },
      {
        title: "ZoomInfo: The Enterprise Standard (With Enterprise-Level Problems)",
        isHeading: true
      },
      {
        title: "What ZoomInfo Does Well",
        isHeading: true
      },
      {
        content: `ZoomInfo has been building its database for over a decade. The data quality on North American contacts — particularly at the enterprise level — is genuinely strong. Their org chart data, direct dial numbers, and integration with Salesforce are best-in-class for large teams.`,
        isParagraph: true
      },
      {
        content: `If you're an enterprise sales team with 50+ AEs, existing Salesforce infrastructure, and a $50K+ annual budget for data tooling, ZoomInfo is a defensible choice.`,
        isParagraph: true
      },
      {
        title: "Where ZoomInfo Struggles",
        isHeading: true
      },
      {
        content: `The price is the most common complaint — and it's valid. ZoomInfo contracts routinely run $15,000–$30,000 per year for mid-sized teams, and they're not known for flexibility in negotiation. You're also often locked into data you don't fully control.`,
        isParagraph: true
      },
      {
        content: `Beyond cost, the platform was built for an era when having a big contact database was the differentiator. In 2026, that's table stakes. Intent signals, enrichment across multiple providers, and real-time data freshness are where the gap shows up — and ZoomInfo's intent product is bolted on rather than native, which shows in the quality.`,
        isParagraph: true
      },
      {
        description: `Pricing: $15,000–$30,000+/year for meaningful access`
      },
      {
        description: `Intent data: available but limited in topic granularity and freshness`
      },
      {
        description: `Data providers: primarily proprietary — single-source risk`
      },
      {
        description: `Setup complexity: significant — enterprise-grade means enterprise-grade implementation`
      },
      {
        title: "Apollo.io: Great for Getting Started, Less Great for Scaling",
        isHeading: true
      },
      {
        title: "What Apollo Does Well",
        isHeading: true
      },
      {
        content: `Apollo became popular because it made B2B data accessible to companies that couldn't afford ZoomInfo. The free tier gets you started, the paid plans are genuinely affordable, and the all-in-one approach (contact database + email sequences + basic CRM) makes it an easy first tool for an early-stage sales team.`,
        isParagraph: true
      },
      {
        content: `If you're a 2–5 person team running your first outbound experiments, Apollo is a reasonable starting point. The contact database is solid for the price, and the sequencing tool is usable.`,
        isParagraph: true
      },
      {
        title: "Where Apollo Struggles",
        isHeading: true
      },
      {
        content: `Apollo's data is largely from a single primary source, which means coverage gaps — particularly outside the US, and in specific industries. When you're running high-volume outbound and need confidence in every record, single-source data is a meaningful risk.`,
        isParagraph: true
      },
      {
        content: `More importantly, Apollo is fundamentally an outreach tool with a database attached, not a data intelligence platform. Intent signals are shallow. Enrichment beyond basic firmographics requires external tools. At scale, most serious sales teams outgrow Apollo within 12–18 months and end up stitching together multiple tools to cover the gaps.`,
        isParagraph: true
      },
      {
        description: `Pricing: $49–$99/user/month for core plans`
      },
      {
        description: `Intent data: basic and limited in scope`
      },
      {
        description: `Data coverage: strong in US/tech sector, weaker internationally`
      },
      {
        description: `Enrichment depth: limited to basic firmographics without add-ons`
      },
      {
        title: "SalesTarget.ai: Built for Intelligence-First Prospecting",
        isHeading: true
      },
      {
        title: "What Makes SalesTarget Different",
        isHeading: true
      },
      {
        content: `SalesTarget.ai was rebuilt from the ground up as an intelligence platform first, outreach platform second. That distinction matters more than it sounds.`,
        isParagraph: true
      },
      {
        content: `The core difference is in the data layer. While ZoomInfo relies primarily on its proprietary database and Apollo pulls from one main source, SalesTarget aggregates across 50+ data providers — which means you're getting a consensus view of every contact rather than trusting a single source.`,
        isParagraph: true
      },
      {
        content: `The result is 840M+ profiles and 150M+ company entities covered with 4,000+ data signals per record. That's not just a bigger number — it's a fundamentally more complete picture of every prospect.`,
        isParagraph: true
      },
      {
        title: "Enrichment Depth",
        isHeading: true
      },
      {
        content: `Where SalesTarget stands apart from both competitors is what enrichment actually means on the platform. It's not just filling in a job title and company size. You get:`,
        isParagraph: true
      },
      {
        description: `Firmographic data: revenue, headcount, funding stage, growth trajectory`
      },
      {
        description: `Technographic data: exact tools and platforms the company is running`
      },
      {
        description: `Behavioural signals: hiring patterns, leadership changes, expansion moves`
      },
      {
        description: `Intent signals: real-time third-party data showing who's actively researching your category`
      },
      {
        content: `That last point — intent signals — is where SalesTarget's multi-provider approach creates a real edge. Rather than one intent data feed, you're pulling signals from across the web and combining them with the full enrichment picture to score who's actually in-market right now.`,
        isParagraph: true
      },
      {
        title: "All-in-One Without the Trade-Offs",
        isHeading: true
      },
      {
        content: `Like Apollo, SalesTarget gives you the full stack: lead discovery and enrichment, email validation, cold email outreach with warm-up, LinkedIn automation, CRM, and AI Copilot. But the underlying data quality and intent intelligence are materially better.`,
        isParagraph: true
      },
      {
        content: `Like ZoomInfo, SalesTarget gives you enterprise-grade data depth and coverage. But at a price point that doesn't require a board conversation to approve.`,
        isParagraph: true
      },
      {
        content: `The sweet spot SalesTarget.ai occupies: the data depth and intent intelligence of an enterprise platform, combined with the usability and pricing that works for a scaling company.`,
        isParagraph: true
      },
      {
        title: "Head-to-Head Comparison",
        isHeading: true
      },
      {
        content: `Here's how the three platforms stack up across the factors that actually matter:`,
        isParagraph: true
      },
      {
        content: `<strong>Profile coverage:</strong> ZoomInfo — large proprietary database, primarily US-focused. Apollo — solid US/tech coverage, gaps internationally. SalesTarget — 840M+ profiles across 50+ providers, broad international coverage.`,
        isParagraph: true
      },
      {
        content: `<strong>Data signals per record:</strong> ZoomInfo — standard firmographics plus some intent. Apollo — basic firmographics. SalesTarget — 4,000+ signals including firmographic, technographic, behavioural, and intent.`,
        isParagraph: true
      },
      {
        content: `<strong>Intent data quality:</strong> ZoomInfo — add-on, limited topic depth. Apollo — basic, surface-level. SalesTarget — real-time, multi-provider, granular topic taxonomy.`,
        isParagraph: true
      },
      {
        content: `<strong>Pricing:</strong> ZoomInfo — $15,000–$30,000+/year. Apollo — $49–$99/user/month. SalesTarget — competitive mid-market pricing with full feature access.`,
        isParagraph: true
      },
      {
        content: `<strong>All-in-one outreach:</strong> ZoomInfo — requires additional tools. Apollo — yes, but data layer is the limitation. SalesTarget — yes, with intelligence-grade data underneath.`,
        isParagraph: true
      },
      {
        content: `<strong>Multi-provider data:</strong> ZoomInfo — no (proprietary). Apollo — no (single source). SalesTarget — yes (50+ providers).`,
        isParagraph: true
      },
      {
        title: "Which Platform Should You Choose?",
        isHeading: true
      },
      {
        title: "Choose ZoomInfo if:",
        isHeading: true
      },
      {
        description: `You're an enterprise sales org with 50+ reps and existing Salesforce infrastructure`
      },
      {
        description: `Your ICP is primarily large US enterprises and you need best-in-class org chart data`
      },
      {
        description: `Budget is not a constraint and you need white-glove enterprise support`
      },
      {
        title: "Choose Apollo if:",
        isHeading: true
      },
      {
        description: `You're an early-stage team of 1–5 people running your first outbound sequences`
      },
      {
        description: `You need a cheap, functional starting point and plan to upgrade as you scale`
      },
      {
        description: `Your outreach is mostly US-based and your ICP is in the tech sector`
      },
      {
        title: "Choose SalesTarget.ai if:",
        isHeading: true
      },
      {
        description: `You want intelligence-first prospecting — knowing who's in-market before reaching out`
      },
      {
        description: `You need enrichment depth beyond basic firmographics: technographics, intent, behavioural signals`
      },
      {
        description: `You're scaling from $1M to $10M ARR and need enterprise-grade data without enterprise pricing`
      },
      {
        description: `You want one platform for intelligence, enrichment, outreach, LinkedIn, and CRM — not five separate tools`
      },
      {
        description: `International coverage matters — your ICP isn't limited to the US`
      },
      {
        title: "The Bottom Line",
        isHeading: true
      },
      {
        content: `In 2026, the B2B data platform you choose isn't just a contact list purchase. It's the foundation of your entire outbound motion. The quality of your data determines the quality of every message your team sends, every conversation they start, and every deal that ends up in the pipeline.`,
        isParagraph: true
      },
      {
        content: `ZoomInfo set the standard for enterprise data. Apollo made data accessible for early-stage teams. SalesTarget.ai is what happens when you take the lessons from both and rebuild for the way outbound actually works today — intelligence first, enrichment deep, intent-driven.`,
        isParagraph: true
      },
      {
        content: `If you're serious about building a predictable outbound engine, the data layer is where that starts. And the data layer has gotten a lot more interesting.`,
        isParagraph: true
      },
      {
        content: `SalesTarget.ai gives you 840M+ profiles, 4,000+ data signals, real-time intent, and a full outreach platform in one place. See how it compares to your current stack — try it free, no credit card required.`,
        isParagraph: true
      }
    ]
  },
  {
    id: "87",
    title: "Intent Data Explained: How to Find Buyers Before They Fill Out a Form",
    content: `Most B2B outbound works like this: pick a list, write a sequence, hit send, wait. You're essentially throwing messages at people and hoping some of them happen to be in the market right now. Some days that works. Most days it doesn't — not because your product is wrong or your copy is bad, but because timing is everything in sales, and you're guessing.<br/><br/>Intent data changes that equation entirely. Instead of guessing who might be interested, you know — because you can see what people are actually doing online before they ever raise their hand.`,
    metaTitle: "Intent Data Explained: How to Find Buyers Before They Fill Out a Form",
    metaDescription: "Intent data tells you who's actively researching your category before they ever contact you. Learn how it works and how to use it to reach buyers at exactly the right moment.",
    metaKeywords: "intent data, B2B intent data, buying signals, in-market buyers, lead intelligence, SalesTarget.ai, third-party intent, first-party intent",
    features: [
      {
        title: "What Intent Data Actually Is",
        isHeading: true
      },
      {
        content: `Intent data is behavioral information that signals someone is actively researching a topic, category, or type of solution.<br/><br/>When a VP of Sales at a 200-person company spends three weeks reading articles about cold email deliverability, comparing outbound tools on G2, and downloading guides about building SDR teams — that's intent. They are in the market. They are forming opinions. They will make a decision soon.<br/><br/>The question is: do you know about it before your competitor does?<br/><br/>Intent data captures these signals across the web — review sites, content platforms, search behavior, news events — and surfaces them to you in a usable form. Instead of waiting for someone to book a demo, you're reaching out when they're actively looking.`,
        isParagraph: true
      },
      {
        content: `<strong>The best time to reach a buyer is the three to four weeks before they formally start a vendor evaluation. Intent data is what tells you when that window opens.</strong>`,
        isParagraph: true
      },
      {
        title: "First-Party vs Third-Party Intent — What's the Difference?",
        isHeading: true
      },
      {
        content: `There are two kinds of intent data, and they work differently:`,
        isParagraph: true
      },
      {
        title: "First-Party Intent",
        isHeading: true
      },
      {
        content: `This is data from your own properties — website visits, content downloads, pricing page views, webinar sign-ups. It's the most accurate signal you have because it's direct. If someone visits your pricing page twice in a week, that's a very clear sign of interest.<br/><br/>The limitation is obvious: you only see people who've already found you. That's a small percentage of your total addressable market.`,
        isParagraph: true
      },
      {
        title: "Third-Party Intent",
        isHeading: true
      },
      {
        content: `This is where things get interesting. Third-party intent data is collected from publisher networks, review sites (like G2 and Capterra), content aggregators, and data co-ops across the web. It tracks which companies are consuming content related to specific topics — even when they're nowhere near your website.<br/><br/>So you can see that a company has been heavily researching "sales intelligence platforms" for the past month, even if they've never visited SalesTarget.ai. That's an in-market signal, and it tells you now is the time to reach out.`,
        isParagraph: true
      },
      {
        title: "The Signals That Actually Matter",
        isHeading: true
      },
      {
        content: `Not every signal is equal. Here's how to think about the value hierarchy:`,
        isParagraph: true
      },
      {
        title: "High-Value Signals (Act on These Immediately)",
        isHeading: true
      },
      {
        description: `Multiple stakeholders at the same company consuming category-relevant content`
      },
      {
        description: `G2 or Capterra category browsing — someone actively comparing solutions`
      },
      {
        description: `Pricing page visits on competitor websites`
      },
      {
        description: `Job postings for roles related to your product — "SDR Manager" posted by a company that doesn't use outbound tooling`
      },
      {
        description: `Funding rounds — companies with fresh capital tend to invest in new tooling`
      },
      {
        title: "Medium-Value Signals (Use to Prioritize Outreach)",
        isHeading: true
      },
      {
        description: `Single-person content consumption over a week or more`
      },
      {
        description: `Conference or event attendance in your category`
      },
      {
        description: `Leadership changes — new VP of Sales means a new tooling review is likely`
      },
      {
        title: "Lower-Value Signals (Context, Not Triggers)",
        isHeading: true
      },
      {
        description: `General industry content consumption`
      },
      {
        description: `Social activity around your category`
      },
      {
        content: `The best intent platforms — including SalesTarget.ai — don't just give you raw signals. They combine 4,000+ data points across these categories to give you a ranked score of who's most likely in-market right now.`,
        isParagraph: true
      },
      {
        title: "How Intent Data Changes Your Outreach (With a Real Example)",
        isHeading: true
      },
      {
        content: `Here's the difference intent data makes in practice:<br/><br/><strong>Without intent:</strong> your SDR sends a cold sequence to 500 companies in the software sector that fit your ICP. 2–3% reply. Most replies are "not the right time."<br/><br/><strong>With intent:</strong> your SDR filters to the 40 companies in that list showing active intent signals — content consumption, tech stack changes, hiring triggers. The message references the moment: "Noticed your team has been expanding the sales org — usually that's when outbound infrastructure becomes a priority. Thought this might be timely."<br/><br/>Same ICP. Same message quality. But because you're reaching the right company at the right moment, reply rates double or triple. More importantly, the conversations you get are with people who are already in buying mode, which shortens the sales cycle significantly.`,
        isParagraph: true
      },
      {
        content: `<strong>Intent data doesn't just improve your reply rate. It changes the quality of every conversation you have — because you're entering it at exactly the right time.</strong>`,
        isParagraph: true
      },
      {
        title: "Why Most Companies Aren't Using This Yet",
        isHeading: true
      },
      {
        content: `A few years ago, intent data was expensive and hard to operationalize. Enterprise contracts, data science teams needed to make it useful, siloed from your outreach tools.<br/><br/>That's changed significantly. The barrier now isn't access — it's awareness. Most founders and sales leaders either don't know it exists, or they think it's only for enterprise teams with massive budgets.<br/><br/>The reality: intent data is now built into modern sales intelligence platforms and accessible from day one, alongside your contact search and enrichment workflow. You don't need a separate tool or a data analyst to make sense of it.`,
        isParagraph: true
      },
      {
        title: "What to Look For in an Intent Data Provider",
        isHeading: true
      },
      {
        content: `If you're evaluating how to add intent signals to your stack, here's what matters:`,
        isParagraph: true
      },
      {
        description: `<strong>Data coverage</strong> — how many publisher sites and review platforms does it pull from? A single source gives you a narrow view.`
      },
      {
        description: `<strong>Signal freshness</strong> — intent that's 30 days old is nearly worthless. Look for real-time or near-real-time signals.`
      },
      {
        description: `<strong>Topic taxonomy</strong> — how granular can you get? "Marketing technology" is too broad. "Email deliverability" or "sales engagement software" is actionable.`
      },
      {
        description: `<strong>Account vs contact level</strong> — some tools show company-level intent but can't tell you which person is researching. The best tools surface the specific stakeholder.`
      },
      {
        description: `<strong>Integration</strong> — intent data is only valuable if it's connected to your outreach workflow. Standalone reports nobody reads don't move pipeline.`
      },
      {
        content: `SalesTarget.ai pulls from 50+ data providers to surface intent signals alongside full lead enrichment, so by the time a prospect lands in your sequence, you already know why they're there.`,
        isParagraph: true
      },
      {
        title: "The Shift From Reactive to Predictive Selling",
        isHeading: true
      },
      {
        content: `The traditional sales process is almost entirely reactive. You wait for leads to come in, respond to inquiries, follow up on demos. Even most outbound is reactive in a sense — you're picking a static list and hoping the timing works.<br/><br/>Intent data makes selling predictive. You know who's going to be in the market before they know they're ready to buy. You show up at the right moment, with relevant context, before your competitor even knows the window is open.<br/><br/>For founders building a sales motion, this is the single biggest leverage point in outbound right now. It's not about sending more emails. It's about sending the right emails to the right people at the exact right moment.<br/><br/>That's a very different game — and it's one worth playing.`,
        isParagraph: true
      },
      {
        content: `SalesTarget.ai surfaces real-time intent signals alongside 840M+ profiles and 4,000+ data signals so you can find in-market buyers before your competitors do. See it in action — no credit card required.`,
        isParagraph: true
      }
    ]
  },
  {
    id: "88",
    title: "Clay vs SalesTarget.ai: Which Lead Enrichment Tool Is Right for Your Sales Team?",
    content: `Clay has had a moment. If you've spent any time in B2B sales Twitter or GTM Slack communities over the last two years, you've seen it everywhere — growth hackers building elaborate enrichment waterfalls, founders sharing screenshots of hyper-personalized campaigns, agencies building entire service lines on top of it.<br/><br/>The hype is real. Clay is genuinely impressive for what it does.<br/><br/>But "impressive" and "right for your team" are two different things. Clay is a power tool. And like any power tool, it's extraordinary in the right hands and frustrating in the wrong ones.<br/><br/>SalesTarget.ai is built on a different premise: you shouldn't need an engineer or a dedicated Clay expert to run intelligence-grade prospecting. The enrichment, the intent signals, the outreach — it should all work together out of the box, for a sales team, not a data ops team.`,
    metaTitle: "Clay vs SalesTarget.ai: Which Lead Enrichment Tool Is Right for Your Sales Team?",
    metaDescription: "Clay vs SalesTarget.ai — an honest breakdown of both tools. Compare enrichment depth, total cost, setup complexity, and which is right for your sales team.",
    metaKeywords: "Clay vs SalesTarget.ai, Clay alternative, lead enrichment tools, B2B data enrichment, sales intelligence platform, enrichment waterfall, SalesTarget.ai review",
    features: [
      {
        title: "What Clay Is (And What It's Really For)",
        isHeading: true
      },
      {
        content: `Clay is a data enrichment and workflow automation platform. At its core, it lets you build enrichment waterfalls — sequences that pull data from multiple sources in a specific order, using the output of one enrichment to trigger the next.<br/><br/>A classic Clay workflow might look like this: take a list of company domains, pull employee count from Clearbit, check LinkedIn headcount growth via a scraper, verify the email via Hunter, then use an AI prompt to write a personalised first line based on everything collected. Each step is a different data provider, connected through Clay's table interface.<br/><br/>The result, when done well, is genuinely impressive enrichment. Teams that have invested in building their Clay infrastructure can create highly customised, deeply personalised outreach at scale.<br/><br/>The key phrase there is "invested in building."`,
        isParagraph: true
      },
      {
        title: "The Real Cost of Clay: Time, Expertise, and Ongoing Maintenance",
        isHeading: true
      },
      {
        content: `Clay's pricing starts at around $149/month for the basic plan, which sounds accessible. But that number is misleading without understanding what's not included.<br/><br/>Clay is a platform, not a solution. To get real value out of it, you need:`,
        isParagraph: true
      },
      {
        description: `Credits for each enrichment action — and those add up fast at volume`
      },
      {
        description: `Separate subscriptions to data providers: Clearbit, Hunter, Apollo, People Data Labs, and others, because Clay connects to them but doesn't include the data itself`
      },
      {
        description: `Someone with the technical knowledge to build and maintain the waterfall workflows — this is not a tool most SDRs or even sales managers can run independently`
      },
      {
        description: `Ongoing tinkering as data sources change, providers update their APIs, and workflows break`
      },
      {
        content: `Many teams that adopt Clay end up spending $800–$2,000+ per month in total once you add up the platform cost, data provider subscriptions, and the hidden cost of the person managing it. Some teams hire dedicated "Clay operators" or use agencies, which adds even more.<br/><br/>None of this is a criticism — it's just the honest picture of what Clay is. It's a platform for people who want to build something custom. That's a real need, and Clay serves it well.`,
        isParagraph: true
      },
      {
        content: `<strong>Clay is for teams that want to build their own enrichment infrastructure. SalesTarget.ai is for teams that want enrichment infrastructure that's already built — and ready to run on day one.</strong>`,
        isParagraph: true
      },
      {
        title: "What SalesTarget.ai Is Built For",
        isHeading: true
      },
      {
        content: `SalesTarget.ai starts from a different assumption: your sales team's time should go into selling, not into building and maintaining data pipelines.<br/><br/>The platform aggregates 50+ data providers natively — the same sources Clay lets you connect to manually — and delivers enrichment across 840M+ profiles and 150M+ company entities with 4,000+ data signals per record. The waterfall logic, the cross-referencing, the verification — it's all handled inside the platform.<br/><br/>What that means in practice: you search for your ICP, filter by the signals that matter (industry, headcount, tech stack, funding stage, intent), get fully enriched profiles, validate contacts, and push them into a multichannel sequence — all without leaving the platform, and without a single API connection to manage.<br/><br/>The full stack in one place:`,
        isParagraph: true
      },
      {
        description: `Lead discovery and search across 840M+ profiles`
      },
      {
        description: `Enrichment with 4,000+ signals — firmographic, technographic, behavioral, intent`
      },
      {
        description: `Email validation built in — no separate tool needed`
      },
      {
        description: `Cold email outreach with warm-up, spintax, and unified inbox`
      },
      {
        description: `LinkedIn automation for multichannel sequences`
      },
      {
        description: `Built-in CRM for pipeline management`
      },
      {
        description: `AI Copilot for campaign building, lead finding, and performance analysis through chat`
      },
      {
        title: "Clay vs SalesTarget.ai: Where Each One Wins",
        isHeading: true
      },
      {
        title: "Where Clay Wins",
        isHeading: true
      },
      {
        content: `Customisation is Clay's superpower. If you have a highly specific enrichment workflow — pulling from niche data sources, building conditional logic based on specific triggers, creating bespoke AI personalization at the field level — Clay gives you a level of control that no all-in-one platform can match.<br/><br/>Clay also wins for agencies and growth operators who are building enrichment as a service. If you're running enrichment workflows for multiple clients with different ICPs and different data needs, Clay's flexibility is genuinely valuable.`,
        isParagraph: true
      },
      {
        description: `Highly custom enrichment waterfalls with conditional logic`
      },
      {
        description: `Connecting to niche or proprietary data sources`
      },
      {
        description: `Building enrichment as a service for multiple clients`
      },
      {
        description: `Teams with dedicated technical ops who want full control over data infrastructure`
      },
      {
        title: "Where SalesTarget.ai Wins",
        isHeading: true
      },
      {
        content: `SalesTarget.ai wins when what you need is a sales team that moves fast, not a data team that builds carefully.<br/><br/>The intelligence is already aggregated. The providers are already connected. The enrichment is already happening. Your team goes from ICP definition to enriched, validated, sequenced prospects in minutes — not after a week of waterfall building.<br/><br/>And critically: because SalesTarget.ai is an end-to-end platform, the data intelligence is connected directly to outreach. There's no export, no import, no "now paste this enriched list into your sequencing tool." The intent signal that surfaces a buyer flows directly into the campaign that reaches them.`,
        isParagraph: true
      },
      {
        description: `Sales teams that need to move fast without a dedicated ops person`
      },
      {
        description: `Founders running their own outbound who want results, not infrastructure projects`
      },
      {
        description: `Teams that need intent data alongside enrichment — not as a separate purchase`
      },
      {
        description: `Companies scaling from $1M to $20M ARR where speed and simplicity matter more than customisation`
      },
      {
        description: `International GTM — broader global coverage than Clay's typical provider stack`
      },
      {
        title: "The Total Cost Comparison",
        isHeading: true
      },
      {
        content: `This is where the comparison gets interesting for most founders, because the sticker prices don't tell the full story.`,
        isParagraph: true
      },
      {
        title: "Clay Total Cost of Ownership",
        isHeading: true
      },
      {
        description: `Clay platform: $149–$720/month depending on credit volume`
      },
      {
        description: `Data providers (Clearbit, Apollo, Hunter, PDL, etc.): typically $300–$800/month in additional subscriptions`
      },
      {
        description: `Operator time — either internal or agency: $500–$2,000/month equivalent`
      },
      {
        description: `Email tooling (Clay doesn't do outreach): $100–$300/month for a sequencing platform`
      },
      {
        content: `Realistic total for a properly functioning Clay setup: <strong>$1,200–$3,500/month</strong>, plus ongoing maintenance overhead.`,
        isParagraph: true
      },
      {
        title: "SalesTarget.ai Total Cost of Ownership",
        isHeading: true
      },
      {
        content: `One platform. Enrichment, intent, outreach, LinkedIn automation, email validation, CRM, and AI Copilot — all included. No separate data provider subscriptions. No ops overhead. No stitching together five tools.<br/><br/>The cost difference at scale is significant. But more importantly, the time difference is significant. A Clay setup that takes three weeks to build and tune is a SalesTarget.ai account that's running campaigns on day one.`,
        isParagraph: true
      },
      {
        content: `<strong>The real ROI question isn't which tool is cheaper. It's how quickly each tool gets your team from zero to pipeline. For most sales teams, that answer is SalesTarget.ai.</strong>`,
        isParagraph: true
      },
      {
        title: `The "Clay + SalesTarget" Question`,
        isHeading: true
      },
      {
        content: `Some teams use both — and there are legitimate reasons for that. If you have a growth ops function that loves Clay for highly customised enrichment workflows, and a sales team that needs to run standard outbound quickly, they're not mutually exclusive.<br/><br/>Clay can feed enriched data into SalesTarget.ai's outreach infrastructure. The combination gives you custom data operations feeding into a clean, fast-moving outreach platform.<br/><br/>But for most companies reading this — especially those under $20M ARR without a dedicated RevOps team — that's over-engineering the stack. Pick one. Run it well. Add complexity later if you genuinely need it.`,
        isParagraph: true
      },
      {
        title: "Who Should Choose What",
        isHeading: true
      },
      {
        title: "Choose Clay if:",
        isHeading: true
      },
      {
        description: `You have a technical ops person or RevOps team dedicated to building data workflows`
      },
      {
        description: `You need highly custom enrichment logic that a standard platform can't replicate`
      },
      {
        description: `You're running an agency or building enrichment as a product for multiple clients`
      },
      {
        description: `Budget isn't a constraint and you're optimising for maximum flexibility over speed`
      },
      {
        title: "Choose SalesTarget.ai if:",
        isHeading: true
      },
      {
        description: `You want to go from ICP to enriched, sequenced pipeline in a day, not a month`
      },
      {
        description: `You need intent signals built into your prospecting, not bolted on separately`
      },
      {
        description: `Your sales team — not a data team — is the one running outbound`
      },
      {
        description: `You want 840M+ profiles, 50+ data providers, and 4,000+ signals without managing any of the infrastructure`
      },
      {
        description: `You need the full stack: enrichment, outreach, LinkedIn, CRM, and AI Copilot in one place`
      },
      {
        title: "The Bottom Line",
        isHeading: true
      },
      {
        content: `Clay is a remarkable tool for the right team. If you have the technical chops, the budget for multiple provider subscriptions, and the appetite to build something custom — it's worth the investment.<br/><br/>But most sales teams don't need a custom-built enrichment infrastructure. They need great data, fast access, and a direct line from intelligence to outreach. That's exactly what SalesTarget.ai is built for.<br/><br/>The question to ask yourself isn't "which tool is more impressive?" It's "which tool will have my team talking to in-market buyers faster?"<br/><br/>For most B2B sales teams in 2026, that answer is clear.`,
        isParagraph: true
      },
      {
        content: `SalesTarget.ai gives you 840M+ profiles, real-time intent signals, and a complete outreach platform — ready to run on day one, no infrastructure required. Try it free and see how fast your team can move.`,
        isParagraph: true
      }
    ]
  }







];

export default mockArticles;
