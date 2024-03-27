import { useEffect } from "react";
import axios from "axios";

const Movies = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("movies");
        console.log("Response from movies", response);
      } catch (e) {
        console.log("What is the error", e);
      }
    })();
  }, []);

  return (
    <div>
      <div>All movies here</div>
    </div>
  );
};

export default Movies;
