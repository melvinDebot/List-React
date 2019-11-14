import React from 'react';
import ListeElement from './Components/ListeElement';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {elems : [] };
  }
  

  getUniqueKey(){
    var key = Math.random() * "";
    return key;
  }

  inserElem(){
    var elems = this.state.elems;
    var txt = "Element" + (elems.length + 1)
    var ukey = this.getUniqueKey();
    var elem = { txt : txt, ukey : ukey};
    elems.push(elem);
    this.setState({ elems : elems })
  }
  render(){
    return(
      <div>
        <button onClick={this.inserElem.bind(this)}>Insérer</button>
        <ListeElement elems={this.state.elems} />
      </div>
    )
  }
}

export default App;
