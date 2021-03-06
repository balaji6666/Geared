import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Card } from 'react-native-elements';
import {CARS} from '../shared/cars';

// function RenderCar(props)
// {
//     const car = props.car;

//     if(car!= null)
//     {
//         return(
//             <Card
//                 featuredTitle = {car.name}
//                 image = {require('./carsImages/Roadster.jpg')}
//              >
//                 <Text style={{margin: 10}}>
//                         {car.description}
//                 </Text>
//              </Card>
//         );
//     }
//     else
//     {

//         return (<View></View>);
//     }
// }

class CarDetails extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            cars : CARS
        };
    }
    
   render()
   {

    

        const RenderCar = ({car}) => {
            
            if(car!= null)
            {
                return(
                    <Card
                        featuredTitle = {car.name}
                        image = {car.image}
                     >
                        <Text style={{margin: 10}}>
                                {car.description}
                        </Text>
                        <Text style={{margin: 10}}>
                                {"Body Style\t:\t"+car.body_style}
                        </Text>
                        <Text style={{margin: 10}}>
                                {"Engine\t:\t"+car.engines}

                        </Text>

                        <Text style={{margin: 10}}>
                                {"Generations\t:\t"+car.generations}

                        </Text>

                        <Text style={{margin: 10}}>
                                {"Segment\t:\t"+car.segment}

                        </Text>

                     </Card>
                );
            }
            else
            {
        
                return (<View></View>);
            }

        };
    
        const { route } = this.props
        const { item } = route.params
        const { carId } = item
    // const carId = this.props.navigation.getParam('item','');
    return(<RenderCar car = {this.state.cars[+carId]} />);
   }
}

export default CarDetails;
