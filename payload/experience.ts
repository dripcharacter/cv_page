import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'Wing 게임 개발 분과',
      position: '분과장',
      startedAt: '2020-03',
      descriptions: ['2020 NC Fellowship G*팀 프로젝트 총괄', '분과원들이 진행하는 프로젝트 상담'],
      skillKeywords: ['python', 'pytorch', 'Unity(C#)'],
    },
    {
      title: 'Wing AI 분과',
      position: '분과원',
      startedAt: '2020-09',
      endedAt: '2020-12',
      descriptions: ['"Basic deep learning with Keras"의 스터디원'],
      skillKeywords: ['python', 'Keras'],
    },
    {
      title: 'Infoteam',
      position: '프론트엔드 팀원',
      startedAt: '2020-03',
      descriptions: ['학생들을 위한 온라인 커뮤니티 개발'],
      skillKeywords: ['JavaScript', 'React.js'],
    },
  ],
};

export default experience;
