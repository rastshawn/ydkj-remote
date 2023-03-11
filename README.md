don't use this. It literally allows anybody who visits a website to press buttons on your computer keyboard.


This is for the purpose of playing 1998's You Don't Know Jack online with friends.

you probably have to run this to fix an ssl error in later versions of Node when building the UI:

export NODE_OPTIONS=--openssl-legacy-provider




BUILDING:

cd to the ui folder
```
npm install
npm run build
```

cd to the server folder
```
npm install
npm run serve
```
the symlink should link the UI build folder to the statically-hosted folder in the server
