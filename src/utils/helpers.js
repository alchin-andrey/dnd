// одиночное значение
export function safe(v) {
  return (v ?? "").toString().trim();
}

// цвет без #
export function safeColor(v) {
  const s = safe(v);
  // return s.startsWith("#") ? `hex(${s.slice(1)})` : s;
  return s.startsWith("#") ? s.slice(1) : s;
}

// массив или строка
export function safeList(v, separator = ", ") { 
  if (Array.isArray(v)) {
    return v
      .map(safe)
      .filter(Boolean)
      .join(separator);
  }
  return safe(v);
}

// Печатает строку "Key: Value;" или "" если value пустое
export function line(key, value, { suffix = ";" } = {}) {
  const v = safe(value);
  if (!v) return "";
  return `${key}: ${v}${suffix}`;
}

// [ [k, v], ... ] → "k: v; k2: v2"
export function attrsToString(attrs) { 
  return attrs
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join(";\n") + ".";
}

/**
 * Склеивает блоки текста:
 * [
 *   ["a", "b"],
 *   ["c"]
 * ]
 * =>
 * "a\nb\n\nc"
 */
export function blocksToText(blocks, {
  lineSeparator = "\n",
  blockSeparator = "\n\n",
} = {}) {
  return blocks
    .map(block =>
      block
        .filter(Boolean)
        .join(lineSeparator)
    )
    .filter(Boolean)
    .join(blockSeparator);
}

export function stripPrefixOne(
  value,
  prefixes = ["lang_", "back_", "tool_"]
) {
  const s = safe(value);
  if (!s) return "";

  for (const p of prefixes) {
    if (s.startsWith(p)) return s.slice(p.length);
  }
  return s;
}

export function stripPrefixes(
  v,
  {
    prefixes = ["lang_", "back_", "tool_"],
    separator = ", ",
  } = {}
) {
  if (Array.isArray(v)) {
    return v
      .map(x => stripPrefixOne(x, prefixes))
      .map(safe)
      .filter(Boolean)
      .join(separator);
  }

  return stripPrefixOne(v, prefixes);
}


// export function titleCase(v) {
//   const s = safe(v);
//   if (!s) return "";
//   return s
//     .toLowerCase()
//     .split(/\s+/)
//     .map(w =>
//       w.split("-").map(p => (p ? p[0].toUpperCase() + p.slice(1) : "")).join("-")
//     )
//     .join(" ");
// }

// export function stripPrefixes(v, {
//   prefixes = ["lang_", "back_", "tool_"],
//   separator = ", ",
//   format = "title", // "none" | "title"
// } = {}) {
//   const formatFn = format === "title" ? titleCase : (x) => x;

//   if (Array.isArray(v)) {
//     return v
//       .map(x => stripPrefixesOne(x, prefixes))
//       .map(safe)
//       .filter(Boolean)
//       .map(formatFn)
//       .join(separator);
//   }

//   const one = stripPrefixesOne(v, prefixes);
//   return formatFn(one);
// }