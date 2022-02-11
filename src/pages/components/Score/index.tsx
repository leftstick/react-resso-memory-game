import React from 'react'

import { pick } from '@/helpers'
import { gameStore } from '@/stores'

import styles from './index.less'

function Score() {
  const { bestScore } = gameStore

  return (
    <div className={styles.score}>
      <span>Highest Record</span>
      <h2>{bestScore}</h2>
    </div>
  )
}

export default Score
