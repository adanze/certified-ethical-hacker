# Footprinting through Internet Research Services

Internet research services — including people search, alerting, financial services, and job sites — expose sensitive target information such as infrastructure details, physical location, and employee data. Attackers use this to build targeted hacking strategies against an organization's network.

Key activities covered here: discovering top-level domains and sub-domains, geolocation, people search services, job site intelligence, financial services, third-party data repositories, dark web footprinting, and competitive intelligence gathering.

## Finding a Company's Top-Level Domains (TLDs) and Sub-domains

A company's **TLDs** represent its public-facing web presence — designed for customers and partners, and locatable via search engines such as Google and Bing. They may expose organizational history, services, products, and contact information.

**Sub-domains** are typically restricted to employees or specific departments. Administrators often create sub-domains for testing before production deployment; these are frequently insecure and more vulnerable to exploitation. Sub-domains can reveal:

- Departmental structure and business units
- Source code or documents hosted on webservers
- Private organizational functions
- Access controls based on IP, domain, subnet, or credentials

Because most organizations use predictable sub-domain formats, an attacker who knows the external URL can discover sub-domains by **trial and error** or by using dedicated tools.

**Google Advanced Search Operator:**

```
site:microsoft.com -inurl:www
```

### Tools for Sub-domain Discovery

| Tool | Source | What it reveals |
|------|--------|-----------------|
| **Netcraft** | [netcraft.com](https://www.netcraft.com) | Sub-domains, web server OS, hosting provider, SSL data |
| **DNSdumpster** | [dnsdumpster.com](https://dnsdumpster.com) | Hosts, sub-domains, IP addresses, DNS servers |
| **Pentest-Tools Find Subdomains** | [pentest-tools.com](https://pentest-tools.com) | Sub-domains, IPs, OS, server technology, web platform, page titles |

## Finding TLDs and Sub-domains with AI

Attackers can use AI-powered tools (e.g., ChatGPT) to generate and execute sub-domain enumeration commands, automating what would otherwise be a manual process.

### Example 1 — `dig` via ChatGPT prompt

**Prompt:** *"Discover all the subdomains of 'google.com' using dig command."*

```bash
dig +short google.com NS | xargs -I{} dig +nocmd +noall +answer @{} google.com | grep -E 'CNAME|A|AAAA'
```

| Command part | Purpose |
|---|---|
| `dig +short google.com NS` | Retrieves NS records for the domain in shortened format |
| `| xargs -I{}` | Passes each name server as an argument to the next command |
| `dig +nocmd +noall +answer @{} google.com` | Queries each NS for A records, returning IP addresses of sub-domains |

### Example 2 — Sublist3r via ChatGPT prompt

**Prompt:** *"Use Sublist3r to gather a list of subdomains of the target organization eccouncil."*

```bash
sublist3r -d eccouncil.org -o eccouncil_subdomains.txt
```

| Flag | Meaning |
|---|---|
| `-d eccouncil.org` | Target domain to enumerate |
| `-o eccouncil_subdomains.txt` | Output file for the results |

Sublist3r searches multiple sources (Bing, Google, Netcraft, VirusTotal, etc.) and saves discovered sub-domains to the specified file.

## Extracting Website Information from archive.org

The **Internet Archive Wayback Machine** ([archive.org](https://archive.org)) stores snapshots of websites since their creation, allowing an attacker to retrieve content that has since been removed — including web pages, images, audio/video files, and software programs. This historical data can be used to craft phishing attacks or other web application attacks against the target.

**Photon** is a tool that automates retrieval of archived content from archive.org.

| Command | Purpose |
|---|---|
| `photon.py -u <URL> -l 3 -t 200 --wayback` | Retrieve archive.org links of the target website |
| `python photon.py -u <URL> -l 3 -t 200 --only-urls` | Retrieve archived URLs of the target website |

| Flag | Meaning |
|---|---|
| `-u <URL>` | Target website URL |
| `-l 3` | Crawl depth level |
| `-t 200` | Number of threads |
| `--wayback` | Fetch links from archive.org snapshots |
| `--only-urls` | Output URLs only |

## Footprinting through People Search Services

Online people search services (e.g., **Spokeo**, **Intelius**, **pipl**, BeenVerified, Whitepages, Instant Checkmate, PeekYou) aggregate public records and can expose:

- Names, addresses, phone numbers, date of birth, photographs, videos
- Profession, businesses owned, upcoming projects, operating environment
- Websites and blogs, social networking profiles, property information
- Company email addresses, cell/fax numbers, personal email addresses
- Optional background and criminal check data

Attackers use this data to attempt to obtain bank details, credit card information, and personal history — enabling targeted social engineering and other attacks.

**Spokeo** ([spokeo.com](https://www.spokeo.com)) is a commonly cited example: it returns phone numbers, email addresses, address history, age, family members, social profiles, and court records for individuals associated with a target organization.

## Footprinting through Job Sites

Job postings and employee resumes on sites such as **Dice**, **LinkedIn**, **Glassdoor**, and **Simply Hired** inadvertently disclose infrastructure details. Attackers extract:

| Source | Information revealed |
|---|---|
| Job postings | OS, software versions, firewall/server types, hypervisors, VMs, network appliances, database schema |
| Employee resumes | Technical expertise, educational qualifications, job history, technologies used |
| Key employee lists | Email addresses and roles |

This information helps attackers identify underlying vulnerabilities in the target IT infrastructure and tailor attacks accordingly.

## Dark Web Footprinting

### Surface Web vs. Deep Web vs. Dark Web

| Layer | Description | Access |
|---|---|---|
| **Surface Web** | Indexed, publicly accessible pages | Standard browsers (Chrome, Firefox, Opera) |
| **Deep Web** | Unindexed pages — government/federal databases, organizational data | Tor Browser, WWW Virtual Library |
| **Dark Web** | Subset of the deep web; anonymous, untraceable | Tor Browser, ExoneraTor, OnionLand Search |

The dark web enables anonymous navigation and is used by attackers to gather confidential target data: credit card details, passport and ID information, medical records, social media accounts, Social Security Numbers (SSNs).

### Tor Browser

**Source:** [torproject.org](https://www.torproject.org)

Tor Browser acts as a **default VPN**, bouncing the user's IP address through multiple servers before reaching the web. Attackers use it to access hidden content, unindexed websites, and encrypted databases on the dark web.

### Advanced Dark Web Search Parameters

Attackers refine dark web searches using specific operators. Common patterns:

| Target data | Description | Example query |
|---|---|---|
| Personal profiles | Finds the target's social media presence on specific platforms | `"John Doe" site:facebook.com OR site:linkedin.com` |
| Scientific publications | Locates academic or research papers authored by the target | `"John Doe" site:scholar.google.com` |
| Court records | Surfaces legal cases or judicial documents involving the target | `"John Doe" court records` |
| Member directories | Identifies the target within an organization's staff listing | `"John Doe" site:example.com "employee directory"` |
| Medical records | Searches for exposed health or treatment history of the target | `"John Doe" medical records` |
| Location history | Retrieves GPS data or location-tagged content linked to the target | `"John Doe" location history` |

### Dark Web Search Queries

| Information type | What it finds | Search query |
|---|---|---|
| Sensitive PDFs | Confidential PDF docs on .onion sites | `filetype:pdf site:onion confidential` |
| Passwords in Config Files | Text config files containing passwords | `inurl:config filetype:txt password` |
| Financial Documents | Excel financial files on .onion sites | `filetype:xlsx site:onion financial` |
| Database Dumps | SQL dump files on .onion sites | `filetype:sql site:onion dump` |
| Email Lists | CSV files with email lists | `filetype:csv site:onion email` |
| Login Credentials | Word docs with credentials in title | `intitle:"login credentials" filetype:docx` |
| Server Configurations | XML server config files | `filetype:xml inurl:config server` |
| Private Keys | Private key files on .onion sites | `filetype:key site:onion private` |
| Medical Records | PDF medical records on .onion sites | `filetype:pdf site:onion "medical records"` |
| Business Plans | PowerPoint business plans on .onion sites | `filetype:ppt site:onion "business plan"` |
| Source Code | Python source code files | `filetype:py site:onion "def "` |
| Legal Documents | Word legal documents on .onion sites | `filetype:docx site:onion "legal document"` |
| Bank Statements | PDF bank statements | `filetype:pdf site:onion "bank statement"` |
| Intellectual Property | Confidential patent PDFs | `filetype:pdf inurl:patent confidential` |
| Security Vulnerabilities | Text files on exploits and vulnerabilities | `filetype:txt inurl:exploit "security vulnerability"` |

## Determining the Operating System

Attackers use OS fingerprinting tools to detect the OS running at the target, along with city, country, lat/long, hostname, and IP address.

| Tool | Source | What it reveals |
|---|---|---|
| **Netcraft** | [netcraft.com](https://www.netcraft.com) | OS of all sites associated with a target domain (via "What's that site running?") |
| **Shodan** | [shodan.io](https://www.shodan.io) | Connected devices (routers, servers, IoT), OS, location, known Common Vulnerabilities and Exposures (CVEs) across Exploit-DB / Metasploit / Packetstorm |
| **Censys** | [censys.io](https://censys.io) | Full view of internet-exposed servers and devices: OS, IP, protocols, geolocation |

## Competitive Intelligence Gathering

**Competitive intelligence (CI) gathering** is the process of identifying, gathering, analyzing, verifying, and using information about competitors from public resources such as the Internet. Key characteristics:

- **Non-interfering and subtle** — legal and ethical, unlike industrial espionage or IP theft
- Focuses on the external business environment
- Helps answer: what competitors are doing, how they position products/services, what customers say about their strengths and weaknesses

### Approaches

| Approach | Description | Examples |
|---|---|---|
| **Direct** | Primary source; involves direct contact or observation | Trade shows, social engineering of employees/customers |
| **Indirect** | Uses online and published resources | Company websites, search engines, press releases, patents, job postings, financial filings, legal databases |

### Sources of Competitive Intelligence

- Company websites and employment ads
- Search engines, Internet, and online databases
- Press releases and annual reports
- Trade journals, conferences, and newspapers
- Patent and trademarks
- Social engineering employees
- Product catalogs and retail outlets
- Analyst and regulatory reports
- Customer and vendor interviews
- Agents, distributors, and suppliers

### What CI Helps Determine

| Question | What it reveals |
|---|---|
| **When did it begin?** | Company history, establishment date, information not widely available |
| **How did it develop?** | Advertisement strategies, customer relationship management (CRM), growth tactics |
| **Who leads it?** | Decision-makers and executives |
| **Where is it located?** | Branch locations and their operations |

### Information Resource Sites

#### General Intelligence

| Tool | Source | Purpose |
|---|---|---|
| **EDGAR** | [sec.gov/edgar](https://www.sec.gov/edgar) | Electronic Data Gathering, Analysis, and Retrieval — U.S. Securities and Exchange Commission (SEC) system for automated collection and dissemination of mandatory corporate filings |
| **D&B Hoovers** | [dnb.com](https://www.dnb.com) | 120M+ business records; sales intelligence for targeting prospects |
| **LexisNexis** | [lexisnexis.com](https://www.lexisnexis.com) | Legal, news, and public records; compliance, fraud detection, identity solutions |
| **Business Wire** | [businesswire.com](https://www.businesswire.com) | Press release distribution; full-text news, photos, multimedia to global media and investors |
| **Factiva** | [dowjones.com](https://www.dowjones.com) | 33,000+ licensed sources — publications, newswires, blogs, images, videos in 28 languages |

#### Company Plans

| Tool | Source | Purpose |
|---|---|---|
| **MarketWatch** | [marketwatch.com](https://www.marketwatch.com) | Business news, personal finance, real-time market commentary and investment data |
| **The Wall Street Transcript** | [twst.com](https://www.twst.com) | Industry reports, money manager/analyst views, CEO interviews |
| **Euromonitor** | [euromonitor.com](https://www.euromonitor.com) | Consumer market strategy research; industry, consumer, and demographic reports |
| **Experian** | [experian.com](https://www.experian.com) | Competitor search/affiliate/display/social marketing metrics; consumer data forecasting |
| **The Search Monitor** | [thesearchmonitor.com](https://www.thesearchmonitor.com) | Monitors brand/trademark use, affiliate compliance, competitor ads across paid/organic/social/mobile |
| **USPTO** | [uspto.gov](https://www.uspto.gov) | United States Patent and Trademark Office — provides patent and trademark registration data and search options for both databases |

#### Expert Opinions

| Tool | Source | Purpose |
|---|---|---|
| **SEMRush** | [semrush.com](https://www.semrush.com) | Competitor keyword research; Google keywords, AdWords, organic/paid search competitor lists |
| **ABI/INFORM Global** | [proquest.com](https://www.proquest.com) | Business/financial database; management techniques, corporate strategy, competitive landscape |
| **SimilarWeb** | [similarweb.com](https://www.similarweb.com) | Estimates website/app traffic, geography, and referral data from aggregated multi-source data |
| **SERanking** | [seranking.com](https://seranking.com) | Website traffic dynamics, competitor comparison, keyword semantics, pay-per-click (PPC) competitor research |

## Other Techniques for Footprinting through Internet Research Services

| Technique | Description | Information Gathered | Tools |
|---|---|---|---|
| **Finding the Geographical Location** | Obtain the physical location of the target | Entrances to buildings, security cameras, gates, hiding spots, perimeter fence weak points, utility connections | Google Earth, Google Maps, Wikimapia |
| **Gathering Information from Financial Services** | Search for financial data: stock quotes, charts, news, portfolios | Market value of shares, company profile, competitor details, stock rates, press releases, financial reports | Google Finance, MSN Money, Yahoo! Finance, Investing.com |
| **Gathering Information from Business Profile Sites** | Retrieve business information of companies in a particular region | Location, addresses, contact information, employee database of the target organization | opencorporates, Crunchbase, corporationwiki |
| **Monitoring Targets Using Alerts** | Obtain up-to-date information via email or SMS alerts | Mentions of the organization's name, member names, website, or any of its people or projects | Google Alerts, X Alerts, Giga Alerts |
| **Tracking the Online Reputation** | Monitor a company's reputation on the Internet | Search engine ranking, email notifications when mentioned online, social news about the company | Mention, ReviewPush, Reputology |
| **Gathering Information from Groups, Forums, and Blogs** | Join target organization's employee groups to obtain shared information | Public network information, system information, personal information of employees | Google Groups, LinkedIn Groups |
| **Gathering Information from Public Source-Code Repositories** | Identify developers and technologies used | Configuration files, private Secure Shell (SSH) and Secure Sockets Layer (SSL) keys, source-code files, dynamic libraries, software tools | Recon-ng |

### Finding the Geographical Location

Attackers use location data to plan physical attacks (dumpster diving, surveillance, social engineering) alongside technical ones.

| Tool | Source | Details |
|---|---|---|
| **Google Earth** | [earth.google.com](https://earth.google.com) | 3D imagery, street views, altitude, and coordinates |
| **Google Maps** | — | Driving directions, traffic conditions, landmarks, address/contact details |
| **Wikimapia** | — | Interactive maps with community-added location details |

### Gathering Information from Financial Services

Financial firms rely on web services for transactions; attackers exploit this via malware, authentication bypass, brute force, and phishing.

| Tool | Source | Details |
|---|---|---|
| **Google Finance** | [google.com/finance](https://www.google.com/finance) | Business headlines, stock charts with major event markers, news and blog articles per company |
| **MSN Money** | [msn.com/money](https://www.msn.com/en-us/money) | Financial news, stock data, portfolios |
| **Yahoo! Finance** | [finance.yahoo.com](https://finance.yahoo.com) | Market data, company profiles, competitor details |
| **Investing.com** | [investing.com](https://www.investing.com) | Stock exchange rates, financial reports |

### Gathering Information from Business Profile Sites

Publicly accessible databases exposing location, contact info, department names, service type, and employee databases.

| Tool | Details |
|---|---|
| **opencorporates** | Corporate registry data |
| **Crunchbase** | Startup and company profiles, funding, leadership |
| **corporationwiki** | Company connections, officers, and related entities |

### Monitoring Targets Using Alerts

Alert services automatically notify when new content (news, websites, blogs, videos, discussion groups) matches a user-defined search term. Attackers use these to passively track targets in real time.

| Tool | Source |
|---|---|
| **Google Alerts** | [google.com/alerts](https://www.google.com/alerts) |
| **X Alerts** | [x.com](https://x.com) (formerly Twitter — built-in notification/mention alerts) |
| **Giga Alerts** | [gigaalert.com](https://www.gigaalert.com) |

### Tracking the Online Reputation of the Target

Companies use Online Reputation Management (ORM) tools to monitor and improve brand reputation. The transparency this creates allows attackers to collect genuine, up-to-date organizational information. Attackers can obtain: search engine rankings, email notifications on mentions, social news, and online conversations about the target.

| Tool | Source | Details |
|---|---|---|
| **Mention** | [mention.com](https://mention.com) | Monitors web, social media, forums, and blogs in real time; delivers live reports to email |
| **ReviewPush** | [reviewpush.com](https://www.reviewpush.com) | Tracks online reviews across platforms |
| **Reputology** | [reputology.com](https://www.reputology.com) | Monitors and analyzes reviews and brand mentions |

### Gathering Information from Groups, Forums, and Blogs

Organizations rarely monitor what employees share in public forums. Attackers can search by Fully Qualified Domain Names (FQDNs), IP addresses, or usernames, or register with fake profiles.

| Data type | Examples |
|---|---|
| Identity | Full name, workplace, residence |
| Contact | Phone numbers, personal and organizational email addresses |
| Visual | Photos of residence, workplace, awards |

| Platform | Details |
|---|---|
| **Google Groups** | Public and private group discussions |
| **LinkedIn Groups** | Professional groups with employee discussions |

### Gathering Information from Public Source-Code Repositories

Sites such as GitHub, GitLab, SourceForge, and BitBucket may expose confidential files, security flaws, and developer identities. Combined with active footprinting, this enables spear phishing and infrastructure attacks.

| Tool | Source | Details |
|---|---|---|
| **Recon-ng** | [github.com/lanmaster53/recon-ng](https://github.com/lanmaster53/recon-ng) | Full-featured web reconnaissance framework for discovering public repository data |
