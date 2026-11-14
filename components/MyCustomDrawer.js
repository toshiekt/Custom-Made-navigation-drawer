import React, {useState, useEffect} from 'react';
import {ImageBackground, Text, View, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';
const MyCustomDrawer = (props) => {
    return(
        < View style ={{ flex:1}}>


            {/* Header */}
             <ImageBackground source={require('../assets/bg2.jpg')} style={{paddingTop: 50, paddingBottom: 30}}>
             

             {/* Circular Profile Picture _starts */}
             <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                 <View style = {{borderColor: '#fff', borderWidth:3 , borderRadius: 43}}>
                 
                 <Image source ={require('../assets/pro.jpg')} style = {{width:50, height:80, borderRadius:70}}/>  
                 </View>
                 
             
             </View>
             {/* Circular Profile Picture _ends */}
             
             <View style= {{justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
                <Text style={{fontSize: 17, color: '#fff',}}>Kenneth Njue</Text>
             
             </View>
             </ImageBackground>

             
            {/* The Navigation  */}
            <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            </DrawerContentScrollView>


            {/* Footer */}
            <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#cccccc'}}>

             <View style={{FlexDirection: 'row', alignItems: 'center'}}>
             <Ionicons name="share-social-outline" size={22} color= "#d2066c"/>
              <Text>Tell a friend</Text>
             </View>

              <View style={{FlexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} color= "#d2066c"/>
              <Text>Sign Out</Text>
              </View>
            </View>
            
            
        </View>
    );
}

export default MyCustomDrawer;