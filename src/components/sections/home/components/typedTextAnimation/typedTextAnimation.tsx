import React, { PureComponent } from 'react'

interface IsProps {
  text: String
  activeIndex: Number
}

interface IsState {
  displayText: String
}

export default class TypedTextAnimation extends PureComponent<
  IsProps,
  IsState
> {
  private typingTimer: any
  private deleteTimer: any

  constructor(props: IsProps) {
    super(props)

    this.state = {
      displayText: '',
    }
  }

  typeNewString = () => {
    clearTimeout(this.typingTimer)
    const newText = this.props.text

    let { displayText } = this.state

    this.setState(
      {
        displayText: newText.substring(0, displayText.length + 1),
      },
      () => {
        if (newText.length !== displayText.length) {
          this.typingTimer = setTimeout(this.typeNewString, 80)
        }
      }
    )
  }

  deleteString = () => {
    clearTimeout(this.deleteTimer)
    let { displayText } = this.state
    this.setState(
      {
        displayText: displayText.substring(0, displayText.length - 1),
      },
      () => {
        if (displayText.length !== 0) {
          this.deleteTimer = setTimeout(this.deleteString, 20)
        } else {
          this.typeNewString()
        }
      }
    )
  }

  componentDidMount() {
    this.typeNewString()
  }

  componentDidUpdate(prevProps: IsProps, prevState: IsState) {
    let { text } = this.props

    if (text !== prevProps.text) {
      this.deleteString()
    }
  }

  componentWillUnmount() {
    clearTimeout(this.typingTimer)
    clearTimeout(this.deleteTimer)
  }

  render() {
    let { displayText } = this.state

    return (
      <div className='typed-text-animation-wrapper'>
        <h2 className='typed-text'>{displayText}</h2>
        <span className='animated-cursor' />
      </div>
    )
  }
}
