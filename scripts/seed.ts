import "dotenv/config"
const {drizzle} = require("drizzle-orm/neon-http");
import {neon} from "@neondatabase/serverless"
import Image from "next/image";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

// @ts-ignore
const db = drizzle(sql, {schema});

const main = async () => {
    try{
        console.log("Seeding database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);

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

        console.log("Seeding finished");
    }
    catch(error){
        console.error(error);
        throw new Error("Failed to seed the database");
    }
}

main();
