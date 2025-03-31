import "./App.css";

const list = [
  {
    title: "First Assay",
    author: "me",
    url: "https://elmotosee.ir/",
    likes: 10,
    points: 4,
    objectID: 0,
  },
  {
    title: "Second Assay",
    author: "not me",
    url: "https://elmotosee.ir/",
    likes: "15",
    points: 5,
    objectID: 1,
  },
];
function List() {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.objectID}>
            <span>
              <a style={{ color: "black" }} href={item.url}>
                {item.title}
              </a>
            </span>
            <br />
            <span>author: {item.author}</span> <br />
            <span>likes: {item.likes}</span>
          </li>
        );
      })}
    </ul>
  );
}
function Search() {
  return (
    <div id="search">
      <label htmlFor="search">search</label>
      <input id="search" type="text" style={{ marginLeft: "10px" }} />
    </div>
  );
}
function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "pink" }}>
        welcome to my website
      </h1>
      <Search />
      <hr />
      <List />
    </div>
  );
}

export default App;
