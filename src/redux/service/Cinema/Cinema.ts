import { httpService } from "../httpService"
import url from "./url"

const CinemaApi = {
  getCinemasByMovie: (params: any) => {
    const uri = url.cinema + `/GetCinemaByMovie`
    return httpService.GET<any, any>({
      uri,
      params,
    })
  },
  getSeatByRoom: (params: any) => {
    const uri = url.cinema + `/GetSeatByRoom`
    return httpService.GET<any, any>({
      uri,
      params,
    })
  },
  GetSchedulesByMovie: (params: any) => {
    const uri = url.GetSchedulesByMovie
    return httpService.GET<any, any>({
      uri,
      params,
    })
  },
}

export default CinemaApi
