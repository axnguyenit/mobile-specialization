import React, { useCallback, useMemo, useRef, useState  } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    ScrollView,
} from 'react-native';
import { BottomSheet } from 'react-native-btr';

import styles from './styles';
import Icon, { Icons } from '../../components/icons';
import { SelectCentre } from '../../components/bottom-sheet';
import IconCentre from '../../assets/images/ic-centre3.png';
import IconCentre2 from '../../assets/images/ic-centre.png';
import IconChart from '../../assets/images/ic-chart.png';
import IconFile from '../../assets/images/ic-booking.png';

const items = [
    {
        title: 'Applications',
        no: 17,
        name1: 'Open Application Value',
        name2: 'Total Waitlisted',
        name3: 'Waitlist Value',
        val1: '116,688,8',
        val2: '3',
        val3: '$29,749 p.a',
        icon: IconCentre,
        color: '#FB8429',
    },
    {
        title: 'Total Activities',
        no: 17,
        name1: 'Mailbox Received',
        name2: 'Mailbox Awaiting Reply',
        name3: 'Task Overdue',
        val1: '342',
        val2: '6',
        val3: '2',
        icon: IconChart,
        color: '#32A4FC' 
    },
    {
        title: 'Total Centres',
        no: 32,
        name1: 'Total Places',
        name2: 'Enrolment Coverage',
        name3: 'Average Enquiry Response Time',
        val1: '160',
        val2: '72%',
        val3: '24 hrs 36 mins',
        icon: IconFile,
        color: '#DB147F'
    },
]

const Dashboard = (props) => {
    const [visible, setVisible] = useState(false);

    const toggleVisibleBottomSheet = () => {
        setVisible(!visible);
    };
    return (
        <View style={[styles.flex1, { backgroundColor: '#E5E5E5' }]}>
            {/* <View style={styles.container}> */}
                <View style={styles.header}>
                    <View style={styles.row}>
                        <Image 
                            source={IconCentre2}
                            style={styles.headerImg}
                        />
                        <TouchableOpacity
                            style={styles.row}
                            onPress={toggleVisibleBottomSheet}
                        >
                            <Text style={{ marginHorizontal: 10, fontWeight: 'bold', color: '#FFF' }}>
                                Goodstart Early Learning ABC
                            </Text>

                            <Icon 
                                type={Icons.Feather}
                                name='chevron-down'
                                size={22}
                                color='#FFF'
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <Icon
                            type={Icons.Entypo}
                            name='add-to-list'
                            size={22}
                            color='#FFF'
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.cards}>
                    <ScrollView>
                    {items && items.map((item, i) => (
                        <View style={styles.card} key={i}>
                            <View style={styles.cardHeading}>
                                <View style={styles.row}>
                                    <Image
                                        source={item.icon}
                                        style={styles.cardImg}
                                    />
                                    <Text style={styles.cardTitle}>{item.title}</Text>
                                </View>
                                <Text style={[ styles.cardNo, { color: item.color }]}>{item.no}</Text>
                            </View>

                            <View style={{ padding: 5 }}>
                                <View style={[styles.row, { justifyContent: 'space-between' }]}>
                                    <Text style={{ width: '50%' }}>{item.name1}</Text>
                                    <Text style={{ color: '#000', fontWeight: 'bold', paddingVertical: 5 }}>{item.val1}</Text>
                                </View>
                                <View style={[styles.row, { justifyContent: 'space-between' }]}>
                                    <Text style={{ width: '50%' }}>{item.name2}</Text>
                                    <Text style={{ color: '#000', fontWeight: 'bold', paddingVertical: 5 }}>{item.val2}</Text>
                                </View>
                                <View style={[styles.row, { justifyContent: 'space-between' }]}>
                                    <Text style={{ width: '50%' }}>{item.name3}</Text>
                                    <Text style={{ color: '#000', fontWeight: 'bold', paddingVertical: 5 }}>{item.val3}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                    </ScrollView>
                </View>
                
                {/* Bottom Sheet */}
                <View style={styles.container}>
                    <BottomSheet
                        visible={visible}
                        onBackButtonPress={toggleVisibleBottomSheet}
                        onBackdropPress={toggleVisibleBottomSheet}
                    >
                        <SelectCentre 
                            onPress={toggleVisibleBottomSheet}
                        />
                    </BottomSheet>
                </View>
                {/* End Bottom Sheet */}
            {/* </View> */}
        </View>
    );
}

export default Dashboard;