import React from 'react';
import {connect} from 'react-redux';
import './guess-count.css';

export function GuessCount(props) {
    return (
        <p>
            Guess #<span id="count">{props.count}</span>!
        </p>
    );
}

export const mapStateToProps = (state, props) => ({
  count: state.userGuesses.length
})

export default connect(mapStateToProps)(GuessCount);