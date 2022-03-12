import axios from "axios";

const baseURL = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=c916ba37617afe059d23d1cc59d0eb56'

//Get Popular Movies
export const getPopularMovies = async () => {
    const resp = await axios.get(
       `${baseURL}/movie/popular?${apiKey}` )
    return resp.data.results;
  }

  //Get Upcoming Movies
export const getUpcomingMovies = async () => {
    const resp = await axios.get(
       `${baseURL}/movie/upcoming?${apiKey}` )
    return resp.data.results;
  }

  //Get Popular TV
export const getPopularTv = async () => {
    const resp = await axios.get(
       `${baseURL}/tv/popular?${apiKey}` )
    return resp.data.results;
  }

  //Get Family movies
  export const getFamilyMovies = async () => {
   const resp = await axios.get(
      `${baseURL}/discover/movie?${apiKey}&with_genres=10751` )
   return resp.data.results;
 }

 //Get Documentary
 export const getDocumentary = async () => {
   const resp = await axios.get(
      `${baseURL}/discover/movie?${apiKey}&with_genres=99` )
   return resp.data.results;
 }

 export const getMovie = async (id) => {
   const resp = await axios.get(
      `${baseURL}/movie/${id}?${apiKey}` )
   return resp.data;
 }


  