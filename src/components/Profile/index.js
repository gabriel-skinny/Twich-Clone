import React from 'react';

import { Container } from './styles';

function Profile() {
  return (
    <Container>
      <div className="img"></div>

      <div className="names">
        <h3>MATTA</h3>
        <p>So na conversa</p>
      </div>

      <div className="views">
        <div className="redCircle"></div>
        <span> 5.048 </span>
      </div>
    </Container>
  );
}

export default Profile;