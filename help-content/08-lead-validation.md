# Lead Validation — Help Center Collection

**Collection description (for the collection card):**
> Check email addresses before you send to them, find missing addresses, and keep your bounce rate low.

Each `## Article N` section below is one Intercom article. UI labels are bolded exactly as they appear in the product.

---

## Article 1 — What is Lead Validation?

**Lead Validation** checks whether an email address is real and safe to send to. Sending to dead addresses causes bounces, and a high bounce rate damages your sending reputation faster than almost anything else.

Click **Lead Validation** in the left sidebar. The landing page is a dashboard showing **Total Validated Emails**, **Total Emails Found**, your **Top Verification Failure**, and a list of **Recently Verified Emails**.

### The three tools

| Tool | What it does | When to use it |
|---|---|---|
| **Email Verifier** | Checks one address at a time | Spot-checking a single contact |
| **Validate Email List** | Checks a whole list in bulk | Before adding any imported list to a campaign |
| **Email Finder** | Finds an address from a name and company domain | You know who you want but not their email |

### When you need it

Leads enriched through **Lead Explorer** are already verified, so validation matters most for **data you brought in from somewhere else** — CSV imports, purchased lists, scraped lists, or anything more than a few months old. Around 2% of B2B addresses go stale every month as people change jobs.

### It uses its own credits

Validation runs on **email verification credits**, which are a **separate balance from ST Credits**. Running out of one doesn't affect the other. See **Verification Credits & Plans**.

---

## Article 2 — How to Verify a Single Email

Go to **Lead Validation → Email Verifier**, type an address, and click **Validate Email**.

The result card tells you whether the address is valid and gives it a **score out of 100**. Click **Expand Results** for the breakdown:

| Column | What it tells you |
|---|---|
| **Format** | Whether the address is syntactically valid and the domain accepts mail |
| **Type** | **Company**, **Personal**, **Disposable**, or **Spam Trap** |
| **Email Status** | **Valid** or **Invalid** — the overall verdict |

A single check costs **0.1 credits**.

### What the score means

| Score | Meaning | Safe to send? |
|---|---|---|
| **100** | Mailbox confirmed to exist | Yes |
| **70** | Catch-all domain — accepts all mail, so the specific mailbox can't be confirmed | With caution |
| **50** | The server blocked the check (anti-spam system or protocol issue) — no definitive answer | With caution |
| **30** | Disposable or throwaway address | No |
| **0** | Invalid, dead, disabled, or a spam trap | No — remove it |

Addresses scoring **50 and above are treated as valid** and count toward your valid totals.

---

## Article 3 — How to Validate a List of Emails

Go to **Lead Validation → Validate Email List**. Give the list a **List Name** (required), then supply the addresses **one of two ways**:

- **Paste them** into the text box — one per line, or comma-separated
- **Upload a CSV** — drag it onto the upload area or click to browse

You can use one or the other, not both. Choosing one clears the other.

Click to start the job. Bulk verification costs **1 credit per email**.

### While it runs

Verification runs in the background, so you can leave the page. Completed jobs appear in the list below with a results breakdown across seven categories — **Valid**, **Invalid**, **Catch-All**, **Spam**, **Abuse**, **Do Not Mail**, and **Unknown** — each showing a count and a percentage. Expand a job to see them.

Use the **download** button on any job to export the full results as a CSV, or **Delete** to remove the job.

### If you don't have enough credits

If your list is bigger than your credit balance, you'll be offered **partial verification** — SalesTarget processes as many addresses as your credits cover and tells you how many of the total were done. The rest are left unverified. Top up and run them separately.

---

## Article 4 — Understanding Your Validation Results

| Status | What it means | Safe to send? |
|---|---|---|
| **Valid** | The mailbox exists and accepts mail | Yes |
| **Invalid** | The mailbox doesn't exist | No — remove it |
| **Catch-All** | The domain accepts mail for any address, so the specific mailbox can't be confirmed | With caution |
| **Spam** | A spam trap — an address that exists purely to catch senders with poor list hygiene | **Never send** |
| **Abuse** | Belongs to someone who habitually marks mail as spam | No — remove it |
| **Do Not Mail** | Disposable, role-based, or otherwise flagged as do-not-contact | No — remove it |
| **Unknown** | The server gave no definitive answer | With caution |

### ⚠️ Spam traps are the one to worry about

A spam trap is the most damaging result you can get. These addresses exist purely to identify senders who don't clean their lists, and hitting one can get your domain blacklisted. **Always remove them before sending** — no amount of warm-up undoes a blacklisting.

### Catch-all domains

Plenty of legitimate companies run catch-all configurations, so a catch-all result isn't a red flag on its own. Send to them, but keep them in a separate segment and watch the bounce rate.

### Keeping your bounce rate healthy

- Validate every imported list before it goes into a campaign.
- Keep your bounce rate **under 3%**. Above 5%, providers start treating you as a spammer.
- Re-validate lists that have been sitting for a few months.

---

## Article 5 — How to Find an Email Address

Go to **Lead Validation → Email Finder** when you know who you want to reach but not their address.

Enter **First Name**, **Last Name**, and the company **Domain**, then click **Find Email**. Results come back with a **confidence level** — high, green; medium, amber; low, red — and a **Copy** button for each.

### What it costs

| What you provide | Cost |
|---|---|
| A name **and** domain | **5 credits** |
| Domain only | **10 credits** |

Searching with a name is both cheaper and far more accurate, so supply one whenever you have it.

Treat **low confidence** results as guesses. Run anything below high confidence through the **Email Verifier** before you send to it.

---

## Article 6 — Verification Credits & Plans

Validation runs on **email verification credits** — a balance **separate from ST Credits**. Spending one has no effect on the other.

| Action | Cost |
|---|---|
| Verify a single email | **0.1 credits** |
| Verify a list, per email | **1 credit** |
| Find an email (name + domain) | **5 credits** |
| Find an email (domain only) | **10 credits** |

Credits are shared across your whole organization, not per user.

### Running out

When a check would exceed your balance, an **Insufficient Credits** message shows what you have versus what's needed, with an **Upgrade Plan** button that takes you to the verification plans page. Bulk jobs offer partial verification instead — see **How to Validate a List of Emails**.

### Getting the most out of them

- **Validate imported lists, not enriched ones.** Lead Explorer data is already verified — re-checking it spends credits for nothing.
- **Give Email Finder a name.** Half the cost, better results.
- **Validate before launching, not after.** Credits spent on validation are far cheaper than a damaged sending domain.
