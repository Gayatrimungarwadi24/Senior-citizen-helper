import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Ensure this line is added


const TutorialDetailPage = () => {
  const { id } = useParams();
  const [tutorial, setTutorial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`/tutorials/${id}`)
      .then(res => {
        setTutorial(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching tutorial data.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{tutorial.title}</h1>
      <p>{tutorial.content}</p>
      {tutorial.videoURL && (
        <div>
          <h3>Watch the tutorial video:</h3>
          <iframe
            width="560"
            height="315"
            src={tutorial.videoURL}
            title="Tutorial Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default TutorialDetailPage;
