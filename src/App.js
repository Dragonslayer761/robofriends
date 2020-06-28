import React ,{Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Cardlist from './Cardlist';
import Searchfields from './Searchfields';
import Scroll from './Scroll';
import {setSearchField,requestRobots} from './Action';


const mapStateToProps =(state)=>{
  return {
    searchField:state.searchRobots.searchField,
    robots:state.requestRobots.robots,
    isPending:state.requestRobots.isPending,
    error:state.requestRobots.error
  }
}

const mapDispatchToProps =(dispatch) =>{
  return {
      onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
      onRequestRobots : () => dispatch(requestRobots())
    
    
    }
}

class App extends Component {
 
 componentDidMount(){
   this.props.onRequestRobots();
 }
 
  render(){
    
    const {searchField,onSearchChange,robots,isPending}=this.props;
    const filterdRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    })
  return isPending ? <h1 className="app-header">Loading.....</h1> : (
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
