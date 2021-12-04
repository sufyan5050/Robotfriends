import React, {Component} from 'react';
import Cardlist from './Cardlist';
import {Robot} from './Robot';
import SearchBox from './SearchBox'

class App extends Component {
    constructor(){
        super()
        this.state = {
            Robot: Robot,
            searchfield:''
        }
    }
    onsearchChange(event){
         console.log(event);
    }
    render(){
        return(
            <div className = 'tc'>
            <h1>Robofriends</h1>
            <SearchBox searchChange={this.onsearchChange}/>
            <Cardlist Robot={this.state.Robot}/> 
            </div>  
        );
    }

}


export default App;
