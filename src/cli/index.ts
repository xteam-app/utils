#!/usr/bin/env node
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .commandDir('commands')
  .strict()
  .alias({
    v: 'version',
    h: 'help'
  })
  .argv;
