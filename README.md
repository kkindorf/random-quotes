# random-quotes
Random Chuck Norris Joke Generator

![Random Quote Generator](random.png)

Yeah ok so I'm a fan of Chuck Norris jokes. So sue me! I couldn't resiste using the [icndb's](http://www.icndb.com/api/) api for this freecodecamp project.

I initially had this idea about generating random colors for the hex codes every time a new joke is pulled in from the API request. But once I got that working, I realized how much I hated the colors that were being generated so I found a pretty awesome idea about just randomly choosing from an array of hex codes and now the colors look much better and the text is so much easier to read. To make this more accessible though, I probably wouldn't even change the colors every time a new joke is queried. I'd probably just use a dark blue or purple for the background color. 


    var randomColors = ['#555', '#4286f4', '#248257', '#3d2482', '#825924'];
    var randoms = function(){
      return randomColors[Math.floor(Math.random()*randomColors.length)]
    }
    
    
    
    
