import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "./ui/button";


export default function Header() {
    const session = null;
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
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>User</AvatarFallback>
                                    </Avatar>
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