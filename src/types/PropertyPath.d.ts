import Many from './Many';

type PropertyName = string | number | symbol;

type PropertyPath = Many<PropertyName>;

export { PropertyPath as default, PropertyName };
