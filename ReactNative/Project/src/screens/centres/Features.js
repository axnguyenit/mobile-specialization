import React, { useState, useEffect } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  Switch,
  Image
} from 'react-native'

let screenWidth = Dimensions.get('window').width
let screenHeight = Dimensions.get('window').height
function Features(props) {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isEnabled2, setIsEnabled2] = useState(true)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState)
  return (
    <ScrollView>
      <View style={styles.featureContainer}>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icons/features/ic-feature1.png')}
          />
          <Text style={styles.titleLine1}>Waitlist</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_2.png')}
          />
          <Text style={styles.titleLine1}>Waitlist</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_3.png')}
          />
          <Text style={styles.titleLine1}>Waitlist</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage4}
            source={require('../../assets/icon_details/icon_feature_4.png')}
          />
          <Text style={styles.titleLine1}>Direct Debit Facility</Text>
          <Switch
            style={styles.checkResult4}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_5.png')}
          />
          <Text style={styles.titleLine1}>All Meal Provider</Text>
          <Switch
            style={styles.checkResult5}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_6.png')}
          />
          <Text style={styles.titleLine1}>Nappies Provider</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_7.png')}
          />
          <Text style={styles.titleLine1}>
            Education & Development Programs
          </Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_8.png')}
          />
          <Text style={styles.titleLine1}>Some Meals Provider</Text>
          <Switch
            style={styles.checkResult8}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_9.png')}
          />
          <Text style={styles.titleLine1}>Can Parking</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_10.png')}
          />
          <Text style={styles.titleLine1}>Param Parking</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_11.png')}
          />
          <Text style={styles.titleLine1}>Outdoor Play Area</Text>
          <Switch
            style={styles.checkResult11}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_12.png')}
          />
          <Text style={styles.titleLine1}>Indoor Play Area</Text>
          <Switch
            style={styles.checkResult12}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_13.png')}
          />
          <Text style={styles.titleLine1}>Music Lesson</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_14.png')}
          />
          <Text style={styles.titleLine1}>Sandpit</Text>
          <Switch
            style={styles.checkResult14}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_15.png')}
          />
          <Text style={styles.titleLine1}>Cooking Lesson</Text>
          <Switch
            style={styles.checkResult15}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_16.png')}
          />
          <Text style={styles.titleLine1}>Incursions</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_17.png')}
          />
          <Text style={styles.titleLine1}>Excursions</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_18.png')}
          />
          <Text style={styles.titleLine1}>Allergy Aware</Text>
          <Switch
            style={styles.checkResult18}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_19.png')}
          />
          <Text style={styles.titleLine1}>Credit Cart Payment Accept</Text>
          <Switch
            style={styles.checkResult19}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_20.png')}
          />
          <Text style={styles.titleLine1}>Tertiery Qualified Staff</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_21.png')}
          />
          <Text style={styles.titleLine1}>Occasional Care</Text>
          <Switch
            style={styles.checkResult21}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_22.png')}
          />
          <Text style={styles.titleLine1}>Shaded Outdoor Area</Text>
          <Switch
            style={styles.checkResult22}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_23.png')}
          />
          <Text style={styles.titleLine1}>Breastfedding Area</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_24.png')}
          />
          <Text style={styles.titleLine1}>Vegetable Garden</Text>
          <Switch
            style={styles.checkResult24}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_8.png')}
          />
          <Text style={styles.titleLine1}>Bilingual Educators</Text>
          <Switch
            style={styles.checkResult25}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/trung.png')}
          />
          <Text style={styles.titleLine1}>Can Accommodate Special Needs</Text>
          <Switch
            style={styles.checkResult26}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/xelan.png')}
          />
          <Text style={styles.titleLine1}>Air Conditioned</Text>
          <Switch
            style={styles.checkResult27}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_25.png')}
          />
          <Text style={styles.titleLine1}>Headted</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_26.png')}
          />
          <Text style={styles.titleLine1}>InHouse Cook</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_27.png')}
          />
          <Text style={styles.titleLine1}>Formula Provider</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_28.png')}
          />
          <Text style={styles.titleLine1}>Milk Provider</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_29.png')}
          />
          <Text style={styles.titleLine1}>Sunscreen Provider</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_30.png')}
          />
          <Text style={styles.titleLine1}>Insect Repellent Provider</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_31.png')}
          />
          <Text style={styles.titleLine1}>Weekly Updates</Text>
          <Switch
            style={styles.checkResult34}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_32.png')}
          />
          <Text style={styles.titleLine1}>SunSafe aware</Text>
          <Switch
            style={styles.checkResult35}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_33.png')}
          />
          <Text style={styles.titleLine1}>Daily Activity Updates</Text>
          <Switch
            style={styles.checkResult36}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_34.png')}
          />
          <Text style={styles.titleLine1}>Approved Preshchool Program</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <Image
            style={styles.featureImage1}
            source={require('../../assets/icon_details/icon_feature_35.png')}
          />
          <Text style={styles.titleLine1}>Language Lessons</Text>
          <Switch
            style={styles.checkResult1}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled2 ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.featureLine1}>
          <View>
            <Image
              style={styles.featureImage1}
              source={require('../../assets/icon_details/icon_feature_36.png')}
            />
            <Text style={styles.titleLine1}>Language Lessons</Text>
          </View>
          <Switch
            style={styles.checkResult39}
            trackColor={{ false: '#E5E5E5', true: '#DB147F' }}
            thumbColor={isEnabled ? '#E5E5E5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </ScrollView>
  )
}
export default Features
const styles = StyleSheet.create({
  featureContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 16,
    marginLeft: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    marginBottom: 16
  },
  featureLine1: {
    flexDirection: 'row',
    flex: 0,
    alignItems: 'center'
  },
  titleLine1: {
    fontSize: 16,
    marginLeft: 16,
    width: 250
  },
  featureImage1: {
    width: 24,
    height: 24
  }
})
