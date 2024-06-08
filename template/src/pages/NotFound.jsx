import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="py-24">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h1 className="font-mono text-2xl font-light md:text-3xl lg:text-5xl underline-offset-4">
          Error 404: page not found!
        </h1>
        <Link to={'/'}>Back Home</Link>
      </div>
    </div>
  );
}
