import { Request, Response } from "express";
import { BorrowItem } from "../models/borrow-item";

export const getBorrowItems = async (req: Request, res: Response) => {
  try {
    const borrowItems = await BorrowItem.find(); 
    res.status(200).json(borrowItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching borrowed items', error });
  }
};
