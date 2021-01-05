
import React , {Component} from 'react' ;
import './App.css';
import List from './componenets/Person';

class App extends Component {
 state =
  { profil : [{
    name :' siwar',
    bio :'fghbyufhj',
    profession : 'engineer',
    img : 'https://image.freepik.com/photos-gratuite/image-du-cerveau-humain_99433-298.jpg',
    isVisible :true
    }  ] }
    togglevisible = ()=> {
    this.setState(
        { isVisible : ! this.state.isVisible }
    )
}
 


  render(){
    return (
      <div className="App">
        <h1>My list to do </h1>
           <List/>
  
      </div>
    );
  }
  }
 export default App; 


