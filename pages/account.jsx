import React from "react";
import { useSession, signOut, signIn, getSession } from "next-auth/react";

const Account = () => {
  const { data: session, status } = useSession();
  console.log(status);
  if (status === "authenticated") {
    return (
      <div>
        <p>welcome: {session.user.name}</p>
        <button
          onClick={() => signOut()}
          className="border border-black rounded-lg bg-red-100 p-1"
        >
          Sign Out
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p>you are not signed in </p>
        <p>
          <button
            onClick={() => signIn()}
            className=" border border-black rounded-lg"
          >
            Sign In
          </button>
        </p>
      </div>
    );
  }
  return <div>Account</div>;
};

export default Account;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/Login",
      },
    };
  }
  return {
    props: { session },
  };
};
