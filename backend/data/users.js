import bcrypt from 'bcryptjs'

const user = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Andy Bell',
    email: 'info@andybellimages.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true

    
  },
  {
    name: 'Stella Bing',
    email: 'stella@example.com',
    password: bcrypt.hashSync('123456', 10),

    
  },
]

export default user