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


var Post = React.createClass({
  render: function(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>By: {this.props.author}</p>
        <p>{this.props.body}</p>
        <h2>Comments</h2>
          var comment = function(comment){
             Comment = [];
          for(i=0; i<=comment.length; i++)
            <p>{this.props.comment}</p>
          };
      };
      </div>
    )
  }
});

ReactDOM.render(
  <Post title={post.title} author={post.author} body={post.body} comment={post.comments[0]} />,
  document.getElementById("app")
);
