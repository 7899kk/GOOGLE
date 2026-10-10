import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'official-email-relay',
        configureServer(server) {
          server.middlewares.use('/api/contact', (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({error: 'Method not allowed'}));
              return;
            }

            let body = '';
            req.on('data', (chunk) => {
              body += chunk.toString();
            });

            req.on('end', async () => {
              try {
                const parsed = JSON.parse(body || '{}');
                const senderName = (parsed.name || '').trim();
                const senderEmail = (parsed.email || '').trim();
                const senderCompany = (parsed.company || '').trim();
                const rawMessage = (parsed.message || '').trim();

                const payload = {
                  name: senderName,
                  email: senderEmail,
                  _replyto: senderEmail,
                  reply_to_email: senderEmail,
                  company: senderCompany,
                  _subject: `Portfolio Inquiry from ${senderName} (${senderEmail})`,
                  message: `Sender Name: ${senderName}\nSender Gmail / Email: ${senderEmail}${
                    senderCompany ? `\nCompany: ${senderCompany}` : ''
                  }\n\nMessage:\n${rawMessage}`,
                };

                const upstream = await fetch('https://formspree.io/f/xlgonjal', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Origin: 'https://www.ashokkunchala.com',
                    Referer: 'https://www.ashokkunchala.com/',
                    'User-Agent':
                      req.headers['user-agent'] ||
                      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
                  },
                  body: JSON.stringify(payload),
                });

                const text = await upstream.text();
                res.statusCode = upstream.ok ? 200 : upstream.status;
                res.setHeader('Content-Type', 'application/json');
                res.end(text || JSON.stringify({ok: upstream.ok}));
              } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                  JSON.stringify({
                    ok: false,
                    error: err instanceof Error ? err.message : 'Send error',
                  })
                );
              }
            });
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
