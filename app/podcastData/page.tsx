// pages/index.js

import React from 'react';
import PodcastList from '@/components/PodCastList';


const podcastData = [
  {
    "name": "How to track your investments like Big Bull 👑| Stock Analysis | Fundamental Analysis | Harsh Goela",
    "uri": "spotify:episode:0x5Tyxp1Tnswt3pRER6ifj",
    "release_date": "2024-03-07",
    "redirect-url": "https://open.spotify.com/episode/0x5Tyxp1Tnswt3pRER6ifj",
    "thumbnail": [
      {"height": 640, "url": "https://i.scdn.co/image/ab6765630000ba8af982296413d81ca4b72fe752", "width": 640},
      {"height": 300, "url": "https://i.scdn.co/image/ab67656300005f1ff982296413d81ca4b72fe752", "width": 300},
      {"height": 64, "url": "https://i.scdn.co/image/ab6765630000f68df982296413d81ca4b72fe752", "width": 64}
    ]
  },
  {
    "name": "Investing For Teenagers",
    "uri": "spotify:episode:4IS50ExnmQ8lR4vbqIJt0g",
    "release_date": "2024-04-16",
    "redirect-url": "https://open.spotify.com/episode/4IS50ExnmQ8lR4vbqIJt0g",
    "thumbnail": [
      {"height": 640, "url": "https://i.scdn.co/image/ab6765630000ba8a44182baa0e487f18ff2f95af", "width": 640},
      {"height": 300, "url": "https://i.scdn.co/image/ab67656300005f1f44182baa0e487f18ff2f95af", "width": 300},
      {"height": 64, "url": "https://i.scdn.co/image/ab6765630000f68d44182baa0e487f18ff2f95af", "width": 64}
    ]
  },
   {
    "name": "Buy When the Market is Down",
    "uri": "spotify:episode:1yLjJW08X0VDElcklASuos",
    "release_date": "2024-04-05",
    "redirect-url": "https://open.spotify.com/episode/1yLjJW08X0VDElcklASuos",
    "thumbnail": [
      {"height": 640, "url": "https://i.scdn.co/image/ab6765630000ba8a9e4711c81ab81c074b51d177", "width": 640},
      {"height": 300, "url": "https://i.scdn.co/image/ab67656300005f1f9e4711c81ab81c074b51d177", "width": 300},
      {"height": 64, "url": "https://i.scdn.co/image/ab6765630000f68d9e4711c81ab81c074b51d177", "width": 64}
    ]
  },
  {
    "name": "Points remember before Investing in stocks",
    "uri": "spotify:episode:1Jut3Lqlr9yq3mP5B0xRCJ",
    "release_date": "2024-02-20",
    "redirect-url": "https://open.spotify.com/episode/1Jut3Lqlr9yq3mP5B0xRCJ",
    "thumbnail": [
      {"height": 640, "url": "https://i.scdn.co/image/ab6765630000ba8afd678f86c2eae721f0820996", "width": 640},
      {"height": 300, "url": "https://i.scdn.co/image/ab67656300005f1ffd678f86c2eae721f0820996", "width": 300},
      {"height": 64, "url": "https://i.scdn.co/image/ab6765630000f68dfd678f86c2eae721f0820996", "width": 64}
    ]
  },
   {
    "name": "How to build SIP grade portfolio from scratch | 9 key themes with top stock ideas in India",
    "uri": "spotify:episode:3j7STNqx8R7IqKsdXLigxY",
    "release_date": "2024-03-12",
    "redirect-url": "https://open.spotify.com/episode/3j7STNqx8R7IqKsdXLigxY",
    "thumbnail": [
      {"height": 640, "url": "https://i.scdn.co/image/ab6765630000ba8a2a98bec8fec8fe0848153e7e", "width": 640},
      {"height": 300, "url": "https://i.scdn.co/image/ab67656300005f1f2a98bec8fec8fe0848153e7e", "width": 300},
      {"height": 64, "url": "https://i.scdn.co/image/ab6765630000f68d2a98bec8fec8fe0848153e7e", "width": 64}
    ]
  },
   {
    "name": "Ethical Investing",
    "uri": "spotify:episode:7JLC04qESo6eMJE8UYjhyZ",
    "release_date": "2024-04-29",
    "redirect-url": "https://open.spotify.com/episode/7JLC04qESo6eMJE8UYjhyZ",
    "thumbnail": [
      {"height": 640, "url": "https://i.scdn.co/image/ab6765630000ba8a9e4711c81ab81c074b51d177", "width": 640},
      {"height": 300, "url": "https://i.scdn.co/image/ab67656300005f1f9e4711c81ab81c074b51d177", "width": 300},
      {"height": 64, "url": "https://i.scdn.co/image/ab6765630000f68d9e4711c81ab81c074b51d177", "width": 64}
    ]
  }
]


const IndexPage = () => {
  return (
    <div>
      <PodcastList podcasts={podcastData} />
    </div>
  );
};

export default IndexPage;

