import React, { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type LazyLoaderProps = {
  children: React.ReactNode;
};

function LazyLoader({ children }: LazyLoaderProps) {
  return (
    <Suspense
      fallback={
        <div>
          <Skeleton width={'100%'} count={2} />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

export default LazyLoader;
