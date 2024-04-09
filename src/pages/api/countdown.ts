// /pages/api/countdown.ts
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const targetDate = new Date("2024-04-09T18:00:00");
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();
  const timeLeft = difference > 0 ? difference : 0;

  res.status(200).json({ timeLeft });
}
