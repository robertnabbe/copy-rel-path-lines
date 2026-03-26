const vscode = require('vscode');

exports.activate = (ctx) => {
  ctx.subscriptions.push(
    vscode.commands.registerCommand('copyRelPathLines', () => {
      const e = vscode.window.activeTextEditor;
      if (!e) return;

      const rel = vscode.workspace.asRelativePath(e.document.uri);
      const s = e.selection;

      const start = s.start.line + 1;
      const end = s.end.line + 1;

      vscode.env.clipboard.writeText(
        start === end ? `@${rel}@${start}` : `${rel}@${start}-${end}`
      );
    })
  );
};
