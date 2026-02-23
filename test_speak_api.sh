# Test Next.js /api/speak endpoint with curl

# Replace the URL if your dev server runs on a different port
curl -X POST http://localhost:3000/api/speak \
  -H "Content-Type: application/json" \
  -d '{"text": "Hej Nigora"}' \
  --output test.mp3

echo "Om allt fungerar får du en mp3-fil (test.mp3) som kan spelas upp."
