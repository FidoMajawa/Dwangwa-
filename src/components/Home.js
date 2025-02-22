import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="site-content">
    {/* Your components go here */}
    <SiteHeader />
    <Hero />
    <Features />
    <Pastors />
    <Families />
    <Contact />
    <Map />
    <Footer />
  </div>
);

export default Home;
// Header component
const SiteHeader = () => (
  <div className="site-header bg-purple-900 text-white shadow-lg">
    <div className="container mx-auto p-4">
      <div className="header-bar flex justify-between items-center">
        <div className="branding flex items-center">
          <img src="images/logo.png" alt="logo" className="w-12 h-12 rounded-full" />
          <h1 className="ml-4 text-2xl font-bold">DWANGWA CCAP</h1>
        </div>
        <div className="main-navigation">
          <ul className="menu flex space-x-4">
            <li className="menu-item">
              <a href="/about" className="hover:underline">About us</a>
            </li>
            <li className="menu-item">
              <a href="/pastors" className="hover:underline">Pastors</a>
            </li>
            <li className="menu-item">
              <a href="/events" className="hover:underline">Events</a>
            </li>
            <li className="menu-item">
              <a href="/payments" className="hover:underline">Make Offering</a>
            </li>
            <li className="menu-item">
              <a href="/join" className="hover:underline">Join Us</a>
            </li>
            <li className="menu-item">
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// Transition area component
const TransitionArea = () => (
  <div className="transition-area bg-gray-100 py-8">
    <div className="container mx-auto text-center">
      <p className="text-gray-700 text-lg">
        This is the transition area below the header. Content goes here.
      </p>
    </div>
  </div>
);

// Hero component with text and image transitions
const Hero = () => {
  const slides = [
    {
      title: "Dwangwa Youth Annual Conference",
      date: "22 - 25 August 2024",
      description:
        "The Youth Annual Conference at Dwangwa CCAP is a vibrant gathering of young people dedicated to spiritual growth and community service. It offers dynamic worship, inspiring teachings, and opportunities for fellowship, all aimed at empowering youth to become future leaders rooted in Christian values.",
      image: "images/youth1.jpg",
      link: "#",
    },
    {
      title: "Women Annual Meeting",
      date: "15 - 18 August 2024",
      description:
        "Women annual conference at Chizungu CCAP (Kakonje Presbytery). Join us for a time of spiritual renewal, fellowship, and inspiring sessions tailored for women of faith.",
      image: "images/slider-1.jpg",
      link: "#",
    },
  ];
  

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gray-900">
      <ul className="w-full h-full">
        {slides.map((slide, index) => (
          <li
            key={index}
            className={`absolute w-full h-full flex items-center justify-center animate-fade-in-out`}
            style={{
              animation: `slideshow 10s infinite ${index * 5}s`,
              opacity: 0,
            }}
          >
            <div className="container mx-auto px-4 flex items-center">
              {/* Image Section */}
              <div
                className="w-1/2 h-[400px] bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                }}
              ></div>

              {/* Text Section */}
              <div className="w-1/2 pl-8 text-white">
                <h1 className="text-5xl font-bold mb-4 animate-slide">
                  {slide.title}
                </h1>
                <small className="text-lg text-gray-300 block mb-4 animate-slide">
                  {slide.date}
                </small>
                <p className="text-lg mb-8 leading-relaxed animate-fade">
                  {slide.description}
                </p>
                <a
                  href={slide.link}
                  className="inline-block px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full transition duration-300"
                >
                  Get more information
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideshow {
          0%,
          45% {
            opacity: 1;
          }
          50%,
          95% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-fade-in-out {
          opacity: 0;
        }
        .animate-fade {
          animation: fade 1s ease-in-out;
        }
        .animate-slide {
          animation: slide 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

// Final layout
const Layout = () => (
  <div>
    <SiteHeader />
    <TransitionArea />
    <Hero />
  </div>
);


// Features component
const Features = () => (
  <div id="about" className="fullwidth-block">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="feature">
            <div className="feature-icon">
              <img src="images\pastor1.jpg" alt="" className="icon" />
            </div>
            <h2 className="feature-title">Who we are?</h2>
            <p>
              Welcome to Dwangwa CCAP! We are a community of believers dedicated to serving God and our neighbors. Learn
              more about our mission, history, values, and leadership below.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="feature">
            <div className="feature-icon">
              <img src="images/icon-candles.png" alt="" className="icon" />
            </div>
            <h2 className="feature-title">Our Mission</h2>
            <p>
              Our mission is to spread the teachings of Jesus Christ and to serve our community with love and compassion.
              We strive to be a beacon of hope and faith in Dwangwa, providing spiritual guidance and support to all who
              seek it.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="feature">
            <div className="feature-icon">
              <img src="images/icon-cross.png" alt="" className="icon" />
            </div>
            <h2 className="feature-title">Our creed</h2>
            <p>We are rooted in the teachings of Jesus Christ and seek to live out our faith in all that we do.</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="feature">
            <div className="feature-icon">
              <img src="images/icon-star.png" alt="" className="icon" />
            </div>
            <h2 className="feature-title">Love & Peace</h2>
            <ul>
              <li>
                <strong>Faith:</strong> We are rooted in the teachings of Jesus Christ and seek to live out our faith in all that we do.
              </li>
              <li>
                <strong>Community:</strong> We believe in the power of community and strive to create a welcoming and supportive environment for all.
              </li>
              <li>
                <strong>Service:</strong> We are committed to serving others and making a positive impact in our community.
              </li>
              <li>
                <strong>Integrity:</strong> We conduct ourselves with honesty and integrity, upholding the values of our faith in all our actions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Pastors component
const Pastors = () => (
  <div id="pastors" className="fullwidth-block" data-bg-color="#4a3173">
    <div className="container">
      <h2 className="section-title">Meet our Church Leaders</h2>
      <p className="section-intro">Meet our dedicated church leaders who lead our congregation with faith and wisdom.</p>

      <div className="row">
        {[
          { name: 'Rev J.J Namanja', role: 'Pastor', img: 'images/pastor-1.jpg' },
          { name: 'Ben F. Johnson', role: 'Secretary', img: 'images/pastor-2.jpg' },
          { name: 'Richard C. Banda', role: 'Treasurer', img: 'images/pastor-3.jpg' },
          { name: 'Steven S.L Phiri', role: 'Section Clerk', img: 'images/pastor-4.jpg' },
          { name: 'John C. Chisale', role: 'Joined 2010', img: 'images/pastor-5.jpg' },
          { name: 'Steven Dawkins', role: 'Joined 2010', img: 'images/pastor-6.jpg' },
        ].map((pastor) => (
          <div className="col-md-2 col-sm-3 col-xs-6" key={pastor.name}>
            <div className="pastor">
              <img src={pastor.img} alt="" className="pastor-image" />
              <h3 className="pastor-name">{pastor.name}</h3>
              <small className="date">{pastor.role}</small>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a href="html pages/pastors.html" className="button">
          View all our pastors
        </a>
      </div>
    </div>
  </div>
);
  
  ///////////////

  // Families component
const Families = () => (
    <div id="families" className="fullwidth-block">
      <div className="container">
        <h2 className="section-title">Our Sub stations</h2>
        <p className="section-intro">
          Dwangwa CCAP has 7 sub stations which is a combination of different prayer houses under Dwangwa Mission. Click to view more...
        </p>
        <div className="family-list">
          {[
            { name: 'Bwaila', img: 'images/family-1.jpg' },
            { name: 'Kagwamphande', img: 'images/family-2.jpg' },
            { name: 'Vyeyo', img: 'images/family-3.jpg' },
            { name: 'Thasa', img: 'images/family-1.jpg' },
            { name: 'Harrison', img: 'images/family-2.jpg' },
            { name: 'Harrison', img: 'images/family-6.jpg' },
            { name: 'Harrison', img: 'images/family-7.jpg' },
            { name: 'Harrison', img: 'images/family-2.jpg' },
            { name: 'Harrison', img: 'images/family-1.jpg' },
            { name: 'Harrison', img: 'images/family-3.jpg' },
          ].map((station) => (
            <figure className="family" key={station.name}>
              <img src={station.img} alt={station.name} />
              <figcaption>
                <h3 className="family-name">{station.name}</h3>
                <span className="arrow"></span>
              </figcaption>
            </figure>
          ))}
        </div>
        <hr className="space" />
        <div className="text-center">
          <a href="#" className="button">View all families</a>
        </div>
      </div>
    </div>
  );
  
  
  // Contact component
const Contact = () => (
    <div id="contact" className="fullwidth-block" data-bg-color="#4a3173">
      <div className="container">
        <h2 className="section-title">Contact us</h2>
        <p className="section-intro">
          We would love to hear from you! Please feel free to reach out to us with any questions, concerns, or to learn more about our programs and services.
        </p>
        <div className="contact-detail">
          <span><img src="images/icon-marker.png" alt="" className="icon" />Simlemba, Kasungu, Malawi</span><br />
          <span><img src="images/icon-phone.png" alt="" className="icon" />(+265) 999 895 314</span><br />
          <span><img src="images/icon-envelope.png" alt="" className="icon" />Dwangwachurch@gmail.com</span>
        </div>
        <form className="contact-form">
          <div className="row">
            <div className="col-md-6">
              <div className="control">
                <input type="text" placeholder="Your name..." /><img src="images/icon-user.png" alt="" className="icon" />
              </div>
              <div className="control">
                <input type="text" placeholder="Email..." /><img src="images/icon-email.png" alt="" className="icon" />
              </div>
              <div className="control">
                <input type="text" placeholder="Website..." /><img src="images/icon-globe.png" alt="" className="icon" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="control">
                <textarea name="" placeholder="Your message..."></textarea><img src="images/icon-pen.png" alt="" className="icon" />
              </div>
              <p className="text-right">
                <input type="submit" value="Send message" />
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  
  // Map component
  const Map = () => (
    <div className="map" data-latitude="-6.897789" data-longitude="107.621735"></div>
  );
  
  // Footer component
  const Footer = () => (
    <footer>
      <p>&copy; 2024 Dwangwa CCAP. All rights reserved.</p>
    </footer>
  );
  