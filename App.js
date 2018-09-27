import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Button } from 'native-base';
import tweets from './twitterApiResponse.json';

export default class App extends React.Component {
  
  render () {
    return (
      <Container>
        <Header />
        <Content>
          {tweets.map((tweet) => {
            return (
              <Card key={tweet.id}>
                <CardItem header>
                  <Icon active name="logo-twitter"/>
                </CardItem>
                <CardItem>
                  <Text>{tweet.user.name}</Text>
                </CardItem>
                <CardItem>
                  <Text>{`@${tweet.user.screen_name}`}</Text>
                </CardItem>
                <CardItem>
                  <Text>{tweet.text}</Text>
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

