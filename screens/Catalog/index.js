import React, { useState } from 'react';
import {
    Text,
    Container,
    Content,
    Button,
    List,
    ListItem,
    Thumbnail,
    Left,
    Right,
    Body
} from 'native-base';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { listProducts } from '../../graphql/queries';
import styles from './styles';

const Catalog = (props) => {

    const [lineItems, setLineItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    function checkoutBtnHandler() {
        return props.navigation.push('Checkout');
    }

    function addProductHandler(product) {
        setSubtotal(subtotal + product.price);
        setLineItems([
            ...lineItems,
            product,
        ]);
    }

    const productList = props.products.map(product => (
        <ListItem thumbnail key={product.id}>
            <Left>
                <Thumbnail square source={{ uri: product.image }} />
            </Left>
            <Body>
                <Text>{product.name}</Text>
                <Text note numberOfLines={1}>${product.price}</Text>
            </Body>
            <Right>
                <Button onPress={() => addProductHandler(product)}>
                    <Text>Add</Text>
                </Button>
            </Right>
        </ListItem>
    ));

    return (
        <Container>
            <Content>
                <Button block info style={styles.checkoutBtn} onPress={checkoutBtnHandler}>
                    <Text style={styles.quantityText}>{lineItems.length}</Text>
                    <Text style={styles.subtotalTxt}>Subtotal ${subtotal.toFixed(2)}</Text>
                </Button>
                <List>
                    {productList}
                </List>
            </Content>
        </Container>
    );
};

Catalog.navigationOptions = {
    title: 'Point of Sale',
};

const listProductsQuery = gql(listProducts);
export default graphql(listProductsQuery, {
    props: ({ data }) => ({
        products: data.listProducts ? data.listProducts.items : [],
    })
})(Catalog);