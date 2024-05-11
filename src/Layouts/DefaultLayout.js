import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';
import Header from './Header';


export default function DefaultLayout() {
  return (
    <div className="flex bg-o-bg-dark h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <main className="min-h-screen">
          <div className=" mx-auto max-w-screen-2xl  p-4 md:p-5 2xl:p-7">
          <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
