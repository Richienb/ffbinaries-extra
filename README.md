# FFBinaries Extra [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/ffbinaries-extra/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/ffbinaries-extra)

FFBinaries with promise support, request normalisation and a simplified API.

[![NPM Badge](https://nodei.co/npm/ffbinaries-extra.png)](https://npmjs.com/package/ffbinaries-extra)

## Install

```sh
npm install ffbinaries-extra
```

## Usage

```js
const ffBinaries = require("ffbinaries-extra");

ffBinaries.downloadBinaries();
//=> Promise<void>
```

## API

### getVersions()

Get the versions of FFBinaries available.

### getLatestVersion()

Get the latest version of FFBinaries available.

### downloadBinaries(options?)

#### options

Type: `object`

##### components

Type: `Array<"ffmpeg" | "ffprobe" | "ffserver" | "ffplay">`

An array of string values that describes which components to download. If not provided it will default to all components available for the platform.

##### version

Type: `string`

The version of ffmpeg to download.

##### extract

Type: `boolean`

Automatically extract downloaded zip files. Defaults to true.

##### destination

Type: `string`

The path where the binaries will be downloaded to.

### supportedPlatforms

Type: `string[]`

The platforms supported by FFBinaries.

### currentPlatform

Type: `string`

The current platform as detected from the os type and architecture.
