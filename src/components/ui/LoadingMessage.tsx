import React from 'react';
import styled from 'styled-components';

import Overlay from './Overlay';
import Spinner from '../../assets/svg/components/Spinner';

const LoadingOverlay = ({ height }: { height?: string }) => {
  return (
    <Overlay height={height}>
      <Wrapper>
        <SvgWrap>
          <Spinner />
        </SvgWrap>
        <Text>Please, wait...</Text>
      </Wrapper>
    </Overlay>
  );
};

export default LoadingOverlay;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
`;

const SvgWrap = styled.div`
  width: 150px;
  svg {
    width: 100%;
  }
`;

export { Wrapper, Text, SvgWrap };
