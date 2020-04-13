import React, { Component } from 'react'
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

interface IsProps {}

interface IsState {
  loading: boolean
  showSideContact: boolean
}

export default class App extends Component<IsProps, IsState> {
  constructor(props: IsProps) {
    super(props)

    this.state = {
      loading: false,
      showSideContact: true,
    }
  }

  toggleSideContact = (show: boolean) => {
    this.setState({ showSideContact: show })
  }

  render() {
    let { showSideContact } = this.state
    return (
      <div className='app'>
        <MediaQuery minWidth={mobileWidth + 1}>
          <DesktopNavBar />
        </MediaQuery>
        <VerticalBackgroundLines />
        <SideContactBar visible={showSideContact} />
        <Home />
        <About />
        <Portfolio />
        <TechStack />
        <Contact
          showHelpingHand={!showSideContact}
          toggleSideContact={this.toggleSideContact}
        />
      </div>
    )
  }
}
