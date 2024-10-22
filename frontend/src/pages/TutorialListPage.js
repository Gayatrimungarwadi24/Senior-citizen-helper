import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Ensure this line is added

const TutorialListPage = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    axios.get('/tutorials')
      .then(res => setTutorials(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Tech Tutorials</h1>
      <ul>
        {tutorials.map(tutorial => (
          <li key={tutorial._id}>
            <h2>{tutorial.title}</h2>
            <p>{tutorial.content}</p>
            {tutorial.videoURL && (
              <video src={tutorial.videoURL} controls />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TutorialListPage;
