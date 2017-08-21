# PrimeNG
UI Components for Angular

See [PrimeNG homepage](http://www.primefaces.org/primeng) for live showcase and documentation.

![alt text](https://www.primefaces.org/primeng/assets/showcase/images/primeng-sidebar.svg "PrimeNG")

This is a JIT fork of this library

### How to use this package

- download primeng-{version}-JIT.tar.gz from sources
- install it as your package: `npm install /your/download/folder/primeng-{version}-JIT.tar.gz`

### How to develop this package

Fetch dependencies:
```bash
npm install
```
Build and run the showcase:
```bash
npm start
```
Pack into tar.gz
```bash
#!/bin/bash
./node_modules/.bin/ngc -p tsconfig-release.json
./node_modules/.bin/gulp build-assets
./node_modules/.bin/node-sass --source-comments --source-map resources/themes resources/themes -o resources/themes
npm pack
```
