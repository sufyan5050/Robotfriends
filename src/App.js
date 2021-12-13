import React, {Component} from 'react';
import Cardlist from './Cardlist';
import {Robot} from './Robot';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            Robot: Robot,
            searchfield:''
        }
    }
    onsearchChange = (event) =>{
         this.setState({searchfield:event.target.value})
         console.log(event.target.value);
    }
    render(){
        const filterRobot = this.state.Robot.filter(Robot =>{
            return Robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className = 'tc'>
            <h1 className='f2'>Robofriends</h1>
            <SearchBox searchChange={this.onsearchChange}/>
            <Cardlist Robot={filterRobot}/> 
            </div>  
        );
    }

}


export default App;
