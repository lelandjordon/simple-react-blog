// var app = document.getElementById('app');
//
// app.innerHTML = "Hello Pizza"

var React = require("react");
var ReactDOM = require("react-dom");

var post = {
  title: "Hondas 4 Lyfe",
  author: "Soichiro Honda",
  body: "Revs are free, biziches.",
  comments: [
    "w0rd",
    "EP3s!",
    "9000 rpm or bust"
  ]
}

var Comment = React.createClass({   // this component creates Comment, which gets used
  render: function(){             // later in the Post component.
    return (
      <p>{this.props.commentBody}</p> // this is what gets sent to the DOM.
    )
  }
});

var Post = React.createClass({
  render: function(){
    var commentsList = this.props.comments.map(function(comment, index){ // instead of a For loop,
      return <Comment key={index} commentBody={comment} />    // it passes each comment's body and index
    })                                                        // into Comment, which was created above.
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>By: {this.props.author}</p>
        <p>{this.props.body}</p>
        <h2>Comments</h2>
        {commentsList}    // this is where the commentsList gets rendered in the DOM.
      </div>
    )
  }
});

ReactDOM.render(
  <Post title={post.title} author={post.author} body={post.body} comments={post.comments} />,
  document.getElementById("app")
);
