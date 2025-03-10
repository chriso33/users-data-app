import { faker } from "@faker-js/faker";
import { NextApiRequest, NextApiResponse } from "next";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const user: User = {
    id: id as string,
    name: faker.person.fullName(),
    email: faker.internet.email(),
  };

  if (user) {
    return res.status(200).json(user);
  } else {
    return res.status(404).json({ message: "User not found" });
  }
}
