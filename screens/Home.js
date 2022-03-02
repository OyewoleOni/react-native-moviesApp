import React, { useEffect, useState} from 'react'
import { View, Text } from 'react-native'

import { getPopularMovies } from '../services/services';
const Home = () => {
    let title = 'movies name'
    const [movie, setMovie] = useState('');
    const [error, setError] = useState(false);
    useEffect(() => {
      getPopularMovies().then(movies => {
        setMovie(movies[0])
      }).catch(err =>{
        setError(err);
      });
    }, [])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Movie Name: {movie.original_title}</Text>
            <Text> Movie lang: {movie.original_language}</Text>
            <Text> Release Date: {movie.release_date}</Text> 
        {error && <Text style={{ color: 'red'}}>Server Error</Text> } 
    </View>
  )
}

export default Home