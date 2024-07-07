#!/usr/bin/env bash

pnpm _tsc --module commonjs
mv index.js index.cjs

pnpm _tsc --module esnext
mv index.js index.mjs