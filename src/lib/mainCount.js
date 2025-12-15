import { writable } from 'svelte/store'
import { COUNT_KEY } from '../constants/storage.js'

const read = () => {
  try {
    if (typeof localStorage === 'undefined') return 0
    const raw = localStorage.getItem(COUNT_KEY)
    if (raw !== null) {
      const n = Number(raw)
      if (!Number.isNaN(n)) return n
    }
  } catch (e) {
    // ignore
  }
  return 0
}

export const mainCount = writable(read())

mainCount.subscribe(value => {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(COUNT_KEY, String(value))
    }
  } catch (e) {
    // ignore storage errors
  }
})

export function getMainCount() {
  let val
  const unsub = mainCount.subscribe(v => (val = v))
  unsub()
  return val
}

export function incrementMainCount() {
  mainCount.update(n => n + 1)
}

export function purchase(cost) {
  mainCount.update(n => n - cost)
}