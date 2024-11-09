"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";
import {
    HomeIcon,
    PlusIcon,
    ClockIcon,
    CheckIcon,
    XIcon,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import DoctorDetailSheet from "./doctorDetailSheet";
import { updateRequest } from "@/actions/requests";

export default function DoctorRequests({ requests }) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedAction, setSelectedAction] = useState({
        type: null,
        requestId: null,
    });
    const [activeFilter, setActiveFilter] = useState("all");

    const handleAction = (type, requestId) => {
        setSelectedAction({ type, requestId });
        setDialogOpen(true);
    };

    const confirmAction = async () => {
        if (selectedAction.type === "accept") {
            // console.log("selectedAction=>", selectedAction);
            await updateRequest(selectedAction.requestId, "accepted");
        } else if (selectedAction.type === "reject") {
            // console.log("selectedAction=>", selectedAction);
            await updateRequest(selectedAction.requestId, "rejected");
        }
        setDialogOpen(false);
    };

    const filteredRequests = requests.filter(request =>
        activeFilter === "all" || request.status === activeFilter
    );

    const renderRequestCard = (request) => (
        <Card key={request._id}>
            <CardHeader className="flex flex-row items-center space-x-4">
                <Avatar className="h-10 w-10">
                    <AvatarImage
                        src={request.user.picture}
                        alt={request.user.firstName}
                    />
                    <AvatarFallback>
                        {request.user.firstName.charAt(0)}
                        {request.user.lastName?.charAt(0)}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle>{`${request.user.firstName} ${request.user.lastName || ""
                        }`}</CardTitle>
                    <CardDescription className="capitalize">
                        {request.status}
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
                            onClick={() => handleAction("accept", request._id)}
                        >
                            <CheckIcon className="h-4 w-4" />
                            <span className="sr-only">Accept doctor request</span>
                        </Button>
                        <Button
                            size="icon"
                            variant="outline"
                            className="bg-red-50 hover:bg-red-100 text-red-600"
                            onClick={() => handleAction("reject", request._id)}
                        >
                            <XIcon className="h-4 w-4" />
                            <span className="sr-only">Reject doctor request</span>
                        </Button>
                    </div>
                )}
            </CardFooter>
        </Card>
    );

    return (
        <>
            <Tabs defaultValue="all" className="w-full mb-6">
                <TabsList className="grid w-full md:w-1/2 mx-auto grid-cols-4">
                    <TabsTrigger value="all" onClick={() => setActiveFilter("all")}>All</TabsTrigger>
                    <TabsTrigger value="pending" onClick={() => setActiveFilter("pending")}>Pending</TabsTrigger>
                    <TabsTrigger value="accepted" onClick={() => setActiveFilter("accepted")}>Accepted</TabsTrigger>
                    <TabsTrigger value="rejected" onClick={() => setActiveFilter("rejected")}>Rejected</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredRequests.map(renderRequestCard)}
                    </div>
                </TabsContent>
                <TabsContent value="pending">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredRequests.map(renderRequestCard)}
                    </div>
                </TabsContent>
                <TabsContent value="accepted">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredRequests.map(renderRequestCard)}
                    </div>
                </TabsContent>
                <TabsContent value="rejected">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredRequests.map(renderRequestCard)}
                    </div>
                </TabsContent>
            </Tabs>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Confirm Action</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to {selectedAction.type} this doctor
                            request?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setDialogOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={confirmAction}>Confirm</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};