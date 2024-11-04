import { Button } from "@/components/ui/button";
import { auth, signIn } from "../../../auth";
import { redirect } from "next/navigation";


export default async function Signin() {
    const session = await auth();
    if(session) redirect("/");
    return (
        <div className="min-h-screen flex container mx-auto justify-center items-center">
            <form
                action={async () => {
                    "use server"
                    await signIn("google")
                }}
            >
                <Button variant="outline">
                    Continue with GOOGLE
                </Button>
            </form>
        </div>
    )
};