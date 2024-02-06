import express from 'express'
import connection from './app/models/index.js'
import cors from 'cors'
import router from './app/routes/api.js'


const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

connection
.then(() => {
    app.listen(4000, () => {
        console.log("listening on 4000")
    })
})
.catch((error) => {
    console.log(error)
})