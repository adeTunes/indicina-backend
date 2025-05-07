# 📡 URL Shortener Backend (NestJS)

This is the backend API for the **ShortLink** project, built using [NestJS](https://nestjs.com/). It powers a URL shortening service that allows users to generate, resolve, and analyze short links.

---

## 📌 Features

- 🔗 Shorten long URLs using `/api/encode`
- 🔍 Retrieve the original URL from a shortened one using `/api/decode`
- 📊 View statistics on usage and metadata with `/api/statistic/:url_path`
- 📋 List all shortened URLs using `/api/list`
- 🚀 Redirect users from short URL to long URL via `/:url_path`

---

## 📁 Folder Structure
src/
├── url/
│ ├── url.controller.ts
│ ├── url.service.ts
│ ├── url.service.spec.ts
│ ├── url.module.ts
│ ├── interfaces/
└── main.ts

## 🛠️ Getting Started

### ✅ Install dependencies

```bash
npm install
npm run start:dev

The server runs by default on http://localhost:4000.

🧪 Run Tests

npm run test
Includes unit tests for the core URL shortening logic.

