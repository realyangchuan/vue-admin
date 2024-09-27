import { ref } from 'vue'
import { defineStore } from 'pinia'

interface IUserInfo {
  name: string
  age: number
}

// 用户信息
export const useUserStore = defineStore('user', () => {
  const userInfo = ref<IUserInfo | null>(null)

  function setUserInfo(value: IUserInfo) {
    userInfo.value = value
  }

  return { userInfo, setUserInfo }
})
