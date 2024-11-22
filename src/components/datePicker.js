"use client"

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { addAppointment } from "@/actions/appointment";
import { useToast } from "@/hooks/use-toast";

export function DatePicker({ session, request }) {
    const [date, setDate] = React.useState(new Date());
    const [loading, setLoading] = React.useState(false);
    const { toast } = useToast();

    const handleBookAppointment = async () => {
        let isDateInFuture = Date.now() < new Date(date);
        if (!isDateInFuture) return toast({ title: "Please select future date." });
        setLoading(true);
        const obj = { user: session.user._id, request: request, date };
        const response = await addAppointment(obj);
        toast({
            title: response.msg,
        });
    };

    return (
        <div className="my-3 w-full">
            <h1 className="font-semibold mb-3">Pick your appointment Date</h1>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick Appointment Date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>

            {session ? (
                <Button onClick={handleBookAppointment} className="w-full mt-4">
                    Book Your Appointment
                </Button>
            ) : (
                <Link className="w-full mt-4" href="/signin">
                    <Button className="w-full">Login to Book Appointment</Button>
                </Link>
            )}
        </div>
    )
};