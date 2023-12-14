import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import MovieApi from "../../service/Movie/Movie"
import { RootState } from "../../store"

const initialState: any = {
  listMovie: [],
  listMovieTypes: [],
  movieDetail: {},
  linkPayment: "",
  loading: false,
  loadingPayment: false,
}

export const getAllMovie = createAsyncThunk(
  "movieReducer/getAllMovie",
  async (body: any, thunkAPI) => {
    try {
      const res: any = await MovieApi.getMovies(body)
      return { ...res }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const getMovieTypes = createAsyncThunk(
  "movieReducer/getMovieTypes",
  async (body: any, thunkAPI) => {
    try {
      const res: any = await MovieApi.getMovieType(body)
      return { ...res }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const getDetailMovie = createAsyncThunk(
  "movieReducer/getDetailMovie",
  async (body: any, thunkAPI) => {
    try {
      const res: any = await MovieApi.getMovie(body)
      return { ...res }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const createTicket = createAsyncThunk(
  "movieReducer/createTicket",
  async (req: any, thunkAPI) => {
    try {
      const res: any = await MovieApi.CreateTicket(req.id, req.body)

      const dataUser = localStorage.getItem("dataUser")
      const user = dataUser ? (JSON.parse(dataUser) as any) : null

      const listTicket = res?.map((ticket: any) => ({
        ticketId: ticket?.id,
      }))

      const reqBill = {
        customerId: user.id,
        billName: "Hoá Đơn Thanh Toán",
        billTickets: listTicket,
      }
      thunkAPI.dispatch(createBill(reqBill))
      return { ...res }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const createBill = createAsyncThunk(
  "movieReducer/createBill",
  async (req: any, thunkAPI) => {
    try {
      const res: any = await MovieApi.createBill(req)

      thunkAPI.dispatch(createPayment({ billId: res?.data?.id }))
      return { ...res }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const createPayment = createAsyncThunk(
  "movieReducer/createPayment",
  async (req: any, thunkAPI) => {
    try {
      const res: any = await MovieApi.createPayment(req)

      return { ...res }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const movieSlice = createSlice({
  name: "movieReducer",
  initialState,
  reducers: {
    resetLoginState: (state: any, action) => {
      state.errors = {}
      state.loading = false
      state.statusCode = 0
    },
    resetLinkPayment: (state: any, action) => {
      state.linkPayment = ""
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMovie.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getAllMovie.fulfilled, (state, action) => {
      state.loading = false
      state.listMovie = action.payload.data
    })
    builder.addCase(getAllMovie.rejected, (state, action) => {
      const error = action.payload as any
      state.loading = false
      state.statusCode = error?.response?.data?.statusCode
      toast.error(error.message)
    })
    builder.addCase(getDetailMovie.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getDetailMovie.fulfilled, (state, action) => {
      state.loading = false
      state.movieDetail = action.payload.data
    })
    builder.addCase(getDetailMovie.rejected, (state, action) => {
      const error = action.payload as any
      state.loading = false
      state.statusCode = error?.response?.data?.statusCode
      toast.error(error.message)
    })

    builder.addCase(getMovieTypes.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getMovieTypes.fulfilled, (state, action) => {
      state.loading = false
      state.listMovieTypes = action.payload.data
    })
    builder.addCase(getMovieTypes.rejected, (state, action) => {
      const error = action.payload as any
      state.loading = false
      state.statusCode = error?.response?.data?.statusCode
      toast.error(error.message)
    })
    builder.addCase(createTicket.pending, (state) => {
      state.loadingPayment = true
    })
    builder.addCase(createTicket.fulfilled, (state, action) => {
      state.loadingPayment = false
    })
    builder.addCase(createTicket.rejected, (state, action) => {
      const error = action.payload as any
      state.statusCode = error?.response?.data?.statusCode
      toast.error(error.message)
    })
    builder.addCase(createBill.pending, (state) => {
      state.loadingPayment = true
    })
    builder.addCase(createBill.fulfilled, (state, action) => {
      state.loadingPayment = false
    })
    builder.addCase(createBill.rejected, (state, action) => {
      const error = action.payload as any
      state.loadingPayment = false
      state.statusCode = error?.response?.data?.statusCode
      toast.error(error.message)
    })
    builder.addCase(createPayment.pending, (state) => {
      state.loadingPayment = true
    })
    builder.addCase(createPayment.fulfilled, (state, action) => {
      state.loadingPayment = false
      state.linkPayment = Object.values(action.payload).join("")
    })
    builder.addCase(createPayment.rejected, (state, action) => {
      const error = action.payload as any
      state.loadingPayment = false
      state.statusCode = error?.response?.data?.statusCode
      toast.error(error.message)
    })
  },
})
export const { resetLoginState, resetLinkPayment } = movieSlice.actions

export const movieReducer = (state: RootState) => state.movieReducer
export default movieSlice.reducer
