import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin User",
        email: "aadmin@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },

    {
        name: "John Doe",
        email: "john@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },

    {
        name: "Jack Chen",
        email: "jack@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
];

export default users;
