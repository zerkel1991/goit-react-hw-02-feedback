import React from 'react';
import FeedBackBtn from 'components/FeedBackBtn/FeedBackBtn';
import FeedBackStats from 'components/FeedBackStats/FeedBackStats';
import Section from 'components/Section';
import Notification from 'components/Notification';

class FeedBackCounter extends React.Component {


    state = {
    good: 0,
    neutral: 0,
    bad: 0,
};

addGood = () =>{
this.setState(prevState =>{
return {
    good: prevState.good +1,

}
});
};

addNeutral = () =>{
  this.setState(prevState =>{
  return {
      neutral: prevState.neutral +1
  }
  });
  };

addBad = () =>{
    this.setState(prevState =>{
    return {
        bad: prevState.bad +1
    }
    });
    };

countTotalFeedback = () =>{
  return (this.state.good + this.state.neutral + this.state.bad)
};

countPositiveFeedbackPercentage= () =>{
  return (

Math.round(this.state.good / this.countTotalFeedback() * 100)
  )
};


render (){
    return (
    <>
    <Section title = "Please leave feedback">
    <FeedBackBtn
      addGood = {this.addGood}
      addNeutral = {this.addNeutral}
      addBad = {this.addBad}/>
    </Section>
    {this.countTotalFeedback()
    ?
    <Section title= "Statistic">
      <FeedBackStats
      good = {this.state.good}
      neutral = {this.state.neutral}
      bad = {this.state.bad}
      total = {this.countTotalFeedback()}
      positive = {this.countPositiveFeedbackPercentage()}/>
      </Section>
      :
      <Notification text = {'There is no feedback'}/> }

    </>
 );
  }
}

export default FeedBackCounter;
