export function createUser(formData) {
  return fetch("http://localhost:9090/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("error");
    }
    return response.json();
  });
}
