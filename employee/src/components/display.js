import React, { Component } from 'react';

class Display extends Component {
 constructor()
  {
    super();
    this.state={
      abcd:{}
    }
  }
  editData(x)
  {
      this.setState({
          abcd:{
              Name:x.Name,
              empId:x.empId,
          }
      },function(){
      
       /* let index=this.props.empDetails.findIndex(x=>x.empId===this.state.abcd.empId);
       console.log(index); */
        this.props.onEdit(this.state.abcd);
      })
    
  }
  toggle()
  {
    this.props.onToggle();
  }
   
  render() {

    var empDetails;
    empDetails=this.props.empFromApp.map(
        oneEmpDetail=>{
            return(
            <div key={oneEmpDetail.Name}>
            <label ref='name'>{oneEmpDetail.Name}</label>
            <label ref='id'>{oneEmpDetail.empId}</label>
            <input type='button' value='Edit' onClick={()=>this.editData(oneEmpDetail)} />
            
            </div>
            );}
    );
    return (
      <div>
      <strong>{empDetails}</strong>
      <input type="button" value='Add' onClick={this.toggle.bind(this)}/>
      </div>
    );
  }
}

export default Display;
