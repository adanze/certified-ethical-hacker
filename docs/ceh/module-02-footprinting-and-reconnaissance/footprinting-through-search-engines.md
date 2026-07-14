# Footprinting through Search Engines

Search engines are a primary source of target information. **Crawlers** continuously scan active websites and store results in a massive indexed database. Queries return **Search Engine Results Pages (SERPs)** — ranked web pages, videos, images, and files. Search engines can expose technology platforms, employee details, login pages, intranet portals, and contact information — enabling social engineering and advanced system attacks.

## Footprinting Using Advanced Google Hacking Techniques

A simple search (e.g., "Microsoft") can reveal physical location, contact addresses, services, and employee count. Major search engines include Google, Bing, Yahoo, Baidu, Yandex, DuckDuckGo, and WolframAlpha.

**Google hacking** is the use of advanced Google search operators to build complex queries that extract sensitive or hidden information and identify vulnerable targets. Attackers also use the **Google Hacking Database (GHDB)** — a curated collection of queries for finding sensitive data.

### Operator Syntax

```
operator:search_term
```
No spaces between operator and query term.

### Popular Google Advanced Search Operators

*Source: [googleguide.com](https://www.googleguide.com)*

| Operator | Purpose | Example |
|---|---|---|
| `site:` | Restrict results to a domain | `games site:certifiedhacker.com` |
| `allinurl:` | All query terms must appear in the URL | `allinurl: google career` |
| `inurl:` | One query term must appear in the URL | `inurl:copy site:www.google.com` |
| `intext:` | Term must appear in the page body | `intext:"vpn configuration"` |
| `allintitle:` | All query terms in the page title | `allintitle: detect malware` |
| `intitle:` | One term in the title | `malware detection intitle:help` |
| `inanchor:` | One term in anchor text of inbound links | `Anti-virus inanchor:Norton` |
| `allinanchor:` | All terms in anchor text of inbound links | `allinanchor: best cloud service provider` |
| `cache:` | Google's cached version of a page | `cache:www.eff.org` |
| `link:` | Pages linking to the specified URL | `link:www.googleguide.com` |
| `related:` | Pages similar to the specified URL | `related:www.microsoft.com` |
| `info:` | Information about a specific page | `info:gothotel.com` |
| `location:` | Results for a specific location | `location: 4 seasons restaurant` |
| `filetype:` | Results by file extension | `jasmine filetype:jpg` |
| `source:` | Results from a specific source in Google News | `Malware news source:"Hacker News"` |
| `phonebook:` | Residential/business phone numbers | `phonebook:Sundar Pichai` |
| `before:` | Content published before a date | `ransomware before:2020-06-29` |
| `after:` | Content published after a date | `site:wikipedia.org after:2023-01-01 artificial intelligence` |

### What Attackers Extract with Google Hacking (GHDB)

- Error messages containing sensitive information
- Files containing passwords
- Sensitive directories
- Login/logon portals
- Network or vulnerability data (IDS, firewall logs, configurations)
- Advisories and server vulnerabilities
- Software version information
- Web application source code
- Connected IoT devices and unprotected control panels
- Hidden web pages (intranet, VPN services)

### Example Query

```
intitle:intranet inurl:intranet +intext:"human resources"
```

Finds intranet pages related to human resources — revealing internal organizational structure for social engineering attacks.

## Footprinting Using Advanced Google Hacking Techniques with AI

Attackers can leverage AI-powered technologies to enhance and automate footprinting tasks. Tools such as **ShellGPT** allow attackers to generate precise shell commands from natural-language prompts.

**Example prompt:**
> "Use filetype search operator to obtain pdf files on the target website eccouncil.org and store the result in the recon1.txt file"

### Generated Shell Command

```bash
lynx --dump "http://www.google.com/search?q=site:eccouncil.org+filetype:pdf" \
  | grep "http" \
  | cut -d "=" -f2 \
  | grep -o "http[^&]*" > recon1.txt
```

### Command Breakdown

| Segment | Purpose |
|---|---|
| `lynx --dump "..."` | Opens Google search results for PDFs on eccouncil.org in text/dump mode |
| `\| grep "http"` | Keeps only lines containing URLs |
| `\| cut -d "=" -f2` | Splits on `=` and takes the second field (the URL value) |
| `\| grep -o "http[^&]*"` | Extracts the clean URL, stopping before any `&` parameter |
| `> recon1.txt` | Saves all results to `recon1.txt` |

## Google Hacking Database (GHDB)

*Source: [exploit-db.com/google-hacking-database](https://www.exploit-db.com/google-hacking-database)*

The GHDB is a subset of the Exploit-DB focused on **Google Dorks** — advanced search queries that uncover sensitive information inadvertently exposed on the web.

### What GHDB Queries Uncover

- **Sensitive files** — configuration files, database dumps, log files with credentials
- **Exposed directories** — open directories on web servers
- **Error messages** — revealing server configurations or vulnerabilities
- **Vulnerable devices** — specific device types or software versions with known vulnerabilities

### GHDB Categories

| Category | Description |
|---|---|
| Footholds | Queries that help establish an initial access point into a target system or network |
| Files Containing Usernames | Pages or files that expose usernames, often found in config or log files |
| Sensitive Directories | Open or misconfigured directories on web servers exposing internal content |
| Web Server Detection | Queries that identify the type and version of a web server |
| Vulnerable Files | Files associated with known vulnerabilities, such as unpatched scripts or outdated components |
| Vulnerable Servers | Servers running software versions with known exploitable weaknesses |
| Error Messages | Server or application error pages that reveal configurations or stack traces |
| Files Containing Juicy Info | Files with miscellaneous sensitive data not covered by more specific categories |
| Files Containing Passwords | Files that directly expose passwords or hashed credentials |
| Sensitive Online Shopping Info | Exposed e-commerce data such as order details, customer records, or payment info |
| Network or Vulnerability Data | IDS/firewall logs, network maps, or vulnerability scan results left publicly accessible |
| Pages Containing Login Portals | Login pages for admin panels, VPNs, webmail, and other authenticated services |
| Various Online Devices | Publicly accessible IoT devices, cameras, routers, and industrial control panels |
| Advisories and Vulnerabilities | Pages referencing specific CVEs, security advisories, or known exploit details |

### How Attackers Leverage the GHDB

- **Reconnaissance** — gather info on exposed files, directories, and devices
- **Exploiting Misconfigurations** — gain unauthorized access via misconfigured servers
- **Finding Vulnerable Systems** — locate outdated or unpatched software versions
- **Credential Harvesting** — extract usernames and passwords for stuffing or brute force
- **Identifying Open Ports and Services** — map potential entry points on a network

### SearchSploit

**SearchSploit** is a command-line search tool for Exploit-DB that allows offline searching through a locally checked-out copy of the repository. Useful for assessments on **air-gapped or segregated networks** without Internet access.

## VPN Footprinting through Google Hacking Database

Google dorks can be used to footprint **Virtual Private Networks (VPNs)**, revealing login portals, key directories, and VPN server details.

### Google Dorks for VPN Footprinting

| Google Dork | Purpose |
|---|---|
| `inurl:"/sslvpn_logon.shtml" intitle:"User Authentication" "WatchGuard Technologies"` | Finds pages containing login portals |
| `inurl:/sslvpn/Login/Login` | Finds VPN login portals |
| `site:vpn.*.*/  intitle:"login"` | Finds VPN login portals |
| `inurl:weblogin` + `intitle:("USG20-VPN"\|"USG20W-VPN"\|USG40\|…\|"FLEX")` | Finds hosts with Zyxel hardcoded password vulnerability |
| `intext:Please Login SSL VPN inurl:remote/login` + `intext:FortiClient` | Finds Fortinet VPN login pages |
| `site:vpn.*.*/ intext:"login" intitle:"login"` | Retrieves various VPN login pages |
| `intitle:"index of" /etc/openvpn/` | Retrieves juicy info and sensitive directories |
| `"-----BEGIN OpenVPN Static key V1-----" ext:key` | Finds OpenVPN static keys |
| `intitle:"index of" "vpn-config.*"` | Retrieves juicy info about vpn-config files |
| `Index of / *.ovpn` | Finds OpenVPN config files, certificates, and keys |
| `inurl:"/vpn/tmindex.html" vpn` | Finds Netscaler and Citrix Gateway VPN login portals |
| `intitle:"SSL VPN Service" + intext:"Your system administrator provided the following information…"` | Finds Cisco ASA login web pages |

## VPN Footprinting through GHDB with AI

Attackers can use AI tools such as **ChatGPT** to generate dork-based shell commands for VPN footprinting.

**Example prompt:**
> "Use inurl search operator to obtain the Fortinet VPN login pages"

### Generated Shell Command

```bash
lynx --dump "http://www.google.com/search?q=inurl:%22remote+login%22+fortinet+OR+fortigate+OR+%22ssl+vpn%22" \
  | grep "http" \
  | cut -d "=" -f2 \
  | grep -o "http[^&]*"
```

### Command Breakdown

| Segment | Purpose |
|---|---|
| `lynx --dump "..."` | Fetches Google results for pages with "remote login" in URL and Fortinet/Fortigate/SSL VPN in content |
| `\| grep "http"` | Filters lines containing URLs |
| `\| cut -d "=" -f2` | Splits on `=` and takes the URL value field |
| `\| grep -o "http[^&]*"` | Extracts clean URLs, stopping before `&` parameters |

## Footprinting through SHODAN Search Engine

*Source: [shodan.io](https://www.shodan.io)*

**Shodan** is a search engine that enables attackers to perform footprinting at various levels. Unlike traditional search engines that index web content, Shodan scans and indexes **internet-connected devices and services**, detecting networks and devices with vulnerabilities.

Searching Shodan for terms such as **VoIP** or **VPN** returns results that include exposed devices, open ports, service banners, and configuration details — providing attackers with actionable intelligence for targeting specific technologies.

## Other Techniques for Footprinting through Search Engines

### Google Advanced Search, Advanced Image Search, and Reverse Image Search

When a normal search box is insufficient, attackers use Google's advanced search features to build complex, condition-based queries without memorizing operators.

| Feature | URL | Use in Footprinting |
|---|---|---|
| Advanced Search | `google.com/advanced_search` | Find sites linking to the target — revealing partners, vendors, clients, and affiliations |
| Advanced Image Search | `google.com/advanced_image_search` | Search target images by color, domain, file type, size, or keyword |
| Reverse Image Search | `google.com/imghp` | Upload or paste an image URL to find all online locations of that image — useful for tracking profile pictures, photos, and location details |

**Reverse image search tools:** Google Image Search, TinEye, Yahoo Image Search, Bing Image Search, Pinterest Reverse Image Search.

### Gathering Information from Video Search Engines

Video search engines crawl the web for video content and can reveal information about the target that is not available in text form. Attackers search for target-related videos on platforms such as **YouTube, Google Videos, Yahoo Videos, and Bing Videos** (filterable by format and duration).

Video analysis tools — **YouTube Metadata, YouTube DataViewer, MW Metadata, EZGif, VideoReverser.com** — allow further extraction of hidden metadata such as upload time/date, thumbnails, and geolocation data embedded in video files.

### Gathering Information from Meta Search Engines

Meta search engines do not maintain their own index. They **simultaneously query multiple third-party search engines** (Google, Bing, Ask.com, etc.), aggregate the results, rank them by relevance, and filter duplicates — returning broader results with the same effort.

They also **hide the user's IP address**, providing search privacy.

**Examples:** Startpage, MetaGer, eTools.ch

Useful for gathering information from shopping sites, images, videos, blogs, news, and articles across multiple sources simultaneously.

### Gathering Information from FTP Search Engines

FTP search engines index files stored on FTP servers — often used by companies, universities, and institutions to share large archives. Many FTP servers are **left unsecured** and accessible directly through a web browser. A client such as **FileZilla** (`filezilla-project.org`) can also be used to access FTP accounts (upload, download, rename).

**FTP search engine examples:** NAPALM FTP Indexer, FreewareWeb FTP File Search, Mamont, Globalfilesearch.com

Attackers use these to find: business strategies, financial records, employee records, tax documents, licensed software, and other confidential files.

#### Google Dorks for FTP Servers (Table 2.2)

| Google Dork | Description |
|---|---|
| `site:.in \| .com \| .net intitle:"index of" ftp` | Finds files containing juicy information |
| `intitle:"index of" "*/ftp.txt"` | Finds files containing juicy information |
| `intext:"index of" "ftp"` | Finds files containing juicy information |
| `inurl:WS_FTP.log` | Finds files containing juicy information |
| `intitle:index.of /cftp /robots.txt` | Finds files containing juicy information |
| `intitle: "Index of ftp passwords"` | Finds files containing passwords |
| `inurl: /ftp intitle:"office"` | Detects the web server |
| `inurl:/web-ftp.cgi` | Finds pages containing login portals |
| `site:sftp.*.*/  intext:"login" intitle:"server login"` | Finds pages containing login portals |
| `intitle:"Index of" ws_ftp.ini` | Finds the `ws_ftp.ini` file containing FTP usernames and passwords |
| `inurl:ftp -inurl:(http\|https) intext:"@gmail.com" intext:subject fwd\|confidential\|important\|CARD\|cvv` | Finds archived emails revealing credit-card numbers, customer info, and private company emails |
| `allintitle:"CrushFTP WebInterface"` | Detects CrushFTP WebInterface login portals and password reset/recovery pages |
| `"ws_ftp.log" ext:log` | Finds sensitive directories |
| `intitle:"Monsta ftp" intext:"Lock session to IP"` | Shows websites using the Monsta FTP service |
| `"index of" /ftp/logs` | Finds potential log files |
| `intitle:"index of" inurl:ftp intext:admin` | Lists admin folders on FTP servers |

### Gathering Information from IoT Search Engines

IoT search engines crawl the Internet for publicly accessible **Internet of Things (IoT) devices**. Many IoT devices are unsecured — no password or default credentials — making them easy targets.

Through basic searches, attackers can gain control over:
- SCADA (Supervisory Control and Data Acquisition) systems
- Traffic control systems
- Internet-connected household and industrial appliances
- CCTV cameras

**IoT search engine examples:** Shodan, Censys, ZoomEye

Information obtainable:
- Manufacturer details
- Geographical location and IP address
- Hostname and open ports

Attackers use this information to establish back doors into IoT devices and launch further attacks.
