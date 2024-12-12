import { User } from "../models/user";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

export const login = async (req: Request, res: Response): Promise<void> => {
    const { username, password, role } = req.body;
    if (!username || !password) {
        res.status(400).json({
            status: 'failed',
            message: 'Username or password is required',
            data: {},
        });
        return;
    }

    try {
        const user = await User.findOne({ username });

        if (!user) {
            res.status(404).json({ 
                status: 'failed',
                message: 'User not found',
            });
            return;
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ 
                status: 'failed',
                message: 'Invalid credentials'
            });
            return;
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );
        user.token = token;
        await user.save();
        
        res.status(200).json({ 
            status: 'success',
            message: 'Login success',
            user: {
                username: user.username
            },
            token
        });
    }

    catch (error) {
        res.status(500).json({ 
            message: 'Error logging in', error 
        });
    }
};