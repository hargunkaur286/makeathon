import json

from flask import Flask, jsonify, request
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from googleapiclient.discovery import build


YOUTUBE_API_KEY = 'AIzaSyB1VAa64NgEoPK_LnHT0t7RT5ZWu5SyM7U'
spotify = spotipy.Spotify(client_credentials_manager=SpotifyClientCredentials(client_id="26cdc248797a48379af56e847b426fee",
                                                           client_secret="ed76a3bfb8634e028291d165a5fc1ab3"))

app = Flask(__name__)
def get_youtube_recommendations(data):
    # Return a list of recommended videos
    query = data.get('q')
    language = data.get('language', 'en')  # Default language is 'en'
    type_video = data.get('type', 'video')
    if not query:
        return jsonify({'error': 'Please provide a query parameter.'}), 400

    try:
        youtube = build('youtube', 'v3', developerKey=YOUTUBE_API_KEY)
        search_response = youtube.search().list(
            q=query,
            part='snippet',
            type=type_video,
            maxResults=10,
            relevanceLanguage=language  # Set the language preference
        ).execute()
        print(search_response)
        search_results = []
        for item in search_response['items']:
            video_id = item['id']['videoId']
            video_details = youtube.videos().list(
                part='snippet',
                id=video_id
            ).execute()['items'][0]['snippet']

            search_results.append({
                'title': video_details['title'],
                'thumbnails':video_details['thumbnails']['medium']
                # 'description': video_details['description'],
                # 'channel_title': video_details['channelTitle'],
                # 'published_at': video_details['publishedAt'],
                # 'video_id': video_id
            })
        print(search_results)
        return jsonify(search_results), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    # return [{'title': 'Video Title 1', 'video_id': 'abc123'}, {'title': 'Video Title 2', 'video_id': 'def456'}]

def get_spotify_podcasts(data):
    show_id=data.get('show-id')
    print(show_id)
    response= spotify.show_episodes(show_id,offset=0, market=None, limit=14)
    print(response)
    # episodes=[]
    # for item in response['items']:
    #     episode={}
    #     episode['name']=item['name']
    #     episode['uri']=item['uri']
    #     episode['release_date']=item['release_date']
    #     episode['redirect-url']=item['external_urls']['spotify']
    #     episodes.append(episode)

    # with open('finance.json', 'a') as f:
    #     f.write('\n'.join(json.dumps(ep) for ep in episodes))
    #     # print(item['name'],item['uri'])
    # response=spotify.search("genre%3Afinance",limit=5,type='show',market=['IN'])
    # print(response)
    # episodes = []
    # for item in response['shows']['items']:
    #     print(item)
    #     episode={}
    #     episode['name']=item['name']
    #     episode['uri']=item['uri']
    #     episodes.append(episode)
         #print(item['name'],item['uri'])
    # print(episodes)
    return jsonify(response), 200

@app.route('/recommender/youtube-search', methods=['POST'])
def youtube_search():
    data = request.get_json()
    # Get YouTube recommendations based on the query
    return get_youtube_recommendations(data)
    # return jsonify(recommendations), 200

@app.route('/recommender/spotify-podcasts', methods=['POST'])
def spotify_podcasts():
    data = request.get_json()
    # genre = data.get('genre')
    #
    # if not genre:
    #     return jsonify({'error': 'Please provide a genre parameter.'}), 400
    print("inside podcast function")
    # Get Spotify podcast recommendations based on the genre
    return get_spotify_podcasts(data)
    # return jsonify(recommendations), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
