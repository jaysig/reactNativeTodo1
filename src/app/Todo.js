import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange(text) {
    this.setState({newTodo: text})
  }

  handlePress() {
    fetch({
      url: 'http://localhost:3000/todos',
      method: 'post',
      body: JSON.stringify({
        name: this.state.newTodo,
        number: 2,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data =>{
      let todos = [...this.state.todos, data];
      this.setState({todos, newTodo:''});
    })

  }

  removeTodo(i){
    const todos = [...this.state.todos.slice(0,i), this.state.todos.slice(i + 1)]
    this.setState({todos});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            onChangeText={this.handleChange.bind(this)}
            style={[styles.input, {height: 50}]}
            value={this.state.newTodo}
            placeholder="new Todo"
          />
          <TouchableOpacity
            onPress={this.handlePress.bind(this)}
            style={styles.button}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todos}>

        {this.state.todos.map((todo, i) =>
          <View style={styles.todo} key={i}>
            <Text onPress={() => this.removeTodo.call(this,i)} style={styles.todoText}>{todo.name}</Text>
          </View>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  form: {
    flexDirection: 'row',
  },
  input: {
   flex: 0.7,
   fontSize: 24,
  },
  button: {
   flex: 0.3,
   borderWidth: 1,
   height: 50,
   borderColor: 'blue',
   borderRadius: 3,
   justifyContent: 'center',
   alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  todos: {
    marginTop: 60,
  },
  todo: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginBottom: 10,
  },
  todoText: {
    fontSize: 24
  }
});
