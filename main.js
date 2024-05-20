const simpleGit = require('simple-git');
const git = simpleGit();

const commitMessage = process.argv.slice(2).join(' ');

function uwuify(text) {
  return text
    .replace(/r/g, 'w')
    .replace(/l/g, 'w')
    .replace(/n([aeiou])/g, 'ny$1')
    .replace(/N([aeiou])/g, 'Ny$1')
    .replace(/ove/g, 'uv');
}
//a
const uwuifiedMessage = uwuify(commitMessage);

async function commitAndPush() {
  try {
    await git.add('.');
    await git.commit(uwuifiedMessage, {
      '--author': '"uwucommiter" <uwucommiter@uwu.com>',
    });
    await git.push();
    console.log(`Commit successful: ${uwuifiedMessage}`);
  } catch (error) {
    console.error('Failed to commit:', error);
  }
}

commitAndPush();
