import React ,{Component}from 'react';
import { View, FlatList } from 'react-native';
import { ListItem ,List , SearchBar} from 'react-native-elements';
import { StyleSheet,Text, Alert } from 'react-native';
import {CARS } from '../shared/cars';



class Main extends Component {

  constructor(props)
  {
    super(props);


    
    this.state={
      cars : CARS,
      loading: false,
      
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }
  

  

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

    
    render()
    {
      

        FlatListItemSeparator = () => {
            return (
              //Item Separator
              <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>
            );
          };
    

        styles = StyleSheet.create({
            MainContainer: {
              justifyContent: 'center',
              flex: 1,
              marginLeft: 10,
              marginRight: 10,
              marginBottom: 10,
              marginTop: 30,
            },
          
            item: {
              padding: 10,
              fontSize: 18,
              height: 44,
            },
          });

      renderMenuItem = ({item, index}) => {
        const { navigate } = this.props.navigation;
        const character = {
          carId : item.id
        }
        return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={"Engine : "+item.engines+"\t Segment : "+ item.segment}
                    hideChevron={true}
                    leftAvatar={{ source: item.image}}
                    onPress={() => navigate('Details', { item: character })}
                  />
        );
    };

    return (
        <View style={styles.MainContainer}>
            <FlatList 
                data={this.state.cars}
                // ItemSeparatorComponent = {FlatListItemSeparator}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderHeader}
                ListFooterComponent={this.renderFooter}
                />
            </View>
    );
    }
}


export default Main;