# Flashcards – Module 03

<div class="flashcard-deck">

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>How does scanning relate to footprinting in the hacking process?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Footprinting is the first phase, where the attacker gains primary information about the target. Scanning follows, using that information to gather more detailed information about the target.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#introduction">&#x2192; Network Scanning Concepts</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What is network scanning?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>A set of procedures for identifying hosts, ports, and services in a network, discovering active machines, and identifying the target's OS — used by an attacker to build a profile of the target organization.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#overview-of-network-scanning">&#x2192; Overview of Network Scanning</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>Name common tools used for network scanning.</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Nmap, Hping3, Metasploit, and NetScanTools Pro.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#overview-of-network-scanning">&#x2192; Overview of Network Scanning</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>Differentiate port scanning, network scanning, and vulnerability scanning.</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><strong>Port scanning:</strong> lists open ports and services.<br><strong>Network scanning:</strong> lists active hosts and IP addresses.<br><strong>Vulnerability scanning:</strong> shows the presence of known weaknesses.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#types-of-scanning">&#x2192; Types of Scanning</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What two components make up a vulnerability scanner?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>A scanning engine (reads the exploit list, sends requests to the server, and analyzes responses) and a catalog (list of common files with known vulnerabilities and exploits).</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#types-of-scanning">&#x2192; Types of Scanning</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What is "fingerprinting" in the context of network scanning?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Discovering the OS and system architecture of the target, which lets an attacker formulate an attack strategy based on known OS vulnerabilities.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#objectives-of-network-scanning">&#x2192; Objectives of Network Scanning</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>List the main objectives of network scanning.</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Discover live hosts, IP addresses, and open ports; discover OS/system architecture (fingerprinting); discover running services; identify application versions; identify vulnerabilities; map the network topology.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#objectives-of-network-scanning">&#x2192; Objectives of Network Scanning</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>How many TCP control flags are there, and how big is each?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Six flags (SYN, ACK, FIN, RST, PSH, URG), each 1 bit in size — making the TCP Flags field 6 bits total. A flag set to "1" is turned on.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#tcp-communication-flags">&#x2192; TCP Communication Flags</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>Which TCP flags govern connection establishment/termination, and which give system instructions?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><strong>Connection establishment/maintenance/termination:</strong> SYN, ACK, FIN, RST.<br><strong>System instructions:</strong> PSH, URG.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#tcp-communication-flags">&#x2192; TCP Communication Flags</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What does the RST flag do, and how do attackers use it?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>It aborts a connection in response to an error. Attackers use the RST flag to scan hosts and identify open ports.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#tcp-communication-flags">&#x2192; TCP Communication Flags</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What is the difference between the PSH and URG flags?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><strong>PSH (Push):</strong> tells the receiver to immediately pass buffered data to the receiving application (used at start/end of transfer to prevent buffer deadlocks).<br><strong>URG (Urgent):</strong> tells the system to process the packet's data immediately, ahead of all other data.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#tcp-communication-flags">&#x2192; TCP Communication Flags</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>Which three TCP flags does SYN scanning mainly rely on?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>SYN, ACK, and RST — used to gather information from servers during enumeration.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#tcp-communication-flags">&#x2192; TCP Communication Flags</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What are the three steps of the TCP three-way handshake?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>1. Source sends SYN to destination.<br>2. Destination responds with SYN/ACK.<br>3. Source responds with ACK — opening the connection.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#tcp-session-establishment-three-way-handshake">&#x2192; TCP Session Establishment</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>How is an open TCP connection closed?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Either side issues a FIN or RST packet to close the connection.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#tcp-session-establishment-three-way-handshake">&#x2192; TCP Session Establishment</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What are the four steps of TCP session termination?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>1. Sender sends FIN (or RST) requesting termination.<br>2. Receiver acknowledges with ACK.<br>3. Receiver sends its own FIN.<br>4. Sender sends a final ACK, ending the connection.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#tcp-session-termination">&#x2192; TCP Session Termination</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What is Nmap and what does it do?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>A security scanner ("Network Mapper") that discovers hosts, ports, and services by sending crafted packets and analyzing responses. Supports TCP/UDP port scanning, OS detection, version detection, and ping sweeps.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#nmap">&#x2192; Nmap</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What is Hping3 used for?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>A command-line network scanning and packet-crafting tool for TCP/IP (TCP, UDP, ICMP, raw-IP). Used for security auditing, firewall testing, path MTU discovery, traceroute, remote OS fingerprinting, and uptime guessing.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#hping3">&#x2192; Hping3</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What Hping3 flag performs an ICMP ping, and what does an ACK scan (-A) reveal?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><code>-1</code> (or <code>--icmp</code>) sends an ICMP echo request to check if a host is alive. <code>-A</code> sets the ACK flag to probe for a firewall/rule set — a live host with an open port replies with RST.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#hping3">&#x2192; Hping3</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What are the short and long flag forms for Hping3's UDP mode and scan mode?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><strong>UDP mode:</strong> <code>-2</code> or <code>--udp</code> (Hping defaults to TCP).<br><strong>Scan mode:</strong> <code>-8</code> or <code>--scan</code>, used to scan a range of ports (e.g., combined with <code>-S</code> for a SYN scan).</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#hping3">&#x2192; Hping3</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What is Metasploit's key architectural advantage?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Its modular approach — any exploit can be combined with any payload. It's an open-source framework for penetration testing, security auditing, discovery, and exploitation.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#metasploit">&#x2192; Metasploit</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What is NetScanTools Pro?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>An investigation tool for troubleshooting, monitoring, and discovering network devices; gathers LAN/Internet user info, IPs, ports, hostnames, and more, combining active, passive, DNS, and local-computer tools.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#netscantools-pro">&#x2192; NetScanTools Pro</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>Name five additional scanning tools besides Nmap, Hping3, Metasploit, and NetScanTools Pro.</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>sx, RustScan, MegaPing, SolarWinds Engineer's Toolset, and PRTG Network Monitor.</p>
      <a class="flashcard-link" href="../network-scanning-concepts/#additional-scanning-tools">&#x2192; Additional Scanning Tools</a>
    </div>
  </div>
</div>

</div>
