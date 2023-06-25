//darkMode change
const html = document.querySelector("html");
const checkbox = document.getElementById("checkBox");
//função para mudar para modo Dark
function themeToggle() {
  return html.classList.toggle("dark-mode");
}
//elementos PROJETOS GITHUB
const repositories = document.getElementById("repos");

//chamada API GitHUb
function getApiGitHub() {
  fetch("https://api.github.com/users/Stanleycordeiro/repos").then(
    async (res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      let data = await res.json();
      data.map((item) => {
        let project = document.createElement("div");

        project.innerHTML = `<div class="card m-4 mt-4 shadow border-2">
            <div class="ps-3 pe-3 pb-0 card-header d-flex justify-content-between">
              <h3 class="">${item.name}</h3>
              <div class="">
                <p class="dateCard">${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at)) }</p>
              </div>
            </div>
            <div class="card-body d-flex justify-content-between">
              <a target="_blank" href="${item.html_url}"
                >${item.html_url}</a
              >
              <p><b>${item.language}</b></p>
            </div>
          </div>
        </div>`;

        repositories.appendChild(project);
      });
    }
  );
}
getApiGitHub();
