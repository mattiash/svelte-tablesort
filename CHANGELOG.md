# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.2] - 2022-03-05

- Revert: Enable import from package root
    [vite] Error when evaluating SSR module /node_modules/generator-sort/build/index.js?v=3a585f56:
      ReferenceError: exports is not defined
    https://github.com/vitejs/vite/issues/2579

## [2.0.1] - 2022-03-05

- Enable import from package root

## [2.0.0] - 2022-03-05

- Rebuild package with svelte-kit
- Add types

## [1.1.0] - 2019-07-07

### Changes

- Use generator-sort module to avoid code duplication
- Allow import directly from module
- Move sirv-cli to devDependencies
  
## [1.0.0] - 2019-07-06

First version.















What’s the point of 