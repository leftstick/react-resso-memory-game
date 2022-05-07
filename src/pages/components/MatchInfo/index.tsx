import React from 'react'
import { gameStore } from '@/stores'

import styles from './index.less'

function MatchInfo() {
  return (
    <div className={styles.board}>
      <span>Cards not Matched</span>
      <h2>{gameStore.unresolvedCardPairs}</h2>
    </div>
  )
}

export default MatchInfo
