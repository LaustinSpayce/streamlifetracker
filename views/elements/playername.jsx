var React = require('react');

function PlayerName(props) {
  return (
    <div className="row">
      <input type="text" class="form-control" id={props.inputId} value="Mark" required></input>
    </div>
  );
}

module.exports = PlayerName;