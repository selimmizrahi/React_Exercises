import React from 'react';

class Alive extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        alert("I am alive")
    }

    render(){
        return(
            <h1> Helloooo </h1>
        )
    }
}

export default Alive