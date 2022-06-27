
import { Box, Center, HStack, Image, Switch, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { fetchWrapper } from '../utils/api';

interface ISensor {
  hora: string;
  distancia: string;
  foto: string;
  id: number;
}

const Panel = () => {
  const [sensors, setSensors] = useState<ISensor[]>([]);
  const [enable, setEnable] = useState(false);

  const getSensors = async () => {
    try {
      const data = await fetchWrapper(`/alarme/1`, {
        method: "PATCH",
        body: JSON.stringify({
          on: enable ? true : false
        }),
      });
      console.log(data);
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  useEffect(() => {
    getSensors();
  }, [enable])

  const onEnableSystemChange = () => setEnable(!enable);


  return (
    <Center>
      <HStack alignItems="center" space={4}>
        <Text>System</Text>
        <Switch size="sm" onChange={onEnableSystemChange} />
      </HStack>
    </Center>
  );
};

export default Panel;