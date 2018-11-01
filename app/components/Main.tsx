import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Header from './Header';
import Note from './Note';


interface State {
  noteArray: Array<object>;
  noteText: string;
}

export default class Main extends React.Component<State> {

  state:State={
    noteArray:[],
    noteText:'',
  }
  
  addNote = () => {
    const {noteText, noteArray} = this.state
    if(noteText){
      let d = new Date();
      noteArray.push({
        date: `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`,
        note: noteText
      })
      this.setState({noteText:'',noteArray})
    }
  }

  deleteNote:Function = (index: number) => {
    const {noteArray} = this.state;
    noteArray.splice(index,1);
    this.setState({noteArray})
  }

  render() {
    const { 
      container, 
      content, 
      footer,
      textInput, 
      addButton, 
      addButtonText
    } = styles;
    const {noteArray} = this.state   
    return (
      <View style={container}>
        
        <Header title="TODOS"/>

        <ScrollView style={content}>
          <Note val={noteArray} deleteNote={this.deleteNote}/>
        </ScrollView>
        
        <View style={footer}>
          <TextInput
            style={textInput}
            onChangeText={noteText=>this.setState({noteText})}
            value={this.state.noteText}
            placeholder='Enter your task here..'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'
          >
          </TextInput>
        </View>

        <TouchableOpacity onPress={this.addNote} style={addButton}>
          <Text style={addButtonText}>+</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginBottom: 100,
  },
  footer:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput:{
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  },
  addButton:{
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#0066ff',
    height: 90,
    width: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText:{
    color: '#fff',
    fontSize: 24
  }
});