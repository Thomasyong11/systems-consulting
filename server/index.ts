import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// tiny API logger
app.use((req, res, next) => {
  const start = Date.now();
  const p = req.path;
  let capturedJson: Record<string, any> | undefined;

  const origJson = res.json.bind(res);
  res.json = function (body: any, ...args: any[]) {
    capturedJson = body;
    return origJson(body, ...args);
  };

  res.on("finish", () => {
    const ms = Date.now() - start;
    if (p.startsWith("/api")) {
      let line = `${req.method} ${p} ${res.statusCode} in ${ms}ms`;
      if (capturedJson) line += ` :: ${JSON.stringify(capturedJson)}`;
      if (line.length > 80) line = line.slice(0, 79) + "…";
      log(line);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  // error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // Dev: Vite middleware. Prod: serve built assets + SPA fallback.
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    // If you already have serveStatic(app) wired to dist, keep it.
    // Otherwise, do it explicitly here:
    try {
      serveStatic(app);
    } catch {
      const distDir = path.join(__dirname, "../dist");
      app.use(express.static(distDir));
      app.get("*", (_req, res) => {
        res.sendFile(path.join(distDir, "index.html"));
      });
    }
  }

  // Local dev server. Vercel provides its own server, so don't listen there.
  const isVercel = !!process.env.VERCEL;
  if (!isVercel) {
    const port = Number(process.env.PORT) || 5000;
    const host =
      process.env.HOST || (process.platform === "win32" ? "127.0.0.1" : "0.0.0.0");

    server.listen(port, host, () => {
      log(`serving on http://${host}:${port}`);
    });
  }
})();







// import express, { type Request, Response, NextFunction } from "express";
// import { registerRoutes } from "./routes";
// import { setupVite, serveStatic, log } from "./vite";

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   const start = Date.now();
//   const path = req.path;
//   let capturedJsonResponse: Record<string, any> | undefined = undefined;

//   const originalResJson = res.json;
//   res.json = function (bodyJson, ...args) {
//     capturedJsonResponse = bodyJson;
//     return originalResJson.apply(res, [bodyJson, ...args]);
//   };

//   res.on("finish", () => {
//     const duration = Date.now() - start;
//     if (path.startsWith("/api")) {
//       let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
//       if (capturedJsonResponse) {
//         logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
//       }

//       if (logLine.length > 80) {
//         logLine = logLine.slice(0, 79) + "…";
//       }

//       log(logLine);
//     }
//   });

//   next();
// });

// (async () => {
//   const server = await registerRoutes(app);

//   app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
//     const status = err.status || err.statusCode || 500;
//     const message = err.message || "Internal Server Error";

//     res.status(status).json({ message });
//     throw err;
//   });

//   // importantly only setup vite in development and after
//   // setting up all the other routes so the catch-all route
//   // doesn't interfere with the other routes
//   if (app.get("env") === "development") {
//     await setupVite(app, server);
//   } else {
//     serveStatic(app);
//   }

//   // ALWAYS serve the app on the port specified in the environment variable PORT
//   // Other ports are firewalled. Default to 5000 if not specified.
//   // this serves both the API and the client.
//   // It is the only port that is not firewalled.
// const port = Number(process.env.PORT) || 5000;
// const host = process.env.HOST || (process.platform === "win32" ? "127.0.0.1" : "0.0.0.0");
// server.listen(port, host, () => {
//   log(`serving on http://${host}:${port}`);
// });
//   // server.listen({
//   //   port,
//   //   host: "0.0.0.0",
//   //   reusePort: true,
//   // }, () => {
//   //   log(`serving on port ${port}`);
//   // });
// })();
