import React from 'react'

import Logo from '../Logo'
import MatchInfo from '../MatchInfo'
import Score from '../Score'

import styles from './index.less'

function Dashboard() {
  return (
    <div className={styles.statusBar}>
      <Logo />
      <MatchInfo />
      <Score />
    </div>
  )
}

export default Dashboard
