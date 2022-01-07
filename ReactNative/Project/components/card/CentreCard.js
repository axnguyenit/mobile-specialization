import React from 'react';
import {
    TouchableOpacity,
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import CardImage from '../../assets/images/card-image.png';
import IconLocation from '../../assets/images/ic-map2.png';
import IconBaby from '../../assets/images/ic-baby.png';
import IconWaitList from '../../assets/images/ic-waitlist2.png';
import IconKindi from '../../assets/images/ic-kindi.png';
import IconService from '../../assets/images/ic-service.png';

const CentreCard = (props) => {
    return(
        <TouchableOpacity style={styles.centerCard}>
            <View>
                <Image 
                    source={CardImage}
                    style={styles.image}
                />
            </View>

            <View style={styles.cardContent}>
                <Text style={styles.heading}>Castle Hill Montessori Academy</Text>
                <View>
                    <View style={styles.row}>
                        <Image
                            style={styles.icon}
                            source={IconLocation}
                        />
                        <Text>1 Kerrs Road, Castle Hill, NSW 2154</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.row, { width: '55 %' }]}>
                            <Image
                                style={styles.icon}
                                source={IconBaby}
                            />
                            <Text>90 children</Text>
                        </View>
                        <View style={styles.row}>
                            <Image
                                style={styles.icon}
                                source={IconWaitList}
                            />
                            <Text>48 waitlisted</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.row, { width: '55 %' }]}>
                            <Image
                                style={[styles.icon]}
                                source={IconKindi}
                            />
                            <Text style={styles.kindi}>KindiCare Basic</Text>
                        </View>
                        <View style={styles.row}>
                            <Image
                                style={styles.icon}
                                source={IconService}
                            />
                            <Text>4 services</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    centerCard: {
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginBottom: 15
    },
    image: {
        width: '100%',
        height: 80,
        resizeMode: 'contain',
    },
    cardContent: {
        padding: 15,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 8,
        marginVertical: 4
    },
    heading: {
        paddingBottom: 10,
        fontWeight: 'bold',
        fontSize: 18,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    kindi: {
        backgroundColor: '#E9F4FF',
        paddingHorizontal: 8,
        paddingVertical: 6,
        color: '#32A4FC',
        borderRadius: 6
    }
})

export default CentreCard