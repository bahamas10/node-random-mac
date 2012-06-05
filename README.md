random-mac
==========

Generate a random Mac Address

Install
=======

    npm install random-mac

Usage
=====

``` js
var randomMac = require('./random-mac');
```

Example
=======

``` js
> var randomMac = require('./random-mac');
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
=======

MIT Licensed
