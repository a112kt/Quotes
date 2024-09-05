function Click(){
    var quotes =[
        {
            quote :"So many books, so little time.",
            author :" Frank Zappa"

        },
        {
            quote :"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            author :"  Albert Einstein"

        },
        {
            quote :"A room without books is like a body without a soul",
            author :"Marcus Tullius Cicero"

        },
        {
            quote :"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
            author :" Bernard M. Baruch"

        },
        {
            quote :"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
            author :"Dr. Seuss"

        },
        {
            quote :"You only live once, but if you do it right, once is enough",
            author :"Mae West"

        },
        {
            quote :"Be the change that you wish to see in the world.",
            author :"Mahatma Gandhi"

        },
        {
            quote :"If you tell the truth, you don't have to remember anything",
            author :"― Mark Twain"

        },
    ]
   quotes_length = + quotes.length
   var randomNum = Math.floor(Math.random()*quotes_length)

   document.getElementById("quote").innerHTML= quotes[randomNum].quote
   document.getElementById("quoteAuthor").innerHTML= quotes[randomNum].author
   
}