import React, { Component } from 'react';
import EventsList from './posts/EventsList';
import Login from './login/login';
import AddEvent from './addevent/AddEvent';

class App extends Component {
  render() {
    


    return (
      <div className="">
        <section id="login-sec">
          <Login/>
        </section>
        <section id="events-sec">
          <div className="container">
            <div className="row">
              <div id="events-list" className="col-8">
              <EventsList/>
              </div>
              <div id="maps-sec" className="col-4">

              </div>
            </div>
          </div>
        </section>
        <section>
            <div className="row">
                <AddEvent/>
            </div>
        </section>
        
        
      </div>
    );
  }
}

export default App;