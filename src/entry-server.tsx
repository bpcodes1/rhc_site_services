import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import { StaticRouter } from 'react-router'
import AppRoutes from './AppRoutes'

// Used only by prerender.mjs at build time. React 19 hoists the <title>,
// <meta>, and <link> tags that pages declare, so the returned string carries
// this route's head tags ahead of its markup.
export function render(url: string) {
  return renderToString(
    <StrictMode>
      <HelmetProvider>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  )
}