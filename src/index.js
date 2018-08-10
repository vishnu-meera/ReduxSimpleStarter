const API_KEY = "AIzaSyD-Vm4qwZwArKW7L4C_3cl8yHL3_nw-uWE";
import React,{Component} from 'react';
import ReactDOM from'react-dom';
import SearchBar from './components/serach_bar';
import YTSearch from 'youtube-api-search';

class App extends Component{ 
    constructor(props){
        super(props);
        this.state ={videos:[]};
        YTSearch({key:API_KEY,term:'new malayalam songs 2018'},videos=>{
            this.setState({videos});
            //console.log(this.state.videos)
        });
    };

    render(){
        return (<div>
            <SearchBar />
        </div>);
    };
}

//export default App;
ReactDOM.render(<App/>,document.getElementById("root"));


