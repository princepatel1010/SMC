import React from 'react'
import {
    View,
    ScrollView,
    StatusBar,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
} from 'react-native';
import normalize from 'react-native-normalize'
import { Pages } from 'react-native-pages'
import NavBar from '../components/Nav'
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
    return (
        <>
            <View style={{flex: 1, marginTop: StatusBar.currentHeight }}>
            <View style={styles.drawerIconContainer}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                          style={{ height: normalize(18, 'height'), width: normalize(23, 'width') }}
                          source={require('../../assets/icons/hamburger.png')}
                      />
                </TouchableOpacity>     
              </View>
              <ScrollView contentContainerStyle={{height: '141%', flexGrow: 1}} nestedScrollEnabled={true}> 
              <View style={{width: '100%', height: '30%'}} > 
              <Pages indicatorOpacity={0.2} indicatorColor='grey' indicatorPosition={'bottom'} >
                    <View style={styles.bgImageContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Blog', {id: '1'})} activeOpacity={0.7}>
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
                                <Text style={{ color: 'white', fontSize: normalize(26, 'height'), fontFamily: 'Poppins-Medium' }}>Surat Fastest Growing {'\n'}city of india</Text>
                                <Text style={{ color: 'white', fontSize: normalize(12, 'height'), fontFamily: 'Poppins-Medium', marginTop: '1%' }}>Surat Municipal Corporation</Text>
                            </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bgImageContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Blog', {id: '2'})} activeOpacity={0.7}>
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
                                <Text style={{ color: 'white', fontSize: normalize(26, 'height'),  fontFamily: 'Poppins-Medium'}}>Surat 2nd cleanest{'\n'}city of india</Text>
                                <Text style={{ color: 'white', fontSize: normalize(12, 'height'), fontFamily: 'Poppins-Medium',  marginTop: '1%' }}>Swachh Survection</Text>
                            </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bgImageContainer}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Blog', {id: '3'})} activeOpacity={0.7}>
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
                                <Text style={{ color: 'white', fontSize: normalize(26, 'height'), fontFamily: 'Poppins-Medium' }}>Surat, most safest{'\n'}city of india</Text>
                                <Text style={{ color: 'white', fontSize: normalize(12, 'height'), fontFamily: 'Poppins-Medium', marginTop: '1%' }}>Surat Municipal Corporation</Text>
                            </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bgImageContainer}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Blog', {id: '4'}) } activeOpacity={0.7}>
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
                                <Text style={{ color: 'white', fontSize: normalize(26, 'height'), fontFamily: 'Poppins-Medium' }}>Surat has highest{'\n'}GDP of india</Text>
                                <Text style={{ color: 'white', fontSize: normalize(12, 'height'), fontFamily: 'Poppins-Medium', marginTop: '1%' }}>Centeral Statistic Office</Text>
                            </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bgImageContainer}>
                    <TouchableOpacity onPress={()=>  navigation.navigate('Blog', {id: '5'})} activeOpacity={0.7}>
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
                                <Text style={{ color: 'white', fontSize: normalize(26, 'height'), fontFamily: 'Poppins-Medium' }}>Surat smart city{'\n'}mission</Text>
                                <Text style={{ color: 'white', fontSize: normalize(12, 'height'), fontFamily: 'Poppins-Medium', marginTop: '1%' }}>Surat Municipal Corporation</Text>
                            </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </Pages>
               </View>
               <View style={{width: '100%', height: '73%', marginTop: -10}}> 
                  <NavBar />
                 </View>
              </ScrollView>
            </View>
          </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    drawerIconContainer: {
        marginTop: normalize(20, 'height'),
        marginLeft: normalize(20, 'width'),
        marginBottom: normalize(14 , 'height')
    },
    bgImageTextContainer: {
        marginLeft: normalize(40, 'width'),
        marginTop: normalize(40, 'height'),
        marginRight: '16%'
    },
})