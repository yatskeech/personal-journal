# 📝 PersonalJournal

Welcome to the *PersonalJournal* project! This application enables users to create, edit, and view journal entries in an organized and user-friendly interface. Built with a focus on component-driven architecture and state management, *PersonalJournal* uses pure JavaScript and custom hooks to store entries locally.

## Table of Contents
1. [📖 Project Overview](#-project-overview)
2. [✨ Features](#-features)
3. [📂 Project Structure](#-project-structure)
4. [🧩 Components and Layouts](#-components-and-layouts)

## 📖 Project Overview
*PersonalJournal* allows users to:

- 🖊️ Write new journal entries
- ✏️ Edit and delete existing entries
- 🗃️ View all entries in a structured list format

This application leverages custom hooks for managing local storage and utilizes context for efficient state management across components, ensuring a clean and maintainable codebase.

## ✨ Features
- 🖊️ **Write Journal Entries**: Users can create new journal entries with custom text input.
- 🗃️ **View and Edit Entries**: Users can view a list of journal entries, as well as edit or delete them.
- 🧩 **Component-Based Architecture**: The project is structured with modular components and layouts for reusability and maintainability.
- 📦 **Local Storage Integration**: A custom hook is used to manage journal entries in the browser’s local storage, ensuring entries persist across sessions.
- 🌐 **Context-Based State Management**: The app leverages context to handle state across components, streamlining access and updates to shared data.

## 📂 Project Structure
```plaintext
personal-journal/
├── index.html
├── public/
├── src/
│   ├── components/
│   │    ├── Button/
│   │    ├── CardButton/
│   │    ├── Header/
│   │    ├── Input/
│   │    ├── JournalForm/
│   │    ├── JournalItem/
│   │    ├── JournalList/
│   │    └── ListButton/
│   ├── context/
│   ├── hooks/
│   └── layouts/
│        ├── Body/
│        └── Panel/
```
## 🧩 Components and Layouts
### Components
- 🖊️ **JournalForm**: The form component allows users to create and edit journal entries.
- 📜 **JournalList**: Organizes and displays all journal entries in a structured format.
- 🗂️ **JournalItem**: Represents an individual journal entry with options to edit or delete.
- 🕹️ **Button and CardButton**: Interactive components for submitting forms and handling actions.
- 🔡 **Input**: Handles user input for journal entries.
- 🎩 **Header**: Displays the main title and navigation elements of the application.
- ➕ **ListButton**: Provides navigational controls for entry lists.

### Layouts
- **Body**: Defines the main structure and layout of the journal application.
- **Panel**: Encapsulates different sections, such as the journal list and entry form.
