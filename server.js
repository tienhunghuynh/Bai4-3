const express = require('express');
const app = express();
const port = 3000;

// Cho phép Express đọc dữ liệu JSON từ request body
app.use(express.json());

// --- DỮ LIỆU MẪU ---
let dataRole = [
    { "id": "r1", "name": "Quản trị viên", "description": "Toàn quyền quản lý hệ thống", "creationAt": "2026-03-04T08:00:00.000Z", "updatedAt": "2026-03-04T08:00:00.000Z" },
    { "id": "r2", "name": "Biên tập viên", "description": "Quản lý nội dung và dữ liệu", "creationAt": "2026-03-04T08:00:00.000Z", "updatedAt": "2026-03-04T08:00:00.000Z" },
    { "id": "r3", "name": "Người dùng", "description": "Tài khoản người dùng thông thường", "creationAt": "2026-03-04T08:00:00.000Z", "updatedAt": "2026-03-04T08:00:00.000Z" }
];

let dataUser = [
    { "username": "nguyenvana", "password": "123456", "email": "vana@gmail.com", "fullName": "Nguyễn Văn A", "avatarUrl": "https://i.sstatic.net/l60Hf.png", "status": true, "loginCount": 15, "role": { "id": "r1", "name": "Quản trị viên", "description": "Toàn quyền quản lý hệ thống" }, "creationAt": "2026-03-04T08:10:00.000Z", "updatedAt": "2026-03-04T08:10:00.000Z" },
    { "username": "tranthib", "password": "123456", "email": "thib@gmail.com", "fullName": "Trần Thị B", "avatarUrl": "https://i.sstatic.net/l60Hf.png", "status": true, "loginCount": 7, "role": { "id": "r2", "name": "Biên tập viên", "description": "Quản lý nội dung và dữ liệu" }, "creationAt": "2026-03-04T08:11:00.000Z", "updatedAt": "2026-03-04T08:11:00.000Z" },
    { "username": "levanc", "password": "123456", "email": "vanc@gmail.com", "fullName": "Lê Văn C", "avatarUrl": "https://i.sstatic.net/l60Hf.png", "status": true, "loginCount": 3, "role": { "id": "r3", "name": "Người dùng", "description": "Tài khoản người dùng thông thường" }, "creationAt": "2026-03-04T08:12:00.000Z", "updatedAt": "2026-03-04T08:12:00.000Z" },
    { "username": "phamthid", "password": "123456", "email": "thid@gmail.com", "fullName": "Phạm Thị D", "avatarUrl": "https://i.sstatic.net/l60Hf.png", "status": false, "loginCount": 0, "role": { "id": "r3", "name": "Người dùng", "description": "Tài khoản người dùng thông thường" }, "creationAt": "2026-03-04T08:13:00.000Z", "updatedAt": "2026-03-04T08:13:00.000Z" },
    { "username": "hoanganh", "password": "123456", "email": "anh@gmail.com", "fullName": "Hoàng Anh", "avatarUrl": "https://i.sstatic.net/l60Hf.png", "status": true, "loginCount": 2, "role": { "id": "r3", "name": "Người dùng", "description": "Tài khoản người dùng thông thường" }, "creationAt": "2026-03-04T08:14:00.000Z", "updatedAt": "2026-03-04T08:14:00.000Z" },
    { "username": "dangminh", "password": "123456", "email": "minh@gmail.com", "fullName": "Đặng Minh", "avatarUrl": "https://i.sstatic.net/l60Hf.png", "status": true, "loginCount": 9, "role": { "id": "r2", "name": "Biên tập viên", "description": "Quản lý nội dung và dữ liệu" }, "creationAt": "2026-03-04T08:15:00.000Z", "updatedAt": "2026-03-04T08:15:00.000Z" },
    { "username": "phamkhoa", "password": "123456", "email": "khoa@gmail.com", "fullName": "Phạm Quốc Khoa", "avatarUrl": "https://i.sstatic.net/l60Hf.png", "status": true, "loginCount": 1, "role": { "id": "r3", "name": "Người dùng", "description": "Tài khoản người dùng thông thường" }, "creationAt": "2026-03-04T08:16:00.000Z", "updatedAt": "2026-03-04T08:16:00.000Z" },
    { "username": "truonglinh", "password": "123456", "email": "linh@gmail.com", "fullName": "Trương Linh", "avatarUrl": "https://i.sstatic.net/l60Hf.png", "status": false, "loginCount": 0, "role": { "id": "r3", "name": "Người dùng", "description": "Tài khoản người dùng thông thường" }, "creationAt": "2026-03-04T08:17:00.000Z", "updatedAt": "2026-03-04T08:17:00.000Z" },
    { "username": "doquang", "password": "123456", "email": "quang@gmail.com", "fullName": "Đỗ Quang", "avatarUrl": "https://i.sstatic.net/l60Hf.png", "status": true, "loginCount": 4, "role": { "id": "r2", "name": "Biên tập viên", "description": "Quản lý nội dung và dữ liệu" }, "creationAt": "2026-03-04T08:18:00.000Z", "updatedAt": "2026-03-04T08:18:00.000Z" },
    { "username": "ngocanh", "password": "123456", "email": "ngocanh@gmail.com", "fullName": "Ngọc Anh", "avatarUrl": "https://i.sstatic.net/l60Hf.png", "status": true, "loginCount": 6, "role": { "id": "r1", "name": "Quản trị viên", "description": "Toàn quyền quản lý hệ thống" }, "creationAt": "2026-03-04T08:19:00.000Z", "updatedAt": "2026-03-04T08:19:00.000Z" }
];

// ==========================================
// 1. API ĐẶC BIỆT: Lấy tất cả user theo role ID
// ==========================================
app.get('/roles/:id/users', (req, res) => {
    const roleId = req.params.id;
    // Lọc ra các user có role.id trùng với id truyền lên
    const usersInRole = dataUser.filter(user => user.role.id === roleId);

    res.json({
        message: `Danh sách users thuộc role: ${roleId}`,
        data: usersInRole
    });
});

// ==========================================
// 2. CRUD CHO ROLES (dataRole)
// ==========================================

// READ ALL - Lấy danh sách roles
app.get('/roles', (req, res) => res.json(dataRole));

// READ ONE - Lấy 1 role theo id
app.get('/roles/:id', (req, res) => {
    const role = dataRole.find(r => r.id === req.params.id);
    if (!role) return res.status(404).json({ message: "Role không tồn tại" });
    res.json(role);
});

// CREATE - Tạo role mới
app.post('/roles', (req, res) => {
    const newRole = {
        ...req.body,
        creationAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    dataRole.push(newRole);
    res.status(201).json({ message: "Tạo role thành công", data: newRole });
});

// UPDATE - Cập nhật role
app.put('/roles/:id', (req, res) => {
    const index = dataRole.findIndex(r => r.id === req.params.id);
    if (index === -1) return res.status(404).json({ message: "Role không tồn tại" });

    dataRole[index] = { ...dataRole[index], ...req.body, updatedAt: new Date().toISOString() };
    res.json({ message: "Cập nhật role thành công", data: dataRole[index] });
});

// DELETE - Xóa role
app.delete('/roles/:id', (req, res) => {
    const index = dataRole.findIndex(r => r.id === req.params.id);
    if (index === -1) return res.status(404).json({ message: "Role không tồn tại" });

    dataRole.splice(index, 1);
    res.json({ message: "Xóa role thành công" });
});


// ==========================================
// 3. CRUD CHO USERS (dataUser)
// ==========================================

// READ ALL - Lấy danh sách users
app.get('/users', (req, res) => res.json(dataUser));

// READ ONE - Lấy 1 user theo username
app.get('/users/:username', (req, res) => {
    const user = dataUser.find(u => u.username === req.params.username);
    if (!user) return res.status(404).json({ message: "User không tồn tại" });
    res.json(user);
});

// CREATE - Tạo user mới
app.post('/users', (req, res) => {
    const newUser = {
        ...req.body,
        creationAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    dataUser.push(newUser);
    res.status(201).json({ message: "Tạo user thành công", data: newUser });
});

// UPDATE - Cập nhật user
app.put('/users/:username', (req, res) => {
    const index = dataUser.findIndex(u => u.username === req.params.username);
    if (index === -1) return res.status(404).json({ message: "User không tồn tại" });

    dataUser[index] = { ...dataUser[index], ...req.body, updatedAt: new Date().toISOString() };
    res.json({ message: "Cập nhật user thành công", data: dataUser[index] });
});

// DELETE - Xóa user
app.delete('/users/:username', (req, res) => {
    const index = dataUser.findIndex(u => u.username === req.params.username);
    if (index === -1) return res.status(404).json({ message: "User không tồn tại" });

    dataUser.splice(index, 1);
    res.json({ message: "Xóa user thành công" });
});

// --- KHỞI ĐỘNG SERVER ---
app.listen(port, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${port}`);
});