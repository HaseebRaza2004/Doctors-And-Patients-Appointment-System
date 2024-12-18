import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { Button } from "./ui/button";
import { auth, signOut } from "../../auth";
import Image from "next/image";

export default async function Header() {
    const session = await auth();
    return (
        <header className="container mx-auto flex justify-between items-center py-4 px-2 sm:px-2 md:px-0 lg:px-0 xl:px-0 border-b-2">
            <div>
                <h1 className="font-bold text-2xl">DoctorPlaza</h1>
            </div>
            <div>
                {
                    session ? (
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>
                                    <Image
                                        src={session?.user?.image}
                                        alt="Loading..."
                                        height={30}
                                        width={30}
                                        className="rounded-full"
                                    />
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSeparator />
                                    <Link href={"/appointments"}>
                                        <MenubarItem>My Appointments</MenubarItem>
                                    </Link>
                                    {session.user.role === "admin" && (
                                        <>
                                            <MenubarSeparator />
                                            <Link href={"/admin/request"}>
                                                <MenubarItem>Doctor Requests</MenubarItem>
                                            </Link>
                                        </>
                                    )}
                                    <MenubarSeparator />
                                    <form
                                        action={async () => {
                                            "use server"
                                            await signOut("google")
                                        }}
                                    >
                                        <Button variant={"outline"} className={"border-none w-full flex justify-start"}>Logout</Button>
                                    </form>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    ) : (
                        <Link href={"/signin"}>
                            <Button variant="outline">Login</Button>
                        </Link>
                    )
                }
            </div>
        </header>
    )
};