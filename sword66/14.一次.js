/**
 * const m = new Map();
 * m.get(key) 没有 => undefined
 * m.set(key, val)
 * m.has(key)
 * m.delete(key)
 */

/**
 * const s = new Set([]);
 * s.has(item)
 * s.add(item)
 * s.delete(item)
 * s.keys()
 * s.size
 */

function findUnique(nums) {
  const m = new Map();
  const result = [];

  nums.map(item => {
    if (m.get(item) === undefined) {
      m.set(item, 1);
    } else {
      const prev = m.get(item);
      m.set(item, prev + 1);
    }
  });

  for (let [key, val] of m.entries()) {
    if (val === 1) {
      result.push(key);
    }
  }

  return result;
}