# Setting up environment variables for Payload CMS with Next.js
Write-Host "Setting up environment variables for Payload CMS with Next.js..." -ForegroundColor Green

# Set environment variables
$env:DATABASE_URI = "mongodb+srv://michalkosiorek:tF9PXJxrFUhR83ck@pmsdb.5nrb2.mongodb.net/?retryWrites=true&w=majority&appName=PMSDB"
$env:PAYLOAD_SECRET = "your-very-secure-secret-key-change-me-in-production"
$env:NEXT_PUBLIC_SERVER_URL = "http://localhost:3000"

# Start the development server
Write-Host "Starting development server..." -ForegroundColor Green
npm run dev

Write-Host "Done!" -ForegroundColor Green
