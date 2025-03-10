import { faker } from "@faker-js/faker";
import { NextApiRequest, NextApiResponse } from "next";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<User[] | { message: string }>) {
  if (req.method === "GET") {
    const users: User[] = Array.from({ length: 100 }, () => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
    }));

    return res.status(200).json(users);
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
