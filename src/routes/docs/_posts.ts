import all from './posts/*.md';

export default all
  .map((post) => ({ ...post, html: post.html.replace(/^\t{3}/gm, '') }))
  .sort((a:any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime());
