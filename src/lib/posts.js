async function load() {
  const fetchedPosts = import.meta.globEager('../content/*.md');
  const mappedPosts = Object.keys(fetchedPosts).map((key) => {
    const post = fetchedPosts[key];
    const url = key.replace('../pages/posts/', '/').replace('.md', '/');
    const item = { ...post.frontmatter, url };
    return item;
  });

  return mappedPosts;
}

let _posts;

export async function getAllPosts() {
  _posts = _posts || load();

  return await _posts;
}