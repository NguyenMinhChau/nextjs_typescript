import React from 'react';
import { Pane, Alert } from 'evergreen-ui';

type IntroduceProps = {
  isUser: boolean;
};

function Introduce({ isUser }: IntroduceProps) {
  return (
    <>
      {isUser && (
        <Pane>
          <Alert
            intent="success"
            title="Your source is now sending data"
            marginBottom={32}
          />
        </Pane>
      )}
    </>
  );
}

export default Introduce;
