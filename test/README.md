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

```
src/
├── url/
│   ├── url.controller.ts
│   ├── url.service.ts
│   ├── url.service.spec.ts
│   ├── url.module.ts
│   ├── interfaces/
└── main.ts
```

---

## 🛠️ Getting Started

### ✅ Install dependencies and start server

```bash
yarn
yarn start:dev
```

The server runs by default on:  
📍 `http://localhost:4000`

---

## 🧪 Run Tests

```bash
npm run test
```

Includes unit tests for the core URL shortening logic.

---

## 📮 API Endpoints

### 🔗 POST `/api/encode`

Shortens a long URL.

#### Request Payload

```json
{
  "url": "https://example.com/some/long/url"
}
```

#### Example Response

```json
{
  "shortUrl": "http://localhost:4000/abc123"
}
```

---

### 🔍 POST `/api/decode`

Retrieves the original long URL from a shortened code.

#### Request Payload

```json
{
  "shortUrl": "http://localhost:4000/abc123"
}
```

#### Example Response

```json
{
  "longUrl": "https://example.com/some/long/url"
}
```

---

### 📊 GET `/api/statistic/:url_path`

Gets metadata and usage statistics about a shortened URL.

#### Example

`GET /api/statistic/abc123`

#### Example Response

```json
{
  "longUrl": "https://example.com/some/long/url",
  "createdAt": "2024-05-06T12:34:56.789Z",
  "visits": 5
}
```

---

### 📋 GET `/api/list`

Lists all shortened URLs with their metadata.

#### Example Response

```json
{
  "abc123": {
    "longUrl": "https://example.com",
    "createdAt": "2024-05-06T12:00:00.000Z",
    "visits": 2
  },
  "xyz789": {
    "longUrl": "https://indicina.co",
    "createdAt": "2024-05-06T13:00:00.000Z",
    "visits": 0
  }
}
```

---

### 🚀 GET `/:url_path`

Redirects the user from a short code to the original long URL.

#### Example

`GET /abc123`  
➡️ Redirects to: `https://example.com/some/long/url`

If the short code does not exist, a `404 Not Found` is returned.

---

## ⚙️ Configuration Notes

- All shortened URLs are stored **in memory** (not persisted).
- Short codes are generated using [`nanoid`](https://github.com/ai/nanoid).
- Data resets when the server restarts.

---

## 📫 Author

Built for the **Indicina Senior Engineering Assessment**.
