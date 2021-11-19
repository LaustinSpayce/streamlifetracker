var React = require("react");
var PlayerName = require("../elements/playername");
var PlayerLifeTotal = require("../elements/playerlifetotal");

function LifeTracker(props) {
  return (
    <html>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <script src="/socket.io/socket.io.js"></script>
      <head>
        <title>{props.title}</title>
      </head>
      <h3 class="text-center">VERY POSH LIFE TRACKER</h3>
      <body>
        {props.children}
        <body>
          <div className="container-fluid">
            <ul id="messages"></ul>
            <PlayerName inputId="NameA" />
            <PlayerLifeTotal inputId="LifeA" />
            <PlayerLifeTotal inputId="LifeB" />
            <PlayerName inputId="NameB" />
          </div>
        </body>
      </body>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
      <script src="/javascripts/lifecounter.js" />
    </html>
  );
}

module.exports = LifeTracker;
