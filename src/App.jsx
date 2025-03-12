import React, {Component} from "react";
import Countdown from './Countdown';
import EditEvent  from "./EditEvent";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [
        {id: 0, name: "śniadanie", hour: "07", minute: "00"},
        {id: 1, name: "obiad", hour: "15", minute: "00"},
        {id: 3, name: "kolacja", hour: "19", minute: "00"},
      ],
      editedEvent: {
        id: 3,
        name: "",
        hour: "",
        minute: ""
      }
    };
    this.handleEditEvent = this.handleEditEvent.bind(this);
    this.handleSaveEvent = this.handleSaveEvent.bind(this);
  }

  handleEditEvent(val) {
    this.setState(prevState => {
      return {
        editedEvent: Object.assign(prevState.editedEvents, val)
      }
    });
  }

  handleSaveEvent() {
    this.setState(prevState => ({
      events: [...prevState.events, prevState.editedEvent]
    }));
  }

  render() {
    const ev = this.state.events.map(el => {
      return <Countdown key={el.id} name={el.name} hour={el.hour} minute={el.minute} />
    }); 
    return (
      <div className="app">
        {ev}
        <EditEvent onInputChange={val => this.handleEditEvent(val)} onSave={() => this.handleSaveEvent()}/>
        </div>
    );
  }
}

export default App;
