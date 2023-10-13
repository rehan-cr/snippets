class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    })
  }

  submitMessage(){
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input type="text" 
        onChange={this.handleChange.bind(this)}
         value={this.state.input} />
        <button onClick={this.submitMessage.bind(this)} >Button</button>
        <ul>
          {this.state.messages.map((x,i)=>{
              return <li key={i}>{x}</li>
          })}
          <li></li>
        </ul>

        { /* Change code above this line */ }
      </div>
    );
  }
};
