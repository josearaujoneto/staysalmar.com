import React from 'react';

const HomePage: React.FC = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gray-100'>
      <h1 className='text-4xl font-bold text-blue-600'>Bem vindo ao Stay Salmar</h1>
      <p className='mt-4 text-lg text-gray-700'>
      Encontre os melhores alojamentos para sua estadia.
      </p>
    </main>
  );
};

export default HomePage;