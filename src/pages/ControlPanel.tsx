
import { Box, Modal, ScrollView, Switch } from 'native-base';
import React, { useEffect, useState } from 'react';
import DetailModal from '../components/DetailModal';
import HistoryRow from '../components/HistoryRow';

import Data from '../data/db.json';
import { fetchWrapper } from '../utils/api';

export interface IData {
  id: number;
  hora: string;
  distancia: string;
  foto: string;
}



const ControlPanel = () => {
  const [data, setData] = useState<IData[]>(Data.reverse());
  const [open, setOpen] = useState(false);
  const [enable, setEnable] = useState(false);
  const [photoPath, setPhotoPath] = useState("");

  const getSR04 = async () => {
    try {
      const data = await fetchWrapper(`/alarmes`, {
        method: "GET",
        credentials: "include"
      });
      setData(data.reverse());
      console.log(data);
    } catch (err) {
      console.log("Error: ", err);
    }
  }


  //useEffect(() => { getSR04() }, []);

  const onStateChange = async () => {
    setEnable(!enable);
    try {
      const data = await fetchWrapper(`/state/1`, {
        method: "PUT",
        body: JSON.stringify({
          on: enable ? true : false
        }),
      });
      console.log(data);
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  const getState = async () => {
    try {
      const data = await fetchWrapper(`/state/1`, {
        method: "GET"
      });
      setEnable(data.on);
      console.log(data);
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  useEffect(() => {
    getState();
  }, []);

  console.log(enable);


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data?.map((value: IData, index: number) => {
        return (
          <>
            <Box key={index} marginBottom={1} marginTop={1}>
              <HistoryRow key={index} data={value} handleClose={setOpen} setPhotoPath={setPhotoPath} />
            </Box>
          </>
        );
      })}
      <DetailModal
        isOpen={open}
        handleClose={setOpen}
        photoPath={photoPath}
      ></DetailModal>
    </ScrollView>
  );
};

export default ControlPanel;