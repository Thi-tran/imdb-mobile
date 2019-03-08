import React, { useState, useEffect } from 'react';
import Movie from './component/Movie';
import './App.css';
import IosSearch from 'react-ionicons/lib/IosSearch';

const App = () => {
  const [title,setTitle] = useState('horror');
  const [listOfMovie, setListOfMovie] = useState([]);
  const [searched, setSearched] = useState(false);

  const onHandleSearch = async() => {   
    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6f3f73ce2736ef35dca6a7f493a3b7c9&language=en-US&query=${title}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(result => setListOfMovie(result.results));
    setSearched(true);
  }

  return (
    <div>
      <div className="header">
        <h1 className="mt-2">IMDB Movie Search</h1>
      </div>

      <div className="App">
        <div className="row">
          <div className="input-box mt-2">
            <input type="text" className="form-control text-input" placeholder="Enter your movie name" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
            <IosSearch fontSize="30px" onClick={onHandleSearch} className="mt-2 search-button"/>
        </div>
        <div>
          {searched && listOfMovie.map(
              item => <Movie 
                key={item.id}
                {...item}
              />)}
        </div>
      </div>
    </div>
  );
}

export default App;
