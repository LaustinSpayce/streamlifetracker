var React = require('react');

function DefaultLayout(props) {
  return (
    <html>
      <link rel="stylesheet" href="stylesheets/style.css"/>
      <head><title>{props.title}</title></head>
      <body>{props.children}</body>
    </html>
  );
}

module.exports = DefaultLayout;