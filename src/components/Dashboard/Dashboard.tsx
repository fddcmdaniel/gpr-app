
import { Box, Button, Center, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { LineChart } from 'react-native-chart-kit';
import { fetchWrapper } from '../../utils/api';
import { Dimensions } from 'react-native';
import Humidity from './Humidity';
import Temperature from './Temperature';
import TemperatureChart from '../Charts/TemperatureChart';
import HumityChart from '../Charts/HumityChart';
import { useNavigation } from '@react-navigation/native';
import { AlarmDetailsScreenProps } from '../../utils/navigation';


const Mokcs = [
  {
    id: -1,
    hora: "",
    temperatura: "21",
    humidade: "32"
  },
  {
    id: -1,
    hora: "",
    temperatura: "24",
    humidade: "36"
  },
  {
    id: -1,
    hora: "",
    temperatura: "30",
    humidade: "45"
  },
  {
    id: -1,
    hora: "",
    temperatura: "19",
    humidade: "39"
  },
  {
    id: -1,
    hora: "",
    temperatura: "34",
    humidade: "54"
  }
]

const DefaultDHT11 = [{
  id: -1,
  hora: "",
  temperatura: "",
  humidade: ""
}]

type IDHT11 = typeof DefaultDHT11;

const Dashboard = () => {
  const navigation = useNavigation<AlarmDetailsScreenProps>();
  const [dataDHT11, setDataDHT11] = useState<IDHT11>(Mokcs);

  const temperatureData = dataDHT11.map((value) => { return value.temperatura });
  const humityData = dataDHT11.map((value) => { return value.humidade });

  const onDetailsPress = () => navigation.navigate("ControlPanel");

  const getDHT11 = async () => {
    try {
      const data = await fetchWrapper(`/meteo`, {
        method: "GET",
        credentials: "include"
      });
      setDataDHT11(data);
      console.log(data);
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  useEffect(() => {
    getDHT11();
  }, []);

  return (
    <>
      <Box flexDirection="row" mb="2.5" mt="1.5" w="100%" h={150}>
        <Temperature temperatura={dataDHT11[dataDHT11?.length - 1].temperatura} />
        <Humidity humidade={dataDHT11[dataDHT11?.length - 1].humidade} />
      </Box >
      <ScrollView marginBottom={2}>
        <TemperatureChart temperatureData={temperatureData} />
        <HumityChart humityData={humityData} />
      </ScrollView>
      <Button size="lg" onPress={onDetailsPress} rounded="xl" variant="solid" height={100} marginBottom={20} marginTop="auto" mx={3}>
        Consultar Ocorrências
      </Button>
    </>
  );
};

export default Dashboard;