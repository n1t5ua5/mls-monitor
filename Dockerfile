# Frontend (ghi) build stage
FROM node:20 AS frontend-build
WORKDIR /app/ghi
COPY ghi/package*.json ./
RUN npm install
COPY ghi/ ./
RUN npm run build

# Backend (api) build stage
FROM python:3.11 AS backend-build
WORKDIR /app/api
COPY api/requirements.txt ./
RUN pip install -r requirements.txt
COPY api/ ./

# Final stage
FROM python:3.11
WORKDIR /app

# Copy frontend (ghi) build
COPY --from=frontend-build /app/ghi/build /app/ghi/build

# Copy backend (api)
COPY --from=backend-build /app/api /app/api

# Install necessary tools
RUN apt-get update && apt-get install -y \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Install serve to host the frontend
RUN npm install -g serve

# Install uvicorn for the backend
RUN pip install uvicorn

# Copy Procfile
COPY Procfile .

# Set the entrypoint to run the Procfile using Railway's Nixpacks
ENTRYPOINT ["nixpacks", "start"]
