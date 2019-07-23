import React from 'react';
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

    function checkoutBtnHandler() {
        return props.navigation.push('Checkout');
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
                <Button>
                    <Text>Add</Text>
                </Button>
            </Right>
        </ListItem>
    ));

    return (
        <Container>
            <Content>
                <Button block info style={styles.checkoutBtn} onPress={checkoutBtnHandler}>
                    <Text style={styles.quantityText}>1</Text>
                    <Text style={styles.subtotalTxt}>Subtotal $88.30</Text>
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