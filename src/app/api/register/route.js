import connectDB from "@/lib/DB/DBconnection";
import { NextResponse } from "next/server";
import usermodel from "@/models/usermodel";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    await connectDB();
    const { name, phone, email, password}=await request.json();
    const hashedpass=bcrypt.hashSync(password, 10);
    const newUser= new usermodel({
      name: name,
      phone: phone,
      email: email.toLowerCase(),
      password: hashedpass,
      
    });
    
    await newUser.save();
    console.log(newUser);

    return NextResponse.json({ message: "User registered successfully" },{status: 201});
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Failed to register user" },
      { status: 500 }
    );
  }
}
