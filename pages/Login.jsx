import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div className="w-full flex flex-col bg-slate-700 justify-center items-center h-screen">
        <div className="w-2/3 h-auto  border-4 rounded-lg p-5 border-green-500">
          <div className="mb-[4rem] flex flex-col items-center">
            <p>welcome user : {session.user.email}</p>
            <p>you are now signed in</p>
          </div>
          <div className="flex justify-center">
            <button
              className="border text-white border-slate-800  hover:border-slate-300 rounded-lg p-1 bg-sky-600"
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="w-full flex flex-col bg-slate-700 justify-center items-center h-screen">
          <div className="w-2/3 h-auto  border-4 rounded-lg p-5 border-sky-400">
            <div className="mb-[4rem] flex flex-col items-center">
              <p>Please, sign in to get access</p>
            </div>
            <div className="flex justify-center">
              <button
                className="border text-white border-slate-800  hover:border-slate-300 rounded-lg py-1 px-3 bg-sky-600"
                onClick={() => {
                  signIn();
                }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
