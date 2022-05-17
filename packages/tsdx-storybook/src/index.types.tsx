import {ReactChild, HTMLAttributes} from 'react';

type OwnProps = {
    /** custom zzzz, defaults to 'the snozzberries taste like snozzberries' */
    children?: ReactChild;
    /** custom content, defaults to 'the snozzberries taste like snozzberries' */
    label?: string;
    /** custom content, defaults to 'the snozzberries taste like snozzberries' */
    sample?: string;
    
  }
  
export type Props = OwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof OwnProps>