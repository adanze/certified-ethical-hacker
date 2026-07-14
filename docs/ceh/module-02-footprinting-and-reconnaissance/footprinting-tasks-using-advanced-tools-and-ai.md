# Footprinting Tasks using Advanced Tools and AI

## Overview

Footprinting tools collect basic information about target systems to support exploitation. Information gathered typically includes IP location, routing information, business details, phone numbers, email source data, DNS information, and domain information.

## Core Tools

| Tool | Source | Primary Purpose |
|---|---|---|
| Maltego | [maltego.com](https://www.maltego.com) | Mapping relationships and real-world links between people, organizations, infrastructure, and documents |
| Recon-ng | [github.com/lanmaster53/recon-ng](https://github.com/lanmaster53/recon-ng) | Web reconnaissance framework with independent modules for open-source, web-based reconnaissance |
| FOCA | [github.com/ElevenPaths/FOCA](https://github.com/ElevenPaths/FOCA) | Finding metadata and hidden information in scanned documents |
| subfinder | [github.com/projectdiscovery/subfinder](https://github.com/projectdiscovery/subfinder) | Passive subdomain discovery for websites |
| OSINT Framework | [osintframework.com](https://osintframework.com) | Web interface listing free OSINT tools organized as a category tree |
| Recon-Dog | [github.com/s0md3v/ReconDog](https://github.com/s0md3v/ReconDog) | All-in-one information gathering using APIs |
| BillCipher | [github.com/GitHackTools/BillCipher](https://github.com/GitHackTools/BillCipher) | Information gathering for a website or IP address |

## Tool Details

### Maltego

Maltego determines **relationships and real-world links** between people, groups, organizations, websites, Internet infrastructure, and documents. Attackers add a Website entity, rename it with the target's domain, and extract email addresses, phone numbers, DNS names, Netblocks, and IP address information.

### Recon-ng

A **web reconnaissance framework** with independent modules and database interaction, providing an environment for open-source web-based reconnaissance. Attackers use the `recon/domains-hosts/brute_hosts` module to extract a list of hosts associated with a target URL.

### FOCA

**Fingerprinting Organizations with Collected Archives (FOCA)** finds metadata and hidden information in scanned documents (Microsoft Office, Open Office, PDF). Key features:

| Feature | What It Does |
|---|---|
| Web Search | Finds hosts and domain names through URLs associated with the main domain |
| DNS Search | Checks NS, MX, and SPF servers to discover new host and domain names |
| IP Resolution | Resolves hostnames via DNS to obtain associated IP addresses |
| PTR Scanning | Scans PTR records to find more servers in the same IP segment |
| Bing IP | Searches for domain names associated with each discovered IP address |
| Common Names | Performs dictionary attacks against DNS |

Attackers search a target domain to obtain file information stored in it, then view network domains, roles, vulnerabilities, and metadata.

### subfinder

A **subdomain discovery tool** that finds valid subdomains using passive online sources. Supports multiple output formats: JSON, file, and stdout.

### OSINT Framework

An **open-source intelligence gathering framework** focused on free tools and resources. Provides a simple web interface listing OSINT tools as a **tree structure** organized by category.

Tool indicators used in the framework:

| Indicator | Meaning |
|---|---|
| (T) | Link to a tool that must be installed and run locally |
| (D) | Google Dork |
| (R) | Requires registration |
| (M) | URL that contains the search term and must be edited manually |

### Recon-Dog

An all-in-one information gathering tool using APIs. Key features:

- **Censys** — gathers information about an IP address via censys.io
- **NS lookup** — performs name server lookup
- **Port scan** — scans most common TCP ports
- **Detect CMS** — detects 400+ content management systems
- **Whois lookup** — performs a Whois lookup
- **Detect honeypot** — uses shodan.io to check if the target is a honeypot
- **Find subdomains** — uses findsubdomains.com
- **Reverse IP lookup** — finds domains associated with an IP address
- **Detect technologies** — uses wappalyzer.com to detect 1000+ technologies
- **All** — runs all utilities against the target

### BillCipher

An information gathering tool for a website or IP address. Works on any operating system supporting Python 2, Python 3, and Ruby. Includes DNS lookup, Whois lookup, port scanning, zone transfer, host finder, and reverse IP lookup.

## Additional Tools

| Tool | Source |
|---|---|
| Sudomy | [github.com/screetsec/Sudomy](https://github.com/screetsec/Sudomy) |
| theHarvester | [github.com/laramies/theHarvester](https://github.com/laramies/theHarvester) |
| whatweb | [github.com/urbanadventurer/WhatWeb](https://github.com/urbanadventurer/WhatWeb) |
| Raccoon | [github.com/evyatarmeged/Raccoon](https://github.com/evyatarmeged/Raccoon) |
| Orb | github.com |
| Web Check | [web-check.xyz](https://web-check.xyz) |
| OSINT.SH | [osint.sh](https://osint.sh) |

## AI-Powered OSINT Tools

AI has revolutionized OSINT by enhancing data collection, analysis, and prediction. AI automates data processing, extracts relevant insights, and delivers actionable intelligence more efficiently than traditional methods.

### AI Use Cases in OSINT

| Use Case | Description |
|---|---|
| Web Scraping | Automates extraction of data from social media, blogs, forums, and deep web databases; tracks entities over time |
| Pattern Recognition | ML identifies entities (names, addresses, emails, phone numbers) within large datasets and analyzes relationships |
| Content Summarization | NLP algorithms summarize large volumes of data to extract pertinent information from extensive datasets |
| Sentiment Analysis | Interprets human emotions through text analysis; assesses user sentiment from social media posts and reviews |
| Image Recognition | Computer vision assists with face recognition, metadata extraction, reverse image search, and deepfake detection |
| AI Detection | Identifies content generated by other AI tools — crucial for detecting AI-facilitated malicious activities |

### Benefits of Integrating AI in OSINT

| Benefit | Description |
|---|---|
| Improved Efficiency | Automates web scraping and data extraction; allows investigators to focus on higher-level analysis |
| Greater Scope | Analyzes data from the surface web, deep web, and dark web; uncovers hidden patterns across large datasets |
| Enhanced Visibility | Connects billions of data points into coherent networks; presents relationships via graphical interfaces |
| Increased Investigator Safety | Enables anonymized and automated investigations; reduces risk of exposing an investigator's identity |

### Taranis AI

Source: [taranis.ai](https://taranis.ai)

An advanced OSINT tool that uses NLP and AI to improve the quality of data collected from sources such as websites, gathering unstructured news articles that analysts transform into organized reports and PDF deliverables.

| Feature | Description |
|---|---|
| Advanced OSINT Capabilities | Searches multiple data sources to collect unstructured news articles; provides enriched intelligence feed |
| AI-Enhanced Analysis | Enhances collected articles for higher content quality and relevance using AI and NLP |
| Multi-Format Output | Creates structured reports and PDF files tailored to specific informational needs |
| Seamless Publishing | Enables easy publication of finalized intelligence products to stakeholders |

### OSS Insight

Source: [ossinsight.io](https://ossinsight.io)

Leverages AI to analyze over **five billion GitHub events**, providing comprehensive insights into the open-source ecosystem — from repository analytics (stars, forks, commits) to developer productivity and collaboration patterns.

| Feature | Description |
|---|---|
| GPT-Powered Data Exploration | Query GitHub data using natural language; generates SQL and presents results visually — no SQL skills required |
| Technical Fields Analytics | Curates GitHub collections in domains such as web frameworks, AI, and Web3 |
| Developer Analytics | Monitors commits, pull requests, and code contributions; analyzes collaboration behavior |
| Repository Analytics | Assesses popularity, update frequency, and community engagement; provides historical trends |
| Compare Projects | Compares activity levels, contributor demographics, issue-handling efficiency, and technical metrics across projects |

**Importance for ethical hacking OSINT:**

| Aspect | Detail |
|---|---|
| Comprehensive Data Analysis | Over five billion GitHub events provide intelligence on software vulnerabilities, popular frameworks, and emerging trends — informing vulnerability assessments and attack vector identification |
| Real-time and Historical Data | Integration of real-time updates and GHArchive historical data ensures up-to-date information on ongoing developments and past incidents |
| AI-Powered Querying | The GitHub Data Explorer enables natural language querying of complex datasets, making it easier to extract specific information relevant to an investigation |

### Additional AI-Powered OSINT Tools

| Tool | Source | Purpose |
|---|---|---|
| DorkGPT | [dorkgpt.com](https://dorkgpt.com) | AI-powered Google Dorking — generates and refines advanced search queries using GPT models |
| DorkGenius | [dorkgenius.com](https://dorkgenius.com) | Automates Google Dorking to find hidden files, directories, and security vulnerabilities |
| Google Word Sniper | [googlewordsniper.eu](https://googlewordsniper.eu) | Refines search queries; identifies targeted keywords to surface hidden content |
| Cylect.io | [cylect.io](https://cylect.io) | Integrates multiple databases into one interface for efficient OSINT investigations |
| ChatPDF | [chatpdf.com](https://chatpdf.com) | Analyzes and extracts information from PDF documents via a conversational interface |
| Bardeen.ai | [bardeen.ai](https://www.bardeen.ai) | Automates data collection and analysis from various online sources |
| DarkGPT | [github.com/luijait/DarkGPT](https://github.com/luijait/DarkGPT) | Uses GPT-4-200K to query leaked databases for targeted searches in compromised data |
| PenLink Cobwebs | [cobwebs.com](https://cobwebs.com) | Gathers, processes, and visualizes data from online sources for cybersecurity investigations |
| Explore AI | [exploreai.vercel.app](https://exploreai.vercel.app) | AI-powered YouTube search engine — searches for and extracts information from YouTube videos |
| AnyPicker | [app.anypicker.com](https://app.anypicker.com) | Visual web scraper; extracts data from websites without coding; supports multi-page scraping |

## Custom Python Scripts with AI

Attackers can use AI-powered tools such as ChatGPT to create and run custom footprinting scripts. By providing an appropriate prompt, the AI generates a ready-to-run script that executes a series of footprinting commands against a target domain.

**Example prompt:**

> *"Develop a Python script which will accept the domain name www.microsoft.com as input and execute a series of website footprinting commands, including DNS lookups, WHOIS records retrieval, email enumeration, and more, to gather information about the target domain."*

The generated script defines four functions:

??? note "Full script – website_footprinting.py"
    ```python
    import subprocess

    def dns_lookup(domain):
        return subprocess.getoutput(f"dig {domain} ANY +noall +answer")

    def whois_lookup(domain):
        return subprocess.getoutput(f"whois {domain}")

    def email_enumeration(domain):
        return subprocess.getoutput(f"theHarvester -d {domain} -b all -l 100")

    def run_footprinting(domain):
        print("Performing DNS Lookup...")
        print(dns_lookup(domain))
        print("\nPerforming Whois Lookup...")
        print(whois_lookup(domain))
        print("\nEnumerating Emails...")
        print(email_enumeration(domain))

    domain = 'www.microsoft.com'
    run_footprinting(domain)
    ```

| Function | Tool Used | Purpose |
|---|---|---|
| `dns_lookup(domain)` | `dig` | Performs a DNS lookup for the specified domain |
| `whois_lookup(domain)` | `whois` | Retrieves WHOIS records for the specified domain |
| `email_enumeration(domain)` | `theHarvester` | Enumerates email addresses associated with the domain |
| `run_footprinting(domain)` | — | Orchestrates and prints results of all three functions |

The script is run with `python3 website_footprinting.py` to perform automated footprinting on the target domain.
