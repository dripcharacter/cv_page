import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'AIoT 연구실 석사생',
      position: '석사과정생',
      startedAt: '2024-01',
      descriptions: [
        '802.11, UWB같은 통신기술를 통해 localization, orientation estimation을 연구하고 있습니다',
      ],
      skillKeywords: ['Ultra-Wideband (UWB)', '802.11', 'Computer Networking'],
    },
    {
      title: 'NetAI 연구실 학부생 인턴',
      position: '학부생 인턴',
      startedAt: '2021-12',
      endedAt: '2024-01',
      descriptions: [
        'Kubernetes 기반의 Cloud-Native Edge Cluster에서의 cilium, Tetragon 기반의 보안 환경 구축',
      ],
      skillKeywords: ['Kubernetes', 'Docker', 'eBPF/cilium', 'Tetragon'],
    },
    {
      title: 'DPNM 연구실 학부생 인턴',
      position: '학부생 인턴',
      startedAt: '2023-07',
      endedAt: '2023-08',
      descriptions: ['Network Management에 접목시키기 위한 Generative AI에 대한 조사'],
      skillKeywords: ['Generative AI', 'Transformer', 'CLIP', 'Latent Diffusion'],
    },
    {
      title: '컴퓨터 시스템 이론 및 실험',
      position: '리드 조교',
      startedAt: '2023-03',
      endedAt: '2023-06',
      descriptions: ['SmartX-Mini실험의 자료 업데이트 및 매주 진행'],
      skillKeywords: ['Kubernetes', 'Docker', 'Apache Kafka', 'influxDB'],
    },
    {
      title: '시스템 프로그래밍',
      position: '조교',
      startedAt: '2023-09',
      endedAt: '2023-12',
      descriptions: ['UNIX system에 대한 실습 진행 보조'],
      skillKeywords: ['UNIX', 'Linux'],
    },
    {
      title: 'Wing 게임 개발 분과',
      position: '분과장',
      startedAt: '2020-03',
      endedAt: '2021-12',
      descriptions: ['2020 NC Fellowship G*팀 프로젝트 총괄', '분과원들이 진행하는 프로젝트 상담'],
      skillKeywords: ['Python', 'PyTorch', 'Unity(C#)'],
    },
    {
      title: 'Infoteam',
      position: '프론트엔드 팀원',
      startedAt: '2020-03',
      endedAt: '2021-09',
      descriptions: ['학생들을 위한 온라인 커뮤니티 개발'],
      skillKeywords: ['JavaScript', 'React.js'],
    },
  ],
};

export default experience;
