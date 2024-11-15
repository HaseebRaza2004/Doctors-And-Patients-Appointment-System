import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HomeIcon, ClockIcon, PlusCircledIcon, MagicWandIcon } from "@radix-ui/react-icons";
import { doctors } from "@/lib/data";
import Link from "next/link";
import { getRequest } from "@/actions/requests";


export default async function Doctors() {
    const {requests} = await getRequest();
    // console.log(requests);
    
    return (
        <div className="container mx-auto">
            <div className="">
                <div className="flex justify-between items-center my-10">
                    <h1 className="text-3xl font-semibold">Find Doctors</h1>
                    <Button>see</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:gri xl:grid-cols-3 gap-4 my-10">
                    {
                        requests.map((doctor) => {
                            return (
                                <Card key={doctor._id}>
                                    <CardHeader className={"flex flex-row gap-3"}>
                                        <div>
                                            <Avatar>
                                                <AvatarImage src={doctor?.user?.picture} />
                                                <AvatarFallback>{doctor?.user?.firstName}</AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <div>
                                            <CardTitle>{doctor?.user?.firstName + doctor?.user?.lastName || ""}</CardTitle>
                                            <CardDescription>{doctor?.specialization}</CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex justify-between my-2">
                                            <div className="flex gap-2 items-center">
                                                <HomeIcon />
                                                <h1 className="font-semibold">Gender</h1>
                                            </div>
                                            <h1>{doctor.gender}</h1>
                                        </div>
                                        <div className="flex justify-between my-2">
                                            <div className="flex gap-2 items-center">
                                                <PlusCircledIcon />
                                                <h1 className="font-semibold">Hospital</h1>
                                            </div>
                                            <h1>{doctor.hospital}</h1>
                                        </div>
                                        <div className="flex justify-between my-2">
                                            <div className="flex gap-2 items-center">
                                                <ClockIcon />
                                                <h1 className="font-semibold">appointment Time</h1>
                                            </div>
                                            <h1>{doctor.appointmentTime}</h1>
                                        </div>
                                        <div className="flex justify-between my-2">
                                            <div className="flex gap-2 items-center">
                                                <MagicWandIcon />
                                                <h1 className="font-semibold">Fees</h1>
                                            </div>
                                            <h1>{doctor.fees}</h1>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Link href={`/doctors/${doctor._id}`}>
                                            <Button>See Details</Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
};