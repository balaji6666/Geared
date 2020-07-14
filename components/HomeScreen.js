import React from 'react';
import {ImageBackground,StyleSheet,TouchableOpacity,Text,View,Image} from 'react-native';

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    },


    SubmitButtonStyle: {
 
        marginTop:450,
        paddingTop:8,
        paddingBottom:15,
        marginLeft:109,
        marginRight:30,
        backgroundColor:'#FF0000',
        borderRadius:100,
        width : 145,
        height :35 ,
        borderWidth: 1,
        borderColor: '#fff'
      },
     
      TextStyle:{
          color:'#fff',
          textAlign:'center',
      }
});



class Home extends React.Component
{
    constructor(props)
    {
      super(props);
  
  
      
      this.state={
                loading: false,
        
        page: 1,
        seed: 1,
        error: null,
        refreshing: false
      };
    }
    
    
    render()
    {
        const { navigate } = this.props.navigation;


        return(
            <ImageBackground 
          source={require('./carsImages/logo3.png')}
          style={{ flex: 1,
            width: null,
            height: null,
            }}
        >
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity = { .5 }
                    onPress={() => navigate('Main')}
                 >
 
            <Text style={styles.TextStyle}> GET STARTED </Text>
            
             </TouchableOpacity>   
                </ImageBackground >
        );
    }
}

export default Home;