import React, {Component} from "react";

class createBoardComp extends Component {
  constructor (props, context){
    super();
    this.state = {
      displayInput : false
    }
  }

  toggleStatus(){
    this.setState({
      displayInput: !this.state.displayInput
    });
  };

  onTextChange(e) {
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="card-box">
        <div className="card-box-header">
          <h1>Create New board</h1>
            <button className="close" onClick={this.toggleStatus}>&times;</button>
        </div>


        <div className="card-box-input">
          <label>
            What shall we call the board?
            <input type="text" onChange={this.onTextChange} />
          </label>
        </div>

        <div className="actions">
          <a href="#" onClick={this.toggleStatus} className="cancel">
              Cancel
            </a>
          <button className="confirm">Confirm</button>
        </div>
      </div>
    );
  };
}

export default createBoardComp;
