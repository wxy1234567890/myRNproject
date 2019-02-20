import React, {Component,PropTyes} from 'react';
import {View,Text,StyleSheet,Image,Platform} from 'react-native';

const NAV_BAR_HEIGHT_ANDROID = 50;
const NAV_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;
const StatusBarShape={
    backgroundColor: PropTyes.string,
    barStyle: PropTyes.oneOf(['default','light-content','dark-content']),
    hidden: PropTyes.bool,
}

export default class NavigationBar extends Component{
    static propTypes = {
        style: View.propTypes.style,
        title: PropTyes.string,
        titleView: PropTyes.element,
        hide: PropTyes.bool,
        leftButton: PropTyes.element,
        rightButton: PropTyes.element,
        statusBar: PropTyes.shape(StatusBarShape)
    }
    static defaultProps={
        statusBar:{
            barStyle: 'light-content',
            hidden:false
        }
    }

    constructor(props){
        super(props);
        this.state = {
            title:'',
            hide:false
        }
    }

    render(){
        let status = <View style={[styles.statusBar,this.props.statusBar]}>
                <StatusBar {...this.props.statusBar}/>
            </View>
        let titleView = this.props.titleView ? this.props.titleView : <Text style={styles.title}>{this.props.title}</Text>
        let content = <View style={styles.navBar}>
            {this.props.leftButton}
            <View style={styles.titleViewContainer}>
                {titleView}  
            </View>
            {this.props.rightButton}
        </View>
        return(
            <View style={[styles.container,this.props.style]}>
                {status}
                {content}   
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray'
    },
    navBar:{
        justifyContent:'space-between',
        aligenItems:'center',
        heigth:Platform.OS==='ios'?NAV_BAR_HEIGHT_IOS:NAV_BAR_HEIGHT_ANDROID,
        // backgroundColor:'red',
        flexDirection:'row'
    },
    titleViewContainer:{
        justifyContent:'center',
        aligenItems:'center',
        position:'absolute',
        left:40,
        right:40,
        top:0,
        bottom:0
    },
    title:{
        fontSize:20,
        color:'white'
    },
    statusBar:{
        height:Platform.OS==='ios'?NAV_BAR_HEIGHT_IOS:NAV_BAR_HEIGHT_ANDROID,
    }
})