// components/PodcastList.js

import PodcastCard from './PodcastCard';
import styles from './PodcastList.module.css'; // Import CSS module for styling

const PodcastList = ({ podcasts }) => {
  return (
    <div className={styles.row}>
      {podcasts.map((podcast, index) => (
        <PodcastCard key={index} podcast={podcast} />
      ))}
    </div>
  );
};

export default PodcastList;
