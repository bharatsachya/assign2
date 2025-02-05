'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react' // Use Pencil icon for editing
import { toast } from '@/hooks/use-toast'
import { UserEditDialog } from './user-edit-dialog'
import { User } from '../actions/schemas' // Import the User type
import { updateUser } from '../actions/actions'

interface EditButtonProps {
  userId: string
  user: User // Pass the user data to pre-fill the edit form
}

export default function EditButton({ userId, user }: EditButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleEditClick = () => {
    setIsDialogOpen(true) // Open the edit dialog
  }

  const handleSave = async (updatedData: User) => {
    try {
      // Call the updateUser function to save changes
      await updateUser(userId, updatedData)
      toast({
        title: 'User Updated',
        description: `User with ID ${userId} has been updated successfully.`,
        variant: 'default',
      })
    } catch (error) {
      console.error('EditButton: Error updating user', error)
      toast({
        title: 'Error',
        description: 'An error occurred while updating the user.',
        variant: 'destructive',
      })
    } finally {
      setIsDialogOpen(false) // Close the dialog
    }
  }

  return (
    <>
      <Button onClick={handleEditClick} variant="outline">
        <Pencil className="w-4 h-4 mr-2" />
        Edit
      </Button>

      {/* Render the edit dialog when isDialogOpen is true */}
      {isDialogOpen && (
        <UserEditDialog
          user={user}
        />
      )}
    </>
  )
}
