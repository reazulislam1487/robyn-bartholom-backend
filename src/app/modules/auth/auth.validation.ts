import { z } from "zod";

// Zod schema matching TAccount / authSchema

const login_validation = z.object({
    email: z.string({ message: "Email is required" }),
    password: z.string({ message: "Email is required" })
})

const changePassword = z.object({
    oldPassword: z.string({ message: "Old Password is required" }),
    newPassword: z.string({ message: "New Password is required" })
})


export const auth_validation = {
    login_validation,
    changePassword,
    
}