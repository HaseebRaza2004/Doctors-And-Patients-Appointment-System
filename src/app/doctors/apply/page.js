import ApplyAsDoctorForm from "@/components/applyForm";
import { auth } from "../../../../auth";

export default async function ApplyAsDoctor() {
  const session = await auth();
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl mt-10">Apply as a Doctor in our Platform</h1>
      <p className="text-secondary-foreground my-5">
        Are you a dedicated healthcare professional seeking a rewarding career opportunity? Join our team of experts and make a difference in the lives of our patients. Apply today and embark on a journey of growth and fulfillment.
      </p>
      <ApplyAsDoctorForm session={session} />
    </div>
  );
};