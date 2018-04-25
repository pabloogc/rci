FROM python:3.4.3
WORKDIR /app
COPY ./instabot.py ./
RUN pip install --no-cache-dir -r requirements.txt
CMD [ "python", "./bot.py" ]