// Single source for profile content. Edit here, not in pages.

export const me = {
  name: 'Zachary Wendt-Maldonado',
  short: 'Zach Wendt-Maldonado',
  tagline:
    'PhD student in computer science studying multi-agent systems and game theory: how independent agents coordinate, compete, and get things built. I build agent tooling on the side. Former Marine, Navy Reserve cyber warfare technician, and Amazon S3 engineer.',
  email: 'Zachary.k.wendt-maldonado@outlook.com',
  orcid: '0009-0008-3413-0985',
  links: [
    { label: 'GitHub', href: 'https://github.com/zach-wendt' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zacharywendt-maldonado' },
    { label: 'Hugging Face', href: 'https://huggingface.co/zach-wendt' },
    { label: 'Bluesky', href: 'https://bsky.app/profile/zach-wendt.github.io' },
    { label: 'ORCID', href: 'https://orcid.org/0009-0008-3413-0985' },
  ],
};

export const research = {
  summary:
    'I work at the intersection of multi-agent systems and algorithmic game theory. The question I keep coming back to: when many agents each pursue their own goals, how do you design the rules so the group still gets something useful done? Lately that means teams of LLM agents, task allocation, and the incentives that make coordination hold up.',
  interests: [
    'Coordination and task allocation in LLM agent teams',
    'Auctions and mechanism design for agent marketplaces',
    'Multi-agent reinforcement learning',
    'Game-theoretic security',
  ],
};

export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  href?: string; // set once the repo is public
};

export const projects: Project[] = [
  {
    name: 'Nucoder',
    blurb:
      'A Kanban board where AI agents pick up and work tasks. Postgres is both state store and real-time event bus; agents act through an MCP server.',
    tags: ['multi-agent', 'MCP', 'TypeScript'],
  },
];

export const experience = [
  { role: 'Cyber Warfare Technician', org: 'U.S. Navy Reserve', when: '2024 to present',
    note: 'Vulnerability assessment, incident response, and network defense for Navy networks.' },
  { role: 'Dedicated Cloud Engineer, Amazon S3', org: 'Amazon Web Services', when: '2022 to 2026',
    note: 'Launched S3 in dedicated partitions and regions for U.S. Intelligence Community customers. Built deployment automation for 10,000+ production hosts.' },
  { role: 'Information Systems Security Officer', org: 'U.S. Marine Corps, MAWTS-1', when: '2019 to 2021',
    note: 'Owned security posture for 80+ assets across two programs of record.' },
  { role: 'Special Security Communications Team Chief', org: 'U.S. Marine Corps, 3rd Marine Division', when: '2017 to 2019',
    note: 'Led eight Marines running classified networks for 10,000+ personnel in multi-theater exercises.' },
];

export const education = [
  { degree: 'PhD, Computer Science', school: 'National University', when: 'expected 2028' },
  { degree: 'MS, Computer Science', school: 'National University', when: '2024' },
  { degree: 'BS, Computer Science', school: 'University of Maryland Global Campus', when: '2022' },
];

export const certs = [
  { name: 'CompTIA Security+ ce', until: 'active through May 2027' },
  { name: 'Microsoft Certified: Azure Developer Associate (AZ-204)', until: 'active through March 2027' },
  { name: 'Microsoft Certified: Azure Fundamentals (AZ-900)', until: '2021' },
];
