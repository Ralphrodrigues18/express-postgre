
curl -X POST http://localhost:8080/register \
     -H "Content-Type: application/json" \
     -d '{"name": "João", "email": "joao@example.com"}' # Faltando o campo "password"
