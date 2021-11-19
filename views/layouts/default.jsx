var React = require('react');

function DefaultLayout(props) {
  return (
    <html>
      <script src="/socket.io/socket.io.js"></script>
      <script>
        var socket = io();     
      </script>
      <link rel="stylesheet" href="stylesheets/style.css"/>
      <head><title>{props.title}</title></head>
      <body>{props.children}</body>
      <script src="/javascripts/spectator.js" />
    </html>
  );
}

module.exports = DefaultLayout;