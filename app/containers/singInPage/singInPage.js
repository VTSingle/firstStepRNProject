import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FormInput } from 'react-native-elements';

class SingInPage extends Component {

    render() {

        return (
            <View>
                <FormInput
                    placeholder='INPUT WITH ICON'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                />
                <FormInput
                    placeholder='INPUT WITH CUSTOM ICON'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />
                <FormInput
                    placeholder='INPUT WITH SHAKING EFFECT'
                    shake={true}
                />
                <FormInput
                    placeholder='INPUT WITH ERROR MESSAGE'
                    errorStyle={{ color: 'red' }}
                    errorMessage='ENTER A VALID ERROR HERE'
                />
            </View>
        );
    }

}

export default SingInPage;