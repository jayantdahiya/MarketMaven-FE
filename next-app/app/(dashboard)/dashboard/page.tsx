import React from 'react';
import { MainCard } from './Card';
import { ModeToggle } from '@/components/theme-toggle';

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <div className="flex justify-center w-full max-w-md">
        <MainCard />
      </div>
    </div>
  );
};

export default page;
