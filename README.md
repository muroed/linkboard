# LinkBoard

![GitHub Repo Size](https://img.shields.io/github/repo-size/muroed/linkboard)
![GitHub Issues](https://img.shields.io/github/issues/muroed/linkboard)
![GitHub Stars](https://img.shields.io/github/stars/muroed/linkboard)
![GitHub Forks](https://img.shields.io/github/forks/muroed/linkboard)

LinkBoard is a web application that allows you to create a personalized link board, similar to a bulletin board, to share your important links with others.

Based on [hangerthem/linkboard](https://github.com/hangerthem/linkboard). See [NOTICE](NOTICE) for license and attribution.

## Features

- **YAML configuration**: Change name, links, metadata, and theme without rebuilding (Docker/runtime).
- **Customizable**: Themes, animations, profile and background images.
- **Responsive**: Works on all screen sizes.
- **Docker**: Standalone image with optional mounted config.

## Configuration

Edit `linkboard.yaml` in the project root (copy from `linkboard.yaml.example`).

| Field | Description |
|-------|-------------|
| `title` | Browser tab title |
| `theme` | `default`, `dark`, or `light` (see `themes/themes.ts`) |
| `name`, `description` | Profile heading |
| `links` | List of `{ name, url, icon? }` — `icon` is a [react-bootstrap-icons](https://github.com/alphagov/react-bootstrap-icons) export name |
| `metadata.author` | SEO author name and URL |
| `metadata.creator`, `metadata.publisher` | SEO fields |
| `sourceUrl` | AGPL source link (Git icon in the corner) |
| `animation.nameRandomizer` | Scramble name animation |
| `sortByLength` | Sort links by label length |

Override config path:

```bash
export LINKBOARD_CONFIG_PATH=/path/to/linkboard.yaml
```

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Docker

Build and run with the default baked-in config:

```bash
docker build -t linkboard .
docker run --rm -p 3000:3000 linkboard
```

Use your own config without rebuilding:

```bash
docker run --rm -p 3000:3000 \
  -v "$(pwd)/linkboard.yaml:/config/linkboard.yaml:ro" \
  linkboard
```

Or with Compose:

```bash
docker compose up --build
```

GitHub Actions builds and pushes the image to `ghcr.io/<owner>/<repo>` on push to `main`/`master` and on version tags `v*`.

## Assets

- Profile: `/public/profile.png`
- Background: `/public/background.webp`

## License

This project is licensed under the **GNU Affero General Public License v3.0** (AGPL-3.0). See [LICENSE](LICENSE) and [NOTICE](NOTICE).

If you deploy a modified version on a public server, you must provide users access to the corresponding source (AGPL §13). Set `sourceUrl` in `linkboard.yaml` to your public repository.

## Upstream

Original project by Frank Borisjuk — [hangerthem/linkboard](https://github.com/hangerthem/linkboard).
