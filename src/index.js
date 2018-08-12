const API_KEY = "XXXX;
import React,{Component} from 'react';
import ReactDOM from'react-dom';
import SearchBar from './components/serach_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
class App extends Component{ 
    constructor(props){
        super(props);
        this.state ={videos:[],selectedVideo:null};
        this.onSearchNewTerm("nodejs");
    };

    onSearchNewTerm(term){
        YTSearch({key:API_KEY,term:term},videos=>{
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        });
    }

    render(){

        const videoSearch = _.debounce((term)=>{this.onSearchNewTerm(term)},300)

        return (<div>
            <SearchBar onSearchNewTerm = {videoSearch}/>
            <div className="row">
                <VideoDetail  video={this.state.selectedVideo}/>
                <VideoList  
                    onSelectedVideo = {selectedVideo=>this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        </div>);
    };
}

//export default App;
ReactDOM.render(<App/>,document.getElementById("root"));


