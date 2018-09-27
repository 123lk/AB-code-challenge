import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Button } from 'native-base';
import tweets from './twitterApiResponse.json';
import Hyperlink from 'react-native-hyperlink';
import { Linking } from 'react-native';
import moment from 'moment';

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
                  <Icon active name='logo-twitter' style={{color: '#2980b9'}}/>
                </CardItem>
                <CardItem>
                  <Text>{tweet.user.name}</Text>
                </CardItem>
                <CardItem style={{marginTop: -10}}>
                  <Text style={{color: '#2980b9'}} onPress={ () => Linking.openURL('https://twitter.com/BlockchainAG')}>{`@${tweet.user.screen_name}`}</Text>
                </CardItem>
                <CardItem>
                  <Text>{moment(tweet.created_at).format('DD. MM. YY')}</Text>
                </CardItem>
                <CardItem>
                  <Hyperlink linkStyle={{ color: '#2980b9'}} onPress={ (url) => Linking.openURL(url)}>
                    <Text>{tweet.text}</Text>
                  </Hyperlink>
                </CardItem>
                <CardItem footer>
                  <Button iconLeft rounded onPress={ () => Linking.openURL('https://twitter.com/BlockchainAG')} style={{backgroundColor: '#2980b9', marginBottom: 10}}>
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