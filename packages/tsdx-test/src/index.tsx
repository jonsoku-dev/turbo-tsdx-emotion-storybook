import React, { FC } from 'react';
import styled from '@emotion/styled'
import { css } from '@emotion/react';
import { Props } from './index.types';


const IndexRoot = styled.div`
  ${props => props.accessKey ? css`color:red` : css`color: blue`}
`;
// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children = "wow" }) => {
  return <IndexRoot>{children}</IndexRoot>;
};
