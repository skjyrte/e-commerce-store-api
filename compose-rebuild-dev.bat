REM 
docker-compose -f compose.dev.yaml --env-file .env.dev down -v
REM 
docker-compose -f compose.dev.yaml --env-file .env.dev up --build -d
pause
