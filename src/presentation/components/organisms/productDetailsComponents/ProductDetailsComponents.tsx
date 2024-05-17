import React, {useState} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {ProductInfoTitle} from '../../atoms/productInfoTitle/ProductInfoTitle';
import {ProductData} from '../../molecules/productdata/ProductData';
import {Button} from '../../atoms/button/Button';
import {Product} from '../../../../core/entities/product.entity';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../navigation/Navigation';
import {useProductCreateStore} from '../../../store/product-create-store';
import {ConfirmModal} from '../../molecules/confirmModal/ConfirmModal';

interface Props {
  product: Product;
}

export const ProductDetailsComponents = ({product}: Props) => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const changeProductCreate = useProductCreateStore(
    state => state.changeProductCreate,
  );

  const [modalVisible, setModalVisible] = useState(false);

  const editProduct = () => {
    changeProductCreate(
      product.id,
      product.name,
      product.description,
      product.logo,
      product.release,
    );
    navigation.navigate('ProductDataCreateOrModify', {
      createOrModify: 'modify',
      product,
    });
  };

  return (
    <View
      style={{
        ...style.fullContainer,
        width,
        height,
        backgroundColor: modalVisible ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)',
      }}>
      <ConfirmModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        text={product.name}
        id={product.id}
      />
      <View style={style.container}>
        <View style={style.containerInfo}>
          <ProductInfoTitle productId={product.id} />
          <ProductData
            name={product.name}
            description={product.description}
            revision={product.revision}
            liberation={product.release}
            url={product.logo}
          />
        </View>
        <View style={style.containerButtons}>
          <Button title="Editar" onPress={editProduct} />
          <Button
            title="Eliminar"
            onPress={() => setModalVisible(!modalVisible)}
            type="danger"
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  fullContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
  },
  containerInfo: {
    flex: 3,
  },
  containerButtons: {
    flex: 1,
  },
});
