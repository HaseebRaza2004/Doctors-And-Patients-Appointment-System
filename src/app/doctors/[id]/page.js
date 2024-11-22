import { DatePicker } from "@/components/datePicker";
import { auth } from "../../../../auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getSingleRequest } from "@/actions/requests";
import {
    HomeIcon,
    ClockIcon,
    PlusIcon,
    UserIcon as GenderMaleIcon,
    GraduationCapIcon,
    StethoscopeIcon,
    PhoneIcon,
    MapPinIcon,
} from "lucide-react";

export default async function DoctorDetail({ params }) {
    const session = await auth();
    const { requests } = await getSingleRequest(params.id);
    const doctorInfo = requests;

    return (
        <div className="min-h-screen bg-background">
            <div className="container py-10 mx-auto">
                <Card className="w-full max-w-4xl mx-auto">
                    <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
                        <Avatar className="w-24 h-24">
                            <AvatarImage
                                src={doctorInfo.user.picture}
                                alt={`${doctorInfo.user.firstName} ${doctorInfo.user.lastName}`}
                            />
                            <AvatarFallback>
                                {doctorInfo.user.firstName[0]}
                                {doctorInfo?.user?.lastName?.[0] || ""}
                            </AvatarFallback>
                        </Avatar>
                        <div className="text-center sm:text-left">
                            <CardTitle className="text-3xl font-bold">{`Dr. ${doctorInfo.user.firstName
                                } ${doctorInfo?.user?.lastName || ""}`}</CardTitle>
                            <p className="text-muted-foreground">
                                {doctorInfo.specialization} Specialist
                            </p>
                        </div>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <InfoItem
                                icon={<GraduationCapIcon />}
                                label="Degree"
                                value={doctorInfo.degree}
                            />
                            <InfoItem
                                icon={<StethoscopeIcon />}
                                label="Experience"
                                value={doctorInfo.experience}
                            />
                            <InfoItem
                                icon={<GenderMaleIcon />}
                                label="Gender"
                                value={doctorInfo.gender}
                            />
                            <InfoItem
                                icon={<PlusIcon />}
                                label="Hospital"
                                value={doctorInfo.hospital}
                            />
                            <InfoItem
                                icon={<ClockIcon />}
                                label="Appointment Time"
                                value={doctorInfo.appointmentTime}
                            />
                            <InfoItem
                                icon={<HomeIcon />}
                                label="Fees"
                                value={`$${doctorInfo.fees}`}
                            />
                            <InfoItem
                                icon={<PhoneIcon />}
                                label="Contact"
                                value={doctorInfo.number}
                            />
                            <InfoItem
                                icon={<MapPinIcon />}
                                label="Address"
                                value={doctorInfo.address}
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Bio</h3>
                            <p className="text-muted-foreground">{doctorInfo.bio}</p>
                        </div>
                        <div className="space-y-4">
                            <DatePicker session={session} request={params.id} />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};


function InfoItem({ icon, label, value }) {
    return (
        <div className="flex items-center gap-2">
            {icon}
            <div>
                <p className="text-sm font-medium">{label}</p>
                <p className="text-sm text-muted-foreground">{value}</p>
            </div>
        </div>
    );
};