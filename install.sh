#!/bin/bash
echo 'installing all examples...'
SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
echo 'installing counter example'
cd counter/svelte && npm install
cd $SCRIPTPATH
echo 'installing svelte in react example'
cd react && npm install
cd $SCRIPTPATH
echo 'installing stores example'
cd store && npm install
cd $SCRIPTPATH
echo 'installing styles example'
cd styling && npm install
cd $SCRIPTPATH