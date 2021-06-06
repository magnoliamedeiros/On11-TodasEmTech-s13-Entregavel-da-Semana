const app = require('./src/app')
const PORT = 3000

const db = require('./src/data/database')
db.con()

// subindo o servidor
app.listen(PORT, ()=>console.log('Server running!'))