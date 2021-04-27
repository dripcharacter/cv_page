import { ISkill } from '../component/skill/ISkill';

const ai: ISkill.Skill = {
  category: 'AI',
  items: [
    {
      title: 'PyTorch',
      level: 3,
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
      level: 3,
    },
    {
      title: 'C',
      level: 2,
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

const webcrawling: ISkill.Skill = {
  category: 'Web Crawling',
  items: [
    {
      title: 'Python(Selenium, Beautiful Soup)',
      level: 2,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [ai, gamedevelop, frontend, webcrawling],
  tooltip:
    '1: 기초 수준\n2: 인터넷 튜토리얼을 참고하며 개발하는 수준\n3: 혼자서 작은 프로젝트를 해본 수준',
};

export default skill;
