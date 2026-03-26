const vscode = require('vscode');

exports.activate = ctx => {
  ctx.subscriptions.push(
    vscode.commands.registerCommand('copyRelPathLines', () => {
      const e = vscode.window.activeTextEditor;
      if (!e) return;

      const relPath = vscode.workspace.asRelativePath(e.document.uri);
      const selection = e.selection;

      const start = selection.start.line + 1;
      const end = selection.end.line + 1;

      const output = `@${relPath}@${start}`;

      vscode.env.clipboard.writeText(start === end ? output : `${output}-${end}`);
    })
  );
};
