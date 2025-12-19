// Title: Imported Snippet
// Language: javascript
// Tags: none
// Created: 12/5/2025
// Snippet ID: 36345001-74d9-41e9-86e6-6fe33322cd59

import { getTasks, getFolders, type Task, type Folder } from "./storage"

export function exportTasksToCSV(tasks: Task[], folders: Folder[]): string {
  const headers = ["Title", "Description", "Due Date", "Priority", "Status", "Folder", "Created At"]

  const getFolderName = (folderId?: string) => {
    return folders.find((f) => f.id === folderId)?.name || "No Folder"
  }

  const rows = tasks.map((task) => [
    `"${task.title.replace(/"/g, '""')}"`,
    `"${task.description.replace(/"/g, '""')}"`,
    task.dueDate.toLocaleDateString(),
    task.priority,
    task.status,
    getFolderName(task.folderId),
    task.createdAt.toLocaleDateString(),
  ])

  return [headers.join(","), ...rows.map((row) => row.join(","))].join("\n")
}

export function exportTasksToJSON(): string {
  const tasks = getTasks()
  const folders = getFolders()

  return JSON.stringify(
    {
      exportDate: new Date().toISOString(),
      tasks,
      folders,
    },
    null,
    2,
  )
}

export function downloadFile(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export function shareTaskList(tasks: Task[], folders: Folder[]): string {
  const getFolderName = (folderId?: string) => {
    return folders.find((f) => f.id === folderId)?.name
  }

  let shareText = "📋 My Task List\n\n"

  const pendingTasks = tasks.filter((t) => t.status === "Pending")
  const completedTasks = tasks.filter((t) => t.status === "Completed")

  if (pendingTasks.length > 0) {
    shareText += "⏳ Pending Tasks:\n"
    pendingTasks.forEach((task) => {
      const folder = getFolderName(task.folderId)
      shareText += `• ${task.title}`
      if (folder) shareText += ` (${folder})`
      shareText += ` - Due: ${task.dueDate.toLocaleDateString()}\n`
    })
    shareText += "\n"
  }

  if (completedTasks.length > 0) {
    shareText += "✅ Completed Tasks:\n"
    completedTasks.forEach((task) => {
      const folder = getFolderName(task.folderId)
      shareText += `• ${task.title}`
      if (folder) shareText += ` (${folder})`
      shareText += "\n"
    })
  }

  shareText += "\nCreated with Tasklet 📱"
  return shareText
}
