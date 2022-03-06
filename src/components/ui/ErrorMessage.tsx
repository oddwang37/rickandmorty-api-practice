import React from 'react';
import styled from 'styled-components';

import Overlay from './Overlay';
import Error from './../../assets/svg/components/Error';
import { Wrapper, Text, SvgWrap } from './LoadingMessage';

const ErrorMessage = ({ height }: { height?: string }) => {
  return (
    <Overlay height={height}>
      <Wrapper>
        <SvgWrap>
          <Error />
        </SvgWrap>
        <Text>
          Whoops! Something went wrong :( <br />
          Try to reload a page
        </Text>
      </Wrapper>
    </Overlay>
  );
};

export default ErrorMessage;
