import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom"
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography} from "@material-ui/core";
import { Button } from "@material-ui/core";
import {TextField} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles'




class ListManager extends React.Component{
   constructor(props){
       super(props)
       this.state = {
           listManager: [],
           edit: null,
           Name: "",
           Email: ""
       }
       this.deleteRecord = this.deleteRecord.bind(this);
       this.updateRecord = this.updateRecord.bind(this);
       this.editName = this.editName.bind(this);
       this.editEmail = this.editEmail.bind(this);
   }


   componentDidMount(){
    const data = JSON.parse(localStorage.getItem("manager"));
    this.setState({
        listManager: data,
       
    })
    console.log(data)
  }

  //edit change
  editName = (event) => {
      event.preventDefault();
      this.setState({
          Name: event.target.value
      })
  }

  editEmail = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({
        Email: event.target.value
    })
}
  
//delete manager Record
   deleteRecord = ( key) => {
       var index = key;
       console.log(index);
       var listManager =  JSON.parse(localStorage.getItem("manager"));
       listManager.splice(index,1);
       this.setState({listManager: listManager});
       localStorage.setItem("manager", JSON.stringify(listManager))
   }

   //edit record
   editRecord = (key) => {
       this.setState({ 
           edit: key
       })

   }

   //update record
   updateRecord = (event) => {
       event.preventDefault();
       const { edit } = this.state
       const newData = [...this.state.listManager];
       newData[edit].value.Name = this.state.Name
       newData[edit].value.Email = this.state.Email
       console.log(newData)
       localStorage.setItem("manager", JSON.stringify(newData))
       window.location.reload(true)
   }

 
  
 
    render(){

        return(
            <div className="container" style={{overflow: "hidden"}}>
               <h1 > Manager Lists</h1>
                <Link  to={"/addmanager"} style={{textDecoration: "none"}}>Add Manager</Link>
                <br/>
                <br/>
                <Grid container spacing={3}>

                {
                     this.state.listManager.map((item,index) =>{
                         return  <Grid item xs={12} sm={6} lg={4} key={item.id}>
                              <Card id={index} style={{border: "1px solid rgb(211,211,211)", textAlign: "justify"}} >
                                      <CardContent>
                                      <Typography  color="textSecondary" gutterBottom  > 
                                                   <b>Name:</b>   {item.value.Name}
                                     </Typography>
                                        <Typography color="textSecondary" gutterBottom  >
                                          <b>Email:</b>    {item.value.Email}
                                        </Typography>
                                        <Typography color="textSecondary" gutterBottom  >
                                            <b>Date Created At:</b>  {item.value.date}
                                        </Typography>
                   
                                        <Button variant="contained" color="secondary" onClick={() => this.deleteRecord(item.id)} >Delete</Button>
                                        <Button  color="secondary" onClick={() => this.editRecord(index)} >Edit</Button>
                                        <div  style={{ display: `${this.state.edit !== index ? 'none' : 'block'}`,
                  }}
>
                                        <form  noValidate autoComplete="off" onSubmit={this.updateRecord}>
 
                                                            <TextField id="outlined-basic" label="Name" variant="outlined"  onChange={this.editName}   name="Name"/> <br/>
                                                            <br/>

                                                            <TextField id="outlined-basic" label="email" variant="outlined"  onChange={this.editEmail} name="Email"/> <br/>
                                                            <br/>
                                                            <Button variant="contained" color="secondary" type="submit">
                                                                 Update
                                                            </Button>

</form>
                                        </div>
                                                 </CardContent>
                                  </Card>
                        
                       </Grid>
                        

                     } )
                 }

                </Grid>

               
            </div>
        )
    }
}

export default ListManager
