import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    Image
} from 'react-native';

import styles from './CentreDetailsStyles';
import IconBaby from '../../assets/images/ic-baby2.png';
import IconAbc from '../../assets/images/ic-abc.png';
import IconBag from '../../assets/images/ic-bag.png';
import IconFamily from '../../assets/images/ic-family.png';
import IconLuggage from '../../assets/images/ic-luggage.png';

const services = [
    {
        title: 'Long Day Care',
        months: '0 to 12 months',
        icon: IconBaby,
        price: '$112.00/full day'
    },
    {
        title: 'Pre-School/ Kindergarten',
        months: '0 to 12 months',
        icon: IconAbc,
        price: '$112.00/full day'
    },
    {
        title: 'Before & After School Care',
        months: '0 to 12 months',
        icon: IconBag,
        price: '$112.00/full day'
    },
    {
        title: 'Family Day Care',
        months: '0 to 12 months',
        icon: IconFamily,
        price: '$112.00/full day'
    },
    {
        title: 'Vacation Care',
        months: '0 to 12 months',
        icon: IconLuggage,
        price: '$112.00/full day'
    },
]

const ServiceItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.tabServiceItem}>
            <View style={styles.tabServiceImgArea}>
                <Image
                    source={item.icon}
                    style={styles.tabServiceImg}
                />
            </View>

            <View>
                <Text style={styles.tabServiceTitle}>{item.title}</Text>
                <Text style={styles.tabServiceMonths}>{item.months}</Text>
                <Text style={styles.tabServiceTitle}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

function Services(props) {
    return (
        <ScrollView style={styles.tabView}>
            {services && services.map((item, i) => (
                <ServiceItem key={i} item={item}/>
            ))}
        </ScrollView>
    );
}

export default Services;