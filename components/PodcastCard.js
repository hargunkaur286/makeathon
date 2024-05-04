// components/PodcastCard.js

import styles from './PodcastCard.module.css'; // Import CSS module for styling

const PodcastCard = ({ podcast }) => {
  return (
    <div className={styles.card}>
      <img src={podcast.thumbnail[0].url} alt={podcast.name} />
      <h3>{podcast.name}</h3>
      <p>Release Date: {podcast.release_date}</p>
      <a href={podcast.redirect_url} target="_blank" rel="noopener noreferrer">Listen on Spotify</a>
    </div>
  );
};

export default PodcastCard;
