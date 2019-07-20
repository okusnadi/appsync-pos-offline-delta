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

const images = {
    donut: 'https://fdingler-appsync-pos.s3-us-west-2.amazonaws.com/assets/Donut%402x.png',
    capuccino: 'https://fdingler-appsync-pos.s3-us-west-2.amazonaws.com/assets/Capuccino%402x.png',
    chocoShake: 'https://fdingler-appsync-pos.s3-us-west-2.amazonaws.com/assets/ChocolateShake%402x.png',
    cookie: 'https://fdingler-appsync-pos.s3-us-west-2.amazonaws.com/assets/Cookie%402x.png',
    cupcake: 'https://fdingler-appsync-pos.s3-us-west-2.amazonaws.com/assets/Cupcake%402x.png',
    dripCoffee: 'https://fdingler-appsync-pos.s3-us-west-2.amazonaws.com/assets/DripCoffee%402x.png',
    foamedMilk: 'https://fdingler-appsync-pos.s3-us-west-2.amazonaws.com/assets/FoamedMilk%402x.png',
    frenchPress: 'https://fdingler-appsync-pos.s3-us-west-2.amazonaws.com/assets/FrenchPress%402x.png',
};

class Catalog extends React.Component {
    static navigationOptions = {
        title: 'Point of Sale'
    };

    render() {
        return (
            <Container>
                <Content>
                    <Button block info style={styles.checkoutBtn}>
                        <Text style={styles.quantityText}>1</Text>
                        <Text style={styles.subtotalTxt}>Subtotal $88.30</Text>
                    </Button>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: images.donut }} />
                            </Left>
                            <Body>
                                <Text>Chocolate Donut</Text>
                                <Text note numberOfLines={1}>$1.49</Text>
                            </Body>
                            <Right>
                                <Button>
                                    <Text>Add</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: images.capuccino }} />
                            </Left>
                            <Body>
                                <Text>Capuccino</Text>
                                <Text note numberOfLines={1}>$4.00</Text>
                            </Body>
                            <Right>
                                <Button>
                                    <Text>Add</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: images.chocoShake }} />
                            </Left>
                            <Body>
                                <Text>Chocolate Shake</Text>
                                <Text note numberOfLines={1}>$5.00</Text>
                            </Body>
                            <Right>
                                <Button>
                                    <Text>Add</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: images.cookie }} />
                            </Left>
                            <Body>
                                <Text>Cookie</Text>
                                <Text note numberOfLines={1}>$1.00</Text>
                            </Body>
                            <Right>
                                <Button>
                                    <Text>Add</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: images.cupcake }} />
                            </Left>
                            <Body>
                                <Text>Cupcake</Text>
                                <Text note numberOfLines={1}>$2.49</Text>
                            </Body>
                            <Right>
                                <Button>
                                    <Text>Add</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: images.dripCoffee }} />
                            </Left>
                            <Body>
                                <Text>Drip Coffee</Text>
                                <Text note numberOfLines={1}>$3.00</Text>
                            </Body>
                            <Right>
                                <Button>
                                    <Text>Add</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: images.foamedMilk }} />
                            </Left>
                            <Body>
                                <Text>Foamed Milk</Text>
                                <Text note numberOfLines={1}>$2.50</Text>
                            </Body>
                            <Right>
                                <Button>
                                    <Text>Add</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: images.frenchPress }} />
                            </Left>
                            <Body>
                                <Text>French Press</Text>
                                <Text note numberOfLines={1}>$7.50</Text>
                            </Body>
                            <Right>
                                <Button>
                                    <Text>Add</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default Catalog;