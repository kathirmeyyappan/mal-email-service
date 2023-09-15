import * as React from 'react';
import './App.css';
import Card from './components/Card'

function App({ anime, manga }) {
  return (
    <div className="App">
      <div className = "banner">
        <h1>MangAlert!</h1>
      </div>
      <div className='intro-message'>
        Thank you for visiting MangAlert! If you prefer binging to consuming content weekly, 
        this is great for you! Below are all of the anime and manga in your plan-to-watch 
        and plan-to-read lists that are no longer airing/serializing. Hover over them to see when 
        they ended. 
      </div>
      <div className='Category'><h2>Finished Serialization in the Last 3 Months</h2></div>
      <div className='Header'>Manga (Plan to Read)</div>
      <div className = 'grid-container'>
        {manga.recently_completed.map((item) => (
          <Card animeName={item.name} 
          imageURL={item.img_url}
          animeURL={item.url}></Card>
        ))}
      </div>
      <div className='Header'>Anime (Plan to Watch)</div>
      <div className = 'grid-container'>
        {anime.recently_completed.map((item) => (
          <Card animeName={item.name} 
          imageURL={item.img_url}
          animeURL={item.url}></Card>
        ))}
      </div>
      <div className='Category'><h2>Finished Serialization (Older Than 3 Months)</h2></div>
      <div className='Header'>Manga (Plan to Read)</div>
      <div className = 'grid-container'>
        {manga.other_completed.map((item) => (
          <Card animeName={item.name} 
          imageURL={item.img_url}
          animeURL={item.url}></Card>
        ))}
      </div>
      <div className='Header'>Anime (Plan to Watch)</div>
      <div className = 'grid-container'>
        {anime.other_completed.map((item) => (
          <Card animeName={item.name} 
          imageURL={item.img_url}
          animeURL={item.url}></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
