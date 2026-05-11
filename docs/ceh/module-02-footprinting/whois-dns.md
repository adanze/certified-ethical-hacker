# WHOIS & DNS

WHOIS and DNS are foundational passive reconnaissance sources — both are publicly accessible and leave no trace on the target.

## WHOIS

A query protocol that returns registration data for domains and IP addresses.

**Information revealed:**

- Registrant name, organization, and contact email
- Registration and expiration dates
- Name servers
- Registrar details

!!! note
    Many registrants use **WHOIS privacy services** (e.g. Cloudflare, GoDaddy) that replace personal data with proxy contact details.

**Tools:** `whois` CLI, who.is, ARIN/RIPE/APNIC databases (for IP ranges)

## DNS Reconnaissance

The Domain Name System maps hostnames to IP addresses. Each record type reveals different information:

| Record | Purpose |
|--------|---------|
| `A` | Maps hostname → IPv4 address |
| `AAAA` | Maps hostname → IPv6 address |
| `MX` | Mail server for the domain |
| `NS` | Authoritative name servers |
| `TXT` | Arbitrary text; often SPF, DKIM, DMARC policies |
| `CNAME` | Alias pointing to another hostname |
| `SOA` | Start of authority; admin contact and zone serial |

## DNS Zone Transfer

A misconfigured DNS server may allow an unauthorized zone transfer (`AXFR`), leaking the entire DNS record set — all subdomains, IPs, and internal hostnames.

```bash
nslookup -type=ns example.com
nslookup -query=AXFR example.com <nameserver>
# or
dig axfr @ns1.example.com example.com
```

A successful zone transfer is a critical misconfiguration.

## Subdomain Enumeration

Beyond zone transfers, subdomains can be discovered via:

- Brute-force wordlists (`gobuster dns`, `amass`)
- Certificate Transparency logs (`crt.sh`)
- Search engine dorking (`site:example.com -www`)
