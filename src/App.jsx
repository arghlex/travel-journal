import React from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import data from "./data";
import './App.css';


function App() {

    const posts = data.map(item => <Post key={item.title} post={item} />);

  return (
    <div className="App">
      <Header />
      <main>
        {posts}
      </main>
    </div>
  )
}

export default App
