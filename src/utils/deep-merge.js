
export default function deepMerge(
  target,
  ...sources
) {
  target = target || {};
  const len = sources.length;
  let obj;
  let value;
  for (let i = 0; i < len; i++) {
    obj = sources[i] || {};
    for (let key in obj) {
      if (typeof obj[key] !== undefined) {
        value = obj[key];
        if (isCloneable(value)) {
          target[key] = deepMerge(
            target[key] || (Array.isArray(value) && []) || {},
            value,
          );
        } else {
          target[key] = value;
        }
      }
    }
  }
  return target;
}

function isCloneable(obj) {
  return Array.isArray(obj) || {}.toString.call(obj) == '[object Object]';
}
