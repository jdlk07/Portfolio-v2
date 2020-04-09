import React, { Component } from 'react'
import './App.scss'
import Home from './sections/home/home'
import VerticalBackgroundLines from './generalComponents/backgroundLines/verticalBackgroundLines/verticalBackgroundLines'
import SideContactBar from './generalComponents/sideContactBar/sideContactBar'
import DesktopNavBar from './generalComponents/desktopNavBar/desktopNavBar'
import MediaQuery from 'react-responsive'
import { mobileWidth } from '../static/sharedVariables'
import About from './sections/about/about'

interface IsProps {}

interface IsState {
  loading: Boolean
}

export default class App extends Component<IsProps, IsState> {
  constructor(props: IsProps) {
    super(props)

    this.state = {
      loading: false,
    }
  }

  render() {
    return (
      <div className='app'>
        <MediaQuery minWidth={mobileWidth + 1}>
          <DesktopNavBar />
        </MediaQuery>
        <VerticalBackgroundLines />
        <SideContactBar />
        <Home />
        <About />
      </div>
    )
  }
}
