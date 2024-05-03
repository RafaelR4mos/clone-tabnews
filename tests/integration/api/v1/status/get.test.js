test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status")
  expect(response.status).toBe(200)

  const responseBody = await response.json()
  expect(responseBody.updated_at).toBeDefined();
  expect(responseBody.postgres_version).toBeDefined();
  expect(responseBody.postgres_maximum_connections).toBeDefined();
  expect(responseBody.postgres_active_connections).toBeDefined();

  console.log(responseBody)

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString()
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt)
  expect(responseBody.postgres_version).not.toBeNaN()
  expect(responseBody.postgres_maximum_connections).not.toBeNaN()
  expect(responseBody.postgres_active_connections).not.toBeNaN()
})