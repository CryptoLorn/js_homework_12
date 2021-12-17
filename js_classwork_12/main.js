//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(post => post.json())
    .then(postArr => {
        let divPost = document.createElement('div');
        divPost.classList.add('post_style');

        for (let i = 0; i < postArr.length; i++) {
            let divChar = document.createElement('div');
            divChar.classList.add('char_style');
            divChar.innerHTML = `<div>${postArr[i].id}</div> <h3>${postArr[i].title}</h3> <p>${postArr[i].body}</p>`;

            let button = document.createElement('button');
            button.innerText = 'Show';
            button.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${postArr[i].id}/comments`)
                    .then(post => post.json())
                    .then(postArr => {
                        let divComment = document.createElement('div');

                        for (let j = 0; j < postArr.length; j++){
                            let addComment = document.createElement('div');
                            addComment.innerText = postArr[j].body;
                            divComment.appendChild(addComment);
                        }
                        divChar.appendChild(divComment);
                    })
            }
            divChar.appendChild(button);
            divPost.appendChild(divChar);
        }

        document.body.appendChild(divPost);
    })