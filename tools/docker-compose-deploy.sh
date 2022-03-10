#!/usr/bin/env bash


SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

set -a
. $SCRIPT_DIR/../.env
set +a

docker-compose --context one -f $SCRIPT_DIR/../docker-compose.yaml -f $SCRIPT_DIR/../docker-compose.prod.yaml up --build