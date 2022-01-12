import React, {useState,useEffect} from "react";
import {View, Text,Switch, TouchableOpacity,Image,ScrollView} from "react-native";
import styles from "./styles";

export function MoreItem({navigation}){
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

return(
    <View style={styles.container}>
       <View style={styles.header}>
            <Text style={styles.heading}>More</Text>
        </View>
        <ScrollView>
            <View style={styles.mainScreenItem}>
                <View style={styles.mainItem}>
                   <View style={styles.line1}>
                       <Text style={styles.titleLine1}>My profile</Text>
                       <Image style={styles.iconLine1} source={require('../../assets/icon_moreItem.png')} />
                   </View> 
                   <View style={styles.line2}>
                       <Text style={styles.titleLine2}>Language</Text>
                       <Text style={styles.title2Line2}>English</Text>
                   </View>
                   <View style={styles.line3}>
                       <Text style={styles.titleLine3}>Price display</Text>
                       <Text style={styles.title3Line3}>AUD</Text>
                   </View>
                   <View style={styles.line4}>
                       <Text style={styles.titleLine4}>Notifications</Text>
                       <Switch
                            style={styles.checkResult}
                            trackColor={{ false: "#E5E5E5", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "pink" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                      />
                    </View>
                </View>
                <View style={styles.bottomItem}>
                <View style={styles.bottomLine1}>
                    <Text style={styles.bottomTitle1}>
                        About us
                    </Text>
                    <Image style={styles.bottomIcon1} source={require('../../assets/icon_moreItem.png')} />
                </View>
                 <View style={styles.bottomLine2}>
                    <Text style={styles.bottomTitle2}>
                    About Kindicare application
                    </Text>
                    <Image style={styles.bottomIcon2} source={require('../../assets/icon_moreItem.png')} />
                </View>
              <View style={styles.bottomLine3}>
                    <Text style={styles.bottomTitle3}>
                        The Kindicare Rating Explained  
                    </Text>
                    <Image style={styles.bottomIcon3} source={require('../../assets/icon_moreItem.png')} />
                </View>
                <View style={styles.bottomLine4}>
                    <Text style={styles.bottomTitle4}>
                       About the National Quality Standard (NQS)
                    </Text>
                    <Image style={styles.bottomIcon4} source={require('../../assets/icon_moreItem.png')} />
                </View>
                 <View style={styles.bottomLine5}>
                    <Text style={styles.bottomTitle5}>
                        The Value for Money Rating Explained
                    </Text>
                    <Image style={styles.bottomIcon5} source={require('../../assets/icon_moreItem.png')} />
                </View>
                <View style={styles.bottomLine6}>
                    <Text style={styles.bottomTitle6}>
                        About the Government Childcare Subsidy
                    </Text>
                    <Image style={styles.bottomIcon6} source={require('../../assets/icon_moreItem.png')} />
                </View>
                <View style={styles.bottomLine7}>
                    <Text style={styles.bottomTitle7}>
                        FAQ
                    </Text>
                    <Image style={styles.bottomIcon7} source={require('../../assets/icon_moreItem.png')} />
                </View>
                <View style={styles.bottomLine8}>
                    <Text style={styles.bottomTitle8}>
                        Term & Conditions
                    </Text>
                    <Image style={styles.bottomIcon8} source={require('../../assets/icon_moreItem.png')} />
                </View>
                <View style={styles.bottomLine9}>
                    <Text style={styles.bottomTitle9}>
                        Privacy Policy
                    </Text>
                    <Image style={styles.bottomIcon9} source={require('../../assets/icon_moreItem.png')} />
                </View>
                <View style={styles.bottomLine10}>
                    <Text style={styles.bottomTitle10}>
                        Feedback & Support
                    </Text>
                    <Image style={styles.bottomIcon10} source={require('../../assets/icon_moreItem.png')} />
                </View>
            </View>
            <View style={styles.itemLogout}>
                <View style={styles.logoutLine1}>
                    <Text style={styles.logoutText1}>
                        Log out
                    </Text>
                    <Image style={styles.imageLogout} source={require('../../assets/icon_logout.png')} />
                </View>
            </View>
        </View>
        </ScrollView>
    </View>
);
}