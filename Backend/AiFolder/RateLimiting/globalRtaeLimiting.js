
import globalAi from "../aiSchemaFolder/globalAiSchema.js"

async function globalRateLimiter(req, res, next) {
    try {

        const startDate = new Date();

        const endDate = new Date(
            startDate.getTime() + 24 * 60 * 60 * 1000
        );

        // Find existing global document
        let globalData = await globalAi.findOne();

        // If document does not exist, create it
        if (!globalData) {

            globalData = await globalAi.create({
                globalCount: 0,
                limit: 10,
                startDate: startDate,
                endDate: endDate
            });

        }

        // Check whether 24 hours have expired
        if (startDate >= globalData.endDate) {

            globalData.globalCount = 0;
            globalData.startDate = startDate;
            globalData.endDate = endDate;

            await globalData.save();

        }

        // Check global limit
        if (globalData.globalCount >= globalData.limit) {
            return res.status(429).json({
                message: "Global AI request limit exceeded. Try again later."
            });
        }

        // Increment global counter
        globalData.globalCount += 1;

        await globalData.save();

        next();

    } catch (error) {

        console.log("Global Rate Limiter Error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });

    }
}

export default globalRateLimiter;
