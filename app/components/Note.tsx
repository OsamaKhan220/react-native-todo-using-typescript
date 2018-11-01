import React from 'react';
import { 
  StyleSheet, 
  View,
  Text,
  TouchableOpacity
} from 'react-native';



interface Props {
  val: Array<object>;
  deleteNote: Function;
}

export default class Note extends React.Component<Props> {

  render() {
    const { note, noteText, noteDelete, noteDeleteText} = styles;
    return (
      <View>
        {
          this.props.val.map((val: object, key:number):any=>{
              return(
                <View 
                  style={note} 
                  key={key}
                >
                  <Text style={noteText}>{val.date}</Text>  
                  <Text style={noteText}>{val.note}</Text>
                  
                  <TouchableOpacity
                    onPress={()=>{this.props.deleteNote(key)}}
                    style={noteDelete}
                  >
                    <Text style={noteDeleteText}>Del</Text>
                  </TouchableOpacity>

                </View>
              )
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding:20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed'
  },
  noteText:{
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#0066ff'
  },
  noteDelete:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,

  },
  noteDeleteText:{
    color: 'white'
  }
});