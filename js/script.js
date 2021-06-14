/* eslint-disable no-console */
//
// Project Briefcase - Karen Méndez
//

const apiUrl = 'https://api.github.com/users/Kajoha/repos';
const divContent = document.querySelector('.github__content');

function loadRepos(r) {
  let contentData = '';
  let repos = r;

  repos = repos.sort((a, b) => b.id - a.id);
  for (let i = 0; i < repos.length; i += 1) {
    if (i === 4) break;
    contentData += `
    <div class='list-content round'>
      <div>
        <h3>${repos[i].name}</h3>
        <a target="_blank" href="${repos[i].html_url}">Click to go</a>
      </div>
    </div>
    `;
  }
  divContent.innerHTML = contentData;
}

fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((res) => res.json())
  .catch((error) => console.error('Error:', error))
  .then((r) => {
    loadRepos(r);
  });
