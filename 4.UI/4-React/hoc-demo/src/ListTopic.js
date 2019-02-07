import React, { Component } from 'react';

class ListTopic extends Component {
    constructor(props){
        super(props);
    }

    listTopics(){
        let {topics}=this.props;
        return topics.map((topic,idx)=>{
         return(
            <div className="alert alert-primary">
            {topic}
        </div>
         )
        })
    }
    render() {
       
        return (
            <div>
               {this.listTopics()} 
            </div>
        );
    }
}

export default ListTopic;