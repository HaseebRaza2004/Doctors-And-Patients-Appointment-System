"use client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, Clock, MapPin, XCircle } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Button } from "../ui/button";
import { updateAppointment } from "@/actions/appointment";
import { useState } from "react";
dayjs.extend(relativeTime);

export default function DoctorAppointmentCard({ appointment }) {
    const [loading, setLoading] = useState(false);
    const handleAccept = async () => {
        setLoading(true);
        await updateAppointment(appointment._id, "accepted");
        setLoading(false);
    };

    const handleReject = async () => {
        setLoading(true);
        await updateAppointment(appointment._id, "cancelled");
        setLoading(false);
    };

    return (
        <Card key={appointment._id} className="shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-12 w-12">
                    <AvatarImage
                        src={appointment?.user.picture}
                        alt={`${appointment.user.firstName} ${appointment.user.lastName}`}
                    />
                    <AvatarFallback>
                        {appointment?.request?.user.firstName[0]}
                        {/* {appointment?.user?.lastName[0]} */}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle>
                        {appointment.user?.firstName} {appointment?.user?.lastName}
                    </CardTitle>
                    <Badge
                        variant={
                            appointment.status === "pending"
                                ? "outline"
                                : appointment.status === "accepted"
                                    ? "success"
                                    : "destructive"
                        }
                    >
                        {appointment.status.charAt(0).toUpperCase() +
                            appointment.status.slice(1)}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                    {appointment.request.bio}
                </p>
                <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>
                        {dayjs(new Date(appointment.date)).fromNow() +
                            " " +
                            dayjs(new Date(appointment.date)).format("dd DD MMMM")}
                    </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{appointment.request.appointmentTime}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>
                        {appointment.request.hospital}, {appointment.request.address}
                    </span>
                </div>
                <p className="text-sm font-semibold">
                    Specialization: {appointment.request.specialization}
                </p>
                <p className="text-sm font-semibold">
                    Fees: ${appointment.request.fees}
                </p>
            </CardContent>
            <CardFooter className="justify-end space-x-2">
                {loading && <span>Loading...</span>}
                {appointment.status === "pending" && (
                    <>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleAccept(appointment._id)}
                            className="flex items-center gap-2"
                        >
                            <CheckCircle className="h-4 w-4" />
                            Accept
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleReject(appointment._id)}
                            className="flex items-center gap-2"
                        >
                            <XCircle className="h-4 w-4" />
                            Reject
                        </Button>
                    </>
                )}
            </CardFooter>
        </Card>
    );
};