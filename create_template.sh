#! /bin/bash

if ! command -v envsub &> /dev/null
then
    echo "envsub not installed, installing..."
    npm install -g envsub
fi

set -e

echo "Sourcing config..."
source config

echo "Creating docker-compose.yml..."
envsub --syntax handlebars docker-compose.template.yml docker-compose.yml

echo "All files created!"
