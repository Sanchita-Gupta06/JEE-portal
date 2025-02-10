import { dbConnect } from "@/lib/dbConnect";
import Test from "@/models/Test";

export async function GET(req) {
    await dbConnect();
    const test = await Test.findOne();
    
    if (!test) {
        return Response.json({ error: "No test data found" }, { status: 404 });
    }

    console.log("Fetched Test Data:", JSON.stringify(test, null, 2)); // Debugging

    return Response.json(test);
}
