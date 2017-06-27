import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import GuessSection from "./guess-section";
import GuessCount from "./guess-count";
import GuessList from "./guess-list";

export default function Game(props) {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         guesses: [],
  //         feedback: 'Make your guess!',
  //         correctAnswer: Math.floor(Math.random() * 100) + 1,
  //     };
  // }

  // newGame() {
  //     this.setState({
  //         guesses: [],
  //         feedback: 'Make your guess!',
  //         correctAnswer: Math.floor(Math.random() * 100) + 1,
  //     });
  // }

  // guess(guess) {
  //     guess = parseInt(guess, 10);
  //     if (isNaN(guess)) {
  //         this.setState({
  //             feedback: 'Please enter a valid number'
  //         });
  //         return;
  //     }

  //     const difference = Math.abs(guess - this.state.correctAnswer);

  //     let feedback;
  //     if (difference >= 50) {
  //         feedback = 'You\'re Ice Cold...';
  //     }
  //     else if (difference >= 30) {
  //         feedback = 'You\'re Cold...';
  //     }
  //     else if (difference >= 10) {
  //         feedback = 'You\'re Warm';
  //     }
  //     else if (difference >= 1) {
  //         feedback = 'You\'re Hot!';
  //     }
  //     else {
  //         feedback = 'You got it!';
  //     }

  //     this.setState({
  //         feedback,
  //         guesses: [...this.state.guesses, guess]
  //     });
  // }

  return (
    <div>
      <Header />
      <GuessSection />
      <GuessCount />
      <GuessList />
    </div>
  );
}

// export default connect()(Game);
