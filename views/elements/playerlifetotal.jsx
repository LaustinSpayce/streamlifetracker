var React = require('react');

function PlayerLifeTotal(props) {
  var buttonPlusId = "buttonPlus" + props.inputId
  var buttonMinusId = "buttonMinus" + props.inputId
  var lifeTotal = "lifeTotal" + props.inputId
  return (
    <div className="row">
      <div class="row align-items-center">
        <div class="col-6 h1 text-center" id={lifeTotal}>
          20
        </div>
        <div class="col-6 d-flex flex-column">
          <button type="button" 
            class="btn btn-primary btn-lg p-2 btn-primary" 
            id={buttonPlusId}> +1 </button>
          <button type="button" 
            class="btn btn-primary btn-lg p-2 btn-success" 
            id={buttonMinusId}> -1 </button>
        </div>
      </div>
    </div>
  );
}

module.exports = PlayerLifeTotal;