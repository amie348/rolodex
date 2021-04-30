import React , {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

import {CardList} from './component/card-list/car-list.component';
import {SearchBox} from './component/search-boxe/search-box.component';

class App extends Component{
  constructor(){
   super();
    this.state={
        Friends :[],
        searchField : ''
      }
  }

 async componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ Friends: users }));
 }

 filterhandler = (e)=>{
  this.setState({searchField:e.target.value})
 } 

  render(){
    const {Friends , searchField} = this.state;
    const filtered = Friends.filter(Friend=>
      Friend.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
      <h1>Friends Roblobox</h1>
      <SearchBox Placeholder='search here' filterfunction={this.filterhandler} />
      <CardList Friends={filtered}/>
      </div>
    );
  }

}

export default App;
