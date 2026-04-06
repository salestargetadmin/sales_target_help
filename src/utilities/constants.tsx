const mockArticles = [

  // ─── Lead Explorer ────────────────────────────────────────────────────────

  {
    id: "le-1",
    title: "What is Lead Explorer?",
    updated: "Updated April 2026",
    content: `
      Lead Explorer is SalesTarget.ai's all-in-one lead enrichment platform that gives you instant access to one of the largest verified B2B databases in the world.
    `,
    features: [
      {
        title: "What it gives you",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>840M+ individual profiles</strong> — decision-makers, executives, and professionals across every industry<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>150M+ business entities</strong> — company-level data including size, revenue, tech stack, and funding<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>50+ data providers</strong> — all aggregated into a single, unified search experience so you never have to juggle multiple tools
        `,
        isParagraph: 'true',
      },
      {
        title: "Who is it for?",
        isHeading: 'true',
      },
      {
        content: `Lead Explorer is built for sales, marketing, and growth teams who need to:`,
        isParagraph: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Find the right prospects quickly without manual research<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Enrich existing contact data with verified emails and phone numbers<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Build highly targeted lead lists based on role, industry, company size, location, and more<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Feed qualified leads directly into outreach and CRM workflows
        `,
        isParagraph: 'true',
      },
      {
        title: "How it fits into SalesTarget.ai",
        isHeading: 'true',
      },
      {
        content: `Lead Explorer is the starting point of your entire sales workflow on SalesTarget.ai. Once you find and enrich your leads, you can push them directly into:`,
        isParagraph: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Cold Email Outreach</strong> — to launch automated email sequences<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>LinkedIn Outreach</strong> — to run LinkedIn connection and message campaigns<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>CRM</strong> — to manage relationships and track deal progress
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "le-2",
    title: "How to Search for People in Lead Explorer",
    updated: "Updated April 2026",
    content: `
      The People Search in Lead Explorer lets you find individual professionals from a database of <strong>840M+ verified profiles</strong>. You can filter by job title, seniority, industry, location, and more to build a highly targeted prospect list.
    `,
    features: [
      {
        stepTitle: "Step 1: Open People Search",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Log in to your <strong>SalesTarget.ai</strong> account.<br/>
          &nbsp; 2. From the left sidebar, click <strong>Lead Explorer</strong>.<br/>
          &nbsp; 3. At the top of the dashboard, click the <strong>People Search</strong> tab.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Apply Your Filters",
        isStep: 'true',
      },
      {
        content: `Use the filter panel on the left to define your target audience. Available filters:`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Filter", "Description"],
        rows: [
          ["Job Title / Role", "Search by exact title (e.g., \"VP of Sales\") or keyword"],
          ["Seniority Level", "C-Suite, VP, Director, Manager, Individual Contributor"],
          ["Industry", "SaaS, Healthcare, Finance, E-commerce, and more"],
          ["Location", "Filter by Country, State, or City"],
          ["Company Size", "Number of employees (e.g., 50–200, 500+)"],
          ["Keywords", "Any keyword that appears in the person's profile"],
        ],
      },
      {
        content: `<strong>Pro Tip:</strong> Start with 2–3 broad filters first. Check the result count, then narrow down. This prevents accidentally filtering out good prospects.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 3: Run Your Search",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Once your filters are set, click the <strong>Search</strong> button.<br/>
          &nbsp; 2. Results will appear in the center panel. Each result card shows:<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Full Name<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Current Job Title<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Company Name<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Location<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Email availability indicator<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Phone availability indicator
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 4: Review Your Results",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Click on any profile to open the <strong>Lead Preview Panel</strong> on the right for more details.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Use the <strong>Sort</strong> option at the top of the results to sort by relevance, name, or company.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> If you have too many results, go back to the filter panel and add more criteria to narrow them down.
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "le-3",
    title: "How to Search for Companies in Lead Explorer",
    updated: "Updated April 2026",
    content: `
      The Company Search in Lead Explorer lets you find and explore over <strong>150M+ business entities</strong> worldwide. Use it to identify target accounts, research prospects, or build account-based lists filtered by industry, size, revenue, tech stack, and more.
    `,
    features: [
      {
        stepTitle: "Step 1: Open Company Search",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Log in to your <strong>SalesTarget.ai</strong> account.<br/>
          &nbsp; 2. From the left sidebar, click <strong>Lead Explorer</strong>.<br/>
          &nbsp; 3. At the top of the dashboard, click the <strong>Company Search</strong> tab.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Apply Your Filters",
        isStep: 'true',
      },
      {
        content: `Use the filter panel on the left to define your ideal company profile:`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Filter", "Description"],
        rows: [
          ["Industry / Sub-industry", "Target specific sectors (e.g., FinTech, Healthcare SaaS)"],
          ["Employee Count", "Small (1–50), Mid-market (51–500), Enterprise (500+)"],
          ["Annual Revenue", "Filter by revenue range"],
          ["Company Location (HQ)", "Country, State, or City of headquarters"],
          ["Technologies Used", "Companies using specific tools (e.g., HubSpot, Salesforce, Shopify)"],
          ["Founded Year", "Target newer startups or established businesses"],
          ["Funding Stage", "Bootstrapped, Seed, Series A/B/C, or Public"],
        ],
      },
      {
        content: `<strong>Pro Tip:</strong> The <strong>Technologies Used</strong> filter is one of the most powerful — it lets you target companies already using tools that complement or compete with yours.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 3: Run Your Search",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Once your filters are set, click the <strong>Search</strong> button.<br/>
          &nbsp; 2. Results will appear in the center panel. Each company card shows:<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Company Name<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Industry<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Employee Count<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> HQ Location<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Website
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 4: Review a Company Profile",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Click on any company in the results list.<br/>
          &nbsp; 2. The <strong>Company Preview Panel</strong> opens on the right, showing:<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Full company description<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Tech stack being used<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Key contacts within the company<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> LinkedIn and website links<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Funding information (if available)
        `,
        isParagraph: 'true',
      },
      {
        content: `
          From here you can:<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>View Key Contacts</strong> — switch to People Search filtered to this company<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Save the company</strong> to a list<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Export</strong> the company record
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "le-4",
    title: "How to Enrich a Lead Profile in Lead Explorer",
    updated: "Updated April 2026",
    content: `
      Lead enrichment fills in the missing details on a prospect's profile — such as their verified email address, direct phone number, and LinkedIn URL — by pulling real-time data from SalesTarget.ai's network of <strong>50+ data providers</strong>.
    `,
    features: [
      {
        stepTitle: "Step 1: Find the Lead You Want to Enrich",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Run a <strong>People Search</strong> or <strong>Company Search</strong> in Lead Explorer.<br/>
          &nbsp; 2. Click on any profile from the results panel.<br/>
          &nbsp; 3. The <strong>Lead Preview Panel</strong> will open on the right side of the screen.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Review Available Data",
        isStep: 'true',
      },
      {
        content: `Inside the Lead Preview Panel, you'll see the data already available for this profile:`,
        isParagraph: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Name, Job Title, Company</strong> — usually pre-filled<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Email Address</strong> — shown with a confidence score (High / Medium / Low)<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Phone Number</strong> — direct or company line<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>LinkedIn URL</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Location</strong>
        `,
        isParagraph: 'true',
      },
      {
        content: `Some fields may appear as <strong>locked</strong> or marked as <strong>Unavailable</strong> — this is where enrichment comes in.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 3: Enrich the Profile",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Click the <strong>Enrich</strong> button on the Lead Preview Panel.<br/>
          &nbsp; 2. SalesTarget.ai will query across 50+ data providers in real time.<br/>
          &nbsp; 3. Within a few seconds, newly discovered data will appear — filling in previously locked fields.
        `,
        isParagraph: 'true',
      },
      {
        content: `<strong>Note:</strong> Each enrichment action consumes credits from your plan. You can check your remaining credits at the top right of the screen under your account icon.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 4: Review the Enriched Data",
        isStep: 'true',
      },
      {
        content: `After enrichment, review the updated fields:`,
        isParagraph: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Verified Email</strong> — look for a <strong>High confidence</strong> score for best deliverability<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Direct Phone / Mobile</strong> — available for many profiles, especially senior roles<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>LinkedIn Profile</strong> — direct link to the prospect's LinkedIn page
        `,
        isParagraph: 'true',
      },
      {
        content: `<strong>Pro Tip:</strong> Always prioritize leads with a <strong>High confidence email score</strong> for cold outreach. Medium confidence emails can be used but may benefit from email validation first.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 5: Take Action",
        isStep: 'true',
      },
      {
        content: `Once enriched, you can:`,
        isParagraph: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Save to List</strong> — add the lead to a named list for later use<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Send to Cold Email Outreach</strong> — start an email sequence immediately<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Send to LinkedIn Outreach</strong> — add to a LinkedIn campaign<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Send to CRM</strong> — create the contact in your SalesTarget.ai CRM
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "le-5",
    title: "How to Save Leads to a List in Lead Explorer",
    updated: "Updated April 2026",
    content: `
      Lists in Lead Explorer help you organize your prospects into named groups — making it easy to manage, export, or send them to outreach tools and your CRM. You can save individual leads or bulk-select entire search results.
    `,
    features: [
      {
        title: "Option A: Save Individual Leads",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Run a <strong>People Search</strong> or <strong>Company Search</strong> in Lead Explorer.<br/>
          &nbsp; 2. Click on a profile to open the <strong>Lead Preview Panel</strong>.<br/>
          &nbsp; 3. Click the <strong>Save to List</strong> button inside the preview panel.<br/>
          &nbsp; 4. In the popup that appears:<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Select <strong>Create New List</strong> and enter a name (e.g., <em>"SaaS CTOs – US – April 2026"</em>), or<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Select an <strong>Existing List</strong> from the dropdown<br/>
          &nbsp; 5. Click <strong>Save</strong>.
        `,
        isParagraph: 'true',
      },
      {
        title: "Option B: Save Multiple Leads at Once (Bulk Save)",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. From the search results panel, check the box next to each lead you want to save.<br/>
          &nbsp; 2. To save all results on the current page, click <strong>Select All</strong> at the top of the results panel.<br/>
          &nbsp; 3. Click the <strong>Save to List</strong> button that appears in the action bar.<br/>
          &nbsp; 4. Choose to create a new list or add to an existing one.<br/>
          &nbsp; 5. Click <strong>Save</strong>.
        `,
        isParagraph: 'true',
      },
      {
        content: `<strong>Note:</strong> Bulk save applies to the current page of results. To save results across multiple pages, repeat the process for each page or use the Export feature.`,
        isParagraph: 'true',
      },
      {
        title: "Managing Your Lists",
        isHeading: 'true',
      },
      {
        content: `All your saved lists are accessible from the sidebar:`,
        isParagraph: 'true',
      },
      {
        content: `
          &nbsp; 1. Click <strong>My Lists</strong> in the left sidebar.<br/>
          &nbsp; 2. You'll see all your saved lists with the number of leads in each.<br/>
          &nbsp; 3. Click on any list to:<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> View all leads inside it<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Add or remove leads<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Export the list<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Send the list to Cold Email Outreach, LinkedIn Outreach, or CRM
        `,
        isParagraph: 'true',
      },
      {
        title: "Tips for Organizing Lists",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Name lists clearly</strong> — include the audience, region, and date (e.g., <em>"FinTech VPs – UK – April 2026"</em>) so you can find them quickly later.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Create separate lists per campaign</strong> — this keeps your outreach data clean and trackable.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Archive old lists</strong> — once a list has been used in a campaign, archive it to keep your workspace tidy.
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "le-6",
    title: "How to Export Leads from Lead Explorer",
    updated: "Updated April 2026",
    content: `
      You can export your saved lead lists from Lead Explorer as a <strong>CSV</strong> or <strong>Excel</strong> file. This is useful when you want to import leads into a third-party CRM, share a list with your team, or work with the data offline.
    `,
    features: [
      {
        stepTitle: "Step 1: Open Your Saved List",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. From the left sidebar, click <strong>My Lists</strong>.<br/>
          &nbsp; 2. Click on the list you want to export.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Start the Export",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. At the top right of the list view, click the <strong>Export</strong> button.<br/>
          &nbsp; 2. A popup will appear with export settings.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 3: Choose Your Export Format",
        isStep: 'true',
      },
      {
        content: `Select one of the available formats:`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Format", "Best for"],
        rows: [
          ["CSV (.csv)", "CRM imports, Google Sheets, most third-party tools"],
          ["Excel (.xlsx)", "Formatted spreadsheets, sharing with teams"],
        ],
      },
      {
        stepTitle: "Step 4: Select the Data Fields to Include",
        isStep: 'true',
      },
      {
        content: `Choose which columns you want in your export file. Available fields include:`,
        isParagraph: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> First Name / Last Name<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Job Title<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Company Name<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Work Email<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Direct Phone / Mobile<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> LinkedIn URL<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Industry<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Company Size<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Location (City, State, Country)<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Website
        `,
        isParagraph: 'true',
      },
      {
        content: `<strong>Pro Tip:</strong> For cold email campaigns, select at minimum — <strong>First Name, Last Name, Work Email, Job Title, and Company Name</strong>. These are the most commonly used personalization fields in email sequences.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 5: Download Your File",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Once fields are selected, click <strong>Download</strong>.<br/>
          &nbsp; 2. Your file will be generated and downloaded instantly to your device.
        `,
        isParagraph: 'true',
      },
      {
        title: "Things to Keep in Mind",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Exports consume <strong>export credits</strong> depending on your plan and the number of records.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Always check your credit balance before exporting large lists (visible at the top right of the screen).<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> If you're exporting to use inside SalesTarget.ai tools (Cold Email, LinkedIn, CRM), you don't need to export — use the <strong>Send to</strong> feature instead to push leads directly without using export credits.
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "le-7",
    title: "How to Send Leads to Other SalesTarget.ai Tools",
    updated: "Updated April 2026",
    content: `
      Once your leads are saved in a list, you can push them directly into other SalesTarget.ai tools without needing to export and re-import. This keeps your workflow seamless and avoids unnecessary steps.
    `,
    features: [
      {
        title: "What You Can Send Leads To",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Destination", "What happens"],
        rows: [
          ["Cold Email Outreach", "Leads are added to an email sequence campaign"],
          ["LinkedIn Outreach", "Leads are added to a LinkedIn automation campaign"],
          ["CRM", "Leads are created as new contacts or accounts in your CRM"],
        ],
      },
      {
        stepTitle: "Step 1: Open Your List",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. From the left sidebar, click <strong>My Lists</strong>.<br/>
          &nbsp; 2. Click on the list you want to send.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Select the Leads to Send",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> To send <strong>all leads</strong> in the list, click <strong>Select All</strong> at the top.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> To send <strong>specific leads</strong>, check the box next to each one individually.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: `Step 3: Click "Send To"`,
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Once leads are selected, click the <strong>Send to</strong> button in the action bar at the top.<br/>
          &nbsp; 2. A dropdown will appear with your destination options:<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Cold Email Outreach</strong><br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>LinkedIn Outreach</strong><br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>CRM</strong>
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 4: Complete the Setup for Each Tool",
        isStep: 'true',
      },
      {
        title: "→ Sending to Cold Email Outreach",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Select <strong>Cold Email Outreach</strong> from the dropdown.<br/>
          &nbsp; 2. Choose an existing campaign or create a new one.<br/>
          &nbsp; 3. Map the lead fields (First Name, Email, etc.) to your campaign's personalization tags.<br/>
          &nbsp; 4. Click <strong>Send</strong>. Your leads will appear inside the selected campaign, ready to be enrolled in a sequence.
        `,
        isParagraph: 'true',
      },
      {
        title: "→ Sending to LinkedIn Outreach",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Select <strong>LinkedIn Outreach</strong> from the dropdown.<br/>
          &nbsp; 2. Choose an existing LinkedIn campaign or create a new one.<br/>
          &nbsp; 3. Confirm the LinkedIn profiles are matched for each lead.<br/>
          &nbsp; 4. Click <strong>Send</strong>. Leads will be queued in your LinkedIn outreach campaign.
        `,
        isParagraph: 'true',
      },
      {
        title: `Why Use "Send To" Instead of Export?`,
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Faster</strong> — no downloading and re-uploading files<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>No export credits used</strong> — Send To does not consume export credits<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Field mapping is automatic</strong> — SalesTarget.ai maps the data for you<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>No data loss</strong> — leads go in exactly as enriched, with no formatting issues
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "le-8",
    title: "Enrichments & Credits — Complete Guide",
    updated: "Updated April 2026",
    content: `Enrichments in Lead Explorer let you unlock deeper intelligence on any person or company beyond what's visible in search results. Search and filtering are always free — enrichments are paid using credits from your SalesTarget.ai plan.`,
    features: [
      {
        title: "How Credits Work",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Search &amp; Preview is free</strong> — you can filter, search, and view basic profile details without spending any credits.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Credits are spent when you enrich</strong> — unlocking contact details or deeper company intelligence costs credits per enrichment action.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Credits stack per action</strong> — if you enrich a contact for both email and phone, you spend 2 + 5 = 7 credits for that profile.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Your credit balance is always visible at the <strong>top right of the screen</strong>.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Credits reset based on your billing cycle.<br/><br/>
          <strong>Tip:</strong> Only enrich leads that have already passed your qualification filters. This way you spend credits exclusively on prospects worth pursuing.
        `,
        isParagraph: 'true',
      },
      {
        title: "What's Free in Search",
        isHeading: 'true',
      },
      {
        content: `When you run a People Search or Company Search, the following information is always visible for free — no credits required:`,
        isParagraph: 'true',
      },
      {
        content: `
          <strong>People Search — Free Preview</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Full Name<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Job Title<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Seniority Level<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Department<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Location (Country, State / Region, City)<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Company Name<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Industry<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Company Size<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Company Revenue
        `,
        isParagraph: 'true',
      },
      {
        content: `
          <strong>Company Search — Free Preview</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Company Name<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Industry<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Company Size<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Company Revenue<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Company Domain<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Location<br/><br/>
          Everything beyond this — contact details, tech stack, intent data, and other intelligence — requires an enrichment action.
        `,
        isParagraph: 'true',
      },
      {
        title: "People Enrichments",
        isHeading: 'true',
      },
      {
        title: "📧 Email Address — 2 Credits",
        isHeading: 'true',
      },
      {
        content: `Unlocks the professional work email address for the individual. SalesTarget.ai only returns an email when a verified, valid address is found — if no verified email exists for that profile, nothing is shown and no credits are charged.<br/><br/><strong>Best for:</strong> Cold email outreach, CRM contact creation, any workflow where a verified email is required.`,
        isParagraph: 'true',
      },
      {
        title: "📞 Phone Number — 5 Credits",
        isHeading: 'true',
      },
      {
        content: `Unlocks the direct phone number or mobile number for the individual. Where available, SalesTarget.ai returns a direct dial rather than a company switchboard number.<br/><br/><strong>Best for:</strong> Sales calls, SMS outreach, dialer campaigns via SalesTarget.ai CRM.`,
        isParagraph: 'true',
      },
      {
        title: "👤 Professional Profile (Contact &amp; Workplace) — 1 Credit",
        isHeading: 'true',
      },
      {
        content: `
          Unlocks an enriched professional summary for the individual including:<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Current and past job titles<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Employment history<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Company details tied to each role<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Professional background<br/><br/>
          <strong>Best for:</strong> Understanding a prospect's career path before a call, personalizing outreach with relevant context.
        `,
        isParagraph: 'true',
      },
      {
        title: "🌐 Individual's Social Media Presence — 5 Credits",
        isHeading: 'true',
      },
      {
        content: `Unlocks the individual's social media profiles across platforms including LinkedIn, Twitter/X, and other available networks.<br/><br/><strong>Best for:</strong> LinkedIn outreach campaigns, social selling, research before a meeting or call.`,
        isParagraph: 'true',
      },
      {
        title: "Company Enrichments",
        isHeading: 'true',
      },
      {
        title: "🏢 Firmographics (Size, Revenue, Industry) — 1 Credit",
        isHeading: 'true',
      },
      {
        content: `
          Unlocks structured company-level demographic data:<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Exact employee count<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Annual revenue range<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Industry and sub-industry classification<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Company type (private, public, non-profit)<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Headquarters location<br/><br/>
          <strong>Best for:</strong> ICP qualification, account scoring, filtering accounts by size and revenue before outreach.
        `,
        isParagraph: 'true',
      },
      {
        title: "💻 Tech Stack — 2 Credits",
        isHeading: 'true',
      },
      {
        content: `Unlocks a full breakdown of the software tools, SaaS platforms, and infrastructure the company is currently using — sourced across 50+ data providers. Categories include CRM, marketing automation, customer support, analytics, cloud infrastructure, communication tools, and more.<br/><br/><strong>Best for:</strong> Competitive targeting, complementary tool targeting, disqualifying companies whose stack is incompatible with your product.`,
        isParagraph: 'true',
      },
      {
        title: "💰 Funding &amp; Acquisitions — 1 Credit",
        isHeading: 'true',
      },
      {
        content: `
          Unlocks the company's funding history and M&amp;A activity:<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Total funding raised<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Funding rounds (Seed, Series A/B/C, etc.)<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Lead investors<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Acquisition history (companies acquired or being acquired)<br/><br/>
          <strong>Best for:</strong> Identifying companies with fresh capital and budget for new tools, triggering outreach after a new funding announcement.
        `,
        isParagraph: 'true',
      },
      {
        title: "📊 Website Traffic — 2 Credits",
        isHeading: 'true',
      },
      {
        content: `
          Unlocks estimated monthly website traffic data for the company including:<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Monthly visitor estimates<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Traffic trends (growing or declining)<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Top traffic sources<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Geographic breakdown of visitors<br/><br/>
          <strong>Best for:</strong> Qualifying e-commerce or SaaS companies by digital footprint, identifying high-growth businesses before outreach.
        `,
        isParagraph: 'true',
      },
      {
        title: "⭐ Employee Ratings — 2 Credits",
        isHeading: 'true',
      },
      {
        content: `
          Unlocks aggregated employee review data for the company from platforms like Glassdoor and similar sources:<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Overall company rating<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Culture &amp; values score<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Work-life balance score<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Management score<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Growth &amp; opportunity score<br/><br/>
          <strong>Best for:</strong> Understanding company culture before a pitch, identifying companies with high turnover (a signal for HR and recruitment tools).
        `,
        isParagraph: 'true',
      },
      {
        title: "🎯 Intent Data (Bombora) — 2 Credits",
        isHeading: 'true',
      },
      {
        content: `Unlocks Bombora's B2B intent signals for the company — showing which topics they are actively researching right now across thousands of B2B content platforms. Returns active intent topics, intent score per topic (0–100), and a surge indicator (whether activity has spiked recently).`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Intent Score", "What it means"],
        rows: [
          ["70–100", "Strong surge — company is very actively researching this topic"],
          ["40–69", "Moderate interest — topic is on their radar"],
          ["Below 40", "Low activity — weak intent signal"],
        ],
      },
      {
        content: `<strong>Best for:</strong> Timing outreach to when a company is in an active buying cycle for your category.`,
        isParagraph: 'true',
      },
      {
        title: "📈 Workforce Trends — 2 Credits",
        isHeading: 'true',
      },
      {
        content: `
          Unlocks headcount growth and hiring trend data for the company:<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Historical headcount changes over time<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Department-level hiring activity<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Roles currently being hired for<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Growth rate (fast-growing vs. contracting)<br/><br/>
          <strong>Best for:</strong> Identifying scaling companies before outreach, triggering campaigns around rapid hiring as a buying signal.
        `,
        isParagraph: 'true',
      },
      {
        title: "💹 Financial Metrics — 1 Credit (Public Companies Only)",
        isHeading: 'true',
      },
      {
        content: `
          Unlocks publicly reported financial data for listed companies:<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Annual and quarterly revenue<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Revenue growth rate<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Gross margin<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Operating income / EBITDA<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Market capitalization<br/><br/>
          <strong>Best for:</strong> Qualifying and prioritizing enterprise accounts, building financial context before an executive meeting.
        `,
        isParagraph: 'true',
      },
      {
        title: "⚠️ Business Challenges — 2 Credits (Public Companies Only)",
        isHeading: 'true',
      },
      {
        content: `Unlocks AI-synthesized insights into the key challenges the company has publicly disclosed or signaled — drawn from earnings calls, press releases, and public filings.<br/><br/><strong>Best for:</strong> Crafting highly personalized outreach that speaks directly to a company's stated pain points.`,
        isParagraph: 'true',
      },
      {
        title: "🏆 Competitive Landscape — 2 Credits (Public Companies Only)",
        isHeading: 'true',
      },
      {
        content: `
          Unlocks a view of the company's competitive environment including:<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Key competitors<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Market positioning<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Competitive strengths and weaknesses mentioned in public sources<br/><br/>
          <strong>Best for:</strong> Understanding how a company sees itself in its market, shaping your pitch around competitive differentiation.
        `,
        isParagraph: 'true',
      },
      {
        title: "💡 Strategic Insights — 2 Credits (Public Companies Only)",
        isHeading: 'true',
      },
      {
        content: `Unlocks AI-synthesized strategic priorities for the company based on public disclosures — including growth initiatives, expansion plans, and key focus areas stated by leadership.<br/><br/><strong>Best for:</strong> Executive-level outreach, aligning your product's value to the company's stated strategic direction.`,
        isParagraph: 'true',
      },
      {
        title: "📱 Company Social Media Presence — 2 Credits",
        isHeading: 'true',
      },
      {
        content: `Unlocks the company's social media profiles and activity summary across platforms such as LinkedIn, Twitter/X, Facebook, Instagram, and YouTube.<br/><br/><strong>Best for:</strong> Social selling research, understanding a company's brand voice before outreach, verifying company legitimacy.`,
        isParagraph: 'true',
      },
      {
        title: "🔍 Website Keyword Search — 1 Credit",
        isHeading: 'true',
      },
      {
        content: `Unlocks the keywords a company's website is ranking for or targeting — giving you insight into their messaging, SEO strategy, and the topics they are positioning around.<br/><br/><strong>Best for:</strong> Understanding a company's product positioning, identifying keyword-based opportunities for a pitch angle.`,
        isParagraph: 'true',
      },
      {
        title: "🔄 Website Content Changes — 2 Credits",
        isHeading: 'true',
      },
      {
        content: `Unlocks a log of significant changes detected on the company's website — such as new pages added, messaging changes, product updates, or pricing page modifications.<br/><br/><strong>Best for:</strong> Triggering outreach when a company updates their pricing page, launches a new product page, or changes their positioning.`,
        isParagraph: 'true',
      },
      {
        title: "🏗️ Company Hierarchy — 2 Credits",
        isHeading: 'true',
      },
      {
        content: `
          Unlocks the company's organizational structure including:<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Parent company and subsidiaries<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Related entities and sister companies<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Geographic office structure<br/><br/>
          <strong>Best for:</strong> Enterprise selling, understanding decision-making structures, identifying the right entity to target within a large corporate group.
        `,
        isParagraph: 'true',
      },
      {
        title: "🌐 Webstack (BuiltWith) — 2 Credits",
        isHeading: 'true',
      },
      {
        content: `
          Unlocks the specific technologies detected on the company's website — powered by BuiltWith's dedicated website scanner. This covers:<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> CMS / website platform (WordPress, Webflow, Shopify, etc.)<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Analytics and tracking tools<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Advertising pixels<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Live chat and support tools<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Payment gateways<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> CDN and hosting providers<br/><br/>
          <strong>Best for:</strong> Targeting companies using a specific website technology that your product integrates with or competes against.
        `,
        isParagraph: 'true',
      },
      {
        title: "🔁 Lookalike Companies — 5 Credits",
        isHeading: 'true',
      },
      {
        content: `Unlocks a list of companies that are similar to a selected company — based on industry, size, tech stack, revenue, and other firmographic attributes. This lets you instantly expand your target list by finding more companies that match a profile you already know is a good fit.<br/><br/><strong>Best for:</strong> Scaling your ICP list quickly, finding new accounts that mirror your best existing customers.`,
        isParagraph: 'true',
      },
      {
        title: "Credits Summary",
        isHeading: 'true',
      },
      {
        content: `<strong>People Enrichments</strong>`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Enrichment", "Credits"],
        rows: [
          ["Email Address", "2 Cr"],
          ["Phone Number", "5 Cr"],
          ["Professional Profile (Contact & Workplace)", "1 Cr"],
          ["Individual's Social Media Presence", "5 Cr"],
        ],
      },
      {
        content: `<strong>Company Enrichments</strong>`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Enrichment", "Credits"],
        rows: [
          ["Firmographics (Size, Revenue, Industry)", "1 Cr"],
          ["Tech Stack", "2 Cr"],
          ["Funding & Acquisitions", "1 Cr"],
          ["Website Traffic", "2 Cr"],
          ["Employee Ratings", "2 Cr"],
          ["Intent Data (Bombora)", "2 Cr"],
          ["Workforce Trends", "2 Cr"],
          ["Financial Metrics (Public Companies)", "1 Cr"],
          ["Business Challenges (Public Companies)", "2 Cr"],
          ["Competitive Landscape (Public Companies)", "2 Cr"],
          ["Strategic Insights (Public Companies)", "2 Cr"],
          ["Company Social Media Presence", "2 Cr"],
          ["Website Keyword Search", "1 Cr"],
          ["Website Content Changes", "2 Cr"],
          ["Company Hierarchy", "2 Cr"],
          ["Webstack (BuiltWith)", "2 Cr"],
          ["Lookalike Companies", "5 Cr"],
        ],
      },
    ],
  },

  {
    id: "le-9",
    title: "What is Contact Enrichment?",
    updated: "Updated April 2026",
    content: `Contact Enrichment is the process of finding and verifying the direct contact details of an individual lead — including their work email address, phone number, and LinkedIn profile URL. It is the most fundamental enrichment type in Lead Explorer and the starting point for any outreach campaign.`,
    features: [
      {
        title: "What Data Does Contact Enrichment Provide?",
        isHeading: 'true',
      },
      {
        content: `When you enrich a contact, SalesTarget.ai queries across 50+ data providers to surface the best available contact information for that person. For email addresses, the result is binary — either a verified, valid email is returned or nothing is shown. No credits are charged if a valid email cannot be found.`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Data Point", "Description"],
        rows: [
          ["Work Email Address", "Verified professional email tied to their current company"],
          ["Personal Email", "Secondary email (where available)"],
          ["Direct Phone Number", "A phone line that rings to the individual, not a front desk"],
          ["Mobile Number", "Personal mobile where available"],
          ["LinkedIn Profile URL", "Direct link to their LinkedIn profile"],
        ],
      },
      {
        title: "How to Use Contact Enrichment",
        isHeading: 'true',
      },
      {
        stepTitle: "Enrich a Single Lead",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Run a <strong>People Search</strong> in Lead Explorer and click on any profile.<br/>
          &nbsp; 2. In the <strong>Lead Preview Panel</strong> on the right, review the visible contact data.<br/>
          &nbsp; 3. If fields are locked or missing, click the <strong>Enrich</strong> button.<br/>
          &nbsp; 4. SalesTarget.ai will fetch the best available contact data within seconds.<br/>
          &nbsp; 5. Review the returned email, phone, and LinkedIn details.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Enrich Leads in Bulk",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>My Lists</strong> in the left sidebar and open a saved list.<br/>
          &nbsp; 2. Select the leads you want to enrich — or click <strong>Select All</strong>.<br/>
          &nbsp; 3. Click <strong>Enrich Selected</strong> from the action bar at the top.<br/>
          &nbsp; 4. Choose <strong>Contact Enrichment</strong> from the enrichment options.<br/>
          &nbsp; 5. SalesTarget.ai will process all selected leads and fill in contact data.<br/><br/>
          <strong>Note:</strong> Bulk enrichment uses one credit per lead enriched. Make sure your credit balance covers the number of leads you are enriching.
        `,
        isParagraph: 'true',
      },
      {
        title: "What to Do After Contact Enrichment",
        isHeading: 'true',
      },
      {
        content: `Once you have enriched contact data, your next step depends on your workflow:`,
        isParagraph: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Run Email Validation</strong> — especially for Medium confidence emails before launching a campaign<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Save to a List</strong> — keep enriched leads organized by campaign or segment<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Send to Cold Email Outreach</strong> — start an email sequence with the enriched email address<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Send to LinkedIn Outreach</strong> — use the LinkedIn URL to connect and message the prospect<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Push to CRM</strong> — create or update the contact record with fresh data
        `,
        isParagraph: 'true',
      },
    ],
  },

  // ─── Cold Email Outreach ──────────────────────────────────────────────────

  {
    id: "ceo-1",
    title: "What is Cold Email Outreach?",
    updated: "Updated April 2026",
    content: `Cold Email Outreach is SalesTarget.ai's built-in email campaign tool designed to help sales and marketing teams send personalized, automated email sequences to prospects at scale — without ever leaving the platform.`,
    features: [
      {
        title: "What it lets you do",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Send automated email sequences</strong> to hundreds or thousands of prospects<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Personalize every email</strong> using the lead data you've enriched in Lead Explorer<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Follow up automatically</strong> without manual effort — if a prospect doesn't reply, the next email sends on its own<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Warm up your inbox</strong> so your emails land in the primary inbox, not spam<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Rotate across multiple sender accounts</strong> to protect deliverability as you scale<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Test subject lines and email copy</strong> with A/B testing to find what works<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Validate emails</strong> before sending to reduce bounce rates<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Write emails faster</strong> with AI-powered writing assistance
        `,
        isParagraph: 'true',
      },
      {
        title: "How it fits into SalesTarget.ai",
        isHeading: 'true',
      },
      {
        content: `Cold Email Outreach sits right after Lead Explorer in your workflow:`,
        isParagraph: 'true',
      },
      {
        content: `
          &nbsp; 1. <strong>Find leads</strong> in Lead Explorer using filters<br/>
          &nbsp; 2. <strong>Enrich them</strong> to get verified email addresses<br/>
          &nbsp; 3. <strong>Send leads to Cold Email Outreach</strong> — directly from your list<br/>
          &nbsp; 4. <strong>Launch a sequence</strong> and let automation handle the follow-ups
        `,
        isParagraph: 'true',
      },
      {
        title: "How Sending Works",
        isHeading: 'true',
      },
      {
        content: `SalesTarget.ai gives you two ways to send cold emails:`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Option", "How it works", "Best for"],
        rows: [
          ["Connect your own account", "Link your Gmail, Outlook, or custom SMTP account", "Teams who want full control over their sender identity"],
          ["SalesTarget.ai sending infrastructure", "Use SalesTarget.ai's built-in email infrastructure", "Teams who want to get started without connecting accounts"],
        ],
      },
      {
        content: `You can also use <strong>Inbox Rotation</strong> to spread sending volume across multiple connected accounts — protecting your sender reputation as you scale.`,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "ceo-2",
    title: "How to Connect Your Email Account",
    updated: "Updated April 2026",
    content: `Before you can send cold emails from SalesTarget.ai, you need to connect a sending account. You can connect your own Gmail, Outlook, or custom SMTP account — or use SalesTarget.ai's built-in sending infrastructure.`,
    features: [
      {
        title: "Option A: Connect Your Own Email Account",
        isHeading: 'true',
      },
      {
        content: `Connecting your own email account means emails are sent directly from your personal or company email address — keeping your sender identity consistent and professional.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Connect Gmail",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Cold Email Outreach</strong> from the left sidebar.<br/>
          &nbsp; 2. Click <strong>Settings</strong> → <strong>Email Accounts</strong>.<br/>
          &nbsp; 3. Click <strong>Add Email Account</strong>.<br/>
          &nbsp; 4. Select <strong>Gmail</strong> from the list of providers.<br/>
          &nbsp; 5. Click <strong>Connect with Google</strong> and sign in to your Google account.<br/>
          &nbsp; 6. Grant the required permissions when prompted.<br/>
          &nbsp; 7. Your Gmail account will appear as a connected sender in your account list.<br/><br/>
          <strong>Note:</strong> For best results with Gmail, enable <strong>2-Step Verification</strong> and use an <strong>App Password</strong> if your Google Workspace has security restrictions.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Connect Outlook / Microsoft 365",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Cold Email Outreach</strong> → <strong>Settings</strong> → <strong>Email Accounts</strong>.<br/>
          &nbsp; 2. Click <strong>Add Email Account</strong> and select <strong>Outlook / Microsoft 365</strong>.<br/>
          &nbsp; 3. Click <strong>Connect with Microsoft</strong> and sign in to your Microsoft account.<br/>
          &nbsp; 4. Approve the permissions request.<br/>
          &nbsp; 5. Your Outlook account will be added as a connected sender.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Connect a Custom SMTP Account",
        isStep: 'true',
      },
      {
        content: `Use this option if you have a custom domain email hosted on any provider (e.g., Google Workspace, Zoho Mail, ProtonMail Business, or any other SMTP-supported mail server).`,
        isParagraph: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Cold Email Outreach</strong> → <strong>Settings</strong> → <strong>Email Accounts</strong>.<br/>
          &nbsp; 2. Click <strong>Add Email Account</strong> and select <strong>Custom SMTP</strong>.<br/>
          &nbsp; 3. Enter the following details from your email provider:<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>SMTP Host</strong> (e.g., smtp.yourdomain.com)<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>SMTP Port</strong> (usually 587 for TLS or 465 for SSL)<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Email Address</strong><br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Password / App Password</strong><br/>
          &nbsp; 4. Click <strong>Test Connection</strong> to verify the credentials are correct.<br/>
          &nbsp; 5. Click <strong>Save</strong> once the connection is confirmed.
        `,
        isParagraph: 'true',
      },
      {
        title: "Option B: Use SalesTarget.ai Sending Infrastructure",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Cold Email Outreach</strong> → <strong>Settings</strong> → <strong>Email Accounts</strong>.<br/>
          &nbsp; 2. Click <strong>Use SalesTarget.ai Sending</strong>.<br/>
          &nbsp; 3. Configure your sender name and sender email display settings.<br/>
          &nbsp; 4. Click <strong>Save</strong>.
        `,
        isParagraph: 'true',
      },
      {
        title: "Managing Connected Accounts",
        isHeading: 'true',
      },
      {
        content: `Once connected, you can manage all your sending accounts from <strong>Settings → Email Accounts</strong>:`,
        isParagraph: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Set a default sender</strong> — the account used when launching new campaigns<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Set daily sending limits</strong> per account to stay within safe sending thresholds<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Disconnect an account</strong> at any time<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Add multiple accounts</strong> for Inbox Rotation across campaigns
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "ceo-3",
    title: "How to Set Up Email Warm-up",
    updated: "Updated April 2026",
    content: `Email warm-up is the process of gradually building up the sending reputation of a new email address or domain before you start sending cold emails at scale. SalesTarget.ai includes a built-in warm-up tool to automate this process for you.`,
    features: [
      {
        title: "Why Email Warm-up Matters",
        isHeading: 'true',
      },
      {
        content: `When you send emails from a brand new address or domain, email providers like Gmail and Outlook have no history to evaluate your trustworthiness. Sending a large volume of emails immediately triggers spam filters — even if your content is perfectly written.<br/><br/>Warm-up works by sending a small, gradually increasing number of emails from your account to a network of real inboxes. Those emails are automatically opened and replied to, signaling to email providers that your account is active, legitimate, and trusted.<br/><br/><strong>Without warm-up:</strong> High spam rate, low deliverability, damaged sender reputation.<br/><strong>With warm-up:</strong> Emails land in the primary inbox, open rates are higher, campaigns perform better.`,
        isParagraph: 'true',
      },
      {
        title: "How Long Does Warm-up Take?",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Account Age", "Recommended Warm-up Period"],
        rows: [
          ["Brand new domain / email", "4 – 6 weeks"],
          ["Domain used before but not for cold email", "2 – 3 weeks"],
          ["Previously warmed account resuming after a break", "1 – 2 weeks"],
        ],
      },
      {
        content: `<strong>Rule of thumb:</strong> Never send more than 30–50 cold emails per day from a new account until warm-up is complete.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 1: Enable Warm-up for Your Email Account",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Cold Email Outreach</strong> from the left sidebar.<br/>
          &nbsp; 2. Click <strong>Settings</strong> → <strong>Email Accounts</strong>.<br/>
          &nbsp; 3. Select the email account you want to warm up.<br/>
          &nbsp; 4. Toggle on <strong>Email Warm-up</strong>.<br/>
          &nbsp; 5. SalesTarget.ai will immediately begin the warm-up process in the background.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Configure Your Warm-up Settings",
        isStep: 'true',
      },
      {
        isTable: true,
        headers: ["Setting", "Description"],
        rows: [
          ["Daily warm-up volume", "How many warm-up emails are sent per day (starts low, increases automatically)"],
          ["Ramp-up speed", "Slow, Medium, or Fast — controls how quickly daily volume increases"],
          ["Reply rate", "Percentage of warm-up emails that receive an automatic reply (higher is better for reputation)"],
        ],
      },
      {
        content: `<strong>Recommendation:</strong> Leave ramp-up speed on <strong>Medium</strong> for most accounts. Use <strong>Slow</strong> for brand new domains to be extra safe.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 3: Monitor Your Warm-up Progress",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Settings</strong> → <strong>Email Accounts</strong> and select your account.<br/>
          &nbsp; 2. Click the <strong>Warm-up</strong> tab to see your warm-up dashboard showing:<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Emails sent today vs. target<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Spam rate (should stay below 3%)<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Inbox placement rate<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Overall health score for the account<br/><br/>
          <strong>Healthy warm-up indicators:</strong> Spam rate below 3%, inbox placement above 90%, health score marked as Good or Excellent.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 4: Start Sending Cold Emails",
        isStep: 'true',
      },
      {
        content: `Once your account health score reaches <strong>Good</strong> or <strong>Excellent</strong> and your warm-up period is complete:<br/><br/>
          &nbsp; 1. Keep warm-up <strong>running in the background</strong> even after you start sending — it continues to protect your deliverability.<br/>
          &nbsp; 2. Begin with a conservative daily sending limit (50–100 emails/day).<br/>
          &nbsp; 3. Gradually increase volume week by week as your reputation strengthens.<br/><br/>
          <strong>Important:</strong> Do not turn off warm-up once you start cold sending. Warm-up running alongside your campaigns continuously improves your inbox placement.
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "ceo-4",
    title: "How to Create an Email Sequence",
    updated: "Updated April 2026",
    content: `An email sequence is a series of automated emails sent to a prospect over a set period of time. Instead of sending a single cold email and hoping for a reply, a sequence keeps you in front of the prospect with well-timed follow-ups — all running automatically without any manual effort.`,
    features: [
      {
        stepTitle: "Step 1: Go to Cold Email Outreach",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Log in to your <strong>SalesTarget.ai</strong> account.<br/>
          &nbsp; 2. From the left sidebar, click <strong>Cold Email Outreach</strong>.<br/>
          &nbsp; 3. Click <strong>Campaigns</strong> → <strong>New Campaign</strong>.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Name Your Campaign",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Enter a clear campaign name (e.g., "SaaS CTOs – US – April 2026").<br/>
          &nbsp; 2. Select the <strong>sending account</strong> you want to use for this campaign.<br/>
          &nbsp; 3. Click <strong>Next</strong>.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 3: Add Your Leads",
        isStep: 'true',
      },
      {
        content: `
          Choose how you want to add leads to this campaign:<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>From Lead Explorer</strong> — select a saved list directly<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Import a CSV</strong> — upload a file with your lead data<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Add manually</strong> — enter individual contacts<br/><br/>
          Then map the columns from your lead data to the campaign fields (First Name, Email, Company, etc.) and click <strong>Next</strong>.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 4: Build Your Email Sequence",
        isStep: 'true',
      },
      {
        content: `<strong>Add Your First Email (Step 1)</strong>`,
        isParagraph: 'true',
      },
      {
        content: `
          &nbsp; 1. Click <strong>Add Step</strong> → <strong>Email</strong>.<br/>
          &nbsp; 2. Write your <strong>Subject Line</strong>.<br/>
          &nbsp; 3. Write your <strong>Email Body</strong> — use personalization tags to make it feel 1-to-1 (e.g., <code>{{first_name}}</code>, <code>{{company_name}}</code>).<br/>
          &nbsp; 4. Set the <strong>Send Delay</strong> — for the first email, this is Day 1.
        `,
        isParagraph: 'true',
      },
      {
        content: `<strong>Add Follow-up Emails</strong>`,
        isParagraph: 'true',
      },
      {
        content: `
          &nbsp; 1. Click <strong>Add Step</strong> → <strong>Email</strong> again to add a follow-up.<br/>
          &nbsp; 2. Write a follow-up email — shorter than the first, referencing the previous message.<br/>
          &nbsp; 3. Set the <strong>delay</strong> — e.g., send 3 days after the previous step.<br/>
          &nbsp; 4. Repeat to add as many follow-up steps as needed.<br/><br/>
          <strong>Recommended sequence structure:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Email 1 (Day 1):</strong> Introduction — who you are and why you're reaching out<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Email 2 (Day 3):</strong> Value add — share a relevant insight, case study, or resource<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Email 3 (Day 7):</strong> Soft ask — a low-friction call to action<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Email 4 (Day 14):</strong> Final follow-up — close the loop professionally
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 5: Configure Sequence Settings",
        isStep: 'true',
      },
      {
        isTable: true,
        headers: ["Setting", "What it controls"],
        rows: [
          ["Send days", "Which days of the week emails are sent (e.g., Monday–Friday only)"],
          ["Send time window", "The time range emails are sent within (e.g., 9am–5pm in recipient's timezone)"],
          ["Stop on reply", "Automatically stops the sequence when a prospect replies — always recommended"],
          ["Stop on out-of-office", "Pauses the sequence if an out-of-office reply is detected"],
          ["Daily sending limit", "Max emails sent per day from this campaign"],
        ],
      },
      {
        stepTitle: "Step 6: Review and Launch",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Click <strong>Review</strong> to see a full summary of your campaign — leads, sequence steps, and settings.<br/>
          &nbsp; 2. Check that your sending account is correctly selected.<br/>
          &nbsp; 3. Choose to <strong>Launch Now</strong> or <strong>Schedule for Later</strong> (set a specific date and time).<br/>
          &nbsp; 4. Click <strong>Launch Campaign</strong>.
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "ceo-5",
    title: "How to Set Up Follow-up Automation",
    updated: "Updated April 2026",
    content: `Follow-up automation in Cold Email Outreach ensures that prospects who don't respond to your first email automatically receive subsequent emails — without you having to track who replied and manually decide who to follow up with.`,
    features: [
      {
        title: "How Follow-up Automation Works",
        isHeading: 'true',
      },
      {
        content: `When a prospect is enrolled in a sequence, SalesTarget.ai monitors their status after each email is sent:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>If they reply</strong> → the sequence stops automatically. No further emails are sent.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>If they don't reply</strong> → the next follow-up email sends after the delay you've configured.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>If they unsubscribe</strong> → they are removed from the sequence immediately and added to your suppression list.
        `,
        isParagraph: 'true',
      },
      {
        title: "Setting Up Follow-up Steps in a Sequence",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Cold Email Outreach</strong> → <strong>Campaigns</strong> and open your campaign.<br/>
          &nbsp; 2. Click <strong>Edit Sequence</strong>.<br/>
          &nbsp; 3. After your first email step, click <strong>Add Step</strong> → <strong>Email</strong>.<br/>
          &nbsp; 4. Write your follow-up email.<br/>
          &nbsp; 5. Set the <strong>delay</strong> — the number of days after the previous step before this email sends.<br/>
          &nbsp; 6. Repeat for each additional follow-up.
        `,
        isParagraph: 'true',
      },
      {
        title: "Configuring Follow-up Behaviour",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Setting", "Description"],
        rows: [
          ["Send as reply", "Sends the follow-up as a reply in the same email thread — keeps context visible to the prospect"],
          ["New subject line", "Sends the follow-up as a fresh email — useful for re-engaging with a different angle"],
          ["Delay (days)", "How many days after the previous step before this email fires"],
          ["Send only on working days", "Skips weekends so emails land on business days only"],
        ],
      },
      {
        content: `<strong>Recommendation:</strong> Set follow-ups to <strong>Send as reply</strong> in the same thread. This keeps the conversation context intact and often gets higher reply rates than a standalone email.`,
        isParagraph: 'true',
      },
      {
        title: "Conditions — Smarter Follow-up Logic",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Condition", "What it does"],
        rows: [
          ["Opened but didn't reply", "Only sends the follow-up if the prospect opened the previous email but didn't respond"],
          ["Did not open", "Only sends if the prospect hasn't opened the previous email at all — useful for re-engagement with a new subject line"],
          ["Clicked a link", "Triggers when a prospect clicked a link in the previous email — useful for sending a more targeted follow-up"],
        ],
      },
      {
        content: `To add a condition: click on a follow-up step in the sequence builder → click <strong>Add Condition</strong> → select the condition → Save the step.`,
        isParagraph: 'true',
      },
      {
        title: "Automatic Stop Triggers",
        isHeading: 'true',
      },
      {
        content: `SalesTarget.ai automatically stops a prospect's sequence when any of the following happen:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> The prospect <strong>replies</strong> to any email in the sequence<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> The prospect <strong>unsubscribes</strong> via the unsubscribe link<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> The email <strong>bounces</strong> (hard bounce)<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> An <strong>out-of-office</strong> reply is detected (sequence pauses until the return date if detected)<br/><br/>
          You do not need to configure these — they are active by default for all campaigns.
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "ceo-6",
    title: "How to Use Personalization & Custom Variables",
    updated: "Updated April 2026",
    content: `Personalization is what separates a cold email that gets replies from one that gets ignored. SalesTarget.ai lets you insert dynamic variables into your subject lines and email body — so every email feels individually written, even when it's sent to thousands of people.`,
    features: [
      {
        title: "What are Personalization Variables?",
        isHeading: 'true',
      },
      {
        content: `Personalization variables are placeholders you add to your email template. When the email sends, SalesTarget.ai replaces each placeholder with the actual data from that prospect's record.<br/><br/><strong>Template:</strong> Hi <code>{{first_name}}</code>, I noticed that <code>{{company_name}}</code> recently expanded into new markets…<br/><strong>What the prospect receives:</strong> Hi Sarah, I noticed that Acme Corp recently expanded into new markets…`,
        isParagraph: 'true',
      },
      {
        title: "Default Variables Available in Every Campaign",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Variable", "What it inserts"],
        rows: [
          ["{{first_name}}", "Prospect's first name"],
          ["{{last_name}}", "Prospect's last name"],
          ["{{full_name}}", "Prospect's full name"],
          ["{{email}}", "Prospect's email address"],
          ["{{job_title}}", "Prospect's job title"],
          ["{{company_name}}", "Prospect's company name"],
          ["{{industry}}", "Prospect's industry"],
          ["{{city}}", "Prospect's city"],
          ["{{country}}", "Prospect's country"],
          ["{{sender_name}}", "Your name (the sender)"],
          ["{{sender_company}}", "Your company name"],
        ],
      },
      {
        title: "Custom Variables",
        isHeading: 'true',
      },
      {
        content: `If the default variables don't cover everything you need, you can create your own <strong>Custom Variables</strong> — and populate them with any data you want.<br/><br/>
          <strong>Example use cases:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <code>{{pain_point}}</code> — a specific challenge relevant to that prospect's role<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <code>{{case_study}}</code> — a relevant customer story based on their industry<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <code>{{icebreaker}}</code> — a personalized opening line researched for each prospect<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <code>{{mutual_connection}}</code> — a shared contact or connection
        `,
        isParagraph: 'true',
      },
      {
        title: "How to Create and Use Custom Variables",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to your campaign and click <strong>Edit Sequence</strong>.<br/>
          &nbsp; 2. In the email editor, type <code>{{</code> to open the variable picker.<br/>
          &nbsp; 3. Click <strong>+ Create Custom Variable</strong> and give it a name.<br/>
          &nbsp; 4. Save the variable — it will now appear in your variable list.<br/>
          &nbsp; 5. Add a <strong>Fallback Value</strong> — this is what gets inserted if the field is empty for a prospect.
        `,
        isParagraph: 'true',
      },
      {
        title: "Fallback Values — Always Set Them",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Variable", "Fallback example"],
        rows: [
          ["{{first_name}}", "there → \"Hi there\""],
          ["{{company_name}}", "your company → \"I noticed your company…\""],
          ["{{job_title}}", "your role"],
          ["{{city}}", "your area"],
        ],
      },
      {
        content: `To set a fallback: click on any variable in the email editor → enter a <strong>Fallback Value</strong> in the field that appears → Save.`,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "ceo-7",
    title: "How to Set Up A/B Testing",
    updated: "Updated April 2026",
    content: `A/B testing in Cold Email Outreach lets you test two or more variations of a subject line or email body within the same campaign. SalesTarget.ai automatically splits your leads between the variations and tells you which version performs better — so you can continuously improve your outreach based on real data, not guesswork.`,
    features: [
      {
        title: "What Can You A/B Test?",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Element", "Examples"],
        rows: [
          ["Subject Line", '"Quick question, {{first_name}}" vs. "{{company_name}} + SalesTarget.ai"'],
          ["Email Body", "Different opening lines, value propositions, or calls to action"],
          ["Call to Action", '"Book a 15-min call" vs. "Would this be relevant for your team?"'],
          ["Sender Name", "Your full name vs. first name only"],
        ],
      },
      {
        stepTitle: "Step 1: Enable A/B Testing on an Email Step",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Cold Email Outreach</strong> → <strong>Campaigns</strong> and open or create a campaign.<br/>
          &nbsp; 2. In the sequence builder, click on the email step you want to test.<br/>
          &nbsp; 3. Click <strong>Add Variant</strong> (or the A/B icon) on that step.<br/>
          &nbsp; 4. A <strong>Variant B</strong> editor will appear alongside your original <strong>Variant A</strong>.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Write Your Variants",
        isStep: 'true',
      },
      {
        content: `In <strong>Variant A</strong>, write your original subject line and email body. In <strong>Variant B</strong>, change the element you want to test.<br/><br/><strong>Best practice:</strong> Test only <strong>one element at a time</strong>. If you change both the subject line and the body, you won't know which change caused the difference in results.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 3: Set the Traffic Split",
        isStep: 'true',
      },
      {
        content: `Set how you want to split your leads between the two versions. The default is <strong>50% / 50%</strong>. You can adjust this (e.g., 70/30) if you want to protect more of your list with the safer variant while testing a riskier one.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 4: Choose Your Winning Metric",
        isStep: 'true',
      },
      {
        isTable: true,
        headers: ["Metric", "Best used when"],
        rows: [
          ["Open Rate", "Testing subject lines"],
          ["Reply Rate", "Testing email body or CTA"],
          ["Click Rate", "Testing emails with links or resources"],
        ],
      },
      {
        stepTitle: "Step 5: Launch and Monitor",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Launch your campaign as normal.<br/>
          &nbsp; 2. Go to the <strong>Campaign Dashboard</strong> → <strong>A/B Test Results</strong> to monitor performance.<br/>
          &nbsp; 3. You'll see side-by-side metrics for each variant: emails sent, open rate, reply rate, click rate.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 6: Apply the Winner",
        isStep: 'true',
      },
      {
        content: `Once you have statistically meaningful results (generally after at least 100 sends per variant):<br/><br/>
          &nbsp; 1. Go to <strong>A/B Test Results</strong> and click <strong>Pick Winner</strong>.<br/>
          &nbsp; 2. Select the winning variant.<br/>
          &nbsp; 3. SalesTarget.ai will switch all remaining and future sends in that campaign to the winning version.<br/><br/>
          <strong>Tip:</strong> Don't pick a winner too early. Let each variant send to at least 100 prospects before drawing conclusions.
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "ceo-8",
    title: "How to Use Inbox Rotation",
    updated: "Updated April 2026",
    content: `Inbox Rotation lets you spread your campaign's sending volume across multiple connected email accounts simultaneously. Instead of one account sending all your emails, SalesTarget.ai distributes the load — protecting each account's sender reputation and allowing you to safely send at a much higher volume without triggering spam filters.`,
    features: [
      {
        title: "Why Inbox Rotation Matters",
        isHeading: 'true',
      },
      {
        content: `Every email provider imposes sending limits and monitors volume patterns. Inbox Rotation solves this by:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Distributing daily volume</strong> across multiple accounts so no single sender hits limits<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Protecting deliverability</strong> by keeping each account's sending behavior within safe thresholds<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Scaling outreach</strong> to much larger audiences than a single account could handle<br/><br/>
          <strong>Example:</strong> If each account safely sends 50 emails per day, rotating across 5 accounts gives you 250 emails per day — from the same campaign.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 1: Connect Multiple Email Accounts",
        isStep: 'true',
      },
      {
        content: `Before setting up rotation, make sure you have at least two email accounts connected in SalesTarget.ai.<br/><br/>
          &nbsp; 1. Go to <strong>Cold Email Outreach</strong> → <strong>Settings</strong> → <strong>Email Accounts</strong>.<br/>
          &nbsp; 2. Connect each additional account (Gmail, Outlook, or SMTP).<br/>
          &nbsp; 3. Ensure each account has completed or is actively running <strong>Email Warm-up</strong> before adding it to a rotation.<br/><br/>
          <strong>Important:</strong> Never add a cold, un-warmed account to a rotation. A poor-reputation account can drag down the deliverability of your entire campaign.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Enable Inbox Rotation on a Campaign",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Cold Email Outreach</strong> → <strong>Campaigns</strong> and open or create a campaign.<br/>
          &nbsp; 2. In the <strong>Sending Account</strong> section, click <strong>Enable Inbox Rotation</strong>.<br/>
          &nbsp; 3. Select all the accounts you want to include in the rotation pool.<br/>
          &nbsp; 4. Set the <strong>daily sending limit per account</strong> — SalesTarget.ai will distribute emails evenly across accounts up to each account's limit.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 3: Set Rotation Logic",
        isStep: 'true',
      },
      {
        isTable: true,
        headers: ["Option", "How it works"],
        rows: [
          ["Round Robin", "Emails are distributed evenly across all accounts in sequence"],
          ["Weighted", "You assign a percentage of sends to each account (e.g., 60% from Account A, 40% from Account B)"],
        ],
      },
      {
        content: `<strong>Recommended for most teams:</strong> Use <strong>Round Robin</strong> for equal distribution. Use <strong>Weighted</strong> if some accounts have stronger reputations and you want them to carry more of the load.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 4: Monitor Rotation Performance",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to the <strong>Campaign Dashboard</strong>.<br/>
          &nbsp; 2. Click the <strong>Sending Accounts</strong> tab to see a breakdown of how many emails each account has sent.<br/>
          &nbsp; 3. Monitor open and reply rates per account — a significant drop in one account's performance may indicate a deliverability issue with that specific sender.
        `,
        isParagraph: 'true',
      },
      {
        title: "Best Practices for Inbox Rotation",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Warm up every account</strong> before adding it to a rotation — never add a fresh account directly<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Use separate domains</strong> where possible — rotating across accounts on different domains provides the strongest protection<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Keep daily limits conservative</strong> — it's safer to send less and maintain reputation than to push limits and get flagged<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Monitor spam rates</strong> per account and remove any account whose spam rate rises above 3%
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "ceo-9",
    title: "How to Validate Emails",
    updated: "Updated April 2026",
    content: `Email validation is the process of verifying that an email address is real, active, and deliverable before you send to it. Running validation before launching a campaign protects your sender reputation, reduces bounce rates, and keeps your account in good standing with email providers.`,
    features: [
      {
        title: "Why Email Validation Matters",
        isHeading: 'true',
      },
      {
        content: `Every email that bounces is a signal to email providers that your sending practices may be poor. Too many bounces — especially hard bounces — can result in your account being flagged, throttled, or blacklisted.<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Hard bounce:</strong> The email address does not exist or the domain is invalid. Always remove these.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Soft bounce:</strong> A temporary delivery issue (e.g., full inbox). Less critical but worth monitoring.<br/><br/>
          A healthy campaign should maintain a <strong>bounce rate below 2%</strong>.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 1: Validate Leads Before Adding to a Campaign",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Cold Email Outreach</strong> → <strong>Email Validation</strong> from the left sidebar, or access it from within your campaign setup.<br/>
          &nbsp; 2. Click <strong>Validate a List</strong>.<br/>
          &nbsp; 3. Upload your lead list as a CSV — or select a saved list from Lead Explorer.<br/>
          &nbsp; 4. Click <strong>Start Validation</strong>.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Review Validation Results",
        isStep: 'true',
      },
      {
        isTable: true,
        headers: ["Status", "Meaning", "What to do"],
        rows: [
          ["Valid", "Email is verified and deliverable", "Safe to send"],
          ["Invalid", "Email address does not exist or domain is inactive", "Remove from campaign"],
          ["Catch-All", "Domain accepts all emails regardless of whether the address exists", "Use with caution — send at your own risk"],
          ["Unknown", "Could not be verified either way", "Remove or treat as risky"],
          ["Disposable", "A temporary or throwaway email address", "Remove from campaign"],
        ],
      },
      {
        stepTitle: "Step 3: Export or Filter the Cleaned List",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. After validation, click <strong>Filter by Status</strong>.<br/>
          &nbsp; 2. Select <strong>Valid</strong> only to get your clean, sendable list.<br/>
          &nbsp; 3. Click <strong>Export</strong> to download the clean list as a CSV — or click <strong>Send to Campaign</strong> to push the validated leads directly into a campaign.
        `,
        isParagraph: 'true',
      },
      {
        title: "Validation Within a Campaign",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Open your campaign and go to the <strong>Leads</strong> tab.<br/>
          &nbsp; 2. Click <strong>Validate All Emails</strong>.<br/>
          &nbsp; 3. SalesTarget.ai will flag any leads with invalid or risky email addresses.<br/>
          &nbsp; 4. Use the <strong>Filter</strong> option to show only problematic leads.<br/>
          &nbsp; 5. Remove or skip them before launching.
        `,
        isParagraph: 'true',
      },
      {
        title: "Best Practices",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Always validate before a new campaign</strong> — especially for lists sourced from outside Lead Explorer<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Re-validate old lists</strong> — email addresses go stale over time; a list from 6+ months ago should be re-validated before use<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Remove Catch-All and Unknown addresses</strong> from high-volume campaigns — they're not worth the deliverability risk<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Never send to Invalid addresses</strong> — even a small number of hard bounces can damage your sender reputation quickly
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "ceo-10",
    title: "How to Use AI Email Writing",
    updated: "Updated April 2026",
    content: `AI Email Writing in SalesTarget.ai helps you write high-quality cold emails faster. Instead of staring at a blank page, you describe your goal and target audience, and the AI generates a ready-to-use email — which you can then edit, refine, or use as-is.`,
    features: [
      {
        title: "What AI Email Writing Can Do",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Generate a full cold email</strong> from a short prompt describing your product and audience<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Write follow-up emails</strong> that naturally continue the conversation from a previous step<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Rewrite or improve</strong> an email you've already drafted<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Generate subject line variations</strong> to test against each other<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Adjust tone</strong> — formal, casual, direct, consultative, and more<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Generate a full sequence</strong> — all steps written at once based on your campaign goal
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 1: Open the AI Email Writer",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Cold Email Outreach</strong> → <strong>Campaigns</strong> and open or create a campaign.<br/>
          &nbsp; 2. In the sequence builder, click on any email step.<br/>
          &nbsp; 3. In the email editor, click the <strong>AI Write</strong> button (the AI icon in the toolbar).<br/>
          &nbsp; 4. The AI Email Writer panel will open on the right side.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Describe Your Campaign",
        isStep: 'true',
      },
      {
        isTable: true,
        headers: ["Field", "Example"],
        rows: [
          ["Your product / service", "\"A sales engagement platform that automates cold email and LinkedIn outreach\""],
          ["Target audience", "\"VP of Sales and Sales Directors at B2B SaaS companies with 50–500 employees\""],
          ["Goal of this email", "\"Book a 15-minute discovery call\""],
          ["Tone", "Casual / Professional / Direct / Consultative"],
          ["Key value proposition", "\"Helps sales teams book 3x more meetings without increasing headcount\""],
        ],
      },
      {
        stepTitle: "Step 3: Generate the Email",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Click <strong>Generate</strong>.<br/>
          &nbsp; 2. The AI will produce a complete email — subject line and body — based on your inputs.<br/>
          &nbsp; 3. Review the output. You can <strong>use it as-is</strong>, <strong>regenerate</strong> for a fresh version, or <strong>edit directly</strong> — paste it into the editor and adjust to your voice.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 4: Refine with Follow-up Prompts",
        isStep: 'true',
      },
      {
        content: `If the first output isn't quite right, you can refine it by adding instructions:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> "Make it shorter — no more than 5 sentences"<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> "Make the opening more personalized — reference their industry"<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> "Change the CTA to ask if they're open to a quick email exchange instead of a call"<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> "Make the tone more casual and conversational"
        `,
        isParagraph: 'true',
      },
      {
        title: "Generate a Full Sequence with AI",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. In the sequence builder, click <strong>Generate Full Sequence with AI</strong>.<br/>
          &nbsp; 2. Fill in your campaign context (product, audience, goal, tone).<br/>
          &nbsp; 3. Specify how many steps you want (e.g., 4-step sequence over 14 days).<br/>
          &nbsp; 4. Click <strong>Generate</strong>.<br/>
          &nbsp; 5. The AI will produce all emails and suggested delays for each step.<br/>
          &nbsp; 6. Review and edit each step before launching.
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "ceo-11",
    title: "How to Manage Unsubscribes",
    updated: "Updated April 2026",
    content: `Unsubscribe management in SalesTarget.ai ensures that prospects who opt out of your emails are automatically removed from your campaigns and never contacted again. This keeps your outreach compliant, protects your sender reputation, and maintains trust with your audience.`,
    features: [
      {
        title: "How Unsubscribes Work in SalesTarget.ai",
        isHeading: 'true',
      },
      {
        content: `Every email sent through Cold Email Outreach includes an unsubscribe link by default. When a prospect clicks it:<br/><br/>
          &nbsp; 1. They are immediately removed from the active campaign<br/>
          &nbsp; 2. Their email address is added to your <strong>Suppression List</strong><br/>
          &nbsp; 3. All future campaigns will automatically skip anyone on the suppression list — no manual action needed<br/><br/>
          This process is fully automatic. You do not need to manually manage opt-outs.
        `,
        isParagraph: 'true',
      },
      {
        title: "Customize the Unsubscribe Link Text",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Cold Email Outreach</strong> → <strong>Settings</strong> → <strong>Unsubscribe Settings</strong>.<br/>
          &nbsp; 2. Under <strong>Link Text</strong>, edit the default text (e.g., "Unsubscribe" → "Opt out of emails").<br/>
          &nbsp; 3. Click <strong>Save</strong>.<br/><br/>
          <strong>Important:</strong> The unsubscribe link cannot be removed from emails. It is required to maintain compliance with CAN-SPAM and GDPR.
        `,
        isParagraph: 'true',
      },
      {
        title: "Viewing and Managing Your Suppression List",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Cold Email Outreach</strong> → <strong>Suppression List</strong>.<br/>
          &nbsp; 2. You'll see all suppressed email addresses along with: the date they unsubscribed, which campaign triggered the unsubscribe, and whether they were manually added or opted out via link.
        `,
        isParagraph: 'true',
      },
      {
        title: "Manually Add Addresses to the Suppression List",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Suppression List</strong> → <strong>Add Manually</strong>.<br/>
          &nbsp; 2. Enter the email address or paste a list of addresses.<br/>
          &nbsp; 3. Click <strong>Add to Suppression List</strong>.
        `,
        isParagraph: 'true',
      },
      {
        title: "Import a Suppression List",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Suppression List</strong> → <strong>Import</strong>.<br/>
          &nbsp; 2. Upload a CSV with the email addresses to suppress.<br/>
          &nbsp; 3. Click <strong>Import</strong>. All imported addresses will be suppressed from all future campaigns immediately.
        `,
        isParagraph: 'true',
      },
      {
        title: "Suppression at the Domain Level",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Suppression List</strong> → <strong>Domain Suppression</strong>.<br/>
          &nbsp; 2. Enter the domain you want to suppress (e.g., <code>acmecorp.com</code>).<br/>
          &nbsp; 3. Click <strong>Add Domain</strong>. All email addresses at that domain will be excluded from future campaigns.
        `,
        isParagraph: 'true',
      },
      {
        title: "Compliance Note",
        isHeading: 'true',
      },
      {
        content: `SalesTarget.ai's unsubscribe system is designed to support compliance with major email regulations:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>CAN-SPAM (US)</strong> — Requires a clear opt-out mechanism in every commercial email<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>GDPR (EU)</strong> — Requires that consent can be withdrawn at any time<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>CASL (Canada)</strong> — Requires an unsubscribe mechanism and prompt removal upon request<br/><br/>
          SalesTarget.ai processes unsubscribes immediately — there is no delay between a prospect opting out and being removed from active sequences.
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "ceo-12",
    title: "How to Read Your Analytics & Reports",
    updated: "Updated April 2026",
    content: `The Analytics dashboard in Cold Email Outreach gives you a real-time view of how your campaigns are performing. Understanding these metrics helps you identify what's working, what needs improvement, and where to focus your optimization efforts.`,
    features: [
      {
        title: "Accessing Your Analytics",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Cold Email Outreach</strong> from the left sidebar.<br/>
          &nbsp; 2. Click <strong>Analytics</strong> for overall performance across all campaigns — or open a specific campaign and click the <strong>Analytics</strong> tab for campaign-level data.
        `,
        isParagraph: 'true',
      },
      {
        title: "Key Metrics Explained",
        isHeading: 'true',
      },
      {
        title: "📤 Emails Sent",
        isHeading: 'true',
      },
      {
        content: `The total number of emails successfully sent from your campaign, across all steps and all sending accounts.`,
        isParagraph: 'true',
      },
      {
        title: "📬 Delivery Rate",
        isHeading: 'true',
      },
      {
        content: `The percentage of sent emails that were successfully delivered to the recipient's inbox (not bounced).<br/><strong>Formula:</strong> Emails Delivered ÷ Emails Sent × 100`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Benchmark", "What it means"],
        rows: [
          ["Above 95%", "Excellent deliverability"],
          ["90% – 95%", "Good — minor issues to review"],
          ["Below 90%", "Poor — check list quality and email validation"],
        ],
      },
      {
        title: "📂 Open Rate",
        isHeading: 'true',
      },
      {
        content: `The percentage of delivered emails that were opened by the recipient.<br/><strong>Formula:</strong> Emails Opened ÷ Emails Delivered × 100`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Benchmark", "What it means"],
        rows: [
          ["Above 40%", "Strong — your subject lines are working"],
          ["20% – 40%", "Average — test new subject lines"],
          ["Below 20%", "Low — prioritize subject line A/B testing"],
        ],
      },
      {
        title: "💬 Reply Rate",
        isHeading: 'true',
      },
      {
        content: `The percentage of delivered emails that received a reply — this is the most important metric for cold email.<br/><strong>Formula:</strong> Replies ÷ Emails Delivered × 100`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Benchmark", "What it means"],
        rows: [
          ["Above 5%", "Excellent — your messaging and targeting are strong"],
          ["2% – 5%", "Good — solid performance for cold outreach"],
          ["Below 2%", "Low — review your copy, targeting, or offer"],
        ],
      },
      {
        title: "⛔ Bounce Rate",
        isHeading: 'true',
      },
      {
        content: `The percentage of emails that could not be delivered.<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Hard bounces</strong> — invalid addresses. Remove these immediately.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Soft bounces</strong> — temporary issues (full inbox, server error). Monitor these.<br/><br/>
          <strong>Keep your bounce rate below 2%.</strong> Above this threshold, your sender reputation is at risk.
        `,
        isParagraph: 'true',
      },
      {
        title: "🚫 Unsubscribe Rate",
        isHeading: 'true',
      },
      {
        content: `The percentage of recipients who clicked the unsubscribe link. An unsubscribe rate below <strong>0.5%</strong> is healthy. A spike in unsubscribes usually signals that your emails are reaching the wrong audience or the messaging is too aggressive.`,
        isParagraph: 'true',
      },
      {
        title: "Sequence Step Performance",
        isHeading: 'true',
      },
      {
        content: `For campaigns with multiple steps, you can view performance broken down by each email in the sequence:<br/><br/>
          &nbsp; 1. Open a campaign and click the <strong>Analytics</strong> tab.<br/>
          &nbsp; 2. Scroll to the <strong>Sequence Performance</strong> section.<br/>
          &nbsp; 3. You'll see open rate, reply rate, and click rate for each individual step.
        `,
        isParagraph: 'true',
      },
      {
        title: "Campaign Comparison",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Analytics</strong> → <strong>Campaign Overview</strong>.<br/>
          &nbsp; 2. Select the campaigns you want to compare using the filter at the top.<br/>
          &nbsp; 3. View side-by-side metrics for each campaign.
        `,
        isParagraph: 'true',
      },
      {
        title: "Exporting Reports",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>Analytics</strong> and apply your desired filters (date range, campaigns, etc.).<br/>
          &nbsp; 2. Click <strong>Export Report</strong> at the top right.<br/>
          &nbsp; 3. Download as <strong>CSV</strong> or <strong>PDF</strong>.
        `,
        isParagraph: 'true',
      },
    ],
  },

];

export default mockArticles;
