import { useEffect } from "react";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/users");
  }, [router]);

  return (
    <div>
      <h1>Redirecting...</h1>
      <p>If you are not redirected automatically, <a href="/users">click here</a>.</p>
    </div>
  );
};

export default HomePage;
