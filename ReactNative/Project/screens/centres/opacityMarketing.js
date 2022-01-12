import React,{useState,useEffect} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Dimensions,
    ScrollView,
    Switch,
    StyleSheet,
    Image,
    Touchable
} from 'react-native';

let screenWidth=Dimensions.get('window').width;
let screenHeight=Dimensions.get('window').height;
function Opacity(props) {
    return (
       <View style={styles.container}>
           
        </View>
    );
}
export default Opacity;
const styles=StyleSheet.create({
   container:{
       width:screenWidth,
       height:screenHeight,
       backgroundColor:'red'
   }
})