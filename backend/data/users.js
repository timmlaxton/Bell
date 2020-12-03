import bcrypt from 'bcryptjs'

const user = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Tim Laxton',
    email: 'tim@example.com',
    password: bcrypt.hashSync('123456', 10),

    
  },
  {
    name: 'Stella Bing',
    email: 'stella@example.com',
    password: bcrypt.hashSync('123456', 10),

    
  },
]

export default user