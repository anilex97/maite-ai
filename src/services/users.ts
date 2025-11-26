const BASE_URL = "/api/admin/users";

export async function getUsers(search = "", page = 1, limit = 10) {
  const params = new URLSearchParams({ search, page: String(page), limit: String(limit) });

  const res = await fetch(`${BASE_URL}?${params.toString()}`, {
    method: "GET",
  });

  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function getUser(id: number) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "GET" });
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}

export async function createUser(data: any) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create user");
  return res.json();
}

export async function updateUser(id: number, data: any) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update user");
  return res.json();
}

export async function deleteUser(id: number) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });

  if (!res.ok) throw new Error("Failed to delete user");
  return res.json();
}
