const express = require("express")

const cluster = require('cluster')

const os = require('os')

// cluster.schedulingPolicy = cluster.SCHED_RR

const app = express()

const PORT = 3000

function delay(duration) {
  const startTime = Date.now()
  while (Date.now() - startTime < duration) {
    //event loop is blocked
  }
}

app.get("/", (req, res) => {
  res.send(`Performance Example : ${process.pid}`)
})

app.get("/timer", (req, res) => {
  //delay the response
  delay(9000)
  res.json(`Ding ding ding : ${process.pid}`)
})

console.log('Running server.js ...')
if(cluster.isMaster){
  const NUM_WORKERS = os.cpus.length
  for(let i = 0; i < NUM_WORKERS; i++){
    console.log('Mater is started!')
    cluster.fork()
  }
}else{
  console.log('Worker is started!')
  app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
  })
}

