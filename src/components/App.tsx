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
import { LoadingScreen } from './generalComponents/loadingScreen/loadingScreen'

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
  showApp: boolean
  showSideContact: boolean
  activeSection: string
}

export default class App extends PureComponent<IsProps, IsState> {
  private sideContactOnLoadTimer: any

  constructor(props: IsProps) {
    super(props)

    this.state = {
      showApp: false,
      showSideContact: false,
      activeSection: 'home',
    }
  }

  toggleSideContact = (show: boolean) => {
    this.setState({ showSideContact: show })
  }

  changeActiveSection = (section: string) => {
    this.setState({ activeSection: section })
  }

  //onLoadComplete controlled by end of loading text animation.
  onLoadComplete = () => {
    if (this.state.activeSection !== 'contact') {
      this.sideContactOnLoadTimer = setTimeout(
        () => this.setState({ showSideContact: true }),
        2500
      )
    }
  }

  onLoadingScreenTransitionEnd = () => {
    this.setState({ showApp: true })
    if (this.state.activeSection !== 'contact') {
      this.sideContactOnLoadTimer = setTimeout(
        () => this.setState({ showSideContact: true }),
        2500
      )
    }
  }

  componentDidMount() {
    document.title = 'Janath Perera'
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

  componentWillUnmount() {
    clearTimeout(this.sideContactOnLoadTimer)
  }

  render() {
    let { showSideContact, activeSection, showApp } = this.state

    return (
      <div className='app'>
        <LoadingScreen showApp={this.onLoadingScreenTransitionEnd} />
        <MediaQuery minWidth={mobileWidth + 1}>
          <DesktopNavBar activeSection={activeSection} showApp={showApp} />
        </MediaQuery>
        <VerticalBackgroundLines />
        <SideContactBar visible={showSideContact} />
        {sections.map((section) => (
          <section.Component
            showApp={showApp}
            key={section.name}
            setActiveSection={this.changeActiveSection}
          />
        ))}
      </div>
    )
  }
}
