
import { Box, Text } from 'native-base';
import React, { useEffect } from 'react';

interface TemperatureProps {
  temperatura: string;
}

const Temperature = ({ temperatura }: TemperatureProps) => {

  useEffect(() => { }, []);

  return (
    <Box w="45%" mx={2} mt={2} borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
      <Text mt="4" fontSize="sm" color="coolGray.700" textAlign="center" marginBottom={2}>
        Temperatura
      </Text>
      <Text mt="4" fontSize="4xl" color="coolGray.700" textAlign="center" marginTop="-1" ml={2}>
        25º
      </Text>
    </Box>
  );
};

export default Temperature;