
import userAi from "../aiSchemaFolder/userAiSchema.js"

async function userRateLimiter(req, res, next) {
    try {

        const userId = req.use.userId;

        const startDate = new Date();

        const endDate = new Date(
            startDate.getTime() + 24 * 60 * 60 * 1000
        );

        // Find user's AI quota document
        let userData = await userAi.findOne({ userId: userId });

        // If user document does not exist
        if (!userData) {

            userData = await userAi.create({
                userId: userId,
                userCount: 0,
                limit: 3,
                startDate: startDate,
                endDate: endDate
            });

        }

        // Check whether 24 hours have expired
        if (startDate >= userData.endDate) {

            userData.userCount = 0;
            userData.startDate = startDate;
            userData.endDate = endDate;

            await userData.save();

        }

        // Check user's AI request limit
        if (userData.userCount >= userData.limit) {

            return res.status(429).json({
                message: "Your daily AI request limit has been exceeded."
            });

        }

        // Increment user's request count
        userData.userCount += 1;

        await userData.save();

        next();

    } catch (error) {

        console.log("User Rate Limiter Error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });

    }
}

export default userRateLimiter;
