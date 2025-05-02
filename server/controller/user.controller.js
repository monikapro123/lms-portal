import user from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await user.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userCreated = await user.create({
            name,
            email,
            password: hashedPassword,
        });
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: userCreated,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userExists = await user.findOne({ email });
        if (!userExists) {
            return res.status(400).json({
                success: false,
                message: "User does not exist",
            });
        }
        const isPasswordCorrect = await bcrypt.compare(
            password,
            userExists.password
        );
        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials",
            });
        }
        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: userExists,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};