import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
// import SingleBook from "./components/SingleBook";
// import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <BookList />
      {/* <AllTheBooks /> */}
      {/* <SingleBook book={book} /> */}
      <MyFooter />
    </div>
  );
}

export default App;
