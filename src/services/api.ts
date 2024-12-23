import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDQzN2ZmNzBiMmE5NzVhZTlhMjIxMjU3YzhhNTQ2MiIsIm5iZiI6MTczNDg5ODYwNi44MzcsInN1YiI6IjY3Njg3M2FlMzlmZWM2YmNhY2M0Y2FmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WFRijdQd-Ivu6iPCttZ35AtZG1s3yj2qB3MTi0BUzl8"

const apiImages = axios.create({
    baseURL: 'https://image.tmdb.org/t/p/',
})
const apiTMDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: { Authorization: `Bearer ${token}` }
})


export {apiImages, apiTMDB}