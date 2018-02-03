import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          fontWeight: '600',
          marginBottom: rhythm(2.5),
        }}
      >
      <p>
        MetLife MAPS Workshop - February 2018
      </p>
      </div>
    )
  }
}

export default Bio
