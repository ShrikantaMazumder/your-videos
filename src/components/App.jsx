import React from 'react';
import SearchBar from './SearchBar/SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term);
    }
    render(){
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;