/*
//Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
.then(post => post.json())
.then(postArray => {
    let divPost = document.createElement('div');
    divPost.classList.add('style');

    for (let i = 0; i < postArray.length; i++){
        let divChar = document.createElement('div');
        divChar.classList.add('post');

        divChar.innerHTML = `<div>${postArray[i].id}</div> <h3>${postArray[i].title}</h3> <p>${postArray[i].body}</p>`

        divPost.appendChild(divChar);
    }

    document.body.appendChild(divPost);
})*/

//-----------------------------------------------------------------------

/*
//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(comment => comment.json())
    .then(commentArray => {
        let divComment = document.createElement('div');

        for (let i = 0; i < commentArray.length; i++){
            let divChar = document.createElement('div');
            divChar.classList.add('comment');

            divChar.innerHTML = `<div>${commentArray[i].id}</div> <h3>${commentArray[i].name}</h3> <div>${commentArray[i].email} </div> <p>${commentArray[i].body}</p>`

            divComment.appendChild(divChar);
        }

        document.body.appendChild(divComment);
    })*/