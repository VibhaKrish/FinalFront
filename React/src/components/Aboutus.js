import React from 'react';
import '../styles/Aboutus.css';
import Header from './Header';
import Footer from './Footer';

function AboutUs() {
  const teamMembers = ['Chinmayakrishna B', 'Kavya', 'Priyanka', 'Vibha'];

  return (
    <div>
      <Header />

      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-1">
              <div className="about-content">
                <h1>Who Are We?</h1>
                <p>
                  We are a team of developers dedicated to helping HR administrators and organizations to efficiently manage employee information. Our solution allows administrators to edit and access an employee's personal details while empowering employees to keep their profiles up to date.
                </p>
                <p>
                  Our platform also streamlines the process of maintaining employee records, including their IDs, names, mailing addresses, phone numbers, dates of birth, and more. With our solution, all employee information is readily available in just a few seconds.
                </p>
                <div className="team-card">
                  <div className="card-header">Team</div>
                  <ul className="list-group list-group-flush">
                    {teamMembers.map((member, index) => (
                      <li key={index} className="list-group-item">
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2">
              <img
                className="about-image"
                src="https://wallpaperaccess.com/full/5653640.jpg"
                alt="About 1"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;
