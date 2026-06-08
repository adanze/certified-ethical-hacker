# Information Security Laws and Standards

Laws are systems of rules and guidelines enforced by particular countries or communities to govern behavior. Standards are documents established by consensus and approved by recognized bodies to provide rules, guidelines, and characteristics for activities. This section deals with the various laws and standards dealing with information security in different countries.

## Payment Card Industry Data Security Standard (PCI DSS)

**Source:** https://www.pcisecuritystandards.org

!!! tip "Exam-critical 🎯"

**PCI DSS** is a proprietary information security standard for organizations handling cardholder information for debit, credit, prepaid, e-purse, ATM, and POS cards. It applies to **all entities involved in payment card processing**: merchants, processors, acquirers, issuers, service providers, and any entity that stores, processes, or transmits cardholder data.

### PCI DSS Requirements Overview

The standard comprises six key requirements:

| Requirement | Focus |
|---|---|
| **Build and Maintain a Secure Network** | Install firewalls, avoid vendor defaults, protect data with encryption |
| **Protect Cardholder Data** | Encrypt transmission across networks, protect stored data |
| **Maintain a Vulnerability Management Program** | Deploy anti-virus software, develop secure systems and applications |
| **Implement Strong Access Control Measures** | Restrict data access by business need, assign unique IDs, limit physical access |
| **Regularly Monitor and Test Networks** | Track and monitor network access, test security systems regularly |
| **Maintain an Information Security Policy** | Establish and maintain security policies for all personnel |

### Compliance and Penalties

**Non-compliance consequences:** Failure to meet PCI DSS requirements may result in fines or termination of payment card processing privileges.

## ISO/IEC Standards

**Source:** https://www.iso.org

!!! tip "Exam-critical 🎯"

### ISO/IEC 27001:2022 – Information Security Management System (ISMS)

**ISO/IEC 27001:2022** is an international standard specifying requirements and a framework for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). It ensures confidentiality, integrity, and availability of information and helps organizations manage security risks.

**Key purposes:**
- Identify, assess, and manage information security risks systematically
- Comply with regulatory, legal, and contractual obligations
- Strengthen security posture and reduce breach risk
- Continuously enhance security practices
- Build stakeholder trust and competitive advantage
- Address modern challenges (remote work, Bring Your Own Device (BYOD), cloud, Industry 4.0)

### Other Key ISO/IEC Standards

| Standard | Focus |
|---|---|
| **ISO/IEC 27701:2019** | • Extends ISO/IEC 27001 to include privacy management<br>• Implements Privacy Information Management System (PIMS)<br>• Protects personally identifiable information (PII)<br>• Builds stakeholder trust and enables global privacy compliance |
| **ISO/IEC 27002:2022** | • Best practices and control objectives for critical cybersecurity areas<br>• Key focus: access control, cryptography, security personnel<br>• Comprehensive framework for effective security controls<br>• Protects sensitive information and ensures regulatory compliance |
| **ISO/IEC 27005:2022** | • Guidelines for information security risk management<br>• Supports ISMS requirements in ISO/IEC 27001<br>• Structured framework for thorough risk assessments<br>• Enables systematic management of security risks |
| **ISO/IEC 27018:2019** | • Code of practice for PII protection in public cloud environments<br>• Guidelines for implementing cloud-specific controls<br>• Safeguards personal data in cloud services<br>• Enhances data privacy measures |
| **ISO/IEC 27032:2023** | • Explains relationships among Internet, Web, network security, and cybersecurity<br>• Overview of Internet security and stakeholder roles<br>• Improves resilience against cyber threats<br>• Enables coordinated security efforts |
| **ISO/IEC 27033-7:2023** | • Guidelines for network virtualization security<br>• Secures and manages virtualization environments<br>• Mitigates risks specific to virtual networks<br>• Maintains high operational integrity |
| **ISO/IEC 27036-3:2023** | • Guidelines for securing hardware, software, and services supply chains<br>• Mitigates supply chain security risks<br>• Secure acquisition and integration of products<br>• Enhances resilience against third-party threats |
| **ISO/IEC 27040:2024** | • Technical requirements for data storage security<br>• Covers planning, design, documentation, and implementation<br>• Applies consistent security measures across storage devices and networks<br>• Ensures integrity, confidentiality, and availability of stored data |

## Health Insurance Portability and Accountability Act (HIPAA)

**Source:** https://www.hhs.gov

!!! tip "Exam-critical 🎯"

**HIPAA** is a federal law establishing national standards to protect individuals' health information privacy and security. It applies to **covered entities** (health plans, health care clearinghouses, and certain health care providers) and their **business associates** that handle electronic health information.

### HIPAA Administrative Simplification Rules

| Rule | Purpose |
|---|---|
| **Electronic Transactions and Code Set Standards** | • The Secretary of Health and Human Services (HHS) adopted certain standard transactions for Electronic Data Interchange (EDI) of health care data<br>• Every provider doing business electronically must use the same health care transactions, code sets, and identifiers<br>• Adopted standard transactions: claims, encounter information, payment, remittance advice, claim status, eligibility, enrollment/disenrollment, referrals, authorizations, coordination of benefits, premium payment<br>• Must use standards from ASC X12N or NCPDP (for pharmacy transactions) |
| **Privacy Rule** | • Establishes national standards to protect medical records and personal health information<br>• Requires appropriate safeguards to protect privacy<br>• Sets limits and conditions on uses and disclosures without patient authorization<br>• Gives patients rights: examine records, obtain copies, request corrections |
| **Security Rule** | • Establishes national standards for protecting electronically protected health information (ePHI)<br>• Requires administrative, physical, and technical safeguards<br>• Ensures confidentiality, integrity, and availability of ePHI<br>• Applies to creation, receipt, use, and maintenance of health information |
| **Employer Identifier Standard** | • Requires each employer to have a standard national number<br>• Identifies employers on standard transactions |
| **National Provider Identifier (NPI) Standard** | • Unique 10-position, intelligence-free numeric identifier for health care providers<br>• Required on all administrative and financial transactions under HIPAA<br>• Does not carry information about state or medical specialty<br>• Must be used by covered entities, health plans, and clearinghouses |
| **Enforcement Rule** | • Contains provisions for compliance and investigation<br>• Establishes civil monetary penalties for violations<br>• Defines procedures for hearings and appeals |

## Sarbanes-Oxley Act (SOX)

**Source:** https://www.sec.gov

!!! tip "Exam-critical 🎯"

**SOX**, enacted in 2002, aims to **protect the public and investors** by increasing the accuracy and reliability of corporate disclosures. The Act does not describe how organizations must store records, but specifies **what records must be stored and for how long**. SOX mandates reforms to enhance corporate responsibility, financial disclosures, and combat corporate and accounting fraud.

### SOX's 11 Titles

| Title | Purpose |
|---|---|
| **Title I: Public Company Accounting Oversight Board (PCAOB)** | • Establishes PCAOB to provide independent oversight of public accounting firms<br>• Registers audit services and defines compliance audit processes<br>• Inspects and polices conduct and quality control<br>• Enforces SOX compliance mandates |
| **Title II: Auditor Independence** | • Establishes standards for external auditor independence<br>• Limits conflicts of interest<br>• Requires audit partner rotation<br>• Restricts auditing firms from providing non-audit services (consulting) for same clients |
| **Title III: Corporate Responsibility** | • Mandates senior executives take individual responsibility for accuracy and completeness of financial reports<br>• Defines interaction between external auditors and corporate audit committees<br>• Specifies corporate officers' responsibility for accuracy and validity of reports<br>• Enumerates limits on corporate officer behavior and penalties for non-compliance |
| **Title IV: Enhanced Financial Disclosures** | • Requires enhanced reporting for financial transactions, off-balance-sheet transactions, pro-forma figures<br>• Requires disclosure of stock transactions of corporate officers<br>• Mandates internal controls to ensure accuracy of financial reports<br>• Requires audits and reports on internal controls<br>• Requires timely reporting of material changes in financial conditions |
| **Title V: Analyst Conflicts of Interest** | • Measures to restore investor confidence in securities analyst reporting<br>• Defines code of conduct for securities analysts<br>• Requires disclosure of any knowable conflicts of interest |
| **Title VI: Commission Resources and Authority** | • Defines practices to restore investor confidence in securities analysts<br>• Defines SEC authority to censure or bar securities professionals<br>• Defines conditions to bar persons from practicing as brokers, advisors, or dealers |
| **Title VII: Studies and Reports** | • Requires Comptroller General and SEC to perform various studies and report findings<br>• Studies include effects of accounting firm consolidation, role of credit rating agencies<br>• Reports on securities violations, enforcement actions<br>• Examines whether investment banks assisted companies to manipulate earnings |
| **Title VIII: Corporate and Criminal Fraud Accountability** | • Describes criminal penalties for manipulation, destruction, or alteration of financial records<br>• Penalties for interference with investigations<br>• Provides protections for whistle-blowers |
| **Title IX: White-Collar Crime Penalty Enhancement** | • Increases criminal penalties for white-collar crimes and conspiracies<br>• Strengthens sentencing guidelines<br>• Adds failure to certify corporate financial reports as criminal offense |
| **Title X: Corporate Tax Returns** | • Chief Executive Officer must sign company tax returns |
| **Title XI: Corporate Fraud Accountability** | • Identifies corporate fraud and records tampering as criminal offenses<br>• Revises sentencing guidelines and strengthens penalties<br>• Enables SEC to temporarily freeze "large" or "unusual" transactions or payments |

## The Digital Millennium Copyright Act (DMCA)

**Source:** https://www.copyright.gov

!!! tip "Exam-critical 🎯"

**DMCA** is an American copyright law implementing two 1996 World Intellectual Property Organization (WIPO) treaties. It defines **legal prohibitions against circumvention of technological protection measures** used by copyright owners and against removal or alteration of **copyright management information**.

### DMCA's Five Titles

| Title | Purpose |
|---|---|
| **Title I: World Intellectual Property Organization (WIPO Treaty Implementation** | • Implements World Intellectual Property Organization (WIPO) treaties with technical amendments to US law<br>• Creates prohibitions on circumvention of technological measures protecting copyrighted works<br>• Creates prohibitions on tampering with copyright management information<br>• Adds civil remedies and criminal penalties for violations |
| **Title II: Online Copyright Infringement Liability Limitation** | • Adds Section 512 to Copyright Act creating four liability limitations for online service providers<br>• Categories: transitory communications, system caching, user-directed storage, information location tools<br>• Includes special rules for nonprofit educational institutions |
| **Title III: Computer Maintenance or Repair** | • Allows computer owner to make reproductions or adaptations of programs for use with computer<br>• Permits owner or lessee to make or authorize copies during computer maintenance or repair |
| **Title IV: Miscellaneous Provisions** | • Clarification of Copyright Office authority<br>• Exemption for "ephemeral recordings"<br>• Promotes distance education study<br>• Exemption for Nonprofit Libraries and Archives<br>• Webcasting Amendments to Digital Performance Right<br>• Addresses residual payments for motion picture exploitation |
| **Title V: Protection of Certain Original Designs** | • Vessel Hull Design Protection Act (VHDPA)<br>• Protects original designs of useful articles (vessel hulls up to 200 feet)<br>• Creates system for protecting designs that make articles attractive or distinctive in appearance |

## Federal Information Security Management Act (FISMA)

**Source:** https://csrc.nist.gov

!!! tip "Exam-critical 🎯"

**FISMA**, enacted in 2002, provides a **comprehensive framework for ensuring the effectiveness of information security controls** over information resources supporting federal operations and assets. It requires each federal agency to develop, document, and implement an agency-wide information security program.

### FISMA Framework Components

- **Standards for categorizing information and information systems** by mission impact
- **Standards for minimum security requirements** for information and information systems
- **Guidance for selecting appropriate security controls** for information systems
- **Guidance for assessing security controls** in information systems and determining their effectiveness
- **Guidance for security authorization** of information systems

## General Data Protection Regulation (GDPR)

**Source:** https://gdpr.eu

!!! tip "Exam-critical 🎯"

**GDPR** (Datenschutz-Grundverordnung / **DSGVO** in German) is **one of the most stringent privacy and security laws globally**. Enacted by the European Union on May 25, 2018, it imposes obligations on organizations anywhere that target or collect data of EU residents. GDPR levies **harsh fines** against violators, with **penalties reaching tens of millions of euros**. Applies to small and medium-sized enterprises (SMEs) and large organizations alike.

### GDPR Data Protection Principles

The GDPR includes **seven protection and accountability principles** (Article 5.1-2):

| Principle | Definition |
|---|---|
| **Lawfulness, Fairness, and Transparency** | Processing must be lawful, fair, and transparent to the data subject |
| **Purpose Limitation** | Data must be processed for legitimate purposes explicitly specified to data subject when collected |
| **Data Minimization** | Collect and process only as much data as necessary for specified purposes |
| **Accuracy** | Personal data must be accurate and kept up to date |
| **Storage Limitation** | Store personally identifying data only as long as necessary for specified purpose |
| **Integrity and Confidentiality** | Processing must ensure appropriate security, integrity, and confidentiality (e.g., encryption) |
| **Accountability** | Data controller is responsible for demonstrating GDPR compliance with all principles |

## Data Protection Act 2018 (DPA)

**Source:** https://www.legislation.gov.uk

!!! tip "Exam-critical 🎯"

**DPA 2018** sets out the framework for data protection law in the UK. It **updates and replaces the Data Protection Act 1998**, came into effect on **25 May 2018**, and was amended on **01 January 2021** to reflect the UK's status outside the EU. The Act regulates processing of information relating to individuals, establishes the **Information Commissioner's functions**, enables direct marketing code of practice, and extends data protection to law enforcement, national security, and defense.

### DPA Protection of Personal Data

**The DPA protects individuals by:**

- **Requiring personal data to be processed lawfully and fairly**, based on the data subject's consent or another specified basis

- **Conferring rights on the data subject** to obtain information about personal data processing and to require inaccurate data to be rectified

- **Conferring functions on the Information Commissioner**, giving responsibility to monitor and enforce DPA provisions

**The Commissioner must:**

- Regard the importance of securing appropriate protection for personal data

- Consider interests of data subjects, controllers, and others

- Consider matters of general public interest when carrying out functions under GDPR, applied GDPR, and DPA

## Cyber Law in Different Countries

**Cyberlaw** (or Internet law) refers to **any laws that deal with protecting the Internet and other online communication technologies**. It covers Internet access, usage, privacy, freedom of expression, and jurisdiction. Cyber laws provide assurance of integrity, security, privacy, and confidentiality of information in governmental and private organizations.

These laws have become prominent due to increased Internet usage globally. **Cyber laws vary by jurisdiction and country**, making implementation challenging. **Violating these laws results in punishments ranging from fines to imprisonment**.

### Cyber Laws by Country

| Country | Law/Act | Website |
|---|---|---|
| **United States** | • Section 107 of the Copyright Law ("fair use")<br>• Online Copyright Infringement Liability Limitation Act | https://www.copyright.gov |
| **United States** | The Lanham (Trademark) Act (15 USC §§ 1051–1127) | https://www.bitlaw.com |
| **United States** | • Electronic Communications Privacy Act<br>• Foreign Intelligence Surveillance Act | https://bja.ojp.gov |
| **United States** | • Protect America Act of 2007<br>• Privacy Act of 1974 | https://www.justice.gov |
| **United States** | National Information Infrastructure Protection Act of 1996 | https://www.congress.gov |
| **United States** | Computer Security Act of 1987 | https://csrc.nist.gov |
| **United States** | Freedom of Information Act (FOIA) | https://www.foia.gov |
| **United States** | Computer Fraud and Abuse Act | https://www.energy.gov |
| **United States** | Identity Theft and Assumption Deterrence Act | https://www.ftc.gov |
| **United States** | California Consumer Privacy Act (CCPA) | https://oag.ca.gov |
| **United States** | California Privacy Rights Act | https://thecpra.org |
| **Australia** | • Trade Marks Act 1995<br>• The Patents Act 1990<br>• The Copyright Act 1968 | https://www.legislation.gov.au |
| **Australia** | Cybercrime Act 2001 | https://www.cybercrimelaw.net |
| **United Kingdom** | • The Copyright, Etc. and Trademarks (Offenses And Enforcement) Act 2002<br>• Trademarks Act 1994<br>• Computer Misuse Act 1990<br>• The Network and Information Systems Regulations 2018<br>• Communications Act 2003<br>• The Privacy and Electronic Communications (EC Directive) Regulations 2003<br>• Investigatory Powers Act 2016<br>• Regulation of Investigatory Powers Act 2000 | https://www.legislation.gov.uk |
| **China** | • Copyright Law of the People's Republic of China (Amendments on October 27, 2001)<br>• Trademark Law of the People's Republic of China (Amendments on October 27, 2001) | http://www.npc.gov.cn |
| **India** | • The Patents (Amendment) Act, 1999<br>• Trade Marks Act, 1999<br>• The Copyright Act, 1957 | https://www.ipindia.gov.in |
| **India** | Information Technology Act | https://www.meity.gov.in |
| **Germany** | • Section 202a: Data Espionage<br>• Section 303a: Alteration of Data<br>• Section 303b: Computer Sabotage | https://www.cybercrimelaw.net |
| **Italy** | Penal Code Article 615 ter | https://www.cybercrimelaw.net |
| **Japan** | The Trademark Law (Law No. 127 of 1959) | https://www.jpo.or.jp |
| **Canada** | • Copyright Act (R.S.C., 1985, c. C-42)<br>• Trademarks Act (R.S.C., 1985, c. T-13)<br>• Canadian Criminal Code Section 342.1 | https://laws-lois.justice.gc.ca |
| **Canada** | Personal Information Protection and Electronic Documents Act (PIPEDA) | https://www.priv.gc.ca |
| **Singapore** | Computer Misuse Act | https://sso.agc.gov.sg |
| **South Africa** | Trademarks Act 194 of 1993 | http://www.cipc.co.za |
| **South Africa** | Copyright Act of 1978 | https://www.wipo.int |
| **South Korea** | Copyright Act (amended up to Act No. 19597 of August 8, 2023) | https://www.wipo.int |
| **South Korea** | Industrial Design Protection Act | https://www.kipo.go.kr |
| **Belgium** | Copyright Law, 30/06/1994 | https://www.wipo.int |
| **Belgium** | Computer Hacking | https://www.cybercrimelaw.net |
| **Brazil** | Brazilian General Data Protection Law (LGPD) | https://iapp.org |
| **Hong Kong** | Article 139 of the Basic Law | https://www.basiclaw.gov.hk |
| **Philippines** | Republic Act No. 10175 | https://lawphil.net |
