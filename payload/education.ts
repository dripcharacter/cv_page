import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'POSTECH 대학원',
      subTitle: '컴퓨터공학과 석사과정 재학',
      startedAt: '2024-02',
      // endedAt: '2024-02',
    },
    {
      title: '광주과학기술원',
      subTitle: '전기전자컴퓨터공학부 학사과정 졸업',
      startedAt: '2019-03',
      endedAt: '2024-02',
    },
    {
      title: '한국과학기술원',
      subTitle: '2022학년도 가을학기 과기특성화대학 교류수학',
      startedAt: '2022-09',
      endedAt: '2022-12',
    },
    {
      title: '대구가톨릭대학교사범대학부속무학고등학교',
      subTitle: '졸업',
      startedAt: '2016-03',
      endedAt: '2019-03',
    },
  ],
};

export default education;
