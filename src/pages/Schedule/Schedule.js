import React from "react";
import "./Schedule.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const events = [
    {
      eventTitle: "Paper Presentaion",
      eventId: "paper & Presentaion",
      eventName: "Paper Presentaion",
      mode: "Offline",
      venue: "IT Department",
      eventDate: "03rd April 2025",
      reportingTime: "8:30 AM",
      eventTime: "10:00 AM",
    },
    {
      eventTitle: "Poster-Presentation",
      eventId: "Poster-Presentation",
      eventName: "Poster-Presentation",
      mode: "Offline",
      venue: "IT Department",
      eventDate: "03rd April 2025",
      reportingTime: "8:30 AM",
      eventTime: "10:00 AM",
    },
    {
      eventTitle: "Code Debugging",
      eventId: "code debug",
      eventName: "Code Debug",
      mode: "Offline",
      venue: "IT Department",
      eventDate: "03rd April 2025",
      reportingTime: "8:30 AM",
      eventTime: "10:00 AM",
    },
    {
      eventTitle: "Technical Quiz",
      eventId: "Technical Quiz",
      eventName: "Technical Quiz",
      mode: "Offline",
      venue: "IT Department",
      eventDate: "03rd April 2025",
      reportingTime: "8:30 AM",
      eventTime: "9:00 AM",
    },
    {
      eventTitle: "Carrom",
      eventId: "Carrom",
      eventName: "Carrom",
      mode: "Offline",
      venue: "IT Department",
      eventDate: "03rd April 2025",
      reportingTime: "8:30 AM",
      eventTime: "10:30 AM",
    },
    {
      eventTitle: "Box-Cricket",
      eventId: "Box-Cricket",
      eventName: "Gaming",
      mode: "Offline",
      venue: "IT Department",
      eventDate: "03rd April 2025",
      reportingTime: "8:30 AM",
      eventTime: "-",
    },
    {
      eventTitle: "The Knight changes",
      eventId: "The Knight changes",
      eventName: "Chess",
      mode: "Offline",
      venue: "IT Department",
      eventDate: "03rd April 2025",
      reportingTime: "8:30 AM",
      eventTime: "10:30 AM onwards",
    },
    {
      eventTitle: "Brain-boom",
      eventId: "Brain-boom",
      eventName: "Connections",
      mode: "Offline",
      venue: "IT Department",
      eventDate: "03rd April 2025",
      reportingTime: "8:30 AM",
      eventTime: "9:30 AM",
    },
  ];

export default function Schedule() {
    return (
        <>
        <Nav/>
        <div className="back-arrow1">
                <Link to="/home">
                <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/0d6efd/circled-left-2.png" alt="circled-left-2"/><span>Back</span>
                </Link>
                
        </div>
        <div>
            <h2 className="title">SCHEDULE</h2>
            <h5 className="sub-title">Participants, We kindly request that you follow the event schedule like a well-composed symphony to avoid any event overlaps.</h5>
            <div className="p-4">

        <h1 className="text-4xl font-extrabold mb-4 text-center text-gradient bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Event Schedule
        </h1>
        <p className="text-center text-gray-600 mb-6 text-lg">
          Participants, kindly follow the event schedule like a symphony to avoid overlaps.
        </p>

        <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-200">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <tr>
                <th className="px-4 py-3">Event Title</th>
                <th className="px-4 py-3">Event ID</th>
                <th className="px-4 py-3">Event Name</th>
                <th className="px-4 py-3">Mode</th>
                <th className="px-4 py-3">Venue</th>
                <th className="px-4 py-3">Event Date</th>
                <th className="px-4 py-3">Reporting Time</th>
                <th className="px-4 py-3">Event Time</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr
                  key={index}
                  className="even:bg-gray-100 hover:bg-blue-50 transition-colors duration-200"
                >
                  <td className="px-4 py-2 font-semibold text-gray-700">
                    {event.eventTitle}
                  </td>
                  <td className="px-4 py-2 text-gray-600">{event.eventId}</td>
                  <td className="px-4 py-2 text-gray-600">{event.eventName}</td>
                  <td className="px-4 py-2 text-gray-600">{event.mode}</td>
                  <td className="px-4 py-2 text-gray-600">{event.venue}</td>
                  <td className="px-4 py-2 text-gray-600">{event.eventDate}</td>
                  <td className="px-4 py-2 text-gray-600">{event.reportingTime}</td>
                  <td className="px-4 py-2 text-gray-600">{event.eventTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        </div>
        <Footer/>
        </>
    );
}
