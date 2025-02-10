import { dbConnect } from "../lib/dbConnect";
import Test from "@/models/Test";

export async function POST(req) {
    await dbConnect();
    const body = await req.json();
    console.log("Result received:", body);
    return Response.json({ message: "Result stored successfully!" });
}
