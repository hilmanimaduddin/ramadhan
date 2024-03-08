import { useEffect, useState } from "react";
import axios from "axios";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const fetchTimeLeft = async () => {
      try {
        const response = await axios.get("/api/countdown");
        setTimeLeft(response.data.timeLeft);
      } catch (error) {
        console.error("Error fetching countdown data:", error);
      }
    };

    fetchTimeLeft();

    // Fetch data every second
    const interval = setInterval(fetchTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert timeLeft to days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
  const hours = Math.floor(
    (timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);

  return (
    <div>
      <h1>Countdown to March 11, 2024</h1>
      <p>
        Tinggal: {days} hari {hours} jam {minutes} menit {seconds} detik
      </p>
    </div>
  );
};

export default Countdown;
