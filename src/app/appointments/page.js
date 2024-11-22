import { getAppointments } from "@/actions/appointment";
import { auth } from "../../../auth";
import AppointmentFilterTabs from "@/components/tabs/tabs";
import DoctorAppointmentCard from "@/components/doctorAppointmentCard/doctorAppointmentCard";
import PatientAppointmentCard from "@/components/patientAppointmentCard/patientAppointmentCard";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);


export default async function Appointments({ searchParams }) {
    const session = await auth();
    const { status } = searchParams;
    const { appointments, stats } = await getAppointments(
        session.user.role == "doctor" ? "doctor" : "user",
        session.user._id,
        status
    );
    const isDoctor = session.user.role == "doctor";

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-2xl mt-10">
                {isDoctor ? "Patients Appointments" : "Your Doctors Appointments"}
            </h1>

            <AppointmentFilterTabs status={status} />

            <div className="flex gap-4">
                <div className="shadow flex-grow p-3 rounded border">
                    <h1 className="font font-bold text-2xl">Pending : {stats.pending}</h1>
                </div>
                <div className="shadow flex-grow p-3 rounded border">
                    <h1 className="font font-bold text-2xl">
                        Accepted : {stats.accepted}
                    </h1>
                </div>
                <div className="shadow flex-grow p-3 rounded border">
                    <h1 className="font font-bold text-2xl">
                        Cancelled : {stats.cancelled}
                    </h1>
                </div>
            </div>
            <div className="my-10 grid grid-cols-3 gap-4">
                {appointments?.map((appointment) =>
                    isDoctor ? (
                        <DoctorAppointmentCard
                            key={appointment._id}
                            appointment={appointment}
                        />
                    ) : (
                        <PatientAppointmentCard
                            key={appointment._id}
                            appointment={appointment}
                        />
                    )
                )}
            </div>
        </div>
    )
};