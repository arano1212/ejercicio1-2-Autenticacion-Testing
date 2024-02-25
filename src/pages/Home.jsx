import React, { useState, useEffect } from 'react'
import { getItemServices } from '@/sevices/itemServices'

const Home = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const getPokemonsData = async () => {
      try {
        const response = await getItemServices()
        setPokemons(response.data.results)
      } catch (error) {
        console.log('error', error.message)
      }
    }
    getPokemonsData()
  }, [])

  return (
    <>
      <div className='container'>
        <h1>Pokédex</h1>

        <div className='row'>
          {pokemons.map(pokemon => (
            <div className='col-sm-4 mb-4' key={pokemon.name}>
              <div className='card'>
                <img className='card-img-top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
                <div className='card-body'>
                  <h4 className='card-title'>{pokemon.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
