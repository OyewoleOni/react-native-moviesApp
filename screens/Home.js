import React, { useEffect, useState} from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import List from '../components/List';
import { getPopularMovies, getUpcomingMovies } from '../services/services';

const dimensions = Dimensions.get('screen');
const Home = () => {
    let title = 'movies name'
    const [moviesImages, setMoviesImages] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        getUpcomingMovies().then(movies => {
            const moviesImagesArray = [];
            movies.forEach( movie => {
                moviesImagesArray.push('https://image.tmdb.org/t/p/w500'+movie.poster_path);
            });
            setMoviesImages(moviesImagesArray)
        }).catch(err =>{
            setError(err);
        })
      getPopularMovies().then(movies => {
          setPopularMovies(movies)
      }).catch(err =>{
        setError(err);
      });
    }, [])

  return (
      <>
            <View style={styles.sliderContainer}>
                <SliderBox 
                            images={moviesImages} 
                            dotStyle={styles.sliderDotStyle}
                            sliderBoxHeight={dimensions.height /1.5}
                            autoplay={true}  
                            circleLoop={true}
                            />
            </View>
            <View style={styles.carousel}>
                <List content={popularMovies} title="Popular Movies"/>
            </View>
      </>
    
  )
}

const styles = StyleSheet.create({
    sliderContainer: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
    },
    sliderDotStyle : {
        height: 0
    },
    carousel: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
    }
})

export default Home