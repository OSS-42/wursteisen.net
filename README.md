# wursteisen.net

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Publish

Push to `main`. GitHub Actions builds the site and rsyncs `dist/` to the droplet. Secrets live in the repo **Settings → Secrets and variables → Actions**, not in this file.

### Update a job (OTA)

Edit `src/content/work.json`:

- Change `date`, `en`, or `fr` on an existing entry (e.g. Alithya).
- To add a role: copy an object, set a new `id`, put logo file(s) in `src/assets/workXP/` named `{logo}.png`, and list those names in `"logos"`.

LinkedIn URL and CV path: `src/content/site.json`.

Then:

```sh
git add src/content src/assets/workXP
git commit -m "Update work"
git push origin main
```
