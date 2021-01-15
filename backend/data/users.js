import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Usuario Uno',
        email: 'usuariouno@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Usuario dos',
        email: 'usuariodos@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users