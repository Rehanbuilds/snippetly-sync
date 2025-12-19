// Title: Imported Snippet
// Language: javascript
// Tags: none
// Created: 12/5/2025
// Snippet ID: 19c05f70-d33b-445f-b8cf-881ff8650623

export interface Task {
  id: string
  title: string
  description: string
  dueDate: Date
  reminderTime?: Date
  folderId?: string
  priority: "Low" | "Medium" | "High"
  status: "Pending" | "Completed"
  createdAt: Date
}

export interface Folder {
  id: string
  name: string
  createdAt: Date
}

const TASKS_KEY = "tasklet_tasks"
const FOLDERS_KEY = "tasklet_folders"

// Task operations
export function getTasks(): Task[] {
  if (typeof window === "undefined") return []
  const stored = localStorage.getItem(TASKS_KEY)
  if (!stored) return []

  const tasks = JSON.parse(stored)
  return tasks.map((task: any) => ({
    ...task,
    dueDate: new Date(task.dueDate),
    reminderTime: task.reminderTime ? new Date(task.reminderTime) : undefined,
    createdAt: new Date(task.createdAt),
  }))
}

export function saveTasks(tasks: Task[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks))
}

export function addTask(task: Omit<Task, "id" | "createdAt">): Task {
  const newTask: Task = {
    ...task,
    id: crypto.randomUUID(),
    createdAt: new Date(),
  }

  const tasks = getTasks()
  tasks.push(newTask)
  saveTasks(tasks)
  return newTask
}

export const COMPLETED_TASKS_FOLDER_ID = "completed-tasks-folder"

export function updateTask(id: string, updates: Partial<Task>): void {
  const tasks = getTasks()
  const index = tasks.findIndex((task) => task.id === id)
  if (index !== -1) {
    const updatedTask = { ...tasks[index], ...updates }

    if (updates.status === "Completed") {
      updatedTask.folderId = COMPLETED_TASKS_FOLDER_ID
    } else if (updates.status === "Pending" && tasks[index].folderId === COMPLETED_TASKS_FOLDER_ID) {
      updatedTask.folderId = undefined
    }

    tasks[index] = updatedTask
    saveTasks(tasks)
  }
}

export function deleteTask(id: string): void {
  const tasks = getTasks().filter((task) => task.id !== id)
  saveTasks(tasks)
}

// Folder operations
export function getFolders(): Folder[] {
  if (typeof window === "undefined") return []
  const stored = localStorage.getItem(FOLDERS_KEY)
  if (!stored) return []

  const folders = JSON.parse(stored)
  return folders.map((folder: any) => ({
    ...folder,
    createdAt: new Date(folder.createdAt),
  }))
}

export function saveFolders(folders: Folder[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem(FOLDERS_KEY, JSON.stringify(folders))
}

export function addFolder(name: string): Folder {
  const newFolder: Folder = {
    id: crypto.randomUUID(),
    name,
    createdAt: new Date(),
  }

  const folders = getFolders()
  folders.push(newFolder)
  saveFolders(folders)
  return newFolder
}

export function deleteFolder(id: string): void {
  const folders = getFolders().filter((folder) => folder.id !== id)
  saveFolders(folders)

  // Also remove folder reference from tasks
  const tasks = getTasks().map((task) => (task.folderId === id ? { ...task, folderId: undefined } : task))
  saveTasks(tasks)
}

export function initializeDefaultFolders(): void {
  if (typeof window === "undefined") return

  const existingFolders = getFolders()

  const hasCompletedFolder = existingFolders.some((folder) => folder.id === COMPLETED_TASKS_FOLDER_ID)

  if (existingFolders.length === 0) {
    const defaultFolders = [
      { id: crypto.randomUUID(), name: "Work/Project", createdAt: new Date() },
      { id: crypto.randomUUID(), name: "Study", createdAt: new Date() },
      { id: crypto.randomUUID(), name: "Other", createdAt: new Date() },
      { id: COMPLETED_TASKS_FOLDER_ID, name: "Completed Tasks", createdAt: new Date() },
    ]
    saveFolders(defaultFolders)
  } else if (!hasCompletedFolder) {
    const completedFolder = { id: COMPLETED_TASKS_FOLDER_ID, name: "Completed Tasks", createdAt: new Date() }
    existingFolders.push(completedFolder)
    saveFolders(existingFolders)
  }
}
