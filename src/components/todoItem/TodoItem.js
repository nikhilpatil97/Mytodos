import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../App.css'

export default class TodoItem extends Component {
    constructor(props){
        super(props)
        this.state={
            isChecked: this.props.todo.completed
        }
    }
    getStyle=(completed)=>{
        if(completed){
            console.log("complete");
            this.state={isChecked:true}
        }
       return{
           background: '#e4d3cf',
           padding: '10px',
           textDecoration:this.props.todo.completed ?
           'line-through' : 'none',
        
       }

    }

    //Check todoo
    // markComplete(e){
    //     console.log(this.props);
    // } <input type="checkbox" onChange={this.markComplete.bind()}

    render() {
       const { id ,title, completed}= this.props.todo;
        return (
            <div style={this.getStyle(completed)}>
                <p>
                    <input type="checkbox" defaultChecked={this.state.isChecked} onChange={this.props.markComplete.bind(this, id)} />
                    {title}
                    <button style={btnStyle} onClick={this.props.deleteTodo.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
}

//css
const btnStyle={
    background: '#e84545',
    color: 'white',
    padding: '5px 9px',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    float: 'right'
}



//PropTypes
TodoItem.propTypes={
    todo:PropTypes.object.isRequired
}