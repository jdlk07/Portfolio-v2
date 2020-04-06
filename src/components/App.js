import React, { Component } from 'react'
import './App.scss'
import Home from './sections/home/home'
import BackgroundLines from './generalComponents/backgroundLines/backgroundLines'

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
        <BackgroundLines />
        <Home />
      </div>
    )
  }
}
