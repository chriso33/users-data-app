import { users as usersMock } from "@/mocks/users";
import { User } from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const userId = parseInt(id as string);

  if (!id || Array.isArray(id) || isNaN(userId)) {
    return res.status(400).json({ message: "Bad Request" });
  }

  const user: User | undefined = usersMock.find((user) => user.id === userId);

  if (user) {
    return res.status(200).json(user);
  } else {
    return res.status(404).json({ message: "User not found" });
  }
}
