import React, { PureComponent } from 'react'
import './App.scss'
import Home from './sections/home/home'
import VerticalBackgroundLines from './generalComponents/backgroundLines/verticalBackgroundLines/verticalBackgroundLines'
import SideContactBar from './generalComponents/sideContactBar/sideContactBar'
import DesktopNavBar from './generalComponents/desktopNavBar/desktopNavBar'
import MediaQuery from 'react-responsive'
import { mobileWidth } from '../static/sharedVariables'
import About from './sections/about/about'
import Portfolio from './sections/portfolio/portfolio'
import { TechStack } from './sections/techstack/techstack'
import { Contact } from './sections/contact/contact'

const sections = [
  {
    Component: Home,
    name: 'home',
  },
  {
    Component: About,
    name: 'about',
  },
  {
    Component: Portfolio,
    name: 'portfolio',
  },
  {
    Component: TechStack,
    name: 'tech stack',
  },
  {
    Component: Contact,
    name: 'contact',
  },
]

interface IsProps {}

interface IsState {
  loading: boolean
  showSideContact: boolean
  activeSection: string
}

export default class App extends PureComponent<IsProps, IsState> {
  constructor(props: IsProps) {
    super(props)

    this.state = {
      loading: false,
      showSideContact: true,
      activeSection: 'home',
    }
  }

  toggleSideContact = (show: boolean) => {
    this.setState({ showSideContact: show })
  }

  changeActiveSection = (section: string) => {
    this.setState({ activeSection: section })
  }

  componentDidUpdate(prevProps: IsProps, prevState: IsState) {
    let { activeSection } = this.state

    if (activeSection !== prevState.activeSection) {
      if (
        activeSection === 'contact' ||
        prevState.activeSection === 'contact'
      ) {
        this.toggleSideContact(activeSection !== 'contact')
      }
    }
  }

  render() {
    let { showSideContact, activeSection } = this.state
    return (
      <div className='app'>
        <MediaQuery minWidth={mobileWidth + 1}>
          <DesktopNavBar activeSection={activeSection} />
        </MediaQuery>
        <VerticalBackgroundLines />
        <SideContactBar visible={showSideContact} />
        {sections.map((section, i) => (
          <section.Component
            key={section.name}
            setActiveSection={this.changeActiveSection}
          />
        ))}
        {/* <Home />
        <About />
        <Portfolio />
        <TechStack />
        <Contact /> */}
      </div>
    )
  }
}
