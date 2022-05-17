import { HTMLAttributes, ReactChild } from 'react';

type OwnProps = {
  /** Hey */
  children?: ReactChild
}

export type Props = OwnProps & HTMLAttributes<HTMLDivElement> 
  