VAR gathering_name = "the Gathering"
VAR doom = 0

-> intro

=== intro ===
# location: alley

From the dawn of time we came, moving silently down through the centuries.
.
Living many secret lives,
struggling to reach the time of {gathering_name},
when the few who remain will battle to the last.
.
No one has ever known we were among you.
...
...
until now.  {doom}
 + Look around -> intro
 + Throw some trash at a nearby rat
    ~ doom++
    -> intro
 * Proceed
    -> END