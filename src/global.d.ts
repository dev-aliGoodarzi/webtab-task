// For Img ( JPG )
declare module "*.jpg" {
  export default "" as string;
}
// For Img ( PNG )
declare module "*.png" {
  export default "" as string;
}
// For Img ( SVG )
declare module "*.svg" {
  const content: any;
  export default content;
}

// For CSS
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// For LESS
declare module "*.module.less" {
  const classes: { [key: string]: string };
  export default classes;
}

// For SCSS
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
