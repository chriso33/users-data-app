import { User } from "@/models/User";
import { users as usersMock } from "@/mocks/users";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<User[] | { message: string }>) {
  if (req.method === "GET") {
    const users: User[] = usersMock;

    return res.status(200).json(users);
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
