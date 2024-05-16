import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InputText} from '../../atoms/textInput/TextInput';
import {useProductCreateStore} from '../../../store/product-create-store';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParams} from '../../../navigation/Navigation';

export const FormCreateOrModify = () => {
  const {createOrModify, product} =
    useRoute<RouteProp<RootStackParams, 'ProductDataCreateOrModify'>>().params;
  const changeProductCreate = useProductCreateStore(
    state => state.changeProductCreate,
  );

  const [flagExternalObject, setflagExternalObject] = useState(false);
  const [idLocal, setIdLocal] = useState('');
  const [nameLocal, setNameLocal] = useState('');
  const [descriptionLocal, setDescriptionLocal] = useState('');
  const [logoLocal, setLogoLocal] = useState('');
  const [liverationLocal, setLiverationLocal] = useState('');

  const liverationGlobal = useProductCreateStore(state => state.release);

  const idError = useProductCreateStore(state => state.idError);
  const nameError = useProductCreateStore(state => state.nameError);
  const descriptionError = useProductCreateStore(
    state => state.descriptionError,
  );
  const logoError = useProductCreateStore(state => state.logoError);
  const liverationError = useProductCreateStore(state => state.liverationError);

  const idErrorMessage = useProductCreateStore(state => state.idErrorMessage);
  const nameErrorMessage = useProductCreateStore(
    state => state.nameErrorMessage,
  );
  const descriptionErrorMessage = useProductCreateStore(
    state => state.descriptionErrorMessage,
  );
  const logoErrorMessage = useProductCreateStore(
    state => state.logoErrorMessage,
  );
  const liverationErrorMessage = useProductCreateStore(
    state => state.liverationErrorMessage,
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (createOrModify === 'modify' && !flagExternalObject) {
      const liveration = product?.release.split('T')[0].replaceAll('-', '/')!;
      setIdLocal(product?.id!);
      setNameLocal(product?.name!);
      setDescriptionLocal(product?.description!);
      setLogoLocal(product?.logo!);
      setLiverationLocal(
        `${liveration.split('/')[2]}/${liveration.split('/')[1]}/${
          liveration.split('/')[0]
        }`,
      );
      setflagExternalObject(true);
    }
  });

  useEffect(() => {
    let id = idLocal,
      name = nameLocal,
      description = descriptionLocal,
      logo = logoLocal,
      release = liverationLocal;
    changeProductCreate(id, name, description, logo, release);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idLocal, nameLocal, descriptionLocal, logoLocal, liverationLocal]);

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Text style={styles.inputText}>ID</Text>
        <InputText
          onChangeInput={setIdLocal}
          value={idLocal}
          placeHolder=""
          editable={createOrModify === 'modify' ? false : true}
          error={idError}
        />
        {idError && <Text style={styles.errorText}>{idErrorMessage}</Text>}
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.inputText}>Nombre</Text>
        <InputText
          onChangeInput={setNameLocal}
          value={nameLocal}
          placeHolder=""
          error={nameError}
        />
        {nameError && <Text style={styles.errorText}>{nameErrorMessage}</Text>}
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.inputText}>Descripción</Text>
        <InputText
          onChangeInput={setDescriptionLocal}
          value={descriptionLocal}
          placeHolder=""
          error={descriptionError}
        />
        {descriptionError && (
          <Text style={styles.errorText}>{descriptionErrorMessage}</Text>
        )}
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.inputText}>Logo</Text>
        <InputText
          onChangeInput={setLogoLocal}
          value={logoLocal}
          placeHolder=""
          error={logoError}
        />
        {logoError && <Text style={styles.errorText}>{logoErrorMessage}</Text>}
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.inputText}>Fecha Liberación</Text>
        <InputText
          onChangeInput={setLiverationLocal}
          value={liverationLocal}
          placeHolder=""
          error={liverationError}
        />
        {liverationError && (
          <Text style={styles.errorText}>{liverationErrorMessage}</Text>
        )}
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.inputText}>Fecha Revisión</Text>
        <InputText
          onChangeInput={() => {}}
          value={`${liverationGlobal?.split('/')[0]!}/${liverationGlobal?.split(
            '/',
          )[1]!}/${Number(liverationGlobal?.split('/')[2]!) + 1}`}
          editable={false}
          placeHolder=""
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    width: '100%',
    marginBottom: 10,
  },
  containerInput: {
    marginVertical: 3,
    marginLeft: -33,
  },
  inputText: {
    marginLeft: 33,
    bottom: -12,
    fontSize: 20,
    fontWeight: '500',
  },
  errorText: {
    color: 'red',
    marginLeft: 35,
  },
});
