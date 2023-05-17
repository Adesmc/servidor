#!/usr/bin/env node
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/* eslint-disable no-console */
/* eslint-disable import/no-unassigned-import */
'use strict';

// Provide a title to the process in `ps`.
// Due to an obscure Mac bug, do not start this title with any symbol.
try {
  process.title = 'ng ' + Array.from(process.argv).slice(2).join(' ');
} catch (_) {
  // If an error happened above, use the most basic title.
  process.title = 'ng';
}

const rawCommandName = process.argv[2];

if (rawCommandName === '--get-yargs-completions' || rawCommandName === 'completion') {
  // Skip Node.js supported checks when running ng completion.
  // A warning at this stage could cause a broken source action (`source <(ng completion script)`) when in the shell init script.
  require('./bootstrap');

  return;
}

// This node version check ensures that extremely old versions of node are not used.
// These may not support ES2015 features such as const/let/async/await/etc.
// These would then crash with a hard to diagnose error message.
var version = process.versions.node.split('.').map((part) => Number(part));
if (version[0] % 2 === 1) {
  // Allow new odd numbered releases with a warning (currently v17+)
  console.warn(
    'Node.js version ' +
      process.version +
      ' detected.\n' +
      'Odd numbered Node.js versions will not enter LTS status and should not be used for production.' +
      ' For more information, please see https://nodejs.org/en/about/releases/.',
  );

  require('./bootstrap');
} else if (
  version[0] < 14 ||
  (version[0] === 14 && version[1] < 20) ||
  (version[0] === 16 && version[1] < 14) ||
  (version[0] === 18 && version[1] < 10)
) {
  // Error and exit if less than 14.20, 16.14 or 18.10
  console.error(
    'Node.js version ' +
      process.version +
      ' detected.\n' +
      'The Angular CLI requires a minimum Node.js version of either v14.20, v16.14 or v18.10.\n\n' +
      'Please update your Node.js version or visit https://nodejs.org/ for additional instructions.\n',
  );

  process.exitCode = 3;
} else {
  require('./bootstrap');
}