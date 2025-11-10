Place custom font files (e.g. .woff2, .woff, .ttf) in this directory.
Example usage in CSS:
@font-face {
  font-family: 'MyCustomFont';
  src: url('/fonts/MyCustomFont.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
Then set in global.css:
html { font-family: 'MyCustomFont', Inter, sans-serif; }
