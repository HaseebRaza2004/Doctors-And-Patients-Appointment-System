"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

const formSchema = z.object({
    name: z.string().min(2).max(50),
    bio: z.string().min(2).max(120),
    hospital: z.string().min(2).max(50),
    days: z.array(z.string()).min(1, "Select at least one day"),
    fees: z.string(),
    gender: z.string(),
    appointmentTime: z.string(),
    degree: z.string(),
    specialization: z.string(),
    experience: z.string(),
    profileImg: z.string().url("Enter a valid image URL"),
    number: z.string().regex(/^\d+$/, "Enter a valid phone number"),
    email: z.string().email("Enter a valid email address"),
    address: z.string().min(5),
});

export default function ApplyAsDoctorForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            bio: "",
            hospital: "",
            days: [],
            fees: "",
            gender: "",
            appointmentTime: "",
            degree: "",
            specialization: "",
            experience: "",
            profileImg: "",
            number: "",
            email: "",
            address: "",
        },
    });

    function onSubmit(values) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-5">
                    <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="hospital"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Hospital</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter hospital name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="days"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Available Days</FormLabel>

                                <FormControl>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Available" />
                                        </SelectTrigger>
                                        <SelectContent
                                            multiple
                                            placeholder="Select days"
                                            onChange={(selectedOptions) =>
                                                field.onChange(
                                                    selectedOptions.map((option) => option.value)
                                                )
                                            }
                                        >
                                            <SelectItem value="Mon">Mon</SelectItem>
                                            <SelectItem value="Tue">Tue</SelectItem>
                                            <SelectItem value="Wed">Wed</SelectItem>
                                            <SelectItem value="Thu">Thu</SelectItem>
                                            <SelectItem value="Fri">Fri</SelectItem>
                                            <SelectItem value="Sat">Sat</SelectItem>
                                            <SelectItem value="Sun">Sun</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="fees"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fees</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter fees" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="gender"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Gender</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter gender" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="appointmentTime"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Appointment Time</FormLabel>
                                <FormControl>
                                    <Input type="time" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="degree"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Degree</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter degree" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="specialization"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Specialization</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter specialization" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="experience"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Experience</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter years of experience" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="number"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contact Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter contact number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter email address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="address"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    name="bio"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Enter bio" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}