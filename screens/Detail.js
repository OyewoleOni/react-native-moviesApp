import React, { useEffect, useState} from 'react';
import {Text} from 'react-native';


const Detail = ({route, navigation}) => {
    const {movieDetail } = route.params;
    return (
        <>
            <Text>{movieDetail.title}</Text>
        </>
    );
}

export default Detail;