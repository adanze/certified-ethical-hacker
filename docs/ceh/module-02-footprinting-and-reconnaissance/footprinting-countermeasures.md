# Footprinting Countermeasures

Footprinting countermeasures are measures or actions taken to prevent or offset information disclosure to potential attackers. They address every layer at which footprinting can expose organizational data — web infrastructure, published content, personnel behavior, network protocols, and physical location.

## Web and DNS Hardening

- Configure web servers to avoid information leakage.
- Configure IIS to avoid information disclosure through banner grabbing.
- Disable directory listings in web servers.
- Set apart internal and external DNS or use split DNS; restrict zone transfer to authorized servers only.
- Do not enable protocols that are not required.
- Always use TCP/IP and IPsec filters for defense in depth.
- Avoid domain-level cross-linking for critical assets.

## Information and Publication Control

- Limit the amount of information published on a website or the Internet.
- Do not reveal critical information in press releases, annual reports, product catalogues, etc.
- Prevent search engines from caching a web page; use anonymous registration services.
- Request archive.org to delete the history of the website from the archive database.
- Keep the domain name profile private.
- Place critical documents (business plans, proprietary documents) offline to prevent exploitation.
- Ensure no critical information (strategic plans, product information, sales projections) is displayed on notice boards or walls.

## Access, Identity, and Privacy

- Develop and enforce security policies (information security and password policies) to regulate what employees can reveal to third parties.
- Implement multi-factor authentication to enhance security of systems and resources.
- Encrypt and password-protect sensitive information.
- Opt for privacy services on a Whois lookup database.
- Sanitize details provided to Internet registrars to hide the organization's direct contact details.
- Disable or delete accounts of employees who have left the organization.

## Network and Protocol Defense

- Hide the IP address and related information by implementing a VPN or keeping the server behind a secure proxy.
- Implement captchas and rate limiting on public-facing services to prevent automated information collection.
- Configure mail servers to ignore mails from anonymous individuals.

## Personnel and Awareness

- Restrict employee access to social networking sites from the organization's network.
- Educate employees to use pseudonyms on blogs, groups, and forums.
- Conduct security awareness training periodically about social engineering tricks and risks.
- Train employees to thwart social engineering techniques and attacks.

## Physical and Location Security

- Disable the geo-tagging functionality on cameras to prevent geolocation tracking.
- Avoid revealing one's location or travel plans on social networking sites.
- Turn off geolocation access on all mobile devices when not required.

## Detection and Deception

- Use footprinting techniques to discover and remove any sensitive information that is publicly available.
- Deploy honeypots or honeynets within the network to attract and detect attackers, diverting potential footprinters away from critical systems.
