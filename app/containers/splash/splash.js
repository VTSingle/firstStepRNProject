import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Button} from 'react-native-elements';
import * as numberActions from '../../actions/numberAction/numberAction';
import styles from './styles';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class Splash extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;
        return (
            <View>
                <Button
                    title='Press me'
                    onPress = {actions.increment}
                />
                <Text style = {styles.text}>When the counter is 5, the screen changes</Text>
                <Text style = {styles.count}>{state.numbers === 5 ? Actions.SingInPageScreen() : state.numbers}</Text>
            </View>
        );
    }    
}

export default connect(state => ({
        state: state
    }),
    (dispatch) => ({
        actions: bindActionCreators(numberActions, dispatch)
    })
)(Splash);

