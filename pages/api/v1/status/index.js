import database from "infra/database.js"

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const postgresVersion = await database.query("SHOW SERVER_VERSION;")
  const postgresMaxConnection = await database.query("SHOW max_connections;")
  const postgresConnections = await database.query("SELECT * FROM pg_stat_activity WHERE state = 'active';")
  const activeClientsNumber = postgresConnections.rowCount

  response.status(200).json({
    updated_at: updatedAt,
    postgres_version: parseInt(postgresVersion.rows[0].server_version),
    postgres_maximum_connections: parseInt(postgresMaxConnection.rows[0].max_connections),
    postgres_active_connections: activeClientsNumber
  })
}

export default status