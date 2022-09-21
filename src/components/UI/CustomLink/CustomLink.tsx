import { FC } from 'react';
import { Link, useMatch } from 'react-router-dom';

import { CustomLinkProps } from './CustomLink.types';

export const CustomLink: FC<CustomLinkProps> = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      style={{ color: match ? 'green' : 'red' }}
      {...props}
    >
      {children}
    </Link>
  );
};
