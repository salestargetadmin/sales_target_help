# LinkedIn Outreach — Help Center Collection

**Collection description (for the collection card):**
> Run safe, automated LinkedIn connection and message campaigns with built-in warm-up and account protection.

Each `## Article N` section below is one Intercom article. UI labels are bolded exactly as they appear in the product.

---

## Article 1 — What is LinkedIn Outreach?

LinkedIn Outreach lets you automate your LinkedIn prospecting — connection requests, messages, profile visits, and post engagement — while staying inside safe activity limits that protect your account.

### Where to find it

Click **Linkedin + Email Outreach** in the left sidebar. Inside, you'll find:

| Section | What it's for |
|---|---|
| **Campaigns** | Build and run your LinkedIn sequences |
| **Analytics** | Track acceptance rates, replies, and campaign performance |
| **Messages** | Read and reply to LinkedIn conversations |
| **My Network** | View and manage your connections |
| **Accounts** | Connect LinkedIn accounts and configure daily limits |

### What you can automate

| Action | What it does |
|---|---|
| **Send LinkedIn Connection Request** | Sends a connection invite, with an optional note |
| **Send LinkedIn Message** | Messages a lead you're already connected with |
| **View LinkedIn Profile** | Visits a prospect's profile — they get a "viewed your profile" notification |
| **Like LinkedIn Post** | Likes the lead's most recent post |
| **Comment on LinkedIn Post** | Comments on the lead's most recent post |
| **Endorse Skill** | Endorses a skill on the lead's profile |
| **Send Email** | Sends an email as part of the same sequence |

### Why the warm-up actions matter

Profile visits, likes, comments, and endorsements aren't just filler. They make your account look like a real person using LinkedIn rather than a bot that only sends connection requests, and they warm the prospect up before you ask to connect — someone who's seen your name twice is more likely to accept.

### Account safety comes first

LinkedIn actively restricts accounts that behave like automation. SalesTarget.ai enforces daily and weekly limits, ramps new accounts up gradually through a warm-up schedule, and automatically pauses campaigns if your account gets restricted.

**Start with Account Safety & Daily Limits before running your first campaign.**

---

## Article 2 — How to Connect Your LinkedIn Account

### Connect an account

1. Click **Linkedin + Email Outreach** in the left sidebar.
2. Go to **Accounts**.
3. Click **Add Account**.
4. Enter your **LinkedIn email address and password** in the form.
5. Optionally choose a **Proxy Country**.
6. Complete any verification LinkedIn asks for — a code sent to your email, or a two-factor prompt.
7. Wait for the sync to finish.

> You enter your LinkedIn credentials directly into the SalesTarget.ai form. They're used to establish and maintain the automated session with LinkedIn on your behalf.

### Choose a Proxy Country

Selecting a **Proxy Country** assigns your account a dedicated residential proxy in that region.

Pick the country you normally log in from. LinkedIn watches for sudden location changes — if you usually sign in from London and your automation suddenly appears to run from Singapore, that's a strong signal something's wrong, and it's a common cause of account restrictions.

### The sync step

After you connect, your account **syncs** — importing your connections and network data. This takes a few minutes.

Sync status can be pending, in progress, completed, or failed. If it fails, use the resync option on the **Accounts** page. **Don't start a campaign until sync has completed**, or your campaign won't correctly know who you're already connected to.

### How many accounts can you connect?

The number of LinkedIn accounts you can connect is set by the **account slots** available on your organization's plan, not by the number of user seats. Your **Accounts** page shows how many slots you have and how many are in use.

### If your account disconnects

LinkedIn sessions expire, and changing your LinkedIn password will disconnect the account. When that happens:

1. Go to **Accounts**.
2. Find the disconnected account.
3. Run the **reconnect** flow and follow the steps, including any verification.

Reconnecting takes you through the same multi-step process as the initial connection. Campaigns are paused while an account is disconnected, and resume once it's reconnected.

### Next step

Set your daily limits and warm-up before running a campaign — see **LinkedIn Account Safety & Daily Limits**.

---

## Article 3 — LinkedIn Account Safety & Daily Limits

LinkedIn restricts accounts that behave like bots. These settings keep your activity in a safe range.

### Where to set your limits

1. Go to **Linkedin + Email Outreach → Accounts**.
2. Open the account you want to configure.
3. Go to the **Account limits** tab.

### Daily limit sliders

Each action type has its own slider:

| Action | Default | Maximum |
|---|---|---|
| Connection requests | 20 | 50 |
| Messages | 50 | 80 |
| Profile views | 100 | 100 |
| Like Post | 50 | 80 |
| Post Comments | 20 | 50 |
| Endorse skills | 25 | 50 |

The defaults are deliberately conservative. **Don't raise them on a new account** — build up gradually using warm-up mode instead.

Your actual ceiling depends on your LinkedIn account type. Sales Navigator and Recruiter accounts support higher volumes than a standard free account.

### Warm-up mode

Turn on the **Warm-up mode** toggle to have your limits ramp up automatically over a set schedule instead of starting at full volume.

When enabled, your account starts at a very low daily volume and increases week by week until it reaches its post-warm-up maximum. Your account age is calculated automatically — there's nothing to select.

**Turn warm-up on for any new or previously unused account.** See **LinkedIn Sending Limits & Warmup Schedule** for the full week-by-week figures.

### Weekly caps

As well as daily limits, there's a **weekly cap on connection requests** that applies on top:

| Account type | Weekly connection cap |
|---|---|
| Standard | 100 |
| Premium | 150 |
| Sales Navigator | 200 |
| Recruiter | 250 |

Even if your daily limit would allow more, sending stops once you hit the weekly cap.

### The 30% acceptance rate rule

If your connection acceptance rate falls **below 30%**, your daily connection limit is automatically **reduced by 50%**.

A low acceptance rate is the clearest signal that you're contacting people who don't recognise or want to hear from you — and it's exactly what LinkedIn looks at when deciding to restrict an account. Rather than let you keep going, the system slows you down.

If this happens, fix the cause: tighten your targeting, improve your connection note, and make sure your own profile is complete and credible.

### Automatic protection

If your LinkedIn account is detected as **restricted**, campaigns using that account are **paused automatically** to prevent further damage.

If this happens:

1. Log into LinkedIn directly and resolve whatever it's asking for.
2. Leave the account idle for several days.
3. Restart with warm-up mode on and lower limits than before.

### Staying safe

- **Warm up every new account.** This is the single most effective protection.
- **Keep your acceptance rate above 30%.** Better targeting beats higher volume every time.
- **Personalize connection notes.** Generic invites get ignored, and ignored invites drag your acceptance rate down.
- **Use the warm-up actions.** Profile visits and post engagement make your activity look human.
- **Use your account manually too.** An account that only ever performs automated actions stands out.
- **Don't change your proxy country** once you've set it.

---

## Article 4 — How to Create a LinkedIn Campaign

### The steps

Creating a campaign takes you through these stages:

1. **Campaign Name**
2. **Select Audience**
3. **Create Sequence**
4. **Add your accounts** (LinkedIn, and email if you're using email steps)
5. **Verify & Launch**

### Step 1: Campaign Name

Go to **Linkedin + Email Outreach → Campaigns** and start a new campaign. Give it a descriptive name — including the segment and month makes campaigns easy to find later.

### Step 2: Select Audience

Add the leads you want to target. You can pull them from a saved list, from Lead Explorer, or by uploading them.

**Leads need a LinkedIn profile URL.** Anyone without one can't be actioned and will be filtered out.

### Step 3: Create Sequence

Build your sequence on the visual canvas. Click **Add Step** to add an action, and **Add Conditions** to branch the sequence.

**Available actions**

| Action | What it does |
|---|---|
| Send LinkedIn Connection Request | Sends an invite, with an optional note up to 300 characters |
| Send LinkedIn Message | Messages a lead you're connected with |
| View LinkedIn Profile | Visits the prospect's profile |
| Like LinkedIn Post | Likes their most recent post |
| Comment on LinkedIn Post | Comments on their most recent post |
| Endorse Skill | Endorses a skill on their profile |
| Send Email | Sends an email within the same sequence |

**Delays** are set on each step — choose how many days or hours to wait after the previous action, rather than adding a separate delay step.

**Conditions** let the sequence branch based on what happened:

- **If Connected** — continue only if your invite was accepted
- **If Email Opened** — branch on email engagement
- **If Email Clicked** — branch on a link click

The most common structure uses **If Connected** after a connection request, so only people who accepted receive your follow-up message.

**AI Personalization** can be enabled per step — see **How to Use AI Message Writing**.

### Step 4: Add your accounts

After building your sequence, choose the accounts the campaign will run from:

- **Select LinkedIn Accounts** *(required)* — pick one or more connected LinkedIn accounts to run the campaign from. Selecting more than one spreads the activity across them, which helps you stay within each account's safe daily limits.
- **Select Email Accounts** *(optional)* — only needed if your sequence includes a **Send Email** action. Choose the email account(s) those emails should send from. You can skip this if your sequence is LinkedIn-only.

If a LinkedIn or email account you want isn't listed, connect it first from the **Accounts** page (LinkedIn) or **Email Accounts** page, then come back to the campaign.

### Step 5: Verify & Launch

Review your audience, sequence, and selected accounts, then click **Launch Campaign**.

### A recommended structure

| Step | Action | Delay |
|---|---|---|
| 1 | View LinkedIn Profile | — |
| 2 | Like LinkedIn Post | 1 day |
| 3 | Send LinkedIn Connection Request (with note) | 1 day |
| — | **If Connected** | — |
| 4 | Send LinkedIn Message | 2 days |
| 5 | Send LinkedIn Message (follow-up) | 4 days |

Warming up with a profile view and a like before the invite consistently improves acceptance rates.

---

## Article 5 — How to Automate Connection Requests

Connection requests are the foundation of LinkedIn outreach — you generally need to be connected before you can message someone.

### Add a connection request

1. In your campaign sequence, click **Add Step**.
2. Choose **Send LinkedIn Connection Request**.
3. Optionally write a connection note.
4. Set the delay.

### The connection note

Notes are limited to **300 characters**. You can also send an invite with no note at all.

**With or without a note?** Both work. A short, specific note usually performs better with senior prospects, while no-note invites can perform surprisingly well at volume. Test both on your audience.

If you do write one, make it specific:

> Hi {{firstName}}, I saw your post about scaling outbound at {{companyName}} — the point about rep onboarding really landed. Would love to connect.

Avoid pitching in the invite. The note's only job is to get the invite accepted.

### Personalization variables

Use camelCase variables:

- `{{firstName}}`
- `{{lastName}}`
- `{{companyName}}`
- `{{jobTitle}}`

> Variable names are **case-sensitive**. `{{firstName}}` works; `{{first_name}}` does not and will be sent as literal text. See **How to Use Personalization & Variables**.

### Connection statuses

| Status | Meaning |
|---|---|
| **Pending** | Invite sent, not yet actioned |
| **Accepted** | They accepted — messaging steps can now run |
| **Withdrawn** | The invite was automatically withdrawn after sitting pending too long |

### Automatic withdrawal

Invites that stay pending are **withdrawn automatically after 14 days**.

This matters more than it sounds. LinkedIn counts your outstanding pending invitations, and a large backlog of ignored invites damages your standing. Automatic withdrawal keeps that queue clean.

### Keeping your acceptance rate healthy

Aim to stay **above 30%** — below that, your daily limits get cut automatically.

- **Target people who'd plausibly know why you're contacting them.** Relevance beats volume.
- **Complete your own profile.** People check who's inviting them; a thin profile gets ignored.
- **Warm up first.** A profile view or post like before the invite makes your name familiar.
- **Keep daily volume conservative,** especially on a new account.

---

## Article 6 — How to Set Up Message Sequences

Once someone accepts your connection request, messages are how the conversation starts.

### Add a message step

1. In your campaign sequence, click **Add Step**.
2. Choose **Send LinkedIn Message**.
3. Write your message.
4. Set the delay.

### Only message people who accepted

Place an **If Connected** condition before your message steps. Messages only work for connections, and this ensures your sequence branches correctly for people who never accepted.

### Writing messages that get replies

**Don't pitch in the first message.** Someone just accepted your invite — leading with a sales pitch is the fastest way to get ignored.

A structure that works:

| Message | Timing | Purpose |
|---|---|---|
| 1 | 1-2 days after accepting | Thank them, reference something specific about them. No ask. |
| 2 | 3-4 days later | Introduce what you do, tied to a problem they'd recognise. Soft ask. |
| 3 | 5-7 days later | Short, direct, easy to say no to. |

Keep messages short. LinkedIn messages are read on phones — anything over a few short paragraphs gets skipped.

### Stop on reply

When a lead replies, **all remaining steps for that lead stop automatically**. You'll never follow up on someone who's already answered you.

Replies appear in **Messages** inside the LinkedIn section.

### Personalization

Use camelCase variables: `{{firstName}}`, `{{companyName}}`, `{{jobTitle}}`. Always test before launching — unmatched variables are sent as raw text.

### Best practices

- **Space messages 3-5 days apart.** Daily follow-ups on LinkedIn feel far more intrusive than in email.
- **Two to three messages is enough.** If there's no response after three, move on.
- **Make each message add something new** — a resource, an insight, a different angle.
- **Write like a person.** LinkedIn is a conversational channel; formal sales copy stands out for the wrong reasons.

---

## Article 7 — How to Automate Profile Visits

A profile visit sends the prospect a "viewed your profile" notification — a light, non-intrusive way to get on someone's radar before you ask for anything.

### Add a profile visit

1. In your campaign sequence, click **Add Step**.
2. Choose **View LinkedIn Profile**.
3. Set the delay.

### Why it works

Profile visits are the lowest-friction action available. There's nothing to accept or decline, and many people check who viewed them. When your connection request arrives a day or two later, your name is already familiar — and that lifts acceptance rates.

Profile visits also make your account look like a real person browsing LinkedIn rather than an automation that only fires connection requests.

### Where to place it

**Before your connection request.** The most effective pattern is:

1. View LinkedIn Profile
2. (wait 1-2 days)
3. Like LinkedIn Post
4. (wait 1 day)
5. Send LinkedIn Connection Request

Two touches before the ask, none of which require anything from the prospect.

### Daily limits

Profile views have a higher ceiling than any other action — the default is **100 per day**, and higher tiers support more:

| Account type | Daily profile views |
|---|---|
| Standard | 100 |
| Premium | 200 |
| Sales Navigator | 250 |
| Recruiter | 300 |

Actions are spaced out automatically to look natural rather than firing in bursts.

### Best practices

- **Make sure your own profile is worth visiting.** The whole point is that they look at you — a clear headline, photo, and description of who you help is essential.
- **Don't visit the same person repeatedly.** Once is a signal; repeatedly is unsettling.
- **Combine with post engagement** for a stronger warm-up.

---

## Article 8 — How to Automate Post Engagement (Likes & Comments)

Engaging with a prospect's content is the warmest possible introduction — you're showing up as someone who's actually read their work.

### Available actions

| Action | What it does |
|---|---|
| **Like LinkedIn Post** | Likes the lead's most recent post |
| **Comment on LinkedIn Post** | Comments on the lead's most recent post |

Both target the prospect's **latest post** automatically.

### Add post engagement

1. In your campaign sequence, click **Add Step**.
2. Choose **Like LinkedIn Post** or **Comment on LinkedIn Post**.
3. For comments, write your comment template.
4. Set the delay.

If a lead has no recent post, the step is skipped and the sequence moves on.

### Writing comments that don't embarrass you

This is the highest-risk automation in the platform, because a bad automated comment is **publicly visible** on your prospect's post.

Keep comments generic enough to fit any post but specific enough to sound human:

✅ "Really useful perspective on this — thanks for sharing."
✅ "This matches what we've been seeing too. Appreciate you writing it up."

❌ "Great post!" — obvious automation
❌ Anything that claims to reference specific content you haven't read

There's also an option to **mention the lead in the comment**, which increases the chance they notice it.

**If you're not comfortable with a comment appearing publicly under your name on any post, use likes only.** Likes carry almost the same warm-up benefit with none of the risk.

### Where to place it

Before your connection request, as part of a warm-up sequence:

1. View LinkedIn Profile
2. Like LinkedIn Post
3. Send LinkedIn Connection Request

### Daily limits

Post likes default to **50 per day** (maximum 80). Comments have their own configurable limit — keep this one low. High comment volume is both a spam signal to LinkedIn and a reputational risk for you.

### Best practices

- **Prefer likes over comments** unless you've carefully written your comment templates.
- **Keep comment volume low** — a handful a day is plenty.
- **Review your comment history occasionally** to see how your automated engagement looks from the outside.

---

## Article 9 — How to Use Personalization & Variables

Variables let one message template address every prospect by name and company.

### Available lead variables

| Variable | Inserts |
|---|---|
| `{{firstName}}` | The lead's first name |
| `{{lastName}}` | The lead's last name |
| `{{fullName}}` | Full name |
| `{{companyName}}` | Company name |
| `{{jobTitle}}` | Job title |
| `{{headline}}` | Their LinkedIn headline |
| `{{location}}` | Location |
| `{{industry}}` | Industry |
| `{{email}}` | Email address |

### Sender variables

To refer to yourself, use the `my_` prefixed variables:

| Variable | Inserts |
|---|---|
| `{{my_first_name}}` | Your first name |
| `{{my_last_name}}` | Your last name |
| `{{my_company_name}}` | Your company name |
| `{{my_job_title}}` | Your job title |

### ⚠️ Variable names are case-sensitive

**Correct:** `{{firstName}}`, `{{companyName}}`, `{{jobTitle}}`

**Wrong:** `{{first_name}}`, `{{company_name}}`, `{{job_title}}`

If a variable doesn't match exactly, **it is not replaced** — the raw `{{first_name}}` text is sent to your prospect. There's no fallback and no warning. This is the most common mistake in campaign setup.

**Always send yourself a test before launching** and confirm no `{{...}}` text remains.

### Organization variables

You can create reusable variables holding the **same value for everyone** — a calendar link, a demo URL, a resource. Set them up once and use them in any campaign, for example `{{calendarLink}}`.

These hold one fixed value per organization. The same text is substituted for every recipient.

### Missing data

If a lead has no value for a variable — no company name, for instance — nothing is substituted and the raw placeholder is sent. Before launching:

- Check your list for leads with missing fields.
- Prefer variables that are almost always populated. `{{firstName}}` is reliable; `{{industry}}` often isn't.
- Write messages that still read well if one variable is thin.

### Personalization that isn't a variable

The strongest LinkedIn personalization isn't a merge field. Referencing someone's recent post, a company announcement, or a shared connection will always outperform `{{firstName}}`.

For genuinely per-prospect personalization at scale, use **AI Message Writing**, which generates unique text per lead using their profile and company research.

---

## Article 10 — How to Use AI Message Writing

### Per-step AI personalization

You can have AI write a unique message for each individual lead, based on their profile and company research.

1. Open the step you want in your campaign sequence.
2. Turn on the **AI Personalization** toggle.
3. Write an **AI Prompt** describing how the message should be personalized.
4. Save.

The prompt field's guidance is "Describe how AI should personalize the message" — focus on the angle and the ask, not the raw data.

An example prompt:

> "Open by referencing something specific from their role or recent activity. Explain in one sentence that we help B2B sales teams cut prospecting time in half. Ask if they're open to a quick chat. Keep it under 60 words and conversational."

### AI inserts real names, not variables

This is important and catches people out: **the AI writes the actual name and company directly into the message**. You don't add `{{firstName}}` to an AI-personalized step — the generated text already contains "Hi Sarah" rather than a placeholder.

Mixing AI personalization with manual variables in the same step is unnecessary and can produce odd results.

### The fallback template

Each AI step can have a **Fallback Template** — a complete alternative message used if AI generation fails for a lead.

Always set one. Without it, a lead whose generation fails may be skipped entirely. The fallback should be a solid generic version of the same message, using standard variables.

### Generate a whole sequence with AI

To draft an entire sequence rather than one message, use the **AI Sequence Generator**. It asks for:

- **Company Name**
- **Your Services**
- **Target Audience**
- **Case Studies**
- **No. of Steps**

Generation runs in the background and the sequence appears when ready.

### Review everything before launching

AI drafts are a starting point:

- Read every generated message and rewrite anything that doesn't sound like you.
- Check any claims about your product.
- Make sure the tone suits LinkedIn — conversational, not formal sales copy.
- Confirm the length is right. LinkedIn messages should be short.

### Getting better output

- **Be specific about the outcome you deliver.** "We cut reporting time by 80% for B2B agencies" produces far better copy than "we do sales software."
- **Specify length in your prompt.** Without it, AI writes too long for LinkedIn.
- **Include real results in Case Studies** so the AI has something credible to work with.
- **Test on a small batch first** and read what it produced before scaling up.

---

## Article 11 — How to Read Your LinkedIn Analytics

### Where to find it

Go to **Linkedin + Email Outreach → Analytics**, or open a campaign and view its analytics.

### The metrics

| Metric | What it tells you |
|---|---|
| **Connections Sent** | Connection requests dispatched |
| **Connections Accepted** | Requests that were accepted |
| **Acceptance Rate** | Accepted ÷ sent |
| **Messages Sent** | Messages dispatched |
| **Response Rate** | Share of messages that got a reply |
| **Profile Views** | Profiles visited |
| **Post Likes** | Posts liked |

### Acceptance rate is your most important number

It's both a performance measure and a safety measure.

| Acceptance rate | What it means |
|---|---|
| **Above 50%** | Strong targeting — you could scale up |
| **30-50%** | Healthy |
| **Below 30%** | Your daily limits get cut by 50% automatically |

If acceptance drops below 30%, don't push harder — fix the cause. It's almost always targeting, occasionally a weak profile or a bad connection note.

### Diagnosing your funnel

- **Low acceptance rate** → wrong audience, thin profile, or a poor connection note. Add profile-view and post-like warm-up steps before the invite.
- **Good acceptance, low reply rate** → your messaging is the problem. Check you're not pitching in the first message after connecting.
- **Both low** → step back and reconsider your targeting entirely.

### Exporting

Campaign analytics are viewed in the dashboard. Your **connections** can be exported to CSV from the connections table.

### What to watch weekly

- **Acceptance rate** — the leading indicator of both performance and account safety
- **Reply rate** — the only metric that reflects real commercial interest
- **Daily volume vs your limits** — make sure you're not consistently maxing out

---

## Article 12 — LinkedIn Sending Limits & Warmup Schedule

New LinkedIn accounts can't safely start at full volume. Warm-up mode ramps your limits up week by week.

### Turn on warm-up

Go to **Accounts**, open your account, open the **Account limits** tab, and turn on **Warm-up mode**. Your schedule is applied automatically based on your LinkedIn account type.

### Warm-up duration by account type

| Account type | Warm-up period |
|---|---|
| Standard | 42 days |
| Premium | 28 days |
| Sales Navigator | 21 days |
| Recruiter | 21 days |

### Standard account schedule (42 days)

| Week | Connections/day | Messages/day | Profile views/day | Likes/day | Comments/day |
|---|---|---|---|---|---|
| 1 | 3 | 5 | 10 | 2 | 1 |
| 2 | 5 | 10 | 20 | 5 | 2 |
| 3 | 8 | 15 | 35 | 10 | 3 |
| 4 | 11 | 25 | 50 | 20 | 4 |
| 5 | 15 | 35 | 70 | 30 | 5 |
| 6 | 18 | 45 | 90 | 40 | 6 |

### Post-warm-up daily maximums

Once warm-up completes, your account reaches its full daily ceiling:

| Account type | Connections | Messages | Profile views |
|---|---|---|---|
| Standard | 20 | 50 | 100 |
| Premium | 30 | 80 | 200 |
| Sales Navigator | 40 | 100 | 250 |
| Recruiter | 50 | 150 | 300 |

### Weekly connection caps

A weekly cap applies on top of your daily limits:

| Account type | Weekly connection cap |
|---|---|
| Standard | 100 |
| Premium | 150 |
| Sales Navigator | 200 |
| Recruiter | 250 |

Sending stops once you hit the weekly cap, even if your daily allowance hasn't been used.

### Warm-up progresses on activity, not the calendar

This catches people out: warm-up advances based on **days your account was actually active**, not simply days elapsed.

If you connect an account, turn on warm-up, and then don't run anything for two weeks, you won't be two weeks further along — your progress is based on the lesser of calendar time and active time. To complete warm-up on schedule, run your campaign consistently.

### The 30% acceptance rate rule

If your acceptance rate falls **below 30%**, your daily connection limit is automatically **reduced by 50%**.

To recover: tighten your targeting, improve or remove your connection note, complete your own profile, and add warm-up actions before your invites.

### If your account is restricted

Campaigns using a restricted account are **paused automatically**.

1. Log into LinkedIn directly and resolve the restriction.
2. Leave the account idle for several days — don't immediately resume.
3. Restart with warm-up mode on and lower limits than before.

### Best practices

- **Always warm up a new account.** The 42-day schedule exists for a reason.
- **Don't manually raise limits during warm-up.** It defeats the purpose.
- **Use the account manually too.** An account that only ever performs automated actions looks like automation.
- **Watch your acceptance rate weekly.** It's the earliest warning you'll get.

---

## Article 13 — How to Use Campaign Conditions

Conditions let your sequence branch based on what a prospect actually did, so people who accepted your invite get a different path from those who didn't.

### Add a condition

1. In the campaign sequence builder, click **Add Conditions**.
2. Choose the condition type.
3. Build the branch that follows it.

### Available conditions

| Condition | Branches on |
|---|---|
| **If Connected** | Whether your connection request was accepted |
| **If Email Opened** | Whether an email step was opened |
| **If Email Clicked** | Whether a link in an email was clicked |

### If Connected — the essential one

This is the condition nearly every LinkedIn campaign needs. Messages can only be sent to connections, so your sequence has to know whether the invite was accepted.

```
1. View LinkedIn Profile
2. Like LinkedIn Post
3. Send LinkedIn Connection Request
   └─ If Connected → Send LinkedIn Message → follow-up message
```

Without it, message steps queue up for people who never accepted and simply fail.

### Combining LinkedIn and email

Because sequences support a **Send Email** action, you can build a multi-channel campaign where email engagement determines your LinkedIn follow-up:

```
1. Send Email
   └─ If Email Opened → Send LinkedIn Connection Request → Send LinkedIn Message
```

Someone who opened your email but didn't reply is a much warmer target for a LinkedIn invite than a cold prospect — they already recognise your name.

### Best practices

- **Always branch after a connection request.** This is the single most valuable condition.
- **Keep it simple.** Two or three branches is manageable; a deeply nested tree becomes impossible to debug or improve.
- **Review the whole canvas before launching** and check that every branch ends somewhere sensible.
- **Give conditions time to resolve.** Set a realistic delay after a connection request — people don't accept invites within an hour.
