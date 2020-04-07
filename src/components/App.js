import React, { Component } from 'react'
import './App.scss'
import Home from './sections/home/home'
import VerticalBackgroundLines from './generalComponents/backgroundLines/verticalBackgroundLines/verticalBackgroundLines'
import SideContactBar from './generalComponents/sideContactBar/sideContactBar'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
    }
  }

  render() {
    return (
      <div className='app'>
        <VerticalBackgroundLines />
        <SideContactBar />
        <Home />
      </div>
    )
  }
}
