#!/usr/bin/env bash
set -e

# this allows you to pass a parameter to override the entrypoint, i.e. "bash".
if [ "$1" = 'service' ]; then
    exec node /server/app/server.js "${@:2}"
fi

exec "$@"