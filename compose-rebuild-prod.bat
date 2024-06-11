REM 
docker-compose -f compose.prod.yaml --env-file .env.prod down -v
REM 
docker-compose -f compose.prod.yaml --env-file .env.prod up --build -d
pause