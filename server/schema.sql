-- ============================================================
-- CrunchySnacks — Schema Completo
-- Ejecutar sobre la base de datos Neon conectada
-- ============================================================

-- ── 1. USERS (administradores del panel) ────────────────────
CREATE TABLE IF NOT EXISTS users (
  id         SERIAL PRIMARY KEY,
  nombre     TEXT NOT NULL,
  correo     TEXT NOT NULL UNIQUE,
  rol        TEXT NOT NULL DEFAULT 'editor',
  password   TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── 2. CATEGORÍAS ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS categorias (
  id          SERIAL PRIMARY KEY,
  nombre      TEXT NOT NULL,
  publico     BOOLEAN NOT NULL DEFAULT TRUE,
  imagen_url  TEXT,
  header_url  TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at  TIMESTAMPTZ
);

-- ── 3. PRODUCTS ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS products (
  id               SERIAL PRIMARY KEY,
  nombre           TEXT NOT NULL,
  descripcion      TEXT,
  precio           NUMERIC(10,2),
  stock            INTEGER NOT NULL DEFAULT 0,
  envio_especial   NUMERIC(10,2),
  es_variable      BOOLEAN NOT NULL DEFAULT FALSE,
  es_publico       BOOLEAN NOT NULL DEFAULT TRUE,
  slug             TEXT UNIQUE,
  imagen_url       TEXT,
  galeria_urls     JSONB,
  atributos        TEXT,
  tienda           TEXT NOT NULL DEFAULT 'General',
  flag             TEXT,
  preventa_inicio  DATE,
  preventa_fin     DATE,
  peso             NUMERIC(8,3) NOT NULL DEFAULT 0,
  marca            TEXT,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at       TIMESTAMPTZ
);

-- ── 4. PRODUCT_VARIATIONS ───────────────────────────────────
CREATE TABLE IF NOT EXISTS product_variations (
  id          SERIAL PRIMARY KEY,
  product_id  INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  valor       TEXT,
  precio      NUMERIC(10,2),
  stock       INTEGER NOT NULL DEFAULT 0,
  color       TEXT,
  imagen_url  TEXT,
  peso        NUMERIC(8,3) NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── 5. PEDIDOS ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS pedidos (
  id               SERIAL PRIMARY KEY,
  orden            TEXT NOT NULL UNIQUE,
  nombre           TEXT NOT NULL,
  correo           TEXT NOT NULL,
  telefono         TEXT,
  pais             TEXT,
  estado_env       TEXT,
  ciudad           TEXT,
  calle            TEXT,
  num_ext          TEXT,
  num_int          TEXT,
  colonia          TEXT,
  cp               TEXT,
  domicilio        TEXT,
  notas            TEXT,
  items            JSONB NOT NULL DEFAULT '[]',
  subtotal         NUMERIC(10,2) NOT NULL DEFAULT 0,
  envio            NUMERIC(10,2) NOT NULL DEFAULT 0,
  total            NUMERIC(10,2) NOT NULL DEFAULT 0,
  estado           TEXT NOT NULL DEFAULT 'Pendiente de pago',
  tracking_number  TEXT,
  tracking_url     TEXT,
  carrier          TEXT,
  mp_preference_id TEXT,
  mp_payment_id    TEXT,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── 6. CLIENTES ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS clientes (
  id                        SERIAL PRIMARY KEY,
  correo                    TEXT NOT NULL UNIQUE,
  nombre                    TEXT,
  ciudad                    TEXT,
  estado                    TEXT,
  pais                      TEXT,
  codigo_postal             TEXT,
  total_pedidos_historico   INTEGER NOT NULL DEFAULT 0,
  total_gastado_historico   NUMERIC(12,2) NOT NULL DEFAULT 0,
  created_at                TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at                TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── 7. BOLETINES ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS boletines (
  id         SERIAL PRIMARY KEY,
  asunto     TEXT NOT NULL,
  html       TEXT NOT NULL,
  estado     TEXT NOT NULL DEFAULT 'borrador',
  sent_at    TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── 8. CONFIGURACION (envío / envia.com) ────────────────────
CREATE TABLE IF NOT EXISTS configuracion (
  id           SERIAL PRIMARY KEY,
  precio_envio NUMERIC(10,2) NOT NULL DEFAULT 150,
  envia_token  TEXT,
  envia_modo   TEXT NOT NULL DEFAULT 'sandbox',
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Insertar fila inicial si no existe
INSERT INTO configuracion (precio_envio, envia_token, envia_modo)
SELECT 150, '', 'sandbox'
WHERE NOT EXISTS (SELECT 1 FROM configuracion);

-- ── 9. REGLAS DE ENVÍO ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS reglas_envio (
  id         SERIAL PRIMARY KEY,
  pais       TEXT NOT NULL,
  estados    JSONB,
  precio     NUMERIC(10,2) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── 10. SETTINGS (llave-valor para flags del sistema) ───────
CREATE TABLE IF NOT EXISTS settings (
  key        TEXT PRIMARY KEY,
  value      TEXT
);

-- Insertar bandera de mantenimiento si no existe
INSERT INTO settings (key, value)
VALUES ('mantenimiento', 'false')
ON CONFLICT (key) DO NOTHING;

-- ── LIMPIAR TABLAS OBSOLETAS (heredadas de amigo-merch) ─────
DROP TABLE IF EXISTS suscriptores;
DROP TABLE IF EXISTS tiendas;

-- ── ÍNDICES útiles ───────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_products_slug        ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_tienda      ON products(tienda);
CREATE INDEX IF NOT EXISTS idx_products_deleted     ON products(deleted_at);
CREATE INDEX IF NOT EXISTS idx_pedidos_orden        ON pedidos(orden);
CREATE INDEX IF NOT EXISTS idx_pedidos_correo       ON pedidos(correo);
CREATE INDEX IF NOT EXISTS idx_pedidos_estado       ON pedidos(estado);
CREATE INDEX IF NOT EXISTS idx_pedidos_created      ON pedidos(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_clientes_correo      ON clientes(correo);
CREATE INDEX IF NOT EXISTS idx_product_var_product  ON product_variations(product_id);
CREATE INDEX IF NOT EXISTS idx_categorias_deleted   ON categorias(deleted_at);
