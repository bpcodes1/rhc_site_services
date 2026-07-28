// Build step 3: writes real HTML for every route.
//
// Vite builds the browser bundle (dist/) and a server bundle (dist-ssr/), then
// this renders each route to a string and folds it into dist/index.html. The
// result is one finished HTML file per route, so crawlers that never run
// JavaScript still see the full page.
//
// Adding a page? Add its path to ROUTES below AND to public/sitemap.xml.

import fs from 'node:fs'
import path from 'node:path'
import { render } from './dist-ssr/entry-server.js'

const ROUTES = [
  '/',
  '/portable-toilets',
  '/restroom-trailers',
  '/temporary-fencing',
  '/storage-containers',
  '/shower-trailers',
  '/about-us',
  '/contact-us',
  '/porta-potty-rental-bend-or',
  '/restroom-trailer-rental-bend-or',
  '/temporary-fencing-rental-bend-or',
  '/porta-potty-rental-portland-or',
  '/restroom-trailer-rental-portland-or',
  '/temporary-fencing-rental-portland-or',
  '/porta-potty-rental-seattle-wa',
  '/restroom-trailer-rental-seattle-wa',
  '/temporary-fencing-rental-seattle-wa',
]

// Any URL that matches no route renders the NotFound page, which Cloudflare
// Pages serves as a real 404.
const NOT_FOUND_URL = '/__not-found__'

const template = fs.readFileSync('dist/index.html', 'utf8')

// React 19 emits the page's hoisted <title>/<meta>/<link> at the front of the
// rendered string, ahead of the app markup. Split them off so they can go in
// <head> instead of the body.
const HEAD_RE = /^(?:<title[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>)+/

function buildPage(url) {
  const rendered = render(url)
  const head = (rendered.match(HEAD_RE) || [''])[0]
  const body = rendered.slice(head.length)

  if (!head.includes('<title')) {
    throw new Error(`No <title> rendered for ${url}. Check that the page sets one via Helmet.`)
  }
  if (body.length < 500) {
    throw new Error(`Suspiciously little markup rendered for ${url} (${body.length} bytes).`)
  }

  const html = template
    .replace('</head>', `${head}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)

  if (html.includes('<div id="root"></div>')) {
    throw new Error(`Failed to inject markup for ${url}; the root div was not found in dist/index.html.`)
  }
  return html
}

function write(outPath, html) {
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, html)
  console.log(`  ${outPath.padEnd(52)} ${(html.length / 1024).toFixed(0)} kB`)
}

// Flat files, not <route>/index.html. Cloudflare Pages serves foo.html at
// /foo, while foo/index.html only answers at /foo/ and 308s the bare path to
// it. Our canonicals and sitemap.xml both declare the no-trailing-slash form,
// so a directory layout would point every canonical at a redirecting URL.
console.log(`\n[prerender] ${ROUTES.length} routes + 404`)
for (const url of ROUTES) {
  write(url === '/' ? 'dist/index.html' : `dist${url}.html`, buildPage(url))
}
write('dist/404.html', buildPage(NOT_FOUND_URL))
console.log('[prerender] done\n')