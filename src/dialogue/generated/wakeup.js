export 
var storyContent = ﻿{"inkVersion":19,"root":[["ev","str","^000","/str","out","/ev","^ You open your eyes and see the stars.","\n","ev","str","^000","/str","out","/ev","^ They're barely visible, faint, and without twinkle. They're hidden behind the dull yellow haze of the city street lamps.","\n","ev","str","^000","/str","out","/ev","^ It's now that you realize you are lying down, and you are outside, and you don't know how you got here.","\n",{"->":"wake_up"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"wake_up":[[["ev",{"^->":"wake_up.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Look around ","ev","str","^000","/str","out","/ev",{"->":"$r","var":true},null]}],["ev",{"^->":"wake_up.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Assess yourself ","ev","str","^000","/str","out","/ev",{"->":"$r","var":true},null]}],["ev",{"^->":"wake_up.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Get up ","ev","str","^000","/str","out","/ev",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"wake_up.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","ev","str","^000","/str","out","/ev","^ ",["ev","visit",3,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^You can see the mouth of the alleyway, where cars are swishing past. No-one's paying you a second thought.",{"->":".^.^.29"},null],"s1":["pop","^When did it get dark? The dingy alley wall sconces are flickering and wash the wet asphalt with a hazy yellow glow.",{"->":".^.^.29"},null],"s2":["pop","^Are you laying in a stack of garbage bags?",{"->":".^.^.29"},null],"s3":["pop","^It smells like garbage, piss, and motor oil.",{"->":".^.^.29"},null],"#f":5}],"\n",{"->":".^.^.^"},{"#f":5}],"c-1":["ev",{"^->":"wake_up.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","ev","str","^000","/str","out","/ev","^ ",["ev","visit",3,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^Your mouth feels like you smoked a pack of cigarettes in ten minutes. You need water. Or maybe a whiskey?",{"->":".^.^.29"},null],"s1":["pop","^It's cold. You pull your clothes tighter around you.",{"->":".^.^.29"},null],"s2":["pop","^Your heard is pounding.",{"->":".^.^.29"},null],"s3":["pop","^Well, at least you're not dead.",{"->":".^.^.29"},null],"#f":5}],"\n",{"->":".^.^.^"},{"#f":5}],"c-2":["ev",{"^->":"wake_up.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev","str","^000","/str","out","/ev","^ You rise shakily to your feet, and a deep voice speaks from far behind you.","\n","ev","str","^002","/str","out","/ev","^ \"Welcome back to the land of the living.\"","\n","ev","str","^000","/str","out","/ev","^ You spin around and find thin man in a long coat sitting easily on a crate near the back of the alley. He doesn't look up at you.","\n","ev","str","^000","/str","out","/ev","^ He's sharpening a sword.","\n","ev","str","^002","/str","out","/ev","^ \"It's going to be a rough few days for you.\"","\n",[["ev",{"^->":"wake_up.0.c-2.47.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Who are you? ","ev","str","^000","/str","out","/ev",{"->":"$r","var":true},null]}],["ev",{"^->":"wake_up.0.c-2.47.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Where am I? ","ev","str","^000","/str","out","/ev",{"->":"$r","var":true},null]}],["ev",{"^->":"wake_up.0.c-2.47.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^What happened? ","ev","str","^000","/str","out","/ev",{"->":"$r","var":true},null]}],["ev",{"^->":"wake_up.0.c-2.47.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^You look dumb. ","ev","str","^000","/str","out","/ev",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"wake_up.0.c-2.47.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","ev","str","^001","/str","out","/ev","^ \"Who are you?\"","\n","ev","str","^000","/str","out","/ev","^ Lambo stands up and approaches you.","\n","ev","str","^002","/str","out","/ev","^ \"You can call me Lambo.\"","\n","ev",1,"/ev",{"VAR=":"know_lando_name","re":true},{"->":"rename"},{"#f":5}],"c-1":["ev",{"^->":"wake_up.0.c-2.47.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","ev","str","^001","/str","out","/ev","^ \"What is this place?\"","\n","ev","str","^002","/str","out","/ev","^ \"An alley behind the restaurant where you died.\"","\n","ev","str","^001","/str","out","/ev","^ \"I...I what?\"","\n","ev","str","^000","/str","out","/ev","^ Lambo sighs, stands up, and approaches you.","\n",{"->":"rename"},{"#f":5}],"c-2":["ev",{"^->":"wake_up.0.c-2.47.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev","str","^001","/str","out","/ev","^ \"What...what happened to me? How did I get here?\"","\n","ev","str","^002","/str","out","/ev","^ \"I don't know. I only felt your presence as I passed down the block and came to find you laying there. Judging from your confusion, I'd say that this is your first death.\"","\n","ev","str","^001","/str","out","/ev","^ \"My... my first what, now?\"","\n","ev","str","^000","/str","out","/ev","^ Lambo sighs, stands up, and approaches you.","\n",{"->":"rename"},{"#f":5}],"c-3":["ev",{"^->":"wake_up.0.c-2.47.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","ev","str","^001","/str","out","/ev","^ \"What's with the ridiculous getup? ComicCon in town and you're some kind of urban ninja?\"","\n","ev","str","^000","/str","out","/ev","^ Lambo sighs, stands up, and approaches you.","\n",{"->":"rename"},{"#f":5}]}],{"#f":5}]}],{"#f":1}],"rename":[["ev","str","^000","/str","out","/ev","^ As he gets closer a strange sick sensation starts to buzz in your ears, as if you were getting lightheaded.","\n","ev","str","^002","/str","out","/ev","^ \"How about your name?\"","\n",["ev",{"^->":"rename.0.16.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Enter Your Name ","ev","str","^001","/str","out","/ev",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"rename.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.16.s"},[{"#n":"$r2"}],"\n","ev","str","^002","/str","out","/ev","^ \"Good to meet you. ","ev",{"VAR?":"know_lando_name"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["^My name's Lambo.",{"->":".^.^.^.20"},null]}],"nop","\n","end",{"#f":5}]}],{"#f":1}],"global decl":["ev",0,{"VAR=":"know_lando_name"},"/ev","end",null],"#f":1}],"listDefs":{}};