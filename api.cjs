const seedData = require('../../data/site-data.json');
const { getStore } = require('@netlify/blobs');

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'taiyi2026';
const STORE_NAME = 'taiyi-site-data';
const DATA_KEY = 'site-data';

function json(statusCode, payload) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    },
    body: JSON.stringify(payload)
  };
}

function isAdmin(event) {
  const key = event.headers['x-admin-key'] || event.headers['X-Admin-Key'];
  return key === ADMIN_PASSWORD;
}

function parseBody(event) {
  if (!event.body) return {};
  try {
    return JSON.parse(event.body);
  } catch {
    const error = new Error('Invalid JSON');
    error.statusCode = 400;
    throw error;
  }
}

function routePath(event) {
  const path = event.path || '';
  const marker = '/.netlify/functions/api';
  if (path.startsWith(marker)) return path.slice(marker.length) || '/';
  if (path.startsWith('/api')) return path.slice(4) || '/';
  return '/';
}

function publicSiteData(data) {
  return {
    culture: data.culture,
    craft: data.craft,
    heroSlides: data.heroSlides || [],
    products: data.products || [],
    cases: data.cases || [],
    messages: data.messages || []
  };
}

async function store() {
  return getStore({ name: STORE_NAME, consistency: 'strong' });
}

async function readSiteData() {
  const dataStore = await store();
  const saved = await dataStore.get(DATA_KEY, { type: 'json', consistency: 'strong' });
  if (saved) return saved;
  await dataStore.set(DATA_KEY, JSON.stringify(seedData));
  return seedData;
}

async function writeSiteData(data) {
  const dataStore = await store();
  await dataStore.set(DATA_KEY, JSON.stringify(data));
}

exports.handler = async (event) => {
  try {
    if (event.httpMethod === 'OPTIONS') return json(204, {});

    const pathname = routePath(event);

    if (event.httpMethod === 'GET' && pathname === '/health') {
      return json(200, { ok: true, service: 'taiyi-tea-site', platform: 'netlify' });
    }

    if (event.httpMethod === 'POST' && pathname === '/admin-login') {
      if (!isAdmin(event)) return json(401, { error: 'Unauthorized' });
      return json(200, { ok: true });
    }

    if (event.httpMethod === 'GET' && pathname === '/site-data') {
      return json(200, publicSiteData(await readSiteData()));
    }

    if (event.httpMethod === 'PUT' && pathname === '/site-data') {
      if (!isAdmin(event)) return json(401, { error: 'Unauthorized' });
      const body = parseBody(event);
      const current = await readSiteData();
      const next = {
        ...current,
        culture: body.culture || current.culture,
        craft: body.craft || current.craft,
        heroSlides: Array.isArray(body.heroSlides) ? body.heroSlides : current.heroSlides,
        products: Array.isArray(body.products) ? body.products : current.products,
        cases: Array.isArray(body.cases) ? body.cases : current.cases,
        messages: Array.isArray(body.messages) ? body.messages : current.messages
      };
      await writeSiteData(next);
      return json(200, publicSiteData(next));
    }

    if (event.httpMethod === 'POST' && pathname === '/messages') {
      const body = parseBody(event);
      const name = String(body.name || '').trim().slice(0, 60) || '茶友';
      const content = String(body.content || '').trim().slice(0, 1000);
      if (!content) return json(400, { error: 'Message content is required' });
      const data = await readSiteData();
      const message = {
        id: Date.now().toString(),
        name,
        content,
        date: new Date().toLocaleString('zh-CN', { hour12: false }),
        likes: 0
      };
      data.messages = [message, ...(data.messages || [])];
      await writeSiteData(data);
      return json(201, { message, messages: data.messages });
    }

    const likeMatch = pathname.match(/^\/messages\/([^/]+)\/like$/);
    if (event.httpMethod === 'PUT' && likeMatch) {
      const data = await readSiteData();
      const message = (data.messages || []).find(item => item.id === decodeURIComponent(likeMatch[1]));
      if (!message) return json(404, { error: 'Message not found' });
      message.likes = Number(message.likes || 0) + 1;
      await writeSiteData(data);
      return json(200, { message, messages: data.messages });
    }

    const deleteMatch = pathname.match(/^\/messages\/([^/]+)$/);
    if (event.httpMethod === 'DELETE' && deleteMatch) {
      if (!isAdmin(event)) return json(401, { error: 'Unauthorized' });
      const data = await readSiteData();
      data.messages = (data.messages || []).filter(item => item.id !== decodeURIComponent(deleteMatch[1]));
      await writeSiteData(data);
      return json(200, { messages: data.messages });
    }

    return json(404, { error: 'API route not found' });
  } catch (error) {
    return json(error.statusCode || 500, { error: error.message || 'Server error' });
  }
};
