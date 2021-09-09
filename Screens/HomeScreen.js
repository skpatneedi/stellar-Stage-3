import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
    } from "react-native";
    

export default class HomeScreen extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <SafeAreaView style = {styles.SafeAreaViewstyle}/>
                <ImageBackground source = {require('../assets/stars.gif')} style = {styles.backgroundImage }>
                
                 <Image source = {require('../assets/main-icon.png')} style = {styles.logo1}></Image>
                 <View>
                    <Text style = {styles.text}> Stellar  </Text>
                     <Text style = {styles.text2}> App </Text>
                     
                </View>
                <TouchableOpacity style  = {styles.button} onPress={() => this.props.navigation.navigate("SpaceCrafts")}>
                    <Text style = {styles.buttonText}>
                        Space Crafts
                    </Text>
                    <Image source = {require('../assets/space_crafts.png')} style = {styles.iconImage}></Image>
                </TouchableOpacity >
                <TouchableOpacity style  = {styles.button} onPress={() => this.props.navigation.navigate("StarMap")}>
                    <Text style = {styles.buttonText}>
                        Star Map
                    </Text>
                    <Image source = {require('../assets/star_map.png')} style = {styles.iconImage}></Image>
                </TouchableOpacity >
                <TouchableOpacity style  = {styles.button} onPress={() => this.props.navigation.navigate("DailyPic")}>
                    <Text style = {styles.buttonText}>
                        Tonight Sky
                    </Text>
                    <Image source = {require('../assets/daily_pictures.png')} style = {styles.iconImage}></Image>
                </TouchableOpacity >
                
                </ImageBackground>
            </View>
        )}}

        const styles = StyleSheet.create({
            SafeAreaViewstyle:{
                marginTop:Platform.OS === "android"?StatusBar.currentHeight:0
            },
            container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent:'center'
              },
            text:{
                flex:0,
                fontSize:40,
                fontWeight:'bold',
                color:'white',
                justifyContent:'center',
                alignItems:'center',
                marginLeft:'30%'
            },
            logo1:{
              marginLeft:85,
              marginTop:20,
              height:190,
              width:190
            },
            text2:{
                flex:0,
                fontSize:40,
                fontWeight:'bold',
                color:'white',
                justifyContent:'center',
                alignItems:'center',
                marginLeft:'33%'
            },
            textView:{
                flex :0.15,
                justifyContent:'center',
                alignItems:'center'
            },
            button:{
                flex:0.25,
                marginLeft:20,
                marginRight:20,
                marginTop:30,
                borderRadius:50,
                backgroundColor:'white',
                justifyContent:'center'
        
            },
            buttonText:{
                fontSize:25,
                fontWeight:'bold',
                color:'#E20F8A',
                marginTop:70,
                paddingLeft:100,
                paddingRight:70
            },
            backgroundImage:{
                flex:1,
                resizeMode:'cover'
            },
            iconImage:{
                height:80,
                width:80,
                resizeMode:'contain',
                right:-250,
                top:-70
               }
        
        
        })