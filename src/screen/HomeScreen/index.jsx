import React from 'react';
 import { View, Text } from 'react-native';
import CovidMessage from '../../components/CovidMessage';

 import HomeMap from '../../components/HomeMap/index';
 import HomeSearch from '../../components/HomeSearch/index';

const HomeScreen = () => {
    return(
        <View>
            <HomeMap />
            <CovidMessage />
            <HomeSearch />
        </View>
    )
}

export default HomeScreen;