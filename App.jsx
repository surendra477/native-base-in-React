import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NativeBaseProvider, Box, Center, Square, Circle, Container, Heading } from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
      <Center>
        <Container>
          <Heading>
            A component library for the
            <Text color="emerald.500"> React Ecosystem</Text>
          </Heading>
          <Text mt="3" fontWeight="medium">
            NativeBase is a simple, modular and accessible component library that
            gives you building blocks to build you React applications.
          </Text>
        </Container>
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({})

export default App;
