import { redirect } from "next/navigation";
import { auth } from "../../../../auth"
import { getRequest } from "@/actions/requests";
import DoctorRequests from "@/components/requestSection";

export default async function Requests() {
    const session = await auth();
    if (!session && session?.user?.role != "admin") redirect("/");
  
    const { requests } = await getRequest();
    console.log("requests=>", requests);
    return (
      <div className="container mx-auto">
        <h1 className="font-bold text-2xl my-3">{`Doctor's`} Requests</h1>
  
        <DoctorRequests requests={requests} />
      </div>
    );
  };