import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';

export const _Reddit  = (props) => (
    <View>
      {this.props.posts.map(post => <Text>{post.name }</Text>)}
    </View>
)
const mapStateToProps = (state) => ({
  posts: state.reddit
})
export const Reddit = connect(mapStateToProps, null)(_Reddit)
  // constructor() {
  //   super();
  //   this.state = {
  //     posts: []
  //   }
  // }
  // componentDidMount() {
  //   fetch('https://www.reddit.com/.json', {
  //     Accept: 'application/json'
  //   })
  //   .then(res => res.json())
  //   .then(data => this.setState({posts: data.data.children}));
  // }
