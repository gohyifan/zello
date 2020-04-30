import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/Board.css";
import List from "./List";
import AddList from "./AddList";

class Board extends Component {
  state = {
    addingList: false
  };

  toggleAddingList = () => this.setState({ addingList: !this.state.addingList });


  render() {
    const { board } = this.props;
    const { addingList } = this.state;

    return (
        <div className="Board">
          {board.lists.map((listId, index) => {
            return <List listId={listId} key={listId} index={index} />;
          })}
          <div className="Add-List">
            {addingList ? (
              <AddList toggleAddingList={this.toggleAddingList} />
            ) : (
              <div onClick={this.toggleAddingList} className="Add-List-Button">
                <ion-icon name="add" /> Add a list
              </div>
            )}
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({ board: state.board });

export default connect(mapStateToProps)(Board);
