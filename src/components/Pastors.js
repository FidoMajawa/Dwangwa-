
import React from 'react';

const Pastors = () => {
  const pastorsList = [
    {
      name: "Rev. J.J. Namanja",
      image: "images/pastor-1.jpg",
      role: "Senior Pastor",
      contact: "john.smith@church.com",
      phone: "(555) 123-4567",
      description: "Rev. John Smith has been serving our community for over 20 years with dedication and compassion."
    },
    {
      name: "Pastor Henry Johnson",
      image: "/images/pastor-1.jpg",
      role: "Associate Pastor",
      contact: "Henty.johnson@church.com",
      phone: "(555) 234-5678",
      description: "Pastor Henry leads our youth ministry and community outreach programs with enthusiasm and love."
    },
    {
      name: "Pastor Michael Brown",
      image: "/images/pastor-1.jpg",
      role: "Worship Pastor",
      contact: "michael.brown@church.com",
      phone: "(555) 345-6789",
      description: "Pastor Michael brings over 15 years of experience in worship ministry and musical leadership."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Pastoral Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pastorsList.map((pastor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={pastor.image} 
              alt={pastor.name}
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{pastor.name}</h3>
              <p className="text-indigo-600 font-medium mb-2">{pastor.role}</p>
              <p className="text-gray-600 mb-4">{pastor.description}</p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Email: </span>
                  {pastor.contact}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Phone: </span>
                  {pastor.phone}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer>
      <p>&copy; 2024 Dwangwa CCAP. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default Pastors;
