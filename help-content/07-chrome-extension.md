# Chrome Extension — Help Center Collection

**Collection description (for the collection card):**
> Prospect from any website or LinkedIn profile with the SalesTarget.ai Chrome extension — find decision-makers, unlock contacts, and save them to lists without leaving the page.

Each `## Article N` section below is one Intercom article. UI labels are bolded exactly as they appear in the product.

---

## Article 1 — What is the SalesTarget.ai Chrome Extension?

The **SalesTarget.ai — B2B Lead & Contact Finder** extension brings SalesTarget prospecting into your browser. Open any company's website or a LinkedIn profile, click the SalesTarget icon, and a side panel shows you who works there and how to reach them.

### What it does

- **Detects the company on the page you're on** — from the website's domain, then matches it to SalesTarget's company database
- **Shows the decision-makers** at that company, with their job title, location, and LinkedIn profile
- **Unlocks verified emails and phone numbers** on demand, spending credits only for the contacts you actually reveal
- **Works on LinkedIn profiles** — open anyone's profile and the panel matches that person to a SalesTarget lead
- **Runs the full Lead Explorer search** — the same filters as the web app, right inside the panel
- **Runs AI Copilot searches** — describe who you want in plain English
- **Saves leads to your lists** — the same lists you use in the web app

### What it doesn't do

The extension is a prospecting companion, not a replacement for the web app. Campaigns, the CRM, sequences, and settings all live in **app.salestarget.ai**. The extension's job is to find and unlock leads wherever you're already browsing, then hand them off to your lists.

### What you need

- **Google Chrome** (or another Chromium browser that supports side panels — Edge, Brave, Arc)
- **A SalesTarget account.** The extension is sign-in only — you can't create an account from it. See **How to Install and Sign In to the Extension**.
- **Credits** to unlock contact details and company enrichment. Your balance is shared with the web app — see **Credits & Usage in the Extension**.

### Everything is shared with the web app

There's no separate extension account, no separate data, and no separate credit balance. Lists you create in the panel appear in the web app immediately, leads you unlock stay unlocked everywhere, and credits you spend come out of the same organization balance your whole team shares.

---

## Article 2 — How to Install and Sign In to the Extension

### Install the extension

1. Open the **Chrome Web Store**.
2. Search for **Salestarget.ai — B2B Lead & Contact Finder**.
3. Click **Add to Chrome**, then confirm with **Add extension**.
4. Chrome installs it and the SalesTarget icon appears in your toolbar.

**Pin it for one-click access.** Click the puzzle-piece **Extensions** icon in Chrome's toolbar, find **Salestarget.ai**, and click the pin icon next to it. The SalesTarget icon now stays visible in the toolbar.

### Open the panel

Click the **SalesTarget icon** in your toolbar. The **side panel** opens on the right side of the browser window. You can also use the floating launcher on the page itself — see **How to Open and Move the Side Panel**.

### Sign in

The first time you open the panel you'll see **Log In to Continue**. There are two ways in:

**Continue with Google** — click it, pick your Google account in the window that opens, and you're signed in. This must be the same Google account your SalesTarget account uses.

**Email and password** — enter your SalesTarget email and password, then click **Continue**. The eye icon in the password field shows what you typed. **Forgot Password?** opens the reset page in a new tab.

### If two-factor authentication is on

If your account has 2FA enabled, signing in takes you to **Verify OTP**. Check your email for the **6-digit code** and enter it. If it doesn't arrive, **Resend OTP** sends a new one after a 60-second wait.

### You can't create an account from the extension

Account creation always happens in the web app. If you sign in with an email that has no SalesTarget account, the panel shows a banner with a **Create Account** button that opens **app.salestarget.ai/signup** in a new tab. Finish signing up there, then come back and sign in.

### Staying signed in

The extension remembers your session, so the panel opens straight to your leads next time. Sessions do eventually expire — when that happens the panel returns to the login screen with **"Your session expired. Please sign in again."** Just sign in again; nothing is lost.

### Signing out

Click the **credits widget** at the top right of the panel, then **Sign out** at the bottom of the dropdown.

---

## Article 3 — How to Open and Move the Side Panel

There are two ways to open the panel, and the second one never makes you leave the page.

### The toolbar icon

Click the **SalesTarget icon** in Chrome's toolbar. The side panel opens for the current tab.

### The floating launcher

The extension adds a small **SalesTarget logo pill** pinned to the right edge of every web page you visit.

- **Click the logo** — the side panel opens and the pill expands into a small vertical toolbar.
- **Hover the pill** — a drag grip slides out so you can move it.

The expanded toolbar has three buttons:

| Button | What it does |
|---|---|
| **Double chevron** (») | Closes the side panel and collapses the launcher back to the logo |
| **Open in new window** | Opens the SalesTarget web app (**app.salestarget.ai**) in a new tab |
| **Hand icon** | Drag handle — hold it and move the launcher up or down |

### Moving the launcher

If the launcher sits over something you need on the page, drag it. Hold the **grip** (hover state) or the **hand icon** (expanded state) and move it up or down the right edge. Your position is **saved** and reused on every page from then on.

### Where the launcher doesn't appear

The launcher is deliberately skipped on **local development addresses** — `localhost`, `127.0.0.1`, `*.local`, `*.test`, and private network IPs. It also never appears inside embedded frames, only on the top-level page.

### The panel follows your browsing

The side panel stays open while you browse. Switch tabs or navigate to a different site and the panel re-detects the new page automatically — new company, new leads, no need to close and reopen it.

---

## Article 4 — How to Find Leads at Any Company

This is the core of the extension: open a company's website, and the panel tells you who works there.

### How it works

1. Navigate to any company's website — their homepage, a blog post, a pricing page, anything on their domain.
2. Open the side panel.
3. The extension reads the page's **domain** (for example `mail.google.com` becomes `google.com`) and matches it against SalesTarget's company database.
4. The **Search** tab shows the company and its people.

### The Search tab

**Company Overview** — the company's logo, name, industry, and employee range. Click the **eye icon** to open the full company detail view (see **How to View Company Details & Enrichment**).

**Leads** — the decision-makers found at that company. Each lead card shows:

- **Name**, with a LinkedIn icon linking to their profile
- **Job title**
- **Company name**
- **Email** and **phone**, masked until you unlock them
- **Location**

Lead cards are paged **5 at a time**; use the pager at the bottom of the panel to move through them.

### What you can do from a lead card

- **Eye icon next to email or phone** — unlock that contact detail. See **How to Unlock Emails & Phone Numbers**.
- **Clipboard icon (top right of the card)** — add that lead to a list.
- **Access All** — unlock every masked email and phone for the leads shown. This spends credits and asks for confirmation first.

### The four tabs

| Tab | What it shows |
|---|---|
| **Search** | The company detected on the current page, and its leads — or the person, when you're on a LinkedIn profile |
| **Leads** | A fuller lead list with selection, bulk actions, and search results |
| **Companies** | The detected company, with full details and enrichment |
| **Lists** | Your lead lists — create, rename, delete, open in the web app |

### When nothing is found

- **"No website detected"** — you're on a page the extension can't read a domain from, like a `chrome://` page, a new tab, or a PDF viewer. Open a real website and reopen the panel.
- **"No company found"** — the domain doesn't match a company in the database. This happens with personal sites, very small companies, or unusual domains. Use **Lead Explorer** or the **AI Copilot** to search by name or filters instead.
- **"No people found"** — the company matched, but there are no prospects for it yet.

---

## Article 5 — How to Prospect from a LinkedIn Profile

The extension recognises LinkedIn member profiles and switches from company mode to person mode.

### Open a profile

Go to any LinkedIn profile (a `linkedin.com/in/...` page) with the panel open. The **Search** tab immediately shows a person card with their **photo, name, headline, and current company** — read straight from the page, so it works for anyone, whether or not they're in the SalesTarget database.

In the background, the extension also matches the profile against SalesTarget to pull in their contact details and employer record.

### View the details

Click the person card (or the chevron) to expand **View details**. You'll see:

**Contact**
- **Email** and **phone**, masked with a reveal button beside each
- **Location**
- **LinkedIn URL**

**Company**
- The employer's logo, name, and industry
- Employees, location, website, and LinkedIn
- **Firmographics** and **Technographics** accordions you can unlock with credits

### If the person isn't in SalesTarget

You'll still see everything visible on their profile — name, headline, company, location, photo — but the Contact section says:

> This person isn't in SalesTarget yet, so email & phone aren't available.

There's nothing to unlock in that case, and no credits are spent.

### On LinkedIn, but not on a profile

If you're on the LinkedIn feed, a search results page, or a company page, the panel shows **"Open a LinkedIn Profile to Start Prospecting"**. Open someone's profile and the panel switches over automatically.

LinkedIn itself is never treated as a company to prospect — you won't get "LinkedIn's employees" when you're browsing the feed.

### Moving between profiles

Navigate from one profile to another and the panel follows along, re-reading and re-matching each time. You don't have to close and reopen it.

---

## Article 6 — How to Unlock Emails & Phone Numbers

Contact details start masked (`•••••••@••••••`). Unlocking one spends credits and reveals the real value.

### Unlock a single contact

Click the **eye icon** next to the masked email or phone. The button spins while the lookup runs, then the real value replaces the mask.

Hovering the eye tells you the cost before you click.

### What it costs

| Field | Cost |
|---|---|
| **Email** | 2 ST Credits |
| **Phone** | 5 ST Credits |

**Email and phone are unlocked separately.** Revealing someone's email doesn't reveal their phone, and doesn't charge you for it. Unlock only what you need.

### You're never charged twice

Once a contact is unlocked it stays unlocked — for you and for everyone in your organization. Leads your team already accessed show their details straight away with no eye icon, because there's nothing left to pay for.

### Unlock everything at once with Access All

**Access All** appears above the lead list on the **Search** and **Leads** tabs. It unlocks every still-masked email and phone in one go.

Because that can be a lot of credits, it always confirms first:

> **Access all leads?**
> This will reveal email & phone for 12 leads and spend about 84 credits. Already-accessed contacts are skipped.

The button shows the exact total — **Access (84 credits)** — so you know what you're committing to. Click **Cancel** to back out; nothing is spent.

Two things to note:
- **Already-accessed contacts are skipped**, and don't count toward the total.
- On search results, **Access All** covers the **leads on the current page**, not every match across all pages.

### When there's no data

Sometimes a lookup succeeds but the dataset has no email or phone for that person. The field then reads **"No email on file"** or **"No phone on file"** in grey italics instead of a value.

### If a reveal fails

An error message appears in red under the lead. The most common causes are an insufficient credit balance or a temporary lookup timeout. Check your balance in the credits widget, then try again.

---

## Article 7 — How to Use Lead Explorer in the Extension

You don't have to be on a company's website to prospect. **Lead Explorer** runs the same filtered search as the web app, right inside the panel.

### Open it

Click the **person-with-magnifier icon** in the panel header. The Lead Explorer filter view opens. **Home** in the breadcrumb takes you back.

### Choose what you're filtering by

Two modes at the top:

- **People** — filter by person attributes (job title, seniority, department) plus company attributes
- **Business** — filter by company attributes only, and get the people who work at the matching companies

Both return **leads** — Business mode is just a company-first way of narrowing to them.

### People filters

| Filter | How to use it |
|---|---|
| **Job Title** | Type a title and press Enter. Add as many as you like. |
| **Seniority** | Pick from c-suite, VP, director, manager, owner, founder, and more |
| **Department** | Pick from sales, marketing, engineering, finance, HR, IT, product, and more |
| **Country / State / Region / City** | Type and press Enter |
| **Company Name** | Type and press Enter — narrows to people at those companies |
| **Industry** | Type and press Enter |
| **Company Size** | Pick employee bands from 1-10 up to 10001+ |
| **Company Revenue** | Pick revenue bands from 0-500K upward |
| **Has Email** | Toggle on to only return leads with an email on file |
| **Phone Number** | Toggle on to only return leads with a phone on file |

### Business filters

**Company Name**, **Company Size**, **Company Revenue**, **Country**, **State / Region**, **City**, **Industry**, and **Tech Stacks**.

### Run the search

1. Open a filter and add your values. Filters with values show a **dot** next to their name, so you can see what's active while collapsed.
2. Click **Search** at the bottom.
3. Results land in the **Leads** tab.

**Clear All** empties every filter at once.

### Working with the results

The **Leads** tab shows the total match count and pages **20 at a time**. From there you can:

- **Search Leads** — narrow the leads on the current page by name, title, or email
- **Select leads** with the checkboxes (or the select-all checkbox) and click **Add To List**
- **Unlock contacts** individually or with **Access All**
- Page through results with the pager at the bottom

### Your filters stick around

Closing the Lead Explorer view doesn't clear your filters — reopen it and they're still there. Results do clear when you browse to a different company or LinkedIn profile, so the Leads tab goes back to showing the page you're on.

---

## Article 8 — How to Search Leads with the AI Copilot

The **AI Copilot** turns a plain-English description of your ideal prospect into a Lead Explorer search.

### Run a Copilot search

1. Click the **sparkle icon** in the panel header.
2. Type what you're looking for, for example:
   - *Find me software engineer leads in USA*
   - *Marketing directors at SaaS companies with 51-200 employees*
   - *CTOs in London at companies using AWS*
3. Click **Search**.

The Copilot works out the filters your prompt implies, runs the search, and drops the results in the **Leads** tab — exactly as if you'd set the filters yourself.

### See what the AI searched for

The resolved filters are written back into the **Lead Explorer** panel. Open Lead Explorer after a Copilot search and you'll see the job titles, seniorities, locations, and company attributes it chose — so you can check its interpretation, adjust anything it got wrong, and search again.

This is the fastest way to work: describe roughly what you want, then fine-tune by hand.

### Tips for better prompts

- **Name the role and the place**: "VP of Sales in Germany" beats "sales leaders".
- **Add company context**: industry, size band, or revenue band all narrow results usefully.
- **One audience per prompt.** Asking for two different personas at once gives you a muddled filter set — run two searches instead.

### The Copilot in the extension vs. the web app

This is the **lead-search** slice of the Copilot. The full Copilot in the web app also creates campaigns, manages lists, queries your CRM, and reports on analytics — see the **Co-pilot** collection for those.

---

## Article 9 — How to Save Leads to Lists

Lists are how leads get out of the extension and into your campaigns. They're the same lists you use in the web app.

### Add a single lead

Click the **clipboard icon** at the top right of any lead card. The **Add to List** dialog opens:

1. Pick a list from the **Select list** dropdown.
2. Click **Save**.

You'll see **"Added 1 lead to the list."** and the dialog closes.

### Add several leads at once

On the **Leads** tab:

1. Tick the checkbox on each lead you want — or use the select-all checkbox to take the whole page.
2. The counter at the top shows how many are selected.
3. Click **Add To List**.
4. Choose a list and click **Save**.

### Create a list while adding

In the **Add to List** dialog, click **Create New List**, type a name, and click **Add**. The new list is created and selected for you — then click **Save**.

### Manage your lists

The **Lists** tab shows every list in your organization:

- **Create a list** — type a name in the box at the top and click **Create List**
- **Eye icon** — opens that list in the web app in a new tab, where you can see its leads, export them, or push them into a campaign
- **Pencil icon** — rename the list, or **Delete** it

### What happens next

Once leads are in a list, everything else happens in the web app: exporting, enriching in bulk, and adding the list to an email or LinkedIn campaign. See **How to Save Leads to a List in Lead Explorer** and **How to Send Leads to Your Campaigns** in the Lead Explorer collection.

---

## Article 10 — How to View Company Details & Enrichment

The **Companies** tab holds everything the extension knows about the company on the page you're on.

### Open it

Either click the **Companies** tab, or click the **eye icon** on the Company Overview card in the Search tab — that takes you straight into the detail view.

On a LinkedIn profile, the Companies tab shows the **profile's employer** instead.

### The detail view

**Header** — logo, company name, industry, employee count.

**About** — the company's **Domain**, **Website**, and **LinkedIn** page. All free, no credits involved.

**Firmographics** — industry, employees, and location are shown free. Unlocking the section adds:

- **Revenue**
- **Company Type**
- **NAICS** classification
- **Number of Locations**
- **Ticker** symbol, for public companies

**Cost: 1 ST Credit.**

**Technographics** — the company's **tech stack**, shown as tags. Useful for qualifying by the tools a company already runs.

**Cost: 2 ST Credits.**

### Unlocking a section

Click the small **eye button with the credit number** on the section header. The fields fill in once the lookup completes. Each section shows what you're getting before you click — for example *"Unlock revenue, company type, NAICS & HQ for 1 credit."*

### Already unlocked, no charge

If anyone in your organization has already unlocked a company's firmographics or technographics, the section loads automatically with **no eye button and no charge**. You only ever pay once per company per enrichment type.

### If no data comes back

Some companies have no technology data on record. The section then reads **"No technology data available for this company."**

---

## Article 11 — Credits & Usage in the Extension

Everything you unlock in the extension spends from the same credit balance as the web app.

### The credits widget

Top right of the panel header. It shows your credits used against your total, with a progress bar. Click it to open the full dropdown:

- **Your account** — name and email
- **Total Credit Usage** — used vs. total across all credit types, with the percentage used
- **ST Credits** — used vs. total
- **Buy Credits** — opens the credit purchase page in the web app
- **Upgrade Plan** — opens the pricing page in the web app
- **Sign out**

### What costs what

| Action | Cost |
|---|---|
| Unlock an **email** | 2 ST Credits |
| Unlock a **phone number** | 5 ST Credits |
| Unlock **Firmographics** for a company | 1 ST Credit |
| Unlock **Technographics** for a company | 2 ST Credits |
| Searching, browsing, adding to lists | Free |

Searching — whether by filters, by AI Copilot, by domain, or by LinkedIn profile — never costs credits. You only pay when you unlock something.

### Credits are shared across your organization

Your whole team draws from one balance. That also means you never pay twice: a contact or company enrichment a teammate already unlocked is free for you.

### Running out

If a reveal fails because your balance is too low, use **Buy Credits** or **Upgrade Plan** in the credits dropdown. For how credits work in detail — what ST Credits and Email Credits cover, and how plans allocate them — see **Understanding Credits: ST Credits vs Email Credits** in the **Account, Team & Credits** collection.

---

## Article 12 — Troubleshooting the Extension

### The panel says "No website detected"

You're on a page the extension can't read a domain from — a `chrome://` page, the new tab page, a PDF, the Chrome Web Store, or another extension's page. Open a normal website and the panel picks it up.

### The panel says "No company found"

The site's domain didn't match a company in SalesTarget's database. This is normal for personal sites, very new companies, and unusual domains. Search for the company by name in **Lead Explorer** instead.

### The floating launcher isn't showing

- **Local addresses are excluded on purpose** — `localhost`, `127.0.0.1`, `*.local`, `*.test`, and private network IPs never get the launcher.
- **Tabs open before you installed the extension** may need one reload.
- **Some pages block extensions entirely** — Chrome's own pages, the Web Store, and PDF viewers. Use the toolbar icon there.

### The launcher is covering something on the page

Drag it. Hover the pill and use the **grip**, or expand it and use the **hand icon**, to move it up or down. Its position is saved.

### I was signed out unexpectedly

Sessions expire after a period of inactivity. The panel shows **"Your session expired. Please sign in again."** — sign in again and carry on. Nothing you saved is lost.

### "No account for this email"

The email you entered has no SalesTarget account. Click **Create Account** in the banner to sign up in the web app, then come back and sign in. Accounts can't be created from the extension.

### My Google sign-in isn't working

The Google account you pick must be the one your SalesTarget account uses. If it's a different address, the extension can't create an account for it — sign in with your email and password instead, or sign up with that Google account in the web app first.

### A reveal failed

Check your credit balance in the credits widget. If you have credits, the lookup probably timed out — enrichment reaches out to external data sources and occasionally runs long. Try again.

### Contact details show "No email on file"

The lookup worked, but the dataset has no email or phone for that person. That's a data gap, not an error.

### The panel didn't update when I changed tabs

The panel normally follows the active tab automatically. If it looks stale, click on the page you want, then reopen the panel.

### The extension stopped responding after an update

Reload the page. After an install, update, or re-enable, already-open tabs need one reload before the in-page launcher works again.

### Still stuck?

Contact support from the web app, and include what page you were on and what the panel showed.
