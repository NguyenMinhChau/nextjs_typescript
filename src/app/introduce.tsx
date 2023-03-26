import React from 'react';

type IntroduceProps = {
  isUser: boolean;
};

function Introduce({ isUser }: IntroduceProps) {
  return <div>Introduce {isUser && '...'}</div>;
}

export default Introduce;
