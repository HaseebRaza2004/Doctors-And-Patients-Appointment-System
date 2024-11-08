import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { auth } from "../../auth";


export default async function HeroSection() {

    const session = await auth(); 

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-3xl text-2xl mb-4 font-semibold text-gray-900">
                        Get Appointment Of Speacialist Doctors
                        <br className="hidden lg:inline-block" />
                        You Need
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
                        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
                        chambray.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href={"/doctors"}>
                            <Button variant="outline">Find Doctor You Need</Button>
                        </Link>
                        <Link href={session ? "/doctors/apply" : "/signin     "}>
                            <Button>Apply As doctor</Button>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                        width={500}
                        height={500}
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="https://images.unsplash.com/photo-1631563020241-09beac7791b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ3fHxkb2N0b3IlMjBhbmQlMjBwYXRpZW50fGVufDB8fDB8fHww"
                    />
                </div>
            </div>
        </section>
    )
};