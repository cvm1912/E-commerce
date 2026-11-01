# E-commerce Project

## Project Structure

```
E-commerce/
├── client/                  # React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   ├── postcss.config.js
│   └── tailwind.config.js
├── backend/                 # Node.js Backend
│   ├── src/
│   │   ├── configs/
│   │   │   ├── dbConfig.js
│   │   │   └── loggerConfig.js
│   │   └── utils/
│   │       └── request-helper.js
│   ├── server.js
│   └── package.json
├── .gitignore
└── README.md
```

## Frontend Setup

```bash
# Create React app
npx create-react-app client

# Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Frontend Dependencies

| Package | Version |
|---|---|
| react | ^18.3.1 |
| react-dom | ^18.3.1 |
| react-router-dom | ^6.30.6 |
| react-redux | ^9.3.1 |
| @reduxjs/toolkit | ^2.13.0 |
| axios | ^1.21.0 |
| lucide-react | ^0.428.0 |
| tailwindcss | ^3.4.19 |
| clsx | ^2.1.1 |
| tailwind-merge | ^2.6.1 |

## Frontend Scripts

```bash
cd client
npm start        # Start dev server
npm run build    # Production build
npm test         # Run tests
```

## Backend Setup

```bash
cd backend
npm install
npm start        # Start with nodemon
```

## Backend Dependencies

| Package | Version |
|---|---|
| express | ^5.3.0 |
| mongoose | ^9.11.4 |
| bcryptjs | ^3.0.3 |
| cloudinary | ^2.11.0 |
| cookie-parser | ^1.4.7 |
| cors | ^2.8.6 |
| dotenv | ^18.0.9 |
| multer | ^2.5.0 |
| winston | ^3.19.0 |
| winston-daily-rotate-file | ^5.0.0 |
| nodemon | ^3.1.14 |
