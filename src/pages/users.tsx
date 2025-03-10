import { GetServerSideProps } from "next";
import Link from "next/link";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UsersPageProps {
  users: User[] | null;
  error?: string;
}

export const getServerSideProps: GetServerSideProps<UsersPageProps> = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/users");
    
    if (!res.ok) throw new Error("Failed to fetch users");

    const users: User[] = await res.json();
    return { props: { users } };
  } catch (error) {
    return { props: { users: null, error: "Failed to load users" } };
  }
};

export default function UsersPage({ users, error }: UsersPageProps) {
  if (error) {
    return <div className="error-message">⚠️ {error}</div>;
  }

  return (
    <div className="container">
      <h1>Users List</h1>

      <div className="users-grid">
        {users && users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="user-card">
              <Link href={`/users/${user.id}`}>
                {user.name}
              </Link>
            </li>
          ))
        ) : (
          <p className="no-users">No users found.</p>
        )}
      </div>

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: auto;
          padding: 20px;
          text-align: center;
        }
        .users-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }
        .user-card {
          padding: 15px;
          border-radius: 8px;
          background: #f9f9f9;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        }
        .no-users {
          font-style: italic;
          color: gray;
        }
        .error-message {
          color: red;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
