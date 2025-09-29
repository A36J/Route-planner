// Location: app/page.tsx

import React from 'react';
import Header from '@/components/Header';
import Main from '@/components/Main';

// You can create a simple Head component for metadata or use Next.js's built-in metadata API
const PageHead = () => (
  <head>
    <title>Route Planner</title>
    <meta name="description" content="A simple route planner interface" />
    <link rel="icon" href="/favicon.ico" />
  </head>
);

const RoutePlannerPage = () => {
  return (
    <>
      {/* If not using the metadata API, you can include a head component */}
      {/* <PageHead /> */}
      
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header Section */}
        <Header/>

        {/* Main Content Body */}
        <Main/>
      </div>
    </>
  );
};

export default RoutePlannerPage;