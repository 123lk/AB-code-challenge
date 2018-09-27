import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Button } from 'native-base';
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
                  <Text>{tweet.name}</Text>
                </CardItem>
                <CardItem>
                  <Text>{tweet.handle}</Text>
                </CardItem>
                <CardItem>
                  <Text>{tweet.text1}</Text>
                </CardItem>
                <CardItem>
                  <Text>{tweet.text2}</Text>
                </CardItem>
                <CardItem footer>
                <Button iconLeft rounded>
                  <Icon name='logo-twitter' />
                    <Text>Follow</Text>
                  </Button>
                </CardItem>
              </Card> 
            );
          })}
        </Content>
      </Container>
    );
  }
}

