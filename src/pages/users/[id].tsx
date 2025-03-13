import { User } from "@/models/User";
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
    <div className="container">
      <div className="userCard">
        <h1>{user.name}'s Details</h1>
        <p>ID: {user.id}</p>
        <p>Email: {user.email}</p>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f9fafb;
        }
        
        .userCard {
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 400px;
          width: 100%;
        }
        
        .userCard h1 {
          font-size: 26px;
          margin-bottom: 15px;
        }
        
        .userCard p {
          font-size: 18px;
          color: #444;
          margin: 8px 0;
        }
      `}</style>
    </div>
  );
};

export default UserDetailsPage;
