# Use an official Node runtime as a parent image for the ghi
FROM node:14 AS ghi

WORKDIR /app/ghi

# Copy package.json and package-lock.json
COPY ghi/package*.json ./

# Install dependencies
RUN npm install

# Copy ghi source code
COPY ghi/ .

# Build the ghi
RUN npm run build

# Use an official Python runtime as a parent image for the api
FROM python:3.11.2

WORKDIR /app

# Copy api requirements and install dependencies
COPY api/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy api source code
COPY api/ .

# Copy built ghi from the ghi stage
COPY --from=ghi /app/ghi/build /app/ghi/build

# Expose the port the app runs on
EXPOSE 8000

# The ENTRYPOINT will be overridden by Railway's start command
ENTRYPOINT ["uvicorn", "main:app", "--host", "0.0.0.0"]
