export const profile = {
  name: 'Bhavya Sree Gaddam',
  firstName: 'Bhavya',
  roles: [
    'Cyber Security Engineer',
    'AI Security Enthusiast',
    'Full Stack Developer',
    'SOC Analyst in the making',
  ],
  tagline: 'I break things in labs, then build them bulletproof.',
  summary:
    'Final-year Cybersecurity student at MITS with strong foundations in Java, SQL and full-stack development (React, Node.js, MongoDB) and hands-on experience in Web Application Security, VAPT, SOC operations and Digital Forensics.',
  objective:
    'Seeking a Programmer Analyst, Application Security, or SOC Analyst role to apply strong problem-solving, coding and database skills alongside practical security expertise to build and protect software systems.',
  status: 'Available for opportunities',
  email: 'bhavyasreegaddam3@gmail.com',
  phone: '+91 72868 51770',
  phoneHref: '+917286851770',
  location: 'Madanapalle, Andhra Pradesh, India',
  github: 'https://github.com/bhavyasreegaddam',
  linkedin: 'https://www.linkedin.com/in/bhavya-sree-gaddam-5a66072ba',
  resumeUrl: '/Gaddam_Bhavya_Sree_Resume.pdf',
  resumeFileName: 'Gaddam_Bhavya_Sree_Resume.pdf',
  avatar: '/profile.jpeg',
}

export const stats = [
  { value: '9.32', label: 'CGPA at MITS' },
  { value: '3', label: 'Industry internships' },
  { value: '10+', label: 'Certifications earned' },
  { value: '5+', label: 'Security projects' },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const pillars = [
  {
    icon: 'shield',
    title: 'Secure',
    text: 'VAPT, SOC operations, digital forensics and cloud hardening — finding weaknesses before attackers do and helping teams defend against them.',
  },
  {
    icon: 'code',
    title: 'Build',
    text: 'MERN-stack engineering with a security-first mindset — from detection dashboards and REST APIs to threat-correlation and risk-scoring tooling.',
  },
  {
    icon: 'flag',
    title: 'Explore',
    text: 'National and international CTF competitor, hackathon winner and relentless learner — certifications are proof of the journey, not the destination.',
  },
]

export const education = [
  {
    degree: 'B.Tech in Cyber Security',
    school: 'Madanapalle Institute of Technology and Science (MITS)',
    meta: 'CGPA: 9.32',
    period: '2023 — 2027 (Expected)',
    icon: 'graduation',
  },
  {
    degree: 'Intermediate — Computer Engineering',
    school: 'Sri Sainatha Junior College, Madanapalle',
    meta: '94%',
    period: '2021 — 2023',
    icon: 'book',
  },
]

export const skillGroups = [
  {
    icon: 'terminal',
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    icon: 'layers',
    title: 'Frameworks & Databases',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Bootstrap', 'Grafana Dashboards'],
  },
  {
    icon: 'shield',
    title: 'Cybersecurity',
    skills: [
      'VAPT',
      'SOC Operations',
      'Web Application Security',
      'Digital Forensics',
      'Cloud Security',
      'AI Security',
      'Firewall Administration',
      'EDR',
    ],
  },
  {
    icon: 'bug',
    title: 'Security Tools',
    skills: [
      'CrowdStrike Falcon EDR',
      'Fortinet FortiGate',
      'Wazuh SIEM',
      'Burp Suite',
      'Splunk',
      'Metasploit',
      'Nmap',
      'Nuclei',
      'Nessus',
      'Wireshark',
      'SQLMap',
      'Httpx',
      'RustScan',
      'Snort / Suricata',
      'pfSense',
      'Autopsy',
      'FTK',
      'Postman',
    ],
  },
  {
    icon: 'cloud',
    title: 'Cloud Security',
    skills: ['AWS IAM', 'VPC & Security Groups', 'S3 Bucket Policies', 'CloudTrail', 'CloudWatch', 'Compliance Frameworks'],
  },
  {
    icon: 'cpu',
    title: 'OS & Tooling',
    skills: ['Windows', 'Linux (Kali)', 'Git / GitHub', 'Vercel', 'Render', 'Netlify', 'VS Code'],
  },
]

export const toolbelt = [
  'CrowdStrike Falcon', 'Fortinet FortiGate', 'Wazuh SIEM', 'Splunk', 'Burp Suite', 'Metasploit',
  'Nmap', 'Wireshark', 'Nuclei', 'Nessus', 'SQLMap', 'RustScan', 'Httpx', 'Snort', 'Suricata',
  'pfSense', 'Autopsy', 'FTK', 'Postman', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL', 'React',
  'Node.js', 'Express', 'Tailwind CSS', 'Grafana',
]

export const projects = [
  {
    id: 'ai-soc-copilot',
    title: 'AI SOC Copilot',
    category: 'AI Security · Blue Cloud Softech',
    featured: true,
    image: null,
    description:
      'AI-powered SOC assistant built on the MERN stack during my cybersecurity internship at Blue Cloud Softech Solutions. Correlates threats, enriches with threat intelligence and produces risk scores to accelerate analyst triage.',
    highlights: ['Threat correlation', 'Threat intelligence', 'Risk scoring engine', 'REST APIs', 'OWASP-based VAPT'],
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    links: [],
  },
  {
    id: 'agentic-soc',
    title: 'Agentic SOC',
    category: 'Security Automation',
    featured: true,
    image: null,
    description:
      'A 4-node automated SOC that centralizes security monitoring, cuts through false positives, enriches threats and automates alerting, reporting and incident summaries end to end.',
    highlights: ['4-node architecture', 'False-positive reduction', 'Threat enrichment', 'Automated incident summaries'],
    tech: ['SIEM', 'SOAR', 'Python', 'Wazuh'],
    links: [],
  },
  {
    id: 'cybersight-asm',
    title: 'CyberSight ASM',
    category: 'Attack Surface Management',
    featured: false,
    image: null,
    description:
      'Attack Surface Management platform that automates external asset discovery, service fingerprinting, vulnerability identification and technology detection — then reports it all in a clean security report.',
    highlights: ['Asset discovery', 'Service fingerprinting', 'Vulnerability identification', 'Tech detection'],
    tech: ['Python', 'Nuclei', 'Httpx', 'RustScan'],
    links: [{ label: 'GitHub', href: 'https://github.com/bhavyasreegaddam' }],
  },
  {
    id: 'dns-tunneling',
    title: 'DNS Tunneling Detection',
    category: 'Network Security · Blue Team',
    featured: false,
    image: null,
    description:
      'Rule-based detection system that catches DNS tunneling and data exfiltration through PCAP analysis, behavioral features and explainable risk scoring — no black-box verdicts.',
    highlights: ['PCAP analysis', 'Behavioral features', 'Explainable risk scoring', 'Exfiltration detection'],
    tech: ['Python', 'PCAP', 'Detection Rules'],
    links: [{ label: 'GitHub', href: 'https://github.com/bhavyasreegaddam' }],
  },
  {
    id: 'usb-physical-security',
    title: 'USB Physical Security',
    category: 'Capstone · Supraja Technologies',
    featured: false,
    image: null,
    description:
      'USB device monitoring system that detects unauthorized hardware, verifies OTP-based authentication and captures intruder snapshots on failed attempts to stop data exfiltration at the physical layer.',
    highlights: ['Device event monitoring', 'OTP authentication', 'Intruder snapshots', 'Data exfiltration prevention'],
    tech: ['Python', 'OTP Auth', 'Endpoint Security'],
    links: [],
  },
  {
    id: 'hungry-beast',
    title: 'Hungry Beast',
    category: 'Full Stack · Live',
    featured: false,
    image: '/projects/hungrybeast.png',
    description:
      'Online food-ordering platform where users browse menus, place orders and talk directly with restaurant owners for a seamless dining experience.',
    highlights: ['Menu browsing', 'Order placement', 'Owner messaging', 'Responsive UI'],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    links: [],
  },
]

export const experience = [
  {
    role: 'CyberSecurity Intern',
    company: 'Blue Cloud Softech Solutions Ltd.',
    mode: 'On-site',
    icon: 'shield',
    points: [
      'Built an AI-powered SOC Copilot on the MERN stack implementing threat correlation, threat intelligence, risk scoring, REST APIs and OWASP-based VAPT on web applications.',
      'Developed Grafana SOC dashboards and deployed Wazuh agents for log monitoring and threat detection.',
      'Earned Fortinet NSE 1–3 and CrowdStrike certifications during the internship.',
    ],
    tags: ['MERN', 'SOC', 'VAPT', 'Wazuh', 'Grafana', 'Fortinet'],
  },
  {
    role: 'Advanced CyberSecurity Intern',
    company: 'Supraja Technologies',
    mode: 'Remote',
    icon: 'bug',
    points: [
      'Developed a USB Physical Security detection system (capstone) with OTP-based authentication, intruder snapshots on failed attempts and unauthorized-access flagging to prevent data exfiltration.',
      'Performed network scanning, enumeration and vulnerability assessment using Nmap, Metasploit and Wireshark.',
      'Conducted security monitoring and log analysis using Splunk.',
    ],
    tags: ['Nmap', 'Metasploit', 'Wireshark', 'Splunk', 'VAPT'],
  },
  {
    role: 'Course Coordinator & Developer',
    company: 'Saredufy Web Plus Academy Pvt Ltd.',
    mode: 'Remote',
    icon: 'code',
    points: [
      'Developed and maintained web-based applications — implementing features, debugging issues and resolving technical problems.',
      'Mentored and managed student project teams through the CC panel: code reviews, progress tracking and technical guidance for on-time delivery.',
      'Ran doubt-resolution sessions and evaluated student performance with progress reports to the Head Mentor.',
    ],
    tags: ['Web Development', 'Mentoring', 'Code Review'],
  },
]

export const certifications = [
  { title: 'CrowdStrike Falcon Administrator', issuer: 'CrowdStrike', icon: 'shield' },
  { title: 'Fortinet NSE 1, NSE 2 & NSE 3', issuer: 'Fortinet', icon: 'network' },
  { title: 'NetSec Professional Certificate', issuer: 'Palo Alto Networks', icon: 'lock' },
  { title: 'Junior Cybersecurity Analyst & Network Defense', issuer: 'Cisco Networking Academy', icon: 'badge' },
  { title: 'Cybersecurity Excellence (Levels 1–6)', issuer: 'Supraja Technologies', icon: 'trophy' },
  { title: 'Certified Full Stack Developer + DSA', issuer: 'Saredufy Web Plus Academy', icon: 'code' },
  { title: 'Ethical Hacker Certification', issuer: 'Saredufy Web Plus Academy', icon: 'terminal' },
  { title: 'ISO 27001: Information Security Associate', issuer: 'ISO 27001', icon: 'file' },
  { title: 'Java (Basic) Certificate', issuer: 'HackerRank', icon: 'terminal' },
  { title: 'SQL (Basic) Certificate', issuer: 'HackerRank', icon: 'database' },
]

export const achievements = [
  { title: 'Winner — Supraja Tech Hackathons', detail: 'Levels 1–6, consistent top performance' },
  { title: '35th Rank — REDFOX CTF 2026', detail: 'National level capture-the-flag' },
  { title: '40th Rank — NovrozCTF 2026', detail: 'International capture-the-flag' },
  { title: '86th Rank — PsychCTF 2026', detail: 'Hosted by IIT Mandi' },
  { title: '3rd Prize — Poster Presentation', detail: 'Cybersecurity Symposium, MITS' },
  { title: 'National Level CTF Player', detail: 'Active competitor across platforms' },
]

export const contactCard = {
  headline: 'Open to internships, freelance security audits and full-stack collaborations.',
  note: 'I usually reply within 24 hours.',
}
