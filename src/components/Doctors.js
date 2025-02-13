import React from "react";

const doctorsList = [
  { name: "Dr. Rahul Sharma", specialty: "General Physician" },
  { name: "Dr. Ashutosh Misra", specialty: "Pediatrician" },
  { name: "Dr. Hritik Sinha", specialty: "Dermatologist" }
];

const Doctors = () => {
  return (
    <div>
      <h2>Doctors</h2>
      <ul>
        {doctorsList.map((doctor, index) => (
          <li key={index}>
            <p>{doctor.name} - {doctor.specialty}</p>
            <button>Book Now</button>
            <button>Set Reminder</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Doctors;