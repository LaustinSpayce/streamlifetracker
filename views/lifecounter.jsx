var React = require('react');
var Lifetracker = require('./layouts/Lifetracker');

function Lifecounter(props) {
  return (
    <Lifetracker title={props.title}>
    </Lifetracker>
  );
}

module.exports = Lifecounter;