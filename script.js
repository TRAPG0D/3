$("button").click(function(){
    var gender = $("#gender").val();
    var iq = $("#iq").val();
    iq = parseInt(iq);

    if(gender==="male" && iq<=100){
        $("#result").text("You are Astolfo. Rider's True Name is Astolfo (アストルフォ, Asutorufo?), one of the Twelve Paladins of Charlemagne (シャルルマーニュ十二勇士, Sharurumānyu Jūni Yūshi?). In the Charlemagne Legend, he is the son of an English king, and one of Charlemagne's twelve faithful Paladins. Among the Twelve Paladins of Charlemagne, Astolfo is said to be the most handsome, eternally optimistic, and completely lacking in sense. As the legends go, Astolfo was quite the ladies' man.[1][6] As a cousin of Roland, Astolfo is included among those twelve-- that being said, Astolfo was famed as weak in legends.[4] Astolfo has created many legends as he was an adventurer who flew to all over the world and even reached the Moon in the end. Through his journeys, he had won numerous Mystic Codes such as his flute, his grimoire, and his shining golden lance. Astolfo brought rise to various legends on the back of mounts like a griffin and the famous Rabicano, but particularly famous among them is something inconceivable for this world—the Hippogriff.");
        $("img").attr("src","https://i.imgur.com/D0Wp83j.jpg");
    } else if(gender==="male" && iq>90){
        $("#result").text("You are Himegoto, a great guy with a loving heart for your family and you'll do anithing for your friends");
        $("img").attr("src","https://pm1.narvii.com/5771/b29fed23f3ad464a5589c6718495a96355b1dd51_hq.jpg");
    } else if(gender==="female" && iq>90){
$("#result").text("You are Saika Totsuka, Saika has a soft, feminine appearance, and on occasion is mistaken as a female. Hachiman sometimes  that Totsuka is a boy. He has short, light grey/silver hair, large, sparkling blue eyes, and light skin tone. He is seen wearing his gym uniform throughout most of the series, often accompanied by his tennis racket, a towel around his neck or both");
  $("img").attr("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwS6EFUj51buggWJ1rbzCdwkAOb-8gmz2KSCzUbWW6ShyRWQCm");
    } else if(gender==="female" && iq<=90){
        $("#result").text("You are Gasper Vladi, Gasper is an androgynous-looking male with platinum blond hair and pinkish-violet eyes. His hair is styled in short bob cut with several small fringes over his forehead, and he has pointed ears. Kiba describes him as looking like a beautiful girl. Unlike the rest of the boys of Kuoh Academy who wear the boys' uniform, Gasper wears the Kuoh Academy girls' school uniform with thigh-high socks, creating a Zettai Ryōiki (Japanese for absolute territory).");
        $("img").attr("src","https://vignette.wikia.nocookie.net/p__/images/6/6d/Gasper_Vladi.jpg/revision/latest?cb=20161006171133&path-prefix=protagonist");
    }
    
});