// import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

export const useAuth = () => {
//   const [session, loading] = useSession();
  const router = useRouter();

//   const isAuthenticated = !!session;
    const isAuthenticated = true;
    const loading = false;
    const handleLogin = () => {
        router.push("/login");
    };

  const handleLogout = () => {
    router.push("/");
  };

  return {
    isAuthenticated ,
    // user: session?.user,
    loading,
    handleLogin,
    handleLogout,
  };
};