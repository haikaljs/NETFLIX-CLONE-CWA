import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import useCurentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurentUser();
  console.log(user);
  return (
    <>
      <h1 className="text-red-500 text-6xl">Netflix clone</h1>
      <p className="text-white">Logged in: {user?.email}</p>
      <button onClick={() => signOut()} className="w-full h-10 bg-white">
        Logout
      </button>
    </>
  );
}
