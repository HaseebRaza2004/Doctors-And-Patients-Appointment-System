"use client"

import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";


export const columns = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "doctor.name",
        header: "Doctor",
    },
    {
        accessorKey: "user.name",
        header: "Patient",
    },
    {
        accessorKey: "appointmentDate",
        header: "Appointment Date",
    },
    {
        accessorKey: "appointmentTime",
        header: "Appointment Time",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
];