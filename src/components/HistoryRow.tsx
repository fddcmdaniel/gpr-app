
import { Badge, Box, Flex, HStack, Pressable, Spacer, Text } from 'native-base';
import React, { useEffect } from 'react';
import { IData } from '../pages/ControlPanel';


interface HistoryRowProps {
  data: IData;
  handleClose: (state: boolean) => void;
  setPhotoPath: (path: string) => void;
}

const HistoryRow = ({ data, handleClose, setPhotoPath }: HistoryRowProps) => {

  const onDetailsPress = () => {
    setPhotoPath(data.foto);
    handleClose(true);
  }

  return (
    <Pressable onPress={onDetailsPress}>
      {({
        isHovered,
        isPressed
      }) => {
        return <Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
          transform: [{
            scale: isPressed ? 0.99 : 1
          }]
        }}>
          <HStack alignItems="center">
            <Badge colorScheme="darkBlue" _text={{
              color: "white"
            }} variant="solid" rounded="4">
              {"#ID " + data.id}
            </Badge>
            <Spacer />
            <Text fontSize={10} color="coolGray.800">
              {data.hora}
            </Text>
          </HStack>
          <Box flexDirection="row">
            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
              {"Distância:  "}
              <Text mt="4" fontSize="sm" color="coolGray.700">
                {data.distancia + " cm"}
              </Text>
            </Text>
          </Box>
        </Box>;
      }}
    </Pressable>
  );
};

export default HistoryRow;