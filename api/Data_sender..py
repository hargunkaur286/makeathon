import json
import time
import pandas as pd
import requests

# URL = 'http://127.0.0.1:5001/recommender/search'
# URL = 'http://127.0.0.1:5001/recommender/spotify-podcasts'
URL='http://127.0.0.1:5001/recommender/youtube-search'
def send_data():
    # data={"show-ids": "0CDkko5mBOM1Ewle8F9xsT"} # format of request for spotify
    data={"q":"Trading and Stocks","language":"en","type":"video"} # format of request for yotube
    response = requests.post(url=URL, json=data)

if __name__ == '__main__':
    send_data()