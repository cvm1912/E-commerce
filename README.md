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
# Create Vite React app
npm create vite@latest client -- --template react

cd client
npm install
```

## Frontend Dependencies

| Package | Version |
|---|---|
| react | ^19.3.1 |
| react-dom | ^19.3.1 |
| tailwindcss | ^4.3.3 |
| @tailwindcss/vite | ^4.3.3 |
| vite | ^8.3.5 |

## Frontend Scripts

```bash
cd client
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
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
