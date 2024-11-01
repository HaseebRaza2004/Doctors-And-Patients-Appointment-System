import { columns } from "@/components/appointmentTabble/colums";
import { AppointmentTable } from "@/components/appointmentTabble/data-table";
import { appointments } from "@/lib/data";

export default function Appointments() {
    return (
        <div className="container mx-auto">
            <div className="my-20">
                <AppointmentTable columns={columns} data={appointments} />
            </div>
        </div>
    )
};