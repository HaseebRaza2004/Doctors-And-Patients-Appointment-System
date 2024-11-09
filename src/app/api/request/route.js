import connectDB from "@/lib/connectDB";
import { RequestModel } from "@/lib/models/requestModel";

export async function POST(req) {
    await connectDB();
    try {
        const obj = await req.json();

        const isUserRequestedBefore = await RequestModel.findOne({ user: obj.user });

        if (isUserRequestedBefore) {
            return Response.json(
                {
                    error: true,
                    msg: "You had already applied as a doctor",
                },
                { status: 403 }
            );
        };

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
    const requests = await RequestModel.find().populate("user");
    return Response.json(
        {
            error: false,
            msg: "requests fetched succesfully",
            requests,
        }, { status: 200 }
    );
};

export async function PUT(req) {
    await connectDB();
    try {
        const obj = await req.json();
        let { id, status } = obj;
        const updated = await RequestModel.findOneAndUpdate(
            {
                _id: id,
            },
            { status: status }
        ).exec();

        return Response.json(
            {
                error: false,
                msg: "Requests updated Successfully",
                request: updated,
            },
            { status: 200 }
        );
    } catch (err) {
        return Response.json(
            {
                error: false,
                msg: "Something went wrong",
            },
            { status: 500 }
        );
    }
};

export async function DELETE(req) { };