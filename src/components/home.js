import React from "react";
import { connect } from "react-redux";
import { loadChapters } from "../actions/chapters";
import { Link } from "react-router-dom";
import { LunchAndLearn } from "./lunch-and-learn";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { chapters: {} };
  }

  componentWillReceiveProps(newProps) {
    const newData = newProps.chapters.data;

    if (newData) {
      this.setState({ chapters: newData });
    }
  }

  componentDidMount() {
    const { loadChapters } = this.props;
    loadChapters();
  }

  mapChapters = (chapter, index) => {
    console.log(chapter);
    return <div key={index}>Name: {chapter.name}</div>;
  };

  _renderChapters = () => {
    const { chapters } = this.state;
    if (chapters.length > 0) {
      return chapters.map(this.mapChapters);
    }
  };

  render() {
    return (
      <div className="App">
        <div>this is the home page</div>
        <Link to="/state_test">Link to a workspace for testing</Link>
        <div>Chapters</div>
        {this._renderChapters()}
        <LunchAndLearn defaultValue="Test" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  loadChapters: () => dispatch(loadChapters())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
