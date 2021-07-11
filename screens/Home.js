import { Component } from 'react';
import React from 'react';
import { Text,View,StyleSheet,SafeAreaView,StatusBar, TouchableOpacity,ImageBackground,Image,Platform} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={{flex:1}}>
             <SafeAreaView style={styles.droidSafeArea}/>
            <ImageBackground
              source = {require ('../assets/stars.gif')}
              style={styles.backgroundImage}>

            <View style={styles.titleBar}>
                <Text style={styles.titleText}>
                  Stellar App
                </Text>
            </View>
 
           

            <TouchableOpacity 
             style={styles.routeCard}
             onPress={()=>
                 this.props.navigation.navigate("SpaceCraft")}>
                 <Text style={styles.routeText}>Space Craft</Text>
                 <Image
                 source={require('../assets/space_crafts.png')}
                 style={styles.iconImage}
                 ></Image>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.routeCard}
                onPress={()=>
                    this.props.navigation.navigate("StarMap")}>
                    <Text style={styles.routeText}>Star Map</Text>
                    <Image
                    source={require('../assets/star_map.png')}
                    style={styles.iconImage}
                    ></Image>
                </TouchableOpacity>

            <TouchableOpacity 
             style={styles.routeCard}
             onPress={()=>
                 this.props.navigation.navigate("Dailypics")}>
                 <Text style={styles.routeText}>Daily Pics</Text>
                 <Image
                 source={require('../assets/daily_pictures.png')}
                 style={styles.iconImage}
                 ></Image>
            </TouchableOpacity>

            <Image
                 source={require('../assets/main-icon.png')}
                 style={styles.image}
                 ></Image>
             </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    droidSafeArea : {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight: 0 
    },
    titleBar :{
        alignItems:'center'
    },
    titleText : {
        fontSize :40,
        fontWeight:'bold',
        color:'white',
        marginTop:120
    },
    routeCard :{
        height:60,

        width:310,
        marginLeft:30,
        marginRight:50,
        marginTop:130,
        marginBottom:-90,
        borderRadius:30,
        backgroundColor:'white'
    },
    routeText:{
        fontSize:35,
        fontWeight:'bold',
        color:'#DF0282',
        marginTop:15,
        paddingLeft:60,
        
    },
    iconImage:{
        position:'absolute',
        height:70,
        width:70,
        resizeMode:'contain',
        right:20,
        top:-30
    },
    backgroundImage :{
        flex:1,
        resizeMode:'cover'
    },
    image:{
        height:150,
        width:150,
        marginTop:-320,
        marginLeft:90,
        margin:100
    }
})