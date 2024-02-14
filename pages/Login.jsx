import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div>
        <p>welcome user : {session.user.email}</p>
        <p>you now signed in</p>
        <div>
          <button
            className="border border-black rounded-lg p-1'"
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>you are not signed in</p>
        <button
          style={{ borderRadius: "50px" }}
          className="border border-black bg-slate-600 p-2"
          onClick={() => {
            signIn();
          }}
        >
          Sign In
        </button>
      </div>
    );
  }
};

export default Login;
