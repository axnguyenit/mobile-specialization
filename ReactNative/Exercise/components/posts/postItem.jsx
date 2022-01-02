import React from "react";
import styles from "./postsStyle";
import {
    View,
    Text,
    Image,
} from "react-native";

const PostItem = ({item}) => {
    return (
        <View style={styles.postItem}>
            <View>
                <Image style={styles.img} source={item.img} />
            </View>

            <View>
                <Text
                    style={styles.heading}
                    numberOfLines={2}
                >
                    {item.title}
                </Text>
            </View>

            <View>
                <Text
                    numberOfLines={2}
                >
                    {item.desc}
                </Text>
            </View>

            <View style={styles.info}>
                <Text
                    style={{ 
                        fontSize: 13
                    }}
                >
                    {item.time}
                </Text>
                <Text
                    style={{ 
                        color: "#D00C04",
                        fontWeight: "bold"
                    }}
                >
                    {`SPA-${item.id}`}
                </Text>
            </View>
        </View>
    )
}

export default PostItem