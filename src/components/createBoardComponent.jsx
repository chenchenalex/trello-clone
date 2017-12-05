import React, { Component } from "react";
import {connect} from 'react-redux';
import {CreateBoardAction} from '../actions/boardActions';
import "../stylesheets/cardBox.css";

class createBoardComp extends Component {
  constructor(props, context) {
    super();
    this.state = {
      displayInput: false
    };
  }

  toggleStatus = e => {
    this.setState({
      displayInput: !this.state.displayInput
    });
  };

  onTextChange = e => {
    this.setState({
      ...this.state, 
      newBoardName: e.target.value
    });
  }

  createNewBoard = e => {
    this.props.createBoard(this.state.newBoardName);
  }

  render() {
    return (
      <div styleName="cardBox">
        {!this.state.displayInput && (
          <div styleName="cardBoxInactiveHeader" onClick={this.toggleStatus} >
            <h1>Create New board</h1>
          </div>
        )}

        {this.state.displayInput && (
          <div styleName="cardBoxHeader">
            <h1>Create New board</h1>

            <button styleName="closeButton" onClick={this.toggleStatus}>
              &times;
            </button>
          </div>
        )}

        {this.state.displayInput && (
          <div styleName="cardBoxInput">
            <label>
              What shall we call the board?
              <input type="text" onChange={this.onTextChange}/>
            </label>
          </div>
        )}

        {this.state.displayInput && (
          <div styleName="cardBoxActions">
            <a onClick={this.toggleStatus} className="cancel">
              Cancel
            </a>
            <button className="confirm" onClick={this.createNewBoard}>Confirm</button>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps (state, ownProps){
  return {}
}

function mapDispatchToProps (dispatch, ownProps){
  return {
    createBoard: (boardName) => {
      dispatch(CreateBoardAction(boardName));
    }
  }
}

const createBoard = connect(mapStateToProps, mapDispatchToProps)(createBoardComp);

export default createBoard;
