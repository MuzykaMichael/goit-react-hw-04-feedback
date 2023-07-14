import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notify } from "./Notify/Notify";
import { Statistics } from "./Statistics/Statistics";
import { Feedback } from "./App.styled";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleClick = ({target:{name}}) => {
    this.setState(defaultState => ({
      [name]: defaultState[name] + 1,
    }))
  }

  countTotalFeedback(){
    const {good,neutral,bad} = this.state;
    return(good+neutral+bad);
  }

  countPositiveFeedbackPercentage(){
    const {good,neutral,bad} = this.state;
    return((good/(good+neutral+bad))*100)
  }


  render(){
    return (
      <Feedback>
        <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          handleClick={this.handleClick}
        />
      </Section>

      <Section title='Statistics'>
        {this.countTotalFeedback()===0 ? (<Notify notification="There is no feedback"/>):
        (<Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          all={this.countTotalFeedback()}
          percentage={this.countPositiveFeedbackPercentage()}
          />)}
      </Section>
      </Feedback>
    );
  }
  
}