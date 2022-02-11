export function isEmpty(obj: any): boolean {
  return obj === null || obj === undefined
}

export function isEmptyString(obj: any): boolean {
  return obj === ''
}

export function isString(obj: any): obj is string {
  return Object.prototype.toString.call(obj) === '[object String]'
}

export function pick<T extends Object, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
  return keys.reduce((prev, cur) => {
    prev[cur] = obj[cur]
    return prev
  }, {} as Pick<T, K>)
}

export function getFromStorage<T>(key: string, transformer: (v: any) => T, defaultValue: T): T {
  const raw = localStorage.getItem(key)
  if (isEmpty(raw) || isEmptyString(raw)) {
    return defaultValue
  }
  try {
    return transformer(raw)
  } catch (error) {
    return defaultValue
  }
}

export function saveToStorage(key: string, value: string): void {
  localStorage.setItem(key, value)
}

export function updateItemInArray<T>(items: T[], identifer: (t: T) => boolean, replaceValue: Partial<T>) {
  return items.map((it) => {
    if (identifer(it)) {
      return {
        ...it,
        ...replaceValue,
      }
    }
    return it
  })
}

export function updateItemsInArray<T>(items: T[], updater: (t: T) => T): T[] {
  return items.map(updater)
}
