import React, { useEffect, useState} from 'react'
import { View, ActivityIndicator, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import Error from '../components/Error';
import List from '../components/List';
import { getPopularMovies, getUpcomingMovies, getPopularTv, getFamilyMovies, getDocumentary } from '../services/services';

const dimensions = Dimensions.get('screen');
const Home = ({navigation}) => {
    let title = 'movies name'
    const [moviesImages, setMoviesImages] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [popularTv, setPopularTv] = useState([]);
    const [familyMovies, setFamilyMovies] = useState([]);
    const [documentary, setDocumentary] = useState([]);
    const [error, setError] = useState(true);
    const [loaded, setLoaded] = useState(false);

    const getData = () => {
        return Promise.all([
            getUpcomingMovies(), 
            getPopularMovies(), 
            getPopularTv(), 
            getFamilyMovies(), 
            getDocumentary()
        ])
    }

    useEffect(() => {
        getData().then(
            ([
                upcomingMoviesData,
                popularMoviesData,
                popularTvData, 
                familyMoviesData, 
                documentaryData
            ])=> {
                const moviesImagesArray = [];
                upcomingMoviesData.forEach( movie => {
                moviesImagesArray.push('https://image.tmdb.org/t/p/w500'+movie.poster_path);
            });
                setMoviesImages(moviesImagesArray);
                setPopularMovies(popularMoviesData);
                setPopularTv(popularTvData);
                setFamilyMovies(familyMoviesData);
                setDocumentary(documentaryData);
                
            } 
        ).catch((err) => {
            setError(err);
        }).finally(() => {
            setLoaded(true);
        });
        
    }, [])

  return (
      <>
        {/* Upcoming Movies */}
        {loaded && (
            <ScrollView>
                    {moviesImages && (
                    <View style={styles.sliderContainer}>
                            <SliderBox 
                                        images={moviesImages} 
                                        dotStyle={styles.sliderDotStyle}
                                        sliderBoxHeight={dimensions.height /1.5}
                                        autoplay={true}  
                                        circleLoop={true}
                                        />
                    </View>
                )} 
    
                {/* Popular Movies */}
                {popularMovies && (
                    <View style={styles.carousel}>
                            <List navigation={navigation} content={popularMovies} title="Popular Movies"/>
                    </View>
                )} 
    
    
                {/* PopularTv */}
                {popularTv && (
                    <View style={styles.carousel}>
                        <List navigation={navigation} content={popularTv} title="Popular Tv Shows"/>
                    </View>
                )}
    
                {/* family Movies */}
                {familyMovies && (
                    <View style={styles.carousel}>
                        <List navigation={navigation} content={familyMovies} title="Family Movies"/>
                    </View>
                )} 
    
                {/* documentary */}
                {documentary && (
                    <View style={styles.carousel}>
                        <List navigation={navigation} content={documentary} title="Documentaries"/>
                    </View>
                )}
                
            </ScrollView>
        )}  
       {!loaded && <ActivityIndicator size="large"/>} 
       {error && <Error />}
       
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