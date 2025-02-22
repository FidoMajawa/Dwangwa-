
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Dwangwa CCAP</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our History</h2>
          <p className="text-gray-600 mb-6">
            Dwangwa CCAP (Church of Central Africa Presbyterian) was established in the heart of Dwangwa 
            to serve the spiritual needs of the local community. Since our founding, we have grown into 
            a vibrant congregation dedicated to spreading God's word and serving our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To spread the gospel of Jesus Christ, nurture spiritual growth, and serve 
              our community through worship, fellowship, and outreach programs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be a beacon of hope and transformation in Dwangwa, leading people to 
              Christ and building a strong, faithful community.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Sunday Worship Service</li>
            <li>Bible Study Groups</li>
            <li>Youth Ministry</li>
            <li>Women's Guild (Amayi a Chigwirizano)</li>
            <li>Men's Guild (Madodana)</li>
            <li>Children's Ministry</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Location & Contact</h2>
          <p className="text-gray-600">
            We are located in Simlemba, Kasungu District, Malawi. Join us for worship 
            and fellowship as we grow together in faith and service to our Lord Jesus Christ.
          </p>
          <div className="mt-4 text-gray-600">
            <p>Service Times: Sunday 9:00 AM</p>
            <p>Contact: +265 999 895 314</p>
            <p>Email: dwangwaccap@example.com</p>
          </div>
        </div>
      </div>
      <footer>
      <p>&copy; 2024 Dwangwa CCAP. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default About;
