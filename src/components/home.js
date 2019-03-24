import * as React from 'react';
import jwt from 'jsonwebtoken';
import KJUR from 'jsrsasign';

export default class Home extends React.PureComponent {
  render() {

    let jwt = '';
    if (this.props.location.hash) {
      jwt = this.props.location.hash.slice(10);
    }

    var headerObj = KJUR.jws.JWS.readSafeJSONString(KJUR.b64utoutf8(KJUR.sJWT.split(".")[0]));
    var payloadObj = KJUR.jws.JWS.readSafeJSONString(KJUR.b64utoutf8(KJUR.sJWT.split(".")[1]));

    debugger
    return (
      <div>
        Home
      </div>
    );
  }
}
