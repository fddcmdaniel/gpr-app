
import React, { ReactChild } from 'react';
import { Center, Image, Modal, ScrollView, View } from 'native-base';
import { raspIP } from '../utils/api';

interface DetailModalProps {
  handleClose: (state: boolean) => void;
  children?: ReactChild;
  isOpen: boolean;
  photoPath: string;
}

const DetailModal = ({ handleClose, isOpen, photoPath }: DetailModalProps) => {
  const inClosePress = () => handleClose(false);
  const refactorRaspIP = raspIP.replace(":3000", "");
  return (
    <Modal isOpen={isOpen} onClose={inClosePress} safeAreaTop={true} size="full" >
      <Modal.Content maxHeight="380" style={{
        marginBottom: 0,
        marginTop: "auto"
      }}
      >
        <Modal.CloseButton />
        <Modal.Header>Foto</Modal.Header>
        <Modal.Body>
          <ScrollView scrollEnabled={false}>
            <Image source={{
              uri: `${refactorRaspIP}/imagem${photoPath}`
            }} alt="#" width={640} height={480} resizeMode="contain" top={-100} />
          </ScrollView>
        </Modal.Body>
      </Modal.Content>
    </Modal >
  );
}

export default DetailModal;