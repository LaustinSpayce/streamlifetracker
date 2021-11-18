var React = require('react');

function Container(props) {
  return (
      <body className="container">
        {props.children}
      </body>
  );
}

module.exports = Container;
