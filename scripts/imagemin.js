import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import gifsicle from 'imagemin-gifsicle';
import jpegtran from 'imagemin-jpegtran';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import svgo from 'imagemin-svgo';
import zopfli from 'imagemin-zopfli';

import { svgoOptions } from './svgoOptions.js';

const { src, dest } = gulp;

const minify = () => (
  src('../minify/in/*.{jp?(e)g,png,svg}')
    .pipe(imagemin([
      gifsicle(),
      jpegtran({ progressive: true }),
      mozjpeg({ quality: 90 }),
      pngquant({ speed: 1, quality: [0.8, 0.8] }),
      svgo({ plugins: svgoOptions }),
      zopfli({ more: true }),
    ]))
    .pipe(dest('../minify/out'))
);

export { minify as imagemin};
