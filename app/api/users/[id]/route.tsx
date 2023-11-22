import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });
  // Fetch data from a db
  // If not found, return 404 error
  // Otherwise return actual data
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  // Validate the request body
  // If it's invalid, return 400 (Bad Request)
  // Fetch the user with the given id
  // If user doesn't exist in db, return 404
  // If exist, update the user
  // REturn the updated user
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser);
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  // Fetch use from db
  // If user is not found, return 404
  // If found, delete the user from db
  // Return 200
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const deletedUser = await prisma.user.delete({
    where: { id: user.id },
  });

  return NextResponse.json(deletedUser);
};
