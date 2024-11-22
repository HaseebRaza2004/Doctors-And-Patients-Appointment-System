"use client";

import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function AppointmentFilterTabs({ status }) {
    const [activeFilter, setActiveFilter] = useState(status);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        if (activeFilter) {
            params.set("status", activeFilter);
        } else {
            params.delete("status");
        }
        replace(`${pathname}?${params.toString()}`);
    }, [activeFilter]);

    return (
        <>
            <div className="container grid w-full gap-4 md:w-1/2 mx-auto grid-cols-5">
                <div
                    className={`border-secondory cursor-pointer p-3 my-4 text-center border rounded ${activeFilter == "pending" && "bg-primary text-center text-white"
                        }`}
                    value="pending"
                    onClick={() => setActiveFilter("pending")}
                >
                    Pending
                </div>
                <div
                    className={`border-secondory cursor-pointer p-3 my-4 text-center border rounded ${activeFilter == "accepted" && "bg-primary text-center text-white"
                        }`}
                    value="accepted"
                    onClick={() => setActiveFilter("accepted")}
                >
                    Accepted
                </div>
                <div
                    className={`border-secondory cursor-pointer p-3 my-4 text-center border rounded ${activeFilter == "cancelled" && "bg-primary text-center text-white"
                        }`}
                    value="cancelled"
                    onClick={() => setActiveFilter("cancelled")}
                >
                    Rejected
                </div>
                <div
                    className={`border-secondory cursor-pointer p-3 my-4 text-center border rounded ${activeFilter == "upcoming" && "bg-primary text-center text-white"
                        }`}
                    value="upcoming"
                    onClick={() => setActiveFilter("upcoming")}
                >
                    Upcoming
                </div>
                <div
                    className={`border-secondory cursor-pointer p-3 my-4 text-center border rounded ${activeFilter == "past" && "bg-primary text-center text-white"
                        }`}
                    value="past"
                    onClick={() => setActiveFilter("past")}
                >
                    Past
                </div>
            </div>
        </>
    );
};