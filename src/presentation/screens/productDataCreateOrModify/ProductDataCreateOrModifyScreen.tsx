import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FormCreateOrModify} from '../../components/molecules/formCreateOrModify/FormCreateOrModify';
import {Button} from '../../components/atoms/button/Button';
import {useProductCreateStore} from '../../store/product-create-store';
import {useValidateProducts} from '../../hooks/useValidateProduct';
import {useCreateProduct} from '../../hooks/useCreateProduct';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/Navigation';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useProduct} from '../../store/product-store';

interface Props
  extends StackScreenProps<RootStackParams, 'ProductDataCreateOrModify'> {}

export const ProductDataCreateOrModify = ({route}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const {createOrModify} = route.params;
  const id = useProductCreateStore(state => state.id);

  const {validateFetch} = useValidateProducts();
  const {createProduct} = useCreateProduct();
  const changeReload = useProduct(state => state.changeReload);

  const name = useProductCreateStore(state => state.name);
  const description = useProductCreateStore(state => state.description);
  const logo = useProductCreateStore(state => state.logo);
  const release = useProductCreateStore(state => state.release);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [revision, setRevision] = useState('');

  const changeProductCreate = useProductCreateStore(
    state => state.changeProductCreate,
  );

  useEffect(() => {
    changeProductCreate(revision);
  }, [revision, changeProductCreate]);

  const cleanfields = () => {
    changeProductCreate('', '', '', '', '', '');
  };

  const validateDate = (date: string) => {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) {
      return false;
    }

    // Parse the date parts to integers
    let parts = date.split('/');
    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10);
    let year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month === 0 || month > 12) {
      return false;
    }

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      monthLength[1] = 29;
    }

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
  };

  const validateFields = async (): Promise<boolean> => {
    if (id?.length === 0) {
      useProductCreateStore.setState({
        idError: true,
        idErrorMessage: 'Este campo es requerido',
      });
      return false;
    }

    if (id?.length! < 3 || id?.length! > 10) {
      useProductCreateStore.setState({
        idError: true,
        idErrorMessage: 'El ID debe tener mínimo 3 caracteresy máximo 10',
      });
      return false;
    }

    const isValidate = await validateFetch(id!);

    if (isValidate) {
      useProductCreateStore.setState({
        idError: true,
        idErrorMessage: 'ID no válido',
      });
      return false;
    }

    if (name?.length === 0) {
      useProductCreateStore.setState({
        nameError: true,
        nameErrorMessage: 'Este campo es requerido',
      });
      return false;
    }

    if (name?.length! < 5 || name?.length! > 100) {
      useProductCreateStore.setState({
        nameError: true,
        nameErrorMessage:
          'El nombre debe tener mínimo 5 caracteresy máximo 100',
      });
      return false;
    }

    if (description?.length === 0) {
      useProductCreateStore.setState({
        descriptionError: true,
        descriptionErrorMessage: 'Este campo es requerido',
      });
      return false;
    }

    if (description?.length! < 10 || description?.length! > 200) {
      useProductCreateStore.setState({
        descriptionError: true,
        descriptionErrorMessage:
          'El nombre debe tener mínimo 5 caracteresy máximo 100',
      });
      return false;
    }

    if (logo?.length === 0) {
      useProductCreateStore.setState({
        logoError: true,
        logoErrorMessage: 'Este campo es requerido',
      });
      return false;
    }

    if (release?.length === 0) {
      useProductCreateStore.setState({
        liverationError: true,
        liverationErrorMessage: 'Este campo es requerido',
      });
      return false;
    }

    if (!validateDate(release!)) {
      useProductCreateStore.setState({
        liverationError: true,
        liverationErrorMessage: 'El formato de fecha debe ser dd/mm/yyyy',
      });
      return false;
    }

    const actualDate = new Date().toLocaleDateString();

    if (
      release?.split('/')[0]! < actualDate?.split('/')[1] ||
      release?.split('/')[1].replace('0', '')! < actualDate?.split('/')[0] ||
      release?.split('/')[2]! < actualDate?.split('/')[2]
    ) {
      useProductCreateStore.setState({
        liverationError: true,
        liverationErrorMessage:
          'La fecha debe ser mayor o igual a la fecha actual',
      });
      return false;
    }

    return true;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de Registro</Text>
      <FormCreateOrModify />
      <View style={styles.containerButtons}>
        <Button
          title="Enviar"
          onPress={async () => {
            const resultFields = await validateFields();
            if (resultFields) {
              if (createOrModify === 'create') {
                const createProductResponse = await createProduct(
                  id!,
                  name!,
                  description!,
                  logo!,
                  `${release?.split('/')[2]}/${release?.split('/')[1]}/${
                    release?.split('/')[0]
                  }`,
                  `${Number(release?.split('/')[2]!) + 1}/${release?.split(
                    '/',
                  )[1]!}/${release?.split('/')[0]!}`,
                );
                if (createProductResponse.id) {
                  changeReload(true);
                  navigation.navigate('Home', {reload: true});
                }
              }
            }
          }}
          type="primary"
        />
        <Button title="Reiniciar" onPress={() => cleanfields()} />
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
