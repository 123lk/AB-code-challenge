import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Button } from 'native-base';
import tweets from './twitterApiResponse.json';
import Hyperlink from 'react-native-hyperlink';
import { Linking, StyleSheet } from 'react-native';
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
                  <Icon active name='logo-twitter' style={styles.logo}/>
                </CardItem>
                <CardItem>
                  <Text>{tweet.user.name}</Text>
                </CardItem>
                <CardItem style={styles.userNameContainer}>
                  <Text style={styles.userName} onPress={ () => Linking.openURL('https://twitter.com/BlockchainAG')}>{`@${tweet.user.screen_name}`}</Text>
                </CardItem>
                <CardItem>
                  <Text>{moment(tweet.created_at).format('DD. MM. YY')}</Text>
                </CardItem>
                <CardItem>
                  <Hyperlink linkStyle={styles.tweetLinks} onPress={ (url) => Linking.openURL(url)}>
                    <Text>{tweet.text}</Text>
                  </Hyperlink>
                </CardItem>
                <CardItem footer>
                  <Button iconLeft rounded onPress={ () => Linking.openURL('https://twitter.com/BlockchainAG')} style={styles.button}>
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

const styles = StyleSheet.create({
  logo: {
    color: '#2980b9'
  },
  userNameContainer: {
    marginTop: -10
  },
  userName: {
    color: '#2980b9'
  },
  tweetLinks: {
    color: '#2980b9'
  },
  button: {
    backgroundColor: '#2980b9', 
    marginBottom: 10
  }
});