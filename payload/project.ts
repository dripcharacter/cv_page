import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '모바일 게임 이벤트 컷 예측',
      startedAt: '2019-11',
      endedAt: '2019-12',
      where: '개인 프로젝트',
      descriptions: [
        {
          content: '해외 모바일 게임 경쟁형 이벤트 보상컷 예측을 목표로 하는 프로젝트',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Beautiful Soup 기반 과거 이벤트 관련 정보 크롤러 개발함' },
            {
              content:
                'TF를 이용하여 이벤트 보상을 통해 보상컷을 예측할 수 있는 Neural Network를 제작함',
            },
          ],
        },
      ],
    },
    {
      title: '지뢰 찾기 만들기',
      startedAt: '2020-03',
      endedAt: '2020-03',
      where: '개인 프로젝트',
      descriptions: [
        { content: 'C를 이용하여 레트로 게임 중 하나인 "지뢰 찾기"를 만들었습니다.' },
        {
          content:
            '2차원 배열을 여러층 만들어 각 층마다 게임에 관한 여러 정보를 담아 지뢰 찾기의 기능들을 구현함.',
        },
      ],
    },
    {
      title: '턴제 게임 개발',
      startedAt: '2019-12',
      endedAt: '2020-07',
      where: '팀 프로젝트',
      descriptions: [
        {
          content: '턴제 격자형 보드게임으로 메인 프로그래머로 게임 기능 개발을 담당함.',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'A* 알고리즘을 변형하여 노드 간의 최단 경로를 찾도록 설계함.' },
            { content: '다양한 적 NPC의 특성에 맞는 행동패턴을 개발함.' },
          ],
        },
      ],
    },
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
  ],
};

export default project;
