@echo off
echo Setting up environment variables for Payload CMS with Next.js...

:: Set environment variables
set DATABASE_URI=mongodb+srv://michalkosiorek:tF9PXJxrFUhR83ck@pmsdb.5nrb2.mongodb.net/?retryWrites=true&w=majority&appName=PMSDB
set PAYLOAD_SECRET=your-very-secure-secret-key-change-me-in-production
set NEXT_PUBLIC_SERVER_URL=http://localhost:3000

:: Start the development server
echo Starting development server...
npm run dev

echo Done!
