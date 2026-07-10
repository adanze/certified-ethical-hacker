# DNS Footprinting

## Overview

DNS footprinting is the phase in the footprinting methodology that follows Whois footprinting. Attackers query DNS infrastructure to collect information about DNS servers, DNS records, and the types of servers used by the target organization.

## Purpose and Attacker Value

The data gathered enables attackers to identify hosts connected to the target network and provides a foundation for deeper exploitation of the target organization.

## Key Techniques

- **DNS record extraction** — querying DNS servers for various record types to enumerate the target's infrastructure
- **Reverse DNS lookups** — resolving IP addresses back to hostnames to map the network
- **DNS interrogation tools** — automated tools that systematically query DNS servers to extract records at scale

## Extracting DNS Information

DNS footprinting reveals DNS zone data, which includes DNS domain names, computer names, IP addresses, and much more information about a network. An attacker uses DNS information to determine key hosts in the network and then performs social engineering attacks to gather even more information.

### DNS Record Types

| Record Type | Description |
|---|---|
| A | Points to a host's IP address |
| AAAA | Points to a host's IPv6 address |
| MX | Points to domain's mail server |
| NS | Points to host's name server |
| CNAME | Canonical naming; allows aliases to a host |
| SOA | Indicate authority for a domain |
| SRV | Service records |
| PTR | Maps IP address to a hostname |
| RP | Responsible person |
| HINFO | Host information record; includes CPU type and OS |
| TXT | Unstructured text records |

## DNS Interrogation Tools

Attackers use DNS interrogation tools such as SecurityTrails, Fierce, DNSChecker, zdns, and DNSdumpster.com to perform DNS footprinting. These tools can extract a range of IP addresses using IP routing lookup. If the target network allows unknown, unauthorized users to transfer DNS zone data, it is easy for an attacker to obtain DNS information with the help of a DNS interrogation tool.

When an attacker queries a DNS server using a DNS interrogation tool, the server responds with a record structure that contains information about the target DNS. DNS records provide important information regarding the locations and types of servers.

### SecurityTrails

Source: <https://securitytrails.com>

SecurityTrails is an advanced DNS enumeration tool capable of creating a DNS map of the target domain network. It can enumerate both current and historical DNS records such as A, AAAA, NS, MX, SOA, and TXT, which helps in building the DNS structure. It also enumerates all existing subdomains of the target domain using brute-force techniques.

### Fierce

Source: <https://github.com/mschwager/fierce>

Fierce is a DNS reconnaissance tool used for scanning and collecting crucial information about the target domain. Attackers can use it to enumerate subdomains, identify non-contiguous IP spaces, and find hostnames linked with specified domains or subdomains. This helps attackers create a network environment map and identify potential targets for exploitation.

| Command | Purpose |
|---|---|
| `fierce --domain certifiedhacker.com` | Basic scan with no additional options |
| `fierce --domain certifiedhacker.com --subdomains write admin mail` | Scan for specific subdomains (e.g., write, admin, mail) |
| `fierce --domain certifiedhacker.com --subdomains mail --traverse 10` | Scan domains near discovered records; `--traverse 10` searches contiguous IP blocks within a range of 10 |
| `fierce --domain certifiedhacker.com --subdomains mail --connect` | Attempt HTTP connection on discovered domains |
| `fierce --domain certifiedhacker.com --wide` | Full detailed scan of all discovered records |

## DNS Lookup with AI

Attackers can leverage AI-powered technologies to enhance and automate their footprinting tasks. With the aid of AI, attackers can effortlessly perform reverse DNS lookup activities on a target and acquire valuable insights.

For example, attackers can use ChatGPT with a prompt such as:

> "Install and use DNSRecon to perform DNS enumeration on the target domain www.certifiedhacker.com"

The following shell command is generated to perform DNS enumeration using the `dnsrecon` tool:

```bash
sudo apt-get update && sudo apt-get install -y dnsrecon && dnsrecon -d certifiedhacker.com -t std
```

| Command Part | Explanation |
|---|---|
| `sudo apt-get update` | Updates the package lists for upgrades and new package installations |
| `&&` | Concatenates commands to execute them sequentially |
| `sudo apt-get install -y dnsrecon` | Installs the dnsrecon tool with automatic "yes" to all prompts |
| `dnsrecon -d certifiedhacker.com -t std` | Initiates dnsrecon to perform DNS enumeration on the target domain using standard enumeration techniques |

## Reverse DNS Lookup

DNS lookup finds the IP address for a given domain name; a reverse DNS operation obtains the domain name of a given IP address. When a domain name is entered in a browser, DNS converts it into an IP address using a record and forwards the request for further processing. Attackers perform a reverse DNS lookup on an IP range to locate a DNS PTR record for those IP addresses.

Attackers use various tools such as DNSRecon, Reverse Lookup, puredns, Reverse IP Domain Check, and Reverse IP Lookup to perform reverse DNS lookup on the target host. When an IP address or range is obtained, these tools can resolve it back to a domain name.

### DNSRecon

Source: <https://github.com/darkoperator/dnsrecon>

Command to perform a reverse DNS lookup on a range of IP addresses:

```bash
dnsrecon -r 162.241.216.0-162.241.216.255
```

The `-r` option specifies the range of IP addresses (first to last) for a reverse lookup by brute force.

### Reverse Lookup

Source: <https://mxtoolbox.com>

The Reverse Lookup tool performs a reverse IP lookup by taking an IP address and locating a DNS PTR record for that IP address.
