import { tsBooleanKeyword } from "@babel/types";
import React from "react";
import Row from './Components/Row'
import Header from './Components/Header'
import '../src/App.css'
import image from './images/hero.png'
import Navbar from './Components/Navbar'
import JobList from './Layouts/JobList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {

    state = {
      jobsData: []
    }
  
    componentDidMount() {
      // fetch('https://api.airtable.com/v0/appTzCPubfXsFiQPe/joblist?api_key=keySHGXWMkmUB4gL1')
      fetch('https://api.airtable.com/v0/appTzCPubfXsFiQPe/joblist?api_key=keylOENOTjmRd5Du2')
        .then(res => res.json())
        .then(res => {
          console.log(res.records)
          this.setState({ jobsData: res.records })
        })
        .catch(error => console.log(error))
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
            <Route path="/" exact component={JobList}/>
          </Switch>
        </div>
      </div>
      </Router>
  )
}

}


export default App;
