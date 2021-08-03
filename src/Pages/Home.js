import React from "react";
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Row from '../Components/Row';
import image from '../images/hero.png'

class Home extends React.Component {

    state = {
        jobsData: []
    }
    
    componentDidMount() {
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
            <div className="Container">
            <Navbar/>
            <Header title="Jobs in healthtech"
          subtitle="Join companies in their mission to revolutionise healthcare as we know it."
          image={image}
          description="Email jobshealthtech@gmail.com to post a job"/>
      <h4>{jobsData.length} jobs found</h4>
      <div className="JobList">
      {jobsData.map(job => (
        <Row link={job.fields.link} logo={job.fields.logo[0].url} companyname={job.fields.company} location={checkAll(job.fields.location)} jobtitle={job.fields.jobtitle}/>
      ))}
                </div>
                </div>
        )
    }
}

export default Home;