
import React from 'react';

const Events = () => {

// Events component
const Events1 = () => (
  <div id="events" className="fullwidth-block">
    <div className="container">
      <h2 className="section-title">Upcoming events</h2>
      <p>Stay updated with our upcoming events and activities. We look forward to seeing you there!</p>

      <div className="text-center">
        <a href="html pages/events.html" className="prev-events">
          <img src="images/arrow-left.png" alt="" />
        </a>
        <a href="html pages/events.html" className="next-events">
          <img src="images/arrow-right.png" alt="" />
        </a>
      </div>
      <div className="row">
        {/* Add your event items here */}
      </div>
    </div>
  </div>
);

// Sermons component
const Sermons = () => (
  <div id="seremons" className="fullwidth-block" data-bg-color="#4a3173">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <h3 className="section-title">Upcoming sermons</h3>
          <ul className="seremon-list">
            <li>
              <h3 className="seremon-title"><a href="#">Labore et dolore magna aliqua</a></h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipommodo consequat.</p>
              <div className="seremon-meta">
                <span><i className="fa fa-calendar"></i> <strong>Date:</strong> 05/04/2014</span>
                <span><i className="fa fa-user"></i> <strong>Pastor:</strong> John Birman</span>
              </div>
            </li>
            <li>
              <h3 className="seremon-title"><a href="#">Labore et dolore magna aliqua</a></h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipommodo consequat.</p>
              <div className="seremon-meta">
                <span><i className="fa fa-calendar"></i> <strong>Date:</strong> 05/04/2014</span>
                <span><i className="fa fa-user"></i> <strong>Pastor:</strong> John Birman</span>
              </div>
            </li>
            <li>
              <h3 className="seremon-title"><a href="#">Labore et dolore magna aliqua</a></h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipommodo consequat.</p>
              <div className="seremon-meta">
                <span><i className="fa fa-calendar"></i> <strong>Date:</strong> 05/04/2014</span>
                <span><i className="fa fa-user"></i> <strong>Pastor:</strong> John Birman</span>
              </div>
            </li>
          </ul>
          <a href="#" className="button">See all upcoming sermons</a>
        </div>
        <div className="col-md-5 col-md-offset-2">
          <h3 className="section-title">Latest sermons</h3>
          <ul className="seremon-list">
            <li>
              <h3 className="seremon-title"><a href="#">Labore et dolore magna aliqua</a></h3>
              <div className="seremon-meta">
                <span><i className="fa fa-calendar"></i> <strong>Date:</strong> 05/04/2014</span>
                <span><i className="fa fa-user"></i> <strong>Pastor:</strong> John Birman</span>
              </div>
              <a href="Audios/preaching.mp3" className="button secondary">
                <img src="images/icon-headset.png" alt="" className="icon" /> Audio record
              </a>
              <a href="Videos/video1.mp4" className="button secondary">
                <img src="images/icon-film.png" alt="" /> Video record
              </a>
            </li>
            <li>
              <h3 className="seremon-title"><a href="#">Labore et dolore magna aliqua</a></h3>
              <div className="seremon-meta">
                <span><i className="fa fa-calendar"></i> <strong>Date:</strong> 05/04/2014</span>
                <span><i className="fa fa-user"></i> <strong>Pastor:</strong> John Birman</span>
              </div>
              <a href="#" className="button secondary">
                <img src="images/icon-headset.png" alt="" className="icon" /> Audio record
              </a>
              <a href="#" className="button secondary">
                <img src="images/icon-film.png" alt="" /> Video record
              </a>
            </li>
            <li>
              <h3 className="seremon-title"><a href="#">Labore et dolore magna aliqua</a></h3>
              <div className="seremon-meta">
                <span><i className="fa fa-calendar"></i> <strong>Date:</strong> 05/04/2014</span>
                <span><i className="fa fa-user"></i> <strong>Pastor:</strong> John Birman</span>
              </div>
              <a href="#" className="button secondary">
                <img src="images/icon-headset.png" alt="" className="icon" /> Audio record
              </a>
              <a href="#" className="button secondary">
                <img src="images/icon-film.png" alt="" /> Video record
              </a>
            </li>
          </ul>
          <a href="#" className="button">See all latest sermons</a>
        </div>
      </div>
    </div>
  </div>
);



  const churchEvents = [
    {
      id: 1,
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "8:00 AM - 10:30 AM",
      venue: "Main Sanctuary",
      description: "Weekly worship service featuring praise and worship, prayer, and sermon."
    },
    {
      id: 2,
      title: "Youth Fellowship",
      date: "Every Saturday",
      time: "2:00 PM - 4:00 PM",
      venue: "Youth Hall",
      description: "Weekly youth gathering for Bible study, fellowship, and activities."
    },
    {
      id: 3,
      title: "Women's Guild Meeting",
      date: "First Sunday of every month",
      time: "2:00 PM - 4:00 PM",
      venue: "Church Hall",
      description: "Monthly meeting for women's ministry, prayer, and planning outreach activities."
    },
    {
      id: 4,
      title: "Easter Conference",
      date: "April 7-9, 2024",
      time: "8:00 AM - 5:00 PM",
      venue: "Main Sanctuary",
      description: "Annual Easter conference featuring guest speakers, worship sessions, and fellowship."
    },
    {
      id: 5,
      title: "Bible Study",
      date: "Every Wednesday",
      time: "5:30 PM - 7:00 PM",
      venue: "Church Library",
      description: "Mid-week Bible study and prayer meeting for spiritual growth."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Dwangwa CCAP Church Events
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {churchEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {event.title}
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.venue}</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>

      <div id="events" className="fullwidth-block">
    <div className="container">
      <h2 className="section-title">Upcoming events</h2>
      <p>Stay updated with our upcoming events and activities. We look forward to seeing you there!</p>

      <div className="text-center">
        <a href="html pages/events.html" className="prev-events">
          <img src="images/arrow-left.png" alt="" />
        </a>
        <a href="html pages/events.html" className="next-events">
          <img src="images/arrow-right.png" alt="" />
        </a>
      </div>
      <div className="row">
        {/* Add your event items here */}
      </div>
    </div>
  </div>
);

  <div id="seremons" className="fullwidth-block" data-bg-color="#4a3173">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <h3 className="section-title">Upcoming sermons</h3>
          <ul className="seremon-list">
            <li>
              <h3 className="seremon-title"><a href="#">Labore et dolore magna aliqua</a></h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipommodo consequat.</p>
              <div className="seremon-meta">
                <span><i className="fa fa-calendar"></i> <strong>Date:</strong> 05/04/2014</span>
                <span><i className="fa fa-user"></i> <strong>Pastor:</strong> John Birman</span>
              </div>
            </li>
            <li>
              <h3 className="seremon-title"><a href="#">Labore et dolore magna aliqua</a></h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipommodo consequat.</p>
              <div className="seremon-meta">
                <span><i className="fa fa-calendar"></i> <strong>Date:</strong> 05/04/2014</span>
                <span><i className="fa fa-user"></i> <strong>Pastor:</strong> John Birman</span>
              </div>
            </li>
            <li>
              <h3 className="seremon-title"><a href="#">Labore et dolore magna aliqua</a></h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipommodo consequat.</p>
              <div className="seremon-meta">
                <span><i className="fa fa-calendar"></i> <strong>Date:</strong> 05/04/2014</span>
                <span><i className="fa fa-user"></i> <strong>Pastor:</strong> John Birman</span>
              </div>
            </li>
          </ul>
          <a href="#" className="button">See all upcoming sermons</a>
        </div>
        <div className="col-md-5 col-md-offset-2">
          <h3 className="section-title">Latest sermons</h3>
          <ul className="seremon-list">
            <li>
              <h3 className="seremon-title"><a href="#">Labore et dolore magna aliqua</a></h3>
              <div className="seremon-meta">
                <span><i className="fa fa-calendar"></i> <strong>Date:</strong> 05/04/2014</span>
                <span><i className="fa fa-user"></i> <strong>Pastor:</strong> John Birman</span>
              </div>
              <a href="Audios/preaching.mp3" className="button secondary">
                <img src="images/icon-headset.png" alt="" className="icon" /> Audio record
              </a>
              <a href="Videos/video1.mp4" className="button secondary">
                <img src="images/icon-film.png" alt="" /> Video record
              </a>
            </li>
            <li>
              <h3 className="seremon-title"><a href="#">Labore et dolore magna aliqua</a></h3>
              <div className="seremon-meta">
                <span><i className="fa fa-calendar"></i> <strong>Date:</strong> 05/04/2014</span>
                <span><i className="fa fa-user"></i> <strong>Pastor:</strong> John Birman</span>
              </div>
              <a href="#" className="button secondary">
                <img src="images/icon-headset.png" alt="" className="icon" /> Audio record
              </a>
              <a href="#" className="button secondary">
                <img src="images/icon-film.png" alt="" /> Video record
              </a>
            </li>
            <li>
              <h3 className="seremon-title"><a href="#">Labore et dolore magna aliqua</a></h3>
              <div className="seremon-meta">
                <span><i className="fa fa-calendar"></i> <strong>Date:</strong> 05/04/2014</span>
                <span><i className="fa fa-user"></i> <strong>Pastor:</strong> John Birman</span>
              </div>
              <a href="#" className="button secondary">
                <img src="images/icon-headset.png" alt="" className="icon" /> Audio record
              </a>
              <a href="#" className="button secondary">
                <img src="images/icon-film.png" alt="" /> Video record
              </a>
            </li>
          </ul>
          <a href="#" className="button">See all latest sermons</a>
        </div>
      </div>
    </div>
  </div>

    <footer>
    <p>&copy; 2024 Dwangwa CCAP. All rights reserved.</p>
  </footer>
  </div>
    </div>
  );
};

export default Events;
