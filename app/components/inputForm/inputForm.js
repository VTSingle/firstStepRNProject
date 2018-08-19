import React, { Component } from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FormInput } from 'react-native-elements';

class inputForm extends Component {

    render() {

        const {textName, textLastName, textEmail, password } = this.props;

        return (
            <View>
                <FormInput
                    placeholder={textName}
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                />
                <FormInput
                    placeholder={textLastName}
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />
                <FormInput
                    placeholder={textEmail}
                    shake={true}
                />
                <FormInput
                    placeholder={password}
                    errorStyle={{ color: 'red' }}
                    errorMessage='ENTER A VALID ERROR HERE'
                />
            </View>
        );
    }
}

export default inputForm;