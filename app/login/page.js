"use client";


import '@fontsource/inter';
import LoginLeft from '../components/ui2/LoginForm';
import LoginForm from '../components/ui2/LoginLeft';

export default function LoginPage() {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col md:flex-row max-w-full  ">
      
      <LoginLeft />
      <LoginForm />
    </div>
  );
}