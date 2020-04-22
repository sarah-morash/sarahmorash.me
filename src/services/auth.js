export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("smUser")
    ? JSON.parse(window.localStorage.getItem("smUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("smUser", JSON.stringify(user))

export const handleLogin = ({ password }) => {
  if (password === "kgsm2021") {
    return setUser({
      username: "weddingGuest",
    })
  }
  return false
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}
