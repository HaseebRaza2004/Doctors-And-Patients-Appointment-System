import Link from "next/link";
import { Button } from "./ui/button";
import { getRequest } from "@/actions/requests";
import { categories } from "@/lib/data";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import DoctorCard from "./doctorCard";

export default async function DoctorsSection({ isHome }) {
    const { requests } = await getRequest("accepted");
    return (
        <div className="container mx-auto my-10">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">Doctors You Need</h1>

                {isHome ? (
                    <Link href={"/doctors"}>
                        <Button>See All</Button>
                    </Link>
                ) : (
                    <div>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((category) => (
                                    <SelectItem key={category} value={category}>
                                        {category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                )}
            </div>

            <div className="grid my-3 grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-3">
                {requests.map((request) => (
                    <DoctorCard key={request._id} request={request} isAdmin={false} />
                ))}
            </div>
        </div>
    )
};