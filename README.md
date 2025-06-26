# 📚 LunaReads – Amazon Kindle Clone (MERN Stack)

LunaReads is a full-stack eBook web application inspired by Amazon Kindle. It allows users to browse, upload, and read PDF books in a smooth, interactive interface.

---

## 🛠️ Tech Stack

**Frontend**:  
- React.js (Next.js 14 with App Router)  
- TypeScript  
- CSS Modules  
- @react-pdf-viewer/core  
- TailwindCSS (if used)  

**Backend**:  
- Node.js  
- Express.js  
- MongoDB (Mongoose ODM)  
- Multer (for file uploads)  
- dotenv (for environment config)

---

## ✨ Features

- 📖 Upload books with title, author, description, price, Amazon link, and PDF
- 🖼️ Upload cover image link and attach PDF via file upload
- 🔍 View all uploaded books in a dynamic library
- 👓 Read PDFs directly in-browser with navigation
- 🔒 Secure file handling with multer
- 📦 Modular folder structure and clean codebase

---


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/LunaReads.git
cd LunaReads
````

### 2. Setup Backend

```bash
cd backend
npm install
touch .env
```

Add your `.env` file:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_url
```

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

Add your `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

```bash
npm run dev
```
