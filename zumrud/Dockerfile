FROM arm32v7/node:10.15.3-jessie-slim
RUN apt-get update && apt-get install python -y
RUN apt-get install libsqlite3-dev -y
RUN apt-get install build-essential -y
WORKDIR /app 
CMD [ "sh", "run.sh" ]
