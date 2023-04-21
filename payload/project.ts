import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'GISTORY(GIST 학생 커뮤니티) 제작',
      startedAt: '2020-04',
      where: '팀 프로젝트',
      descriptions: [
        {
          content: '프론트엔드 개발자로 검색 페이지 개발에 참여함.',
          weight: 'MEDIUM',
          descriptions: [{ content: 'React.js로 SPA를 개발함.' }],
        },
      ],
    },
    {
      title: '2020 NC Fellowship',
      startedAt: '2020-04',
      endedAt: '2021-01',
      where: '팀 프로젝트',
      descriptions: [
        {
          content: '팀 리더로서 Starcraft2 ai 개발을 지휘함.',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'PyTorch를 이용하여 강화학습을 진행하여 게임 봇 ai policy를 결정하도록 개발함.',
            },
            {
              content:
                'starcraft2 wiki를 참고로 유닛들 간의 주요 상성관계를 베이스로 하여 ai를 개발함.',
            },
          ],
        },
      ],
    },
    {
      title: 'Optimal Condition for Caching server',
      startedAt: '2021-05',
      endedAt: '2021-08',
      where: '팀 프로젝트',
      descriptions: [
        {
          content: 'csv파일을 통해 network topology를 주었을 때 최적의 Caching server 위치를 알아내는 simulation을 개발함.',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '멀티쓰레딩의 기초를 익히며 host간의 통신을 개발함.',
            },
          ],
        },
      ],
    },
    {
      title: 'MonteCarlo_Implementation',
      startedAt: '2021-09',
      endedAt: '2021-12',
      where: '개인 프로젝트',
      descriptions: [
        {
          content: 'MonteCarlo와 관련된 실험, 알고리즘들을 실제로 simulation에서 사용해보며 closed system/isolated system의 simulation을 구현했다.',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Buffon Needle실험, 원 넓이 구하기 실험 등을 구현해보며 pseudo-random의 개념을 잡음',
            },
            {
              content:
                'Wang Landau Algorithm, Metropolis Algorithm을 통해 Closed system의 equilibrium state로 가는 simulation을 구현함',
            },
          ],
        },
      ],
    },
    {
      title: 'CIY(Coffee It Yourself)',
      startedAt: '2022-03',
      endedAt: '2022-06',
      where: '팀 프로젝트',
      descriptions: [
        {
          content: '많은 사람들에게 자기 취향의 커피를 제공하기 위한 지표로 필요한 Coffee Flavour Wheel로 data를 가공하는 부분을 구현함'
        },
      ],
    },
    {
      title: 'NDT(Never Dead Ticket)',
      startedAt: '2022-03',
      endedAt: '2022-06',
      where: '개인 프로젝트',
      descriptions: [
        {
          content: 'Mutex와 pthread를 이용하여 동시성 문제가 발생하지 않는 멀티 유저 수강신청 시뮬레이터를 개발함.'
        },
      ],
    },
  ],
};

export default project;
