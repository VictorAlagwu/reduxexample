import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: [e.target.value] });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);
       
    }
    render() {
        return (
            <Fragment>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label>
                        <br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label>
                        <br />
                        <textarea name="body" onChange={this.onChange} value={this.state.body} />
                    </div>

                    <button type="submit">Submit</button>
                </form>

            </Fragment>
        )
    }
}
Postform.propTypes = {
    createPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    posts: state.posts.items
});



export default connect(mapStateToProps, { createPost })(Postform);