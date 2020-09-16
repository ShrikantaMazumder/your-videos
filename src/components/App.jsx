import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList/VideoList';

const KEY = 'AIzaSyD2p16pp-UjRMEE0W7BxKuuXMXu3GmhxrU';

class App extends React.Component {
    state = { videos: [] }
    onSearchSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        });
        this.setState({ videos: response.data.items });
    };
    render(){
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;