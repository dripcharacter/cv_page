import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '자신의 목표를 향해 최선을 다하고 성장해가는 것을 즐기는 공학자입니다.',
    '-Bare Metal에서 Kubernetes cluster 구축 및 운영 경험',
    '-다양한 simulation 프로젝트 경험',
    '-Flask와 PostgreSQL을 이용한 data-processing Backend 프로젝트 경험',
    '-C++/Rust를 이용한 동시성 프로그래밍 프로젝트 경험',
    '-Python과 PyTorch를 이용한 SC2 ai 강화학습 경험',
    '자신이 맡은 일에 최선을 다하며 정확한 이해와 직관을 바탕으로 정확하게 일을 진행하고 싶습니다.',
  ],
  sign: '',
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
