# Account, Team & Credits — Help Center Collection

**Collection description (for the collection card):**
> Manage your organization, invite team members, and understand how ST Credits and Email Credits work.

Each `## Article N` section below is one Intercom article. UI labels are bolded exactly as they appear in the product.

---

## Article 1 — Organizations & Team Members

Your **organization** is your shared workspace. Everyone you invite works inside it, sharing the same leads, campaigns, CRM, and credit balance.

### How many members you can add

Every plan includes **3 team member seats** by default. That's enough for a small team to work together out of the box.

To add a **fourth member or beyond**, you need to purchase additional user seats — see **Adding More Seats** below.

### Where to manage your team

Go to **Settings → Account & Settings → Add/Manage Members**.

From here you can see everyone in your organization, their role, and their status (active or invited).

### Invite a member

1. Go to **Settings → Account & Settings → Add/Manage Members**.
2. Click to invite a new member.
3. Enter their **email address**.
4. Choose their **role** (see **Roles & Permissions**).
5. Send the invite.

They'll receive an email invitation to join your organization.

### Seats count invited members too

Your seat count includes both **active members and pending invitations**. If you have 3 seats and 2 active members with 1 pending invite, you're full — you can't send another invite until someone accepts, is removed, or you add a seat.

If you try to invite beyond your limit, you'll see:

> "You have reached the maximum number of members (3) for your current plan. Please upgrade your plan to add more members."

### Adding more seats

Extra seats are purchased as an add-on to your plan:

1. Go to **Settings → Billing & Usage → Subscription** (or click **Upgrade Plan** anywhere you see it).
2. Add the team-member / CRM user add-on.
3. Each add-on seat increases your member limit by one.

Once purchased, your new seat total applies immediately and you can invite the additional members.

### Who can manage members

Only **owners** and **admins** can invite or manage members. See **Roles & Permissions**.

---

## Article 2 — Roles & Permissions

Every member of your organization has a **role** that controls what they can see and do. Roles are managed at **Settings → Account & Settings → Manage Roles**.

### The built-in roles

Four system roles come ready to use. They can't be edited or deleted:

| Role | What they can do |
|---|---|
| **Owner** | Full control — billing, members, roles, and all features. The account creator is the owner. |
| **Admin** | Everything except owner-only billing controls; can invite and manage members. |
| **Editor** | Can create and manage campaigns, leads, and CRM records, but can't manage members or billing. |
| **Viewer** | Read-only access to data. |

### What each role controls

- **Inviting and managing members** — Owners and Admins only.
- **Billing, subscription, and buying credits** — Owner (and Admin where permitted).
- **Creating campaigns and using Copilot actions** — Owner, Admin, and Editor.
- **Viewing data** — all roles, including Viewer.

### Create your own custom roles

If the four built-in roles don't fit how your team works, you can **create your own roles with exactly the permissions you choose**.

1. Go to **Settings → Account & Settings → Manage Roles**.
2. Click **Create Custom Role**.
3. Give the role a name and description.
4. Turn individual permissions on or off, then save.

Permissions are grouped into sections, so you can grant access to some areas and withhold others:

- **CRM** — view, edit, manage records, and view reports
- **Email Campaigns** — view or manage campaigns
- **LinkedIn** — manage accounts, campaigns, and inbox, or view only
- **Enrichment** — view enrichment data, or run it
- **Domain & Emails** — view or manage domains and mailboxes
- **Calling** — access the VoIP dialer
- **AI Features** — view or manage AI settings
- **Plans & billing** — access and edit plans, seats, and credits
- **Settings** — view or manage settings and integrations
- **Team & Organization** — manage members, roles, and organization settings

For example, you could create a **"Campaign Manager"** role that can manage email and LinkedIn campaigns but can't touch billing or team settings, or an **"Analyst"** role that can view CRM reports and nothing else.

Managing roles requires the **Edit roles & permissions** permission (Owners and Admins have it). Once created, a custom role can be assigned to any member just like a built-in one, and you can edit its permissions or delete it later — as long as no one is currently assigned to it.

### Choosing the right role

- Give **Editor** to reps who run campaigns and work leads day to day.
- Give **Admin** to team leads who also need to manage members.
- Keep **Owner** limited — it controls billing.
- Use **Viewer** for people who only need visibility, such as a manager reviewing reports.
- Build a **custom role** whenever someone needs an access level that sits between the built-in ones.

### Changing a member's role

1. Go to **Settings → Account & Settings → Add/Manage Members** (or **Manage Roles**).
2. Find the member.
3. Update their role — you can assign a built-in or a custom role.

---

## Article 3 — Understanding Credits: ST Credits vs Email Credits

SalesTarget.ai uses **two separate credit balances**, and it's important to know which is which because they're spent on completely different things.

| Credit type | What it pays for |
|---|---|
| **ST Credits** | Finding and enriching leads, email validation, and calls |
| **Email Credits** | Sending campaign emails |

### Where to see your balance

Both balances are always visible in the **Total Credits** widget at the top right of the screen. Click it to open a breakdown showing:

- **Total Credit Usage** — an overview across all your credits
- **ST Credits** — remaining vs total
- **Email Credits** — remaining vs total

### Credits are shared across your organization

There's **one balance per organization**, not per member. Everyone on your team draws from the same ST Credit and Email Credit pools, so it's worth coordinating on larger enrichment or sending jobs.

### Buying more

From the credits dropdown you have two buttons:

- **Buy Credits** — top up your ST or Email credits (**Settings → Billing & Usage → Credits**)
- **Upgrade Plan** — move to a plan with a larger monthly allowance

### If your subscription lapses

If a subscription payment fails, your plan enters a lapsed state and credits are affected until billing is resolved. Keep your payment method current under **Settings → Billing & Usage → Payment Methods**.

---

## Article 4 — ST Credits — What They're Used For

**ST Credits** are your credits for everything involved in finding, enriching, and reaching leads — outside of actually sending emails.

### What ST Credits pay for

**Lead enrichment in Lead Explorer** — unlocking verified data:

| Enrichment | ST Credits |
|---|---|
| Email Address | 2 |
| Phone Number | 5 |
| Professional Profile | 1 |
| Individual's Social Media Presence | 5 |
| Intent Data (Bombora) | 3 |

**Adding leads to a list** — 1 ST Credit per lead.

**Email validation** — checking addresses in Lead Validation.

**Calls** — calls made through the built-in CRM dialer draw from your ST Credits.

### What doesn't cost ST Credits

- **Searching** Lead Explorer is free — you only pay to unlock data.
- **Already-enriched leads are never charged again.** Re-unlocking data you already have costs nothing.
- **No data, no charge.** If no verified result is found for a lead, you aren't charged for it.
- **Exporting** your saved lists to CSV doesn't cost credits — in fact, your first export earns bonus credits.

### Making ST Credits go further

- Use the **Has Email** and **Phone Number** availability toggles in Lead Explorer so you only enrich leads whose data can actually be unlocked.
- Enrich in bulk with the **Enrichments** drawer, which shows a **Credit Impact** preview before you confirm.
- Only unlock what you'll use — enrich for email if that's your channel, rather than unlocking phone numbers you won't call.

### Checking and topping up

See your balance in the **Total Credits** widget (top right). To top up, click **Buy Credits**, or go to **Settings → Billing & Usage → Credits**.

---

## Article 5 — Email Credits — What They're Used For

**Email Credits** are spent when your campaigns **send emails**. They're separate from ST Credits, so enriching leads and sending to them draw from different balances.

### What Email Credits pay for

One credit is consumed each time a campaign sends an email — but AI-personalized emails cost more:

| Email type | Email Credits per email |
|---|---|
| Regular email (normal template) | **1** |
| AI-personalized, using **your own LLM key** | **2** |
| AI-personalized, using SalesTarget.ai's AI | **5** |
| An AI step that falls back to your template | **1** |

### Why AI emails cost more

AI personalization generates a unique email for every lead using their bio and company research. Connecting your own LLM key under **Settings → Preferences → User LLM** drops the cost from 5 to 2 credits per email. See **AI-Personalized Emails & Credit Costs** in the Cold Email Outreach collection.

### Worked example

A **1,000-lead campaign**:

- Regular emails: **1,000 credits**
- AI-personalized with your own LLM key: **2,000 credits**
- AI-personalized with SalesTarget.ai's AI: **5,000 credits**

### Credit checks protect you

- When you **start a campaign** with AI enabled, we check your balance up front and block the launch if you can't cover it — rather than letting it stall halfway.
- If your balance **runs out mid-campaign**, the campaign is paused instead of sending emails you can't pay for. Top up and resume.

### Making Email Credits go further

- Use **AI personalization on your first step only**, where it has the most impact, and plain templates for follow-ups.
- **Connect your own LLM key** to more than halve the cost of AI emails.
- **Validate your list first** so you're not spending credits sending to invalid addresses that bounce.

### Checking and topping up

See your balance in the **Total Credits** widget (top right). To top up, click **Buy Credits**, or go to **Settings → Billing & Usage → Credits**.

---

## Article 6 — How Pricing & Plans Work

This article explains how plans, add-ons, and billing fit together. For **current prices**, always check the **Pricing** page (in the left sidebar) — it's the live source of truth and shows exact figures for your workspace.

### Plans

SalesTarget.ai offers a range of plans at different tiers. Each plan bundles together:

- A monthly allowance of **ST Credits** (for finding, enriching, and validating leads, and for calls)
- A monthly allowance of **Email Credits** (for sending campaigns)
- **Team seats** — 3 by default (see **Organizations & Team Members**)
- Access to features across Lead Explorer, Cold Email, LinkedIn, the CRM, and Copilot

Higher tiers include larger credit allowances and higher limits.

### Monthly or yearly billing

Every plan can be billed **monthly** or **yearly**. Use the toggle on the **Pricing** page to switch between them and compare — yearly billing is charged up front for the year and generally works out cheaper per month.

### Add-ons

Beyond your plan's included allowances, you can add capacity as your team grows. Add-ons are configured with sliders on the **Pricing** page:

| Add-on | What it does |
|---|---|
| **Extra team / CRM seats** | Add members beyond the 3 included seats |
| **LinkedIn account slots** | Connect more LinkedIn accounts for outreach |
| **Dialer & call credits** | Enable the CRM dialer with a bundle of call credits; add more credits as needed |
| **Phone numbers** | Add local or toll-free numbers for the dialer |

Call credits from the dialer add-on are added to your **ST Credit** balance, which is what calls draw from.

### Buying credits vs upgrading

There are two different ways to get more capacity, and it's worth knowing which you need:

- **Buy more credits** — a one-off top-up when you've run low this month but your plan otherwise fits. Go to **Settings → Billing & Usage → Credits**, where you can top up **ST Credits** and **Email Credits** separately.
- **Upgrade your plan** — when you consistently need more each month. A higher plan gives you a larger recurring allowance rather than a one-time top-up. Go to the **Pricing** page or **Settings → Billing & Usage → Subscription**.

### Upgrading, downgrading, and switching

From the **Pricing** page:

- **Upgrading** (to a higher plan) takes effect **immediately**. You'll see a preview of the cost before you confirm, and the change applies right away.
- **Downgrading** (to a lower plan) is **scheduled** — your current plan runs until the end of the billing period, then the lower plan takes over. You aren't charged for a downgrade.
- **Switching billing cycle** (monthly ↔ yearly) is handled the same way through the plan-change flow.

### Managing your billing

Everything billing-related lives under **Settings → Billing & Usage**:

- **Credits** — top up ST and Email credits
- **Subscription** — view and change your plan, seats, and add-ons
- **Payment Methods** — manage your cards
- **Order History** — see past invoices and payments

### Who can manage billing

Billing is controlled by the **Owner** (and members with billing permission). See **Roles & Permissions** — the **Access and edit plans & billing** permission governs this, and you can grant it to a custom role if needed.

### Tips

- **Check the Pricing page for exact, current figures** — this article covers how pricing works, not the specific numbers, which can change.
- If you're regularly topping up credits, compare the cost against the next plan up — a larger recurring allowance is often better value than repeated one-off top-ups.
- Add seats and LinkedIn slots as your team grows rather than over-provisioning up front.

---

## Article 7 — Managing Your Account

Your personal account settings live under **Settings → Account & Settings** and **Settings → Preferences**. This article covers your profile, security, organizations, and notifications.

### Your profile

Go to **Settings → Account & Settings → Profile** to view and edit your details:

- **First Name** and **Last Name**
- **Display Name**
- **Phone Number**
- **Gender**
- **Country/Region**
- Your profile **avatar**

Your account email is shown here too. Keep your name and details current — they're used in team views and as the basis for sender identity across the product.

### Changing your password

1. Go to **Settings → Account & Settings → Profile**.
2. Click **Change Password**.
3. Enter your current password and your new one, then save.

Use a strong, unique password. If you've **forgotten** your password and can't sign in, use the **Forgot Password** link on the login screen to reset it by email.

### Two-Factor Authentication (2FA)

Two-factor authentication adds a second layer of security to your account. When enabled, signing in requires a one-time code in addition to your password.

To turn it on:

1. Go to **Settings → Account & Settings → Profile**.
2. Enable **Two-Factor Authentication**.
3. A **6-digit verification code** is sent to your registered email address — enter it to confirm.

SalesTarget.ai's 2FA uses **email-based one-time codes**. A verification code is sent to your registered email both when you **enable** and when you **disable** 2FA, so the change is always confirmed by you. We strongly recommend keeping it on, especially for owners and admins.

### Managing organizations

SalesTarget.ai supports **multiple organizations**, so you can keep separate workspaces — for different teams, clients, or brands. Under **Settings → Account & Settings → Manage Organization** you can:

- **Rename** your current organization
- **Create** a new organization
- **Switch** between the organizations you belong to

Each organization has its own leads, campaigns, CRM, members, and credit balance — they're completely separate workspaces.

### Notification preferences

Control which emails SalesTarget.ai sends you at **Settings → Preferences → Notification**.

There's a master **Email notifications** toggle, plus per-area control so you only hear about what matters to you:

- Lead Explorer
- Leads
- Email Campaigns
- LinkedIn Campaigns
- Deals
- Meetings
- Tasks
- Notes
- Tickets

Turn off the categories you don't need, and click **Save Changes**.

### Session timeout

Under **Settings → Preferences → Preference** you can set your **Session timeout** — how long your session stays active before you're automatically signed out. Options range from **1 hour to 24 hours** (24 hours by default). A shorter timeout is more secure on shared computers.

### Joining an organization you were invited to

If someone invites you to their organization, you'll receive an **email invitation**. Click the link to accept and join their workspace. Once you've joined, you can switch between it and any other organizations you belong to from **Manage Organization**.

### Related

- **Organizations & Team Members** — inviting people and managing seats
- **Roles & Permissions** — what each member can access
- **Connecting Your Own LLM Key** lives under **Settings → Preferences → User LLM** (see the Cold Email collection)
