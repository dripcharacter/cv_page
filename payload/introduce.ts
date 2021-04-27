import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '자신의 목표를 향해 최선을 다하고 성장해가는 것을 즐기는 개발자입니다.',
    '-Python과 PyTorch를 이용한 SC2 ai 강화학습 경험',
    '-Python Keras 사용 경험',
    '-C, Unity(C#)를 이용한 간단한 게임 개발 경력',
    '-Git 사용(Task별 branch 분기를 통한 관리)',
    '-React.js로 SPA 개발 경험',
    '자신이 맡은 일에 최선을 다하며 정확한 이해를 바탕으로 정확하게 일을 진행하게 싶습니다.',
  ],
  sign: '',
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
