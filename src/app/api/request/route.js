import connectDB from "@/lib/connectDB";
import { RequestModel } from "@/lib/models/requestModel";

export async function POST(req) {
    await connectDB();
    try {
        const obj = await req.json();

        let newRequest = await RequestModel({ ...obj });
        newRequest = await newRequest.save();
        return Response.json(
            {
                error: false,
                msg: "request registered succesfully",
                request: newRequest,
            }, { status: 201 }
        );
    } catch (error) {
        return Response.json(
            {
                error: true,
                msg: "Something went wrong",
            }, { status: 404 }
        );
    }
};

export async function GET(req) {
    await connectDB();
    const requests = await RequestModel.find();
    return Response.json(
        {
            error: false,
            msg: "requests fetched succesfully",
            requests,
        }, { status: 200 }
    );
};

export async function PUT(req) { };

export async function DELETE(req) { };