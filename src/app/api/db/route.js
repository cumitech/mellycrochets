import { NextResponse } from "next/server";
import sequelize from "../../../database/db-sequelize.config"; // Adjust path if needed

export async function GET() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
    await sequelize.sync();
    return NextResponse.json({ message: "Database initialized successfully." });
  } catch (error) {
    console.error("Database connection failed", error);
    return NextResponse.json(
      { error: "Failed to connect to database" },
      { status: 500 }
    );
  }
}
