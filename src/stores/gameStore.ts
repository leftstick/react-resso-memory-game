import resso from 'resso'

import { shuffleCards, getFromStorage, saveToStorage, updateItemInArray, updateItemsInArray, isEmpty } from '@/helpers'
import { STATUS, ICard, IGameStore } from '@/ITypes'

const BEST_SCORE_KEY = 'memory.game.best.score'
let gameCounter: number | null = null

export const gameStore = resso<IGameStore>({
  unresolvedCardPairs: 8,
  status: STATUS.READY,
  bestScore: getFromStorage(BEST_SCORE_KEY, parseInt, 9999),
  cards: shuffleCards(),
  lastCard: undefined,
  timeCost: 0,

  reset: () => {
    gameStore.unresolvedCardPairs = 8
    gameStore.status = STATUS.READY
    gameStore.bestScore = getFromStorage(BEST_SCORE_KEY, parseInt, 9999)
    gameStore.cards = shuffleCards()
    gameStore.lastCard = undefined
    gameStore.timeCost = 0
  },

  startGame: () => {
    gameStore.status = STATUS.PLAYING
    gameCounter = window.setInterval(() => {
      gameStore.timeCost = gameStore.timeCost + 1
    }, 1000)
  },

  endGame: () => {
    gameStore.status = STATUS.PASS
    clearInterval(gameCounter!)
    gameCounter = null
    if (gameStore.timeCost < gameStore.bestScore) {
      saveToStorage(BEST_SCORE_KEY, `${gameStore.timeCost}`)
    }
  },

  flipCard: (card: ICard) => {
    if (card.flipped) {
      return
    }
    gameStore.cards = updateItemInArray(gameStore.cards, (c) => c.id === card.id, { flipped: true })
    if (gameStore.status === STATUS.READY) {
      gameStore.startGame()
    }
    if (isEmpty(gameStore.lastCard)) {
      gameStore.lastCard = card
      return
    }

    if (gameStore.lastCard !== card && gameStore.lastCard!.name === card.name) {
      gameStore.lastCard = undefined

      gameStore.unresolvedCardPairs = gameStore.unresolvedCardPairs - 1

      if (gameStore.unresolvedCardPairs === 0) {
        gameStore.endGame()
      }
      return
    }
    let cachedLastCard = gameStore.lastCard!
    gameStore.lastCard = undefined

    setTimeout(() => {
      gameStore.cards = updateItemsInArray(gameStore.cards, (c) => {
        if (c.id === cachedLastCard.id) {
          return {
            ...c,
            flipped: !c.flipped,
          }
        }
        if (c.id === card.id) {
          return {
            ...c,
            flipped: !c.flipped,
          }
        }
        return c
      })
    }, 1000)
  },
})
