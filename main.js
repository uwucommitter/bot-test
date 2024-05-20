const simpleGit = require('simple-git');
const Uwuifier = require('uwuifier');
const uwuifier = new Uwuifier();

const git = simpleGit();

const commitMessage = process.argv.slice(2).join(' ');
const uwuifiedMessage = uwuifier.uwuifySentence(commitMessage);

async function commitAndPush() {
  try {
    await git.add('.');
    await git.commit(uwuifiedMessage, {
      '--author': '"uwubot <uwucommitter@protonmail.com>"'
    });
    await git.push();
    console.log(`Commit successful: ${uwuifiedMessage}`);
  } catch (error) {
    console.error('Failed to commit:', error);
  }
}

commitAndPush();
