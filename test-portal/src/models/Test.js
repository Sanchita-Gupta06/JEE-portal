import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questionText: String,
    options: [String],
    correctAnswer: String,
});

const sectionSchema = new mongoose.Schema({
    sectionName: String,
    questions: [questionSchema],
});

const testSchema = new mongoose.Schema({
    testName: String,
    duration: Number,
    sections: [sectionSchema],
});

const Test = mongoose.models.Test || mongoose.model("Test", testSchema);

export default Test;
