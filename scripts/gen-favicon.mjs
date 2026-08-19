import zlib from 'zlib'
import fs from 'fs'

const INK = [22, 38, 44]       // #16262C
const TEAL = [11, 122, 107]    // #0B7A6B
const RADIUS = 0.21

// distance from point to segment
function segDist(x, y, A, B) {
  const dx = B[0] - A[0]
  const dy = B[1] - A[1]
  const l = dx * dx + dy * dy
  let t = (x - A[0]) * dx + (y - A[1]) * dy
  if (l > 0) t = Math.max(0, Math.min(1, t / l))
  return Math.hypot(x - (A[0] + t * dx), y - (A[1] + t * dy))
}

function inRoundedRect(nx, ny, r) {
  const x = Math.abs(nx - 0.5)
  const y = Math.abs(ny - 0.5)
  const half = 0.5 - r
  if (x > half || y > half) return false
  const dx = Math.max(0, x - half)
  const dy = Math.max(0, y - half)
  return dx * dx + dy * dy <= r * r
}

function colorAt(nx, ny) {
  if (!inRoundedRect(nx, ny, RADIUS)) return [0, 0, 0, 0]
  const A = [0.297, 0.359]
  const B = [0.484, 0.5]
  const C = [0.297, 0.641]
  const half = 0.047
  const d = Math.min(segDist(nx, ny, A, B), segDist(nx, ny, B, C))
  const inCursor = nx >= 0.5625 && nx <= 0.703 && ny >= 0.359 && ny <= 0.641
  return d <= half || inCursor ? [...TEAL, 255] : [...INK, 255]
}

function render(size, sub) {
  const px = Buffer.alloc(size * size * 4)
  for (let py = 0; py < size; py++) {
    for (let pxx = 0; pxx < size; pxx++) {
      let ar = 0, ag = 0, ab = 0, aa = 0
      for (let i = 0; i < sub; i++) {
        for (let j = 0; j < sub; j++) {
          const nx = (pxx + (i + 0.5) / sub) / size
          const ny = (py + (j + 0.5) / sub) / size
          const [r, g, b, a] = colorAt(nx, ny)
          ar += r * a; ag += g * a; ab += b * a; aa += a
        }
      }
      const o = (py * size + pxx) * 4
      if (aa === 0) {
        px[o] = px[o + 1] = px[o + 2] = px[o + 3] = 0
      } else {
        px[o] = Math.round(ar / aa)
        px[o + 1] = Math.round(ag / aa)
        px[o + 2] = Math.round(ab / aa)
        px[o + 3] = Math.round(aa / (sub * sub))
      }
    }
  }
  return px
}

// ---- PNG encoder ----
const CRC_TABLE = (() => {
  const t = new Int32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    t[n] = c
  }
  return t
})()
function crc32(buf) {
  let c = 0xffffffff
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}
function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length, 0)
  const typeBuf = Buffer.from(type, 'ascii')
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0)
  return Buffer.concat([len, typeBuf, data, crc])
}
function encodePNG(size, px) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(size, 0)
  ihdr.writeUInt32BE(size, 4)
  ihdr[8] = 8   // bit depth
  ihdr[9] = 6   // color type RGBA
  ihdr[10] = 0
  ihdr[11] = 0
  ihdr[12] = 0
  // raw scanlines with filter byte 0
  const raw = Buffer.alloc(size * (size * 4 + 1))
  for (let y = 0; y < size; y++) {
    const rowStart = y * (size * 4 + 1)
    raw[rowStart] = 0
    px.copy(raw, rowStart + 1, y * size * 4, (y + 1) * size * 4)
  }
  const idat = zlib.deflateSync(raw, { level: 9 })
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))])
}

fs.writeFileSync('public/favicon.png', encodePNG(32, render(32, 4)))
fs.writeFileSync('public/apple-touch-icon.png', encodePNG(180, render(180, 4)))
fs.writeFileSync('public/favicon-16x16.png', encodePNG(16, render(16, 4)))
console.log('generated:', fs.statSync('public/favicon.png').size, 'bytes (32),', fs.statSync('public/apple-touch-icon.png').size, '(180),', fs.statSync('public/favicon-16x16.png').size, '(16)')