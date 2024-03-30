import React from "react";
import './HomePage.css';
import ProfileCard from '../../components/ProfileCard/ProfileCard';



function HomePage() {
  return (
    <>

      <h2>
        Welcome to my Web Dev Portfolio
      </h2>
      <ProfileCard />
      <article className="about-app">
        <h3 style={{ textAlign: 'center'}}>About this app</h3>
        <p>
          This website incorporates the following technologies which are briefly
          explained below and demonstrated in each page. I am looking to become
          a full-stack developer to utilize these skills while creating value
          for a company.
        </p>
        <dl>
          <dt>HTML</dt>
          <dd>
            HyperText Markup Language (HTML) is the markup language used to
            create the structure of websites.
          </dd>
          <dt>CSS</dt>
          <dd>
            Cascading Style Sheets (CSS) is responsible for the style of the
            webpage, from the layout, fonts, colors, and all visual appearance.
          </dd>
          <dt>JavaScript</dt>
          <dd>
            JavaScript is a programming language that allows a webpage to be
            interactive. It is used to create dynamic content, such as events.
          </dd>
          <dt>Node</dt>
          <dd>
            Node.js is an asynchronous event-drive JavaScript runtime that
            allows JavaScript code to be executed on the server. It is used to
            build scalable network applications.
          </dd>
          <dt>Express</dt>
          <dd>
            Express is a web application framework for Node.js. It provides
            routing, middleware, and HTTP request and response handling, allowing
            for a simpler web app building process.
          </dd>
          <dt>Asynchronous Programming</dt>
          <dd>
            Asynchronous Programming is a programming concept where tasks
            are handled independently, allowing for other tasks to run without
            waiting. For example, if you are making coffee, you async it to brew
            and do something else while it is brewing. Then you await until it is
            done brewing.
          </dd>
          <dt>DOM Changes</dt>
          <dd>
            The Document Object Model (DOM) represents the structure of an
            HTML document where it can be interacted with. JavaScript is able to
            manipulate the DOM, allowing for dynamic changes.
          </dd>
          <dt>Responsive Design</dt>
          <dd>
            Responsive Design is a web design concept where pages are made
            to render functionally on all screen sizes.
          </dd>
          <dt>MongoDB</dt>
          <dd>
            MongoDB is a NoSQL (non-relational) database where data is
            typically stored in a JSON string.
          </dd>
          <dt>Mongoose</dt>
          <dd>
            Mongoose is a Node library for interfacing with MongoDB
            databases.
          </dd>
          <dt>React</dt>
          <dd>
            React.js is a component based JavaScript framework/library for
            building user interfaces. This website was made with React!
          </dd>
        </dl>
      </article>
    </>
  );
}

export default HomePage;
