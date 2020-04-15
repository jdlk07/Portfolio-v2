import WinfieldSportsScreenshot from '../../../static/portfolio/winfield-sports.png'
import GymJunkieScreenshot from '../../../static/portfolio/gym-junkie.png'

export const data = {
  projects: [
    {
      type: 'web',
      image: WinfieldSportsScreenshot,
      title: 'Winfield Sports',
      className: 'winfield',
      description:
        'Winfield Sports is a leading international sports advertising company covering sports event around Asia and the UK.\nSpecializing in cutting edge 3D and VR technology.',
      link: {
        text: 'Visit website',
        link: 'https://www.winfieldsports.net',
      },
    },
    {
      type: 'mobile',
      image: GymJunkieScreenshot,
      title: 'Gym Junkie',
      className: 'gym-junkie',
      description:
        'A pro-active fitness journal that tracks your workouts as you do them.\nBoasting easy input operations along with a simple yet informative layout.',
      link: {
        text: 'Coming this summer to play store',
        // link: null,
      },
    },
  ],
}
