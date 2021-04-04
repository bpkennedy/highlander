CONST Narrator  = "000"
CONST Player  = "001"
CONST Lambo  = "002"

CONST no_side_effect = "000"
CONST pick_name = "001"

VAR know_lando_name = false

{Narrator} You open your eyes and see the stars.
{Narrator} They're barely visible, faint, and without twinkle. They're hidden behind the dull yellow haze of the city street lamps.
{Narrator} It's now that you realize you are lying down, and you are outside, and you don't know how you got here.
    -> wake_up

=== wake_up ===
    + Look around {no_side_effect}
        {Narrator} {You can see the mouth of the alleyway, where cars are swishing past. No-one's paying you a second thought.|When did it get dark? The dingy alley wall sconces are flickering and wash the wet asphalt with a hazy yellow glow.|Are you laying in a stack of garbage bags?|It smells like garbage, piss, and motor oil.}
            -> wake_up
    + Assess yourself {no_side_effect}
        {Narrator} {Your mouth feels like you smoked a pack of cigarettes in ten minutes. You need water. Or maybe a whiskey?|It's cold. You pull your clothes tighter around you.|Your heard is pounding.|Well, at least you're not dead.}
            -> wake_up
    * Get up {no_side_effect}
        {Narrator} You rise shakily to your feet, and a deep voice speaks from far behind you.
        {Lambo} "Welcome back to the land of the living."
        {Narrator} You spin around and find thin man in a long coat sitting easily on a crate near the back of the alley. He doesn't look up at you.
        {Narrator} He's sharpening a sword.
        {Lambo} "It's going to be a rough few days for you."
            * * Who are you? {no_side_effect}
                {Player} "Who are you?"
                {Narrator} Lambo stands up and approaches you.
                {Lambo} "You can call me Lambo."
                    ~ know_lando_name = true
                    -> rename
            * * Where am I? {no_side_effect}
                {Player} "What is this place?"
                {Lambo} "An alley behind the restaurant where you died."
                {Player} "I...I what?"
                {Narrator} Lambo sighs, stands up, and approaches you.
                    -> rename
            * * What happened? {no_side_effect}
                {Player} "What...what happened to me? How did I get here?"
                {Lambo} "I don't know. I only felt your presence as I passed down the block and came to find you laying there. Judging from your confusion, I'd say that this is your first death."
                {Player} "My... my first what, now?"
                {Narrator} Lambo sighs, stands up, and approaches you.
                    -> rename
            * * You look dumb. {no_side_effect}
                {Player} "What's with the ridiculous getup? ComicCon in town and you're some kind of urban ninja?"
                {Narrator} Lambo sighs, stands up, and approaches you.
                    -> rename
            
=== rename ===
{Narrator} As he gets closer a strange sick sensation starts to buzz in your ears, as if you were getting lightheaded.
{Lambo} "How about your name?"
    * Enter Your Name {pick_name}
        {Lambo} "Good to meet you. { know_lando_name == false:My name's Lambo.}
        -> END
        
        
        
        
        
        
        
        
        
        
        
        