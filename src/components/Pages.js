import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    Dimensions,
    Modal,
    Animated,
    ScrollView
} from 'react-native'
import normalize from 'react-native-normalize'
import { Pages } from 'react-native-pages'
import blogs from '../../data/blogData'

const PagesContent = ({navigation}) => {

    return (
        <View style={styles.pagesContainer}>
                <Pages indicatorOpacity={0.2} indicatorColor='grey' indicatorPosition={'bottom'} >
                    <View style={styles.bgImageContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Blog', {id: '1'})}>
                        <ImageBackground
                            source={require('../../assets/images/smc1.png')}
                            style={{
                                height: normalize(210, 'height'),
                                width: normalize(350, 'width'),
                                alignSelf: 'center',
                                marginTop: normalize(12, 'height'),
                            }}
                            imageStyle={{ borderRadius: normalize(20) }}
                            resizeMode={'stretch'}
                        >
                            <View style={styles.bgImageTextContainer}>
                                <Text style={{ color: 'white', fontSize: normalize(26, 'height'), fontWeight: '600' }}>Surat Fastest Growing {'\n'}city of india</Text>
                                <Text style={{ color: 'white', fontSize: normalize(12, 'height'), fontWeight: '400', marginTop: '1%' }}>Surat Municipal Corporation</Text>
                            </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bgImageContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Blog', {id: '2'})}>
                        <ImageBackground
                            source={require('../../assets/images/smc2.png')}
                            style={{
                                height: normalize(210, 'height'),
                                width: normalize(350, 'width'),
                                alignSelf: 'center',
                                marginTop: normalize(12, 'height'),
                            }}
                            imageStyle={{ borderRadius: normalize(20) }}
                            resizeMode={'stretch'}
                        >
                            <View style={styles.bgImageTextContainer}>
                                <Text style={{ color: 'white', fontSize: normalize(26, 'height'), fontWeight: '600' }}>Surat 2nd cleanest{'\n'}city of india</Text>
                                <Text style={{ color: 'white', fontSize: normalize(12, 'height'), fontWeight: '400', marginTop: '1%' }}>Swachh Survection</Text>
                            </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bgImageContainer}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Blog', {id: '3'})}>
                        <ImageBackground
                            source={require('../../assets/images/smc3.png')}
                            style={{
                                height: normalize(210, 'height'),
                                width: normalize(350, 'width'),
                                alignSelf: 'center',
                                marginTop: normalize(12, 'height'),
                            }}
                            imageStyle={{ borderRadius: normalize(20) }}
                            
                        >
                            <View style={styles.bgImageTextContainer}>
                                <Text style={{ color: 'white', fontSize: normalize(26, 'height'), fontWeight: '600' }}>Surat, most safest{'\n'}city of india</Text>
                                <Text style={{ color: 'white', fontSize: normalize(12, 'height'), fontWeight: '400', marginTop: '1%' }}>Surat Municipal Corporation</Text>
                            </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bgImageContainer}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Blog', {id: '4'}) }>
                        <ImageBackground
                            source={require('../../assets/images/smc4.png')}
                            style={{
                                height: normalize(210, 'height'),
                                width: normalize(350, 'width'),
                                alignSelf: 'center',
                                marginTop: normalize(12, 'height'),
                            }}
                            imageStyle={{ borderRadius: normalize(20) }}
                            resizeMode={'stretch'}
                        >
                            <View style={styles.bgImageTextContainer}>
                                <Text style={{ color: 'white', fontSize: normalize(26, 'height'), fontWeight: '600' }}>Surat has highest{'\n'}GDP of india</Text>
                                <Text style={{ color: 'white', fontSize: normalize(12, 'height'), fontWeight: '400', marginTop: '1%' }}>Centeral Statistic Office</Text>
                            </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bgImageContainer}>
                    <TouchableOpacity onPress={()=>  navigation.navigate('Blog', {id: '5'})}>
                        <ImageBackground
                            source={require('../../assets/images/smc5.png')}
                            style={{
                                height: normalize(210, 'height'),
                                width: normalize(350, 'width'),
                                alignSelf: 'center',
                                marginTop: normalize(12, 'height'),
                            }}
                            imageStyle={{ borderRadius: normalize(20) }}
                            resizeMode={'stretch'}
                        >
                            <View style={styles.bgImageTextContainer}>
                                <Text style={{ color: 'white', fontSize: normalize(26, 'height'), fontWeight: '600' }}>Surat smart city{'\n'}mission</Text>
                                <Text style={{ color: 'white', fontSize: normalize(12, 'height'), fontWeight: '400', marginTop: '1%' }}>Surat Municipal Corporation</Text>
                            </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </Pages>
            </View>
    )
}

export default PagesContent

const styles = StyleSheet.create({
    pagesContainer: {
        marginTop: normalize(4, 'height'),
        height: normalize(250, 'height'),
    },
    bgImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    bgImageTextContainer: {
        marginLeft: normalize(40, 'width'),
        marginTop: normalize(40, 'height'),
        marginRight: '16%'
    },
    backButton1: {
        height: normalize(16, 'height'),
        width: normalize(21, 'width'),
        marginTop: normalize(35, 'height'),
        marginStart: normalize(28, 'width'),
        marginBottom: normalize(20, 'height')
    },
    backButton2: {
        height: normalize(32, 'height'),
        width: normalize(40,'width'),
        marginTop: normalize(35, 'height'),
        marginStart: normalize(28, 'width'),
        marginBottom: normalize(30, 'height')
    },
    imageContainer: {
    },
    image: {
        height: Dimensions.get('window').height / 2.2,
        width: '100%'
    },
    imageTextContainer: {
        marginStart: normalize(28, 'width'),
        height: normalize(84, 'height'),
        width: normalize(266, 'width')
    },
    imageText1: {
        color: 'white',
        fontSize: normalize(28, 'height'),
        fontWeight: '600'
    },
    imageText2: {
        color: 'white',
        fontSize: normalize(12, 'height'),
        fontWeight: '400'
    },
    blogContainer: {
        width: normalize(Dimensions.get('window').width - 46, 'width'),
        margin: normalize(28, 'height'),
        alignSelf: 'center',
        alignContent: 'center'
    },
    blogText: {
        fontSize: normalize(20, 'height'),
        fontWeight: '400',
        lineHeight: normalize(32, 'height'),
        textAlign: 'justify'
    },
    bgImage: {
        width: '100%',
        height: 320,
    },
    blogContainer: {
        marginTop: 30,
        marginHorizontal: 10
    },
    blogTxt: {
        fontSize: 22,
    },
})
