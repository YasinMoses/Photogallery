import tailwindcss from 'tailwindcss'; // eslint-disable-line

export const plugins = [
    tailwindcss('./tailwind.js'),
    require('autoprefixer'),
];
export const contents = [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js',
];