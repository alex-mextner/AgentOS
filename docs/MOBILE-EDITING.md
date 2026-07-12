# Editing the public Wiki from iPhone

The repository stores ordinary Markdown, images, YAML front matter, tables, and stable internal IDs. Any editor that can open files from the iOS Files app can edit a local checkout.

## Recommended open workflow

1. Use a Git client that exposes a repository folder through the Files app or a document provider.
2. Open Markdown files from that folder in iA Writer or another Markdown editor.
3. Pull before editing.
4. Commit a small coherent change.
5. Push to a feature branch and open a pull request.
6. Review the Vercel preview before merge.

## iA Writer compatibility

The Wiki deliberately uses standard Markdown features supported by iA Writer: headings, tags, links, images, task lists, fenced code, and tables. YAML front matter remains plain text. Canonical links should use repository-relative Markdown links; the `[[AOS-ID#anchor]]` notation is reserved for automation and may be converted by publication tooling.

## Direct browser editing

Every document can also be edited through GitHub's web editor on iPhone. For substantial edits, create a branch rather than committing directly to `main`.

## Repository mounting limitation

iOS does not mount a Git repository as a native system filesystem by itself. A Git client or automation must maintain the working tree and expose it to Files. The portal therefore remains independent of any specific mobile editor.
