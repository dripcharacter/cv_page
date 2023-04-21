import { ISkill } from '../component/skill/ISkill';

const DevSecOps: ISkill.Skill = {
  category: 'DevSecOps',
  items: [
    {
      title: 'Kubernetes',
      level: 2,
    },
    {
      title: 'Docker',
      level: 2,
    },
    {
      title: 'eBPF/cilium',
      level: 2,
    },
    {
      title: 'Tetragon',
      level: 2,
    },
  ],
};

const ai: ISkill.Skill = {
  category: 'AI',
  items: [
    {
      title: 'PyTorch',
      level: 2,
    },
    {
      title: 'Keras',
      level: 2,
    },
  ],
};

const gamedevelop: ISkill.Skill = {
  category: 'Game Development',
  items: [
    {
      title: 'Unity(C#)',
      level: 2,
    },
  ],
};

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Flask',
      level: 2,
    },
    {
      title: 'PostgreSQL',
      level: 1,
    },
    {
      title: 'Redis',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'JavaScript',
      level: 1,
    },
    {
      title: 'React.js',
      level: 2,
    },
    {
      title: 'HTML',
      level: 2,
    },
    {
      title: 'CSS',
      level: 2,
    },
  ],
};

const basic: ISkill.Skill = {
  category: 'Basic',
  items: [
    {
      title: 'Python',
      level: 3,
    },
    {
      title: 'C',
      level: 3,
    },
    {
      title: 'C++',
      level: 3,
    },
    {
      title: 'Rust',
      level: 2,
    },
    {
      title: 'Scala',
      level: 1,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [DevSecOps, ai, gamedevelop, backend, frontend, basic],
  tooltip:
    '1: 기초 수준\n2: 인터넷 튜토리얼을 참고하며 개발하는 수준\n3: 혼자서 작은 프로젝트를 해본 수준',
};

export default skill;
