"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addRequest } from "@/actions/requests";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
    bio: z.string().min(2).max(120),
    hospital: z.string().min(2).max(50),
    fees: z.string(),
    gender: z.string(),
    appointmentTime: z.string(),
    degree: z.string(),
    specialization: z.string(),
    experience: z.string(),
    number: z.string().regex(/^\d+$/, "Enter a valid phone number"),
    address: z.string().min(5),
});

export default function ApplyAsDoctorForm({ session }) {
    const { toast } = useToast();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            bio: "",
            hospital: "",
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

    async function onSubmit(values) {
        values.user = session.user._id;
        const response = await addRequest(values);

        if (response.error) {
            form.reset();
            toast({
                title: "Sorry, Your application cannot be submited",
                description: response.msg,
            });
        } else {
            form.reset();
            toast({
                title: "Your application is submitted",
                description: "You will be informed by email in 3 bussiness days",
            });
        };
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

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

                <Button type="submit">{form.formState.isSubmitting ? "Submitting" : "Submit"}</Button>
            </form>
        </Form>
    );
};