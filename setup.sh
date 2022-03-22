#!/bin/bash

ionic cordova platform rm android
ionic cordova platform add android@10.0.0
ng add @ionic/cordova-builders
ionic cordova plugin add cordova-plugin-inappbrowser
npm install --save @awesome-cordova-plugins/in-app-browser@5.40.0
npm install --save @awesome-cordova-plugins/core@5.40.0
