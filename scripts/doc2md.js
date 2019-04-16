const fs = require('fs');
const jsdoc2md = require('jsdoc-to-markdown');
const path = require('path');

const js2mdConfig = path.resolve(process.cwd(), 'jsdoc2md.json');

var filePath = 'src';

fs.readdirSync(filePath).forEach(function(filename) {
  if (filename.endsWith('.ts') || (filename.endsWith('.js') && filename !== 'index.ts')) {
    jsdoc2md
      .getTemplateData({ files: path.resolve(filePath, filename), configure: js2mdConfig })
      .then(comments => {
        renderDoc(comments);
      })
      .catch(error => {
        console.error('renderDoc-Error', error);
      });
  }
});

function renderDoc(comments) {
  const file = path.resolve(process.cwd(), '', 'api.md');
  const mdData = jsdoc2md.renderSync({
    data: comments,
    configure: js2mdConfig,
  });
  fs.writeFileSync(file, mdData, function(error) {
    console.error('writeFileSync-Error', error);
  });
  console.log(`${file} 生成完毕`);
}
