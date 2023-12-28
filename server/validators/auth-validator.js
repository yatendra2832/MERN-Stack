const { z } = require('zod');

const loginSchema = z.object({

    email: z
        .string({ required_error: "Email is required" })
        .email({ message: "Invalid email" })
        .trim()
        .min(5, { message: "Email must be at least 5 characters" })
        .max(50, { message: "Email must be less than 50 characters" }),
    password: z
        .string({ required_error: "Password is required" })
        .min(6, { message: "Password must be at least 6 characters" })
        .max(1024, { message: "Password must be less than 1024 characters" })
        .trim()
})

// Creating an object Schema
const signupSchema = loginSchema.extend({
    username: z
        .string({ required_error: "Username is required" })
        .min(3, { message: "Username must be at least 3 characters" })
        .max(30, { message: "Username must be less than 30 characters" })
        .trim(),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be at least 10 characters" })
        .max(10, { message: "Phone not more  than 10 characters" })

})

module.exports = { signupSchema, loginSchema } 