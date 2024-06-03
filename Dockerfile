FROM python:3.10-alpine

WORKDIR /app

COPY requirements.txt .

RUN apk update && apk add --no-cache curl
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

ENV FLASK_APP=app.py

ENV FLASK_ENV=development

CMD ["flask", "run", "--host=0.0.0.0"]