import * as React from 'react'
import { PropertyControls, ControlType } from 'framer'
import styled from 'styled-components'

const Wrap = styled.div`
  .svg-snowscene {
    width: 100%;
    height: 100vh;
    /* background: yellow; */
  }
  .snow {
    fill: #f7f0e3;
    animation-name: snowing;
    animation-duration: 12s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
    &:nth-child(2n) {
      animation-delay: 1.5s;
    }
    &:nth-child(3n) {
      animation-delay: 2.3s;
      animation-duration: 6.3s;
    }
    &:nth-child(4n) {
      animation-delay: 0.8s;
      animation-duration: 6.2s;
    }
    &:nth-child(5n) {
      animation-delay: 2.8s;
    }
  }

  @keyframes snowing {
    0% {
      fill-opacity: 1;
    }
    100% {
      fill-opacity: 0;
      transform: translateY(100vh);
    }
  }
`

// Define type of property
interface Props {
  text: string
}

export class snow extends React.Component<Props> {
  // Set default properties
  static defaultProps = {}

  // Items shown in property panel
  static propertyControls: PropertyControls = {}

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps)
    if (this.props.snowOn != nextProps.snowOn && nextProps.snowOn) {
      console.log('start snow!')

      function getRandom(min, max) {
        return Math.random() * (max - min) + min
      }

      ;(function letItSnow() {
        var snowflakes = document.querySelectorAll('.snow')
        for (var i = 0; i < snowflakes.length; i++) {
          var snowflake = snowflakes[i]
          snowflake.setAttribute('cx', getRandom(1, 100) + '%')
          snowflake.setAttribute('cy', '-' + getRandom(1, 100))
          snowflake.setAttribute('r', getRandom(1, 10))
        }
      })()
    }
  }

  render() {
    return (
      <Wrap>
        <svg className="svg-snowscene" xmlns="http://www.w3.org/2000/svg">
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />

          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />

          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
          <circle className="snow" />
        </svg>
      </Wrap>
    )
  }
}
