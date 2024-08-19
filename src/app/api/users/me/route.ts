import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helpers/getDataFromToken';

connect();

export async function POST(request: NextRequest) {
  try {
    // Extract data from token
    const userId = await getDataFromToken(request);

    // Find the user and exclude the password field
    const user = await User.findOne({ _id: userId }).select('-password').lean();

    // Check if user exists
    if (!user) {
      return NextResponse.json({
        message: 'User not found',
        data: null,
      });
    }

    // Return the found user
    return NextResponse.json({
      message: 'User found',
      data: user,
    });
  } catch (error:any) {
    // Handle any errors
    return NextResponse.json({
      message: 'An error occurred',
      error: error.message,
    }, { status: 500 });
  }
}
