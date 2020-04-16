import React from 'react'
import { Link } from 'react-scroll'

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
    link: 'home-screen',
  },
  {
    name: 'about',
    icon: AboutIcon,
    link: 'about-screen',
  },
  {
    name: 'portfolio',
    icon: PortfolioIcon,
    link: 'portfolio-screen',
  },
  {
    name: 'tech stack',
    icon: TechStackIcon,
    link: 'tech-stack-screen',
  },
  {
    name: 'contact',
    icon: ContactIcon,
    link: 'contact-screen',
    offset: 10,
  },
]

interface IsProps {
  activeSection: string
  showApp: boolean
}

const DesktopNavBar = ({ activeSection, showApp }: IsProps) => {
  const activeIndex = navItems.findIndex((item) => item.name === activeSection)

  const blobTranslateY = `translateY(${activeIndex * 100}%)`

  return (
    <div className={`desktop-navbar-wrapper ${showApp ? 'visible' : 'hidden'}`}>
      <ul className='nav-container'>
        <div className='blob-wrapper' style={{ transform: blobTranslateY }}>
          <span className='active-blob' />
        </div>
        {navItems.map((item, i) => (
          <Link
            to={item.link}
            offset={item.offset || 0}
            smooth
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
          </Link>
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
