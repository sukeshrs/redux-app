import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    render() {

        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )

    }

    renderList() {
        console.log("Test"+this.props.books);
        return this.props.books.map((book) => {
            console.log("Test"+book.id + ','+ book.title);
            return (
                <li key={book.title} 
                className="list-group-item"
                onClick={() => this.props.selectBook(book)}
                >{book.title}</li>
            );
        })
    }
    
}

function mapStateToProps(state) {
    //Whatever is returned will show up as props

    return {
        books : state.books
    };
}

function mapDispatchToProps(dispatch) {

    //Whenever selectBook is called , the result should be passed to all of our reducers
    return bindActionCreators({ selectBook : selectBook} , dispatch)
}


//Promote Booklist 
export default connect(mapStateToProps , mapDispatchToProps)(BookList);