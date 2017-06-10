import React from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  coverStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
});

const AlbumDetail = ({ album }) => {
  const { headerContentStyle, thumbnailStyle, coverStyle } = styles;
  const { title, artist, thumbnail_image, image, url } = album;
  return (
    <Card>
      <CardItem>
        <View>
          <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
        </View>
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>
      <CardItem>
        <Image source={{ uri: image }} style={coverStyle} />
      </CardItem>
      <CardItem>
        <Button text="Buy" onPress={() => Linking.openURL(url)} />
      </CardItem>
    </Card>
  );
};

export default AlbumDetail;
