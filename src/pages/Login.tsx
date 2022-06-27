
import { useNavigation } from '@react-navigation/native';
import { Button, Center, Heading, Input, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import User from '../data/auth';
import { DashboardScreenProps } from '../utils/navigation';

const Login = () => {
  const [password, setPassword] = useState("");
  const onPasswordChange = (password: string) => setPassword(password);

  const navigation = useNavigation<DashboardScreenProps>();

  const onLoginPress = () => {
    if (password !== User.password) {
      errorAlert();
    }
    navigation.navigate("Dashboard");
    console.log("check")
  }

  const errorAlert = () => {
    Alert.alert(
      "Erro de autenticação",
      "Dados errados",
      [{ text: "OK" }]
    );
  }

  console.log(password);

  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      marginTop={-100}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Heading size="lg">Sensing Security</Heading>
        <Text fontSize={16} my={3}>Password</Text>
        <Input type="password" onChangeText={onPasswordChange} my={3} variant="rounded" size="lg" textAlign="center" mx="4" keyboardType="number-pad" enablesReturnKeyAutomatically />
        <Button minWidth="90%" rounded="full" my={1} onPress={onLoginPress}>Entrar</Button>
      </VStack>
    </Center>
  );
};

export default Login;