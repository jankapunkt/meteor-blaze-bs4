#!/usr/bin/env bash
meteor npm install -g meteor-build-client
METEOR_PACKAGE_DIRS=../ meteor meteor-build-client ../docs -t ../build/template.html
cp ../docs/index.html ../docs/index.md
