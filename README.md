# PrimeNG
UI Components for Angular

See [PrimeNG homepage](http://www.primefaces.org/primeng) for live showcase and documentation.

![alt text](http://www.primefaces.org/primeng/showcase/resources/images/primeng-sidebar.svg "PrimeNG")

This is a JIT fork of this library

### How to use this package

- download primeng-4.0.3-JIT.tar.gz from sources
- install it as your package: `npm install /your/download/folder/primeng-4.0.3-JIT.tar.gz`

### How to develop this package
Make sure that you have the following packages installed globally (`npm install <packagename> -g`):
- webpack
- webpack-dev-server

Fetch dependencies:
```bash
npm install
./node_modules/.bin/ngc -p tsconfig-aot.json
./node_modules/.bin/gulp build
./node_modules/.bin/node-sass --output-style compressed resources/themes/vincent/theme.scss > resources/themes/vincent/theme.css
```
Build and run the showcase:
```bash
npm start
```
Pack into tar.gz (assuming that the package content root is `./primeng-jit`):
```bash
#!/bin/bash
rm -rf ./primeng-4.0.3-JIT
cp -r ./primeng-jit ./primeng-4.0.3-JIT
rm -rf ./primeng-4.0.3-JIT/.git
rm -rf ./primeng-4.0.3-JIT/.idea
rm -rf ./primeng-4.0.3-JIT/primeng.iml
rm -rf ./primeng-4.0.3-JIT/aot
rm -rf ./primeng-4.0.3-JIT/node_modules
rm -rf ./primeng-4.0.3-JIT/showcase
find ./primeng-4.0.3-JIT -name "*\.ts" | grep "\.d\.ts" --invert-match | xargs rm
rm ./primeng-4.0.3-JIT.tar.gz
tar -zcf primeng-4.0.3-JIT.tar.gz "primeng-4.0.3-JIT"
```
