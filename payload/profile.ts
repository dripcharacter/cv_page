import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/김민석.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김민석',
  },
  contact: [
    {
      title: 'wsms8646@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title:
        'Web에 공개되어 있는 이력서에는 휴대전화 번호를 기재하지 않았습니다. 메일로 연락 부탁드립니다.',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/dripcharacter',
      link: 'https://github.com/dripcharacter/resume-nextjs',
      icon: faGithub,
    },
  ],
  notice: {
    title: '',
    icon: faBell,
  },
};

export default profile;
