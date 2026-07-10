# Footprinting through Social Networking Sites

Social networking sites are platforms that facilitate connections among people through shared interests, workplaces, and education. Because users update their profiles in real time and many platforms allow searching without registration, these sites are a rich and largely anonymous source of intelligence for attackers.

## Definition and Scope

Footprinting through social networking sites means gathering information that users have **voluntarily made available** on those platforms — no deception is required. This distinguishes it from social engineering footprinting, where the attacker actively tricks individuals into revealing information.

Social networking sites can also serve as a **medium** through which social engineering attacks are launched.

## SNS Footprinting vs. Social Engineering Footprinting

| Aspect | SNS Footprinting | Social Engineering Footprinting |
|---|---|---|
| Method | Passive collection of publicly available profile data | Active manipulation or deception of people |
| Interaction | None required (often anonymous) | Direct or indirect interaction with a person |
| Risk of detection | Very low | Higher — relies on human contact |

## People Search on Social Networking Sites

- Many platforms allow searching **without registering** — making it anonymous and easy.
- Search inputs: name, email address, physical address.
- Some sites expose whether an account is **active**, revealing status information.
- Platforms: **Facebook, Twitter, LinkedIn, Instagram** — support search by name, keyword, company, school, and location.

## Types of Information Gathered

**Personal information:**
- Name, current location, educational qualifications, position, organization name

**Professional / contact information:**
- Company or business name, phone number, email ID, photos, videos

**Behavioral and contextual information (especially Twitter):**
- Advice, news, opinions, rumors, facts, current events, announcements, invitations

## Attacker Use

The intelligence collected from social networking sites feeds directly into follow-on attacks, including **social engineering** (impersonation, pretexting, phishing) and targeted attacks against the organization the person is associated with.

## Gathering Information from LinkedIn

LinkedIn is a professional social network containing profile data such as name, position, organization, location, and educational qualifications. Attackers use **theHarvester** to enumerate LinkedIn users by target organization name, retrieving employee names and job titles at scale.

**[theHarvester](https://github.com/laramies/theHarvester)** is an open-source intelligence tool designed for the early stages of a penetration test. It maps a company's external threat landscape by querying sources including LinkedIn.

**Command syntax:**

```
theHarvester -d microsoft -l 200 -b linkedin
```

| Flag | Purpose |
|---|---|
| `-d` | Domain or company name to search |
| `-l` | Maximum number of results to retrieve |
| `-b` | Data source (e.g., `linkedin`) |

Results include employee names and job titles, which feed social engineering and targeted attack planning.

## Harvesting Email Lists

Email addresses are a critical attack vector for social engineering and brute-force attacks. Attackers use automated tools — primarily **[theHarvester](https://github.com/laramies/theHarvester)** and **Email Spider** — to collect publicly available email addresses from the target domain by querying search engines such as Google, Bing, and Baidu.

**Command to extract emails via Baidu:**

```
theHarvester -d microsoft.com -l 200 -b baidu
```

| Flag | Purpose |
|---|---|
| `-d` | Target domain to harvest emails from |
| `-l` | Limit results (e.g., 200) |
| `-b` | Search engine data source (baidu, google, bing, etc.) |

### Harvesting Email Lists with AI

AI tools such as ChatGPT can automate command generation for email harvesting. An attacker uses a natural-language prompt and receives a ready-to-run command.

**Example prompt:**
> "Use theHarvester to gather email accounts associated with 'microsoft.com', limiting results to 200, and leveraging 'baidu' as a data source"

**AI-generated command:**

```
theHarvester -d microsoft.com -l 200 -b Baidu -f Microsoft_emails.xml
```

| Flag | Purpose |
|---|---|
| `-d microsoft.com` | Target domain |
| `-l 200` | Limit output to 200 results |
| `-b Baidu` | Use Baidu as the data source |
| `-f Microsoft_emails.xml` | Save results to an XML output file |

## Analyzing Target Social Media Presence

Attackers use social media analysis tools to discover the most shared content, track accounts and URLs, and obtain email addresses across platforms. This intelligence supports phishing, social engineering, and other attacks.

| Tool | Purpose |
|---|---|
| **[BuzzSumo](https://buzzsumo.com)** | Finds the most shared content for a topic, author, or domain across Twitter, Facebook, LinkedIn, Google Plus, and Pinterest; reveals social media accounts, URLs, and email addresses |
| **Google Trends** | Tracks search term popularity over time to understand a target's public visibility |
| **Hashatit** | Searches and tracks hashtags across social networks in real time |
| **Ubersuggest** | Keyword and content research; surfaces top-performing content related to a target domain |

## Tools for Footprinting through Social Networking Sites

Attackers use dedicated tools to footprint platforms such as Twitter, Instagram, Facebook, and Pinterest. Target data includes date of birth, educational qualifications, employment status, relatives' names, and organizational details such as business strategy, client lists, and upcoming projects.

| Tool | Source | Capability |
|---|---|---|
| **Sherlock** | [github.com](https://github.com/sherlock-project/sherlock) | Searches a vast number of social networking sites for a target username; returns the full profile URL on each site where the username is found |
| **Social Searcher** | [social-searcher.com](https://www.social-searcher.com) | Real-time content search across social networks with deep analytics; tracks profile URLs, postings, and personal information |

**Sherlock command:**

```
sherlock 'Elon Musk'
```

Returns a list of platforms where the username exists, each with its full URL — enabling rapid cross-platform profiling of a target.

### Footprinting through Social Networking Sites with AI

AI tools such as ChatGPT can generate Sherlock commands from natural-language prompts, automating cross-platform username searches.

**Example prompt:**
> "Use Sherlock to gather personal information about Sundar Pichai and save the result in recon2.txt"

**AI-generated command:**

```
sherlock SundarPichai --output recon2
```

| Argument | Purpose |
|---|---|
| `SundarPichai` | Target username to search across platforms |
| `--output recon2` | Save results to a file named `recon2` |

Results list every platform where the username is found, each with its full profile URL.
