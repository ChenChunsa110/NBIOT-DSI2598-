{
    "tasks": [
      {
        "type": "cppbuild",
        "label": "C/C++: g++.exe build active file",
        "command": "C:/msys64/mingw64/bin/g++.exe",
        "args": ["-g", "${file}", "-o", "${fileDirname}\\${fileBasenameNoExtension}.exe"],
        "options": {
          "cwd": "${fileDirname}"
        },
        "problemMatcher": ["$gcc"],
        "group": {
          "kind": "build",
          "isDefault": true
        },
        "detail": "compiler: C:/msys64/mingw64/bin/g++.exe"
      }
    ],
    "version": "2.0.0"
  }