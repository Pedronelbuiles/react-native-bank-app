import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InputText} from '../../atoms/textInput/TextInput';
import {useProductCreateStore} from '../../../store/product-create-store';

export const FormCreateOrModify = () => {
  const changeProductCreate = useProductCreateStore(
    state => state.changeProductCreate,
  );

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [liveration, setLiveration] = useState('');

  const idGlobal = useProductCreateStore(state => state.id);
  const nameGlobal = useProductCreateStore(state => state.name);
  const descriptionGlobal = useProductCreateStore(state => state.description);
  const logoGlobal = useProductCreateStore(state => state.logo);
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

  useEffect(() => {
    changeProductCreate(id, name, description, logo, liveration);
  }, [id, name, description, logo, liveration, changeProductCreate]);

  useEffect(() => {
    setId(idGlobal!);
    setName(nameGlobal!);
    setDescription(descriptionGlobal!);
    setLogo(logoGlobal!);
    setLiveration(liverationGlobal!);
  }, [idGlobal, nameGlobal, descriptionGlobal, logoGlobal, liverationGlobal]);

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Text style={styles.inputText}>ID</Text>
        <InputText
          onChangeInput={setId}
          value={id}
          placeHolder=""
          error={idError}
        />
        {idError && <Text style={styles.errorText}>{idErrorMessage}</Text>}
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.inputText}>Nombre</Text>
        <InputText
          onChangeInput={setName}
          value={name}
          placeHolder=""
          error={nameError}
        />
        {nameError && <Text style={styles.errorText}>{nameErrorMessage}</Text>}
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.inputText}>Descripción</Text>
        <InputText
          onChangeInput={setDescription}
          value={description}
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
          onChangeInput={setLogo}
          value={logo}
          placeHolder=""
          error={logoError}
        />
        {logoError && <Text style={styles.errorText}>{logoErrorMessage}</Text>}
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.inputText}>Fecha Liberación</Text>
        <InputText
          onChangeInput={setLiveration}
          value={liveration}
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
          value={
            liveration?.length > 1
              ? `${liveration?.split('/')[0]!}/${liveration?.split('/')[1]!}/${
                  Number(liveration?.split('/')[2]!) + 1
                }`
              : ''
          }
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
