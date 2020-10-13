import React, { Component} from "react";
import {TextField} from '@material-ui/core';
import { Button } from "@material-ui/core";
import moment from "moment";
import { withRouter } from "react-router-dom"



class AddManager extends React.Component{
     constructor(props){
         super(props)
         this.state={
             listManager: [],
             date: moment().format("DD-MM-YYYY hh:mm:ss")

         }
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChange = (event) => {
         event.preventDefault();
         this.setState({
             [event.target.name]: [event.target.value]
         })
}

     handleSubmit = (event) => {
         event.preventDefault();
         console.log(this.state.date)
         var manager = {
             id: Math.random(),
             value: this.state
 }
      if(localStorage.getItem("manager")==null){
        const listManager = [];
        listManager.push(manager);
        localStorage.setItem("manager", JSON.stringify(listManager));
       }else{
         var listManager = JSON.parse(localStorage.getItem("manager"));
         listManager.push(manager);
         localStorage.setItem("manager", JSON.stringify(listManager))
       }
       this.setState({
        listManager:JSON.parse(localStorage.getItem('manager'))
    });
    this.props.history.push({
        pathname: "/"
    })
 }

    render(){
        return(
            <div className="container">
               
               <h1> Contact Manager Application</h1>
               
                <form  noValidate autoComplete="off" onSubmit={this.handleSubmit}>
 
                <TextField id="outlined-basic" label="Name" variant="outlined" name="Name" onChange={this.handleChange}/> <br/>
                <br/>
               
                <TextField id="outlined-basic" label="Email" variant="outlined" name="Email" onChange={this.handleChange}/> <br/>
                <br/>
                {/* <TextField id="outlined-basic" label="Date Created" variant="outlined" name="date" onChange={this.handleChange}/><br/><br/> */}
                <Button variant="contained" color="primary" type="submit">
                Add
                </Button>

                </form>
                
                
            </div>
        )
    }
}

export default withRouter(AddManager)