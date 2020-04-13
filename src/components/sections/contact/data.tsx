// import LinkedinIcon from '../../../static/contactIcons/linkedin.svg'
import LinkedinColorIcon from '../../../static/contactIcons/linkedin-color.svg'
// import StackoverflowIcon from '../../../static/contactIcons/stackoverflow.svg'
import StackoverflowColorIcon from '../../../static/contactIcons/stackoverflow-color.svg'
// import GithubIcon from '../../../static/contactIcons/github.svg'
import GithubColorIcon from '../../../static/contactIcons/github-color.svg'

export const data = {
  header: 'Contact',
  body: "Looking to collaborate or just have a question?\nLet's chat about it!",
  email: {
    name: 'inquiries@janathperera.com',
    link: 'mailto:inquiries@janathperera.com',
  },
  contactLinks: [
    {
      name: 'linkedin',
      // icon: LinkedinIcon,
      colorIcon: LinkedinColorIcon,
      link: 'https://www.linkedin.com/in/janath-perera-6121a7175/',
    },
    {
      name: 'stackoverflow',
      // icon: StackoverflowIcon,
      colorIcon: StackoverflowColorIcon,
      link: 'https://stackoverflow.com/users/9885094/jdlk07',
    },
    {
      name: 'github',
      // icon: GithubIcon,
      colorIcon: GithubColorIcon,
      link: 'https://github.com/jdlk07',
    },
  ],
}
