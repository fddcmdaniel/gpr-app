
import { Switch } from 'native-base';
import React, { useEffect, useState } from 'react';
import { fetchWrapper } from '../utils/api';

const SystemToogle = () => {
  const [enable, setEnable] = useState(false);

  const onStateChange = async () => {
    console.log("IN", enable);
    try {
      const data = await fetchWrapper(`/state/1`, {
        method: "PUT",
        body: JSON.stringify({
          on: !enable
        }),
      });
      setEnable(data.on);
      console.log("PUT", data);
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

  return <Switch size="md" value={enable} marginLeft={6} onChange={onStateChange} />;
};

export default SystemToogle;