import connectDB from "@/lib/connectDB";
import { UserModal } from "@/lib/models/userModel";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === "google") {
                console.log("account", account);
                console.log("profile", profile);
                let obj = {
                    firstName: profile.given_name,
                    lastName: profile.family_name,
                    email: profile.email,
                    picture: profile.picture,
                };
                const user = await handleLogin(obj);
                return true // Do different verification for other providers that don't have `email_verified`
            }
        },
        async jwt({ token }) {
            let user = await handleLogin({ email: token.email });
            token.role = user.role;
            token._id = user._id;
            console.log("token", token);
            return token;
        },
        session({ session, token }) {
            session.user._id = token._id;
            session.user.role = token.role;
            console.log("session", session);
            return session;
        },
    },
});

async function handleLogin(obj) {
    await connectDB();
    const user = await UserModal.findOne({ email: obj.email });
    if (user) {
        return user;
    } else {
        let newUser = await UserModal(obj);
        newUser = await newUser.save();
        return newUser;
    };
};