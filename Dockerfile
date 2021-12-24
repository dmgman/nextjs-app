FROM node:lts as dependencies
WORKDIR /next-isr
COPY package-lock.json ./
COPY package.json ./
RUN npm ci

FROM node:lts as builder
WORKDIR /next-isr
COPY . .
COPY --from=dependencies /next-isr/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /next-isr
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /next-isr/next.config.js ./
COPY --from=builder /next-isr/public ./public
COPY --from=builder /next-isr/.next ./.next
COPY --from=builder /next-isr/node_modules ./node_modules
COPY --from=builder /next-isr/package.json ./package.json

EXPOSE 4000
CMD ["npm", "start"]