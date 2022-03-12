import React, { useEffect, useState} from 'react';
import {View,Text, ScrollView, Image, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
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
                <View style={styles.container}>
                    <Text style={styles.movieTitle}>{movieDetail.title}</Text>
                   {movieDetail.genres && (
                       <View style={styles.genresContainer}>
                           {movieDetail.genres.map(genre => {
                               return(
                                <Text style={styles.genre} key={genre.id}>{genre.name}</Text>
                               )
                           })}
                           
                       </View>
                   )}
                    
                </View>
               
            </ScrollView>
            )}
            {!loaded && <ActivityIndicator size="large"/>} 
        </>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    genresContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 20
    },
    genre : {
        marginRight: 10,
        fontWeight: 'bold'
    },
    image : {
        height: height / 2.5,
    },
    movieTitle: {
        fontSize : 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    }
})

export default Detail;