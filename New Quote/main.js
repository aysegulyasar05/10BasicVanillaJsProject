function generate(){
    let quotes ={
        "― Albert Einstein": '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it`s beauty"',
        "― Mary Astell": '"If all men are born free, how is it that all women are born slaves?"',
        "― Monique Duval":'"She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky.”"',
        "― Charlotte Brontë, Jane Eyre":'"“I am no bird; and no net ensnares me: I am a free human being with an independent will.”"'    


};

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    
    document.getElementById("quote").innerHTML = quote;


    document.getElementById("author").innerHTML = author;
  
}