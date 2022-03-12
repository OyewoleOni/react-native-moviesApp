import React, { useEffect, useState} from 'react';
import {Text, ScrollView, Image, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import { getMovie } from '../services/services';

const placeHolderImage = require('../assets/images/placeholder.png');
const height = Dimensions.get('screen').height;
const Detail = ({route, navigation}) => {
    const movieId  = route.params.movieId;
    const [movieDetail, setMovieDetail] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        getMovie(movieId).then(movieData => {
            setMovieDetail(movieData);
            setLoaded(true);
        })
    }, [movieId])
    return (
        <>
           {loaded && (
           <ScrollView>
                <Image 
                 style={styles.image} 
                 source={
                    movieDetail.poster_path ?
                      {uri: 'https://image.tmdb.org/t/p/w500'+movieDetail.poster_path}
                      : placeHolderImage                    
                    }/>
            </ScrollView>
            )}
            {!loaded && <ActivityIndicator size="large"/>} 
        </>
    );
}

const styles = StyleSheet.create({
    image : {
        height: height / 2.5,
    }
})

export default Detail;