import React from 'react';
import Element from './Element';

class ListeElement extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ul>{this.props.elems.map((elem) => {
                    var {ukey, txt} = elem;
                    return <Element key={ukey} ukey={ukey} txt={txt} />
                })
            }
            </ul>
        )
    }
}

export default ListeElement;