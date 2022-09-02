var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' },
];

var comment = { postId: 1, content: 'Great Post' };

function postForComment(post, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId;
  });
}

postForComment(post, comment);

const postId = getIdFromURL();

posts.find((post) => post.id === postId);
