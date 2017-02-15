/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [1,2,3],
      newTodo: ''
    }
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({newTodo: value})

  }

  handlePress(e) {
    e.preventDefault();
    let todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo:''});
  }

  removeTodo(i){
    const todos = [...this.state.todos.slice(0,i), this.state.todos.slice(i + 1)]
    this.setState({todos});
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChange={this.handleChange.bind(this)}
          style={[styles.default, {height: 50}]}
          value={this.state.newTodo}
          placeholder="new Todo"
        />
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>Create Todo</Text>
        </TouchableHighlight>
        {this.state.todos.map((todo, i) =>
          <Text onPress={() => this.removeTodo.call(this,i)} key={todo}>{todo}</Text>
        )}
        {/* <TextInput
        {...this.props}
        multiline={true}
        onChangeText={(text) => {
          this.setState({text});
        }}
        // onContentSizeChange={(event) => {
        //   this.setState({height: event.nativeEvent.contentSize.height});
        // }}
        style={[styles.default, {height: Math.max(35, this.state.height)}]}
        value={this.state.newTodo}
      /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Todo', () => Todo);
