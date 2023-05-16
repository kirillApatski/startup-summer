type LocalStorageKey = string

const setDataToLocalStorage = (key: LocalStorageKey, value: string): void => {
  try {
    localStorage.setItem(key, value)
  } catch {
    return
  }
}

const removeDataFromLocalStorage = (key: LocalStorageKey): void => {
  try {
    localStorage.removeItem(key)
  } catch {
    return
  }
}

export { setDataToLocalStorage, removeDataFromLocalStorage }
