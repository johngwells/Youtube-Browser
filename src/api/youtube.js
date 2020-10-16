import axios from 'axios';

const KEY = 'AIzaSyDy-undCWTKAPskSWlN1yLsaLutzG9Kffk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});
