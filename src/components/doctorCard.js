"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import {
    HomeIcon,
    PlusIcon,
    ClockIcon,
    CheckIcon,
    XIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import DoctorDetailSheet from "./doctorDetailSheet";

export default function DoctorCard({ request, isAdmin, onAccept, onReject }) {
    return (
        <Card key={request._id}>
        <CardHeader className="flex flex-row items-center space-x-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={request.user.picture} alt={request.user.firstName} />
            <AvatarFallback>
              {request.user.firstName.charAt(0)}
              {request.user.lastName?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{`${request.user.firstName} ${
              request.user.lastName || ""
            }`}</CardTitle>
            <CardDescription className="capitalize">
              {request.specialization}
            </CardDescription>
          </div>
        </CardHeader>
    
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <HomeIcon className="h-4 w-4" />
                <span className="font-semibold">Gender</span>
              </div>
              <span>{request.gender}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <PlusIcon className="h-4 w-4" />
                <span className="font-semibold">Hospital</span>
              </div>
              <span>{request.hospital}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-4 w-4" />
                <span className="font-semibold">Appointment Time</span>
              </div>
              <span>{request.appointmentTime}</span>
            </div>
          </div>
        </CardContent>
    
        <CardFooter className="justify-between">
          <DoctorDetailSheet doctor={request} />
          {isAdmin ? (
            <div>
              {request.status === "rejected" ? (
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-red-50 hover:bg-red-100 text-red-600"
                >
                  <XIcon className="h-4 w-4" />
                  <span className="sr-only">Rejected doctor request</span>
                </Button>
              ) : request.status === "accepted" ? (
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-green-50 hover:bg-green-100 text-green-600"
                >
                  <CheckIcon className="h-4 w-4" />
                  <span className="sr-only">Accepted doctor request</span>
                </Button>
              ) : (
                <div className="space-x-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-green-50 hover:bg-green-100 text-green-600"
                    onClick={onAccept}
                  >
                    <CheckIcon className="h-4 w-4" />
                    <span className="sr-only">Accept doctor request</span>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-red-50 hover:bg-red-100 text-red-600"
                    onClick={onReject}
                  >
                    <XIcon className="h-4 w-4" />
                    <span className="sr-only">Reject doctor request</span>
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <Link href={`/doctors/${request._id}`}>
              <Button>Book Appointment</Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    )
};