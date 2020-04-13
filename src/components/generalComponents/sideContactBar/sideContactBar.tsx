import React from 'react'

import EmailIcon from '../../../static/contactIcons/email.svg'
import LinkedinIcon from '../../../static/contactIcons/linkedin.svg'
import GithubIcon from '../../../static/contactIcons/github.svg'

const icons = [
  {
    icon: EmailIcon,
    alt: 'email-icon',
    link: 'mailto:jdlk07@gmail.com',
  },
  {
    icon: LinkedinIcon,
    alt: 'linkedin-icon',
    link: 'https://www.linkedin.com/in/janath-perera-6121a7175/',
  },
  {
    icon: GithubIcon,
    alt: 'github-icon',
    link: 'https://github.com/jdlk07',
  },
]

interface IsProps {
  visible: boolean
}

const SideContactBar = ({ visible = true }: IsProps) => (
  <div className={`side-contact-bar-wrapper${visible ? '' : ' hidden'}`}>
    {icons.map((icon, i) => (
      <a
        key={i}
        href={icon.link}
        target='_blank'
        rel='noopener noreferrer'
        className='contact-link'
      >
        <img src={icon.icon} alt={icon.alt} className='contact-icon' />
      </a>
    ))}
  </div>
)

export default React.memo(SideContactBar)
