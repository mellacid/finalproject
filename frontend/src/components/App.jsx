import { useEffect, useState } from "react";
import medizinImage from "../assets/img/medizin.png";
import io from "socket.io-client";

function App() {
  const [imagePath, setImagePath] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const images = {
    medizinImage: medizinImage,
  };

  const handleImageChange = (newPath) => {
    setImagePath(newPath);
  };

  useEffect(() => {
    const socket = io("http://localhost:3002");
    socket.on("showImage", handleImageChange);

    return () => {
      socket.off("showImage", handleImageChange);
    };
  }, []);

  return (
    <div>
      {imagePath && (
        <img
          src={images[imagePath]}
          alt={`Image for ${imagePath}`}
          style={{ maxWidth: "100%" }}
        />
      )}
      {imagePath === "" && <p>No image selected.</p>}
    </div>
  );
}

export default App;
