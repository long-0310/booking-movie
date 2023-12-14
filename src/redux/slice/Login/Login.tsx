import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import loginApi from "../../service/Auth/Login/login"
import { RootState } from "../../store"
import { handlePayloadMessage } from "../../../common/untils"
const initialState: any = {
  authUser: {},
  accessToken: "",
  loading: false,
  dataGuest: undefined,
  errors: {},
  isEditAccount: false,
  registerSuccess: false,
  confirmCodeSuccess: false,
  confirmForgotPasswordSuccess: false,
  statusCode: 0,
}

export const getLoginUser = createAsyncThunk(
  "loginReducer/getLoginUser",
  async (body: any, thunkAPI) => {
    try {
      const res: any = await loginApi.login(body)
      return { ...res }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const forgotPassword = createAsyncThunk(
  "loginReducer/forgotPassword",
  async (body: any, thunkAPI) => {
    try {
      const res: any = await loginApi.forgotPassword(body)
      return { ...res }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const confirmCreateNewPassword = createAsyncThunk(
  "loginReducer/confirmCreateNewPassword",
  async (body: any, thunkAPI) => {
    try {
      const res: any = await loginApi.confirmCreateNewPassword(body)
      return { ...res }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const registerUser = createAsyncThunk(
  "loginReducer/registerUser",
  async (body: any, thunkAPI) => {
    try {
      const res: any = await loginApi.registerLogin(body)
      return { ...res }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const confirmCode = createAsyncThunk(
  "loginReducer/confirmCode",
  async (body: any, thunkAPI) => {
    try {
      const res: any = await loginApi.confirmCode(body)
      return { ...res }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const loginSlice = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    resetLoginState: (state: any, action) => {
      state.errors = {}
      state.loading = false
      state.statusCode = 0
    },
    resetAuthUserState: (state: any, action) => {
      state.accessToken = action?.payload
    },
    resetGuestLogin: (state: any, action) => {
      state.dataGuest = action?.payload
    },
    resetRegisterSuccess: (state: any, action) => {
      state.registerSuccess = false
    },
    resetConfirmCodeSuccess: (state: any, action) => {
      state.confirmCodeSuccess = false
    },
    resetConfirmForgotPasswordSuccess: (state: any, action) => {
      state.confirmForgotPasswordSuccess = false
    },
    logout: (state: any) => {
      state.accessToken = ""
      state.authUser = {}
      localStorage.removeItem("dataUser")
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLoginUser.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getLoginUser.fulfilled, (state, action) => {
      state.loading = false
      state.accessToken = action?.payload?.data?.accessToken
      state.statusCode = action?.payload?.statusCode
      state.authUser = action?.payload?.data?.dataResponseUser
      console.log(action?.payload?.data?.dataResponseUser)
      localStorage.setItem("accessToken", action?.payload?.data?.accessToken)
      localStorage.setItem("refreshToken", action?.payload?.data?.refreshToken)
      localStorage.setItem(
        "dataUser",
        JSON.stringify(action?.payload?.data?.dataResponseUser),
      )
    })
    builder.addCase(getLoginUser.rejected, (state, action) => {
      const error = action.payload as any
      state.loading = false
      state.statusCode = error?.response?.data?.statusCode
      console.log(error)
      toast.error(error?.response?.data?.message)
    })

    builder.addCase(registerUser.pending, (state) => {
      state.loading = true
    })
    builder.addCase(registerUser.fulfilled, (state, action: any) => {
      state.loading = false
      state.registerSuccess = true
      toast.success(
        "Vui lòng nhập mã đã được gửi tới email của bạn để xác nhận !",
      )
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      const error = action.payload as any
      state.loading = false
      toast.error(error.response.data.message)
    })
    builder.addCase(confirmCode.pending, (state) => {
      state.loading = true
    })
    builder.addCase(confirmCode.fulfilled, (state, action: any) => {
      state.loading = false
      state.confirmCodeSuccess = true
      const message = action.payload.message
      toast.success(message)
    })
    builder.addCase(confirmCode.rejected, (state, action) => {
      const error = action.payload as any
      state.loading = false
      toast.error(error.message)
    })
    builder.addCase(forgotPassword.pending, (state) => {
      state.loading = true
    })
    builder.addCase(forgotPassword.fulfilled, (state, action: any) => {
      state.loading = false
      state.confirmForgotPasswordSuccess = true
      const message = action.payload
      const newMessage = handlePayloadMessage(message)
      toast.success(newMessage)
    })
    builder.addCase(forgotPassword.rejected, (state, action) => {
      const error = action.payload as any
      state.loading = false
      toast.error(error.message)
    })
    builder.addCase(confirmCreateNewPassword.pending, (state) => {
      state.loading = true
    })
    builder.addCase(
      confirmCreateNewPassword.fulfilled,
      (state, action: any) => {
        state.loading = false
        state.confirmCodeSuccess = true
        const message = action.payload
        const newMessage = handlePayloadMessage(message)
        toast.success(newMessage)
      },
    )
    builder.addCase(confirmCreateNewPassword.rejected, (state, action) => {
      const error = action.payload as any
      state.loading = false
      toast.error(error.message)
    })
  },
})
export const {
  resetLoginState,
  resetAuthUserState,
  resetGuestLogin,
  logout,
  resetRegisterSuccess,
  resetConfirmCodeSuccess,
  resetConfirmForgotPasswordSuccess,
} = loginSlice.actions

export const loginReducer = (state: RootState) => state.loginReducer
export default loginSlice.reducer
