import all from './posts/*.md';
import svx from './posts/*.svx';

/*
const a = all.concat(svx.map(s => {
  let ret = s.render();

  const fileName = path.basename(id);
  const { title, date } = data;
  const slug = fileName.split('.')[0];

  ret.slug = slug;
  ret.title = 

  return ret;

}));
*/

const a = all.concat(svx.map(s => s.render()));

export default a
  .map((post) => ({ ...post, html: post.html.replace(/^\t{3}/gm, '') }))
  .sort((a:any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime());
