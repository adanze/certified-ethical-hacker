# Whois Footprinting

Gathering network-related information such as Whois information about the target organization is important when planning an attack. Whois footprinting helps in gathering domain information such as information regarding the owner of an organization, its registrar, registration details, its name server, and contact information. Whois footprinting covers how to perform a Whois lookup, analyze the results, find IP geolocation information, and the tools used to gather Whois information.

## Whois Lookup

Whois is a query and response protocol used for querying databases that store the registered users or assignees of an Internet resource, such as a domain name, an IP address block, or an autonomous system. This protocol listens to requests on **port 43 (TCP)**. Regional Internet Registries (RIRs) maintain Whois databases, which contain the personal information of domain owners. For each resource, the Whois database provides text records with information about the resource itself and relevant information regarding assignees, registrants, and administrative information (creation and expiration dates).

## Whois Data Models

Three types of data models exist to store and look up Whois information:

| Model | Description |
|---|---|
| **Thick Whois** (Distributed) | Stores complete Whois information from all registrars for a particular set of data |
| **Thin Whois** (Centralized) | Stores only the name of the Whois server of the registrar, which in turn holds complete details |
| **Decentralized Whois** | Stores complete Whois information with multiple independent entities managing the database |

## What a Whois Query Returns

- Domain name details
- Domain registrar
- Contact details of the domain owner
- Domain name servers
- NetRange
- When a domain was created
- Expiry records
- Records last updated
- Domain status (available, registered, or suspended)
- IP address information

## How Attackers Use Whois Data

An attacker can query a Whois database server to obtain information regarding the target domain. Using this information, an attacker can:

- Create a map of the organization's network
- Mislead domain owners with social engineering
- Obtain internal details of the network

## Regional Internet Registries (RIRs)

RIRs maintain Whois databases containing the personal information of domain owners.

| RIR | Full Name | URL |
|---|---|---|
| **ARIN** | American Registry for Internet Numbers | https://www.arin.net |
| **AFRINIC** | African Network Information Center | https://www.afrinic.net |
| **APNIC** | Asia Pacific Network Information Center | https://www.apnic.net |
| **RIPE NCC** | Réseaux IP Européens Network Coordination Centre | https://www.ripe.net |
| **LACNIC** | Latin American and Caribbean Network Information Center | https://www.lacnic.net |

## Whois Lookup Tools

Whois services perform a lookup by entering a target domain or IP address.

| Tool | Notes |
|---|---|
| whois.domaintools.com | Web-based Whois lookup service |
| tamos.com | Web-based Whois lookup service |
| Batch IP Converter (sabsoft.com) | Provides country, city, phone, fax, network provider, admin, and technical-support contact info; supports IDNs and IPv6 |
| WHOIS Domain Lookup | Whois lookup tool used by attackers |
| Active Whois | Whois lookup tool used by attackers |

## Finding IP Geolocation Information

IP geolocation helps to obtain information regarding a target such as its country, region/state, city, latitude and longitude, ZIP/postal code, time zone, connection speed, ISP (hosting company), domain name, IDD country code, area code, weather station code and name, mobile carrier, and elevation.

Using IP geolocation information, an attacker may:

- Attempt to gather more information via social engineering, surveillance, and non-technical attacks such as dumpster diving, hoaxing, or acting as a technical expert
- Set up a compromised web server near the victim's location
- Infect the victim with malware designed for that specific area
- Gain unauthorized access to or launch an attack on the target device

## IP Geolocation Lookup Tools

IP geolocation lookup tools help collect IP geolocation information about the target, enabling attackers to launch social engineering attacks such as spamming and phishing.

| Tool | URL | Notes |
|---|---|---|
| **IP2Location** | https://www.ip2location.com | Identifies country, region, city, latitude/longitude, ZIP code, time zone, connection speed, ISP, domain name, IDD country code, area code, weather station, mobile carrier, elevation, and usage type using a proprietary IP lookup database |
| **IP Location Finder** | — | Collects IP geolocation information about the target |
| **IP Address Geographical Location Finder** | — | Collects IP geolocation information about the target |
