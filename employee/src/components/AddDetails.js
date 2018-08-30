import React, { Component } from 'react';

class AddDetails extends Component {
  constructor()
  {
    super();
    this.state={
      newData:{
      }
    }
  }
  handleSubmit(event)
  {
    if(this.refs.name.value==='')
    {
      alert("Please enter valid Name!");
    }
    else
    {
      if(this.refs.empId.value!=='')
      {
        console.log("submitted");
        this.setState({
          newData:{
            Name:this.refs.name.value,
            empId:this.refs.empId.value,
          }
        },function(){
          this.props.onAddData(this.state.newData);
        })
      }
      else{
        alert("Enter valid ID");
      }
    }
    event.preventDefault();
  }
  
  render() {
    return (
      <div>
        <h2>Add Employee Data</h2>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div>
        <label>Enter Name</label>
        <input type='text' ref='name' defaultValue={this.props.editedData.Name} />
      </div>
      <div>
        <label>Enter ID</label>
        <input type='number' ref='empId' defaultValue={this.props.editedData.empId} />
      </div>
      <div>
        <input type='submit' value='Submit' />
      </div>
      {/* <div>
        <input type='button' value='Edit' onClick={this.editData.bind(this)} />
      </div> */}
      </form>
      </div>
    );
  }
}

export default AddDetails;
