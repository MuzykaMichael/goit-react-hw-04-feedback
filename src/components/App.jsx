import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notify } from "./Notify/Notify";
import { Statistics } from "./Statistics/Statistics";
import { Feedback } from "./App.styled";
import { useState } from "react";

export const App =()=>{
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);

  const handleClick = ({target:{name}}) => {
    if (name==='good') {
      setGood(prevState=>prevState+1)
    } else if (name==='neutral'){
      setNeutral(prevState=>prevState+1)
    } else if (name==='bad'){
      setBad(prevState=>prevState+1)
    }
  }

  const countTotalFeedback=()=>{
    return(good+neutral+bad);
  }

  const countPositiveFeedbackPercentage=()=>{
    return((good/(good+neutral+bad))*100)
  }


    return (
      <Feedback>
        <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({good,neutral,bad})}
          handleClick={handleClick}
        />
      </Section>

      <Section title='Statistics'>
        {countTotalFeedback()===0 ? (<Notify notification="There is no feedback"/>):
        (<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={countTotalFeedback()}
          percentage={countPositiveFeedbackPercentage()}
          />)}
      </Section>
      </Feedback>
    );
  
}