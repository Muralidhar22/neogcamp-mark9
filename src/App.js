import './App.css';
import React from "react";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import filmReel from "./film-reel.svg";

  export default function App() {
    const API_KEY = "k_s2kfw23k";
    const [section, setSection] = React.useState("InTheaters");
    const menu = [
      { name: "Top TV's", keyWord: "Top250TVs"},
      { name: "Top Movies", keyWord: "Top250Movies"},
      { name: "Popular", keyWord: "MostPopularMovies" },
      { name: "Theatres", keyWord: "InTheaters" },
      { name: "Coming Soon", keyWord: "ComingSoon" }
    ];
    const [list,setList] = React.useState()
 

  React.useEffect(() => {
    async function fetchData(){
      const response = await fetch(`https://imdb-api.com/en/API/${section}/${API_KEY}`)
      const data = await response.json()
      setList(data.items.slice(0,10))
    }
    fetchData()
  },[section])
   

    function handleClick(event) {
      setSection(event.target.dataset.key)
    }
    
    return (
      <div className="App">
        <div className='banner'>
         <img className='film-reel big-reel' width={80} src={filmReel} alt="film reel" />
         <img className='film-reel small-reel' width={40} src={filmReel} alt="film reel" />
        </div>
        <header>
        <h1 className='header'>Filmy Buff</h1>
        </header>
        
        <h2>
          This is a place where you can find movies to watch when you're bored
        </h2>
        {menu.map((item, index) => {
          return (
            <Button
              id={index}
              key={index}
              name={item.name}
              keyWord={item.keyWord}
              handleClick={handleClick}
            />
          );
        })}
        <hr></hr>
        <div className="list">
           {list !== undefined && list.map((item, index) => {
            return <ListItem key={index} item={item} />;
          })}
        </div>
      </div>
    );
  }
