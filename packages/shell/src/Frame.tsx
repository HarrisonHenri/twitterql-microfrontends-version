import React from 'react';
import { AuthProvider } from './auth';
import FrameRouter from './FrameRouter';

const Frame: React.FC<{ children: any; path: string }> = ({
  children,
  path = 'home',
}) => {
  return (
    <AuthProvider>
      <FrameRouter path={path}>{children}</FrameRouter>
    </AuthProvider>
  );
};

export default Frame;
