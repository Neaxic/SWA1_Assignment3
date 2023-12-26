import React from "react";
import { connect } from "react-redux";

const HighScoreCard = ({ highScore }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">High Score</h5>
        <p className="card-text">{highScore}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    highScore: state.highScore,
  };
};

export default connect(mapStateToProps)(HighScoreCard);
