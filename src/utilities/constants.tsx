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

];

export default mockArticles;
