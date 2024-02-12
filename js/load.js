manga_list = fetch('/manga-list.json').then((response) => response.json());


console.log(manga_list)