import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2/'

const getItemServices = () => axios.get(`${BASE_URL}pokemon?limit=151`)

export { getItemServices }
