import React from "react";
import styles from "./postsStyle";
import PostItem from "./postItem";
import {
    View,
    Text,
    ScrollView
} from "react-native";

const arr = [
    {
        id: 1,
        img: require('../../assets/images/img1.png'),
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam soluta explicabo quo. Delectus saepe totam deserunt quos error. Ex dolorem fugit eos tenetur illum vero nesciunt itaque fuga dolorum.",
        time: "15:00, 01 Jan 2022",
    },
    {
        id: 2,
        img: require('../../assets/images/img2.png'),
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam soluta explicabo quo. Delectus saepe totam deserunt quos error. Ex dolorem fugit eos tenetur illum vero nesciunt itaque fuga dolorum.",
        time: "15:00, 01 Jan 2022",
    },
    {
        id: 3,
        img: require('../../assets/images/img1.png'),
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam soluta explicabo quo. Delectus saepe totam deserunt quos error. Ex dolorem fugit eos tenetur illum vero nesciunt itaque fuga dolorum.",
        time: "15:00, 01 Jan 2022",
    },
    {
        id: 4,
        img: require('../../assets/images/img2.png'),
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam soluta explicabo quo. Delectus saepe totam deserunt quos error. Ex dolorem fugit eos tenetur illum vero nesciunt itaque fuga dolorum.",
        time: "15:00, 01 Jan 2022",
    },
    {
        id: 5,
        img: require('../../assets/images/img1.png'),
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam soluta explicabo quo. Delectus saepe totam deserunt quos error. Ex dolorem fugit eos tenetur illum vero nesciunt itaque fuga dolorum.",
        time: "15:00, 01 Jan 2022",
    },
    {
        id: 6,
        img: require('../../assets/images/img2.png'),
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam soluta explicabo quo. Delectus saepe totam deserunt quos error. Ex dolorem fugit eos tenetur illum vero nesciunt itaque fuga dolorum.",
        time: "15:00, 01 Jan 2022",
    },
]

const Posts = () => {
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.title}>FlatList And ScrollView</Text>
            </View>
            <ScrollView style={styles.containerFluid}>
                <View>
                    <Text style={styles.subTitle}>My Posts</Text>
                </View>

                <View>
                    {
                        arr && arr.map(item => <PostItem key={item.id} item={item}/>)
                    }
                </View>
                <View style={{ height: 90 }} />
            </ScrollView>
        </View>
    )
}

export default Posts