import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const getPopularMovies = async () => {
  const resp = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c916ba37617afe059d23d1cc59d0eb56')
  return resp.data.results;
}

const App = () => {
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
      <Text>
        {/* Try editing me! 🎉 */}
       Movie Name: {movie.original_title}
      </Text>
      <Text> Movie lang: {movie.original_language}</Text>
      <Text> Release Date: {movie.release_date}</Text> 
     {error && <Text style={{ color: 'red'}}>Server Error</Text> } 
    </View>
  );
}

export default App;