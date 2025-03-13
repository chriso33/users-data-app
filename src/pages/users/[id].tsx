import { User } from "@/models/user";
import { GetServerSideProps } from "next";

interface UserDetailsPageProps {
  user: User;
}

export const getServerSideProps: GetServerSideProps<UserDetailsPageProps> = async (context) => {
  const { id } = context.params!;
  
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const user: User = await res.json();

  if (!user) {
    return { notFound: true };
  }

  return {
    props: { user },
  };
};

const UserDetailsPage = ({ user }: UserDetailsPageProps) => {
  return (
    <div>
      <h1>{user.name}'s Details</h1>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetailsPage;
