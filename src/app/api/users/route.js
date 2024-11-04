import connectDB from "@/lib/connectDB";
import { UserModal } from "@/lib/models/userModel";


export async function POST(req) {
    await connectDB();
    try {
        const obj = await req.json();

        let newUser = await UserModal({ ...obj });
        newUser = await newUser.save();
        return Response.json(
            {
                error: false,
                msg: "User registered succesfully",
                user: newUser,
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
    const users = await UserModal.find();
    return Response.json(
        {
            error: false,
            msg: "User fetched succesfully",
            users,
        }, { status: 200 }
    );
};

export async function PUT(req) { };

export async function DELETE(req) { };