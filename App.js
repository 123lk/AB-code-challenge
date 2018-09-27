import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import data from './data.json';

export default class App extends React.Component {
  
  render () {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Icon active name="logo-twitter" />
              <Text>Tweet</Text>
              <Right />
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}

