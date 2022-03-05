import React, { useEffect, useState} from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import List from '../components/List';
import { getPopularMovies, getUpcomingMovies, getPopularTv, getFamilyMovies, getDocumentary } from '../services/services';

const dimensions = Dimensions.get('screen');
const Home = () => {
    let title = 'movies name'
    const [moviesImages, setMoviesImages] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [popularTv, setPopularTv] = useState([]);
    const [familyMovies, setFamilyMovies] = useState([]);
    const [documentary, setDocumentary] = useState([]);
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
        });

        getPopularMovies().then(movies => {
          setPopularMovies(movies)
        }).catch(err =>{
        setError(err);
        });

        getPopularTv().then(movies => {
           setPopularTv(movies)
        }).catch(err =>{
        setError(err);
        });

        getFamilyMovies().then(movies => {
            setFamilyMovies(movies)
         }).catch(err =>{
         setError(err);
         });
        
        getDocumentary().then(movies => {
            setDocumentary(movies)
         }).catch(err =>{
         setError(err);
         });
    }, [])

  return (
      <>
        <ScrollView>
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
            <View style={styles.carousel}>
                <List content={popularTv} title="Popular Tv Shows"/>
            </View>
            <View style={styles.carousel}>
                <List content={familyMovies} title="Family Movies"/>
            </View>
            <View style={styles.carousel}>
                <List content={documentary} title="Documentaries"/>
            </View>
        </ScrollView>
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
        alignItems: "center",
    }
})

export default Home