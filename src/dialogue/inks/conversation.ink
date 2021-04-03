CONST Narrator  = "000"
CONST Player  = "001"
CONST Thug1 = "003"
CONST Thug2 = "004"

{Narrator} Suddenly, two thugs emerged from the dark alleyway.

{Thug1} "Where do you think you're going?"
{Player} "..."
{Thug1} "Hey, buddy did you not hear me talking to you?"
{Player} "..just strolling down the street."
{Thug2} "You chose the WRONG street, bro."
    -> evade_thugs

=== evade_thugs ===
{Narrator} They were uncommonly large men. You needed to make a decision.
    * Make a run for it!
        {Thug1} "Oi! Get him!"
        {Narrator} You bolt down the alley the other direction, slipping on the slick asphalt. You feel yourself start to fall, and attempt to recover
            * * Try to wall-kick to regain your balance
                {Narrator} Bad luck. You are no Jackie Chan.
                    -> fight_thugs
            * * Pull over a barrel as an obstacle to your pursuers
                {Narrator} The rusty oblong barrel was perfectly timed, as the thugs couldn't quite leap over it in their hipster-tight jeans.
                {Narrator} You make it to the back fence and clamber over, not looking back.
                    -> END
    * Try to reason with them.
        {Player} "Can't we talk about this? What do you want, money?"
        {Thug2} *laughs condescendingly*
        {Thug1} "Sure, we'll take your money, too."
        {Narrator} The thugs continue their approach. Looks like they want a fight.
            -> evade_thugs
    * Charge them head-on
        -> fight_thugs

=== fight_thugs ===
{Narrator} The thugs toss you against the alley wall. There's no way out but with your fists. It's time to see what you're made of...
    -> END