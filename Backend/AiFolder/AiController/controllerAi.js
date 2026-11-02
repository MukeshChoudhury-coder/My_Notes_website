
import notesDB from "../../Schema/notesschema.js";
import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

async function controllerAi(req, res) {
    try {
        const authId = req.use.userId;
        const {ids ,  chapter} = req.query.userIds;

        // Find user's notes
        const idData = await notesDB.findOne({
            usersID: authId,
            _id: ids
        });

        if (!idData) {
            return res.status(404).json({
                message: "Notes not found"
            });
        }

        // Check if summary already exists
        if (idData.buttonDisable === true) {
            return res.status(409).json({
                message: "AI summary has already been generated."
            });
        }

        // Create AI prompt
        const prompt = `
        You are a friendly teacher.

        Summarize the following notes in very simple English,
        as if you are teaching a 10-year-old student.

        Use simple words, short sentences and easy examples.

        Notes:
        ${idData.notes}
        `;

        // Send request to Groq
        const completion = await groq.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ]
        });

        // Get AI response
        const aiAnswer =
            completion.choices[0]?.message?.content;

        if (!aiAnswer) {
            return res.status(502).json({
                message: "AI could not generate a summary."
            });
        }

        // Save AI summary and boolean in MongoDB
        idData.aiSummary = aiAnswer;
        idData.buttonDisable = true;

        await idData.save();

        // Send response to frontend
        return res.status(200).json({
            aiResponse: aiAnswer,
            buttonDisable: idData.buttonDisable,
            message: "AI summary generated successfully."
        });

    } catch (error) {
        console.log("AI Controller Error:", error);

        return res.status(500).json({
            message: "An error occurred while processing the AI request."
        });
    }
}

export default controllerAi;
