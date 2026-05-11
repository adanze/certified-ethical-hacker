# Search Engines

Search engines index enormous amounts of publicly available data. Attackers leverage them to gather information without directly touching the target.

## Google Hacking (Google Dorking)

Using advanced search operators to find sensitive data exposed on the web:

| Operator | Purpose | Example |
|----------|---------|----------|
| `site:` | Limit results to a domain | `site:example.com` |
| `filetype:` | Filter by file type | `filetype:pdf confidential` |
| `intitle:` | Search in page title | `intitle:"index of"` |
| `inurl:` | Search in URL | `inurl:admin login` |
| `cache:` | Show Google's cached version | `cache:example.com` |

The **Google Hacking Database (GHDB)** at exploit-db.com maintains a curated list of effective dorks.

## Other Useful Sources

- **Shodan** — search engine for internet-connected devices; reveals open ports, banners, and misconfigurations
- **Censys** — similar to Shodan, focused on certificates and network infrastructure
- **Wayback Machine** — historical snapshots of websites; may expose old admin panels or credentials
- **LinkedIn / social media** — reveals employee names, roles, and technology stacks

## Metadata Extraction

Publicly downloadable files (PDF, DOCX, images) often contain embedded metadata:

- Author names and usernames
- Software versions and OS information
- Internal network paths

Tools: `exiftool`, `FOCA`
