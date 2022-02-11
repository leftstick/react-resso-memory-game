import React, { useMemo } from 'react'

import { gameStore } from '@/stores'
import { STATUS, IClickable } from '@/ITypes'

import styles from './index.less'

const READY = () => <span>Ready</span>
const PLAYING = () => <span>Playing</span>
const PASS = ({ onClick }: IClickable) => (
  <b
    className={styles.playAgain}
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()

      onClick && onClick(e)
    }}
  >
    Play again
  </b>
)

function PlayStatus() {
  const { reset, status, timeCost } = gameStore

  const gameStatus = useMemo(() => {
    if (status === STATUS.READY) {
      return <READY />
    }

    if (status === STATUS.PLAYING) {
      return <PLAYING />
    }

    if (status === STATUS.PASS) {
      return <PASS onClick={reset} />
    }
  }, [status, reset])

  return (
    <div className={styles.statusBar}>
      {gameStatus}
      <span className={styles.elapsed}>{timeCost} s</span>
    </div>
  )
}

export default PlayStatus
