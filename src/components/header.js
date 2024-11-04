import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { Button } from "./ui/button";
import { auth } from "../../auth";
import Image from "next/image";


export default async function Header() {
    const session = await auth();
    // console.log("user in header =>", session);

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
                                        height={30}
                                        width={30}
                                        className="rounded-full"
                                    />
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSeparator />
                                    <Link href={"/profile"}>
                                        <MenubarItem>Profile</MenubarItem>
                                    </Link>
                                    <MenubarSeparator />
                                    <Link href={"/appointments"}>
                                        <MenubarItem>My Appointments</MenubarItem>
                                    </Link>
                                    <MenubarSeparator />
                                    <MenubarItem>Logout</MenubarItem>
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