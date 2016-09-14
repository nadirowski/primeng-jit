# PrimeNG
UI Components for AngularJS 2

See [PrimeNG homepage](http://www.primefaces.org/primeng) for live showcase and documentation.

This is a jit fork of this library

how to use our package

download primeng-1.0.0-beta.tar.gz from sources

install it as your package

npm install /your/download/folder/primeng-1.0.0-beta.tar.gz

how to prepare package

npm install

typings install

(now showcase should work - try npm start to see it)

copy to some other place, and remove all *.ts files (but not *.d.ts) 
find . -type f -name "*.ts" ! -name "*.d.ts" -exec rm -f {} \;

package remaining thigs as primeng-1.0.0-beta.14.tar.gz and update it in the sources
