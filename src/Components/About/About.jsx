import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="bg-wpr"></div>
      <div className="about">
        <div className="about-wpr">
          <div className="min-w-[220px]">
            <h2>How we work ?</h2>
            <img src="/assets/about1.png" alt="about1" className="zoom"/>
            <p>
              GFG ADGITM chapter organises regular contests , hackathons ,
              weekly and monthly meets , sessions with mentors and seniors , all
              to bring out the best in us and motivate us to aspire high in the
              future.
            </p>
          </div>
          <div className="min-w-[220px]">
            <h2>Our Goal</h2>
            <img src="/assets/about2.png" alt="about2" className="zoom"/>
            <p>
              To provide students with all the mentorship, resources, and
              opportunities they need to develop top-notch programming skills
              and compete on a global scale.
            </p>
          </div>
          <div className="min-w-[220px]">
            <h2>Why Should you Join Us?</h2>
            <img src="/assets/about3.png" alt="about3" className="zoom"/>
            <p>
              You learn many things, like how to work with a team, how to manage
              the schedule along with your studies. So you learn how to talk to
              people, approach companies, how to talk to guests, how to deal
              with your college management.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
