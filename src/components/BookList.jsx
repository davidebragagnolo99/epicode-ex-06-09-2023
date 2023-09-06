import { Component } from "react";
import { Col, Form, FormControl, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import SingleBook from "./SingleBook";
class BookList extends Component {
  state = {
    initialValue: null,
    searchString: "",
    allTheBooks: [...fantasy, ...history, ...horror, ...romance, ...scifi],
  };
  handleChange = (event) => {
    this.setState({ initialValue: event.target.value });
  };
  filterBookList = (event) => {
    this.setState({ searchString: event.target.value });
  };
  render() {
    const { allTheBooks, searchString, initialValue } = this.state;
    const filteredBooks = allTheBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(searchString.toLowerCase()) &&
        (initialValue === null || initialValue === book.category.toLowerCase())
    );
    return (
      <>
        <div className="bg-warning bg-opacity-25 p-5">
          <Form>
            <FormControl
              type="text"
              placeholder="Scegli una categoria tra fantasy, history, horror, romance, scifi"
              onChange={this.handleChange}
            />
          </Form>
        </div>
        <Row className="bg-warning bg-opacity-50 p-5">
          {filteredBooks.map((book, asin) => (
            <Col key={`book-${asin}`} className="col-12 col-md-4 col-lg-3 col-xl-2 pb-4">
              <SingleBook img={book.img} title={book.title} price={book.price} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}
export default BookList;
