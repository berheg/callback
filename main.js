const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];
function getPosts(){
    setTimeout(() =>{
        let outPut = '';
        posts.forEach((post, index) => {
            outPut += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = outPut;
    },1000);
}
function creatPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    },2000);
}
//getPosts();
creatPost({ title: 'Post Three', body: 'This is post three'},getPosts);