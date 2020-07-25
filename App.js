import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as tf from '@tensorflow/tfjs';
import {fetch} from '@tensorflow/tfjs-react-native';

class App extends React.Component {
  state = {
    isTfReady: false,
  };

  async componentDidMount() {
    await tf.ready();
    this.setState({
      isTfReady: true,
    });

    //Output in Expo console
    console.log(this.state.isTfReady);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>TFJS ready? {this.state.isTfReady ? <Text>Yes</Text> : ''}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
