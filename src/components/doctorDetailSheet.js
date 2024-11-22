"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  EyeIcon,
  MapPin,
  Phone,
  Clock,
  Briefcase,
  GraduationCap,
  Stethoscope,
} from "lucide-react";

export default function DoctorDetailSheet({ doctor }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <EyeIcon className="h-5 w-5" />
          <span className="sr-only">View doctor details</span>
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Doctor Details</SheetTitle>
          <SheetDescription>
            <div className="flex flex-col items-center gap-4 mt-4">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src={doctor.user.picture}
                  alt={`${doctor?.user?.firstName} ${doctor.user.lastName}`}
                />
                <AvatarFallback>
                  {doctor.user?.firstName?.charAt(0)}
                  {doctor.user?.lastName?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <h1 className="font-bold text-2xl text-center">
                {`${doctor.user.firstName} ${doctor.user.lastName}`}
              </h1>
            </div>
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Specialization:</span>{" "}
              {doctor.specialization}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Degree:</span> {doctor.degree}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Experience:</span>{" "}
              {doctor.experience}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Hospital:</span> {doctor.hospital}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Address:</span> {doctor.address}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Contact:</span> {doctor.number}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Appointment Time:</span>{" "}
              {doctor.appointmentTime}
            </p>
          </div>
          <div>
            <p className="font-semibold">Bio:</p>
            <p className="mt-1">{doctor.bio}</p>
          </div>
          <div className="flex items-center gap-2">
            <p>
              <span className="font-semibold">Fees:</span> ${doctor.fees}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p>
              <span className="font-semibold">Status:</span>{" "}
              <span className="capitalize">{doctor.status}</span>
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};