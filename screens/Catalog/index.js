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
import styles from './styles';

const products = [
    {
        sku: '3466920836',
        name: 'Cinammon-Sugar Donut',
        price: 1.49,
        image: 'https://fdingler-appsync-pos.s3-us-west-2.amazonaws.com/assets/Donut%402x.png',
    },
    {
        sku: '7506355743',
        name: 'Capuccino',
        price: 4.00,
        image: 'https://fdingler-appsync-pos.s3-us-west-2.amazonaws.com/assets/Capuccino%402x.png',
    },
    {
        sku: '3919637313',
        name: 'Chocolate Shake',
        price: 5.00,
        image: 'https://fdingler-appsync-pos.s3-us-west-2.amazonaws.com/assets/ChocolateShake%402x.png',
    },
    {
        sku: '3214930706',
        name: 'Cookie',
        price: 1.00,
        image: 'https://fdingler-appsync-pos.s3-us-west-2.amazonaws.com/assets/Cookie%402x.png',
    },
    {
        sku: '3475341851',
        name: 'Cupcake',
        price: 2.65,
        image: 'https://fdingler-appsync-pos.s3-us-west-2.amazonaws.com/assets/Cupcake%402x.png',
    },
    {
        sku: '3869857338',
        name: 'Drip Coffee',
        price: 3.00,
        image: 'https://fdingler-appsync-pos.s3-us-west-2.amazonaws.com/assets/DripCoffee%402x.png',
    },
    {
        sku: '2596295702',
        name: 'Glass of Milk',
        price: 4.00,
        image: 'https://fdingler-appsync-pos.s3-us-west-2.amazonaws.com/assets/FoamedMilk%402x.png',
    },
    {
        sku: '0325090224',
        name: 'French Press',
        price: 7.50,
        image: 'https://fdingler-appsync-pos.s3-us-west-2.amazonaws.com/assets/FrenchPress%402x.png',
    },
];

class Catalog extends React.Component {
    static navigationOptions = {
        title: 'Point of Sale'
    };

    constructor(props) {
        super(props);
        this.checkoutBtnHandler = this.checkoutBtnHandler.bind(this);
        this.addBtnHandler = this.addBtnHandler.bind(this);
    }
    
    checkoutBtnHandler() {
        return this.props.navigation.push('Checkout');
    }

    addBtnHandler() {
        
    }

    renderProducts(products) {
        return products.map(product => (
            <ListItem thumbnail key={product.sku}>
                <Left>
                    <Thumbnail square source={{ uri: product.image }} />
                </Left>
                <Body>
                    <Text>{product.name}</Text>
                    <Text note numberOfLines={1}>${product.price}</Text>
                </Body>
                <Right>
                    <Button onPress={() => this.addBtnHandler(product)}>
                        <Text>Add</Text>
                    </Button>
                </Right>
            </ListItem>
        ));
    }

    render() {
        return (
            <Container>
                <Content>
                    <Button block info style={styles.checkoutBtn} onPress={this.checkoutBtnHandler}>
                        <Text style={styles.quantityText}>1</Text>
                        <Text style={styles.subtotalTxt}>Subtotal $88.30</Text>
                    </Button>
                    <List>
                        {this.renderProducts(products)}
                    </List>
                </Content>
            </Container>
        );
    }
}

export default Catalog;