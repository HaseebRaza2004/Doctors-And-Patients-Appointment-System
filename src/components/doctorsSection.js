import Link from "next/link";
import { Button } from "./ui/button";
import { doctors } from "@/lib/data";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


export default function DoctorsSection() {

    const filtred = doctors.splice(0, 6)

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-semibold">
                    Doctors You Need
                </h1>
                <Link href={"/doctors"}>
                    <Button>
                        See All
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 my-7">
                {
                    filtred.map((data) => {
                        return (
                            <Link key={data.id} href={`/doctors/${data.id}`}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{data.name}</CardTitle>
                                        <CardDescription>{data.category}</CardDescription>
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