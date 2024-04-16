# Node.js File System (FS) Utility

This project implements a basic file system management tool using Node.js and the `file-system` library. It provides functionalities for creating, reading, deleting, and managing directories and files through a command-line interface (CLI).

## Features

- **Create Directory**: Create a new directory at the specified path.
- **Create File**: Create a new file at the specified path with optional content.
- **Read File**: Read the contents of a file at the specified path.
- **Delete File**: Delete a file at the specified path.
- **Delete Directory**: Delete a directory at the specified path.
- **View Metadata File**: View metadata information for a file at the specified path.
- **List Files**: List all files in a directory, defaulting to the current directory if no path is provided.
- **Help**: Display a help message listing available commands.

## Installation

1. Clone this repository or download the `file_system.js` script.
2. Install the required dependency using npm:

   ```bash
   npm install file-system
   ```
## Usage
1. Open a terminal in the project directory.
2. Run the script with a command and optional arguments:

```bash
node file_system.js <command> [arguments]
```

## Available Commands
- create-directory <path> - Creates a new directory at the specified path.
- create-file <path> [content] - Creates a new file at the specified path. Optional content can be provided as the second argument.
- read-file <path> - Reads the contents of a file and displays them in the console. Restricted to directories created by this program.
- delete-file <path> - Deletes a file from the specified path.
- delete-directory <path> - Deletes a directory from the specified path. Restricted to directories created by this program.
- view-metadata-file <path> - Displays metadata information for a file, such as creation time, size, and permissions.
- list-files [path] - Lists files within a directory. If no path is provided, it defaults to the current working directory.
- help - Displays this help message with a list of commands and their parameters.

## Example Usage
```bash
node file_system.js create-directory documents/work
node file_system.js create-file notes.txt "This is a sample note."
node file_system.js read-file documents/work/notes.txt  # Only works for directories created by this program
node file_system.js view-metadata-file notes.txt
node file_system.js list-files documents
```

## TODO
* [ ] Add Update functionality
* [ ] Restrict access to only folders/files created by this program
* [ ] Add permissions system
