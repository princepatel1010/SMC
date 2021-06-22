import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
    Dimensions,
    StyleSheet,
} from "react-native";
import data from '../../data/data'
import normalize from 'react-native-normalize';


const { width } = Dimensions.get("window");

export default class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            active: 0,
            xTabOne: 0,
            xTabTwo: 0,
            xTabThree: 0,
            xTabFour: 0,
            xTabFive: 0,
            translateX: new Animated.Value(0),
            translateXTabOne: new Animated.Value(0),
            translateXTabTwo: new Animated.Value(width),
            translateXTabThree: new Animated.Value(width),
            translateXTabFour: new Animated.Value(width),
            translateXTabFive: new Animated.Value(width),
            translateY: -1000,
            dataList: data,
        }
    }
   
    handleSlide = type => {
        let {
            translateX,
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100,
            useNativeDriver: true
        }).start();
    };

    renderItem = (item) => {
        return (
            <View style={styles.itemContainer} >
                <View style={styles.listIconContainer}>
                    <Image
                        style={styles.listIcons}
                        source={item.icon}
                    />
                </View>
                <View style={styles.itemTextContainer}>
                    <Text>{item.option}</Text>
                </View>
            </View>
    
        )
    }

    handleFilter = status => {
        if(status !== 0) {
            this.setState({dataList: [...data.filter(e=> e.status === status)]})
        }else{
            this.setState({dataList: data})
        }
    }

    render() {
        let {
            xTabOne,
            xTabTwo,
            xTabThree,
            xTabFour,
            xTabFive,
            translateX,
            active,
        } = this.state;

        return (
            <View>
            <View
                style={{
                    width: "93%",
                    marginLeft: "auto",
                    marginRight: "auto",
                   
                }}
            >
            
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: normalize(20, 'height'),
                        marginBottom: normalize(18, 'height'),
                        height: normalize(33, 'height'),
                        justifyContent: 'space-evenly',
                        position: "relative",
                    }}
                >
                    <Animated.View
                        style={{
                            position: "absolute",
                            width: "20%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            backgroundColor: "#007aff",
                            borderRadius: 4,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: normalize(8, 'width'),
                            transform: [
                                {
                                    translateX
                                }
                            ]
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 4,
                            borderRightWidth: 0,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            
                        }}
                        onLayout={event =>
                            this.setState({
                                xTabOne: event.nativeEvent.layout.x
                            })
                        }
                        onPress={() =>{
                            this.setState({ active: 0 }, () =>
                                this.handleSlide(xTabOne),
                            ),
                            this.handleFilter(0)
                        }
                        }    
                    >
                        <Text
                            style={{
                                color: active === 0 ? "#fff" : "#007aff",
                                fontFamily: 'Nunito-Medium',
                                lineHeight: 22,
                                fontSize: 16
                            }}
                        >
                            All
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 4,
                            borderRightWidth: 0,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                           
                        }}
                        onLayout={event =>
                            this.setState({
                                xTabTwo: event.nativeEvent.layout.x
                            })
                        }
                        onPress={() => {
                            this.setState({ active: 1 }, () =>
                                this.handleSlide(xTabTwo),
                                
                            ),
                            this.handleFilter(1)
                        }
                        }
                    >
                        <Text
                            style={{
                                color: active === 1 ? "#fff" : "#007aff",
                                fontFamily: 'Nunito-Medium',
                                lineHeight: 22,
                                fontSize: 16
                            }}
                        >
                            Taxes
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 4,
                            borderRightWidth: 0,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                           
                        }}
                        onLayout={event =>
                            this.setState({
                                xTabThree: event.nativeEvent.layout.x
                            })
                        }
                        onPress={() =>{
                            this.setState({ active: 2 }, () =>
                            this.handleSlide(xTabThree),
                        ),
                        this.handleFilter(2)
                    }
                        }
                    >
                        <Text
                            style={{
                                color: active === 2 ? "#fff" : "#007aff",
                                fontFamily: 'Nunito-Medium',
                                lineHeight: 22,
                                fontSize: 16
                            }}
                        >
                            Forms
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 4,
                            borderRightWidth: 0,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                           
                        }}
                        onLayout={event =>
                            this.setState({
                                xTabFour: event.nativeEvent.layout.x
                            })
                        }
                        onPress={() =>{
                            this.setState({ active: 3 }, () =>
                                this.handleSlide(xTabFour),
                            ),
                            this.handleFilter(3)
                        }
                        }
                            
                    >
                        <Text
                            style={{
                                color: active === 3 ? "#fff" : "#007aff",
                                fontFamily: 'Nunito-Medium',
                                lineHeight: 22,
                                fontSize: 16
                            }}
                        >
                            Facilities
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 4,
                            borderLeftWidth: 0,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                           
                        }}
                        onLayout={event =>
                            this.setState({
                                xTabFive: event.nativeEvent.layout.x
                            })
                        }
                        onPress={() =>{
                            this.setState({ active: 4 }, () =>
                                this.handleSlide(xTabFive),
                            ),
                            this.handleFilter(4)
                        }
                        }
                            
                    >
                        <Text
                            style={{
                                color: active === 4 ? "#fff" : "#007aff",
                                fontFamily: 'Nunito-Medium',
                                lineHeight: 22,
                                fontSize: 16
                            }}
                        >
                            Services
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{top: normalize(2, 'height')}}>
                    <ScrollView nestedScrollEnabled={true} contentContainerStyle={{flexGrow: 1}}>
                       {this.state.dataList.map(item => (
                            <View style={styles.itemContainer} >
                                <View style={styles.listIconContainer}>
                                    <Image
                                        style={styles.listIcons}
                                        source={item.icon}
                                    />
                                </View>
                                <View style={styles.itemTextContainer}>
                                    <Text style={{fontFamily: 'Nunito-Medium', color: 'rgba(111, 110, 110, 1)', fontSize: 18,}}>{item.option}</Text>
                                </View>
                                <View/>
                            </View>    
                       ))}
                    </ScrollView>
                </View>
             </View>
             </View>
        )
    }
}

const styles = StyleSheet.create({

    itemContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingBottom: normalize(22, 'height'),
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    listIconContainer: {
        borderRadius: normalize(10),
        height: normalize(60),
        width: normalize(70),
        shadowColor: 'rgba(125, 125, 125, 0.25)',
        borderWidth: 1,
        borderColor: 'rgba(125, 125, 125, 0.25)',
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 20,
        top: normalize(10, 'height')
    },
    itemTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: normalize(25, 'width'),
        fontSize: normalize(20, 'height'),
        top: normalize(10, 'height')
    },
    listIcons: {
        height: normalize(35),
        width: normalize(36),
    },
})
