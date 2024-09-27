const TOKEN_KEY = 'token'
let token: string | null = null

// 获取Token
export function getToken() {
  return token || (token = sessionStorage.getItem(TOKEN_KEY))
}

// 设置Token
export function setToken(value: string) {
  sessionStorage.setItem(TOKEN_KEY, value)
  return token = value
}

// 移除Token
export function removeToken() {
  sessionStorage.removeItem(TOKEN_KEY)
  return token = null
}
