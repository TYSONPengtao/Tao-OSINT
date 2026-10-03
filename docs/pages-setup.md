# GitHub Pages Setup

TAO OSINT already contains a static web entry point and a deployment workflow.

GitHub's repository token cannot create the Pages site for the first time, so the repository owner must enable it once.

## One-time setup

1. Open **Settings → Pages** in `TYSONPengtao/Tao-OSINT`.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Open **Actions → Deploy TAO OSINT to GitHub Pages**.
4. Choose **Run workflow** on `main`.

After a successful deployment, the expected project URL is:

```text
https://tysonpengtao.github.io/Tao-OSINT/
```

## Why this is manual

The workflow token has permission to deploy to an existing Pages site, but GitHub rejected automatic first-time site creation with:

```text
Resource not accessible by integration
```

Keeping deployment manual avoids a failed workflow on every push before Pages is enabled.
