import React from 'react'
import { Link, graphql } from "gatsby"


// import hrss1 from '../images/hrss1.png'
// import hrss2 from '../images/hrss2.png'
// import hrss3 from '../images/hrss3.png'
// import hrss4 from '../images/hrss4.png'
import foodziess1 from '../images/foodziess1.png'
import weatherornotshot from '../images/weatherornotshot.png'
import overtherainbow from '../images/overtherainbow.png'
import homeroomshot from '../images/homeroomshot.png'

import styles from '../styles/projects.css'
import Layout from '../components/Layout'


export default (props) => {
return(
      <Layout>
        <h1>Projects</h1>
   
      <div className="projectcontainer">
       
      <img src= {homeroomshot}  alt="projects" className="projects"/>
             {/* <section className>
                <img src={hrss1} className="" alt="projectthumbs"/>
                <img src={hrss2} className="" alt="projectthumbs"/>
                <img src={hrss3} className="" alt="projectthumbs"/>
                <img src={hrss4} className="" alt="projectthumbs"/>
               </section> */}
              <p>Homeroom was created to satistfy the mission to make education accessible 
                and empowering for students and teachers. 
                We made it our goal to provide an online classroom with a user friendly experience for 
                students and teachers, enabling assignments to be distributed, managed and updated effectively 
                and efficiently. The world is faced with a dire need for reliable and user-friendly educational 
                software. Students aren’t able to sit face to face with teachers and teachers are forced implement 
                lesson plans from afar.
               
              <h5>Technologies Used</h5>
              <a href="https://homeroom-teamtack.herokuapp.com/" target="__blank">visit Homeroom</a>
               </p>
               </div>
              <div className="projectcontainer">
                   <img src= {foodziess1} alt="projects" className="projects"/>
                     <p>Foodzies is an app that gives food lovers the opportunity to share their love for food with 
                       people who share the same interests.
                       
                       <h5>Technologies Used</h5>
                       <a href="https://foodzies-v1.herokuapp.com/" target="__blank">Visit Foodzies</a>
                       </p>
                        </div>
                         <div className="projectcontainer">
                          <img src= { weatherornotshot } alt="projects" className="projects" />
                          <p> Ever wake up in the morning with nothing to do, but the urge to seize the day? Well Weather Or Not is an app that not only tells you the local weather, it also suggests what to wear. An app using a weather api allowing users to check on the weather whilst simultaneously helping the user decide what may be appropriate 
                          to wear and what to do (eventbrite api) according to the their location and the daily weather expectations.
                          <h5>Technologies Used</h5>
                          <a href="https://weatherornot-app.herokuapp.com/" target="__blank">Visit Weather Or Not</a>
                          </p>
                      </div>
                   <div className="projectcontainer">
                <img src={ overtherainbow } alt="projects" className="projects"/>
              <p> "Over The Rainbow" was made for the user that wants to explore other worldly desinations. API Powered by NASA

</p>
</div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query {
        indexImage: file(relativePath: { eq: ""}) {
            childImageSharp {
                fluid(maxWidth: 100, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            } 
        }
    }
`;


