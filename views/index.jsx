var React = require('react');
var DefaultLayout = require('./layouts/default');
var Container = require('./layouts/container');
var Lifecontainer = require('./elements/lifecontainer');

function HelloMessage(props) {
  return (
    <DefaultLayout title={props.title}>
      <Container >
        <Lifecontainer player="A"/>
        <Lifecontainer player="B"/>
      </Container>
    </DefaultLayout>
  );
}

module.exports = HelloMessage;