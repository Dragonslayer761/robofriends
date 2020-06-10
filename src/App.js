import React ,{Component} from 'react';
import './App.css';
import Cardlist from './Cardlist';
import Searchfields from './Searchfields'

class App extends Component {
 constructor(){
   super();
   this.state={
     robots:[],
     searchFields:''
   }
 }
 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(user => {
     this.setState({robots:user})
   })

 }
 
 
 onSearchChange=(event)=>{
  this.setState({searchFields:event.target.value});
 }
 
 
  render(){
    const {robots,searchFields}=this.state;
    const filterdRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchFields.toLowerCase());
    })
    
  return (
    <div className="tc ">
      <h1 className="f1">Robofriends</h1>
      <Searchfields searchChange={this.onSearchChange}/>
      <Cardlist robots={filterdRobots} />
    </div>
    );
 }
}

export default App;
