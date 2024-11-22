import mongoose from "mongoose";

const { Schema } = mongoose;

const appointmentSchame = new Schema(
    {
        user: { type: mongoose.Types.ObjectId, ref: "Users" },
        request: { type: mongoose.Types.ObjectId, ref: "Requests" },
        date: Date,
        status: {
            type: String,
            default: "pending",
            enum: [
                "pending",
                "accepted",
                "cancelled",
                "visited",
                "reviewed",
                "missed",
            ],
        },
    },
    {
        timestamps: true,
    }
);

export const AppointmentModal =
    mongoose.models.Appointments ||
    mongoose.model("Appointments", appointmentSchame);