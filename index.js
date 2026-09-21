const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const PORT = 8080

app.get('/photos', async (req, res) => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?count=50&client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
  )

  const photos = await response.json()

  res.json(photos)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
