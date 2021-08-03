import { tsBooleanKeyword } from "@babel/types";
import React, {useEffect} from "react";
import Row from './Components/Row'
import Header from './Components/Header'
import '../src/App.css'
import image from './images/hero.png'
import Navbar from './Components/Navbar'
import JobList from './Layouts/JobList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

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

  return (
    <Router>
    <div className="World">
      <div className="Container">
        <Navbar/>
        <Header title="Jobs in healthtech"
          subtitle="Join companies in their mission to revolutionise healthcare as we know it."
          image={image}
          description="Email jobshealthtech@gmail.com to post a job"/>
      <h4>{jobsData.length} jobs found</h4>
          <Switch>
            <Route path="/" exact component={JobList} />
            <Route path="/welele" exact component={Navbar}/>
          </Switch>
        </div>
      </div>
      </Router>
  )
}

}


export default App;
