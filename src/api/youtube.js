import axios from 'axios';

const KEY = 'AIzaSyA9NuG1BjNR42FDvfxxpOA3ZjY-64JdcLk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
});
