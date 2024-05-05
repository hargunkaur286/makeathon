import "dotenv/config"
const { drizzle } = require("drizzle-orm/neon-http");
import { neon } from "@neondatabase/serverless"
import Image from "next/image";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Budgeting",
                imageSrc: "/footer1.png",
            },
            {
                id: 2,
                title: "Saving",
                imageSrc: "/footer2.png",
            },
            {
                id: 3,
                title: "Investing",
                imageSrc: "/footer3.png",
            },
            {
                id: 4,
                title: "Debt Management",
                imageSrc: "/footer4.png",
            },
            {
                id: 5,
                title: "Retirement Planning",
                imageSrc: "/footer5.png",
            },
        ]);

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 4, //debt management
                title: "Unit 1",
                description: "Understanding the basics of debt and home loans",
                order: 1,
            }
        ]);

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: "Debt Consolidation",
            },
            {
                id: 2,
                unitId: 1,
                order: 2,
                title: "Negotiation and Settlement",
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: "Debt Consolidation",
            },
            {
                id: 4,
                unitId: 1,
                order: 4,
                title: "Negotiation and Settlement",
            },
            {
                id: 5,
                unitId: 1,
                order: 5,
                title: "Debt Consolidation",
            },
            {
                id: 6,
                unitId: 1,
                order: 6,
                title: "Negotiation and Settlement",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                order: 1,
                question: "Sarah has accumulated ₹50,000 in credit card debt across multiple cards, with varying interest rates. She wants to prioritize paying off her debt. What should Sarah consider doing first?",
            },
            {
                id: 2,
                lessonId: 1,
                type: "SELECT",
                order: 2,
                question: "David graduated from college with ₹3,00,000 in student loan debt. He wants to lower his monthly payments. What repayment option might be suitable for David?",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1,
                imageSrc: "/footer1.png",
                correct: true,
                text: "Paying off the card with the highest interest rate first",
                audioSrc: "",
            },
            {
                id: 2,
                challengeId: 1,
                imageSrc: "/footer2.png",
                correct: false,
                text: "Making only the minimum payments on each card",
                audioSrc: "",
            },
            {
                id: 3,
                challengeId: 1,
                imageSrc: "/footer3.png",
                correct: false,
                text: "Transferring balances to a new credit card with a lower interest rate",
                audioSrc: "",
            },
            {
                id: 4,
                challengeId: 1,
                imageSrc: "/footer4.png",
                correct: false,
                text: "Ignoring the debt and focusing on saving money",
                audioSrc: "",
            }
        ])

        console.log("Seeding finished");
    }
    catch (error) {
        console.error(error);
        throw new Error("Failed to seed the database");
    }
}

main();
