import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './components/questions';
import $ from 'jquery';

import axios from 'axios';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      question:[]
    }
  }
  componentWillMount()
  {
   axios.get('./src/api/questionSet.json') // JSON File Path
   .then( response => {
     this.setState({
     question: response.data
   },function(data){console.log(data)});
 })
 .catch(function (error) {
   console.log(error);
 });



 fetch("http://httpstat.us/500")
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });
  }
  /*getQuestions()
  {
    $.ajax({
      url:"http://jsonplaceholder.typicode.com/todos",
      cache:false,
      success:function(data){
        this.setState({questions:data},function(){
          console.log(data)
        })
      }.bind(this)
    });
  }*/
  render() {
    return (
      <div className="App">
        {/*<Questions getData={this.state.questions}></Questions>*/}
      </div>
    );
  }
}

export default App;
