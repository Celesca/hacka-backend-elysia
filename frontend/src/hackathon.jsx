import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hackathon = () => {
  const [Hackathonlist, setHackathonlist] = useState([]);

  const getHackathon = async () => {
    try {
      const response = await Axios.get('http://localhost:3000/hackathon');
      const data = response.data.map(hackathon => ({
        HackathonID: hackathon.HackathonID,
        Name: hackathon.Name,
        HackathonImage: hackathon.HackathonImage,
        StartDate: hackathon.StartDate,
        EndDate: hackathon.EndDate
      }));

      setHackathonlist(data);
    } catch (error) {
      console.error('Error fetching Hackathon data:', error);
    }
  };

  useEffect(() => {
    getHackathon();
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="bg-gray-700 h-64 flex items-center justify-center">
        <div className="container mx-auto text-center mt-20">
          <h1 className="text-3xl font-bold text-white">
            ยินดีต้อนรับสู่ H2G แหล่งรวมงาน Hackathon ที่ใหญ่ที่สุด
          </h1>
          <p className="mt-2 text-gray-300">
            พบกับกิจกรรมมากมาย
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto py-6">
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">
          กิจกรรมแนะนำ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Hackathonlist.map((hackathon) => (
            <div
              key={hackathon.HackathonID}
              className="bg-gray-800 rounded shadow overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={hackathon.HackathonImage}
                alt={hackathon.Name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-3xl font-bold text-white">{hackathon.Name}</h3>
                <p className="text-lg text-gray-400">เริ่มรับสมัคร {hackathon.StartDate}</p>
                <p className="text-lg text-gray-400">สิ้นสุดรับสมัคร {hackathon.EndDate}</p>
                <Link to={`/EventDetail/${hackathon.HackathonID}`} className="text-black hover:underline">
                  <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transform transition-transform duration-300 hover:scale-110">
                    ดูรายละเอียด
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
