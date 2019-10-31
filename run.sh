docker build -t nish17/ubuntuexcel:latest .
docker run -v $PWD/data:/src/app/data --env-file .env nish17/ubuntuexcel:latest



# docker run -v $PWD/data:/src/app/data nish17/ubuntuexcel:latest test.xlsx > data.json


# echo test.xlsx | docker run nish17/ubuntuexcel:latest > data.json