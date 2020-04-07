import React from 'react'

import HomeIcon from '../../../static/navIcons/home.svg'
import AboutIcon from '../../../static/navIcons/about.svg'
import PortfolioIcon from '../../../static/navIcons/portfolio.svg'
import TechStackIcon from '../../../static/navIcons/tech-stack.svg'
import ContactIcon from '../../../static/navIcons/contact.svg'

import ReactIcon from '../../../static/images/react-logo.svg'

const navItems = [
  {
    name: 'home',
    icon: HomeIcon,
    link: '#',
  },
  {
    name: 'about',
    icon: AboutIcon,
    link: '#',
  },
  {
    name: 'portfolio',
    icon: PortfolioIcon,
    link: '#',
  },
  {
    name: 'tech stack',
    icon: TechStackIcon,
    link: '#',
  },
  {
    name: 'contact',
    icon: ContactIcon,
    link: '#',
  },
]

const DesktopNavBar = () => {
  const activeSection = 'home'
  return (
    <div className='desktop-navbar-wrapper'>
      <ul className='nav-container'>
        <div className='blob-wrapper'>
          <span className='active-blob' />
        </div>
        {navItems.map((item, i) => (
          <a
            href={item.link}
            className={`nav-item${
              activeSection === item.name ? ' active' : ''
            }`}
          >
            <img
              src={item.icon}
              alt={`${item.name} icon`}
              className='nav-icon'
            />
            <p className='nav-item-text'>{item.name}</p>
          </a>
        ))}
      </ul>
      <div className='footer-container'>
        <img src={ReactIcon} alt='React Logo' className='footer-icon' />
        <p className='footer-text'>
          It's better in <span>React</span>
        </p>
      </div>
    </div>
  )
}

export default React.memo(DesktopNavBar)
