globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, lazyEventHandler, readBody, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import unstorage_47drivers_47fs from 'unstorage/drivers/fs';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, relative, join } from 'pathe';
import { createIPX, createIPXMiddleware } from 'ipx';
import { generateJSON } from '@intlify/bundle-utils';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "baseURL": "https://lawyer.phpv8.aait-d.com/api/",
    "i18n": {
      "experimental": {
        "jsTsFormatResource": false
      },
      "baseUrl": ""
    }
  },
  "i18n": {
    "precompile": {
      "strictMessage": true,
      "escapeHtml": false
    }
  },
  "ipx": {
    "dir": "../public",
    "domains": [],
    "sharp": {},
    "alias": {}
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('i18n', unstorage_47drivers_47fs({"driver":"fs","base":"D:\\projects\\websites\\lawyer_website\\.nuxt\\i18n","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-05-21T07:28:48.193Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/sw.js": {
    "type": "application/javascript",
    "etag": "\"d25-P2sHw2tNUf0FXMF917xR5iaQCXc\"",
    "mtime": "2023-05-30T10:04:35.182Z",
    "size": 3365,
    "path": "../public/sw.js"
  },
  "/workbox-7369c0e1.js": {
    "type": "application/javascript",
    "etag": "\"3a8a-cDTzHoQXO/Syu4ocyHVrXc1zbP4\"",
    "mtime": "2023-05-30T10:04:35.183Z",
    "size": 14986,
    "path": "../public/workbox-7369c0e1.js"
  },
  "/_nuxt/app_store.d8755625.svg": {
    "type": "image/svg+xml",
    "etag": "\"40e6-YXdi5sfCr0WL/j5nslMmkzlsbmw\"",
    "mtime": "2023-05-30T10:04:08.947Z",
    "size": 16614,
    "path": "../public/_nuxt/app_store.d8755625.svg"
  },
  "/_nuxt/ar.1144066d.js": {
    "type": "application/javascript",
    "etag": "\"8c8-gZy8UfJXmPN2u2B0RQHDxemnLWI\"",
    "mtime": "2023-05-30T10:04:08.971Z",
    "size": 2248,
    "path": "../public/_nuxt/ar.1144066d.js"
  },
  "/_nuxt/auth.f9ff189a.js": {
    "type": "application/javascript",
    "etag": "\"d7-0B307QrhhzvkRxCY6RaRMvL8+YI\"",
    "mtime": "2023-05-30T10:04:08.972Z",
    "size": 215,
    "path": "../public/_nuxt/auth.f9ff189a.js"
  },
  "/_nuxt/authLayout.53611cd0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17309-dR2k7Wn3vh5pczbO60tjo+aKVqw\"",
    "mtime": "2023-05-30T10:04:08.951Z",
    "size": 94985,
    "path": "../public/_nuxt/authLayout.53611cd0.css"
  },
  "/_nuxt/authLayout.69d33b27.js": {
    "type": "application/javascript",
    "etag": "\"53e-dekPG4Dfr4TJbaj/XohzQ7PpuE4\"",
    "mtime": "2023-05-30T10:04:08.979Z",
    "size": 1342,
    "path": "../public/_nuxt/authLayout.69d33b27.js"
  },
  "/_nuxt/auth_bg.195931bc.svg": {
    "type": "image/svg+xml",
    "etag": "\"2b22d5-nr48U+A07+Si7Ck6mHLvQ3blOxY\"",
    "mtime": "2023-05-30T10:04:08.968Z",
    "size": 2826965,
    "path": "../public/_nuxt/auth_bg.195931bc.svg"
  },
  "/_nuxt/bg-footer.68618d54.svg": {
    "type": "image/svg+xml",
    "etag": "\"2a5-LbIZgblMl8PjtmlD4JFBs9aPJuQ\"",
    "mtime": "2023-05-30T10:04:08.948Z",
    "size": 677,
    "path": "../public/_nuxt/bg-footer.68618d54.svg"
  },
  "/_nuxt/change-password.3e1e7d82.js": {
    "type": "application/javascript",
    "etag": "\"bce-R25/VOY6y0ivjVrKvumg0fGEWuQ\"",
    "mtime": "2023-05-30T10:04:08.975Z",
    "size": 3022,
    "path": "../public/_nuxt/change-password.3e1e7d82.js"
  },
  "/_nuxt/client_icon.e478763c.svg": {
    "type": "image/svg+xml",
    "etag": "\"1651-z9v5g1fJp+dLS0Wi0P31lufYZxU\"",
    "mtime": "2023-05-30T10:04:08.943Z",
    "size": 5713,
    "path": "../public/_nuxt/client_icon.e478763c.svg"
  },
  "/_nuxt/color.473bc8ca.png": {
    "type": "image/png",
    "etag": "\"2873-/0xLyyIHiRspL1RO202p0t9dRc8\"",
    "mtime": "2023-05-30T10:04:08.934Z",
    "size": 10355,
    "path": "../public/_nuxt/color.473bc8ca.png"
  },
  "/_nuxt/composables.61e7926a.js": {
    "type": "application/javascript",
    "etag": "\"94-Zh3onztm6wNzsVn36nDv0IyRi0E\"",
    "mtime": "2023-05-30T10:04:08.969Z",
    "size": 148,
    "path": "../public/_nuxt/composables.61e7926a.js"
  },
  "/_nuxt/cookie.4132d486.js": {
    "type": "application/javascript",
    "etag": "\"aa9-ky6oekT/+eMt6/NwWJbIxfPz/4g\"",
    "mtime": "2023-05-30T10:04:08.970Z",
    "size": 2729,
    "path": "../public/_nuxt/cookie.4132d486.js"
  },
  "/_nuxt/default.9e495be3.js": {
    "type": "application/javascript",
    "etag": "\"18ec-kJAGd65xf1hGBUL0ecGvxoqOcc8\"",
    "mtime": "2023-05-30T10:04:08.981Z",
    "size": 6380,
    "path": "../public/_nuxt/default.9e495be3.js"
  },
  "/_nuxt/default.d5e508f9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17a0f-rblZBGJaonpjsHpER6kn9g2T2Zk\"",
    "mtime": "2023-05-30T10:04:08.952Z",
    "size": 96783,
    "path": "../public/_nuxt/default.d5e508f9.css"
  },
  "/_nuxt/email.337477e9.svg": {
    "type": "image/svg+xml",
    "etag": "\"310-MRAfmlw7pb7xr7siZXBcAew9frM\"",
    "mtime": "2023-05-30T10:04:08.943Z",
    "size": 784,
    "path": "../public/_nuxt/email.337477e9.svg"
  },
  "/_nuxt/en.07e044dd.js": {
    "type": "application/javascript",
    "etag": "\"8c8-ph4deLbt4/FPNBp5JsCXMbzi1Zc\"",
    "mtime": "2023-05-30T10:04:08.974Z",
    "size": 2248,
    "path": "../public/_nuxt/en.07e044dd.js"
  },
  "/_nuxt/entry.556ce20b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"48696-ejZBJr7a3VA6dP7yKpAySn4zo8Y\"",
    "mtime": "2023-05-30T10:04:08.950Z",
    "size": 296598,
    "path": "../public/_nuxt/entry.556ce20b.css"
  },
  "/_nuxt/entry.7aaca005.js": {
    "type": "application/javascript",
    "etag": "\"49e03-lj0e/X7BItXo2ugXPKIyRbOxbFE\"",
    "mtime": "2023-05-30T10:04:08.981Z",
    "size": 302595,
    "path": "../public/_nuxt/entry.7aaca005.js"
  },
  "/_nuxt/error-404.5b35ce4f.js": {
    "type": "application/javascript",
    "etag": "\"8fa-ZCVyQlNDaKUmSi+zC8+T5wvk5c0\"",
    "mtime": "2023-05-30T10:04:08.979Z",
    "size": 2298,
    "path": "../public/_nuxt/error-404.5b35ce4f.js"
  },
  "/_nuxt/error-404.8bdbaeb8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-jl7r/kE1FF0H+CLPNh+07RJXuFI\"",
    "mtime": "2023-05-30T10:04:08.952Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.8bdbaeb8.css"
  },
  "/_nuxt/error-500.2c1d134c.js": {
    "type": "application/javascript",
    "etag": "\"779-yeXs5QoDmyz3wR3A0TO/JkOZfQc\"",
    "mtime": "2023-05-30T10:04:08.979Z",
    "size": 1913,
    "path": "../public/_nuxt/error-500.2c1d134c.js"
  },
  "/_nuxt/error-500.b63a96f5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-loEWA9n4Kq4UMBzJyT6hY9SSl00\"",
    "mtime": "2023-05-30T10:04:08.952Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.b63a96f5.css"
  },
  "/_nuxt/error-component.4d1c1218.js": {
    "type": "application/javascript",
    "etag": "\"513-Oaf26PthfBaWW3EIdhaKD9/9ZpM\"",
    "mtime": "2023-05-30T10:04:08.968Z",
    "size": 1299,
    "path": "../public/_nuxt/error-component.4d1c1218.js"
  },
  "/_nuxt/fa-brands-400.404c746c.woff2": {
    "type": "font/woff2",
    "etag": "\"19c40-ooDs3d0UaV+tIlmTAasDrf5SJMA\"",
    "mtime": "2023-05-30T10:04:08.941Z",
    "size": 105536,
    "path": "../public/_nuxt/fa-brands-400.404c746c.woff2"
  },
  "/_nuxt/fa-brands-400.e523f49c.ttf": {
    "type": "font/ttf",
    "etag": "\"2c65c-rMB9Xhq1uWsj+rtTsfTkFsfApG0\"",
    "mtime": "2023-05-30T10:04:08.942Z",
    "size": 181852,
    "path": "../public/_nuxt/fa-brands-400.e523f49c.ttf"
  },
  "/_nuxt/fa-regular-400.4e96a7e0.ttf": {
    "type": "font/ttf",
    "etag": "\"ec68-oUAjxDFzYo2ThYwPP8kM9UsYoo4\"",
    "mtime": "2023-05-30T10:04:08.941Z",
    "size": 60520,
    "path": "../public/_nuxt/fa-regular-400.4e96a7e0.ttf"
  },
  "/_nuxt/fa-regular-400.6a274e76.woff2": {
    "type": "font/woff2",
    "etag": "\"5d84-N5ykj3Dz1Pefi/EHmIHHxa9PRKQ\"",
    "mtime": "2023-05-30T10:04:08.941Z",
    "size": 23940,
    "path": "../public/_nuxt/fa-regular-400.6a274e76.woff2"
  },
  "/_nuxt/fa-solid-900.03f2986c.ttf": {
    "type": "font/ttf",
    "etag": "\"5ed6c-kiXWy0KPzkFwTKspuLtDt2xn+LQ\"",
    "mtime": "2023-05-30T10:04:08.942Z",
    "size": 388460,
    "path": "../public/_nuxt/fa-solid-900.03f2986c.ttf"
  },
  "/_nuxt/fa-solid-900.d76fb4e8.woff2": {
    "type": "font/woff2",
    "etag": "\"25a74-Jxfz9YJx8vLmEg2ZN8cicAJlbTQ\"",
    "mtime": "2023-05-30T10:04:08.941Z",
    "size": 154228,
    "path": "../public/_nuxt/fa-solid-900.d76fb4e8.woff2"
  },
  "/_nuxt/fa-v4compatibility.0db31bef.woff2": {
    "type": "font/woff2",
    "etag": "\"1360-lR3tcQlKUuJJrFJ5n6x8u2g2gnA\"",
    "mtime": "2023-05-30T10:04:08.941Z",
    "size": 4960,
    "path": "../public/_nuxt/fa-v4compatibility.0db31bef.woff2"
  },
  "/_nuxt/fa-v4compatibility.86a687cf.ttf": {
    "type": "font/ttf",
    "etag": "\"293c-5ojgIBK55SaaCYCbDWZu3IdSfLI\"",
    "mtime": "2023-05-30T10:04:08.942Z",
    "size": 10556,
    "path": "../public/_nuxt/fa-v4compatibility.86a687cf.ttf"
  },
  "/_nuxt/GeneralBaseSection.51370f58.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"172d6-ZbB+1gJIIiyJV4XR8Fh8E4nvdsE\"",
    "mtime": "2023-05-30T10:04:08.951Z",
    "size": 94934,
    "path": "../public/_nuxt/GeneralBaseSection.51370f58.css"
  },
  "/_nuxt/GeneralBaseSection.63875465.js": {
    "type": "application/javascript",
    "etag": "\"5e6-cRBesMgwdIrLMPQy637vchHRTf4\"",
    "mtime": "2023-05-30T10:04:08.978Z",
    "size": 1510,
    "path": "../public/_nuxt/GeneralBaseSection.63875465.js"
  },
  "/_nuxt/global.497c544a.js": {
    "type": "application/javascript",
    "etag": "\"247-8QCHGz0w6qMzCpg8YeelCpbXqLo\"",
    "mtime": "2023-05-30T10:04:08.970Z",
    "size": 583,
    "path": "../public/_nuxt/global.497c544a.js"
  },
  "/_nuxt/google_play.dc96bcc7.svg": {
    "type": "image/svg+xml",
    "etag": "\"70bc-+4+lvPN6KsHXgc2O3prptfZMyMc\"",
    "mtime": "2023-05-30T10:04:08.945Z",
    "size": 28860,
    "path": "../public/_nuxt/google_play.dc96bcc7.svg"
  },
  "/_nuxt/guest.d8f09adb.js": {
    "type": "application/javascript",
    "etag": "\"cd-lWh9unM5J46U6OVQikhxhIZERT0\"",
    "mtime": "2023-05-30T10:04:08.977Z",
    "size": 205,
    "path": "../public/_nuxt/guest.d8f09adb.js"
  },
  "/_nuxt/icno2.e51f06c1.svg": {
    "type": "image/svg+xml",
    "etag": "\"557-V/r8BFTzknzYrS9CAy9DQ0lgwCM\"",
    "mtime": "2023-05-30T10:04:08.948Z",
    "size": 1367,
    "path": "../public/_nuxt/icno2.e51f06c1.svg"
  },
  "/_nuxt/icon_edit.d79809a9.svg": {
    "type": "image/svg+xml",
    "etag": "\"6b1-IWy5YXLYpWCcbHmrhQL6S6Rb6oA\"",
    "mtime": "2023-05-30T10:04:08.936Z",
    "size": 1713,
    "path": "../public/_nuxt/icon_edit.d79809a9.svg"
  },
  "/_nuxt/index.280d3f34.js": {
    "type": "application/javascript",
    "etag": "\"9d-bsOYf0d9wfDQHMFUBuVLTsiw+gk\"",
    "mtime": "2023-05-30T10:04:08.975Z",
    "size": 157,
    "path": "../public/_nuxt/index.280d3f34.js"
  },
  "/_nuxt/index.2cc0a025.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17db8-vrObsJj0O0/0HleNYCK5KDCYqiw\"",
    "mtime": "2023-05-30T10:04:08.951Z",
    "size": 97720,
    "path": "../public/_nuxt/index.2cc0a025.css"
  },
  "/_nuxt/index.7377004e.js": {
    "type": "application/javascript",
    "etag": "\"e72-2glwn4FvvBgE3/VKSSuSXE0MU6E\"",
    "mtime": "2023-05-30T10:04:08.979Z",
    "size": 3698,
    "path": "../public/_nuxt/index.7377004e.js"
  },
  "/_nuxt/index.esm.83261b9e.js": {
    "type": "application/javascript",
    "etag": "\"815a-txsoCqvRyKWO8TQebeItdgjJJcI\"",
    "mtime": "2023-05-30T10:04:08.976Z",
    "size": 33114,
    "path": "../public/_nuxt/index.esm.83261b9e.js"
  },
  "/_nuxt/InputPassword.625c3685.js": {
    "type": "application/javascript",
    "etag": "\"57d-XAbPAFi80dt48F0/f9BJWo2dx+M\"",
    "mtime": "2023-05-30T10:04:08.978Z",
    "size": 1405,
    "path": "../public/_nuxt/InputPassword.625c3685.js"
  },
  "/_nuxt/InputPassword.d04e60da.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17239-cIBwUmzhzcFhSTF+oYCZI5mNWwM\"",
    "mtime": "2023-05-30T10:04:08.950Z",
    "size": 94777,
    "path": "../public/_nuxt/InputPassword.d04e60da.css"
  },
  "/_nuxt/InputPhone.4aa3b671.js": {
    "type": "application/javascript",
    "etag": "\"9de-OH7MUif+VfmQUNwkdyk34JCQ0pE\"",
    "mtime": "2023-05-30T10:04:08.979Z",
    "size": 2526,
    "path": "../public/_nuxt/InputPhone.4aa3b671.js"
  },
  "/_nuxt/InputPhone.d3cb288c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17d93-9KdLrLMCCzDWwQ8HAWbs0euZw/k\"",
    "mtime": "2023-05-30T10:04:08.951Z",
    "size": 97683,
    "path": "../public/_nuxt/InputPhone.d3cb288c.css"
  },
  "/_nuxt/Inter-Bold.3e242080.woff": {
    "type": "font/woff",
    "etag": "\"22f68-5aSeWigRnpYFOabeC/j3K4EDYq8\"",
    "mtime": "2023-05-30T10:04:08.935Z",
    "size": 143208,
    "path": "../public/_nuxt/Inter-Bold.3e242080.woff"
  },
  "/_nuxt/Inter-Bold.c63158ba.woff2": {
    "type": "font/woff2",
    "etag": "\"19e9c-HpSg36yLqwlH6psLb7Zj661czrU\"",
    "mtime": "2023-05-30T10:04:08.935Z",
    "size": 106140,
    "path": "../public/_nuxt/Inter-Bold.c63158ba.woff2"
  },
  "/_nuxt/Inter-Light.36b86832.woff2": {
    "type": "font/woff2",
    "etag": "\"1978c-Cgzo3JK6byCvV+6zQeFgN1+XEmg\"",
    "mtime": "2023-05-30T10:04:08.935Z",
    "size": 104332,
    "path": "../public/_nuxt/Inter-Light.36b86832.woff2"
  },
  "/_nuxt/Inter-Light.4871aed0.woff": {
    "type": "font/woff",
    "etag": "\"22558-mWNkQ5zXdyPf0tOUGUbmO2YSLp8\"",
    "mtime": "2023-05-30T10:04:08.935Z",
    "size": 140632,
    "path": "../public/_nuxt/Inter-Light.4871aed0.woff"
  },
  "/_nuxt/Inter-Medium.1b498b95.woff2": {
    "type": "font/woff2",
    "etag": "\"19dc4-krMFJzBLXcgPRemX4LGsTHARChg\"",
    "mtime": "2023-05-30T10:04:08.935Z",
    "size": 105924,
    "path": "../public/_nuxt/Inter-Medium.1b498b95.woff2"
  },
  "/_nuxt/Inter-Medium.53deda46.woff": {
    "type": "font/woff",
    "etag": "\"22cd8-ytjPyE6/YQE4rvY+aUkJf/SNct0\"",
    "mtime": "2023-05-30T10:04:08.935Z",
    "size": 142552,
    "path": "../public/_nuxt/Inter-Medium.53deda46.woff"
  },
  "/_nuxt/Inter-Regular.d612f121.woff2": {
    "type": "font/woff2",
    "etag": "\"18234-+WNIJgdR6nix0j6VV9spcpC9ryg\"",
    "mtime": "2023-05-30T10:04:08.935Z",
    "size": 98868,
    "path": "../public/_nuxt/Inter-Regular.d612f121.woff2"
  },
  "/_nuxt/Inter-Regular.ef1f23c0.woff": {
    "type": "font/woff",
    "etag": "\"20ad4-cppFUbnMWXnzk0cnnW/txmIL8UE\"",
    "mtime": "2023-05-30T10:04:08.935Z",
    "size": 133844,
    "path": "../public/_nuxt/Inter-Regular.ef1f23c0.woff"
  },
  "/_nuxt/Inter-SemiBold.15226129.woff2": {
    "type": "font/woff2",
    "etag": "\"19d4c-36n489eb+KAAH+cu6trQSQy6Wcw\"",
    "mtime": "2023-05-30T10:04:08.935Z",
    "size": 105804,
    "path": "../public/_nuxt/Inter-SemiBold.15226129.woff2"
  },
  "/_nuxt/Inter-SemiBold.653fed7a.woff": {
    "type": "font/woff",
    "etag": "\"22e54-eulquZDHiB+ClHwb3Ef0F5S4SNc\"",
    "mtime": "2023-05-30T10:04:08.935Z",
    "size": 142932,
    "path": "../public/_nuxt/Inter-SemiBold.653fed7a.woff"
  },
  "/_nuxt/language.8f4e8a2e.svg": {
    "type": "image/svg+xml",
    "etag": "\"969-W+6o7rxt6wddQAsIPZbh/iBIoPg\"",
    "mtime": "2023-05-30T10:04:08.936Z",
    "size": 2409,
    "path": "../public/_nuxt/language.8f4e8a2e.svg"
  },
  "/_nuxt/lawyer_icon.11ed89e3.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d86-Wn92+9zybmjtJCCHZFiK0wOl+gM\"",
    "mtime": "2023-05-30T10:04:08.943Z",
    "size": 7558,
    "path": "../public/_nuxt/lawyer_icon.11ed89e3.svg"
  },
  "/_nuxt/list.9f2984ab.svg": {
    "type": "image/svg+xml",
    "etag": "\"477-GSBZZFg41PKkN2GV4VAmLPNaHjE\"",
    "mtime": "2023-05-30T10:04:08.943Z",
    "size": 1143,
    "path": "../public/_nuxt/list.9f2984ab.svg"
  },
  "/_nuxt/location.9bd14401.svg": {
    "type": "image/svg+xml",
    "etag": "\"5de-pbgUiUWM406higssoRdcwH/PdzY\"",
    "mtime": "2023-05-30T10:04:08.944Z",
    "size": 1502,
    "path": "../public/_nuxt/location.9bd14401.svg"
  },
  "/_nuxt/login-type.3053c03f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17478-vLs33ISDS5/270Hp2MacJ/WX+/g\"",
    "mtime": "2023-05-30T10:04:08.950Z",
    "size": 95352,
    "path": "../public/_nuxt/login-type.3053c03f.css"
  },
  "/_nuxt/login-type.d7bbb84c.js": {
    "type": "application/javascript",
    "etag": "\"cdd-FvF7hnBKPZ1Qfmu0pdOCh1fuT/E\"",
    "mtime": "2023-05-30T10:04:08.978Z",
    "size": 3293,
    "path": "../public/_nuxt/login-type.d7bbb84c.js"
  },
  "/_nuxt/login.efc97a4c.js": {
    "type": "application/javascript",
    "etag": "\"ec5-FO6fjvKmpy5wdELC1VIVyMV/d14\"",
    "mtime": "2023-05-30T10:04:08.969Z",
    "size": 3781,
    "path": "../public/_nuxt/login.efc97a4c.js"
  },
  "/_nuxt/logo.32037542.svg": {
    "type": "image/svg+xml",
    "etag": "\"73f-mMgUOtwYMmYaWvGHVgmsGQSaphc\"",
    "mtime": "2023-05-30T10:04:08.937Z",
    "size": 1855,
    "path": "../public/_nuxt/logo.32037542.svg"
  },
  "/_nuxt/logo.857d23a2.js": {
    "type": "application/javascript",
    "etag": "\"69-ukJquvLgbtIN3tcxCqY57HIVDAs\"",
    "mtime": "2023-05-30T10:04:08.977Z",
    "size": 105,
    "path": "../public/_nuxt/logo.857d23a2.js"
  },
  "/_nuxt/logo_footer.e77ffc77.svg": {
    "type": "image/svg+xml",
    "etag": "\"748-xw9tMJAjAYdxtvDdTPJdZOmKs8M\"",
    "mtime": "2023-05-30T10:04:08.944Z",
    "size": 1864,
    "path": "../public/_nuxt/logo_footer.e77ffc77.svg"
  },
  "/_nuxt/nuxt-icon.4544dae2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"fe-23rdvH8wBVm0gSnUqmHDhubj+to\"",
    "mtime": "2023-05-30T10:04:08.950Z",
    "size": 254,
    "path": "../public/_nuxt/nuxt-icon.4544dae2.css"
  },
  "/_nuxt/nuxt-icon.4c84d9f6.js": {
    "type": "application/javascript",
    "etag": "\"291-CcLEoUG5SMNVCOKMsevqASJ+VhY\"",
    "mtime": "2023-05-30T10:04:08.978Z",
    "size": 657,
    "path": "../public/_nuxt/nuxt-icon.4c84d9f6.js"
  },
  "/_nuxt/nuxt-link.d9db1e92.js": {
    "type": "application/javascript",
    "etag": "\"1107-M8JiBAnMicK0501zBZA708vUBnQ\"",
    "mtime": "2023-05-30T10:04:08.978Z",
    "size": 4359,
    "path": "../public/_nuxt/nuxt-link.d9db1e92.js"
  },
  "/_nuxt/phone.6b0d38de.svg": {
    "type": "image/svg+xml",
    "etag": "\"893-UK8rQ4SWLtNNEfOCyvUnrSUa/Fg\"",
    "mtime": "2023-05-30T10:04:08.944Z",
    "size": 2195,
    "path": "../public/_nuxt/phone.6b0d38de.svg"
  },
  "/_nuxt/primeicons.131bc3bf.ttf": {
    "type": "font/ttf",
    "etag": "\"11a0c-zutG1ZT95cxQfN+LcOOOeP5HZTw\"",
    "mtime": "2023-05-30T10:04:08.935Z",
    "size": 72204,
    "path": "../public/_nuxt/primeicons.131bc3bf.ttf"
  },
  "/_nuxt/primeicons.3824be50.woff2": {
    "type": "font/woff2",
    "etag": "\"75e4-VaSypfAuNiQF2Nh0kDrwtfamwV0\"",
    "mtime": "2023-05-30T10:04:08.935Z",
    "size": 30180,
    "path": "../public/_nuxt/primeicons.3824be50.woff2"
  },
  "/_nuxt/primeicons.5e10f102.svg": {
    "type": "image/svg+xml",
    "etag": "\"4727e-0zMqRSQrj27b8/PHF2ooDn7c2WE\"",
    "mtime": "2023-05-30T10:04:08.940Z",
    "size": 291454,
    "path": "../public/_nuxt/primeicons.5e10f102.svg"
  },
  "/_nuxt/primeicons.90a58d3a.woff": {
    "type": "font/woff",
    "etag": "\"11a58-sWSLUL4TNQ/ei12ab+eDVN3MQ+Q\"",
    "mtime": "2023-05-30T10:04:08.936Z",
    "size": 72280,
    "path": "../public/_nuxt/primeicons.90a58d3a.woff"
  },
  "/_nuxt/primeicons.ce852338.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"11abc-5N8jVcQFzTiq2jbtqQFagQ/quUw\"",
    "mtime": "2023-05-30T10:04:08.935Z",
    "size": 72380,
    "path": "../public/_nuxt/primeicons.ce852338.eot"
  },
  "/_nuxt/register.a18387e8.js": {
    "type": "application/javascript",
    "etag": "\"1121-EOVLiTsVk0KDN7gkU8LjeOp3NKM\"",
    "mtime": "2023-05-30T10:04:08.969Z",
    "size": 4385,
    "path": "../public/_nuxt/register.a18387e8.js"
  },
  "/_nuxt/reset-password.5af6bb38.js": {
    "type": "application/javascript",
    "etag": "\"a12-PoXhe5TtjJ0I3VyCWvhUiA64VrU\"",
    "mtime": "2023-05-30T10:04:08.968Z",
    "size": 2578,
    "path": "../public/_nuxt/reset-password.5af6bb38.js"
  },
  "/_nuxt/service1.dcf07631.png": {
    "type": "image/png",
    "etag": "\"5bb75-oQvODcw1hh4n0BkQujoisKuzkrI\"",
    "mtime": "2023-05-30T10:04:08.935Z",
    "size": 375669,
    "path": "../public/_nuxt/service1.dcf07631.png"
  },
  "/_nuxt/service2.46ac95e8.png": {
    "type": "image/png",
    "etag": "\"559c6-njdp0VtvCQ8hI83cbqwuRQAixDg\"",
    "mtime": "2023-05-30T10:04:08.936Z",
    "size": 350662,
    "path": "../public/_nuxt/service2.46ac95e8.png"
  },
  "/_nuxt/service3.a3948db6.png": {
    "type": "image/png",
    "etag": "\"668fc-yf2DTwve1QY84XwDjKt/e6KBkDE\"",
    "mtime": "2023-05-30T10:04:08.943Z",
    "size": 420092,
    "path": "../public/_nuxt/service3.a3948db6.png"
  },
  "/_nuxt/service4.32814235.png": {
    "type": "image/png",
    "etag": "\"64690-jqPeUInv/02z84m40aCmlBAgxGc\"",
    "mtime": "2023-05-30T10:04:08.943Z",
    "size": 411280,
    "path": "../public/_nuxt/service4.32814235.png"
  },
  "/_nuxt/services.80c9460e.js": {
    "type": "application/javascript",
    "etag": "\"1c93-740XrZ8lbZ10ptBGm9ZRlq+3eJc\"",
    "mtime": "2023-05-30T10:04:08.970Z",
    "size": 7315,
    "path": "../public/_nuxt/services.80c9460e.js"
  },
  "/_nuxt/slider.034e3324.svg": {
    "type": "image/svg+xml",
    "etag": "\"906f3e-Xwot3DhjBcvoV2nsrJj4wpGrZtI\"",
    "mtime": "2023-05-30T10:04:08.982Z",
    "size": 9465662,
    "path": "../public/_nuxt/slider.034e3324.svg"
  },
  "/_nuxt/success.4ce03fce.svg": {
    "type": "image/svg+xml",
    "etag": "\"4d3-/Y104f1EeW9GlDHm7zbNME6AMuM\"",
    "mtime": "2023-05-30T10:04:08.936Z",
    "size": 1235,
    "path": "../public/_nuxt/success.4ce03fce.svg"
  },
  "/_nuxt/success.b6063343.js": {
    "type": "application/javascript",
    "etag": "\"163-K9WAxh3F55ZgIvJFH3HYceWTHkA\"",
    "mtime": "2023-05-30T10:04:08.981Z",
    "size": 355,
    "path": "../public/_nuxt/success.b6063343.js"
  },
  "/_nuxt/success.e1903083.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17589-FqgKvmuxjE6jRT/rEI0ELrNkUfw\"",
    "mtime": "2023-05-30T10:04:08.951Z",
    "size": 95625,
    "path": "../public/_nuxt/success.e1903083.css"
  },
  "/_nuxt/swiper-vue.6e12f478.js": {
    "type": "application/javascript",
    "etag": "\"28fe3-ipuHSBr3kedDTgNXo39FSiiVVbQ\"",
    "mtime": "2023-05-30T10:04:08.978Z",
    "size": 167907,
    "path": "../public/_nuxt/swiper-vue.6e12f478.js"
  },
  "/_nuxt/swiper-vue.78ee92f5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"466a-1IOp6lw44SWFB41jYrTd51bP5j4\"",
    "mtime": "2023-05-30T10:04:08.950Z",
    "size": 18026,
    "path": "../public/_nuxt/swiper-vue.78ee92f5.css"
  },
  "/_nuxt/useAPILazyFetch.94301d64.js": {
    "type": "application/javascript",
    "etag": "\"2e9a-l/KmPqWBaHcbhM8FaVjffCFBYpI\"",
    "mtime": "2023-05-30T10:04:08.971Z",
    "size": 11930,
    "path": "../public/_nuxt/useAPILazyFetch.94301d64.js"
  },
  "/_nuxt/vee-validate.esm.a5d21a4f.js": {
    "type": "application/javascript",
    "etag": "\"7a81-tqLJKK89we5BP8oXT74GjDbvhvk\"",
    "mtime": "2023-05-30T10:04:08.978Z",
    "size": 31361,
    "path": "../public/_nuxt/vee-validate.esm.a5d21a4f.js"
  },
  "/_nuxt/verify.ec70b6ad.js": {
    "type": "application/javascript",
    "etag": "\"24d9-YUPAGVhk78kBNwQ4zN7Er7X84Tg\"",
    "mtime": "2023-05-30T10:04:08.977Z",
    "size": 9433,
    "path": "../public/_nuxt/verify.ec70b6ad.js"
  },
  "/_nuxt/verifyPhone.7c9fb74e.js": {
    "type": "application/javascript",
    "etag": "\"102-KcIn4qAPsZl5EI1dcLbs5D6hUNM\"",
    "mtime": "2023-05-30T10:04:08.972Z",
    "size": 258,
    "path": "../public/_nuxt/verifyPhone.7c9fb74e.js"
  },
  "/_nuxt/work.a225e861.svg": {
    "type": "image/svg+xml",
    "etag": "\"5e5-qus2ncLKKUfA+iz5qxFuamtAZh4\"",
    "mtime": "2023-05-30T10:04:08.944Z",
    "size": 1509,
    "path": "../public/_nuxt/work.a225e861.svg"
  },
  "/_nuxt/workbox-window.prod.es5.dc90f814.js": {
    "type": "application/javascript",
    "etag": "\"14a9-f+VD9+jGbxRSAYS8alrqDRXPmw4\"",
    "mtime": "2023-05-30T10:04:08.975Z",
    "size": 5289,
    "path": "../public/_nuxt/workbox-window.prod.es5.dc90f814.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _FGSwZk = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx;
  const ipxOptions = {
    ...opts || {},
    dir: fileURLToPath(new URL(opts.dir, globalThis._importMeta_.url))
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.node.req.url = withLeadingSlash(event.context.params._);
    await middleware(event.node.req, event.node.res);
  });
});

const BASE_KEY = "i18n";
const CONFIG_KEY = "config";
const configStorage = prefixStorage(useStorage(), BASE_KEY);
const PRECOMPILED_LOCALE_KEY = "i18n:locales";
const localeStorage = prefixStorage(useStorage(), PRECOMPILED_LOCALE_KEY);
const resolveKey = (key) => `${key}.js`;
const localeKey = (locale, hash) => `${locale}-${hash}`;
const configKey = (hash) => `${CONFIG_KEY}-${hash}`;
const _TD7k73 = defineEventHandler(async (event) => {
  const body = await readBody(event);
  validate(body);
  const cacheCode = await getCacheCode(body);
  if (cacheCode) {
    await setResponseHeader(event, "content-type", "text/javascript");
    return cacheCode.toString();
  }
  const [code, errors] = generateCode(body);
  if (errors.length > 0) {
    throw createError({ statusMessage: errors.join("|"), statusCode: 400 });
  }
  await setCacheCode(code, body);
  await setResponseHeader(event, "content-type", "text/javascript");
  return code;
});
function validate(body) {
  if (!body.type) {
    throw createError({ statusMessage: `require the 'type'`, statusCode: 400 });
  }
  if (body.type === "locale") {
    if (!body.locale) {
      throw createError({ statusMessage: `require the 'locale'`, statusCode: 400 });
    }
  }
  if (!body.hash) {
    throw createError({ statusMessage: `require the 'hash'`, statusCode: 400 });
  }
  if (!body.resource) {
    throw createError({ statusMessage: `require the 'resource'`, statusCode: 400 });
  }
}
async function getCacheCode({ type, locale, hash }) {
  if (type === "locale") {
    return await localeStorage.getItem(resolveKey(localeKey(locale, hash)));
  } else if (type === "config") {
    return await configStorage.getItem(resolveKey(configKey(hash)));
  } else {
    return null;
  }
}
function generateCode(body) {
  const errors = [];
  const {
    i18n: {
      precompile: { strictMessage, escapeHtml }
    }
  } = useRuntimeConfig();
  const env = "production";
  let gen = "";
  if (body.type === "locale") {
    const { code } = generateJSON(JSON.stringify(body.resource), {
      env,
      strictMessage,
      escapeHtml,
      onError: (error) => {
        errors.push(error);
      }
    });
    gen = code;
  } else if (body.type === "config") {
    gen += `export default {
`;
    const codes = [];
    Object.keys(body.resource).reduce((codes2, key) => {
      const { code } = generateJSON(JSON.stringify(body.resource[key]), {
        type: "bare",
        env,
        strictMessage,
        escapeHtml,
        onError: (error) => {
          errors.push(error);
        }
      });
      codes2.push(`  ${JSON.stringify(key)}: ${code},
`);
      return codes2;
    }, codes);
    gen += codes.join("");
    gen += `}
`;
  }
  return [gen, errors];
}
async function setCacheCode(code, { type, locale, hash }) {
  if (type === "locale") {
    await localeStorage.setItem(resolveKey(localeKey(locale, hash)), code);
  } else if (type === "config") {
    await configStorage.setItem(resolveKey(configKey(hash)), code);
  }
}

/*!
  * shared v9.3.0-beta.17
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
/**
 * Original Utilities
 * written by kazuya kawaguchi
 */
const isFunction = (val) => typeof val === 'function';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';

const _p25dYz = defineEventHandler(async (event) => {
  const hash = event.context.params?.hash;
  if (hash == null) {
    throw createError({ statusMessage: `require the 'hash'`, statusCode: 400 });
  }
  const i18nMeta = await getI18nMeta();
  const [filename] = hash.split(".");
  const target = i18nMeta[filename];
  const loadPath = await resolveModule(target.path);
  const loader = await import(loadPath).then((m) => m.default || m);
  if (target.type === "locale") {
    if (target.locale == null) {
      throw createError({ statusMessage: `not found locale`, statusCode: 500 });
    }
    const resource = await loader(target.locale);
    const code = await precompileLocale(target.locale, filename, resource);
    await setResponseHeader(event, "content-type", "text/javascript");
    return code;
  } else if (target.type === "config") {
    const config = isFunction(loader) ? await loader() : isObject(loader) ? loader : {};
    const messages = config.messages || {};
    const code = await precompileConfig(filename, messages);
    await setResponseHeader(event, "content-type", "text/javascript");
    return code;
  } else {
    throw new Error("Invalid type");
  }
});
async function getI18nMeta() {
  return await useStorage().getItem("build:dist:server:i18n-meta.json");
}
async function resolveModule(path) {
  const storage = await useStorage();
  const rootMount = await storage.getMount("root");
  const root = rootMount.driver.options.base;
  const rootRelative = relative(new URL(globalThis._importMeta_.url).pathname, root);
  return join(rootRelative, "dist/server", path);
}
async function precompileLocale(locale, filename, messages) {
  return await $fetch("/__i18n__/precompile", {
    method: "POST",
    body: {
      locale,
      type: "locale",
      hash: filename,
      resource: messages
    }
  });
}
async function precompileConfig(filename, messages) {
  return await $fetch("/__i18n__/precompile", {
    method: "POST",
    body: {
      type: "config",
      hash: filename,
      resource: getNeedPrecompileMessages(messages)
    }
  });
}
function deepCopy(src, des, predicate) {
  for (const key in src) {
    if (isObject(src[key])) {
      if (!isObject(des[key]))
        des[key] = {};
      deepCopy(src[key], des[key], predicate);
    } else {
      if (predicate) {
        if (predicate(src[key], des[key])) {
          des[key] = src[key];
        }
      } else {
        des[key] = src[key];
      }
    }
  }
}
function getNeedPrecompileMessages(messages) {
  const needPrecompileMessages = {};
  const predicate = (src) => !isFunction(src);
  for (const [locale, message] of Object.entries(messages)) {
    const dest = needPrecompileMessages[locale] = {};
    deepCopy(message, dest, predicate);
  }
  return needPrecompileMessages;
}

const _lazy_tBjxd1 = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_tBjxd1, lazy: true, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _FGSwZk, lazy: false, middleware: false, method: undefined },
  { route: '/__i18n__/precompile', handler: _TD7k73, lazy: false, middleware: false, method: "post" },
  { route: '/__i18n__/prerender/:hash', handler: _p25dYz, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_tBjxd1, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
