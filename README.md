# Certified Ethical Hacker (CEH)

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-brightgreen?logo=github)](https://adanze.github.io/certified-ethical-hacker) [![Deploy](https://github.com/adanze/certified-ethical-hacker/actions/workflows/deploy.yml/badge.svg)](https://github.com/adanze/certified-ethical-hacker/actions/workflows/deploy.yml)

Study notes and flashcards for the EC-Council CEH v13 certification, built with MkDocs Material and deployed via GitHub Pages.

Prepared modules cover summaries, flashcards, and diagrams, accessible as a PWA. Content is generated using the **CEH-Study** Copilot agent.

## Installation

The site can be installed as an app on Android via Chrome:

1. Open [the site](https://adanze.github.io/certified-ethical-hacker) in Chrome
2. Tap the **⋮** menu → *Add to Home screen*
3. Confirm – the app appears on your home screen and runs without browser UI

## Development

### Setup

Installs MkDocs Material and all dependencies.

```bash
pip install -r requirements.txt
```

### Serve

Starts a local dev server with live reload.

```bash
mkdocs serve
```

Open http://127.0.0.1:8000 in your browser — changes are reflected instantly on save.

### Build

Compiles the site to static HTML. Useful to verify the output before deploying.

```bash
mkdocs build
```

Output goes to `site/` (git-ignored).

## Deployment

GitHub Actions deploys automatically on every push to `main`.

### Manual deploy

Builds the site and force-pushes it to the `gh-pages` branch.

```bash
mkdocs gh-deploy --force --no-history
```

The live site updates within seconds.
