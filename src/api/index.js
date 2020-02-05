import axios from "axios";

const API_BASE_URL = "http://localhost:3333";

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const fetchTasks = () => client.get("/tasks");

export const createTask = params => client.post("/tasks", params);

export const editTask = (id, params) => client.patch(`/tasks/${id}`, params);
