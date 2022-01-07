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
import { InputSearch } from '../../components/input';
import { CentreCard } from '../../components/card';
import { SelectCentre } from '../../components/bottom-sheet';
import IconCentre from '../../assets/images/ic-centre.png';
import IconCentre2 from '../../assets/images/ic-centre2.png';
import IconMap from '../../assets/images/ic-map.png';
import IconDollar from '../../assets/images/ic-dollar.png';
import IconWaitlist from '../../assets/images/ic-waitlist.png';
import IconFilter from '../../assets/images/ic-filter.png';

const items = [
    {
        title: 'Total Centres',
        content: '122',
        icon: IconCentre2,
        color: '#FFF0FB',
    },
    {
        title: 'Total Places',
        content: '3200',
        icon: IconMap,
        color: '#FFF4EC' 
    },
    {
        title: 'Est. Earning',
        content: '$3,465,000',
        icon: IconDollar,
        color: '#E9F4FF'
    },
    {
        title: 'Waitlist Value',
        content: '$3,465',
        icon: IconWaitlist,
        color: '#FEEFEF'
    },

]

const Centres = (props) => {
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
                            source={IconCentre}
                            style={styles.headerImg}
                        />
                        <TouchableOpacity
                            style={styles.row}
                            onPress={toggleVisibleBottomSheet}
                        >
                            <Text style={{ marginHorizontal: 10, fontWeight: 'bold', color: '#FFF' }}>
                                All Centres
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

                {/* Total Card */}
                <View style={[styles.row]}>
                    <ScrollView 
                        style={styles.module} 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            items.map((item, index) => (
                                <View key={index} style={styles.totalCard}>
                                    <View style={styles.row}>
                                        <View style={[styles.imgArea, { backgroundColor: item.color, }]}>
                                            <Image 
                                                source={item.icon}
                                                style={styles.cardImg}
                                            />
                                        </View>
                                        <Text>{item.title}</Text>
                                    </View> 
                                    <View>
                                        <Text style={{ 
                                            fontSize: 22,
                                            fontWeight: 'bold',
                                            marginTop: 5
                                        }}>{item.content}</Text>
                                    </View>
                                </View>
                            ))
                        }
                        <View style={{ width: 20 }}/>
                    </ScrollView>
                </View>
                {/* End Total Card */}

                {/* Centre Card */}
                <ScrollView>
                    <View style={[styles.row, styles.searchBox]}>
                        <View style={{ width: '82%' }}>
                            <InputSearch 
                                placeholder='Search Centre Name'
                            />
                        </View>
                        <TouchableOpacity style={styles.filter}>
                            <Image
                                source={IconFilter}
                                style={styles.cardImg}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingHorizontal: 15 }}>
                        <CentreCard />
                        <CentreCard />
                        <CentreCard />
                        <CentreCard />
                    </View>
                </ScrollView>
                {/* End Centre Card */}
                
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

export default Centres;