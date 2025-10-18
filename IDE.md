# IDE specific settings

## Visual Studio Code

Copy the code below to `.vscode/settings.json`

```JSON
{
    "javascript.updateImportsOnFileMove.enabled": "always",
    "editor.quickSuggestions": {
        "comments": "on",
        "strings": "on",
        "other": "on"
    },
    "editor.formatOnSave": true,
    "files.autoSave": "onFocusChange",
    "editor.formatOnType": false,
    "editor.formatOnPaste": false,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "javascript.suggest.autoImports": true,
    "[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
    "typescript.referencesCodeLens.enabled": true,
    "[typescript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    },
    "html-css-class-completion.enableEmmetSupport": true,
    "scss.lint.unknownAtRules": "ignore",
    "files.readonlyInclude": {
        "**/routeTree.gen.ts": true
    },
    "files.watcherExclude": {
        "**/routeTree.gen.ts": true
    },
    "search.exclude": {
        "**/routeTree.gen.ts": true
    }
}
```
