# Frontend Base Project

Một template React được cấu hình sẵn để giúp bạn nhanh chóng bắt đầu phát triển ứng dụng web hiện đại.

## ✨ Tính Năng

- ⚛️ **React 19** - Thư viện UI hiện đại
- ⚡ **Vite** - Build tool nhanh với HMR
- 🛣️ **React Router** - Quản lý routing
- 🔐 **Authentication Context** - Hệ thống xác thực
- 🎨 **SCSS + CSS Modules** - Styling modular
- 🔌 **Axios** - HTTP client
- ✅ **ESLint** - Code quality
- 🎯 **Path Alias** - Import dễ dàng với `~`

## 🚀 Quick Start

### Yêu Cầu

- Node.js 18+
- Yarn hoặc npm

### Cài Đặt

```bash
git clone https://github.com/nhat251/codebase-frontend.git
cd codebase-frontend
yarn install
yarn dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`

## 📦 Scripts

- `yarn dev` - Development server
- `yarn build` - Build production
- `yarn preview` - Preview build
- `yarn lint` - ESLint check

## 🔑 Hướng Dẫn Sử Dụng

### Authentication

```jsx
import { useAuth } from '~/hooks';

function LoginComponent() {
  const { user, login, logout } = useAuth();

  return (
    <>
      {user ? (
        <div>
          <p>Welcome {user.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login(username, password)}>Login</button>
      )}
    </>
  );
}
```

### API Calls

```javascript
import callApi from '~/api/axiosConfig';

const fetchData = async () => {
  const response = await callApi({
    path: '/api/endpoint',
    method: 'GET',
  });
};
```

### Styling với CSS Modules

```scss
// MyComponent.module.scss
.container {
  display: flex;
  justify-content: center;

  .title {
    font-size: 24px;
  }
}
```

```jsx
// MyComponent.jsx
import styles from './MyComponent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function MyComponent() {
  return (
    <div className={cx('container')}>
      <h1 className={cx('title')}>Hello</h1>
    </div>
  );
}
```

### Path Alias

```javascript
// ✅ Sử dụng alias ~
import { useAuth } from '~/hooks';
import MyComponent from '~/components/MyComponent';

// ❌ Tránh
import { useAuth } from '../../../hooks';
```

## 📝 Checklist Khi Clone

- [ ] Thay đổi tên project trong `package.json`
- [ ] Cập nhật API endpoints trong `src/constants/my_const.js`
- [ ] Cấu hình environment variables
- [ ] Xóa/sửa routes không cần thiết
- [ ] Cập nhật assets (logo, fonts)
- [ ] Tạo git repository mới

## 🔧 Cấu Hình

### Environment Variables

Tạo file `.env.local`:

```
VITE_API_URL=https://your-api.com
VITE_APP_NAME=My App
```

Sử dụng trong code:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 📚 Tài Liệu

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [React Router](https://reactrouter.com)
- [Axios](https://axios-http.com)

## 🐛 Troubleshooting

| Vấn Đề                     | Giải Pháp                                    |
| -------------------------- | -------------------------------------------- |
| Port 5173 đã được sử dụng  | `yarn dev -- --port 3000`                    |
| Hot reload không hoạt động | Kiểm tra `vite.config.js` và restart server  |
| Import alias lỗi           | Kiểm tra `jsconfig.json` và `vite.config.js` |

---

# ENGLISH VERSION

## Frontend Base Project

A pre-configured React template to help you quickly start developing modern web applications.

### ✨ Features

- ⚛️ **React 19** - Modern UI library
- ⚡ **Vite** - Fast build tool with HMR
- 🛣️ **React Router** - Routing management
- 🔐 **Authentication Context** - Built-in auth system
- 🎨 **SCSS + CSS Modules** - Modular styling
- 🔌 **Axios** - HTTP client
- ✅ **ESLint** - Code quality
- 🎯 **Path Alias** - Easy imports with `~`

### 🚀 Quick Start

#### Requirements

- Node.js 18+
- Yarn or npm

#### Installation

```bash
git clone https://github.com/nhat251/codebase-frontend.git
cd codebase-frontend
yarn install
yarn dev
```

The app will run at `http://localhost:5173`

### 📦 Scripts

- `yarn dev` - Development server
- `yarn build` - Production build
- `yarn preview` - Preview build
- `yarn lint` - ESLint check

### 🔑 Usage Guide

#### Authentication

```jsx
import { useAuth } from '~/hooks';

function LoginComponent() {
  const { user, login, logout } = useAuth();

  return (
    <>
      {user ? (
        <div>
          <p>Welcome {user.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login(username, password)}>Login</button>
      )}
    </>
  );
}
```

#### API Calls

```javascript
import callApi from '~/api/axiosConfig';

const fetchData = async () => {
  const response = await callApi({
    path: '/api/endpoint',
    method: 'GET',
  });
};
```

#### Styling with CSS Modules

```scss
// MyComponent.module.scss
.container {
  display: flex;
  justify-content: center;

  .title {
    font-size: 24px;
  }
}
```

```jsx
// MyComponent.jsx
import styles from './MyComponent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function MyComponent() {
  return (
    <div className={cx('container')}>
      <h1 className={cx('title')}>Hello</h1>
    </div>
  );
}
```

#### Path Alias

```javascript
// ✅ Use alias ~
import { useAuth } from '~/hooks';
import MyComponent from '~/components/MyComponent';

// ❌ Avoid
import { useAuth } from '../../../hooks';
```

### 📝 Clone Checklist

- [ ] Update project name in `package.json`
- [ ] Update API endpoints in `src/constants/my_const.js`
- [ ] Set up environment variables
- [ ] Remove/update unnecessary routes
- [ ] Update assets (logo, fonts)
- [ ] Create a new git repository

### 🔧 Configuration

#### Environment Variables

Create `.env.local` file:

```
VITE_API_URL=https://your-api.com
VITE_APP_NAME=My App
```

Use in code:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### 📚 Documentation

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [React Router](https://reactrouter.com)
- [Axios](https://axios-http.com)

### 🐛 Troubleshooting

| Issue                    | Solution                                   |
| ------------------------ | ------------------------------------------ |
| Port 5173 already in use | `yarn dev -- --port 3000`                  |
| Hot reload not working   | Check `vite.config.js` and restart server  |
| Alias import error       | Check `jsconfig.json` and `vite.config.js` |
