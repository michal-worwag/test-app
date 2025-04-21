import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className="p-4 mb-4 bg-white rounded-lg shadow-sm">
        <h1 className="text-xl font-bold text-center">
          🚀 Rick and Morty - Fan Service (Test App)
        </h1>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
