const fs = require('file-system');

const [, , command, ...args] = process.argv;

function handleError(err) {
    console.error(err.message);
    process.exit(1); // Exit with error code
}

function createDirectory(path) {
    fs.mkdir(path, err => {
        if (err) handleError(err);
        console.log(`Directory created: ${path}`);
    });
}

function createFile(path, content = "") {
    fs.writeFile(path, content, err => {
        if (err) handleError(err);
        console.log(`File created: ${path}`);
    });
}

function readFile(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) handleError(err);
        console.log(data);
    });
}

function deleteFile(path) {
    fs.unlink(path, err => {
        if (err) handleError(err);
        console.log(`File deleted: ${path}`);
    });
}

function deleteDirectory(path) {
    fs.rmdir(path, err => {
        if (err) handleError(err);
        console.log(`Directory deleted: ${path}`);
    });
}

function viewMetadataFile(path) {
    fs.stat(path, (err, stats) => {
        if (err) handleError(err);
        console.log(`File metadata for ${path}:`);
        console.log(stats);
    });
}

function listFiles(path) {
    fs.readdir(path, (err, files) => {
        if (err) handleError(err);
        console.log(`Files in directory ${path}:`);
        console.log(files);
    });
}

function showHelp() {
    console.log(`Available commands:`);
    console.log(`  create-directory <path> - Creates a new directory.`);
    console.log(`  create-file <path> [content] - Creates a new file with optional content.`);
    console.log(`  read-file <path> - Reads the contents of a file.`);
    console.log(`  delete-file <path> - Deletes a file.`);
    console.log(`  delete-directory <path> - Deletes a directory.`);
    console.log(`  view-metadata-file <path> - View metadata for a file.`);
    console.log(`  list-files [path] - Lists files in a directory (defaults to current directory).`);
    console.log(`  help - Displays this help message.`);
}

// Handle user commands
switch (command) {
    case 'create-directory':
        createDirectory(args[0]);
        break;
    case 'create-file':
        createFile(args[0], args[1] || "");
        break;
    case 'read-file':
        readFile(args[0]);
        break;
    case 'delete-file':
        deleteFile(args[0]);
        break;
    case 'delete-directory':
        deleteDirectory(args[0]);
        break;
    case 'edit-file':
        editFile(args[0]);
        break;
    case 'save-file':
        saveFile();
        break;
    case 'view-metadata-file':
        viewMetadataFile(args[0]);
        break;
    case 'list-files':
        listFiles(args[0] || process.cwd()); // Use current directory by default
        break;
    case 'help':
        showHelp();
    default: {
        console.error(`Invalid command: ${command}`);
        showHelp();
    }
}