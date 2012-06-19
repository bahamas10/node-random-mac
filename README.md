random-mac
==========

Generate a random Mac Address

Install
-------

Install for local use as a module

    npm install random-mac

Install globally to use the command line tool random-mac(1)

    npm install -g random-mac

Usage
-----

module

``` js
var randomMac = require('random-mac');
```

command line

    ~$ random-mac
    54:52:00:6f:56:c2
    ~$ random-mac 00:11:22
    00:11:22:ce:ae:07

Example
-------

``` js
> var randomMac = require('random-mac');
undefined
> randomMac()
'54:52:00:2d:45:4b'
> randomMac()
'54:52:00:66:8d:10'
> randomMac('00:11:22')
'00:11:22:09:66:7c'
>
```

    ~$ examples/random-mac.js
    54:52:00:a3:c7:ab

License
-------

MIT Licensed
