import { NextRequest, NextResponse } from "next/server";

export const GET = (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  // Fetch data from a db
  // If not found, return 404 error
  // Otherwise return actual data
  if (params?.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: "Pablo" });
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  // Validate the request body
  // If it's invalid, return 400 (Bad Request)
  // Fetch the user with the given id
  // If user doesn't exist in db, return 404
  // If exist, update the user
  // REturn the updated user
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: body.name });
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  // Fetch use from db
  // If user is not found, return 404
  // If found, delete the user from db
  // Return 200

  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({});
};
