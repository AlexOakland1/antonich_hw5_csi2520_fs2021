let demoButton = document.querySelector('#commentButton');
let articleContainer = document.querySelector('#commentArticle');
let submitBox = document.createElement('textarea');
let submitForm = document.createElement('form');
let submitButton = document.createElement('button');
let replySpace = document.querySelector('#container');

submitBox.className = 'comment_bar';
submitBox.style.width = '50%';
submitBox.rows = '9';
submitBox.placeholder = 'Type your comment...';

submitButton.className = "button, submitCommentButton";
let replyButtonText = document.createTextNode('Submit');
submitButton.appendChild(replyButtonText);

let commentListSpace = document.querySelector('#commentList');
let commentContainer = document.querySelector('#containerList');
commentListSpace.appendChild(commentContainer);

demoButton.addEventListener('click', function () {
    articleContainer.insertBefore(submitForm, replySpace);
    articleContainer.insertBefore(submitBox, replySpace);
    articleContainer.insertBefore(submitButton, replySpace);
    console.log('1');
})

submitButton.addEventListener('click', function () {
    let inputText = document.querySelector('textarea');
    addComment(inputText.value);
})

function addComment(commentText) {
    this.commentText = commentText;
    let commentBox = document.createElement('p');
    let replyButton = document.createElement('button');
    let replyButtonText = document.createTextNode('Reply');
    replyButton.appendChild(replyButtonText);
    let commentBoxText = document.createTextNode(commentText);
    commentBox.appendChild(commentBoxText);
    commentBox.className = 'comment';
    let replyContainer = document.createElement('div');
    replyContainer.className = 'invis';
    commentListSpace.insertBefore(commentBox, commentContainer);
    commentListSpace.insertBefore(replyButton, commentContainer);
    commentListSpace.insertBefore(replyContainer, commentContainer);

    replyButton.addEventListener('click', function () {
        generateReply();

        function generateReply(){
            let lastBox = document.createElement('textarea');
            let lastButton = document.createElement('button');
            let lastDiv = document.createElement('div');
            let repliesLabel = document.createElement('p');

            let secondReplyButtonText = document.createTextNode('Submit');
            lastButton.appendChild(secondReplyButtonText);
            let repliesLabelText = document.createTextNode('Reply Thread:');
            repliesLabel.appendChild(repliesLabelText);

            lastBox.id = 'aaa';
            lastBox.className = 'comment_bar';
            lastBox.style.width = '50%';
            lastBox.rows = '5';
            lastBox.placeholder = 'Type your comment...';
            lastDiv.className = 'invis';

            commentListSpace.insertBefore(repliesLabel, replyContainer);
            commentListSpace.insertBefore(lastBox, replyContainer);
            commentListSpace.insertBefore(lastDiv, replyContainer);
            commentListSpace.insertBefore(lastButton, replyContainer);
            lastDiv.appendChild(lastBox);

            lastButton.addEventListener('click',function () {
                let replyText = lastDiv.querySelector("textarea");
                addReply(replyText.value);

                function addReply(replyBoxLoader) {
                    this.replyBoxLoader = replyBoxLoader;
                    console.log(replyBoxLoader);
                    let replyBox = document.createElement('p');
                    replyBox.style.borderStyle = 'dashed';
                    
                    let replyBoxText = document.createTextNode(replyBoxLoader);
                    replyBox.appendChild(replyBoxText);
                    commentListSpace.insertBefore(replyBox, lastDiv);
                }
            })
        }
        
    })
}