import { httpService } from "../../httpService"
import url from "./url"

const handleLogin = {
  login: (request: any) => {
    const uri = url.login
    return httpService.POST<any, any>({
      uri,
      request,
    })
  },

  registerLogin: (request: any) => {
    const uri = url.registerUser
    return httpService.POST<any, any>({
      uri,
      request,
    })
  },

  forgotPassword: (request: any) => {
    const uri = url.forgotPassword
    return httpService.PUT<any, any>({
      uri,
      request,
    })
  },

  confirmCreateNewPassword: (request: any) => {
    const uri = url.confirmCreateNewPassword
    return httpService.PUT<any, any>({
      uri,
      request,
    })
  },

  confirmCode: (request: any) => {
    const uri = url.confirmCode
    return httpService.POST<any, any>({
      uri,
      request,
    })
  },
}

export default handleLogin
