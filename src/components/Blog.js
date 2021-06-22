import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, ScrollView, ImageBackground, StatusBar, Image, TouchableOpacity, Dimensions, Animated } from 'react-native'
import blogs from '../../data/blogData'
import normalize from 'react-native-normalize'

export const BackIcon = () => {
    return (
        <Animated.View
            style={[{ width: normalize(44, 'width'), height: normalize(35, 'height'), borderRadius: 20, justifyContent: 'center', alignItems: 'center' }, global.backgroundStyle]}
        >
            <TouchableOpacity onPress={() => global.navigation.navigate('HomeScreen')}>
                <Image
                    source={require('../../assets/icons/backArrow1.png')}
                    style={{ height: normalize(20, 'height'), width: normalize(30, 'width') }}
                />
            </TouchableOpacity>
        </Animated.View>

    )
}


export default class Blog extends Component {

    constructor(props) {
        super(props);
        global.backgroundStyle = this.backgroundStyle;
        global.navigation = this.props.navigation;
    }

   
    animationValue = new Animated.Value(0)

    backgroundInterpolate = this.animationValue.interpolate({
        inputRange: [200, 700],
        outputRange: ["transparent", "#84ACFF"]
    })

    backgroundStyle = {
        backgroundColor: this.backgroundInterpolate
    }


    render() {
        const {id} = this.props.route.params;
        return (
            <View style={styles.container}>
                <ScrollView
                    scrollEventThrottle={16}
                    onScroll={Animated.event([{ nativeEvent : { contentOffset: { y :this.animationValue } }}],
                        {useNativeDriver: false} )}
                >
                    <ImageBackground
                        source={blogs[`${id}`]['img']}
                        style={styles.bgImage}
                        resizeMode={'cover'}
                        imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
                    >
                         <View style={styles.bgImageTextContainer}>
                                <Text style={{ color: 'white', fontSize: normalize(26, 'height'), fontFamily: 'Poppins-Medium' }}>{blogs[`${id}`]['txt1']}</Text>
                                <Text style={{ color: 'white', fontSize: normalize(12, 'height'), fontFamily: 'Poppins-Medium', marginTop: '1%' }}>{blogs[`${id}`]['txt2']}</Text>
                            </View>
                    </ImageBackground>
                    <View style={styles.blogContainer}>
                        <Text style={styles.blogTxt}>{blogs[`${id}`]['blog']}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    bgImage: {
        width: '100%',
        height: normalize(280, 'height'),
    },
    blogContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: normalize(20, 'width'),
        marginTop: normalize(20, 'height')
    },
    blogTxt: {
        fontSize: normalize(22, 'height'),
        fontFamily: 'Nunito-Regular'
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: normalize(50, 'width'),
        height: normalize(50, 'height'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        bottom: Dimensions.get('window').height - normalize(400, 'height'),
    },
    bgImageTextContainer: {
        marginTop: normalize(60, 'height'),
        marginStart: normalize(50, 'width')
    }
})
