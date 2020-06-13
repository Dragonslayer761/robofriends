import React ,{Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Cardlist from './Cardlist';
import Searchfields from './Searchfields';
import Scroll from './Scroll';
import {setSearchField} from './Action';


const mapStateToProps =(state)=>{
  return {
    searchField:state.searchField
  }
}

const mapDispatchToProps =(dispatch) =>{
  return {onSearchChange : (event) => dispatch(setSearchField(event.target.value))}
}

class App extends Component {
 constructor(){
   super();
   this.state={
     robots:[]
   }
 }
 componentDidMount(){
 
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(user => {
     this.setState({robots:user})
   })

 }
 
  render(){
    const {robots}=this.state;
    const {searchField,onSearchChange}=this.props;
    const filterdRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    })
  return !robots.length ? <h1 className="app-header">Loading.....</h1> : (
    <div className="tc ">
      <h1 className="f1 app-header">Robofriends</h1>
      <Searchfields searchChange={onSearchChange}/>
      <Scroll>
      <Cardlist robots={filterdRobots} />
      </Scroll>
    </div>
    );
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
