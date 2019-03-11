import React from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'; //在根视图的底部使用

export default class AsyncStorageTest extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            key:'text1'
        }
    }
    onSave(){
        AsyncStorage.setItem(this.state.key, this.text, (error)=>{
            if(!error){
                this.toast.show('保存成功', DURATION.LENGTH_LONG);
            }else{
                this.toast.show('保存失败', DURATION.LENGTH_LONG);
            }
        })
    }
    onFetch(){
        AsyncStorage.getItem(this.state.key, (error,result)=>{
            if(!error){
                if(result!==''&&result!==null){
                    this.toast.show('取出的内容为:' + result)
                }else{
                    this.toast.show('取出的内容不存在：');
                }
            }else{
                this.toast.show('取出失败');
            }
        })
    }
    onRemove(){
        AsyncStorage.removeItem(this.state.key, (error)=>{
            if(!error){
                this.toast.show('移除成功', DURATION.LENGTH_LONG);
            }else{
                this.toast.show('移除失败', DURATION.LENGTH_LONG);
            }
        })
    }

    render() {
      <View>
          <TextInput style={{borderWith:1,height:40}} onChangeText={text => this.text = text}/>
          <View style={{flexDirection:'row'}}>
            <Text onPress={()=>{this.onSave}}>保存</Text>
            <Text onPress={()=>{this.onRemove}}>移除</Text>
            <Text onPress={()=>{this.onFetch}}>取出</Text>
          </View>
          <Toast ref="toast" 
                    style={{backgroundColor:'black'}}
                    position='bottom'
                    positionValue={200}
                    fadeInDuration={500}
                    fadeOutDuration={500}
                    opacity={0.8}
                    textStyle={{color:'white'}}/>
      </View>
    }
  }