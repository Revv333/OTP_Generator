import React, { useState } from "react";

function App() {
  const [otp, setOtp] = useState("");
  function generateOtp() {
    const newOtp = Math.floor(100000 + Math.random() * 900000);
    setOtp(newOtp);
  }

  return (
    <div className="container">
      <h1>OTP Generator</h1>
      <button onClick={generateOtp}>Generate OTP</button>
      <h2>Your OTP is: {otp}</h2>
    </div>
  );
}

export default App;
