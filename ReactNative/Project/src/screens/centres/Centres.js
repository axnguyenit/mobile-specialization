import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { BottomSheet } from 'react-native-btr';

import styles from './CentresStyles';
import Icon, { Icons } from '../../components/icons';
import { InputSearch } from '../../components/input';
import { CentreCard } from '../../components/card';
import { SelectCentre } from '../../components/bottom-sheet';
import IconCentre from '../../assets/icons/centres/ic-centre1.png';
import IconCentre2 from '../../assets/icons/centres/ic-centre2.png';
import IconMap from '../../assets/icons/centres/ic-map.png';
import IconDollar from '../../assets/icons/centres/ic-dollar.png';
import IconWaitlist from '../../assets/icons/centres/ic-waitlist.png';
import IconFilter from '../../assets/icons/centres/ic-filter.png';

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
    color: '#FFF4EC',
  },
  {
    title: 'Est. Earning',
    content: '$3,465,000',
    icon: IconDollar,
    color: '#E9F4FF',
  },
  {
    title: 'Waitlist Value',
    content: '$3,465',
    icon: IconWaitlist,
    color: '#FEEFEF',
  },
];

const Centres = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibleBottomSheet = () => {
    setVisible(!visible);
  };
  return (
    <View style={[styles.flex1, styles.bg]}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Image source={IconCentre} style={styles.headerImg} />
          <TouchableOpacity
            style={styles.row}
            onPress={toggleVisibleBottomSheet}
          >
            <Text style={styles.headingSelect}>All Centres</Text>
            <Icon
              type={Icons.Feather}
              name="chevron-down"
              size={22}
              color="#FFF"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Icon type={Icons.Entypo} name="add-to-list" size={22} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* Total Card */}
      <View style={[styles.row]}>
        <ScrollView
          style={styles.module}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={[styles.row, styles.pr20]}>
            {items.map((item, index) => (
              <View key={index} style={styles.totalCard}>
                <View style={styles.row}>
                  <View
                    style={[styles.imgArea, { backgroundColor: item.color }]}
                  >
                    <Image source={item.icon} style={styles.cardImg} />
                  </View>
                  <Text>{item.title}</Text>
                </View>
                <View>
                  <Text style={styles.value}>{item.content}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      {/* End Total Card */}

      {/* Centre Card */}
      <ScrollView>
        <View style={styles.pb50}>
          <View style={[styles.row, styles.searchBox]}>
            <View style={styles.inputSearch}>
              <InputSearch placeholder="Search Centre Name" />
            </View>
            <TouchableOpacity style={styles.filter}>
              <Image source={IconFilter} style={styles.cardImg} />
            </TouchableOpacity>
          </View>

          <View style={styles.px15}>
            <CentreCard />
            <CentreCard />
            <CentreCard />
            <CentreCard />
          </View>
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
          <SelectCentre onPress={toggleVisibleBottomSheet} />
        </BottomSheet>
      </View>
      {/* End Bottom Sheet */}
      {/* </View> */}
    </View>
  );
};

export default Centres;
