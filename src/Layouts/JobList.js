import React from "react";
import '../Layouts/JobList.css'
import Row from '../Components/Row'

class JobList extends React.Component {

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
    <div className="World-JobList">
      <div className="JobList">
      {jobsData.map(job => (
        <Row link={job.fields.link} logo={job.fields.logo[0].url} companyname={job.fields.company} location={checkAll(job.fields.location)} jobtitle={job.fields.jobtitle}/>
      ))}
        </div>
        </div>
  )
}

}


export default JobList;