# PrimeNG
UI Components for AngularJS 2

See [PrimeNG homepage](http://www.primefaces.org/primeng) for live showcase and documentation.

This is a JIT fork of this library

### How to use this package

- download primeng-1.0.0-beta.tar.gz from sources
- install it as your package: `npm install /your/download/folder/primeng-1.0.0-beta.tar.gz`

### How to develop this package
Make sure that you have the following packages installed globally (`npm install <packagename> -g`):
- typings
- webpack
- webpack-dev-server

Fetch dependencies:
```bash
npm install
typings install
```
Build and run the showcase:
```bash
npm start
```
Pack into tar.gz (assuming that the package content root is `./primeng-jit`):
```bash
#!/bin/bash
rm -rf ./primeng-1.0.0-beta.14
cp -r ./primeng-jit ./primeng-1.0.0-beta.14
rm ./primeng-1.0.0-beta.14/primeng-1.0.0-beta.14.tar.gz
rm -rf ./primeng-1.0.0-beta.14/.git
rm -r ./primeng-1.0.0-beta.14/.idea
rm -r ./primeng-1.0.0-beta.14/node_modules
find ./primeng-1.0.0-beta.14 -name "*.ts" | grep ".d.ts" --invert-match | xargs rm
rm ./primeng-1.0.0-beta.14.tar.gz
tar -zcf primeng-1.0.0-beta.14.tar.gz "primeng-1.0.0-beta.14"
```
