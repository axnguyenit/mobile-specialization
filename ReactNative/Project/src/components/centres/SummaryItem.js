import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles/SummaryItemStyles';

function SummaryItem(props) {
  const { title, items } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      {items &&
        items.map((item, i) => (
          <View key={i} style={styles.spaceBetween}>
            <View style={styles.summaryLabel}>
              <Image source={item.icon} style={styles.summaryIcon} />
              <Text style={styles.summaryText}>{item.label}</Text>
            </View>
            <Text style={[styles.summaryText, { fontWeight: 'bold' }]}>
              {item.amount}
            </Text>
          </View>
        ))}
    </View>
  );
}

export default SummaryItem;
