#!/bin/sh
set -e

# iterate all .js files generated from .ink files
# .js files are created directly through the Inky GUI editor for writing narrative.
for entry in "src/dialogue/generated"/*
do

  first6Chars=$( head -n 1 $entry | cut -c 1-6 )
  if [ "${first6Chars}" == "export" ]; then
    # this file is already converted skip to next entry
    continue
  else
    #  prepend with 'export default'
    echo "export "|cat - $entry > /tmp/out && mv /tmp/out $entry
  fi

done
