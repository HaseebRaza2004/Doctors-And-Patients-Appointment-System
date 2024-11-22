import connectDB from "@/lib/connectDB";
import { RequestModel } from "@/lib/models/requestModel";

export async function GET(req, { params }) {
    await connectDB();
    const requests = await RequestModel.findOne({ _id: params.id }).populate(
        "user"
    );
    return Response.json(
        {
            error: false,
            msg: "Single Request fetched Successfully",
            requests,
        },
        { status: 200 }
    );
};