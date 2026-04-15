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

  // ─── LinkedIn Outreach ───────────────────────────────────────────────────

  {
    id: "lio-1",
    title: "What is LinkedIn Outreach?",
    updated: "Updated April 2026",
    content: `
      LinkedIn Outreach is SalesTarget.ai's LinkedIn automation tool that lets you run personalized, multi-step outreach campaigns directly on LinkedIn — at scale, without spending hours doing it manually. From sending connection requests to following up with message sequences, LinkedIn Outreach automates every touchpoint of your LinkedIn prospecting workflow.
    `,
    features: [
      {
        title: "What it lets you do",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Automate connection requests</strong> with personalized notes to your target prospects<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Send message sequences</strong> that follow up automatically if a prospect doesn't respond<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Send InMail</strong> to reach prospects you're not yet connected with<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Visit profiles automatically</strong> to trigger curiosity and get prospects to look at your profile back<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Follow prospects and engage with their posts</strong> to warm them up before reaching out<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Personalize every message</strong> using dynamic variables pulled from your lead data<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Write messages faster</strong> with AI-powered message writing<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Monitor campaign performance</strong> with detailed analytics
        `,
        isParagraph: 'true',
      },
      {
        title: "How it fits into SalesTarget.ai",
        isHeading: 'true',
      },
      {
        content: `LinkedIn Outreach plugs directly into your existing SalesTarget.ai workflow:`,
        isParagraph: 'true',
      },
      {
        content: `
          &nbsp; 1. <strong>Find leads</strong> in Lead Explorer using People Search<br/>
          &nbsp; 2. <strong>Enrich them</strong> to get LinkedIn profile URLs<br/>
          &nbsp; 3. <strong>Send leads to LinkedIn Outreach</strong> — directly from your saved list<br/>
          &nbsp; 4. <strong>Launch a campaign</strong> and let automation handle every LinkedIn touchpoint
        `,
        isParagraph: 'true',
      },
      {
        title: "How LinkedIn Outreach Works",
        isHeading: 'true',
      },
      {
        content: `
          LinkedIn Outreach runs through <strong>your own LinkedIn account</strong> — meaning all actions (connection requests, messages, profile visits) appear to come from you personally. This keeps your outreach authentic and human, while automation handles the volume and timing.<br/><br/>
          Because it operates through your account, SalesTarget.ai builds in <strong>safety limits</strong> that mirror natural human LinkedIn activity — protecting your account from being flagged or restricted by LinkedIn.
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "lio-2",
    title: "How to Connect Your LinkedIn Account",
    updated: "Updated April 2026",
    content: `
      To run LinkedIn campaigns through SalesTarget.ai, you need to connect your LinkedIn account. All outreach actions — connection requests, messages, profile visits, and more — are sent directly from your personal LinkedIn account.
    `,
    features: [
      {
        title: "Before You Connect",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> You must have an active LinkedIn account in good standing<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>LinkedIn Premium or Sales Navigator</strong> is recommended for higher daily limits and InMail access, but is not required for basic outreach<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Only <strong>one LinkedIn account</strong> can be connected per SalesTarget.ai user seat<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Your LinkedIn account must not currently be restricted or flagged by LinkedIn
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 1: Go to LinkedIn Account Settings",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Log in to your <strong>SalesTarget.ai</strong> account.<br/>
          &nbsp; 2. From the left sidebar, click <strong>LinkedIn Outreach</strong>.<br/>
          &nbsp; 3. Click <strong>Settings → LinkedIn Account</strong>.<br/>
          &nbsp; 4. Click <strong>Connect LinkedIn Account</strong>.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Log In to LinkedIn",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. A LinkedIn login window will appear.<br/>
          &nbsp; 2. Enter your <strong>LinkedIn email address and password</strong>.<br/>
          &nbsp; 3. Click <strong>Sign In</strong>.<br/><br/>
          <strong>Note:</strong> SalesTarget.ai connects to LinkedIn via a secure browser session. Your credentials are encrypted and never stored in plain text.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 3: Complete Any LinkedIn Verification",
        isStep: 'true',
      },
      {
        content: `
          LinkedIn may prompt you with an additional verification step such as:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Email verification</strong> — LinkedIn sends a code to your registered email<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Phone verification</strong> — LinkedIn sends a code to your registered phone number<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>CAPTCHA</strong> — a visual challenge to confirm you're human<br/><br/>
          Complete the verification step as prompted — this is LinkedIn's standard security process and is expected when connecting from a new location or device.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 4: Confirm the Connection",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Once verified, you'll be redirected back to SalesTarget.ai.<br/>
          &nbsp; 2. Your LinkedIn account will appear as <strong>Connected</strong> under <strong>Settings → LinkedIn Account</strong>.<br/>
          &nbsp; 3. You'll see your LinkedIn profile name, profile photo, and connection count confirmed in the dashboard.
        `,
        isParagraph: 'true',
      },
      {
        title: "Managing Your LinkedIn Connection",
        isHeading: 'true',
      },
      {
        content: `
          From <strong>Settings → LinkedIn Account</strong> you can:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>View connection status</strong> — see if your account is active and connected<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Reconnect</strong> — if your session has expired, click Reconnect and log in again<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Disconnect</strong> — remove the LinkedIn account from SalesTarget.ai at any time
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "lio-3",
    title: "LinkedIn Account Safety & Daily Limits",
    updated: "Updated April 2026",
    content: `
      Because LinkedIn Outreach runs through your personal LinkedIn account, protecting that account is a top priority. LinkedIn monitors accounts for unusual activity — and accounts that send too many requests or messages too quickly can be warned, restricted, or permanently banned. SalesTarget.ai has built-in safety controls to keep your account safe while you scale your outreach.
    `,
    features: [
      {
        title: "How LinkedIn Detects Automation",
        isHeading: 'true',
      },
      {
        content: `
          LinkedIn looks for patterns that don't match natural human behaviour:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Sending hundreds of connection requests in a single day<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Messaging dozens of people within minutes of each other<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Visiting hundreds of profiles in rapid succession<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Activity happening outside of normal business hours<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Consistent activity at machine-like intervals (e.g., exactly every 5 minutes)<br/><br/>
          SalesTarget.ai is designed to mimic natural human behaviour — spacing out actions, randomizing timing, and staying within LinkedIn's acceptable activity thresholds.
        `,
        isParagraph: 'true',
      },
      {
        title: "SalesTarget.ai Safety Features",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Safety Feature", "How it protects you"],
        rows: [
          ["Daily action limits", "Caps the number of each action type per day, per account"],
          ["Randomized timing", "Actions are spaced at randomized intervals, not fixed machine-like schedules"],
          ["Smart sending windows", "Actions only run during business hours in your timezone by default"],
          ["Activity ramp-up", "For new accounts, SalesTarget.ai starts with lower limits and gradually increases"],
          ["Auto-pause on warning", "If LinkedIn sends a warning to your account, campaigns pause automatically"],
        ],
      },
      {
        title: "Recommended Daily Limits",
        isHeading: 'true',
      },
      {
        content: `These are the recommended safe limits per LinkedIn account per day. SalesTarget.ai defaults to these ranges — you can lower them but we strongly advise not exceeding them.`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Action", "Safe Daily Limit"],
        rows: [
          ["Connection Requests", "20 – 30 per day"],
          ["Messages (to connections)", "50 – 80 per day"],
          ["InMail Messages", "10 – 20 per day"],
          ["Profile Visits", "80 – 100 per day"],
          ["Follows", "30 – 50 per day"],
          ["Post Likes / Engagements", "30 – 50 per day"],
        ],
      },
      {
        content: `
          <strong>For new LinkedIn accounts (less than 3 months old):</strong> Start at the lower end of each range and increase gradually over 4–6 weeks. New accounts are more closely monitored by LinkedIn.<br/><br/>
          <strong>For LinkedIn Premium or Sales Navigator users:</strong> You may be able to push slightly higher limits, particularly for InMail. However, the limits above are the safe baseline for all account types.
        `,
        isParagraph: 'true',
      },
      {
        title: "How to Configure Your Safety Limits",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>LinkedIn Outreach → Settings → Safety Limits</strong>.<br/>
          &nbsp; 2. You will see sliders for each action type.<br/>
          &nbsp; 3. Adjust the daily maximum for each action — staying within the recommended ranges above.<br/>
          &nbsp; 4. Toggle <strong>Smart Sending Window</strong> on — this restricts activity to business hours (default: Monday–Friday, 8am–6pm in your local timezone).<br/>
          &nbsp; 5. Toggle <strong>Randomize Action Timing</strong> on — this ensures actions are spaced naturally rather than at fixed intervals.<br/>
          &nbsp; 6. Click <strong>Save</strong>.
        `,
        isParagraph: 'true',
      },
      {
        title: "Activity Ramp-Up for New Accounts",
        isHeading: 'true',
      },
      {
        content: `
          If you're starting with a fresh or relatively new LinkedIn account:<br/><br/>
          &nbsp; 1. Go to <strong>Settings → Safety Limits → Enable Ramp-Up Mode</strong>.<br/>
          &nbsp; 2. Select your account age (e.g., less than 1 month, 1–3 months, 3–6 months).<br/>
          &nbsp; 3. SalesTarget.ai will automatically start with lower daily limits and gradually increase them over the ramp-up period — reducing the risk of triggering LinkedIn's spam detection.
        `,
        isParagraph: 'true',
      },
      {
        title: "Warning Signs to Watch For",
        isHeading: 'true',
      },
      {
        content: `
          Even with safety limits in place, know the warning signs of a LinkedIn account under scrutiny:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> LinkedIn sends you an email asking you to verify your identity<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> You're prompted to complete a CAPTCHA more frequently than usual<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Your connection request acceptance rate drops significantly<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> You receive a message from LinkedIn about "unusual activity"<br/><br/>
          If any of these occur:<br/><br/>
          &nbsp; 1. <strong>Pause all campaigns immediately</strong> from <strong>LinkedIn Outreach → Campaigns</strong>.<br/>
          &nbsp; 2. Log in to LinkedIn directly and follow any instructions they provide.<br/>
          &nbsp; 3. Reduce your daily limits before resuming.<br/>
          &nbsp; 4. Wait 48–72 hours before restarting campaigns.
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "lio-4",
    title: "How to Create a LinkedIn Campaign",
    updated: "Updated April 2026",
    content: `
      A LinkedIn campaign in SalesTarget.ai is a multi-step automated workflow that guides a prospect through a series of LinkedIn touchpoints — from a profile visit and follow, all the way through to a connection request and message sequence. This article walks you through setting up a campaign from start to finish.
    `,
    features: [
      {
        stepTitle: "Step 1: Go to LinkedIn Outreach",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Log in to your <strong>SalesTarget.ai</strong> account.<br/>
          &nbsp; 2. From the left sidebar, click <strong>LinkedIn Outreach</strong>.<br/>
          &nbsp; 3. Click <strong>Campaigns → New Campaign</strong>.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Name Your Campaign",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Enter a clear campaign name (e.g., <em>SaaS VP Sales – US – April 2026</em>).<br/>
          &nbsp; 2. Confirm your connected LinkedIn account is selected as the sender.<br/>
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
          Choose how you want to add prospects to this campaign:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>From Lead Explorer</strong> — select a saved list that includes LinkedIn profile URLs<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Import a CSV</strong> — upload a file that includes LinkedIn profile URLs as a column<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Paste LinkedIn URLs</strong> — manually paste a list of LinkedIn profile URLs<br/><br/>
          <strong>Important:</strong> LinkedIn Outreach requires a <strong>LinkedIn profile URL</strong> for each prospect. Make sure your leads have been enriched with LinkedIn URLs in Lead Explorer before adding them to a campaign.<br/><br/>
          Map the columns from your lead data to the campaign fields (First Name, Last Name, LinkedIn URL, Company, etc.) and click <strong>Next</strong>.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 4: Build Your Campaign Sequence",
        isStep: 'true',
      },
      {
        content: `This is where you define the actions SalesTarget.ai will take for each prospect, and in what order. Think of it as a workflow — each step runs automatically, one after the other.`,
        isParagraph: 'true',
      },
      {
        title: "Available Campaign Steps",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Step Type", "What it does"],
        rows: [
          ["Profile Visit", "Visits the prospect's LinkedIn profile — they get notified and may visit yours back"],
          ["Follow", "Follows the prospect on LinkedIn"],
          ["Connection Request", "Sends a connection request with an optional personalized note"],
          ["Message", "Sends a direct LinkedIn message (to accepted connections)"],
          ["InMail", "Sends a paid InMail message (no connection required)"],
          ["Post Like / Engage", "Likes a recent post from the prospect"],
          ["Delay", "Adds a waiting period between steps (e.g., wait 2 days before the next action)"],
        ],
      },
      {
        title: "Recommended Campaign Flow for Cold Outreach",
        isHeading: 'true',
      },
      {
        content: `
          <div style="background:#1e293b;padding:12px 16px;border-radius:6px;font-family:monospace;font-size:0.8em;color:#94a3b8;margin:8px 0">
            Day 1 &nbsp;→ Profile Visit<br/>
            Day 2 &nbsp;→ Follow<br/>
            Day 3 &nbsp;→ Post Like (if they have a recent post)<br/>
            Day 4 &nbsp;→ Connection Request (with personalized note)<br/>
            Day 7 &nbsp;→ Message (after connection is accepted)<br/>
            Day 10 → Follow-up Message (if no reply)<br/>
            Day 14 → Final Follow-up Message
          </div>
          To build this:<br/><br/>
          &nbsp; 1. Click <strong>Add Step</strong> and select the step type.<br/>
          &nbsp; 2. Configure each step (write message copy, set delays, add conditions).<br/>
          &nbsp; 3. Drag and drop steps to reorder them if needed.<br/>
          &nbsp; 4. Continue until your full sequence is built.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 5: Configure Campaign Settings",
        isStep: 'true',
      },
      {
        isTable: true,
        headers: ["Setting", "Description"],
        rows: [
          ["Active hours", "Days and hours during which actions run (default: Mon–Fri, 8am–6pm)"],
          ["Stop on reply", "Stops the sequence automatically when a prospect replies"],
          ["Stop on connection accepted", "Skips steps that require connection if the prospect was already a connection"],
          ["Daily action limits", "How many actions this campaign can perform per day"],
        ],
      },
      {
        stepTitle: "Step 6: Review and Launch",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Click <strong>Review</strong> to see a full summary — leads, sequence steps, and settings.<br/>
          &nbsp; 2. Check that your LinkedIn account is correctly connected.<br/>
          &nbsp; 3. Choose <strong>Launch Now</strong> or <strong>Schedule for Later</strong>.<br/>
          &nbsp; 4. Click <strong>Launch Campaign</strong>.<br/><br/>
          Your campaign is now live. SalesTarget.ai will work through your lead list, performing each action in sequence at natural, randomized intervals.
        `,
        isParagraph: 'true',
      },
      {
        title: "Monitoring Your Campaign",
        isHeading: 'true',
      },
      {
        content: `
          Once live, track progress from the <strong>Campaign Dashboard</strong>:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Total leads in campaign<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Actions completed (visits, follows, connection requests sent, messages sent)<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Connection acceptance rate<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Reply rate<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Leads who have completed the full sequence
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "lio-5",
    title: "How to Automate Connection Requests",
    updated: "Updated April 2026",
    content: `
      The Connection Request step in LinkedIn Outreach automatically sends a LinkedIn connection request to each prospect in your campaign. You can include a personalized note with each request — and with SalesTarget.ai's personalization variables, every note can feel individually written even when sent at scale.
    `,
    features: [
      {
        title: "How Connection Requests Work on LinkedIn",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> LinkedIn allows you to send a connection request with an optional note of up to <strong>300 characters</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> If the prospect accepts, they become a 1st-degree connection — unlocking the ability to message them directly for free<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> If the prospect ignores or declines the request, no further connection-based steps will trigger for that prospect<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> LinkedIn limits the number of connection requests you can send — SalesTarget.ai enforces safe daily limits automatically
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 1: Add a Connection Request Step to Your Campaign",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Open your campaign in <strong>LinkedIn Outreach → Campaigns</strong>.<br/>
          &nbsp; 2. In the sequence builder, click <strong>Add Step → Connection Request</strong>.<br/>
          &nbsp; 3. The Connection Request step editor will open.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Write Your Connection Note",
        isStep: 'true',
      },
      {
        content: `
          The connection note is your first impression — keep it short, relevant, and human. You have <strong>300 characters maximum</strong>.<br/><br/>
          <strong>Best practices for connection notes:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Lead with relevance</strong> — mention something specific to them (their role, industry, or a recent post)<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>No hard pitch</strong> — the connection note is not the place to sell. Save that for the follow-up message.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Keep it short</strong> — 1–2 sentences is enough. Long notes often feel like spam.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Use personalization variables</strong> — make it feel 1-to-1<br/><br/>
          <strong>Example note:</strong><br/>
          <em>Hi {{first_name}}, I came across your profile while researching {{industry}} leaders — would love to connect and share ideas.</em><br/><br/>
          <strong>Example note (referencing their content):</strong><br/>
          <em>Hi {{first_name}}, been following {{company_name}}'s growth — impressive work. Would love to connect!</em><br/><br/>
          To use personalization variables, type <strong>{{</strong> in the note field and select from the available variables.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 3: Set the Delay Before This Step",
        isStep: 'true',
      },
      {
        content: `
          Connection requests work best when they're not the very first action. Consider warming up the prospect first:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Add a <strong>Profile Visit</strong> step 1–2 days before the connection request<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Add a <strong>Follow</strong> step 1 day before the connection request<br/><br/>
          This way, the prospect has already seen your name before you ask to connect — increasing acceptance rates significantly.<br/><br/>
          In the step settings, set <strong>Wait X days after previous step</strong> before this action runs. Click <strong>Save Step</strong>.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 4: Configure What Happens After the Request",
        isStep: 'true',
      },
      {
        content: `After a connection request is sent, the campaign needs to know what to do next based on whether the prospect accepts:`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Condition", "What SalesTarget.ai does"],
        rows: [
          ["Connection accepted", "Proceeds to the next step (e.g., sends a message)"],
          ["Not accepted within X days", "Either moves to an InMail step or ends the sequence for that prospect"],
        ],
      },
      {
        content: `
          &nbsp; 1. Click on the step that follows the connection request.<br/>
          &nbsp; 2. Set the <strong>condition</strong> — e.g., "Only run this step if connection was accepted."<br/>
          &nbsp; 3. Optionally, add an <strong>InMail step</strong> as a fallback for prospects who don't accept.
        `,
        isParagraph: 'true',
      },
      {
        title: "Tracking Connection Requests",
        isHeading: 'true',
      },
      {
        content: `
          From the <strong>Campaign Dashboard</strong>, you can monitor:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Requests Sent</strong> — total connection requests sent by the campaign<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Accepted</strong> — how many have been accepted (and your acceptance rate %)<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Pending</strong> — requests still awaiting a response<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Withdrawn</strong> — any requests automatically withdrawn after being pending too long<br/><br/>
          <strong>Healthy connection acceptance rate:</strong> 25–40% is typical for cold outreach. Rates above 40% indicate strong ICP targeting and a compelling note.
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "lio-6",
    title: "How to Set Up Message Sequences",
    updated: "Updated April 2026",
    content: `
      Once a prospect accepts your connection request, SalesTarget.ai can automatically send them a series of LinkedIn direct messages — a message sequence. Each message fires at the delay you set, and the sequence stops automatically the moment the prospect replies.
    `,
    features: [
      {
        title: "How LinkedIn Message Sequences Work",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Messages are sent as <strong>LinkedIn direct messages</strong> — they appear in the prospect's LinkedIn inbox just like a normal message from you<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> The sequence only sends messages to <strong>1st-degree connections</strong> (prospects who have accepted your connection request)<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> If the prospect replies at any point, the sequence stops immediately<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Messages are sent during your configured <strong>active hours</strong> at randomized intervals to appear natural
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 1: Add Message Steps to Your Campaign",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Open your campaign in <strong>LinkedIn Outreach → Campaigns</strong>.<br/>
          &nbsp; 2. In the sequence builder, after your Connection Request step, click <strong>Add Step → Message</strong>.<br/>
          &nbsp; 3. The message editor will open.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Write Your First Message",
        isStep: 'true',
      },
      {
        content: `
          Your first message after a connection is accepted should:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Thank them for connecting</strong> (optional but warms the tone)<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Introduce your value</strong> — briefly explain what you do and why it's relevant to them<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>End with a soft, low-friction ask</strong> — avoid asking for a call immediately<br/><br/>
          <strong>Example first message:</strong><br/>
          <em>Hi {{first_name}}, thanks for connecting! I work with {{industry}} teams at companies like {{company_name}} to help them book more meetings without adding headcount. Would love to share how — open to a quick exchange here on LinkedIn?</em><br/><br/>
          Use personalization variables by typing <strong>{{</strong> in the message field and selecting from the list.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 3: Set the Delay for the First Message",
        isStep: 'true',
      },
      {
        content: `
          Set how many days after the connection is accepted before the first message sends:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Recommended:</strong> 1 day after connection accepted — gives the prospect time to see the connection notification before a message arrives<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Avoid messaging instantly after connection — it can feel automated and rushed<br/><br/>
          In the step settings, set <strong>Wait X days after connection accepted</strong> and click <strong>Save</strong>.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 4: Add Follow-up Messages",
        isStep: 'true',
      },
      {
        content: `
          If the prospect doesn't reply to the first message, add follow-up messages to continue the sequence:<br/><br/>
          &nbsp; 1. Click <strong>Add Step → Message</strong> again after the first message step.<br/>
          &nbsp; 2. Write a follow-up — shorter than the first, with a different angle or a fresh value proposition.<br/>
          &nbsp; 3. Set the delay (e.g., 3–5 days after the previous message).<br/>
          &nbsp; 4. Repeat for additional follow-ups.
        `,
        isParagraph: 'true',
      },
      {
        title: "Recommended Message Sequence Structure",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Step", "Timing", "Content"],
        rows: [
          ["Message 1", "Day 1 after connection", "Introduction + soft value proposition"],
          ["Message 2", "Day 4", "Follow-up with a relevant insight, case study, or resource"],
          ["Message 3", "Day 9", "Low-friction CTA — \"Worth a quick chat?\""],
          ["Message 4", "Day 14", "Final message — close the loop politely"],
        ],
      },
      {
        stepTitle: "Step 5: Set Stop Conditions",
        isStep: 'true',
      },
      {
        content: `
          In the campaign settings, ensure the following are enabled:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Stop on reply</strong> — sequence stops the moment a prospect responds<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Skip prospects who are already messaging</strong> — avoids messaging prospects who have an open conversation with you outside of this campaign
        `,
        isParagraph: 'true',
      },
      {
        title: "Message Length Best Practices",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Message in Sequence", "Recommended Length"],
        rows: [
          ["First message", "3–5 sentences"],
          ["Follow-up messages", "2–3 sentences"],
          ["Final follow-up", "1–2 sentences"],
        ],
      },
      {
        content: `LinkedIn is not email — shorter, conversational messages consistently outperform long formal ones. Write the way you'd naturally message someone on LinkedIn, not the way you'd write a business email.`,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "lio-7",
    title: "How to Send InMail Outreach",
    updated: "Updated April 2026",
    content: `
      InMail is LinkedIn's paid messaging feature that lets you send a message to any LinkedIn member — even if you're not connected with them. In SalesTarget.ai, InMail steps can be added to your campaigns as a way to reach prospects who haven't accepted your connection request, or as an alternative to connection-based outreach entirely.
    `,
    features: [
      {
        title: "What is InMail?",
        isHeading: 'true',
      },
      {
        content: `
          InMail messages are delivered directly to a prospect's LinkedIn inbox — bypassing the need for a prior connection. Unlike regular LinkedIn messages, InMail:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Can be sent to <strong>any LinkedIn member</strong>, regardless of connection status<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Is available to users with <strong>LinkedIn Premium, Sales Navigator, or Recruiter</strong> accounts<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Has a limited monthly credit allocation — the number of InMails you can send per month depends on your LinkedIn subscription tier<br/><br/>
          <strong>Note:</strong> InMail availability in SalesTarget.ai depends on your LinkedIn account type. A LinkedIn Premium or Sales Navigator subscription is required to send InMails.
        `,
        isParagraph: 'true',
      },
      {
        title: "InMail vs. Connection Request + Message — When to Use Each",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Approach", "Best used when"],
        rows: [
          ["Connection Request → Message", "You want to build a genuine connection first; best for longer-term relationship building"],
          ["InMail", "Prospect hasn't accepted your connection request; you want to reach senior decision-makers directly; you have Sales Navigator"],
        ],
      },
      {
        stepTitle: "Step 1: Add an InMail Step to Your Campaign",
        isStep: 'true',
      },
      {
        content: `InMail can be used in two ways within a campaign:`,
        isParagraph: 'true',
      },
      {
        title: "As a Fallback (Recommended)",
        isHeading: 'true',
      },
      {
        content: `
          Use InMail as a fallback step for prospects who did not accept your connection request:<br/><br/>
          &nbsp; 1. Open your campaign in <strong>LinkedIn Outreach → Campaigns</strong>.<br/>
          &nbsp; 2. After your <strong>Connection Request</strong> step, click <strong>Add Step → InMail</strong>.<br/>
          &nbsp; 3. Set the condition: <strong>Only run if connection request was not accepted within X days</strong>.<br/>
          &nbsp; 4. Write your InMail subject and message body.<br/>
          &nbsp; 5. Set the delay and click <strong>Save Step</strong>.
        `,
        isParagraph: 'true',
      },
      {
        title: "As a Standalone Step",
        isHeading: 'true',
      },
      {
        content: `
          For direct InMail-only outreach without a connection request:<br/><br/>
          &nbsp; 1. In the sequence builder, click <strong>Add Step → InMail</strong> as your first or primary outreach step.<br/>
          &nbsp; 2. Write your InMail subject line and message.<br/>
          &nbsp; 3. Set your delay and proceed.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Write Your InMail",
        isStep: 'true',
      },
      {
        content: `
          InMail allows a <strong>subject line</strong> (up to 200 characters) and a <strong>message body</strong> (up to 1,900 characters).<br/><br/>
          <strong>Subject Line Tips:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Keep it short and specific — under 8 words works best<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Reference something relevant to their role or company<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Avoid clickbait or overly salesy language<br/><br/>
          <strong>Subject line examples:</strong><br/>
          <em>Quick question about {{company_name}}'s sales process</em><br/>
          <em>Idea for {{company_name}}'s outbound team</em><br/>
          <em>{{first_name}} — worth 10 minutes?</em><br/><br/>
          <strong>Message Body Tips:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Get to the point quickly — InMail recipients know it's outreach<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Personalize the opening with a relevant reference to their work or company<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Keep the body under 150 words — shorter InMails consistently get higher response rates<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> End with a clear, low-friction ask
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 3: Monitor InMail Performance",
        isStep: 'true',
      },
      {
        content: `
          From the <strong>Campaign Dashboard → InMail</strong> tab, you can track:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> InMails sent<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> InMail open rate<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> InMail reply rate<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Credits remaining (based on your LinkedIn subscription)<br/><br/>
          <strong>LinkedIn InMail credit tip:</strong> LinkedIn refunds InMail credits when a prospect replies to your message — so engaging InMails effectively cost you nothing in the long run.
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "lio-8",
    title: "How to Automate Profile Visits",
    updated: "Updated April 2026",
    content: `
      Profile Visit automation in SalesTarget.ai automatically visits a prospect's LinkedIn profile on your behalf. This triggers a LinkedIn notification to the prospect — telling them that you viewed their profile. Many prospects will then visit your profile back out of curiosity, creating a warm touchpoint before any direct outreach begins.
    `,
    features: [
      {
        title: "Why Profile Visits Work",
        isHeading: 'true',
      },
      {
        content: `
          A profile visit is one of the lowest-friction ways to get on a prospect's radar. When someone sees that a relevant person viewed their profile, they're naturally curious — and many will click through to see who you are.<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>No action required from the prospect</strong> — they simply receive a notification<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>No character limits or copy to write</strong> — profile visits are silent touchpoints<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>High volume possible</strong> — you can visit up to 80–100 profiles per day safely<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Best used as the opening step</strong> in any LinkedIn campaign sequence
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 1: Add a Profile Visit Step to Your Campaign",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Open your campaign in <strong>LinkedIn Outreach → Campaigns</strong>.<br/>
          &nbsp; 2. In the sequence builder, click <strong>Add Step → Profile Visit</strong>.<br/>
          &nbsp; 3. In the step settings, confirm:<br/>
          &nbsp; &nbsp; &nbsp;&nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Timing:</strong> Set as Day 1 of the sequence (the first action)<br/>
          &nbsp; &nbsp; &nbsp;&nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Delay after previous step:</strong> If this is not the first step, set the delay in days<br/>
          &nbsp; 4. Click <strong>Save Step</strong>.<br/><br/>
          No message copy is needed — the profile visit action runs automatically using your connected LinkedIn account.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Position It Correctly in Your Sequence",
        isStep: 'true',
      },
      {
        content: `
          Profile visits work best at the beginning of a campaign sequence — before any other outreach action. The recommended placement is:<br/><br/>
          <div style="background:#1e293b;padding:12px 16px;border-radius:6px;font-family:monospace;font-size:0.8em;color:#94a3b8;margin:8px 0">
            Day 1 → Profile Visit &nbsp;&nbsp;&nbsp;&nbsp;← Silent touchpoint, gets you on their radar<br/>
            Day 2 → Follow &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← Another soft signal of interest<br/>
            Day 3 → Post Like &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← Warms them up further<br/>
            Day 4 → Connection Request ← They already know your name by now
          </div>
          By the time your connection request arrives, the prospect has already seen your name 2–3 times. This familiarity significantly improves connection acceptance rates.
        `,
        isParagraph: 'true',
      },
      {
        title: "How LinkedIn Handles Profile Visit Notifications",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Your LinkedIn Account Type", "What the prospect sees"],
        rows: [
          ["Free LinkedIn", "Your profile view may show as \"LinkedIn Member\" (anonymous) to some users"],
          ["LinkedIn Premium / Sales Navigator", "Your full name and profile are always visible to the prospect"],
        ],
      },
      {
        content: `<strong>Recommendation:</strong> For maximum impact from profile visits, use a LinkedIn Premium or Sales Navigator account. If you're on a free account, some prospects may see the visit as anonymous — reducing the warm-up effect.`,
        isParagraph: 'true',
      },
      {
        title: "Tracking Profile Visit Activity",
        isHeading: 'true',
      },
      {
        content: `
          From the <strong>Campaign Dashboard</strong>, you can see:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Profile visits completed</strong> — total visits performed by the campaign<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Profile visit rate</strong> — percentage of leads who have been visited so far<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Prospects who visited back</strong> — where LinkedIn data allows, SalesTarget.ai can track when a prospect viewed your profile after you visited theirs
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "lio-9",
    title: "How to Automate Follows & Post Engagement",
    updated: "Updated April 2026",
    content: `
      Follow and Post Like automation in SalesTarget.ai lets you automatically follow prospects on LinkedIn and engage with their recent posts — creating additional warm touchpoints before you send a connection request or message. These subtle signals of genuine interest make your subsequent outreach feel far more natural and less intrusive.
    `,
    features: [
      {
        title: "Why Follows & Post Engagement Matter",
        isHeading: 'true',
      },
      {
        content: `
          Most cold outreach fails because it arrives with zero context — the prospect has no idea who you are. Follows and post likes solve this by building name recognition before the ask:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Following a prospect</strong> notifies them and puts your name in their activity feed<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Liking their post</strong> sends them a notification and shows you're paying attention to their content<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Together, these actions create a <strong>warm familiarity effect</strong> — by the time you send a connection request, you're no longer a complete stranger
        `,
        isParagraph: 'true',
      },
      {
        title: "Follow Automation",
        isHeading: 'true',
      },
      {
        content: `When a Follow step runs, SalesTarget.ai automatically follows the prospect's LinkedIn profile on your behalf. They receive a notification that you're now following them.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "How to Add a Follow Step",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Open your campaign in <strong>LinkedIn Outreach → Campaigns</strong>.<br/>
          &nbsp; 2. In the sequence builder, click <strong>Add Step → Follow</strong>.<br/>
          &nbsp; 3. Set the <strong>delay</strong> — recommended placement is Day 2, after a Profile Visit on Day 1.<br/>
          &nbsp; 4. Click <strong>Save Step</strong>.<br/><br/>
          SalesTarget.ai caps follow actions at <strong>30–50 per day</strong> by default. You can adjust this under <strong>Settings → Safety Limits</strong>.
        `,
        isParagraph: 'true',
      },
      {
        title: "Post Like / Engage Automation",
        isHeading: 'true',
      },
      {
        content: `When a Post Like step runs, SalesTarget.ai visits the prospect's LinkedIn profile, finds their most recent post, and automatically likes it on your behalf. The prospect receives a notification that you engaged with their content.`,
        isParagraph: 'true',
      },
      {
        stepTitle: "How to Add a Post Like Step",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. In the sequence builder, click <strong>Add Step → Post Like / Engage</strong>.<br/>
          &nbsp; 2. Set the <strong>delay</strong> — recommended placement is Day 3, after a Profile Visit and Follow.<br/>
          &nbsp; 3. Configure the engagement settings:
        `,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Setting", "Description"],
        rows: [
          ["Like most recent post", "Likes the prospect's most recently published post"],
          ["Skip if no recent post", "If the prospect hasn't posted in the last 30 days, skips this step and moves to the next"],
          ["Engage with articles too", "Includes LinkedIn articles in addition to regular posts"],
        ],
      },
      {
        content: `
          &nbsp; 4. Click <strong>Save Step</strong>.<br/><br/>
          If the <strong>Skip if no recent post</strong> option is enabled and the prospect has no post in the last 30 days, SalesTarget.ai will skip the Post Like step and proceed to the next step in the sequence automatically — no manual intervention needed.
        `,
        isParagraph: 'true',
      },
      {
        title: "Recommended Sequence Using Both Actions",
        isHeading: 'true',
      },
      {
        content: `
          <div style="background:#1e293b;padding:12px 16px;border-radius:6px;font-family:monospace;font-size:0.8em;color:#94a3b8;margin:8px 0">
            Day 1 → Profile Visit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← Silent view — gets you noticed<br/>
            Day 2 → Follow &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← Follow notification — your name appears again<br/>
            Day 3 → Post Like &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← Engagement notification — shows genuine interest<br/>
            Day 4 → Connection Request &nbsp;&nbsp;&nbsp;← Warm ask — they've seen you 3 times already<br/>
            Day 7 → Message (if accepted) ← Conversation starts with a warm prospect
          </div>
          By stacking these touchpoints before any direct outreach, you create a multi-signal warm-up that dramatically improves connection and reply rates compared to cold, single-step outreach.
        `,
        isParagraph: 'true',
      },
      {
        title: "Tracking Follow & Engagement Activity",
        isHeading: 'true',
      },
      {
        content: `
          From the <strong>Campaign Dashboard</strong>, you can track:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Follows completed</strong> — total follows sent by the campaign<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Post likes completed</strong> — total post engagements performed<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Steps skipped</strong> — prospects who had no recent post and had the step skipped
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "lio-10",
    title: "How to Use Personalization & Custom Variables",
    updated: "Updated April 2026",
    content: `
      Personalization in LinkedIn Outreach lets you insert dynamic variables into your connection notes, messages, and InMails — so every message feels individually written, even when it's sent to hundreds of prospects. This article covers how to use the default variables available in every campaign, and how to create your own custom variables for deeper personalization.
    `,
    features: [
      {
        title: "What are Personalization Variables?",
        isHeading: 'true',
      },
      {
        content: `
          Personalization variables are placeholders you add to your message templates. When a message sends, SalesTarget.ai replaces each placeholder with the actual data from that prospect's record.<br/><br/>
          <strong>Template:</strong> Hi <em>{{first_name}}</em>, I noticed <em>{{company_name}}</em> is expanding — congrats on the growth!<br/><br/>
          <strong>What the prospect receives:</strong> Hi Sarah, I noticed Acme Corp is expanding — congrats on the growth!
        `,
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
          ["{{job_title}}", "Prospect's job title"],
          ["{{company_name}}", "Prospect's company name"],
          ["{{industry}}", "Prospect's industry"],
          ["{{city}}", "Prospect's city"],
          ["{{country}}", "Prospect's country"],
          ["{{sender_name}}", "Your name (the sender)"],
          ["{{sender_company}}", "Your company name"],
          ["{{sender_title}}", "Your job title"],
        ],
      },
      {
        title: "Custom Variables",
        isHeading: 'true',
      },
      {
        content: `
          Custom variables let you add any field you need that isn't covered by the defaults.<br/><br/>
          <strong>Example use cases:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>{{icebreaker}}</em> — a unique, research-based opening line for each prospect<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>{{recent_post_topic}}</em> — the topic of their most recent LinkedIn post<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>{{mutual_connection}}</em> — a shared contact you both know<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>{{pain_point}}</em> — a specific challenge relevant to their role or industry<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>{{case_study}}</em> — a relevant customer success story based on their sector
        `,
        isParagraph: 'true',
      },
      {
        title: "How to Create a Custom Variable",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Open your campaign and click <strong>Edit Sequence</strong>.<br/>
          &nbsp; 2. In the message editor, type <strong>{{</strong> to open the variable picker.<br/>
          &nbsp; 3. Click <strong>+ Create Custom Variable</strong> and enter a name (e.g., <em>icebreaker</em>).<br/>
          &nbsp; 4. Add a <strong>Fallback Value</strong> — what gets inserted if the field is empty (e.g., <em>there</em> for {{first_name}}).<br/>
          &nbsp; 5. Save the variable. It will now appear in your variable list.
        `,
        isParagraph: 'true',
      },
      {
        title: "Populate Custom Variables in Your Lead List",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to your campaign's <strong>Leads</strong> tab.<br/>
          &nbsp; 2. You'll see a column for each custom variable you've created.<br/>
          &nbsp; 3. Fill in the value for each prospect — either manually or by importing a CSV with the custom variable columns pre-filled.
        `,
        isParagraph: 'true',
      },
      {
        title: "Using Variables in Connection Notes",
        isHeading: 'true',
      },
      {
        content: `
          Connection notes have a <strong>300-character limit</strong> — keep your variable usage focused and concise.<br/><br/>
          <strong>Example:</strong><br/>
          <em>Hi {{first_name}}, came across your profile while exploring {{industry}} leaders — love what {{company_name}} is doing. Would love to connect!</em><br/><br/>
          <strong>Tip:</strong> Always set a fallback for <em>{{first_name}}</em> (e.g., "there") in case the first name field is missing for any prospect.
        `,
        isParagraph: 'true',
      },
      {
        title: "Using Variables in LinkedIn Messages and InMails",
        isHeading: 'true',
      },
      {
        content: `
          Variables work in both the subject line and body of InMails, and in all LinkedIn direct messages.<br/><br/>
          <strong>Message example:</strong><br/>
          <em>Hi {{first_name}}, thanks for connecting! I work with {{industry}} teams to help them scale outbound without increasing headcount. Given what {{company_name}} is building, I thought this might be relevant — would love to share more.</em><br/><br/>
          <strong>InMail subject example:</strong><br/>
          <em>{{first_name}} — idea for {{company_name}}'s outbound team</em>
        `,
        isParagraph: 'true',
      },
      {
        title: "Always Set Fallback Values",
        isHeading: 'true',
      },
      {
        content: `A fallback value is used when a variable field is empty for a particular prospect. Missing fallbacks can cause broken-looking messages.`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Variable", "Suggested Fallback"],
        rows: [
          ["{{first_name}}", "there"],
          ["{{company_name}}", "your company"],
          ["{{industry}}", "your industry"],
          ["{{city}}", "your area"],
          ["{{icebreaker}}", "I came across your profile"],
        ],
      },
      {
        content: `To set a fallback, click on the variable in the message editor and enter a value in the <strong>Fallback</strong> field.`,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "lio-11",
    title: "How to Use AI Message Writing",
    updated: "Updated April 2026",
    content: `
      AI Message Writing in SalesTarget.ai helps you write high-quality LinkedIn connection notes, messages, and InMails faster. Instead of writing from scratch, you describe your target audience and goal — and the AI generates ready-to-use copy that you can edit, refine, or use as-is.
    `,
    features: [
      {
        title: "What AI Message Writing Can Do for LinkedIn",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Write connection request notes</strong> that are short, relevant, and personalized<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Write LinkedIn direct messages</strong> for any step in your sequence<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Write InMail subject lines and body copy</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Generate a full message sequence</strong> — all steps at once<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Rewrite or improve</strong> messages you've already drafted<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Adjust tone</strong> — casual, professional, consultative, direct<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Suggest personalization hooks</strong> based on the prospect's role or industry
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 1: Open the AI Message Writer",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>LinkedIn Outreach → Campaigns</strong> and open or create a campaign.<br/>
          &nbsp; 2. In the sequence builder, click on any <strong>Message</strong>, <strong>Connection Request</strong>, or <strong>InMail</strong> step.<br/>
          &nbsp; 3. In the message editor, click the <strong>AI Write</strong> button (AI icon in the toolbar).<br/>
          &nbsp; 4. The AI Message Writer panel will open.
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 2: Describe Your Campaign",
        isStep: 'true',
      },
      {
        content: `Provide context so the AI generates relevant, targeted copy:`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Field", "Example"],
        rows: [
          ["Your product / service", "\"A LinkedIn and cold email outreach automation platform\""],
          ["Target audience", "\"VP of Sales and Sales Directors at B2B SaaS companies\""],
          ["Goal of this message", "\"Start a conversation — get them to reply\""],
          ["Tone", "Casual / Professional / Direct / Consultative"],
          ["Key value proposition", "\"Helps sales teams book 3x more meetings without increasing headcount\""],
        ],
      },
      {
        stepTitle: "Step 3: Select the Message Type",
        isStep: 'true',
      },
      {
        content: `
          Tell the AI which type of LinkedIn copy you need:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Connection Note</strong> — short (under 300 characters), no pitch<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>First Message</strong> — warm intro after connection is accepted<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Follow-up Message</strong> — shorter, different angle from the first<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>InMail</strong> — includes a subject line + longer body<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Full Sequence</strong> — generates all message steps at once
        `,
        isParagraph: 'true',
      },
      {
        stepTitle: "Step 4: Generate and Refine",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Click <strong>Generate</strong>.<br/>
          &nbsp; 2. Review the output — the AI will produce copy appropriate for the message type and channel.<br/>
          &nbsp; 3. If you want adjustments, type a refinement instruction:<br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Make it shorter — LinkedIn messages should be under 5 sentences"</em><br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Remove the call to action — just open a conversation"</em><br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Make the tone more casual"</em><br/>
          &nbsp; &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Add a reference to their industry in the opening line"</em><br/>
          &nbsp; 4. Click <strong>Refine</strong> to update the copy based on your instruction.<br/>
          &nbsp; 5. Once happy, paste the result into the message editor or click <strong>Use This</strong>.
        `,
        isParagraph: 'true',
      },
      {
        title: "Generate a Full LinkedIn Sequence with AI",
        isHeading: 'true',
      },
      {
        content: `
          Instead of writing each step individually, generate your entire campaign message sequence at once:<br/><br/>
          &nbsp; 1. In the sequence builder, click <strong>Generate Full Sequence with AI</strong>.<br/>
          &nbsp; 2. Fill in your campaign context (product, audience, goal, tone).<br/>
          &nbsp; 3. Specify how many message steps you want and over how many days.<br/>
          &nbsp; 4. Click <strong>Generate</strong>.<br/>
          &nbsp; 5. The AI will produce copy for every message step and suggest delays between each.<br/>
          &nbsp; 6. Review, edit, and launch.
        `,
        isParagraph: 'true',
      },
      {
        title: "Tips for Better AI Output on LinkedIn",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Keep LinkedIn tone conversational</strong> — tell the AI "write this as a natural LinkedIn message, not a formal email"<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Specify the character limit for connection notes</strong> — remind the AI it's a 300-character note, not a full message<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Avoid jargon</strong> — ask the AI to keep it simple and human<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Always review before sending</strong> — AI output is a strong starting point, but your own voice and edits will always improve the result<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Use personalization variables</strong> — after generating copy, add {{first_name}} and {{company_name}} where relevant to make it feel 1-to-1
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "lio-12",
    title: "How to Read Your Analytics & Reports",
    updated: "Updated April 2026",
    content: `
      The Analytics dashboard in LinkedIn Outreach gives you a real-time view of how your campaigns and individual actions are performing. Understanding these metrics helps you identify what's working, where prospects are dropping off, and how to improve your results over time.
    `,
    features: [
      {
        stepTitle: "Accessing Your Analytics",
        isStep: 'true',
      },
      {
        content: `
          &nbsp; 1. Go to <strong>LinkedIn Outreach</strong> from the left sidebar.<br/>
          &nbsp; 2. Click <strong>Analytics</strong> for an overview across all campaigns — or open a specific campaign and click the <strong>Analytics</strong> tab for campaign-level data.
        `,
        isParagraph: 'true',
      },
      {
        title: "Campaign-Level Metrics",
        isHeading: 'true',
      },
      {
        title: "Total Leads in Campaign",
        isHeading: 'true',
      },
      {
        content: `The total number of prospects enrolled in the campaign across all stages of the sequence.`,
        isParagraph: 'true',
      },
      {
        title: "Connection Request Metrics",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Metric", "What it means"],
        rows: [
          ["Requests Sent", "Total connection requests sent by the campaign"],
          ["Accepted", "Number of requests accepted by prospects"],
          ["Acceptance Rate", "Accepted ÷ Sent × 100"],
          ["Pending", "Requests still awaiting a response"],
        ],
      },
      {
        content: `<strong>Benchmark — Acceptance Rate:</strong>`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Rate", "What it means"],
        rows: [
          ["Above 40%", "Excellent — strong targeting and compelling connection note"],
          ["25% – 40%", "Good — healthy for cold outreach"],
          ["Below 25%", "Low — review your ICP targeting and connection note copy"],
        ],
      },
      {
        title: "Message Metrics",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Metric", "What it means"],
        rows: [
          ["Messages Sent", "Total direct messages sent across all message steps"],
          ["Replies Received", "Number of prospects who replied to any message"],
          ["Reply Rate", "Replies ÷ Messages Sent × 100"],
        ],
      },
      {
        content: `<strong>Benchmark — Reply Rate:</strong>`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Rate", "What it means"],
        rows: [
          ["Above 10%", "Excellent — strong messaging and targeting"],
          ["5% – 10%", "Good — solid LinkedIn outreach performance"],
          ["Below 5%", "Low — review message copy, sequence timing, and audience fit"],
        ],
      },
      {
        title: "InMail Metrics",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Metric", "What it means"],
        rows: [
          ["InMails Sent", "Total InMail messages sent"],
          ["InMail Reply Rate", "Replies ÷ InMails Sent × 100"],
          ["Credits Used", "InMail credits consumed from your LinkedIn account"],
          ["Credits Refunded", "Credits returned for InMails that received a reply"],
        ],
      },
      {
        title: "Profile Visit Metrics",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Metric", "What it means"],
        rows: [
          ["Profile Visits Completed", "Total profile visits performed by the campaign"],
          ["Prospects Who Visited Back", "Prospects who viewed your profile after you visited theirs"],
        ],
      },
      {
        title: "Follow & Engagement Metrics",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Metric", "What it means"],
        rows: [
          ["Follows Completed", "Total follow actions performed"],
          ["Post Likes Completed", "Total post engagement actions performed"],
          ["Steps Skipped", "Prospects who had no recent post and had the step skipped"],
        ],
      },
      {
        title: "Sequence Step Breakdown",
        isHeading: 'true',
      },
      {
        content: `
          To see how each individual step in your campaign is performing:<br/><br/>
          &nbsp; 1. Open a campaign and click the <strong>Analytics</strong> tab.<br/>
          &nbsp; 2. Scroll to the <strong>Sequence Step Performance</strong> section.<br/>
          &nbsp; 3. You'll see metrics for each step — how many prospects reached that step, and how many moved past it.<br/><br/>
          This lets you identify exactly where prospects are dropping off in your sequence — so you can optimize the specific step that's underperforming.
        `,
        isParagraph: 'true',
      },
      {
        title: "Campaign Comparison",
        isHeading: 'true',
      },
      {
        content: `
          To compare performance across multiple campaigns:<br/><br/>
          &nbsp; 1. Go to <strong>Analytics → Campaign Overview</strong>.<br/>
          &nbsp; 2. Select the campaigns you want to compare using the filter at the top.<br/>
          &nbsp; 3. View side-by-side metrics — useful for identifying which audience, message style, or sequence structure is working best.
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

  // ─── Co-pilot ─────────────────────────────────────────────────────────────

  {
    id: "cp-0",
    title: "What is the SalesTarget.ai Co-pilot?",
    updated: "Updated April 2026",
    content: `The SalesTarget.ai Co-pilot is your AI-powered sales assistant built directly into the platform. Instead of navigating menus and clicking through settings, you simply tell the Co-pilot what you want to do — in plain English — and it handles it instantly.`,
    features: [
      {
        title: "How to Access the Co-pilot",
        isHeading: 'true',
      },
      {
        content: `The Co-pilot is available in two ways:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Dedicated Co-pilot page</strong> — click <strong>Co-pilot</strong> from the left sidebar to open the full Co-pilot workspace<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Floating assistant</strong> — the Co-pilot icon is accessible from anywhere in the platform so you can use it without leaving the page you're on
        `,
        isParagraph: 'true',
      },
      {
        title: "How to Use the Co-pilot",
        isHeading: 'true',
      },
      {
        content: `<strong>1. Type naturally</strong><br/>Just describe what you want as if you're messaging a colleague:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Create a new campaign called SaaS VPs April 2026"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me my best performing campaign from last month"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Find VP of Sales leads in the US at SaaS companies"</em>
        `,
        isParagraph: 'true',
      },
      {
        content: `<strong>2. Use suggested commands</strong><br/>The Co-pilot surfaces suggested commands based on the page you're on and your recent activity. Click any suggestion to run it instantly — no typing required.`,
        isParagraph: 'true',
      },
      {
        title: "What the Co-pilot Can Do",
        isHeading: 'true',
      },
      {
        content: `The Co-pilot has 14 built-in actions across four areas:`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Area", "Actions"],
        rows: [
          ["Campaigns", "Create Campaign, Update Sequence, Get My Campaigns, Add List to Campaign"],
          ["Leads", "Search Leads, Create List, Get Lists, Add Leads to List"],
          ["CRM", "Query Meetings, Query Deals, Query Tasks, Create / Update / Assign Tasks"],
          ["Analytics", "Weekly Analytics, Best Campaign"],
        ],
      },
      {
        title: "Tips for Best Results",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Use exact names</strong> — when referring to an existing campaign or list, use its exact name<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Be specific</strong> — the more detail you give, the more accurate the result<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Check confirmations</strong> — the Co-pilot always confirms what it did after each action<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Use suggestions</strong> — if unsure what to type, click a suggested command to see how requests are phrased
        `,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "cp-1",
    title: "Co-pilot: Create a Campaign",
    updated: "Updated April 2026",
    content: `The <strong>Create Campaign</strong> action lets you create a new email outreach campaign instantly by simply telling the Co-pilot the campaign name — without navigating to the Campaigns section manually.`,
    features: [
      {
        title: "What It Does",
        isHeading: 'true',
      },
      {
        content: `Creates a new campaign in Cold Email Outreach with the name you specify. Once created, the campaign is ready for you to add leads and build your sequence.`,
        isParagraph: 'true',
      },
      {
        title: "How to Use It",
        isHeading: 'true',
      },
      {
        content: `Type your request naturally in the Co-pilot chat:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Create a new campaign called SaaS VPs April 2026"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Set up a campaign named Fintech Founders US"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Make a new campaign called Q2 Outreach — Enterprise"</em><br/><br/>
          The Co-pilot will create the campaign immediately and confirm the name.
        `,
        isParagraph: 'true',
      },
      {
        title: "What Happens Next",
        isHeading: 'true',
      },
      {
        content: `After the Co-pilot creates the campaign:<br/><br/>
          &nbsp; 1. Go to <strong>Cold Email Outreach → Campaigns</strong> to find the newly created campaign<br/>
          &nbsp; 2. Add your leads — either from a saved list or by importing a CSV<br/>
          &nbsp; 3. Build your email sequence using the sequence builder<br/>
          &nbsp; 4. Configure your sending settings and launch<br/><br/>
          <strong>Tip:</strong> You can also ask the Co-pilot to add a list to the campaign right away — <em>"Create a campaign called SaaS VPs and add my April leads list to it"</em>
        `,
        isParagraph: 'true',
      },
      {
        title: "Related Co-pilot Actions",
        isHeading: 'true',
      },
      {
        content: `Add List to Campaign &nbsp;|&nbsp; Update Campaign Sequence &nbsp;|&nbsp; Get My Campaigns`,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "cp-3",
    title: "Co-pilot: Create a List",
    updated: "Updated April 2026",
    content: `The <strong>Create List</strong> action lets you create a new named leads list instantly through the Co-pilot — without navigating to Lead Explorer manually.`,
    features: [
      {
        title: "What It Does",
        isHeading: 'true',
      },
      {
        content: `Creates a new, empty leads list in Lead Explorer with the name you specify. Once created, the list is ready for you to add leads to or attach to a campaign.`,
        isParagraph: 'true',
      },
      {
        title: "How to Use It",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Create a list called SaaS Founders US Q2"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Make a new leads list named Fintech VPs Europe"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Create a list called April Enterprise Prospects"</em><br/><br/>
          The Co-pilot will create the list immediately and confirm it's ready under <strong>Lead Explorer → My Lists</strong>.
        `,
        isParagraph: 'true',
      },
      {
        title: "What to Do After Creating a List",
        isHeading: 'true',
      },
      {
        content: `Once the list is created you can ask the Co-pilot to populate it right away:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Add my search results to the SaaS Founders US Q2 list"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Search for CTOs in fintech and add them to my new list"</em><br/><br/>
          Or navigate to <strong>Lead Explorer → My Lists</strong> to manage the list manually.
        `,
        isParagraph: 'true',
      },
      {
        title: "Naming Tips",
        isHeading: 'true',
      },
      {
        content: `Give your lists clear, descriptive names so they're easy to find later. A good naming convention includes the <strong>audience</strong>, <strong>region</strong>, and <strong>date or quarter</strong>.`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Good list name", "Vague list name"],
        rows: [
          ["SaaS VPs – US – April 2026", "List 1"],
          ["Fintech CTOs – UK – Q2", "New leads"],
          ["Enterprise Accounts – Series B", "My list"],
        ],
      },
      {
        title: "Related Co-pilot Actions",
        isHeading: 'true',
      },
      {
        content: `Search Leads &nbsp;|&nbsp; Add Leads to a List &nbsp;|&nbsp; Get All Lists`,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "cp-4",
    title: "Co-pilot: Get All Lists",
    updated: "Updated April 2026",
    content: `The <strong>Get Lists</strong> action fetches all your available leads lists — giving you a quick overview of every list you have, how many leads are in each, and when they were last updated.`,
    features: [
      {
        title: "What It Does",
        isHeading: 'true',
      },
      {
        content: `Returns a summary of all your saved leads lists from Lead Explorer, displayed directly in the Co-pilot chat. No need to navigate to My Lists manually.`,
        isParagraph: 'true',
      },
      {
        title: "How to Use It",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me all my lists"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"What lists do I currently have?"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"How many leads are in my SaaS CTOs list?"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"List all my saved lead lists"</em><br/><br/>
          The Co-pilot will return a summary showing each list name and its lead count.
        `,
        isParagraph: 'true',
      },
      {
        title: "When to Use It",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Before starting a new campaign — to check which lists are ready to use<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Before creating a new list — to avoid duplicating an existing one<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> When you can't remember the exact name of a list — to find it quickly before referencing it in another Co-pilot action
        `,
        isParagraph: 'true',
      },
      {
        title: "What to Do After Reviewing Your Lists",
        isHeading: 'true',
      },
      {
        content: `Once you know what lists you have, follow up with another Co-pilot action:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Add my SaaS VPs list to the April campaign"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Add more leads to my Fintech CTOs list"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Create a new list called Enterprise Accounts Q2"</em>
        `,
        isParagraph: 'true',
      },
      {
        title: "Related Co-pilot Actions",
        isHeading: 'true',
      },
      {
        content: `Create a List &nbsp;|&nbsp; Add Leads to a List &nbsp;|&nbsp; Add List to Campaign`,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "cp-5",
    title: "Co-pilot: Add Leads to a List",
    updated: "Updated April 2026",
    content: `The <strong>Add Leads to List</strong> action adds leads to an existing named list — either from a search result or by specifying the leads you want to include.`,
    features: [
      {
        title: "What It Does",
        isHeading: 'true',
      },
      {
        content: `Takes leads — from a Co-pilot search result or a specified source — and adds them to any existing list in Lead Explorer.`,
        isParagraph: 'true',
      },
      {
        title: "How to Use It",
        isHeading: 'true',
      },
      {
        content: `<strong>After running a search:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Add these leads to my SaaS VPs list"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Save these results to my April Prospects list"</em><br/><br/>
          <strong>Specifying leads directly:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Add the fintech CTOs I searched for earlier to my Q2 list"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Add leads from my last search to the Enterprise Accounts list"</em><br/><br/>
          The Co-pilot will confirm how many leads were added and to which list.
        `,
        isParagraph: 'true',
      },
      {
        title: "Combining Search and Add in One Request",
        isHeading: 'true',
      },
      {
        content: `You can combine a lead search and list addition into a single Co-pilot instruction:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Find VP of Sales contacts in the US at SaaS companies and add them to my April Outreach list"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Search for CTOs in fintech in London and save them to my UK Prospects list"</em><br/><br/>
          The Co-pilot will run the search and add the results to the specified list in one step.
        `,
        isParagraph: 'true',
      },
      {
        title: "What Happens If the List Doesn't Exist Yet",
        isHeading: 'true',
      },
      {
        content: `If you reference a list that doesn't exist, the Co-pilot will let you know. You can then:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Ask it to create the list first — <em>"Create a list called April Outreach first, then add these leads"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Or use the Create a List action before adding leads
        `,
        isParagraph: 'true',
      },
      {
        title: "Related Co-pilot Actions",
        isHeading: 'true',
      },
      {
        content: `Search Leads &nbsp;|&nbsp; Create a List &nbsp;|&nbsp; Get All Lists`,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "cp-6",
    title: "Co-pilot: Update Campaign Sequence",
    updated: "Updated April 2026",
    content: `The <strong>Update Campaign Sequence</strong> action lets you modify the email sequence steps inside an existing campaign — adding, editing, or adjusting steps through a simple natural language instruction.`,
    features: [
      {
        title: "What It Does",
        isHeading: 'true',
      },
      {
        content: `Locates an existing campaign and updates its email sequence based on your instruction — without needing to open the campaign and navigate the sequence builder manually.`,
        isParagraph: 'true',
      },
      {
        title: "How to Use It",
        isHeading: 'true',
      },
      {
        content: `<strong>Adding a new step:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Add a follow-up email on day 5 to my SaaS VPs campaign"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Add a new step to the April Outreach sequence — a final follow-up on day 14"</em><br/><br/>
          <strong>Editing an existing step:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Change the subject line of step 2 in my Q2 campaign to 'Quick question, {{first_name}}'"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Update the call to action in the first email of my Fintech campaign"</em><br/><br/>
          <strong>Adjusting delays:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Change the delay between step 2 and step 3 in my April campaign to 4 days"</em><br/><br/>
          The Co-pilot will locate the campaign and apply the requested changes, then confirm what was updated.
        `,
        isParagraph: 'true',
      },
      {
        title: "What You Can Update",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Element", "Example instruction"],
        rows: [
          ["Add a new step", '"Add a follow-up on day 7"'],
          ["Edit subject line", '"Change the subject line of step 1"'],
          ["Edit email body", '"Update the body of the second email"'],
          ["Change delay", '"Set the delay before step 3 to 5 days"'],
          ["Change CTA", '"Update the call to action in step 2"'],
        ],
      },
      {
        title: "Tip — Be Specific About the Campaign Name",
        isHeading: 'true',
      },
      {
        content: `If you have multiple campaigns, always specify the exact campaign name so the Co-pilot updates the right one:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> ✅ <em>"Update step 2 in my SaaS VPs April 2026 campaign"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> ❌ <em>"Update step 2 in my campaign"</em> — may be ambiguous if you have multiple campaigns
        `,
        isParagraph: 'true',
      },
      {
        title: "Related Co-pilot Actions",
        isHeading: 'true',
      },
      {
        content: `Create a Campaign &nbsp;|&nbsp; Get My Campaigns &nbsp;|&nbsp; Add List to Campaign`,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "cp-7",
    title: "Co-pilot: Get My Campaigns",
    updated: "Updated April 2026",
    content: `The <strong>Get My Campaigns</strong> action fetches and displays a list of all your campaigns — active, paused, completed, and draft — so you can quickly find and act on any campaign without navigating to the Campaigns section.`,
    features: [
      {
        title: "What It Does",
        isHeading: 'true',
      },
      {
        content: `Returns a summary of all your campaigns with their current status, giving you a quick overview of everything running across your Cold Email Outreach workspace.`,
        isParagraph: 'true',
      },
      {
        title: "How to Use It",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me all my campaigns"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"List my active campaigns"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"What campaigns do I currently have running?"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me all paused campaigns"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Do I have any draft campaigns?"</em><br/><br/>
          The Co-pilot returns a summary list of your campaigns with their name and current status.
        `,
        isParagraph: 'true',
      },
      {
        title: "Filtering by Status",
        isHeading: 'true',
      },
      {
        content: `You can ask the Co-pilot to filter campaigns by their current state:`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Status", "Example request"],
        rows: [
          ["Active", '"Show me all active campaigns"'],
          ["Paused", '"Which campaigns are paused?"'],
          ["Completed", '"Show me completed campaigns"'],
          ["Draft", '"List my draft campaigns"'],
          ["All", '"Show me all my campaigns"'],
        ],
      },
      {
        title: "What to Do After Reviewing Your Campaigns",
        isHeading: 'true',
      },
      {
        content: `Follow up with another Co-pilot action directly:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Add my SaaS VPs list to the April Outreach campaign"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Update the sequence in my Q2 Fintech campaign"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me the analytics for my best campaign this month"</em>
        `,
        isParagraph: 'true',
      },
      {
        title: "Related Co-pilot Actions",
        isHeading: 'true',
      },
      {
        content: `Create a Campaign &nbsp;|&nbsp; Update Campaign Sequence &nbsp;|&nbsp; Add List to Campaign`,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "cp-8",
    title: "Co-pilot: Query Meetings",
    updated: "Updated April 2026",
    content: `The <strong>Query Meetings</strong> action searches and filters your CRM meetings based on criteria you specify — such as date, contact, company, or status — and returns the results instantly without opening the CRM manually.`,
    features: [
      {
        title: "What It Does",
        isHeading: 'true',
      },
      {
        content: `Searches through your CRM meeting records and returns a filtered list based on what you ask for. Useful for quickly checking your schedule, finding meetings with specific contacts, or reviewing upcoming or past meetings.`,
        isParagraph: 'true',
      },
      {
        title: "How to Use It",
        isHeading: 'true',
      },
      {
        content: `<strong>By date or time:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me all meetings scheduled for this week"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"What meetings do I have today?"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me meetings coming up in the next 3 days"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"What meetings did I have last week?"</em><br/><br/>
          <strong>By contact or company:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Find meetings with contacts from Acme Corp"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me all meetings with Sarah Johnson"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Do I have any meetings with Fintech companies this month?"</em><br/><br/>
          <strong>By status:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me all upcoming meetings"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"List meetings that have been completed this week"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Find meetings that were cancelled"</em>
        `,
        isParagraph: 'true',
      },
      {
        title: "What the Results Show",
        isHeading: 'true',
      },
      {
        content: `Each meeting in the results will include:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Contact name and company<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Meeting date and time<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Meeting status (upcoming, completed, cancelled)<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Any notes or agenda attached to the meeting
        `,
        isParagraph: 'true',
      },
      {
        title: "What to Do After Reviewing Meetings",
        isHeading: 'true',
      },
      {
        content: `Use the results to take follow-up action directly from the CRM:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Open the contact record to review their full activity history before a meeting<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Add a note or reminder ahead of an upcoming meeting<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Log a call outcome after a meeting has taken place
        `,
        isParagraph: 'true',
      },
      {
        title: "Related Co-pilot Actions",
        isHeading: 'true',
      },
      {
        content: `Query Deals &nbsp;|&nbsp; Query Tasks &nbsp;|&nbsp; Create, Update &amp; Assign Tasks`,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "cp-9",
    title: "Co-pilot: Query Deals",
    updated: "Updated April 2026",
    content: `The <strong>Query Deals</strong> action searches and filters your CRM deals based on stage, value, owner, activity, or any other criteria — giving you an instant view of your pipeline without opening the CRM manually.`,
    features: [
      {
        title: "What It Does",
        isHeading: 'true',
      },
      {
        content: `Searches through your CRM deal records and returns a filtered list based on what you ask for. Use it to check pipeline status, find stalled deals, review high-value opportunities, or get a quick snapshot of where things stand.`,
        isParagraph: 'true',
      },
      {
        title: "How to Use It",
        isHeading: 'true',
      },
      {
        content: `<strong>By pipeline stage:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me all deals in the proposal stage"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"What deals are currently in negotiation?"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"List all deals that are in the discovery stage"</em><br/><br/>
          <strong>By value:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me open deals worth more than $10,000"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"What are my highest value deals this quarter?"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Find deals under $5,000 that are still open"</em><br/><br/>
          <strong>By owner:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me all deals assigned to James"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"What deals does Sarah currently own?"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"List all unassigned deals"</em><br/><br/>
          <strong>By activity:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Find deals that haven't been updated in 2 weeks"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me deals with no activity in the last 10 days"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Which deals are at risk of going cold?"</em><br/><br/>
          <strong>By company or contact:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me all deals with Acme Corp"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Find open deals with contacts from the fintech industry"</em>
        `,
        isParagraph: 'true',
      },
      {
        title: "What the Results Show",
        isHeading: 'true',
      },
      {
        content: `Each deal in the results will include:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Deal name and associated contact or company<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Current pipeline stage<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Deal value<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Assigned owner<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Last activity date
        `,
        isParagraph: 'true',
      },
      {
        title: "What to Do After Reviewing Deals",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Follow up on stalled deals by creating a task — <em>"Create a follow-up task for the Acme Corp deal"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Reassign a deal — <em>"Assign the TechCorp deal to Rachel"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Open the deal record in the CRM for full details
        `,
        isParagraph: 'true',
      },
      {
        title: "Related Co-pilot Actions",
        isHeading: 'true',
      },
      {
        content: `Query Meetings &nbsp;|&nbsp; Query Tasks &nbsp;|&nbsp; Create, Update &amp; Assign Tasks`,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "cp-10",
    title: "Co-pilot: Query Tasks",
    updated: "Updated April 2026",
    content: `The <strong>Query Tasks</strong> action searches and filters your CRM tasks based on status, due date, assignee, or type — giving you an instant view of what needs to be done without opening the CRM task list manually.`,
    features: [
      {
        title: "What It Does",
        isHeading: 'true',
      },
      {
        content: `Searches through your CRM task records and returns a filtered list based on what you ask for. Use it to check what's due today, find overdue tasks, review a team member's workload, or get a quick overview of outstanding follow-ups.`,
        isParagraph: 'true',
      },
      {
        title: "How to Use It",
        isHeading: 'true',
      },
      {
        content: `<strong>By due date:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"What tasks are due today?"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me tasks due this week"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"What's on my task list for tomorrow?"</em><br/><br/>
          <strong>By status:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me all overdue tasks"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"List tasks that haven't been completed yet"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Which tasks are still open?"</em><br/><br/>
          <strong>By assignee:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me all tasks assigned to me"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"What tasks does James have open?"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"List all unassigned tasks"</em><br/><br/>
          <strong>By type:</strong><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me all follow-up tasks"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Find all callback tasks"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"List tasks related to Acme Corp"</em>
        `,
        isParagraph: 'true',
      },
      {
        title: "What the Results Show",
        isHeading: 'true',
      },
      {
        content: `Each task in the results will include:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Task description<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Due date and time<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Assigned team member<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Related contact or deal<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> Current status (open, completed, overdue)
        `,
        isParagraph: 'true',
      },
      {
        title: "Using Query Tasks as a Daily Work Routine",
        isHeading: 'true',
      },
      {
        content: `A fast way to start your day with the Co-pilot:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me all tasks due today"</em> → work through your list<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Mark the Acme Corp follow-up task as complete"</em> → update as you go<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me overdue tasks"</em> → catch anything that slipped<br/><br/>
          This keeps your CRM clean and ensures no follow-up falls through the cracks.
        `,
        isParagraph: 'true',
      },
      {
        title: "Related Co-pilot Actions",
        isHeading: 'true',
      },
      {
        content: `Create, Update &amp; Assign Tasks &nbsp;|&nbsp; Query Meetings &nbsp;|&nbsp; Query Deals`,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "cp-11",
    title: "Co-pilot: Add List to Campaign",
    updated: "Updated April 2026",
    content: `The <strong>Add List to Campaign</strong> action attaches an existing leads list to a campaign — enrolling all the leads in that list into the campaign's email sequence instantly.`,
    features: [
      {
        title: "What It Does",
        isHeading: 'true',
      },
      {
        content: `Connects a saved leads list from Lead Explorer to a specific campaign in Cold Email Outreach. Once attached, the leads in the list are enrolled in the campaign and will begin receiving the sequence when the campaign launches or is already running.`,
        isParagraph: 'true',
      },
      {
        title: "How to Use It",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Add my SaaS VPs list to the April Outreach campaign"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Attach the Fintech Leads list to my Q2 campaign"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Add the Enterprise Prospects list to the SaaS Founders campaign"</em><br/><br/>
          The Co-pilot will confirm which list is being added to which campaign before applying the change.
        `,
        isParagraph: 'true',
      },
      {
        title: "Things to Check Before Adding a List",
        isHeading: 'true',
      },
      {
        content: `Before attaching a list to a campaign, make sure:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>The list has verified emails</strong> — leads without email addresses cannot receive campaign emails. Enrich leads in Lead Explorer first if needed.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>The leads haven't already been contacted</strong> — adding leads who are already in another active campaign may cause duplicate outreach.<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>The campaign is set up</strong> — the campaign should have a sequence built and sending settings configured before leads are added.
        `,
        isParagraph: 'true',
      },
      {
        title: "What Happens After the List Is Attached",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> If the campaign is in <strong>draft</strong> — leads are queued and will start receiving emails when you launch the campaign<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> If the campaign is <strong>active</strong> — leads from the new list will be enrolled immediately and begin receiving emails according to the sequence schedule
        `,
        isParagraph: 'true',
      },
      {
        title: "Related Co-pilot Actions",
        isHeading: 'true',
      },
      {
        content: `Get All Lists &nbsp;|&nbsp; Get My Campaigns &nbsp;|&nbsp; Create a Campaign`,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "cp-12",
    title: "Co-pilot: Create, Update & Assign Tasks",
    updated: "Updated April 2026",
    content: `The <strong>Create, Update &amp; Assign Tasks</strong> action lets you manage CRM tasks entirely through natural language — creating new tasks, updating existing ones, and assigning or reassigning them to team members, all without opening the CRM manually.`,
    features: [
      {
        title: "What It Does",
        isHeading: 'true',
      },
      {
        content: `Handles all task management actions in your CRM through a single Co-pilot instruction:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Create</strong> a new task linked to a contact, deal, or date<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Update</strong> an existing task — change due date, description, or status<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Assign</strong> a task to yourself or a team member<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Mark</strong> a task as complete
        `,
        isParagraph: 'true',
      },
      {
        title: "Creating a Task",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Create a task to follow up with Sarah at Acme Corp on Friday"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Add a task — call James from TechCorp next Monday at 10am"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Create a follow-up reminder for the Fintech deal — due Thursday"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Set a task to send a proposal to the Enterprise Accounts lead by end of week"</em><br/><br/>
          The Co-pilot will create the task and attach it to the relevant contact or deal record in the CRM.
        `,
        isParagraph: 'true',
      },
      {
        title: "Updating a Task",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Mark the Acme Corp follow-up task as complete"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Change the due date on James's follow-up task to Thursday"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Update the TechCorp callback task — add a note that they're interested in the enterprise plan"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Reschedule the Fintech proposal task to next Tuesday"</em>
        `,
        isParagraph: 'true',
      },
      {
        title: "Assigning or Reassigning a Task",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Assign the Acme Corp follow-up task to Rachel"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Reassign all of Tom's open tasks to Sarah"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Assign this task to me"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Who is currently assigned to the TechCorp deal follow-up task?"</em>
        `,
        isParagraph: 'true',
      },
      {
        title: "Tips for Creating Accurate Tasks",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Include the contact or company name</strong> so the task is correctly linked to the right CRM record<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Specify a date or timeframe</strong> — <em>"by Friday"</em>, <em>"next Monday"</em>, <em>"in 3 days"</em> — so the due date is set correctly<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Include the task type</strong> where relevant — <em>"call back"</em>, <em>"send proposal"</em>, <em>"follow up"</em>, <em>"send email"</em><br/><br/>
          <strong>Example of a complete, clear task request:</strong><br/>
          <em>"Create a task to call back James at TechCorp on Monday morning — he wants to discuss pricing"</em>
        `,
        isParagraph: 'true',
      },
      {
        title: "Related Co-pilot Actions",
        isHeading: 'true',
      },
      {
        content: `Query Tasks &nbsp;|&nbsp; Query Deals &nbsp;|&nbsp; Query Meetings`,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "cp-13",
    title: "Co-pilot: Weekly Analytics",
    updated: "Updated April 2026",
    content: `The <strong>Weekly Analytics</strong> action displays a full summary of your campaign activity for the current week — including a line chart of performance over time, key stat cards, and a top performers breakdown — all surfaced directly in the Co-pilot without navigating to the Analytics section.`,
    features: [
      {
        title: "What It Does",
        isHeading: 'true',
      },
      {
        content: `Pulls your weekly campaign data and presents it as a visual analytics summary including:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Line chart</strong> — shows campaign activity trends across the week (emails sent, opens, replies)<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Stat cards</strong> — key numbers at a glance including total emails sent, open rate, reply rate, and click rate<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Top performers</strong> — which campaigns and team members are driving the best results this week
        `,
        isParagraph: 'true',
      },
      {
        title: "How to Use It",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me this week's analytics"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"What does my campaign performance look like this week?"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Give me a weekly summary of outreach activity"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"How are my campaigns performing this week?"</em><br/><br/>
          The Co-pilot returns the visual weekly analytics dashboard directly in the chat.
        `,
        isParagraph: 'true',
      },
      {
        title: "What the Stat Cards Show",
        isHeading: 'true',
      },
      {
        isTable: true,
        headers: ["Stat Card", "What it measures"],
        rows: [
          ["Emails Sent", "Total emails sent across all active campaigns this week"],
          ["Open Rate", "Percentage of sent emails that were opened"],
          ["Reply Rate", "Percentage of sent emails that received a reply"],
          ["Click Rate", "Percentage of sent emails where a link was clicked"],
          ["Bounces", "Number of emails that bounced this week"],
        ],
      },
      {
        title: "What the Top Performers Section Shows",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Top campaign</strong> — the campaign with the highest reply rate this week<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Top team member</strong> — the rep with the most replies or meetings booked (if team workspace is active)
        `,
        isParagraph: 'true',
      },
      {
        title: "When to Use It",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Start of day</strong> — get a quick pulse check on how your campaigns are running<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Weekly review</strong> — use it in team meetings to discuss performance<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Before making changes</strong> — check current performance before adjusting a sequence or adding new leads
        `,
        isParagraph: 'true',
      },
      {
        title: "Related Co-pilot Actions",
        isHeading: 'true',
      },
      {
        content: `Best Campaign &nbsp;|&nbsp; Get My Campaigns`,
        isParagraph: 'true',
      },
    ],
  },

  {
    id: "cp-14",
    title: "Co-pilot: Best Campaign",
    updated: "Updated April 2026",
    content: `The <strong>Best Campaign</strong> action identifies and displays your top performing campaign over the past 30 days — using a weighted scoring model that factors in multiple performance signals to give you a single, clear winner.`,
    features: [
      {
        title: "What It Does",
        isHeading: 'true',
      },
      {
        content: `Analyses all your campaigns from the past 30 days and scores them using a weighted performance model. The result is your single best performing campaign, displayed with a full performance breakdown so you know exactly what made it successful.`,
        isParagraph: 'true',
      },
      {
        title: "How to Use It",
        isHeading: 'true',
      },
      {
        content: `
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"What's my best performing campaign this month?"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Show me my top campaign from the last 30 days"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"Which campaign has been the most effective recently?"</em><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <em>"What's been my best campaign?"</em><br/><br/>
          The Co-pilot returns the winning campaign along with its key performance metrics.
        `,
        isParagraph: 'true',
      },
      {
        title: "How the Scoring Works",
        isHeading: 'true',
      },
      {
        content: `The Best Campaign score is calculated using a <strong>weighted scoring model</strong> — not just a single metric like open rate. This means a campaign that performs consistently well across multiple metrics ranks higher than one that excels at just one thing.`,
        isParagraph: 'true',
      },
      {
        isTable: true,
        headers: ["Signal", "Why it matters"],
        rows: [
          ["Reply Rate", "The strongest indicator of genuine engagement and campaign effectiveness"],
          ["Open Rate", "Shows how well your subject lines are performing"],
          ["Click Rate", "Indicates content relevance and CTA effectiveness"],
          ["Delivery Rate", "Reflects list quality and sender reputation"],
          ["Overall Engagement", "Combined activity score across all signals"],
        ],
      },
      {
        title: "What the Result Shows",
        isHeading: 'true',
      },
      {
        content: `After running the Best Campaign action, the Co-pilot displays:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Campaign name</strong> — the winning campaign<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Score</strong> — the weighted performance score<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Key metrics</strong> — open rate, reply rate, click rate, and emails sent for the period<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Why it won</strong> — a brief summary of the signals that pushed it to the top
        `,
        isParagraph: 'true',
      },
      {
        title: "How to Use This Insight",
        isHeading: 'true',
      },
      {
        content: `Once you know your best campaign, replicate what's working:<br/><br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Review the subject lines</strong> — copy the approach to other campaigns<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Study the sequence structure</strong> — check how many steps it has and the timing between them<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Look at the audience</strong> — identify what made this ICP particularly responsive<br/>
          &nbsp; &nbsp;<span style="font-size:0.55em;vertical-align:middle">●</span> <strong>Duplicate the campaign</strong> — use it as a template for your next campaign targeting a similar audience<br/><br/>
          <em>"Show me the sequence from my best campaign"</em><br/>
          <em>"Create a new campaign using the same structure as my top campaign"</em>
        `,
        isParagraph: 'true',
      },
      {
        title: "Related Co-pilot Actions",
        isHeading: 'true',
      },
      {
        content: `Weekly Analytics &nbsp;|&nbsp; Get My Campaigns &nbsp;|&nbsp; Update Campaign Sequence`,
        isParagraph: 'true',
      },
    ],
  },

];

export default mockArticles;
