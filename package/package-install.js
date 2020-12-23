const slugify = require('slugify')

const text = ' fenerbahçe üçüncü maçına çıkıyor';
const slug = slugify(text,'_');

console.log(slug);