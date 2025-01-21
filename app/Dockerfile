# syntax=docker/dockerfile:1.4

# Tahap build untuk menginstal dependensi
FROM --platform=$BUILDPLATFORM python:3.9-alpine AS builder
EXPOSE 8000
WORKDIR /app
COPY requirements.txt /app
RUN pip3 install --upgrade pip && pip3 install -r requirements.txt --no-cache-dir
COPY . /app

# Tahap runtime
FROM python:3.9-alpine
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 8000
ENTRYPOINT ["python3", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]

# Menambahkan dev tools di tahap dev-envs
FROM builder AS dev-envs
RUN apk update && apk add git
RUN addgroup -S docker && adduser -S --shell /bin/bash --ingroup docker vscode
# Install Docker tools
COPY --from=gloursdocker/docker / /
