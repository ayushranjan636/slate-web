# Stage 1: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# Stage 2: Production image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy only necessary files from the builder stage
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install production dependencies (including 'next' itself)
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --prod

EXPOSE 3000

# Use the standard 'next start' command
CMD ["pnpm", "run", "start"]