import React, { useEffect, useState} from 'react';
import {View,Text, ScrollView, Image, StyleSheet, Dimensions, 
    Modal, ActivityIndicator, Pressable} from 'react-native';
import { getMovie } from '../services/services';
import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';
import PlayButton from '../components/PlayButton';
import VideoPlayer from 'react-native-video-controls';

const placeHolderImage = require('../assets/images/placeholder.png');
const height = Dimensions.get('screen').height;

const Detail = ({route, navigation}) => {
    const movieId  = route.params.movieId;
    const [movieDetail, setMovieDetail] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        getMovie(movieId).then(movieData => {
            setMovieDetail(movieData);
            setLoaded(true);
        })
    }, [movieId])

    const videoShown = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <>
           {loaded && (
            <View>
                <ScrollView>
                <Image 
                 style={styles.image} 
                 source={
                    movieDetail.poster_path ?
                      {uri: 'https://image.tmdb.org/t/p/w500'+movieDetail.poster_path}
                      : placeHolderImage                    
                    }/>
                <View style={styles.container}>
                    <View style={styles.playButton}>
                        <PlayButton handlePress={videoShown}/>
                    </View>
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
                    <StarRating 
                            disabled={true} 
                            fullStarColor={'gold'} 
                            maxStars={5} 
                            starSize={25}
                            rating={movieDetail.vote_average /2}/>
                    <Text style={styles.overview}>{movieDetail.overview}</Text>
                    <Text style={styles.release_date}>{'Release Date: ' + dateFormat(movieDetail.release_date, 'mmmm dS, yyyy')}</Text>
                </View>
               
                </ScrollView>

                <Modal animationType='slide' visible={modalVisible}>
                    <View style={styles.videoModal}>
                    <VideoPlayer
                        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                        />
                        {/* <Pressable onPress={() => videoShown()}>
                            <Text>{'Test'}</Text>
                        </Pressable> */}
                    </View>
                    
                </Modal>
            </View>
           
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
        marginTop: 20,
        marginBottom: 10
    },
    playButton: {
        position: 'absolute',
        top: -30,
        right: 20
    },
    genre : {
        marginRight: 10,
        fontWeight: 'bold'
    },
    image : {
        height: height / 2.5,
    },
    overview : {
        padding: 15
    },
    release_date: {
        fontWeight: 'bold'
    },
    movieTitle: {
        fontSize : 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },
    videoModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Detail;