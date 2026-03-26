# Copy Rel Path Lines

Copies the current relative file path and cursor position or selected line range into system clipboard. This to make pasting/referencing lines of code in a file easier in, for example, Claude Code CLI.

Example:

```bash
@apps/merp/App.tsx@112-13
```

### Keybinding

Binds to chord `CMD+;L`.

### Install

VSC

```bash
code --install-extension ./bin/copy-path-lines.vsix
```

Cursor

```bash
cursor --install-extension ./bin/copy-path-lines.vsix
```
