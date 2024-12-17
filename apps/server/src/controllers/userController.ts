import { Request, Response } from 'express';
import { prisma } from '../app';
import bcrypt from 'bcryptjs';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        wallet: {
          create: {
            balance: 0
          }
        }
      }
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'User creation failed' });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id },
      include: { wallet: true }
    });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'User retrieval failed' });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id }
    });

    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Delete user (this will cascade delete related wallet due to Prisma relations)
    await prisma.user.delete({
      where: { id }
    });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'User deletion failed' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id }
    });

    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user
    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
      include: { wallet: true }
    });

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'User update failed' });
  }
};
