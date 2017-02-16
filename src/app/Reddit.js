import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { ADD_POST } from './reducers';

export const _Reddit = (props) => (
  <View>
    {props.posts.map(post => <Text>{post.name }</Text>)}
    <TouchableOpacity>
      <Text onPress={props.addRedditPost}>Add</Text>
    </TouchableOpacity>
  </View>
);
const mapStateToProps = (state) => ({
  posts: state.reddit,
});

const mapActionsToProps = (dispatch) => ({
  addRedditPost(post = { name: 'new post' }) {
    console.log(post);
    dispatch({ type: ADD_POST, payload: post });
  },
});
export const Reddit = connect(mapStateToProps, mapActionsToProps)(_Reddit);
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
