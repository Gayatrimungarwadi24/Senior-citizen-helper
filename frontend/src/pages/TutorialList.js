import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';

const TutorialList = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    axios.get('/tutorials')
      .then(res => setTutorials(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {tutorials.map(tutorial => (
        <div key={tutorial._id}>
          <h3>{tutorial.title}</h3>
          <p>{tutorial.content}</p>
          {tutorial.videoURL && <video src={tutorial.videoURL} controls />}
        </div>
      ))}
    </div>
  );
};

export default TutorialList;
