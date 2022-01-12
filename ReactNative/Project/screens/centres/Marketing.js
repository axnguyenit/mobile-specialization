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
function Marketing(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const [visible, setVisible] = useState(false);

    return (
    <ScrollView>
       <View style={styles.marketingContainer}>
               <View style={styles.marketingItem}>
               <View style={styles.header}>
               <Text style={styles.title}>Featured Listing</Text>
             <TouchableOpacity>
               <Image style={styles.imageIcon} source={require('../../assets/Rating_and_Review/ic-info-fill.png')} />
               </TouchableOpacity>
               </View>
                <Text style={styles.content}><Text style={{fontSize:18,fontWeight:'bold'}}>$50</Text> / per month</Text>
               </View>
               <Switch
                 style={styles.checkResult1}
                 trackColor={{ false: "#E5E5E5", true: "#DB147F" }}
                 thumbColor={isEnabled2 ? "#E5E5E5" : "#f4f3f4"}
                 ios_backgroundColor="#3e3e3e"
                 onValueChange={toggleSwitch2}
                 value={isEnabled2}
                />
        </View>
        <View style={styles.marketingContainer}>
               <View style={styles.marketingItem}>
               <View style={styles.header}>
               <Text style={styles.title}>Special Offer</Text>
             <TouchableOpacity>
               <Image style={styles.imageIcon} source={require('../../assets/Rating_and_Review/ic-info-fill.png')} />
               </TouchableOpacity>
               </View>
                   <Text style={styles.content}><Text style={{fontSize:18,fontWeight:'bold'}}>$30</Text> / per month</Text>
               </View>
               <Switch
                 style={styles.checkResult1}
                 trackColor={{ false: "#E5E5E5", true: "#DB147F" }}
                 thumbColor={isEnabled2 ? "#E5E5E5" : "#f4f3f4"}
                 ios_backgroundColor="#3e3e3e"
                 onValueChange={toggleSwitch2}
                 value={isEnabled2}
                />
        </View>
       </ScrollView>
    );
}
export default Marketing;
const styles=StyleSheet.create({
    header:{
        flexDirection:'row',
    },
    marketingContainer:{
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginRight: 16,
        marginLeft:16,
        borderRadius: 8,
        backgroundColor:'white',
        marginBottom:16,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
    },
    marketingItem:{
        flexDirection:'column',
        width:290
    },
    marketingLeft:{
        justifyContent:'center'
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:10,
        marginRight:5
    },
    content:{
        fontSize:16,
    },
})