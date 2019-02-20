import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Girl from './Girl';

export default class Boy extends Component{
    constructor(props){
        super(props);
        this.state = {
            word:''
        }
    }
    render(){
        let word = this.word===''?'':'我收到了女孩的回赠：' + this.state.word
        return(
            <View style={styles.container}>
                <Text style={styles.text}>I am Boy.</Text>
                <Text style={styles.text} 
                onPress={()=>{
                    this.props.navigator.push({
                        component:Girl,
                        params:{
                            word:'一支玫瑰',
                            onCallback:()=>{
                                this.setState({
                                    word:word
                                })
                            }
                        }
                    })
                }}>送女孩一支玫瑰</Text>
                <Text style={styles.text}>{this.state.word}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'grey',
        justifyContent:'center',
        textAlign:'center'
    },
    text:{
        fontSize:12
    }
})