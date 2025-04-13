"use client"

import { ColumnDef } from '@tanstack/react-table'
import ApplicationStatus from './application-status'
import { Button } from '@/components/shared/button'
import { useRouter } from 'next/navigation'
import { ArrowUpDown } from 'lucide-react'
import ApplicationActivityChoices from './application-activity-choices'

export type ApplicationRow = {
  id: string
  firstName: string,
  lastName: string,
  city: string,
  establishment: string,
  activityChoices: string,
  status: string,
}

const ActionButton = ({
  applicationId,
}:{
  applicationId: string,
}) => {
  const router = useRouter()

  return (
    <Button onClick={() => router.push(`/home/applications/${applicationId}`)}>Show Details</Button>
  )
}

export const columns: ColumnDef<ApplicationRow>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          First Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "city",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          City
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "establishment",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Establishment
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "activityChoices",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
        >
          Activity Choices
        </Button>
      )
    },
    cell: ({ row }) => {
      const choices = JSON.parse(row.getValue('activityChoices'))
      return <ApplicationActivityChoices activityChoices={choices ? choices.sort() : undefined} className='flex flex-col gap-y-1 items-center' />
    },
    filterFn: (row, id, value) => {      
      const choices = JSON.parse(row.getValue(id))
      return value.some((filterValue: string) => choices.includes(filterValue))
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const applicatonId = parseFloat(row.getValue("id"));
      const status = row.getValue("status") as string;
      
      return <ApplicationStatus applicationId={applicatonId} status={status} />
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actionButton",
    cell: ({ row }) => {
      const applicationId = row.original?.id;
 
      return <div className='flex justify-end'>
        <ActionButton applicationId={applicationId} />
      </div>
    }
  },
]
