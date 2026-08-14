# Cold Email Outreach — Help Center Collection

**Collection description (for the collection card):**
> Connect your mailboxes, warm them up, and run automated cold email campaigns that land in the inbox.

Each `## Article N` section below is one Intercom article. UI labels are bolded exactly as they appear in the product.

---

## Article 1 — What is Cold Email Outreach?

Cold email outreach on SalesTarget.ai lets you run automated, personalized email sequences from your own mailboxes — with warm-up, follow-up automation, A/B testing, and analytics built in.

### Where to find it

Cold email is spread across a few places in the left sidebar rather than one section:

| Sidebar item | What it's for |
|---|---|
| **Campaigns** | Create and manage your email sequences |
| **Email Accounts** | Connect mailboxes, configure warm-up, and manage sending limits |
| **Unibox** | Read and reply to everything your campaigns receive |
| **Lead Validation** | Check email addresses before you send to them |

### What you can do

- **Connect your own mailboxes** — Gmail / Google Workspace, Office 365 / Outlook, or any IMAP/SMTP provider
- **Warm up your accounts** so your emails land in the inbox rather than spam
- **Build multi-step sequences** with automatic follow-ups
- **Personalize at scale** using variables, or let AI write a unique email for every lead
- **Rotate across multiple mailboxes** automatically to spread your sending volume
- **A/B test** subject lines and body copy, with the winner selected automatically
- **Track** opens, clicks, replies, and bounces per campaign and per step

### How it fits into your workflow

Find prospects in **Lead Explorer**, push them into a campaign, and manage every reply in **Unibox** or your **CRM**. Leads you contact flow into the CRM automatically with their engagement history attached.

### Before you start

You'll need at least one connected email account, and we strongly recommend warming it up before sending. Start with **How to Connect Your Email Account**.

---

## Article 2 — How to Connect Your Email Account

Before you can send anything, connect at least one mailbox. Click **Email Accounts** in the left sidebar to get started.

### Connect a Gmail or Google Workspace account

Click **Add Account** and choose Gmail / G-Suite. You have three options:

**Option 1: Domain Wide Delegation (DWD)**

Best for teams connecting many mailboxes on the same Google Workspace domain. A workspace admin authorises SalesTarget.ai once at the domain level, and you can then add any mailbox on that domain without each user connecting individually.

**Option 2: OAuth**

The quickest way to connect a single mailbox. Click **Connect with Google**, sign in, and approve the requested permissions. Best for individual users.

**Option 3: App Password**

Use this if OAuth isn't available on your account. You'll need to generate a **16-character app password** in your Google account security settings, then paste it in. Two-step verification must be enabled on the Google account before app passwords can be created.

### Connect an Office 365 or Outlook account

Click **Add Account**, choose Office 365 / Outlook, and sign in through Microsoft to authorise access.

### Connect IMAP / SMTP accounts

Custom mailboxes are connected in **bulk via a CSV upload** rather than one at a time:

1. Click **Add Account** and choose IMAP/SMTP.
2. **Download the CSV template.**
3. Fill in one row per mailbox. The template columns are:
   `FirstName, LastName, Email, Password, SMTP, Port, IMAPUsername, IMAPPassword, IMAPSMTP, IMAPPort`
4. **Drag and drop** the completed file into the upload area.

Your hosting provider can give you the SMTP and IMAP server addresses and ports if you don't have them.

### Buy a domain and get mailboxes provisioned

If you'd rather not use your primary domain for cold outreach — which is the safer approach — you can **purchase a new domain** through SalesTarget.ai and have mailboxes created on it automatically. Look for the domain option on the **Email Accounts** page.

This is a good practice for cold email: keep your main company domain protected and send from a dedicated outreach domain.

### Choosing which account sends a campaign

There's no global "default sender." You choose the sending accounts on each campaign using the **Select Account** picker, which lets you select **one or more** mailboxes. Selecting more than one automatically rotates sending between them — see **How Inbox Rotation Works**.

Domain-level **Sender Defaults** let you set a default sender name and signature for all mailboxes on a domain.

### After connecting

Set up warm-up before you start sending. See **How to Set Up Email Warm-up**.

---

## Article 3 — How to Set Up Email Warm-up

Warm-up builds your mailbox's sending reputation by exchanging genuine-looking emails that get opened and replied to. A new or cold mailbox that starts blasting campaigns will land in spam — warm-up prevents that.

### Turn on warm-up

1. Go to **Email Accounts** in the left sidebar.
2. Open the account you want to warm up.
3. Go to the **Warmup** tab.
4. Enable warm-up and configure the settings below.

### Warm-up settings

| Setting | Suggested value | What it does |
|---|---|---|
| **Daily Warmup Limit** | 10 | How many warm-up emails this mailbox sends per day |
| **Increase Per Day** | 1 | How much the daily volume grows each day |
| **Disable slow warmups** | Off | Turn on to skip the gradual ramp-up |
| **Reply Rate %** | 30 | What share of warm-up emails receive a reply |
| **Weekdays Only** | On | Restricts warm-up to weekdays, mirroring real sending behaviour |
| **Read Emulation** | On | Simulates a human reading the email before replying |
| **Open Rate %** | — | Target open rate for warm-up emails |
| **Spam Protection %** | — | How often warm-up emails are rescued from the spam folder |
| **Mark Important %** | — | How often warm-up emails are marked as important |

Start conservative. A daily limit of 10 with an increase of 1 per day is a safe default for a brand-new mailbox.

### Monitoring your account health

Each connected account shows a **health score** from 0 to 100, colour-coded:

- **Green (80+)** — healthy, safe to send
- **Yellow (50-79)** — needs attention; slow down and let warm-up continue
- **Red (below 50)** — do not run campaigns from this mailbox until it recovers

You'll also see **Sent** as a daily usage figure against that account's daily limit.

### How long to warm up

Run warm-up for **at least 2-3 weeks** on a brand-new mailbox before sending campaigns, and **keep warm-up running permanently** alongside your campaigns. It isn't a one-off setup step — it's ongoing reputation maintenance.

### Best practices

- Warm up every mailbox you plan to send from, not just the first one.
- Don't raise your campaign volume the moment warm-up starts. Let the health score climb first.
- If your health score drops, pause campaigns from that mailbox and let warm-up run on its own for a few days.

---

## Article 4 — How to Create an Email Sequence

A sequence is the series of emails a lead receives — the first email plus any follow-ups.

### Step 1: Create your campaign

1. Click **Campaigns** in the left sidebar.
2. Click **Add Campaign**.
3. Give the campaign a name.

### Step 2: Add your leads

Add leads from a saved list, from Lead Explorer, or by uploading a CSV. See **How to Send Leads to Your Campaigns** in the Lead Explorer collection.

### Step 3: Write your first email

Open the **Templates** tab and write your first step:

- **Subject line** — keep it short, lowercase, and specific. Subject lines that look like a normal colleague's email outperform marketing copy.
- **Body** — keep it under 150 words. One clear ask.

### Step 4: Add personalization

Insert variables using the variable picker in the editor. The most common ones are:

- `{{firstName}}`
- `{{lastName}}`
- `{{companyName}}`
- `{{signature}}`
- `{{unsubscribe}}`

> **Important:** variable names are **case-sensitive and camelCase**. `{{firstName}}` works; `{{first_name}}` does not — it will be sent to your prospect as literal `{{first_name}}` text. Always insert variables using the picker rather than typing them by hand.

See **How to Use Personalization & Variables** for the full list.

### Step 5: Add follow-up steps

Click **Add Step** to add another email to the sequence, then set how many days after the previous step it should send.

Every step is an email step — there's no separate step type to choose.

### Step 6: Configure and launch

Set your sending accounts, schedule, and settings, then start the campaign.

### A recommended structure

A four-email sequence over two weeks works well for most B2B outreach:

| Step | Timing | Purpose |
|---|---|---|
| 1 | Day 0 | The core pitch — short, specific, one ask |
| 2 | Day 3 | A different angle on the same problem |
| 3 | Day 7 | Social proof — a result you got for someone similar |
| 4 | Day 14 | A short, polite break-up email |

### Other options worth knowing

- **Send Message as Thread** — sends follow-ups in the same email thread, keeping the original subject line
- **A/B variants** — test two versions of a step (see **How A/B Testing Works**)
- **AI Personalization** — generate a unique email per lead (see **AI-Personalized Emails & Credit Costs**)

---

## Article 5 — How to Set Up Follow-up Automation

Follow-ups are simply the steps after your first email. They send automatically on a delay, and stop as soon as a lead replies.

### Adding a follow-up

1. Open your campaign's **Templates** tab.
2. Click **Add Step**.
3. Write the subject and body.
4. Set the delay — how many days after the previous step this one should send.

### How follow-ups progress

Sequences run **linearly**. Each step sends after its configured delay, in order, until the sequence ends or the lead replies. There's no conditional branching — every lead who hasn't replied receives the same next step.

### Stop on reply

When a lead replies, **all remaining steps for that lead stop automatically**. You don't need to configure anything — this is the default behaviour, and it's what prevents the classic mistake of following up with someone who already answered you.

Automated out-of-office responses are detected and recorded separately from genuine replies, so they don't get counted as engagement in your analytics.

### Threading: same thread or new email?

**Send Message as Thread** is a single toggle that applies to the **whole sequence**, not to individual steps:

- **On** — follow-ups are sent inside the original email thread, and the subject line stays the same throughout
- **Off** — each step is sent as a separate email with its own subject line

Threading generally performs better for B2B outreach because the prospect can see the conversation history.

### Working days

Your campaign **Schedule** controls which days and hours emails go out. Set it to weekdays and business hours in your prospects' timezone — this is configured at the campaign level and applies to every step.

### Best practices

- Space follow-ups 3-4 days apart. Daily follow-ups read as desperate and get reported as spam.
- Make every follow-up add something new — a different angle, a case study, a relevant piece of news. "Just bumping this up" is a wasted send.
- Three to four steps is the sweet spot for most sequences.

---

## Article 6 — How to Use Personalization & Variables

Variables let one email template address every recipient by name and company.

### Inserting a variable

Use the **variable picker** in the email editor rather than typing variables by hand. This guarantees the exact name and spelling.

### Available lead variables

| Variable | Inserts |
|---|---|
| `{{firstName}}` | The lead's first name |
| `{{lastName}}` | The lead's last name |
| `{{fullName}}` | Full name |
| `{{companyName}}` | Company name |
| `{{jobTitle}}` | Job title |
| `{{industry}}` | Industry |
| `{{signature}}` | Your sending account's signature |
| `{{unsubscribe}}` | The unsubscribe link |

### Sender variables

To refer to yourself, use the `my_` prefixed variables:

| Variable | Inserts |
|---|---|
| `{{my_first_name}}` | Your first name |
| `{{my_last_name}}` | Your last name |
| `{{my_company_name}}` | Your company name |
| `{{my_job_title}}` | Your job title |

### ⚠️ Variable names are case-sensitive

This is the single most common mistake in cold email setup.

**Correct:** `{{firstName}}`, `{{companyName}}`, `{{jobTitle}}`

**Wrong:** `{{first_name}}`, `{{company_name}}`, `{{job_title}}`

If a variable name doesn't match exactly, **it is not replaced** — the raw `{{first_name}}` text is sent to your prospect. There is no fallback and no error. Always insert variables with the picker, and always send yourself a test email before launching.

### Organization variables

You can create reusable variables that hold the **same value for everyone** — a calendar link, a demo URL, a company tagline.

1. In the email editor, open the variable menu and choose to add a variable.
2. Enter a **Label**, a **Key**, and a **Value**.
3. Use it in any template as `{{yourKey}}`.

A common example is `{{calendarLink}}` for your booking link, so you can update it in one place and have every campaign pick up the change.

> These hold one fixed value per organization — the same text is substituted for every recipient. For values that differ per prospect, use CSV columns below.

### Per-lead custom variables from your CSV

To personalize with data that's different for every prospect — a pain point, an icebreaker, a mutual connection — include it as a **column in your CSV** when you upload leads.

1. Add a column to your CSV, for example `icebreaker`.
2. Upload the CSV into your campaign or list.
3. Map the column during import.
4. Use it in your template as `{{icebreaker}}`.

This is the real way to do prospect-specific personalization at scale, and it's what most high-performing campaigns rely on.

### Always test before launching

Because unmatched variables are sent as raw text, **send yourself a test email** before starting any campaign. Check that every variable resolved and that no `{{...}}` text remains.

Also make sure the data actually exists — if a lead has no company name, `{{companyName}}` has nothing to insert.

---

## Article 7 — How A/B Testing Works

A/B testing runs two versions of an email step against each other and automatically switches to whichever performs better.

### Set up a test

1. Open your campaign's **Templates** tab.
2. Choose the step you want to test.
3. Add a **second variant** to that step.
4. Write a different subject line and/or body for Variant B.
5. Save.

You can test the **subject line** and the **body**. Each step supports **two variants** — A and B.

### How the winner is chosen

This is fully automatic — there's no manual step:

1. **Testing phase** — the first 50% of your leads are split **equally** between Variant A and Variant B.
2. **Winner selection** — once that half has been sent, the system compares the variants on your chosen metric.
3. **Remaining sends** — the winning variant is used for the rest of the campaign.

The split is always even during testing, and the winner is picked and applied for you. You don't need to monitor the test or pick a winner yourself.

### Choosing the winning metric

You can set which metric decides the winner:

- **Open rate** — use when testing subject lines
- **Click rate** — use when testing your call to action
- **Reply rate** — use when testing the body and overall message

Reply rate is the most meaningful for cold outreach, but it needs more volume to be reliable.

### Getting a trustworthy result

- Test **one thing at a time**. If you change the subject line *and* the body, you won't know which caused the difference.
- Give it enough volume. A campaign of 50 leads splits into two groups of 25 during testing — far too small to draw conclusions from. A few hundred leads per variant is a reasonable minimum.
- Make the variants genuinely different. Two near-identical subject lines will produce a meaningless result.

### What to test

- **Subject lines** — short vs descriptive, question vs statement
- **Opening line** — a personalized observation vs getting straight to the point
- **Call to action** — asking for a call vs asking a simple question

---

## Article 8 — How Inbox Rotation Works

Inbox rotation spreads your sending across several mailboxes so no single account exceeds a safe daily volume.

### How to use it

There's no separate setting to enable. **Rotation happens automatically whenever a campaign has more than one sending account.**

1. Open your campaign's settings.
2. In **Select Account**, choose **two or more** mailboxes.
3. Save.

Sending is then distributed across those accounts automatically, in rotation.

### Why it matters

Every mailbox has a safe daily ceiling. If you need to send 300 emails a day, doing it from one mailbox will damage its reputation and land you in spam. Spreading it across six mailboxes at 50 a day each keeps every account in a safe range.

Rotation also limits your risk: if one mailbox develops a deliverability problem, the rest of your campaign keeps running.

### What happens when the daily limit is reached

Each mailbox has a daily sending limit. When **all** of a campaign's sending accounts have hit their daily limit but leads still remain, the campaign doesn't stop — it **automatically reschedules the remaining emails to the next working day**, respecting your campaign schedule (working days and hours).

You'll get a notification confirming this — **"Campaign Rescheduled – Daily Limits Reached"** — telling you when sending will resume. Sending then picks up on the next working day and continues until the campaign finishes.

This is the main reason to send from **more than one mailbox**: the more accounts in your rotation, the more emails you can send per day before hitting the ceiling, and the fewer days your campaign takes to complete.

### An email account can only run one campaign at a time

An email account that's already assigned to a **running or scheduled** campaign **won't appear in the account list when you set up another campaign**. This prevents the same mailbox from being overloaded by two campaigns sending at once, which would blow past its daily limit and hurt deliverability.

If a mailbox you expect to see is missing from the **Select Account** list, it's almost certainly already in use by another active campaign. It becomes available again once that campaign completes or is paused, or you can free it up by removing it from the other campaign.

### Best practices

- **Warm up every mailbox** in the rotation, not just the first one. An unwarmed mailbox in the pool will drag down your results.
- **Use similar accounts.** Mailboxes on the same domain, with similar age and reputation, behave more consistently.
- **Keep per-account limits conservative.** Rotation lets you scale by adding mailboxes, not by pushing each one harder.
- **Check account health regularly** on the **Email Accounts** page and pull any mailbox whose health score drops out of the pool.

### Monitoring

Per-account sending volume and health are shown on the **Email Accounts** page. Campaign-level results are in the campaign's **Analytics** tab.

---

## Article 9 — How to Validate Emails

Sending to invalid addresses causes bounces, and bounces damage your sending reputation faster than almost anything else. Validate before you send.

### Where to find it

Click **Lead Validation** in the left sidebar.

### Validation results

| Status | What it means | Safe to send? |
|---|---|---|
| **Valid** | The mailbox exists and accepts mail | Yes |
| **Invalid** | The mailbox doesn't exist | No — remove it |
| **Catch-All** | The domain accepts all mail, so the specific mailbox can't be confirmed | Use with caution |
| **Unknown** | The server didn't give a definitive answer | Use with caution |
| **Disposable** | A temporary or throwaway address | No — remove it |
| **Spam Trap** | An address used specifically to catch senders with poor list hygiene | **Never send** — remove immediately |

### ⚠️ Spam traps

A spam trap is the most damaging result you can get. These addresses exist purely to identify senders who don't clean their lists, and hitting one can get your domain blacklisted.

**Always remove spam traps before sending.** No amount of warm-up will undo a blacklisting.

### Catch-all domains

Catch-all domains accept mail for any address, so validation can't confirm whether a specific mailbox exists. Many legitimate companies use catch-all configurations. Send to them, but keep them in a separate segment and watch the bounce rate.

### Keeping your bounce rate healthy

- Validate every list before adding it to a campaign, especially purchased or scraped lists.
- Keep your bounce rate **under 3%**. Above 5% and providers start treating you as a spammer.
- Re-validate older lists. Around 2% of B2B email addresses go stale every month as people change jobs.
- Leads enriched through Lead Explorer are already verified — validation matters most for imported data.

---

## Article 10 — How to Generate a Sequence with AI

Instead of writing a sequence from scratch, you can have AI draft the whole thing.

### Generate a sequence

1. Open your campaign's **Templates** tab.
2. Open the **AI Sequence Generator** panel.
3. Fill in the five fields:

| Field | What to enter |
|---|---|
| **Company Name** | Your company |
| **Your Services** | What you sell — be specific about the outcome you deliver |
| **Target Audience** | Who you're selling to: role, industry, company size |
| **Case Studies** | Results you've delivered for similar customers |
| **No. of Steps** | How many emails you want in the sequence |

4. Generate.

Generation runs in the background — you'll see progress while it works, and the sequence appears when it's ready.

### Reviewing the output

The generator creates a complete multi-step sequence with subject lines, bodies, and follow-ups. Treat it as a strong first draft, not a finished campaign:

- Read every step and rewrite anything that doesn't sound like you.
- Check the claims. AI can overstate what your product does — you're responsible for what goes out.
- Verify that any personalization variables are correct camelCase (`{{firstName}}`, not `{{first_name}}`).
- Cut anything that feels generic.

### Regenerating

If you're not happy with the result, use **Regenerate** to produce a new version from the same inputs. To change direction, edit your inputs first — the quality of the output depends almost entirely on how specific your **Your Services** and **Case Studies** answers are.

### Getting better results

- **Be specific about outcomes.** "We help agencies cut reporting time by 80%" produces far better copy than "we do marketing software."
- **Include real numbers in Case Studies.** Concrete results give the AI something credible to write about.
- **Match the step count to your plan.** Three to four steps suits most B2B sequences.

### Related

- To have AI write a **unique email for each individual lead**, see **AI-Personalized Emails & Credit Costs** — that's a different feature with a different cost.
- To draft a **single** email rather than a whole sequence, see **How to Use the AI Content Generator**.

---

## Article 11 — AI-Personalized Emails & Credit Costs

AI personalization generates a **unique email for every individual lead**, written using that lead's bio and company research. It's the most effective personalization available in the platform — and it's the only feature that changes what you're charged per email, so it's worth understanding before you turn it on.

### ⚠️ What it costs

| Email type | Credits per email |
|---|---|
| Regular email (normal template) | **1 credit** |
| AI-personalized, using **your own LLM key** | **2 credits** |
| AI-personalized, using SalesTarget.ai's AI | **5 credits** |
| An AI step that falls back to your template | **1 credit** |

**A 1,000-lead campaign with AI personalization turned on costs 5,000 credits** — or **2,000 credits** if you've connected your own LLM key. The same campaign without AI costs 1,000.

You're only charged the higher rate when an AI-generated email actually sends. If AI content isn't ready for a lead, that step falls back to your normal template and costs 1 credit.

### Turn on AI personalization

AI personalization is configured **per step**, so you can use it for your first email and plain templates for follow-ups.

1. Open your campaign's **Templates** tab.
2. Open the **AI Personalization** panel for the step you want.
3. Tick **Enable AI personalization for this step**.
4. Write an **AI Prompt** describing what the email should say. Click **💡 Need help?** for example prompts.
5. Choose a **Tone** — Professional, Friendly, Casual, Formal, or Enthusiastic.
6. **Save.**

A **green dot** next to a step means AI personalization is on for it. Grey means off.

### Writing a good prompt

The lead's **bio and company research are included automatically** — you don't need to add them to your prompt. Focus on what you want the email to *do*:

> "Write a short cold email opening with something specific about their company, then explain that we help B2B sales teams cut prospecting time in half. Ask for a 15-minute call. Keep it under 120 words."

Be specific about length, structure, and your ask. Vague prompts produce generic emails, which defeats the purpose.

### Cut the cost: connect your own LLM key

Connecting your own AI provider key drops the cost from **5 credits to 2 credits per email** — a 60% saving.

1. Go to **Settings → User LLM**.
2. Choose your provider. Seven are supported: **OpenAI, Anthropic (Claude), Google Gemini, xAI (Grok), Groq, DeepSeek, and Mistral**.
3. Paste your API key and pick the model you want.
4. Save.

Your key is stored encrypted. You'll be billed by your AI provider directly for the generation, which is typically far cheaper than the credit difference.

> The key belongs to the **campaign owner**. Whoever owns a campaign determines its pricing — so if you want your whole team on the lower rate, each person running campaigns needs their own key saved.

### Credit checks when starting a campaign

If any step has AI personalization enabled, we check your balance before the campaign starts and **block the launch** if you don't have enough — rather than letting it start and stall halfway. You'll see:

> "Campaign cannot be started. Not enough credits — 1000 email(s) require 5000 credits (5/email), but only 800 available."

The check is deliberately conservative: it assumes every email will be AI-generated.

If your balance runs out mid-campaign, the campaign is **paused** rather than sending anything you can't pay for. Top up and resume.

### Editing while a campaign is running

AI personalization settings are **read-only while a campaign is active**. You'll see "This campaign is active — AI personalization settings are read-only." **Pause** the campaign to make changes, then resume.

### Is it worth it?

AI personalization costs 5× a regular email, so use it where it pays back:

- **Use it on step 1**, where personalization has the biggest impact on reply rate, and use plain templates for follow-ups.
- **Use it on high-value segments** rather than your entire list.
- **Connect your own LLM key** if you're going to use it regularly — the saving is substantial at volume.
- **Test it against a plain template** on a small batch before committing your whole list.

### Don't confuse these three AI features

| Feature | What it does | Extra credit cost |
|---|---|---|
| **AI Personalization** (this article) | A unique email per lead, at send time | Yes — 2 or 5 credits per email |
| **AI Sequence Generator** | Drafts a whole sequence for you to edit | No |
| **AI Content Generator** | Drafts a single email template | No |

Only **AI Personalization** changes your per-email cost.

---

## Article 12 — How to Manage Unsubscribes

Handling unsubscribes properly is a legal requirement in most markets and essential for protecting your sending reputation.

### The unsubscribe link

Add the `{{unsubscribe}}` variable to your email templates. It renders as an **Unsubscribe** link, and clicking it removes the recipient from your campaigns automatically.

Include it in every campaign. Under CAN-SPAM, GDPR, and similar regimes, a working opt-out mechanism isn't optional.

### What happens on unsubscribe

When someone unsubscribes:

1. They're added to your suppression list immediately.
2. Any remaining steps in their sequence stop.
3. They're excluded from future campaigns automatically.

### The suppression list

Your suppression list is a list named **"My Suppression List"** and lives with your other lists under **Lists** in the left sidebar.

Anyone on it is checked and excluded automatically when a campaign launches — matching leads are marked as **suppressed** and never receive an email.

### Adding people manually

To suppress addresses yourself — competitors, existing customers, anyone who asked to be removed by reply — add them to **My Suppression List** the same way you'd add leads to any list, including by CSV upload.

Always honour a manual opt-out request. Someone who replies "take me off your list" and then receives a follow-up is very likely to mark you as spam.

### Best practices

- **Include `{{unsubscribe}}` in every campaign**, including follow-ups.
- **Make it easy to find.** Hiding the link generates spam complaints, which are far more damaging than an unsubscribe.
- **Add customers and open opportunities to the suppression list** before launching, so nobody gets a cold pitch for something they already bought.
- **Watch your unsubscribe rate.** A rate above 2-3% usually means your targeting is off, not that your copy is bad.

---

## Article 13 — How to Read Your Analytics & Reports

### Where to find your numbers

**Campaign-level analytics** live in each campaign's **Analytics** tab — this is where the detail is.

**Account-level summary** figures appear on your **Dashboard**: Total Campaigns, Clicks, Bounces, and Open Rate.

There's no separate cross-campaign analytics page — to compare campaigns, open each one's Analytics tab.

### The core metrics

| Metric | What it tells you | Healthy range |
|---|---|---|
| **Sent** | Emails dispatched | — |
| **Delivered** | Emails that reached the server | 97%+ |
| **Open Rate** | Recipients who opened | 40-60% |
| **Reply Rate** | Recipients who replied | 5-10% |
| **Click Rate** | Recipients who clicked a link | 2-5% |
| **Bounce Rate** | Emails that couldn't be delivered | Under 3% |

### Reading the numbers

**Reply rate is the only metric that matters commercially.** Opens are unreliable — privacy features inflate them — and clicks only matter if your email contains a link. Optimise for replies.

**Diagnosing a low reply rate:**

- **High opens, low replies** → your subject line works but the email doesn't. Rewrite the body and the ask.
- **Low opens** → subject line or deliverability problem. Check your account health score first.
- **High bounces** → list quality problem. Validate before sending (see **How to Validate Emails**).
- **Rising bounces on an old list** → the data has gone stale; re-validate it.

### Step-by-step performance

The Analytics tab includes a **step filter** — All Steps, Step 1, Step 2, and so on — so you can see how each email in your sequence performs individually.

This is the most useful view in the whole tab. It shows you exactly where leads stop engaging, so you know which step to rewrite. A follow-up that generates almost no replies is worth cutting entirely.

### Exporting

Click the export option in the Analytics tab to download your campaign data as a **CSV**.

### What to act on

- **Under 3% reply rate** — the problem is usually targeting, not copy. Check you're emailing the right people before rewriting.
- **Bounce rate above 3%** — stop the campaign and validate the list.
- **Falling health score** — reduce daily volume and let warm-up recover the account.

---

## Article 14 — How to Use the AI Content Generator

The AI Content Generator drafts a single email from a plain-English description — useful when you're staring at a blank editor.

### Generate an email

1. Open the email editor for a step.
2. Open the **AI Content Generator**.
3. Describe the email you want in the text box, for example:

   > "A short cold email to VPs of Sales at mid-size SaaS companies, introducing our lead enrichment tool and asking for a 15-minute call."

4. Click **Generator**.

You'll get back one subject line and one email body, written in a professional, conversational tone.

### Working with the output

The generator produces one draft at a time. To get a different result, change your description and run it again — the more specific your description, the better the output.

Treat what comes back as a starting point:

- Rewrite anything that doesn't sound like you.
- Check every claim about your product.
- Add personalization variables using the picker (`{{firstName}}`, `{{companyName}}`).
- Cut it down. Generated emails tend to run long; under 150 words performs better.

### Writing a good description

Include:

- **Who** you're writing to — role, industry, company size
- **What** you're offering and the outcome it delivers
- **What** you want them to do
- Any constraints, like length or tone

Compare:

> ❌ "Write a sales email"
>
> ✅ "A 100-word cold email to heads of marketing at B2B SaaS companies with 50-200 employees, offering a tool that cuts reporting time by 80%, asking if they're open to a short call next week."

### Related AI features

- **AI Sequence Generator** — drafts an entire multi-step sequence rather than one email
- **AI Personalization** — writes a unique email for every lead at send time (costs extra credits per email)

---

## Article 15 — How to Use the AI Spintax Generator

Spintax creates multiple wordings of the same sentence so that no two recipients receive an identical email. Sending hundreds of byte-identical emails is a strong spam signal — spintax breaks that pattern.

### How spintax works

Spintax uses curly braces and pipes to mark alternatives:

```
{Hi|Hello|Hey} {{firstName}}, {I noticed|I saw} you're {leading|heading up} sales at {{companyName}}.
```

Each recipient gets one randomly chosen option from each set, so the same template produces many different emails.

### Generate spintax automatically

1. Write your email normally in the editor.
2. Click the **AI Spintax Generator** button in the editor toolbar.

Your subject and body are converted into spintax format in one step, with alternatives added throughout.

### Review before sending

Always read the generated spintax before launching:

- Check that **every combination reads naturally**. A machine-generated alternative can be grammatically fine but sound wrong.
- Make sure the alternatives are genuine synonyms and don't change your meaning.
- Confirm the tone is consistent across variations.

### Keep variables outside the brackets

Personalization variables should sit **outside** spintax braces:

✅ `{Hi|Hello} {{firstName}}`

❌ `{Hi {{firstName}}|Hello {{firstName}}}`

Keeping them separate is easier to read and avoids mistakes when editing.

### Best practices

- **Vary the opening and closing lines most** — these are the most repeated parts of a cold email.
- **Two to three alternatives per set is plenty.** More adds complexity without improving deliverability.
- **Don't spin your core message.** Your value proposition should stay consistent so you can tell what's working.
- **Send yourself several tests** to see different combinations before launching.

### Spintax and deliverability

Spintax helps with pattern detection, but it's not a substitute for the fundamentals: a warmed-up mailbox, a validated list, conservative daily volume, and a genuinely relevant message. Use it alongside those, not instead of them.

---

## Article 16 — How to Use Unibox (Unified Inbox)

**Unibox** is your unified inbox — every reply from every connected email account and campaign, in one place, so you can work your responses without switching between mailboxes.

Click **Unibox** in the left sidebar. (The same inbox also appears inside the CRM under **CRM → Inbox** — it's the same tool in both places.)

### What Unibox shows

Unibox brings together the email your connected mailboxes receive and send. You can view everything across all your accounts at once, or narrow it to a single campaign or a single sending account.

### Folder tabs

Across the top you'll find:

- **All** — everything in your inbox
- **Unread** — messages you haven't opened yet
- **Sent** — messages you've sent
- **Spam**
- **Trash**

### Reading and replying

Open any conversation to read the full thread. Each message shows the sender, date, and a **"Sent via {account}"** badge so you always know which mailbox it involves.

From an open message you can:

- **Reply**
- **Reply all**
- **Forward**

Replies and forwards are always sent **from the account that received the message**, so your conversation stays on the right mailbox. Subjects are prefixed with `Re:` or `Fwd:` automatically, and you can add **CC** and **BCC**.

### Composing a new email

Click to compose and you'll get the **Compose Email** window — "Send a message from any connected email account." Here, unlike a reply, you **choose which account to send from**. Fill in the recipients, subject, and message, optionally set a status, and send.

### Attachments

Attach files to any reply, forward, or new message. **Each attachment must be under 10 MB.** On incoming messages with attachments, you can download them individually or use **Download all**.

### Filtering your inbox

The left panel gives you three ways to narrow things down, plus search:

- **Status** — filter by email badge status (see below)
- **Campaigns** — filter to a specific campaign, or drill into one of its sending accounts
- **All Inbox** — pick which connected accounts to show, or **Select visible accounts**
- **Search** — "Search by name, subject, or message"

By default all your accounts are selected, so you see everything until you filter.

### Email badge statuses

Badge statuses let you label conversations to track where each reply stands — for example marking someone as interested, or as a booked meeting.

- Set a status on any conversation from the message view.
- Filter the whole inbox by status using the **Status** panel.
- Create your own statuses with **Add status**, and rename or delete the ones you've created.
- Some default statuses are provided for everyone; those can't be renamed or deleted.

Statuses are shared with the CRM, so a status you set here is visible on the lead's record too.

### Capture a sender as a CRM lead

If someone replies who isn't yet in your CRM, click the **add-lead** button in the message header to open the **Add Lead To CRM** panel — "Capture this sender directly from Unibox." Their name and email are pre-filled from the message; add a phone, company, or target list, and save them straight into the CRM.

### Reading and unread

Opening a message marks it as read. Unread messages show a blue dot in the list. The inbox refreshes automatically after you reply, forward, compose, or change a status.

### Tips

- **Work Unibox top to bottom at set times.** Filter to **Unread**, and turn each positive reply into a CRM lead, a deal, or a meeting before moving on.
- **Use badge statuses as a mini-pipeline** — "interested," "meeting booked," "not now" — so you can filter back to the replies that need action.
- **Filter by campaign** to review how one campaign's responses are landing without the noise of everything else.
- Adjust the **page size** (10, 20, 50, or 100 per page) to match how you like to work through replies.

---

## Article 17 — Domains & Deliverability

Deliverability is what decides whether your emails land in the inbox or the spam folder. It starts with the domain you send from. This article covers how domains work in SalesTarget.ai and how to keep your sending reputation healthy.

### Why the sending domain matters

**Don't run cold outreach from your primary company domain.** If a cold campaign triggers spam complaints, it can damage the reputation of the domain your whole business relies on for everyday email. The standard practice is to send outreach from a **separate domain** dedicated to it, so your main domain stays protected.

You have two ways to set this up in SalesTarget.ai.

### Option A: Buy a domain through SalesTarget.ai (recommended)

The simplest path — the platform buys the domain, creates the mailboxes, and configures everything needed for sending, so you don't touch DNS at all.

1. Go to **Email Accounts** and click **Add Email Account**.
2. Choose **Create your own Domain/G-suite**.
3. **Search for a domain** — enter a keyword to generate suggestions, or tick **Search for exact domain** to look up a specific name.
4. **Add** the domains you want, then click **Buy Now**.
5. In the **Order Summary**, add the mailboxes you want on each domain (First Name, Last Name, and the email address). You can create up to **5 mailboxes per domain**.
6. Click **Place Order** and complete checkout.

Mailboxes are provisioned on **Google Workspace**. Allow up to **24 hours** for everything to be ready, since DNS propagation takes time.

**The key benefit: all the deliverability records are set up for you.** SPF, DKIM, DMARC, and the domain's mail configuration are handled automatically on domains you buy through the platform. There are no DNS records for you to add or verify.

### Option B: Connect a domain you already own

If you already have a dedicated outreach domain and mailboxes, connect them directly — Gmail / Google Workspace, Office 365 / Outlook, or IMAP/SMTP. See **How to Connect Your Email Account** for the full steps.

When you bring your own domain, its **deliverability records are your responsibility** at your DNS provider. For any domain you send cold email from, make sure these three are configured — they're the foundation of email authentication and every mailbox provider checks them:

- **SPF** — authorises SalesTarget.ai's/your provider's servers to send for your domain
- **DKIM** — cryptographically signs your emails so they can't be forged
- **DMARC** — tells receiving servers what to do with mail that fails the above

Your email provider (Google Workspace, Microsoft 365, or your host) documents the exact records to add. Set them up before you send a single campaign.

### Sender Defaults across a domain

Once you have a domain with several mailboxes, you can set a shared identity for all of them rather than configuring each one.

1. On the **Email Accounts** page, switch on **Show domains** to group your mailboxes by domain.
2. Open a domain and go to the **Settings** tab.
3. Under **Sender Defaults** — "Default sender identity applied across this domain" — set the **First Name**, **Last Name**, **Signature**, and **Tags**.
4. Save.

A banner confirms: **"These settings apply to all email accounts in this domain."** For a single mailbox, the same card appears as **Sender Details**.

### How domains and mailboxes fit together

A domain is simply a group of mailboxes that share the same address suffix (everything after the `@`). Use the **Show domains** toggle on the Email Accounts page to switch between **All Emails** and **All Domains**. Opening a domain shows its stats — **Domain**, **Accounts**, and **Warmup Enabled** — and tabs for **Settings**, **Emails**, and **Warmup**.

### Keep your reputation healthy

Buying a well-configured domain is the start, not the finish. Deliverability is an ongoing discipline:

- **Warm up every mailbox** before sending, and keep warm-up running alongside campaigns. See **How to Set Up Email Warm-up**.
- **Watch your Health Score.** Each mailbox shows a colour-coded score — **green (80+)** is healthy, **yellow (50-79)** needs attention, **red (below 50)** means stop sending from it. You can apply warm-up at the domain level to cover every mailbox at once.
- **Spread volume across mailboxes** with inbox rotation rather than pushing one account hard. See **How Inbox Rotation Works**.
- **Validate your lists** so you're not bouncing on invalid addresses — bounces damage reputation faster than almost anything. See **How to Validate Emails**.
- **Keep daily volume conservative**, especially on new domains and mailboxes.
- **Write like a human.** Spam-trigger words, heavy links, and image-only emails all hurt deliverability regardless of how well your domain is set up.

### The deliverability checklist

Before launching any campaign:

1. Sending from a **dedicated domain**, not your primary one
2. **SPF, DKIM, and DMARC** in place (automatic on domains bought through the platform)
3. Every mailbox **warmed up** with a healthy Health Score
4. Your **list validated**
5. **Inbox rotation** on if you're sending at volume
6. A **test email** sent to yourself to confirm formatting and that variables resolved

---

## Article 18 — How to Configure Campaign Settings

Every campaign has a **Settings** tab where you control which mailboxes send it, who owns it, tracking, and sending behaviour. Open your campaign and go to the **Settings** tab.

### Select Account (sending mailboxes)

Under **Select Account** — "Choose one or more accounts to send emails" — pick the mailbox or mailboxes this campaign sends from. Choosing more than one turns on **inbox rotation** automatically (see **How Inbox Rotation Works**).

> **An email account already in a running or scheduled campaign won't appear in this list.** A mailbox can only be assigned to one active campaign at a time, so it doesn't get overloaded by two campaigns sending at once. If a mailbox is missing, it's in use by another active campaign — it frees up when that campaign completes or is paused.

### Owner

Set the **Owner** of the campaign — "Select the owner of this campaign." The owner is the team member the campaign belongs to. On AI campaigns, the owner's account also determines credit pricing (see **AI-Personalized Emails & Credit Costs**).

### CC and BCC

Add **CC Recipients** and **BCC Recipients** if you want every email in the campaign to copy someone — for example BCC'ing a CRM address or a teammate.

### Stop sending on reply

**Stop sending on reply** halts the remaining sequence for any lead who replies. Keep this **on** for almost every campaign — it's what prevents you from following up with someone who's already answered.

### Tracking

- **Email Open Tracking** — records when a recipient opens your email.
- **Link Tracking** — records when a recipient clicks a link.

Tracking powers your Open Rate and Click Rate in analytics, but adds a tracking pixel and rewrites links, which can slightly affect deliverability. Many senders turn **open tracking off** and rely on **reply rate** as the true measure of success. Link tracking is worth keeping on only if your emails contain links you care about measuring.

### Send Message as Thread

**Send Message as Thread** (threading) sends follow-ups inside the original email thread, keeping the same subject line throughout the sequence. See **How to Set Up Follow-up Automation**.

### Auto optimize A/B Testing

**Auto optimize A/B Testing** turns on automatic winner selection when your steps have two variants. Set **Choose winning metric** to **Reply Rate**, **Open Rate**, or **Click Rate** — the system tests both variants on the first half of your leads, then sends the winner to the rest. See **How A/B Testing Works**.

### Settings lock once a campaign is running

While a campaign is **running or completed**, its settings become **read-only** ("Read-only – Campaign is running or completed"). To change them, pause the campaign first, make your changes, then resume.

### Tips

- **Assign your sending accounts before anything else** — if the mailbox you want isn't listed, it's tied up in another active campaign.
- **Leave Stop sending on reply on.** There's rarely a reason to keep emailing someone who replied.
- **Consider turning open tracking off.** Reply rate is the metric that matters, and untracked emails land slightly better.
- **Set CC/BCC to your CRM** if you want a copy of every send logged elsewhere automatically.
