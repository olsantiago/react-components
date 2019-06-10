import React, { Component } from 'react'
import './AddEvent.css'



class AddEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      eventname:  '',
      eventdate: '',
      eventfee: '', 
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { eventname, eventdate, eventfee } = this.state
    console.log("Your Event is Posted as:");
    console.log(this.state);
    alert(`Your Event is Posted! \n 
           Event Name: ${eventname} \n 
           Event Date: ${eventdate} \n
           Event Fee: ${eventfee}`)
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }


previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn prev-btn" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button 
        className="btn next-btn" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() {    
    return (
      <div className="addevent-container">
      <div className="addevent-form">
      <React.Fragment >
      <h1>Post an Event</h1>
      <p className="step-num">Step {this.state.currentStep} </p> 

      <form onSubmit={this.handleSubmit}>

        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          eventname={this.state.eventname}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          eventdate={this.state.eventdate}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          eventfee={this.state.eventfee}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
      </div>
      </div>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="eventname">Event Name</label>
      <input
        className="event-input"
        id="eventname"
        name="eventname"
        type="text"
        placeholder=""
        value={props.eventname}
        onChange={props.handleChange}
        />
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="eventdate">Event Date</label>
      <input
        className="event-input"
        id="eventdate"
        name="eventdate"
        type="text"
        placeholder=""
        value={props.eventdate}
        onChange={props.handleChange}
        />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="eventfee">Event Fee</label>
      <input
        className="event-input"
        id="eventfee"
        name="eventfee"
        type="text"
        placeholder=""
        value={props.eventfee}
        onChange={props.handleChange}
        />      
    </div>
    <button className="btn submit-btn">Sign up</button>
    </React.Fragment>
  );
}


export default AddEvent