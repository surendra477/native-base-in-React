import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { AirbnbRating, Card, Dialog, Header } from '@rneui/themed';

import LinearGradient from 'react-native-linear-gradient';


const App = () => {
  return (
    <View>
      <AirbnbRating />
      <Card>
        <Text>Word of the Day</Text>
        <Text h4>be-nev-o=lent</Text>
        <Text>adjective</Text>
        <Text>
          well meaning and kindly.
         
          {'"a benevolent smile"'}
        </Text>
        <Button title="Learn More">
          Learn More
        </Button>
      </Card>
      <Header
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['red', 'pink'],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({})

export default App;
