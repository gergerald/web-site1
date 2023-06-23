import React, { useState } from "react";
import "../../App.css";

const About = () => {
  const [value, setValue] = useState({
    patient_number: "",
    admitted_on: "",
    condition: "",
    advance_payment: "",
    mode_payment: "",
    room_number: "",
    doc_no: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newRow = {
      pat_no: value.patient_number,
      admtd_on: value.admitted_on,
      cond_on: value.condition,
      adv_pymt: parseFloat(value.advance_payment),
      mode_pymt: value.mode_payment,
      room_no: parseInt(value.room_number),
      doc_no: value.doc_no,
    };

    setValue({
      patient_number: "",
      admitted_on: "",
      condition: "",
      advance_payment: "",
      mode_payment: "",
      room_number: "",
      doc_no: "",
    });

    console.log(newRow);
    const response = await fetch("http://127.0.0.1/hospital/patients/routes.php", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(newRow),
    }).then(res => res).catch(err => console.error(err))
  };

  return (
    <div>
      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="patient_number">Patient Number</label>
            <input
              id="patient_number"
              type="text"
              className="input"
              value={value.patient_number}
              onChange={(e) =>
                setValue({ ...value, patient_number: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="admitted_on">Admitted On</label>
            <input
              id="admitted_on"
              type="text"
              className="input"
              value={value.admitted_on}
              onChange={(e) =>
                setValue({ ...value, admitted_on: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="condition">Condition</label>
            <input
              id="condition"
              type="text"
              className="input"
              value={value.condition}
              onChange={(e) => setValue({ ...value, condition: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="advance_payment">Advance Payment</label>
            <input
              id="advance_payment"
              type="number"
              className="input"
              value={value.advance_payment}
              onChange={(e) =>
                setValue({ ...value, advance_payment: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="mode_payment">Mode Payment</label>
            <input
              id="mode_payment"
              type="text"
              className="input"
              value={value.mode_payment}
              onChange={(e) =>
                setValue({ ...value, mode_payment: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="room_number">Room Number</label>
            <input
              id="room_number"
              type="text"
              className="input"
              value={value.room_number}
              onChange={(e) =>
                setValue({ ...value, room_number: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="doc_no">Doc No</label>
            <input
              id="doc_no"
              type="text"
              className="input"
              value={value.doc_no}
              onChange={(e) => setValue({ ...value, doc_no: e.target.value })}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>

      <table id="customers">
        <thead>
          <tr>
            <th>Patient Number</th>
            <th>Admitted On</th>
            <th>Condition</th>
            <th>Advance Payment</th>
            <th>Mode Payment</th>
            <th>Room Number</th>
            <th>Doc No</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{value.patient_number}</td>
            <td>{value.admitted_on}</td>
            <td>{value.condition}</td>
            <td>{value.advance_payment}</td>
            <td>{value.mode_payment}</td>
            <td>{value.room_number}</td>
            <td>{value.doc_no}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;

