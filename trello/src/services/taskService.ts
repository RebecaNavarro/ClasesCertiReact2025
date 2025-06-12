import jsonServerInstance from "../api/jsonInstance";
import type { Task } from "../interfaces/taskInterface";

export const createTask = async (task: Task) => {
  try {
    const response = await jsonServerInstance.post("/tasks", task);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};