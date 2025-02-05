'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react' // Use Pencil icon for editing
import { UserEditDialog } from './user-edit-dialog'
import { User } from '../actions/schemas' // Import the User type

interface EditButtonProps {
  userId: string
  user: User // Pass the user data to pre-fill the edit form
}

export default function EditButton({ user }: EditButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleEditClick = () => {
    setIsDialogOpen(true) // Open the edit dialog
  }

  return (
    <>
     
     {
      !isDialogOpen && (
        <Button onClick={handleEditClick} variant="outline">
        <Pencil className="w-4 h-4 mr-2" />
        Edit
       </Button>
      )
     }

      {/* Render the edit dialog when isDialogOpen is true */}
      {isDialogOpen && (
        <UserEditDialog
          user={user}
        />
      )}
    </>
  )
}
