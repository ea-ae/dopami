#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
docker-compose -f $SCRIPT_DIR/../docker-compose.yaml -f $SCRIPT_DIR/../docker-compose.test.yaml up --exit-code-from dopami --build
# alternative: docker compose run --rm dopami
