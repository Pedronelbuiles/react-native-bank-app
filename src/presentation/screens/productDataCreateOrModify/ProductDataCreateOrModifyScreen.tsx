import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FormCreateOrModify} from '../../components/molecules/formCreateOrModify/FormCreateOrModify';
import {Button} from '../../components/atoms/button/Button';
import {useProductCreateStore} from '../../store/product-create-store';

export const ProductDataCreateOrModify = () => {
  const id = useProductCreateStore(state => state.id);
  const name = useProductCreateStore(state => state.name);
  const description = useProductCreateStore(state => state.description);
  const logo = useProductCreateStore(state => state.logo);
  const release = useProductCreateStore(state => state.release);
  const revision = useProductCreateStore(state => state.revision);
  const changeProductCreate = useProductCreateStore(
    state => state.changeProductCreate,
  );

  const validateFields = () => {
    if (id?.length === 0) {
      useProductCreateStore.setState({
        idError: true,
        idErrorMessage: 'Este campo es requerido',
      });
    }
    //validar id sin usar
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de Registro</Text>
      <FormCreateOrModify />
      <View style={styles.containerButtons}>
        <Button
          title="Enviar"
          onPress={() => validateFields()}
          type="primary"
        />
        <Button title="Reiniciar" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
  title: {
    marginTop: 20,
    fontSize: 37,
    fontWeight: '600',
  },
  containerButtons: {
    flex: 1,
  },
});
