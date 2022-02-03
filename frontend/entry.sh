#!/bin/sh
echo "starting container $hostname"
if [ -z "$VUE_APP_API_KEY" ]; then
  echo "ERROR starting container. Please indicate Google API key -e VUE_APP_API_KEY={your api key}"
  exit 1
fi
echo "starting container"
#your long-running command from CMD
exec "$@"
