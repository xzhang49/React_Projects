import React from 'react';
import './App.css';

import store from "./index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import List from "./components/List.js";
import { actions, getList } from "./modules/index";
import selectors from "./modules/selectors";

class App extends React.Component {
  componentDidMount() {
    store.dispatch(getList());
  }

  render() {
    const { myList, recommendation, actions } = this.props;
    const { removeItem, addItem } = actions;
    return (
      <div>
        <List
          title="My List"
          content={myList}
          handleFunction={removeItem}
        />
        <List
          title="Recommendations"
          content={recommendation}
          handleFunction={addItem}
        />
        <h2>My List</h2>
        <ul>
          {myList.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myList: selectors.getMyList(state),
    recommendation: selectors.getRecommendation(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
