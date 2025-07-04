import jsonServerInstance from "../api/jsonInstance";
import type { Project } from "../interfaces/projectInterface";

export const getProjectByUserId = async (userId: string) => {
  try {
    const response = await jsonServerInstance.get(`/projects?owner=${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

export const createProject = async (project: Project) => {
  try {
    const response = await jsonServerInstance.post("/projects", project);
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};

export const deleteProject = async (projectId: string) => {
  try {
    const response = await jsonServerInstance.delete(`/projects/${projectId}`);
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};

export const updateProject = async (project: Project) => {
  try {
    const response = await jsonServerInstance.put(
      `/projects/${project.id}`,
      project
    );
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};

export const getProjectById = async (projectId: string) => {
  try {
    const response = await jsonServerInstance.get(`/projects?id=${projectId}`);
    return response.data[0];
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
};