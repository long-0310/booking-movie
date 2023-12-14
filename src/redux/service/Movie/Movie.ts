import { httpService } from "../httpService"
import url from "./url"

const MovieApi = {
  getMovies: (params: any) => {
    const uri = url.movies
    return httpService.GET<any, any>({
      uri,
      params,
    })
  },
  getMovie: (params: any) => {
    const uri = url.movieById
    return httpService.GET<any, any>({
      uri,
      params,
    })
  },
  getMovieType: (params: any) => {
    const uri = url.getMovieType
    return httpService.GET<any, any>({
      uri,
      params,
    })
  },
  CreateTicket: (id: any, request: any) => {
    const uri = url.CreateTicket + `?scheduleId=${id}`
    return httpService.POST<any, any>({
      uri,
      request,
    })
  },
  createBill: (request: any) => {
    const uri = url.createBill
    return httpService.POST<any, any>({
      uri,
      request,
    })
  },
  createPayment: (params: any) => {
    const uri = "https://localhost:7121/Vnpay/CreatePaymentUrl"
    return httpService.POST<any, any>({
      uri,
      params,
    })
  },
}

export default MovieApi
