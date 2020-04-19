import React, { PureComponent } from 'react'

import { data } from './data'

import { Link, Element } from 'react-scroll'

import BackgroundCircle from './components/backgroundCircle/backgroundCircle'
import TypedTextAnimation from './components/typedTextAnimation/typedTextAnimation'
import ReactVisibilitySensor from 'react-visibility-sensor'

interface IsProps {
  setActiveSection: (section: string) => void
  showApp: boolean
}

interface IsState {
  activeIndex: number
}

export default class Home extends PureComponent<IsProps, IsState> {
  private timer: any

  constructor(props: IsProps) {
    super(props)

    this.state = {
      activeIndex: 0,
    }
  }

  startActiveIndexTimer = () => {
    clearTimeout(this.timer)

    let { activeIndex } = this.state

    const lastIndex = data.titles.length - 1

    const newIndex = activeIndex + 1 > lastIndex ? 0 : activeIndex + 1

    const setNewIndex = () => {
      this.setState({ activeIndex: newIndex }, () => {
        this.timer = setTimeout(this.startActiveIndexTimer, 2500)
      })
    }

    this.timer = setTimeout(setNewIndex, 2500)
  }

  onVisible = (isVisible: boolean) => {
    if (isVisible) {
      this.props.setActiveSection('home')
    }
  }

  componentDidMount() {
    if (this.props.showApp) {
      this.startActiveIndexTimer()
    }
  }

  componentDidUpdate(prevProps: IsProps, prevState: IsState) {
    let { showApp } = this.props

    if (showApp !== prevProps.showApp && showApp) {
      this.startActiveIndexTimer()
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    let { activeIndex } = this.state

    let { showApp } = this.props

    return (
      <Element name='home-screen'>
        <div className={`home-wrapper ${showApp ? 'visible' : 'hidden'}`}>
          <div className='home-container section-container'>
            <BackgroundCircle activeIndex={activeIndex} />
            <ReactVisibilitySensor partialVisibility onChange={this.onVisible}>
              <div className='text-wrapper'>
                <TypedTextAnimation
                  text={data.titles[activeIndex]}
                  activeIndex={activeIndex}
                />
                <h1 className='header'>{data.header}</h1>
                <p className='body-text'>{data.statement}</p>
                <Link to={'about-screen'} className='read-more-button' smooth>
                  Read More
                </Link>
              </div>
            </ReactVisibilitySensor>
            <div className='bottom-text-wrapper'>
              {data.bottomText.map((text, i) => (
                <div key={i} className='bottom-text-container'>
                  <p className='bottom-text-prefix'>{`0${i + 1}`}</p>
                  <p className='bottom-text'>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Element>
    )
  }
}
