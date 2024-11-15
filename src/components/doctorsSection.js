import Link from "next/link";
import { Button } from "./ui/button";
import { doctors } from "@/lib/data";

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getRequest } from "@/actions/requests";

export default async function DoctorsSection() {
    const { requests } = await getRequest("accepted");
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-semibold">
                    Doctors You Need
                </h1>
                <Link href={"/doctors"}>
                    <Button>
                        See All Doctors
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 my-7">
                {
                    requests.map((doctor) => {
                        return (
                            <Link key={doctor._id} href={`/doctors/${doctor._id}`}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{`Dr.${doctor.user.firstName + doctor.user.lastName}`}</CardTitle>
                                        <CardDescription>{`${doctor.specialization} Speacialist`}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
};