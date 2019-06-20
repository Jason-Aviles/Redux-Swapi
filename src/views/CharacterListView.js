import React, { Component } from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getDATA } from "../actions";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";



class CharacterListView extends Component {
  componentDidMount() {
    // call our action
    this.props.getDATA();
  }

  render() {
    console.log(this.props.characters);
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <SkeletonTheme color="light green" highlightColor="#444">
          <Skeleton height={45} count={5} duration={3} />
        </SkeletonTheme>
      );
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getDATA
  }
)(CharacterListView);
