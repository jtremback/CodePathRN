/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  requireNativeComponent
} = React;

var Stepper = requireNativeComponent('Stepper', null);

var CodePathRN = React.createClass({
  getInitialState() {
    return { stepperValue: 3 }
  },
  onStepperChange (e) {
    this.setState({ stepperValue: e.nativeEvent.value })
  },
  render: function() {
    var num = this.state.stepperValue
    console.log(num)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {num}
        </Text>
        <Stepper style={styles.stepper}
          onChange={this.onStepperChange}
        />
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  stepper: {
    width: 100,
    height: 50
  }
});

AppRegistry.registerComponent('CodePathRN', () => CodePathRN);
