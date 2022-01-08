import React, { useEffect, useState } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Dimensions,
    ScrollView,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import styles from './CentreDetailsStyles';
import Header from '../../components/header';
import Summary from './Summary';
import CentreInformation from './CentreInformation';
import Hours from './Hours';
import Services from './Services';
import Features from './Features';
import RatingsAndReviews from './RatingsAndReviews';
import Marketing from './Marketing';

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
    summary: Summary,
    centreInformation: CentreInformation,
    hours: Hours,
    services: Services,
    features: Features,
    ratingsAndReviews: RatingsAndReviews,
    marketing: Marketing,
});

const routes = [
    { key: 'summary', title: 'Summary' },
    { key: 'centreInformation', title: 'Centre Information' },
    { key: 'hours', title: 'Hours ' },
    { key: 'services', title: 'Services' },
    { key: 'features', title: 'Features' },
    { key: 'ratingsAndReviews', title: 'Ratings and Reviews' },
    { key: 'marketing', title: 'Marketing' },
];

const CentreDetails = (props) => {
    const [index, setIndex] = useState(0);
    const [bg, setBg] = useState([]);

    const activeTab = () => {
        const bg = routes.map((e, i) =>
            i === index ? '#FFF' : '#E5E5E5'
        )
        setBg(bg)
    }

    useEffect(() => {
        activeTab()
    }, [index])

    const renderTabBar = () => {
        return (
            <View style={styles.tabBar}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {routes.map((route, i) => (
                        <TouchableOpacity
                            key={i}
                            style={[
                                styles.tabItem,
                                { backgroundColor: bg[i] }
                            ]}
                            onPress={() => setIndex(i)}
                        >
                            <Text style={styles.tabText}>
                                {route.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        );
    };

    return (
        <View style={styles.flex1}>
            <Header/>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={renderTabBar}
                style={styles.container}
            />
        </View>
    );
}

export default CentreDetails;