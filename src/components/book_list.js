import React, { Component } from 'react';

class BookList extends Component {

    render() {

        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )

    }

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key="book.title" className="list-group-item">{book.title}</li>
            );
        })
    }
}

export default BookList;