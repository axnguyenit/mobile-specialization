import React,{useState,useEffect} from 'react';
import { View,TouchableOpacity,Text,Dimensions,ScrollView,Image,StyleSheet} from 'react-native';


function RatingsAndReviews(props) {
    const [event1,setEvent1]=useState(true);
    const [event2,setEvent2]=useState(true);
    const [event3,setEvent3]=useState(true);
    const dropDown1=()=>{
        if(event1==true){
            setEvent1(false)
        }
        else{
            setEvent1(true)
        }
    }
    const dropDown3=()=>{
        if(event3==true){
            setEvent3(false)
        }
        else{
            setEvent3(true)
        }
    }
    const dropDown2=()=>{
        if(event2==true){
            setEvent2(false)
        }
        else{
            setEvent2(true)
        }
    }
    return (
        <ScrollView>
        {event1
        ?
        <TouchableOpacity onPress={()=>dropDown1()}>
        <View style={styles.ratingContainer}>
             <View style={styles.ratingLine1}>
             <Image style={styles.raitingImage1} source={require('../../assets/Rating_and_Review/ic-KindiCare.png')}/>
             <View style={styles.rightItem}>
                 <Text style={styles.titleRight1}>
                     KindiCare Rating
                 </Text>
                 <Text style={styles.content}>
                     Very Good
                 </Text>
             </View>
             <Image style={styles.rightImage1} source={require('../../assets/Rating_and_Review/CaretDown.png')}/>
             </View>
        </View>   
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={()=>dropDown1()}>
        <View style={styles.ratingContainer}>
             <View style={styles.ratingLine1}>
             <Image style={styles.raitingImage1} source={require('../../assets/Rating_and_Review/ic-KindiCare.png')}/>
             <View style={styles.rightItem}>
                 <Text style={styles.titleRight1}>
                     KindiCare Rating
                 </Text>
             </View>
             <Image style={styles.rightImage2} source={require('../../assets/Rating_and_Review/ic-caret-up.png')}/>
        </View>
        <View style={styles.ratingLine2}>
        <View style={styles.headerItem1}>
        <Image style={styles.raitingItemImage1} source={require('../../assets/Rating_and_Review/KindiCare_Rating-removebg-preview.png')}/>
        <Text style={styles.ratingItemText1}>
            Very Good
        </Text>
        </View>
        <Image source={require('../../assets/Rating_and_Review/Group_4519-removebg-preview.png')} />
        <View style={styles.contentItem1}>
        <Text style={styles.contentText1}>
        The KindiCare Rating for this service of <Text style={{color:'#32A4FC'}}>8.4</Text> is lower than the average KindiCare Rating for the area of <Text style={{color:'#32A4FC'}}>8.6</Text>, and represents the good quality of service provided
        </Text>
        </View>
        </View>
        </View>   
        </TouchableOpacity>
        }
        {event2?
            <TouchableOpacity onPress={()=>dropDown2()}>
        <View style={styles.ratingContainer}>
             <View style={styles.ratingLine1}>
             <Image style={styles.raitingImage1} source={require('../../assets/Rating_and_Review/ic-star-fill.png')}/>
             <View style={styles.rightItem}>
                 <Text style={styles.titleRight1}>
                     User Reviews
                 </Text>
                 <Text style={styles.content}>
                    4.5/5
                 </Text>
             </View>
             <Image style={styles.rightImage1} source={require('../../assets/Rating_and_Review/CaretDown.png')}/>
             </View>
        </View>   
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={()=>dropDown2()}>
        <View style={styles.ratingContainer}>
             <View style={styles.ratingLine1}>
             <Image style={styles.raitingImage1} source={require('../../assets/Rating_and_Review/ic-star-fill.png')}/>
             <View style={styles.rightItem}>
                 <Text style={styles.titleRight1}>
                     User Reviews
                 </Text>
             </View>
             <Image style={styles.rightImage2} source={require('../../assets/Rating_and_Review/ic-caret-up.png')}/>
             </View>




             <View style={styles.item2}>
             <Image  source={require('../../assets/Rating_and_Review/Frame_35579-removebg-preview.png')}/>
            
             <Text style={styles.itemContent2}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
</Text>
<View style={styles.listImage}>
<Image style={styles.moreImage1}  source={require('../../assets/Rating_and_Review/Rectangle_3334-removebg-preview.png')}/>
<Image  style={styles.moreImage1} source={require('../../assets/Rating_and_Review/Rectangle_3335-removebg-preview.png')}/>
<Image style={styles.moreImage1} source={require('../../assets/Rating_and_Review/Rectangle_3336-removebg-preview.png')}/>
<View style={styles.moreImage}>
<Image style={{opacity:0.4, backgroundColor:'black',borderRadius:8}}  source={require('../../assets/Rating_and_Review/Rectangle_3336-removebg-preview.png')}/>
<Text style={styles.moreText}>+3</Text>
</View>
</View>
             <Image  source={require('../../assets/Rating_and_Review/Frame_35579__1_-removebg-preview.png')}/>
             <Text style={styles.itemContent2}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
</Text>
<View style={styles.listImage}>
<Image style={styles.moreImage1} source={require('../../assets/Rating_and_Review/Rectangle_3334-removebg-preview.png')}/>
<Image style={styles.moreImage1} source={require('../../assets/Rating_and_Review/Rectangle_3335-removebg-preview.png')}/>
<Image style={styles.moreImage1}  source={require('../../assets/Rating_and_Review/Rectangle_3336-removebg-preview.png')}/>
<View style={styles.moreImage}>
<Image style={{opacity:0.4, backgroundColor:'black',borderRadius:8}}  source={require('../../assets/Rating_and_Review/Rectangle_3336-removebg-preview.png')}/>
<Text style={styles.moreText}>+3</Text>
</View>
</View>
</View>




        </View>   
        </TouchableOpacity>
        }
       {event3?
        <TouchableOpacity onPress={()=>dropDown3()}>
        <View style={styles.ratingContainer}>
             <View style={styles.ratingLine1}>
             <Image style={styles.raitingImage1} source={require('../../assets/Rating_and_Review/NQS_Rating-removebg-preview.png')}/>
             <View style={styles.rightItem}>
                 <Text style={styles.titleRight1}>
                 NQS Raiting
                 </Text>
                 <Text style={styles.content}>
                 Last reviewed 21 September 2017
                 </Text>
             </View>
             <Image style={styles.rightImage1} source={require('../../assets/Rating_and_Review/CaretDown.png')}/>
             </View>
        </View>   
        </TouchableOpacity>
        : <TouchableOpacity onPress={()=>dropDown3()}>
        <View style={styles.ratingContainer}>
             <View style={styles.ratingLine1}>
             <Image style={styles.raitingImage1} source={require('../../assets/Rating_and_Review/NQS_Rating-removebg-preview.png')}/>
             <View style={styles.rightItem}>
                 <Text style={styles.titleRight1}>
                    NQS Raiting
                 </Text>
             </View>
             <Image style={styles.rightImage2} source={require('../../assets/Rating_and_Review/ic-caret-up.png')}/>
             </View>
             <View style={styles.item3}>
                 <View style={styles.headerItem3}>
                     <Image style={styles.imageItem3} source={require('../../assets/Rating_and_Review/image_19-removebg-preview.png')}/>
                     <Text style={styles.textItem3}>Last Reviewed 01 December 2019</Text>
                 </View>
                 <View style={styles.bodyItem3}>
                     <View style={styles.lineItem3}>
                         <Text style={styles.titleItem3}>
                             1. Education program and practice
                         </Text>
                         <Text style={styles.contentItem3}>
                         Exceeding NQS
                         </Text>
                     </View>
                     <View style={styles.lineItem3}>
                         <Text style={styles.titleItem3}>
                             2. Children's health and safety
                         </Text>
                         <Text style={styles.contentItem3}>
                             Exceeding NQS
                         </Text>
                     </View>
                     <View style={styles.lineItem3}>
                         <Text style={styles.titleItem3}>
                            3. Physical environment
                         </Text>
                         <Text style={styles.contentItem3}>
                         Exceeding NQS
                         </Text>
                     </View>
                     <View style={styles.lineItem3}>
                         <Text style={styles.titleItem3}>
                             4. Staffing arrangement
                         </Text>
                         <Text style={styles.contentItem3}>
                             Exceeding NQS
                         </Text>
                     </View>
                     <View style={styles.lineItem3}>
                         <Text style={styles.titleItem3}>
                             5. Relationships with children
                         </Text>
                         <Text style={styles.contentItem3}>
                         Exceeding NQS
                         </Text>
                     </View>
                     <View style={styles.lineItem3}>
                         <Text style={styles.titleItem3}>
                             6. Collaborate partnerships
                         </Text>
                         <Text style={styles.contentItem3}>
                         Exceeding NQS
                         </Text>
                     </View>
                 </View>
             </View>
        </View>   
        </TouchableOpacity>
       }
        </ScrollView>  
    );
}

export default RatingsAndReviews;
const styles=StyleSheet.create({
    ratingContainer:{
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginRight: 16,
        marginLeft:16,
        borderRadius: 8,
        backgroundColor:'white',
        marginBottom:16
    },
    ratingLine1:{
        flexDirection:'row',
        flex:0,
        alignItems:'center',
    },
    raitingImage1:{
        width:40,
        height:40,
    },
    rightItem:{
        marginLeft:20,
        width:265,
    },
    titleRight1:{
        fontSize:16,
        fontWeight:'bold'
    },
    content:{
        fontSize:16,
        marginTop:5,
        color:'grey'
    },
    rightImage1:{
        marginTop:-25
},
rightImage2:{
    marginTop:4
},
ratingLine2:{
    borderTopWidth:2,
    borderColor:'#E5E5E5',
    marginTop:20,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
    alignItems:'center',
    paddingTop:20
},
headerItem1:{
    alignItems:'center',
    paddingBottom:20
}
,
ratingItemText1:{
    fontSize:18,
    fontWeight:'bold'
},
contentItem1:{
    marginTop:30,
    alignItems:'center',
    justifyContent:'center',
    width:280
},
contentText1:{
    fontSize:16,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    lineHeight: 30,
},
item2:{
    borderTopWidth:2,
    borderColor:'#E5E5E5',
    marginTop:20,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
    paddingTop:20
},
itemContent2:{
    fontSize:16,
    marginTop:20,
    lineHeight:25,
},
listImage:{
    flexDirection:'row',
    marginTop:10,
    borderBottomWidth:2,
    borderColor:'#E5E5E5',
    marginBottom:20
},
moreImage1:{
    marginRight:10,
},
moreText:{
    position:'absolute',
    fontSize:20,
    color:'white',
    marginLeft:21,
    marginTop:20 
},
item3:{
    borderTopWidth:2,
    borderColor:'#E5E5E5',
    marginTop:20,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
    paddingTop:20
},
headerItem3:{
    justifyContent:'center',
    alignItems:'center'
},
imageItem3:{
    width:160,
    height:100
},
textItem3:{
    fontSize:14,
    color:'grey',
    marginBottom:30
},
lineItem3:{
    flexDirection:'row'
},
titleItem3:{
    fontSize:16,
    lineHeight:30,
    width:'60%',
    marginLeft:10
},
contentItem3:{
    width:'40%',
    color:'#FB8429',
    fontSize:16
}
})
