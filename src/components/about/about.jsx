import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import '../../stylesheets/about.css';

function About() {
  return (
    <section>
      <div className="row">
        <ScrollAnimation animateIn="fadeInLeft" duration={1}>
          <h2 id="hip-hop">
            <strong>H</strong>EALTHY <br />
            <strong>I</strong>NDEPENDENT <br />
            <strong>P</strong>EOPLE <br />
            <strong>H</strong>ELPING <br />
            <strong>O</strong>THER <br />
            <strong>P</strong>EOPLE <br />
          </h2>
        </ScrollAnimation>
        <div>
          <p>
            Style Proz Crew is a elite team of breakdance acrobatic, hip hop
            dance performers. Our mission is to promote real hip hop (healthy
            independent people helping other people) in a family-friendly,
            fun-loving atmosphere. Style Proz Crew was originally founded by
            Sidney "Sycho Sid " Tolbert in 2006, and has been nationally
            providing entertainment for tourists of all ages. We have
            established ourselves as one of the top street dance shows
            worldwide. We have been featured on 2 seasons of Americas Got
            Talent, movies , commercials, music videos and tours with major
            artists. Style proz crew has worked with DaBaby, Chance the Rapper,
            Kanye West, Master P, Alicia Keys, Skrillex, The Jabbawockeez,
            Future, Chris Brown and many others .. We have trained tirelessly to
            become THE A-list dance crew. Additionally, we have collaborated
            with top brands in fashion and entertainment. Come see us in a city
            near you! <br />
            What time is it!? <br />
            Showtime!!!!
          </p>
        </div>
      </div>

      <section id="all-day">
        <h1>ALL DAY.</h1>
      </section>
    </section>
  );
}

export default About;