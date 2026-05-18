# Information Security Overview

Information security refers to the protection of information and information systems that use, store, and transmit information from unauthorized access, disclosure, alteration, and destruction. Information is a critical asset — if sensitive data falls into the wrong hands, an organization may suffer financial loss, reputational damage, or customer attrition.

This topic covers the **elements of information security**, **classification of attacks**, and **information warfare**.

## Elements of Information Security

Information security is *"the state of well-being of information and infrastructure in which the possibility of theft, tampering, and disruption of information and services is low or tolerable."* It relies on five core elements:

| Element | Definition | Key Controls |
|---|---|---|
| **Confidentiality** | Information accessible only to authorized users | Data classification, encryption, secure disposal |
| **Integrity** | Trustworthiness of data; prevention of improper or unauthorized changes | Checksums, access control |
| **Availability** | Systems accessible when required by authorized users | Redundant disk arrays, clustered machines, DDoS prevention, antivirus |
| **Authenticity** | Ensures data/communications are genuine and uncorrupted | Biometrics, smart cards, digital certificates |
| **Non-Repudiation** | Sender cannot deny sending; recipient cannot deny receiving | Digital signatures |

> **Memory aid:** CIA + AN — Confidentiality, Integrity, Availability, Authenticity, Non-Repudiation.

## Information Security Attacks: Motives, Goals, and Objectives

An attack is an action performed with the intent to breach an IT system's security by exploiting its vulnerabilities — obtaining, editing, removing, destroying, or revealing information without authorized access.

**Attack formula:**

$$\text{Attack} = \text{Motive (Goal)} + \text{Method (TTP)} + \text{Vulnerability}$$

- A **motive** arises from the belief that the target system stores or processes something valuable.
- Attackers use tools and techniques (**TTPs**) to exploit vulnerabilities in systems, security policies, or controls.

> **Weakness vs. Vulnerability**
>
> | Term | Definition |
> |---|---|
> | **Weakness** | A flaw in design, implementation, or operation that *reduces* security — not necessarily exploitable on its own. |
> | **Vulnerability** | A weakness that *can be exploited* by a threat actor via a known method. |
>
> Every vulnerability is a weakness, but not every weakness is a vulnerability. In the attack formula, the **Vulnerability** component is the exploitable gap — the point where motive meets method.

### Motives Behind Information Security Attacks

- Disrupt business continuity
- Perform information theft or data manipulation
- Create fear and chaos by disrupting critical infrastructures
- Cause financial loss to the target
- Propagate religious or political beliefs
- Achieve a state's military objectives
- Damage the reputation of the target
- Take revenge
- Demand ransom
