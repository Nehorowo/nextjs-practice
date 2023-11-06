import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export const GET = (request: NextRequest) => {
  // fetch users from a db
  return NextResponse.json([
    {
      id: 1,
      name: "Pablo",
    },
    {
      id: 2,
      name: "Alex",
    },
  ]);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  // Validate
  // If data is invalid, return 400
  // Else, return new created data
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json({ id: 1, name: body?.name }, { status: 201 });
};
