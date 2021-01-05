import React , {Component} from 'react'

class List extends Component {
   
    const Profil = ({
        profil : { name , bio , profession, img,  },
        handleDelete,
        handleDone,
      }) => {



    render(){
        return(
            <div>
                <button className="visibility.btn" onClick={this.togglevisible}>
                   show profile
                </button>
                {this.state.isVisible ? {this.state.name}: (<h3>click on the button to show list </h3>)}

            </div>)}
}
 export default List
    
    
        
    






