import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID N7vurpU-0S1ZrwJqsR9KUMt3vpQmvmmmJC0f7G5CfU4'
    }
});