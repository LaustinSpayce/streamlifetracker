var React = require('react');
var DefaultLayout = require('./layouts/default');
var Container = require('./layouts/container');
const Lifecontainer = require('./elements/lifecontainer');

function HelloMessage(props) {
  return (
    <DefaultLayout title={props.title}>
      <Container>
        <Lifecontainer/>
      </Container>
    </DefaultLayout>
  );
}

module.exports = HelloMessage;