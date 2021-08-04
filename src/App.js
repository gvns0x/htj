import { tsBooleanKeyword } from "@babel/types";
import React, {useEffect} from "react";
import Row from './Components/Row'
import Header from './Components/Header'
import '../src/App.css'
import Navbar from './Components/Navbar'
import JobList from './Layouts/JobList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import hero from './images/hero.png'
import LastUpdate from './Components/LastUpdate'
class App extends React.Component {
  
    state = {
      jobsData: []
    }
  
    componentDidMount() {
      fetch(process.env.REACT_APP_AIRTABLE_API)
        .then(res => res.json())
        .then(res => {
          console.log(res.records)
          this.setState({ jobsData: res.records })
        })
        .catch(error => console.log(error))
      
      ReactGA.initialize(process.env.REACT_APP_GA);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }

render() {
  const { jobsData } = this.state

  /* Join both locations of a job into one string */
  function checkAll(e) {
    const newLocationArray = e.join(" / ")
    return newLocationArray
  }

  const mostRecentDate = (e) => {
    const allDates = ["Loading"];
    
    /* Getting all date values in a Date format inside of the array */
    for (var i = 0; i < jobsData.length; i++) {
      allDates.push(new Date(jobsData[i].createdTime))
    }

    /* Getting the most recent date from the array */
    const mostRecentObject = allDates.reduce((a, b) => {
      return a > b ? a : b;
    })

    /* Truning that date into a string */
    const mostRecent = mostRecentObject.toString()

    return mostRecent;
  }

  mostRecentDate();

  return (
    <Router>
    <div className="World"> 
      <div className="Container">
        <Navbar/>
        <Header title="Jobs in healthtech"
          subtitle="Join companies in their mission to revolutionise healthcare as we know it."
          image={hero} description="Email jobshealthtech@gmail.com to post a job"/>
          <h3>{jobsData.length} jobs found</h3>
          <LastUpdate lastUpdate={mostRecentDate()}/>
          <Switch>
            <Route path="/" exact component={JobList} />
          </Switch>
</div>
      </div>
      </Router>
  )
}

}


export default App;
