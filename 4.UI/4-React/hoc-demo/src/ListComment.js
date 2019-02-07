import React, { Component } from 'react';

class CommentList extends Component {

    listComments(){
        let {comments}=this.props;
        return comments.map((comment,idx)=>{
         return(
            <div className="alert alert-success">
            {comment}
        </div>
         )
        })
    }
    render() {
        return (
            <div>
                {this.listComments()}
            </div>
        );
    }
}

export default CommentList;