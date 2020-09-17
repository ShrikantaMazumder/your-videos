import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList/VideoList';
import VideoDetail from './VideoDetail/VideoDetail';

const KEY = 'AIzaSyD2p16pp-UjRMEE0W7BxKuuXMXu3GmhxrU';

class App extends React.Component {
    state = { videos: [], selectedVideo: null }
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
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    componentDidMount() {
        this.onSearchSubmit('');
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    };

    render(){
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;