#!/usr/bin/env bash
meteor npm install -g meteor-build-client
METEOR_PACKAGE_DIRS=../ meteor meteor-build-client ../build

