var React = require('react');

function Lifecontainer(props) {
  var nameId = "Name" + props.player
  var lifeId = "lifeTotal" + props.player
  var divId = "div" + props.player
  return (
      <div className="life-container" id={divId}>
        <div className="padding-before"></div>
        <div className="player-name" id={nameId}>
          Ira, Crimson Haze
        </div>
        <div className="player-life" id={lifeId}>
          20
        </div>
      </div>
  );
}

module.exports = Lifecontainer;