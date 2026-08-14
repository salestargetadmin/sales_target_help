# Copilot — Help Center Collection

**Collection description (for the collection card):**
> Use the SalesTarget.ai AI Copilot to run campaigns, lists, and CRM queries with natural language.

Each `## Article N` section below is one Intercom article. UI labels are bolded exactly as they appear in the product.

---

## Article 1 — What is the SalesTarget.ai Copilot?

**Copilot** is the AI assistant built into SalesTarget.ai. Ask it a question in plain English and it answers using your live data — or, with WARP Mode enabled, actually performs the work for you.

### How to open Copilot

Click the **Copilot** icon in the **right-hand toolbar**. Copilot opens as a panel over your current screen, so you can keep working with your data visible.

### Two modes

Copilot behaves differently depending on whether **WARP Mode** is on:

| Mode | What Copilot can do |
|---|---|
| **Normal** (default) | Answer questions, explain features, help you plan |
| **WARP Mode** | Actually perform actions — create campaigns, build lists, query your CRM |

**WARP Mode is off by default.** If you ask Copilot to do something while it's off, it will tell you the action requires WARP Mode. See **What is WARP Mode?**

### What Copilot can do

With WARP Mode on, Copilot has 18 built-in actions:

**Campaigns**
- Create a campaign (including a full AI-generated email sequence)
- Get your campaigns
- Get campaign details
- Get campaign steps
- Update a campaign sequence
- Add a list to a campaign
- Campaign analytics
- Find your best-performing campaign

**Leads & lists**
- Search leads
- Create a list
- Get all lists
- Add leads to a list
- Add a lead manually

**CRM**
- Query meetings
- Query deals
- Query tasks
- Create, update, and assign tasks

**Research**
- Extract website information

### Getting started

When you open Copilot with no conversation history, you'll see three quick-action suggestions:

- **Generate a Full Campaign**
- **Write a high-converting email sequence**
- **Show my best performing campaign stats**

As you work, Copilot suggests relevant next steps based on what it just did.

### Requirements and limits

- **Role:** Copilot is available to workspace **owners, admins, and editors**.
- **CRM actions** (meetings, deals, tasks) require a CRM subscription.
- **Conversation length:** each conversation holds up to 100 messages. Start a new one for a new task.

### Tips

- **Be specific.** "Show me campaigns from last month with a reply rate above 5%" beats "show campaigns."
- **Chain requests.** You can ask Copilot to search for leads and add them to a list in a single message.
- **Turn WARP Mode on before asking for actions**, or you'll just get an explanation instead of the work.

---

## Article 2 — What is WARP Mode?

**WARP Mode** is the toggle that lets Copilot take real actions in your workspace instead of just talking about them.

### Why it exists

Copilot's actions change real data — creating campaigns, adding leads to lists, spending credits, updating tasks. WARP Mode is a deliberate confirmation that you want it to act, rather than having an AI make changes from a casual message.

### Turning it on

The **WARP** toggle sits in the footer of the Copilot chat window. Switch it on before asking Copilot to do something.

**It's off by default**, and it's a per-conversation setting — check it whenever you start a new conversation.

### What happens when it's off

If you ask for an action with WARP Mode off, Copilot replies that the action requires WARP Mode. It won't perform the task or partially complete it — nothing happens to your data.

### What still works without it

Plenty. With WARP Mode off, Copilot can:

- Explain how features work
- Help you plan a campaign or draft messaging
- Answer general questions

It can't create, update, or query your live data.

### Which requests need WARP Mode

Anything that reads or changes your workspace data:

| Needs WARP Mode | Doesn't need it |
|---|---|
| "Create a campaign called Q3 Outbound" | "How should I structure a cold email sequence?" |
| "Show my deals closing this month" | "What's a good reply rate?" |
| "Add these leads to my SaaS list" | "Explain how inbox rotation works" |
| "What's my best campaign?" | "Help me write a subject line" |

### Things to know

- **Actions cost what they'd cost anyway.** Adding leads to a list consumes lead credits whether you do it through Copilot or the UI.
- **CRM actions need a CRM subscription** even with WARP Mode on.
- **Some actions apply immediately.** Copilot will confirm what it did afterwards rather than always asking first — so be clear in your request.

---

## Article 3 — Copilot: Create a Campaign

Copilot can create a complete campaign, including a fully written AI email sequence, from a conversation.

**Requires WARP Mode.**

### What Copilot needs from you

Copilot will collect four things before it creates anything:

| Detail | Example |
|---|---|
| **Campaign name** | "Q3 SaaS VPs" |
| **Goal** | Book discovery calls |
| **Target audience** | VPs of Sales at 50-200 person SaaS companies |
| **Number of steps** | 4 |

If you only give it a name, Copilot will ask for the rest before proceeding. You can provide everything up front to skip the back-and-forth:

> "Create a campaign called Q3 SaaS VPs. The goal is booking discovery calls, targeting VPs of Sales at 50-200 person B2B SaaS companies. Our offer is a lead enrichment tool that cuts prospecting time in half. Make it 4 steps."

### What you get

Copilot doesn't just create an empty campaign. It also **generates and saves a complete email sequence**, with:

- Two variants per step, ready for A/B testing
- Spintax for deliverability
- Personalization variables already inserted

The campaign is created in **draft** status so nothing sends until you review and launch it.

### After it's created

**Always review the generated sequence before launching.** Open the campaign's **Templates** tab and check that the copy sounds like you, the claims are accurate, and the ask is right.

Then add your leads and launch.

### Good to know

- **Duplicate names are handled automatically** — creating a second "Q3 Outbound" produces "Q3 Outbound-2".
- **Chaining works.** You can ask Copilot to create a campaign and add a list to it in one message.

---

## Article 4 — Copilot: Search Leads

Copilot can search the lead database conversationally, without building filters by hand.

**Requires WARP Mode.**

### How to use it

Describe who you're looking for:

> "Find VPs of Sales at SaaS companies in the US with 50-200 employees"

> "Search for marketing directors at healthcare companies in London"

Copilot translates your description into the appropriate filters and returns matching leads.

### Chaining with other actions

Search becomes much more useful when combined with what comes next. In a single message:

> "Find CTOs at fintech companies in New York and add them to a list called Fintech CTOs"

Copilot searches, creates the list, and adds the results.

### Important: results live in the conversation

When you follow up with something like "add those to a list," Copilot works from the search results **in the current conversation**. It can't retrieve a search you ran yesterday or in a different conversation.

If you need to act on a previous search, run it again in the current conversation first.

### Credits

Adding leads to a list consumes lead credits — see **Copilot: Add Leads to a List**. Searching itself doesn't.

---

## Article 5 — Copilot: Create a List

Ask Copilot to create a new lead list.

**Requires WARP Mode.**

### How to use it

> "Create a new list called Q3 Enterprise Prospects"

> "Make a list called Fintech CTOs London"

The only required detail is the **name**. You can optionally give the list a description.

### Creating and filling in one step

You don't need to create the list first and add leads afterwards:

> "Find heads of marketing at B2B SaaS companies with 200+ employees and put them in a new list called Enterprise Marketing"

### Tips

- **Name lists consistently.** Including the segment and month makes them far easier to find later.
- Once created, a list is available everywhere — in campaigns, in the Lists page, and in Lead Explorer.

---

## Article 6 — Copilot: Get All Lists

Ask Copilot for an overview of your lead lists.

**Requires WARP Mode.**

### How to use it

> "Show me all my lists"

> "What lists do I have?"

### What you get

A table of your lists with:

- **List ID**
- **List Name**
- **Number of Leads**
- **Created Date**

### Why it's useful

It's the quickest way to find the exact name or ID of a list before doing something else with it — adding it to a campaign, or adding more leads to it.

> "Show me my lists" → then → "Add the Fintech CTOs list to my Q3 Outbound campaign"

---

## Article 7 — Copilot: Add Leads to a List

Add leads from a search directly into a list.

**Requires WARP Mode.**

### How to use it

The natural pattern is to search and add in one message:

> "Find VPs of Sales at SaaS companies in the US and add them to my Q3 Prospects list"

Or follow up on a search you just ran in the same conversation:

> "Add those leads to the Enterprise list"

### ⚠️ This costs credits

Adding leads to a list consumes **1 lead credit per lead**. If you don't have enough credits, Copilot will tell you rather than partially completing the job.

Be specific about how many leads you want. "Add all of them" against a large result set can consume a significant number of credits.

### Duplicates are skipped

Leads already in the target list are skipped automatically. Copilot reports how many were added and how many were skipped, so you can add to an existing list without creating duplicates.

### Working from the current conversation

Copilot adds leads from a search **in the current conversation**. It can't pull up an arbitrary past search — run the search again if you need it.

---

## Article 8 — Copilot: Add a Lead Manually

If you have someone's email address and want them in a list without running a search, Copilot can add them directly.

**Requires WARP Mode.**

### How to use it

> "Add john@acme.com to my Enterprise Prospects list"

> "Add sarah@techcorp.io to the Q3 Outbound list"

### When to use it

- Someone gave you their details at an event
- A colleague passed on a referral
- You want to add a single contact without searching

For anything more than a handful of leads, use a search or a CSV upload instead.

### Tips

- Have the list name ready — Copilot needs to know where to put them.
- Ask for your lists first if you're not sure of the exact name.

---

## Article 9 — Copilot: Get My Campaigns

Get a quick overview of your campaigns without leaving what you're doing.

**Requires WARP Mode.**

### How to use it

> "Show me all my campaigns"

> "List my running campaigns"

> "What campaigns are paused?"

### Campaign statuses

You can filter by status. The four statuses are:

| Status | Meaning |
|---|---|
| **draft** | Created but never started |
| **running** | Currently sending |
| **paused** | Temporarily stopped |
| **completed** | Finished |

Note that the term is **running**, not "active."

### What you get

A table showing each campaign's:

- Name
- Status
- Created date
- Lead count

Plus a breakdown of how many campaigns are in each status. By default you'll see up to 20 campaigns.

### Useful follow-ups

> "Show me my campaigns" → "Show me the analytics for Q3 Outbound"

---

## Article 10 — Copilot: Get Campaign Details & Steps

Two related actions for inspecting a specific campaign.

**Requires WARP Mode.**

### Get campaign details

> "Show me the details for my Q3 Outbound campaign"

Returns that campaign's configuration and status. Copilot can find a campaign by partial name, so you don't need the exact title.

### Get campaign steps

> "What are the steps in my Q3 Outbound campaign?"

> "Show me the sequence for Enterprise Q3"

Returns the current sequence — each step, its delay, and its subject and body.

### Why this matters before editing

**Always look at the current steps before asking Copilot to update a sequence.** Updating replaces the existing templates, so you want to know what you have before you change it. See **Copilot: Update a Campaign Sequence**.

---

## Article 11 — Copilot: Update a Campaign Sequence

Copilot can rewrite a campaign's email sequence.

**Requires WARP Mode.**

### How to use it

> "Update step 2 of my Q3 Outbound campaign to focus on our case study with Acme"

> "Change the delay on step 3 to 5 days"

You can update the step content, subject lines, body variants, and delays.

### ⚠️ Updating replaces your existing templates

This is the most important thing to know: **updating a sequence rewrites the campaign's templates**, rather than surgically editing one field.

Before you update:

1. Ask Copilot to show you the current steps (**Copilot: Get Campaign Details & Steps**).
2. Make your update request.
3. **Review the result** in the campaign's Templates tab.

If you only want to tweak one subject line, editing it directly in the Templates tab is safer.

### Identifying the campaign

Copilot may ask you to confirm which campaign you mean, particularly if you have similarly named campaigns. Asking for your campaigns first and referring to the exact name avoids the ambiguity.

### Active campaigns

Take extra care updating a campaign that's currently sending. Consider pausing it first, making your changes, reviewing them, and then resuming.

---

## Article 12 — Copilot: Add a List to a Campaign

Push an existing lead list into a campaign conversationally.

**Requires WARP Mode.**

### How to use it

> "Add my Fintech CTOs list to the Q3 Outbound campaign"

> "Put the Enterprise Prospects list into my new campaign"

Copilot matches list and campaign names — including partial matches — and adds the leads.

### If a name doesn't match

Copilot shows you the available campaigns and lists so you can pick the right one.

### Large lists

Lists of 1,000+ leads are processed as a **background job** with progress updates. For very large lists the job may continue running after Copilot stops reporting progress — check the campaign to confirm the final count.

### What happens after

The action applies immediately and Copilot confirms what was added. Leads without an email address can't be emailed, so check your campaign's lead count matches what you expected.

---

## Article 13 — Copilot: Query Meetings

Ask about your CRM meetings in plain English.

**Requires WARP Mode and a CRM subscription.**

### What you can filter by

| Filter | Examples |
|---|---|
| **Assignee / host** | "Show meetings assigned to Sarah" |
| **Date window** | past, today, this week, this month, next month |
| **Meeting name** | "Find meetings with 'demo' in the name" |
| **Meeting type** | Online, In Office, Client Location |
| **Platform** | Zoom, Google Meet, Calendly, Slack |

### Example questions

> "What meetings do I have this week?"

> "Show me all meetings assigned to Sarah this month"

> "How many Zoom meetings do I have coming up?"

> "Find meetings with 'discovery' in the name"

### What you get

A table showing each meeting's name, date, time, lead email, type, value, host, campaign, location, and link. Up to 100 results.

### What Copilot can't filter by

There's **no filter by contact or company**. Searching matches the **meeting name** only — so "meetings with people from Acme Corp" won't work unless "Acme" is in the meeting title.

Date filtering uses fixed windows (past, today, this week, this month, next month) rather than arbitrary ranges like "last Tuesday."

Meeting notes and agendas aren't returned — open the meeting in the CRM for those.

---

## Article 14 — Copilot: Query Deals

Ask about your sales pipeline conversationally.

**Requires WARP Mode and a CRM subscription.**

### What you can filter by

| Filter | Examples |
|---|---|
| **Assignee** | "Show deals assigned to Tom" |
| **Stage / status** | "Show deals in negotiation" |
| **Deal name or client** | "Find the Acme deal" |
| **Close date** | overdue, today, this week, this month |
| **Value** | "Deals worth more than $10,000" |

### Example questions

> "Show me all deals closing this month"

> "What deals are assigned to Tom?"

> "List deals worth more than $50,000"

> "Show me overdue deals"

### What you get

A table showing each deal's name, email, value, status, assignee, close date, and meeting date. Up to 100 results, and you can sort by value.

### What Copilot can't do with deals

- **No activity or staleness filter.** You can't ask for "deals with no activity in two weeks" or "deals going cold."
- **No unassigned filter.** You can filter by a named person, but not by "unassigned."
- **No quarter view.** Close-date windows go up to this month.
- **No industry filter.**
- **Copilot cannot create, edit, or reassign deals.** It's read-only for deals — make changes in the CRM.

---

## Article 15 — Copilot: Query Tasks

Ask about your CRM tasks.

**Requires WARP Mode and a CRM subscription.**

### What you can filter by

| Filter | Examples |
|---|---|
| **Assignee** | "Show tasks assigned to Sarah" |
| **Status** | to do, in progress, deferred, completed |
| **Priority** | low, medium, high, critical |
| **Due date** | overdue, today, this week, this month |
| **Keyword** | Searches task title and description |

### Example questions

> "What tasks are overdue?"

> "Show me high priority tasks due this week"

> "What's assigned to Sarah?"

> "Find tasks mentioning 'proposal'"

### What you get

A table showing each task's title, status, priority, assignee, and due date. Results are sorted with **critical priority first**, so the most urgent work surfaces at the top.

### Notes on filtering

- **"Overdue" is a due-date filter**, not a status. The four statuses are to do, in progress, deferred, and completed.
- **There's no task "type" field.** Asking for "follow-up tasks" performs a keyword search of titles and descriptions.
- **Tasks associate with lead lists**, not with individual contacts or deals.
- **No unassigned filter** — you can filter by a named person only.

---

## Article 16 — Copilot: Create, Update & Assign Tasks

Copilot can create and update CRM tasks conversationally.

**Requires WARP Mode and a CRM subscription.**

### Create a task

> "Create a task to follow up with the Acme leads by Friday, high priority"

> "Add a task for Sarah to prepare the Q3 report, due next Monday"

Copilot will ask for a **due date** and **priority** if you don't provide them. Defaults are today, medium priority, and "to do" status.

### Assigning

Name the person in your request. If Copilot doesn't recognise the name, it shows you your organization's members so you can pick.

There's also a shortcut for list review: asking Copilot to assign a list to someone creates a "Review list *X*" task for them.

### Update a task

> "Mark the Acme follow-up task as completed"

> "Change the due date on the Q3 report task to Friday"

Copilot finds the task by searching, then updates it.

### Limits to know

- **One task at a time.** Bulk updates aren't supported — you can't reassign all of someone's open tasks in one request.
- **Tasks link to lead lists, not to contacts or deals.** You can optionally associate a task with a lead list. Mentioning a company name puts it in the task title, but doesn't create a link to a CRM record.

---

## Article 17 — Copilot: Campaign Analytics

Get campaign performance figures without opening the analytics dashboard.

**Requires WARP Mode.**

### How to use it

> "Show me my campaign analytics for the last week"

> "How did my campaigns perform this month?"

> "Show me analytics for the Q3 Outbound campaign"

> "Give me campaign performance from 1 June to 30 June"

### Time ranges

| Range | Notes |
|---|---|
| **1 week** | Default — the trailing 7 days, not a calendar week |
| 2 weeks | |
| 1 month | |
| 3 months | |
| 6 months | |
| 1 year | |
| All time | |
| **Custom dates** | Specify your own start and end dates |

You can also ask about a **single campaign** by name.

### The metrics

Four headline rates, each shown with its **change versus the previous period**:

- **Reply Rate**
- **Bounce Rate**
- **Open Rate**
- **Click Rate**

The period-over-period comparison is the most useful part — it tells you whether things are improving, not just where they stand.

Totals for emails sent, delivered, and replied appear in the summary. For periods of 60 days or less you also get a daily trend chart.

### Top performers

Copilot highlights your **top 3 campaigns by reply rate**.

Note this ranks **campaigns**, not people — there's no per-rep breakdown.

### What's included

Running, scheduled, and completed campaigns are counted. Drafts are not.

---

## Article 18 — Copilot: Best Campaign

Ask Copilot which campaign is performing best and why.

**Requires WARP Mode.**

### How to use it

> "What's my best performing campaign?"

> "Which campaign has the highest reply rate?"

> "Show me the campaign with the most opens"

### How the winner is scored

Copilot uses a weighted score across four metrics:

| Metric | Weight |
|---|---|
| **Reply rate** | 40% |
| **Open rate** | 20% |
| **Click rate** | 20% |
| **Conversion rate** | 20% |

Reply rate carries the most weight because it's the closest thing to a commercial outcome. Conversion here means unique engaged recipients as a share of delivered emails.

You'll see the campaign's **Weighted Score**, a trend chart, and automatically generated insights and suggestions.

### Ranking by a single metric

To rank on one metric instead of the weighted score, just ask:

> "Which campaign has the most replies?"

> "Show me the campaign with the highest open rate"

### The 30-lead minimum

Only campaigns with **at least 30 leads** and a status of running or completed are eligible.

This prevents a tiny campaign with 3 leads and 1 reply from showing a 33% reply rate and topping the list. If Copilot tells you there's nothing to compare, you likely need more volume before the comparison is meaningful.

### Acting on the result

Copilot can't clone a campaign. To reuse what's working, open the winning campaign, look at its sequence, and apply the same structure and angle to your next one — the insights Copilot returns will tell you which elements to carry over.

---

## Article 19 — Copilot Brain: Website & Company Context

Copilot can research a website and remember what it learned, so its suggestions and generated copy reflect what you actually sell.

**Requires WARP Mode.**

### Give Copilot your context

> "Extract information from acme.com"

> "Research our website at salestarget.ai"

Copilot reads the site and extracts what your company does, who you sell to, and what your offer is.

### Why it matters

Without this context, Copilot writes generic copy. With it, generated sequences and messages reflect your actual product, your language, and your ideal customer profile — which makes everything downstream noticeably better.

**Do this once, early.** It improves every campaign and sequence Copilot generates afterwards.

### Researching a prospect

The same action works for prospects:

> "Extract information from prospectcompany.com"

Useful before writing a targeted sequence for a specific account.

### Reviewing what Copilot knows

Copilot's stored context is visible in the Copilot panel. Check it after your first extraction — if it's misunderstood what you do, everything it generates will inherit that misunderstanding. Re-run the extraction or correct it in conversation if needed.
