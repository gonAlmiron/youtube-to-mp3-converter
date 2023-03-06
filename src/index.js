import server from './services/server'

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log(`Servidor ON escuhando en puerto ${PORT}`)
})

server.on('error', (err) => logger.error(err))