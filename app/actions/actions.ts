'use server'

import { revalidatePath } from 'next/cache'
import { User, userSchema } from './schemas'
import { PrismaClient } from '@prisma/client'

// Initialize Prisma Client
const prisma = new PrismaClient()

// Function to search users by name
export async function searchUsers(query: string): Promise<User[]> {
    console.log('Searching users with query:', query)
    return prisma.user.findMany({
        where: {
            name: {
                startsWith: query,
                mode: 'insensitive', // Case-insensitive search
            },
        },
    })
}

// Function to add a new user
export async function addUser(data: Omit<User, 'id'>): Promise<User> {
    const validatedUser = userSchema.parse(data) // Validate input data
    const newUser = await prisma.user.create({
        data: validatedUser,
    })
    revalidatePath('/') // Revalidate the path to reflect changes
    return newUser
}

// Function to delete a user by ID
export async function deleteUser(id: string): Promise<void> {
    const user = await prisma.user.findUnique({
        where: { id },
    })

    if (!user) {
        throw new Error(`User with id ${id} not found`)
    }

    await prisma.user.delete({
        where: { id },
    })

    console.log(`User with id ${id} has been deleted.`)
    revalidatePath('/') // Revalidate the path to reflect changes
}

// Function to update a user by ID
export async function updateUser(id: string, data: Partial<Omit<User, 'id'>>): Promise<User> {
    const existingUser = await prisma.user.findUnique({
        where: { id },
    })

    if (!existingUser) {
        throw new Error(`User with id ${id} not found`)
    }

    const updatedUser = { ...existingUser, ...data }
    const validatedUser = userSchema.parse(updatedUser) // Validate updated data

    const result = await prisma.user.update({
        where: { id },
        data: validatedUser,
    })

    console.log(`User with id ${id} has been updated.`)
    revalidatePath('/') // Revalidate the path to reflect changes
    return result
}

// Function to get a user by ID
export async function getUserById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
        where: { id },
    })
}