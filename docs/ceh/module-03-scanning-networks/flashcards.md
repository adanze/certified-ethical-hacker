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

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What are the five main categories of host discovery techniques?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>ARP Ping Scan, UDP Ping Scan, ICMP Ping Scan, TCP Ping Scan, and IP Protocol Scan.</p>
      <a class="flashcard-link" href="../host-discovery/#host-discovery-techniques">&#x2192; Host Discovery Techniques</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What three sub-techniques fall under ICMP Ping Scan?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>ICMP ECHO Ping, ICMP Timestamp Ping, and ICMP Address Mask Ping.</p>
      <a class="flashcard-link" href="../host-discovery/#host-discovery-techniques">&#x2192; Host Discovery Techniques</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What two sub-techniques fall under TCP Ping Scan?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>TCP SYN Ping and TCP ACK Ping.</p>
      <a class="flashcard-link" href="../host-discovery/#host-discovery-techniques">&#x2192; Host Discovery Techniques</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What Nmap commands perform an ARP Ping Scan, a UDP Ping Scan, and an IP Protocol Scan?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><strong>ARP:</strong> <code>nmap -sn -PR &lt;Target IP&gt;</code>.<br><strong>UDP:</strong> <code>nmap -sn -PU &lt;Target IP&gt;</code>.<br><strong>IP Protocol:</strong> <code>nmap -sn -PO &lt;Target IP&gt;</code>.</p>
      <a class="flashcard-link" href="../host-discovery/#host-discovery-techniques">&#x2192; Host Discovery Techniques</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What Nmap commands perform the ICMP ECHO Ping, ICMP ECHO Ping Sweep, ICMP Timestamp Ping, and ICMP Address Mask Ping?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><code>nmap -sn -PE &lt;Target IP&gt;</code> (ECHO), <code>nmap -sn -PE &lt;IP Range&gt;</code> (ECHO sweep), <code>nmap -sn -PP &lt;Target IP&gt;</code> (Timestamp), <code>nmap -sn -PM &lt;Target IP&gt;</code> (Address Mask).</p>
      <a class="flashcard-link" href="../host-discovery/#host-discovery-techniques">&#x2192; Host Discovery Techniques</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What Nmap commands perform a TCP SYN Ping and a TCP ACK Ping?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><strong>TCP SYN Ping:</strong> <code>nmap -sn -PS &lt;Target IP&gt;</code>.<br><strong>TCP ACK Ping:</strong> <code>nmap -sn -PA &lt;Target IP&gt;</code>.</p>
      <a class="flashcard-link" href="../host-discovery/#host-discovery-techniques">&#x2192; Host Discovery Techniques</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>Name six ping sweep tools.</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Angry IP Scanner, SolarWinds Engineer's Toolset, NetScanTools Pro, Colasoft Ping Tool, Advanced IP Scanner, and OpUtils.</p>
      <a class="flashcard-link" href="../host-discovery/#ping-sweep-tools">&#x2192; Ping Sweep Tools</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>Why does an ARP ping scan work even when a target is hidden by restrictive firewalls?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Before sending an IP packet (e.g., an ICMP echo request) to a target, the OS must resolve the target's hardware (MAC) address via ARP to address the Ethernet frame correctly — this ARP resolution happens below the IP layer, independent of firewall rules filtering IP traffic.</p>
      <a class="flashcard-link" href="../host-discovery/#arp-ping-scan">&#x2192; ARP Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>How does an attacker determine that a host is active during an ARP ping scan?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>If the attacker's ARP request probe receives any ARP response, the host is active. If unresponsive after a set number of attempts, the OS gives up and the source adds an incomplete entry for that IP in its kernel ARP table.</p>
      <a class="flashcard-link" href="../host-discovery/#arp-ping-scan">&#x2192; ARP Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What does the Nmap <code>-sn</code> flag do, and how do you disable Nmap's default ARP ping scan?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><code>-sn</code> disables the port scan. Since ARP ping scan is Nmap's default ping scan, <code>--disable-arp-ping</code> is used to disable it and perform other desired ping scans instead.</p>
      <a class="flashcard-link" href="../host-discovery/#arp-ping-scan">&#x2192; ARP Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>Besides confirming a host is active, what else can an ARP scan reveal?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>The MAC address of a device's network interface, and the MAC addresses of all devices sharing the same IPv4 address on the LAN.</p>
      <a class="flashcard-link" href="../host-discovery/#arp-ping-scan">&#x2192; ARP Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What are the advantages of an ARP ping scan?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>More efficient and accurate than other host discovery techniques; automatically handles ARP requests, retransmission, and timeout; useful for scanning large address spaces; can display a device's response time/latency to an ARP packet.</p>
      <a class="flashcard-link" href="../host-discovery/#advantages">&#x2192; ARP Ping Scan Advantages</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What default port does Nmap use for a UDP ping scan, and why?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Port 40,125 — a highly uncommon port chosen deliberately. It can be reconfigured via <code>DEFAULT_UDP_PROBE_PORT_SPEC</code> at compile time in Nmap.</p>
      <a class="flashcard-link" href="../host-discovery/#udp-ping-scan">&#x2192; UDP Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>How does an attacker distinguish an active host from an inactive one during a UDP ping scan?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>A UDP response means the host is active. If the host is offline/unreachable, error messages such as host/network unreachable or TTL exceeded may be returned instead.</p>
      <a class="flashcard-link" href="../host-discovery/#udp-ping-scan">&#x2192; UDP Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What advantage does a UDP ping scan have over other host discovery techniques?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>It can detect systems behind firewalls with strict TCP filtering, since UDP traffic is often left unfiltered/forgotten.</p>
      <a class="flashcard-link" href="../host-discovery/#advantages_1">&#x2192; UDP Ping Scan Advantages</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>How does an ICMP ECHO ping scan work, and what is it useful for?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>It sends ICMP ECHO requests to a host; if the host is alive, it returns an ICMP ECHO reply. Useful for locating active devices or determining whether ICMP is passing through a firewall.</p>
      <a class="flashcard-link" href="../host-discovery/#icmp-echo-ping-scan">&#x2192; ICMP ECHO Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>Why doesn't ICMP echo scanning to a broadcast address work on Windows-based networks?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Windows' TCP/IP stack implementation does not reply to ICMP probes directed at the broadcast address, unlike UNIX/Linux and BSD-based machines, which do respond.</p>
      <a class="flashcard-link" href="../host-discovery/#icmp-echo-ping-scan">&#x2192; ICMP ECHO Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What Nmap options relate to ICMP ping scanning, and what does each do?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><code>-P</code> performs the ICMP scan; <code>-L</code> increases the number of pings sent in parallel; <code>-T</code> tweaks the ping timeout value. In Zenmap, <code>-PE</code> performs the ICMP ECHO ping scan (active hosts show as "Host is up").</p>
      <a class="flashcard-link" href="../host-discovery/#icmp-echo-ping-scan">&#x2192; ICMP ECHO Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What is a ping sweep, and how does it differ from a single ping?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>A basic network scanning technique that determines the range of IP addresses mapping to live hosts. A single ping tells whether one specific host exists; a ping sweep sends ICMP ECHO requests to multiple hosts at once, with each active host returning a reply.</p>
      <a class="flashcard-link" href="../host-discovery/#icmp-echo-ping-sweep">&#x2192; ICMP ECHO Ping Sweep</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>How does an attacker's ICMP probe reach all hosts in a subnet during a ping sweep?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>The attacker sends ICMP probes to the broadcast or network address, which relays them to all host addresses in the subnet. Live systems then send an ICMP echo reply back to the source.</p>
      <a class="flashcard-link" href="../host-discovery/#icmp-echo-ping-sweep">&#x2192; ICMP ECHO Ping Sweep</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What does a ping packet contain, and what is "round-trip time"?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>A single 64-byte packet (56 data bytes + 8 bytes of protocol header information). Round-trip time is the time taken for the packet to make a complete trip to the target and back.</p>
      <a class="flashcard-link" href="../host-discovery/#tcpip-packet-details">&#x2192; TCP/IP Packet Details</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>How can a ping reveal that a system is unable to reconcile a hostname with its IP address?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>If a packet bounces back when sent to the IP address, but not when sent to the hostname, the system cannot reconcile the name with that specific IP address.</p>
      <a class="flashcard-link" href="../host-discovery/#tcpip-packet-details">&#x2192; TCP/IP Packet Details</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>How do attackers use Nmap/Zenmap to perform an ICMP ECHO ping sweep, and what precedes it?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Attackers first calculate subnet masks (using subnet mask calculators) to identify the number of hosts in a subnet, then use Nmap to ping sweep it. In Zenmap, the <code>-PE</code> option with a list of IP addresses performs the ICMP ECHO ping sweep.</p>
      <a class="flashcard-link" href="../host-discovery/#icmp-echo-ping-sweep-using-nmap">&#x2192; ICMP ECHO Ping Sweep Using Nmap</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What does an attacker query with an ICMP timestamp ping, and is a reply guaranteed?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>The attacker queries a timestamp message to acquire the target's current time; the target replies to each query received. However, the response is conditional — it depends on how the administrator has configured the target.</p>
      <a class="flashcard-link" href="../host-discovery/#icmp-timestamp-ping-scan">&#x2192; ICMP Timestamp Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What is ICMP timestamp ping generally used for, and when is it especially effective for host discovery?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Generally used for time synchronization. It's especially effective at identifying whether a destination host is active when the administrator blocks traditional ICMP ECHO ping requests.</p>
      <a class="flashcard-link" href="../host-discovery/#icmp-timestamp-ping-scan">&#x2192; ICMP Timestamp Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What Zenmap option performs an ICMP timestamp ping scan?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><code>-PP</code></p>
      <a class="flashcard-link" href="../host-discovery/#icmp-timestamp-ping-scan">&#x2192; ICMP Timestamp Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What does an ICMP address mask ping query, and is a response guaranteed?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>It queries the target host's subnet mask. The response is conditional — the destination host may or may not reply with the appropriate subnet value, depending on its administrator's configuration.</p>
      <a class="flashcard-link" href="../host-discovery/#icmp-address-mask-ping-scan">&#x2192; ICMP Address Mask Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What Zenmap option performs an ICMP address mask ping scan, and when is this technique especially effective?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><code>-PM</code>. Like the ICMP timestamp ping, it's especially effective at identifying active hosts when the administrator blocks traditional ICMP ECHO ping requests.</p>
      <a class="flashcard-link" href="../host-discovery/#icmp-address-mask-ping-scan">&#x2192; ICMP Address Mask Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What are the three steps of a TCP SYN ping scan?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>1. Attacker sends an empty TCP SYN packet to the target.<br>2. Target acknowledges with an ACK flag.<br>3. Attacker confirms the host is active and sends an RST flag to terminate the connection (host discovery is complete).</p>
      <a class="flashcard-link" href="../host-discovery/#tcp-syn-ping-scan">&#x2192; TCP SYN Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What is the default destination port for a TCP SYN ping scan, and how do you specify a range of ports with <code>-PS</code>?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Port 80 is the default. A range is specified without a space between <code>-PS</code> and the port numbers, e.g. <code>-PS22-25,80,113,1050,35000</code> — each port is probed in parallel.</p>
      <a class="flashcard-link" href="../host-discovery/#tcp-syn-ping-scan">&#x2192; TCP SYN Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What are the advantages of a TCP SYN ping scan?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Since machines are scanned in parallel, it never times out waiting for a response. It can also determine host activity without creating a connection, so no logs are recorded at the system/network level — leaving no traces for detection.</p>
      <a class="flashcard-link" href="../host-discovery/#advantages_2">&#x2192; TCP SYN Ping Scan Advantages</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>How does a TCP ACK ping scan determine that a host is active?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>The attacker sends an empty TCP ACK packet directly to the target. Since there's no prior connection, the target responds with an RST flag to terminate the request — receiving this RST at the attacker's end indicates the host is active.</p>
      <a class="flashcard-link" href="../host-discovery/#tcp-ack-ping-scan">&#x2192; TCP ACK Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What Zenmap option performs a TCP ACK ping scan, and what default port does it use?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><code>-PA</code>, using default port 80 (same default as TCP SYN ping).</p>
      <a class="flashcard-link" href="../host-discovery/#tcp-ack-ping-scan">&#x2192; TCP ACK Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>Why is the TCP ACK probe useful for bypassing firewalls, compared to the SYN probe?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Firewalls are mostly configured to block SYN ping packets, since SYN is the most common pinging technique. The ACK probe can effectively bypass these firewall rule sets, so using both SYN and ACK together maximizes the chances of bypassing a firewall.</p>
      <a class="flashcard-link" href="../host-discovery/#advantages_3">&#x2192; TCP ACK Ping Scan Advantages</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>How does an IP protocol ping scan try to determine if a host is online?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>It sends different probe packets using different IP protocols (e.g., ICMP, IGMP, TCP, UDP) to the target host; any response from any probe indicates the host is online.</p>
      <a class="flashcard-link" href="../host-discovery/#ip-protocol-ping-scan">&#x2192; IP Protocol Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>Which three IP protocols are probed by default in an IP protocol ping scan, and what is each protocol's number?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>ICMP (protocol 1), IGMP (protocol 2), and IP-in-IP (protocol 4) — sent by default when no protocols are specified.</p>
      <a class="flashcard-link" href="../host-discovery/#ip-protocol-ping-scan">&#x2192; IP Protocol Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What Zenmap option performs an IP protocol ping scan?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><code>-PO</code></p>
      <a class="flashcard-link" href="../host-discovery/#ip-protocol-ping-scan">&#x2192; IP Protocol Ping Scan</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What do the Nmap flags <code>-p</code>, <code>-p-</code>, and <code>-F</code> do?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><code>-p</code> specifies which port(s) to scan (e.g. <code>-p 22,80,443</code>); <code>-p-</code> scans all 65,535 ports; <code>-F</code> (fast mode) scans only the fewer ports listed in <code>nmap-services</code>.</p>
      <a class="flashcard-link" href="../host-discovery/#nmap">&#x2192; Tooling – Nmap</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What do the Nmap scan-type flags <code>-sS</code>, <code>-sT</code>, <code>-sU</code>, <code>-sX</code>, and <code>-sC</code> do?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><code>-sS</code>/<code>-sT</code>/<code>-sU</code> select a TCP SYN, TCP connect, or UDP scan respectively; <code>-sX</code> performs a Xmas scan (sets the FIN, PSH, and URG flags); <code>-sC</code> runs Nmap's default Nmap Scripting Engine (NSE) scripts.</p>
      <a class="flashcard-link" href="../host-discovery/#nmap">&#x2192; Tooling – Nmap</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What is the difference between Nmap's <code>-sn</code> and <code>-Pn</code> flags?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><code>-sn</code> disables port scanning and performs host discovery only; <code>-Pn</code> skips host discovery entirely and treats all specified hosts as online, scanning them directly.</p>
      <a class="flashcard-link" href="../host-discovery/#nmap">&#x2192; Tooling – Nmap</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What do the Nmap flags <code>-f</code> and <code>-O</code> do?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><code>-f</code> fragments probe packets into smaller pieces to evade packet filters and intrusion detection systems; <code>-O</code> enables OS detection.</p>
      <a class="flashcard-link" href="../host-discovery/#nmap">&#x2192; Tooling – Nmap</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What do the Nmap flags <code>-T&lt;0-5&gt;</code> and <code>-o&lt;format&gt;</code> control?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p><code>-T&lt;0-5&gt;</code> sets a timing template from <code>-T0</code> (paranoid/slowest) to <code>-T5</code> (insane/fastest); <code>-o&lt;format&gt;</code> saves scan output to a file, e.g. <code>-oN</code> (normal), <code>-oX</code> (XML), <code>-oG</code> (grepable), <code>-oA</code> (all formats).</p>
      <a class="flashcard-link" href="../host-discovery/#nmap">&#x2192; Tooling – Nmap</a>
    </div>
  </div>
</div>

<div class="flashcard">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>How can attackers use AI to automate host discovery?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>By giving an AI tool like ChatGPT a natural-language prompt (e.g. "scan network X for active hosts"), which generates a ready-to-run Nmap command to perform the task.</p>
      <a class="flashcard-link" href="../host-discovery/#host-discovery-with-ai">&#x2192; Host Discovery with AI</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What does <code>nmap -sn 10.10.1.0/24 -OG- | awk '/Up$/{print $2}' &gt; scan1.txt</code> do?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Performs a ping sweep of 10.10.1.0/24, outputs results in grepable format, then pipes them through <code>awk</code> to filter only "Up" hosts and print their IP address (field 2), saving the resulting list to scan1.txt.</p>
      <a class="flashcard-link" href="../host-discovery/#example-1-extract-active-host-ips-to-a-file">&#x2192; Host Discovery with AI – Example 1</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What does <code>nmap -T4 -iL scan.txt -oN scan2.txt -v0</code> do?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Runs an aggressive-timing (<code>-T4</code>) Nmap scan against the targets listed in scan.txt (<code>-iL</code>), saves the results to scan2.txt (<code>-oN</code>), and suppresses all non-error output (<code>-v0</code>).</p>
      <a class="flashcard-link" href="../host-discovery/#example-2-comprehensive-scan-against-a-host-list">&#x2192; Host Discovery with AI – Example 2</a>
    </div>
  </div>
</div>

<div class="flashcard exam-critical">
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <span class="flashcard-label">Question</span>
      <p>What does <code>nmap -sn -PE 10.10.1.0/24</code> do?</p>
    </div>
    <div class="flashcard-back">
      <span class="flashcard-label">Answer</span>
      <p>Performs a ping scan/sweep (<code>-sn</code>) on the 10.10.1.0/24 range using ICMP echo requests (<code>-PE</code>) for host discovery.</p>
      <a class="flashcard-link" href="../host-discovery/#example-3-icmp-echo-ping-sweep">&#x2192; Host Discovery with AI – Example 3</a>
    </div>
  </div>
</div>

</div>


