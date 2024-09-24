
import { NextResponse } from 'next/server';
import OCR from './ocr';

export async function GET() {
  try {
    await OCR();
    return NextResponse.json({ message: 'runned' }, { status: 200 });
  } catch (error) {
    console.error('Error extracting text:', error);
    return NextResponse.json({ message: 'Error extracting text' }, { status: 500 });
  }
}
