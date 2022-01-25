import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { BottomSheet } from 'react-native-btr';

import styles from './styles';
import Icon, { Icons } from '../../components/icons';
import { SelectCentre } from '../../components/bottom-sheet';
import IconCentre from '../../assets/icons/centres/ic-centre1.png';
import IconCentre2 from '../../assets/icons/dashboard/ic-centre.png';
import IconChart from '../../assets/icons/dashboard/ic-chart.png';
import IconFile from '../../assets/icons/dashboard/ic-booking.png';
import useFireStore from '../../hooks/useFireStore';
import { useDispatch } from 'react-redux';
import { setCentres } from '../../redux/centreSlice';

const items = [
  {
    title: 'Applications',
    no: 17,
    name1: 'Open Application Value',
    name2: 'Total Waitlisted',
    name3: 'Waitlist Value',
    val1: '116,688,8',
    val2: '3',
    val3: '$29,749',
    icon: IconCentre2,
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
    color: '#32A4FC',
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
    color: '#DB147F',
  },
];

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const centres = useFireStore('centres');

  const toggleVisibleBottomSheet = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    centres && dispatch(setCentres(centres));
  }, [centres]);

  return (
    <View style={[styles.flex1]}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Image source={IconCentre} style={styles.headerImg} />
          <TouchableOpacity
            style={styles.row}
            onPress={toggleVisibleBottomSheet}
          >
            <Text style={styles.centreName}>Goodstart Early Learning ABC</Text>

            <Icon
              type={Icons.Feather}
              name='chevron-down'
              size={22}
              color='#FFF'
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Icon type={Icons.Entypo} name='add-to-list' size={22} color='#FFF' />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.cardScroll}>
        <View style={styles.cards}>
          {items &&
            items.map((item, i) => (
              <View style={styles.card} key={i}>
                <View style={styles.cardHeading}>
                  <View style={styles.row}>
                    <Image source={item.icon} style={styles.cardImg} />
                    <Text style={styles.cardTitle}>{item.title}</Text>
                  </View>
                  <Text style={[styles.cardNo, { color: item.color }]}>
                    {item.no}
                  </Text>
                </View>

                <View>
                  <View style={styles.spaceBetween}>
                    <Text style={styles.centreTitle}>{item.name1}</Text>
                    <Text style={styles.centreVal}>{item.val1}</Text>
                  </View>
                  <View style={styles.spaceBetween}>
                    <Text style={styles.centreTitle}>{item.name2}</Text>
                    <Text style={styles.centreVal}>{item.val2}</Text>
                  </View>
                  <View style={styles.spaceBetween}>
                    <Text style={styles.centreTitle}>{item.name3}</Text>
                    <Text style={styles.centreVal}>{item.val3}</Text>
                  </View>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>

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
    </View>
  );
};

export default Dashboard;
