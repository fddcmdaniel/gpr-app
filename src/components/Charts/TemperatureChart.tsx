
import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface TempChartProps {
  temperatureData: string[];
}

const TemperatureChart = ({ temperatureData }: TempChartProps) => {

  const windowWidth = Dimensions.get('window').width;

  const data = {
    labels: [],
    datasets: [
      {
        data: temperatureData,
        color: (opacity = 1) => `rgba(58, 176, 255, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Registo de temperatura"] // optional
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 0, 0)`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false // optional
  };

  return <LineChart
    //@ts-ignore
    data={data}
    width={windowWidth}
    height={220}
    chartConfig={chartConfig}
    bezier
  />;
};

export default TemperatureChart;