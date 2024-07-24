import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgres://sachin:sachin243$@postgresql-179003-0.cloudclusters.net:19279/100xDb"
  );

  await client.connect();
  return client;
}
