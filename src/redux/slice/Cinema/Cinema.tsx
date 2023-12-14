import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import CinemaApi from "../../service/Cinema/Cinema"
import { RootState } from "../../store"

const initialState: any = {
  listCinema: [],
  movieDetail: {},
  listSeatByRoom: [],
  listRoomInformation: [],
}

export const getCinemaByMovie = createAsyncThunk(
  "cinemaReducer/getCinemaByMovie",
  async (body: any, thunkAPI) => {
    try {
      const res: any = await CinemaApi.getCinemasByMovie(body)
      return { ...res }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const getSeatByRoom = createAsyncThunk(
  "cinemaReducer/getSeatByRoom",
  async (body: any, thunkAPI) => {
    try {
      const res: any = await CinemaApi.getSeatByRoom(body)
      return { ...res }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const GetSchedulesByMovie = createAsyncThunk(
  "cinemaReducer/GetSchedulesByMovie",
  async (body: any, thunkAPI) => {
    try {
      const res: any = await CinemaApi.GetSchedulesByMovie(body)
      return { ...res }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const cinemaSlice = createSlice({
  name: "cinemaReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCinemaByMovie.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getCinemaByMovie.fulfilled, (state, action) => {
      state.loading = false
      state.listCinema = action.payload.data
    })
    builder.addCase(getCinemaByMovie.rejected, (state, action) => {
      const error = action.payload as any
      state.loading = false
      state.statusCode = error?.response?.data?.statusCode
      toast.error(error.message)
    })
    builder.addCase(getSeatByRoom.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getSeatByRoom.fulfilled, (state, action) => {
      state.loading = false
      state.listSeatByRoom = action.payload.data
    })
    builder.addCase(getSeatByRoom.rejected, (state, action) => {
      const error = action.payload as any
      state.loading = false
      state.statusCode = error?.response?.data?.statusCode
      toast.error(error.message)
    })
    builder.addCase(GetSchedulesByMovie.pending, (state) => {
      state.loading = true
    })
    builder.addCase(GetSchedulesByMovie.fulfilled, (state, action) => {
      state.loading = false
      state.listRoomInformation = action.payload.data
    })
    builder.addCase(GetSchedulesByMovie.rejected, (state, action) => {
      const error = action.payload as any
      state.loading = false
      state.statusCode = error?.response?.data?.statusCode
      toast.error(error.message)
    })
  },
})

export const cinemaReducer = (state: RootState) => state.cinemaReducer
export default cinemaSlice.reducer
