import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Dimensions,
    ScrollView,
} from 'react-native';

import styles from './CentreDetailsStyles';
import Icon, { Icons } from '../../components/icons';

function Summary (props) {
    return (
        <ScrollView style={styles.tabView}>
            <Text>Summary</Text>
        </ScrollView>
    );
}

export default Summary;