import React, {Dispatch, SetStateAction} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {Button} from '../../atoms/button/Button';
import {useDeleteProduct} from '../../../hooks/useDeleteProduct';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../navigation/Navigation';
import {useProduct} from '../../../store/product-store';

interface Props {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  text: string;
  id: string;
}

export const ConfirmModal = ({
  modalVisible = false,
  setModalVisible,
  text,
  id,
}: Props) => {
  const {height} = useWindowDimensions();
  const {deleteProduct} = useDeleteProduct();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const changeReload = useProduct(state => state.changeReload);

  const confirmDelete = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await deleteProduct(id);
    setModalVisible(!modalVisible);
    changeReload(true);
    navigation.navigate('Home', {reload: true});
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={{...styles.centeredView, top: height * 0.33}}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            ¿Estás seguro de eliminar el producto {text}?
          </Text>
          <Button title="Confirmar" type="primary" onPress={confirmDelete} />
          <Button
            title="Cancelar"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    position: 'relative',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    padding: 35,
    width: '100%',
    paddingBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
});
