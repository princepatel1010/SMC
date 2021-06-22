import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import normalize from 'react-native-normalize';

export default class DrawerMenu extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', height: normalize(63, 'height'), width: normalize(170, 'width'), marginTop: normalize(40, 'height'), marginBottom: normalize(20, 'height'), marginLeft: normalize(-10, 'width') }}>
                    <View>
                        <DrawerItem
                            icon={() => (<Image source={require('../../assets/images/avatar.png')} style={{ height: 55, width: 60 }} />)}
                            label=""
                            //onPress={() => { props.navigation.navigate('Login') }}
                            style={{ marginLeft: normalize(26, 'width'), marginBottom: normalize(10, 'height') }}
                            labelStyle={styles.drawerText}
                        />
                    </View>

                   <View style={{ flexDirection: 'column', marginStart: normalize(-60, 'width'), }}>
                        <Text style={{ lineHeight: normalize(22.12, 'height'), fontSize: normalize(14, 'height'), color: '#0F56B3', fontFamily: 'Manrope-Bold' }}>HELLO</Text>
                        <Text style={{ lineHeight: normalize(36, 'height'), fontSize: normalize(30, 'height'), color: '#414141', fontFamily: 'Manrope-Medium'}}>Preet</Text>
                    </View>
                </View>

                <View style={{ marginTop:normalize(18, 'height'), marginLeft: normalize(24, 'width'), marginBottom: normalize(20, 'height') }}>
                    <Text style={styles.titleText}>MENU</Text>
                </View>
                <DrawerItem
                    icon={() => (<Image source={require('../../assets/icons/user_icon.png')} style={{ height: normalize(24, 'height'), width: normalize(24, 'width') }} />)}
                    label="Login"
                    onPress={() => { props.navigation.navigate('Home') }}
                    style={{ marginLeft: normalize(26, 'width'), marginBottom: normalize(10, 'height') }}
                    labelStyle={styles.drawerText}
                />
               <DrawerItem
                    icon={() => (<Image source={require('../../assets/icons/phone_call_icon.png')} style={{ height: normalize(24, 'height'), width: normalize(24, 'width')}} />)}
                    label="Contact Us"
                    //onPress={() => { props.navigation.navigate('Login') }}
                    style={{ marginLeft: normalize(26, 'width') }}
                    labelStyle={styles.drawerText}
                />
                <DrawerItem
                    icon={() => (<Image source={require('../../assets/icons/notification.png')} style={{ height: normalize(24, 'height'), width: normalize(24, 'width') }} />)}
                    label="Notifications"
                    //onPress={() => { props.navigation.navigate('Contect Us') }}
                    style={{ marginLeft: normalize(26, 'width'), marginBottom: normalize(10, 'height') }}
                    labelStyle={styles.drawerText}
                />
                
                <View style={{ marginLeft: normalize(24, 'width'), marginTop: normalize(38, 'height'), marginBottom: normalize(30, 'height') }}>
                    <Text style={styles.titleText}>POPULAR SECTION</Text>
                </View>
                <DrawerItem
                    icon={() => (<Image source={require('../../assets/icons/friends.png')} style={{ height: normalize(24, 'height'), width: normalize(24, 'width') }} />)}
                    label="Invite friends"
                    //onPress={() => { props.navigation.navigate('Contect Us') }}
                    style={{ marginLeft: normalize(26, 'width'), marginBottom: normalize(10, 'height')}}
                    labelStyle={styles.drawerText}
                />
                
                {/* <Drawer.Section style = {{marginBottom: 15, marginTop: 180, marginLeft: 20}}> */}
                <View style={{ marginTop: normalize(165, 'height'), marginLeft: normalize(20, 'width') }}>
                <DrawerItem
                        label = 'Logout'
                        labelStyle = {{fontFamily: 'Manrope-Bold', fontSize: normalize(16, 'height')}}
                        icon = {({color, size}) => (
                            <Image 
                                source = {require('../../assets/icons/Logout.png')}
                            />
                        )}
                    />
                </View>
                    
                {/* </Drawer.Section>  */}
                </View>
        )
    }
}

const styles = StyleSheet.create({
    
    titleText: {
        fontFamily: 'Manrope-ExtraBold', 
        color: 'rgba(129, 129, 129, 1)', 
        lineHeight: normalize(15, 'height'), 
        letterSpacing: 1
      },
    
      drawerText: {
        fontFamily: 'Manrope-Bold', 
        marginLeft: 0, 
        color: 'rgba(65, 65, 65, 1)',
        fontSize: normalize(16, 'height')
      }
})
