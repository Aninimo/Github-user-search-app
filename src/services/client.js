import axios from "axios"

const api = axios.create({
  BaseURL: "https://api.github.com/users"
})

export default api
