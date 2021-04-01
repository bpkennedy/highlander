#!/bin/sh
set -e

# iterate all .js files generated from .ink files
# .js files are created directly through the Inky GUI editor for writing narrative.
for entry in "src/dialogue/generated"/*
do

  first14Chars=$( head -n 1 $entry | cut -c 1-14 )
  if [ "${first14Chars}" == "export default" ]; then
    # this file is already converted skip to next entry
    continue
  else
    #  cut off the 'var storyContent ='
    tail $entry | grep "var" | cut -c 19- > 'tmpFile' && mv 'tmpFile' $entry

    #  prepend with 'export default'
    echo "export default"|cat - $entry > /tmp/out && mv /tmp/out $entry
  fi

done
