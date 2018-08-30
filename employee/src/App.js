import React, { Component } from 'react';
import './App.css';
import AddDetails from './components/AddDetails';
import Display from './components/display';

class App extends Component {
  constructor()
  {
    super();
    this.state={
    show:true,
    editData:[]
    }
  }
  componentWillMount()
  {
    this.setState({
      
        empData:[
          {
            Name:"Advitya",
            empId:1234
          },
          {
            Name:"Sanyam",
            empId:1235
          },
          {
            Name:"Mishra",
            empId:1236
          }
        ],
        
      
    })
  }
  toggle() {
  	this.setState({show: !this.state.show});
  }
  handleAddData(newemp)
  {
    if(this.state.editData.length!==0)
    {
      console.log("abcd");
      let index;
      index=this.state.empData.findIndex(x=>x.empId===this.state.editData.empId);
      console.log(index);
      console.log(this.state.editData);
      this.state.editData=[];
      this.state.empData.splice(index,1,newemp);
      this.toggle();
    }
    else
    {
      console.log("data is added");
      let detailInfo=this.state.empData;
      console.log(detailInfo);
      detailInfo.push(newemp);
      this.setState({empData:detailInfo});
      console.log(this.state.empData);
      
      this.toggle();
    }
    
  }
  handleEdit(info)
  {
    console.log(info);
    this.state.editData=[];
    let editDataInfo=this.state.editData;
    this.state.editDataInfo=[];
    editDataInfo.push(info)
    this.setState({editData:editDataInfo[0]}
    )
    console.log(this.state.editData);
    this.toggle();
  }
  handleToggle()
  {
    this.toggle();
  }

  render() {
    
      let e;
      if(this.state.show)
      {
        e=(<div className="App"><AddDetails editedData={this.state.editData} onAddData={this.handleAddData.bind(this)}></AddDetails></div>)
      }
      else{
        e=(<div className="App">
        <Display empFromApp={this.state.empData} onToggle={this.handleToggle.bind(this)} onEdit={this.handleEdit.bind(this)}>
        </Display>
        
        </div>)
      }
      return e;
  }
}

export default App;
