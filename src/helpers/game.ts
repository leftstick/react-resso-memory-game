import { ICard, IMAGE_URLS } from '@/ITypes'

export function shuffle(arr: any[]) {
  const newArr = arr.slice()
  for (let i = newArr.length; i; i -= 1) {
    let j = Math.floor(Math.random() * i)
    let x = newArr[i - 1]
    newArr[i - 1] = newArr[j]
    newArr[j] = x
  }
  return newArr
}

export function uuid(): string {
  let result, i, j
  result = ''
  for (j = 0; j < 32; j++) {
    if (j === 8 || j === 12 || j === 16 || j === 20) {
      result = result + '-'
    }
    i = Math.floor(Math.random() * 16)
      .toString(16)
      .toUpperCase()
    result = result + i
  }
  return result
}

export function getImage(name: keyof typeof IMAGE_URLS): string {
  return IMAGE_URLS[name]
}

export function shuffleCards(): ICard[] {
  const CARD_NAMES = Object.keys(IMAGE_URLS).filter((s) => s !== 'URL_BACK')

  return shuffle([...CARD_NAMES, ...CARD_NAMES]).map((name) => ({
    id: uuid(),
    flipped: false,
    name,
  }))
}
