export function validateProps(props, rules, name) {
  Object.keys(rules).forEach((key) => {
    if (rules[key].required && props[key] === undefined)
      console.warn(`[${name}] Missing required prop: ${key}`);
    if (rules[key].type && props[key] !== undefined && typeof props[key] !== rules[key].type)
      console.warn(`[${name}] Prop "${key}" should be ${rules[key].type}`);
  });
}