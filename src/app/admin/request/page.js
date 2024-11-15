import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import DoctorRequests from "@/components/requestSection";
import { getRequest } from "@/actions/requests";

export default async function Requests({ searchParams }) {
  // console.log("searchParams",searchParams);
  const { status } = searchParams;
  const session = await auth();
  if (!session && session?.user?.role != "admin") redirect("/");

  const { requests } = await getRequest(status);
  // console.log("requests=>", requests);
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl my-3">{`Doctor's`} Requests</h1>

      <DoctorRequests status={status} requests={requests} />
    </div>
  )
};