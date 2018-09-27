import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import data from './data.json';

export default class App extends React.Component {
  
  render () {
    return (
      <Container>
        <Header />
        <Content>
          {data.tweets.map((tweet) => {
            return (
              <Card key={tweet.id}>
                <CardItem header>
                  <Icon active name="logo-twitter"/>
                 </CardItem>
                 <CardItem>
                  <Text>{tweet.text1}</Text>
                 </CardItem>
               </Card>
            );
          })}
        </Content>
      </Container>
    );
  }
}

