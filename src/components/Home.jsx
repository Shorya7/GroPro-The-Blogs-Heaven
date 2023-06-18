import React from "react";
import '../components/Home.css';
import bg1 from '../assets/bg1.jpg';
import {RxDoubleArrowRight} from "react-icons/rx";

const Home = () => {
  return (
    <>
      <nav>
        <span className="logo">
          <h1>GRO.</h1>
          <h1 id="pro">PRO</h1>
        </span>
        <ul>
          <li>
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Pricing
          </li>
          <li>
            Blog
          </li>
          <li>
            Contact
          </li>
          <p>Login</p>
          <button>Register</button>
        </ul>
      </nav>
      <div className="cnt1">
        <img className="bg" src={bg1} alt=" "/>
        <div className="main">
            <span className="head">Our Blog</span>
            <span className="content">
                <h1>Resources for makers & Creatives to learn, sell & grow</h1>
            </span>
            <p className="line">
                The only corporate card and spend management platform designed to help you spend less.
            </p>
            <div className="btn">
                <button id="btn1">Get Started</button>
                <button id="btn2">View Pricing</button>
            </div>
        </div>
    </div>
    <div className="section-1-container">
        <div className="section-1-column">
            <img src="https://p4.wallpaperbetter.com/wallpaper/542/894/377/art-arts-and-crafts-boat-creativity-wallpaper-preview.jpg" alt="Newsletter"/>
            <p>Auto-reply: How to use automated responses for your email lists.</p>
        </div>
        <div className="section-1-column">
            <img src="https://media.istockphoto.com/photos/leadership-concept-picture-id1316038081?b=1&k=20&m=1316038081&s=170667a&w=0&h=L5oaLzpEQvT-hYvgMiFOxfsuav6iCrl2KqcJkSDuXgw=" alt="Auto-mails"/>
            <h3>Marketing</h3>
            <p>Your company might be in need of a social media audit. </p>
        </div>
        <div className="section-1-column">
            <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2021/02/email-marketing-services.png" alt="Marketing"/>
            <p>How can businesses utilize email marketing to nurture their leads.</p>
        </div>
    </div>
    <hr id="lin1"/>
    <div className="section-2-container">
    <div className="section-2-column1">
      <h1>Most Featured Content</h1>
      <RxDoubleArrowRight id="ic" />
      </div>
        <div className="section-2-column">
            <img src="https://media.istockphoto.com/photos/colorful-background-picture-id1280385511?b=1&k=20&m=1280385511&s=170667a&w=0&h=4-KMkIqgyw2gTBMTBbYZVZoidwRsWZzr3q0xyUDYhas=" alt=""/>
            <h3>Design</h3>
            <p>Your company might be in need of a social media audit.</p>
        </div>
        <div className="section-2-column">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIGqssKSGLKsAkvkFejTZLOm4jT7L5MSem9A&usqp=CAU"alt=""/>
            <h3>Development</h3>
            <p>How can businesses utilize email marketing to nurture. </p>
        </div>
        <div className="section-2-column">
            <img src="https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhbWVyYXxlbnwwfHwwfHw%3D&w=1000&q=80"alt=""/>
            <h3>Photography</h3>
            <p>Auto-reply: How to use automated responses.</p>
        </div>
        <div className="section-2-column">
            <img src="https://images.pexels.com/photos/1229942/pexels-photo-1229942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"alt=""/>
            <h3>Photography</h3>
            <p> The correct marketing analysis tools can help you.</p>
        </div>
        <div className="section-2-column">
            <img src="https://opensource.com/sites/default/files/lead-images/code_development_programming.png"alt=""/>
            <h3>Development</h3>
            <p>Is your company facing a customer engagement.</p>
        </div>
        <div className="section-2-column">
            <img src="https://media.istockphoto.com/photos/change-concepts-with-red-paper-airplane-leading-among-white-picture-id1248011917?b=1&k=20&m=1248011917&s=170667a&w=0&h=nwp_BwWfMMata-qwb4yLPv1nz_HWZwhPN4EW0svYBq0="alt=""/>
            <h3>Design</h3>
            <p>The top 7 marketing trends for October 2022</p>
        </div>
    </div>
    <hr id="lin1"/>
    <div className="section-2-container">
    <div className="section-2-column1">
      <h1>News</h1>
      <RxDoubleArrowRight id="ic2" />
      </div>
        <div className="section-2-column">
            <img src="https://images.indianexpress.com/2023/06/moeen-ali.jpg?resize=450,250" alt=""/>
            <h3>Sports</h3>
            <p>Ashes: Moeen Ali fined 25% of match fee for using drying agent</p>
        </div>
        <div className="section-2-column">
            <img src="https://images.indianexpress.com/2023/06/iPadOS-17-1-1.jpg?w=640"alt=""/>
            <h3>Technology</h3>
            <p>iPadOS 17 gets improved Stage Manager and interactive widgets</p>
        </div>
    </div>
    <hr id="lin1"/>
    <div className="section-2-container">
    <div className="section-2-column1">
      <h1>Jobs</h1>
      <RxDoubleArrowRight id="ic2" />
      </div>
        <div className="section-2-column">
            <img src="https://wallpaperaccess.com/full/6578144.jpg" alt=""/>
            <h3>Tata Group</h3>
            <p>Regional Sales Manager-Supply Chain-Sales-Delhi-Videocon Towers-MM</p>
        </div>
        <div className="section-2-column">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/CoreLogic_logo.svg/1200px-CoreLogic_logo.svg.png"alt=""/>
            <h3>CoreLogic</h3>
            <p>Senior Cloud Engineer</p>
        </div>
    </div>
      <footer>
        <div className="contain">
          <ul className="lst">
            <h3>PRODUCT</h3>
            <li>Insights</li>
            <li>Risk Processing</li>
            <li>PCI Compliance</li>
            <li>Integrations</li>
            <li>Pricing</li>
          </ul>
          <ul className="lst">
            <h3>FOR DEVELOPERS</h3>
            <li>Docs</li>
            <li>Knowledge base</li>
            <li>System status</li>
            <li>Tutorials</li>
            <li>Blog</li>
          </ul>
          <ul className="lst">
            <h3>FOR BRANDS</h3>
            <li>Brands</li>
            <li>Performance Marketing</li>
            <li>Publishers</li>
            <li>Styleguide</li>
          </ul>
          <ul className="lst">
            <h3>RESOURCES</h3>
            <li>Case Studies</li>
            <li>Events</li>
            <li>Blog</li>
            <li>Portfolio</li>
          </ul>
          <ul className="lst">
            <h3>ABOUT</h3>
            <li>Contact Us</li>
            <li>Leadership</li>
            <li>Careers/Team</li>
            <li>Press/News</li>
            <li>About Us</li>
          </ul>
        </div>
        <hr />
        <div className="foot">
          <ul className="bottom">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Security</li>
          </ul>
          <ul>
            <li>&copy;SHORYA | All Rights Reserved</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Home;
