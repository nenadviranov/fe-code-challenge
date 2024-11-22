import { Route, Routes, Navigate } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Loading from '@/components/Loading';

const ProfileView = React.lazy(() => import('@/components/ProfileView'));
const StatementsView = React.lazy(() => import('@/components/StatementsView'));
const SymbolsView = React.lazy(() => import('@/components/SymbolsView'));


const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index element={<SymbolsView />} />
        <Route index path="profile" element={<ProfileView />} />
        <Route index path="statements" element={<StatementsView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
