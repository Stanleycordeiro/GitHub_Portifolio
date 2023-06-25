//darkMode change
const html = document.querySelector("html");
const checkbox = document.getElementById("checkBox");
//função para mudar para modo Dark
function themeToggle() {
  return html.classList.toggle("dark-mode");
}

//função para fechar colapse automaticamente
function fecharCollapse() {
  var collapseElement = document.getElementById("navbarToggleExternalContent");
  var bootstrapCollapse = new bootstrap.Collapse(collapseElement);
  bootstrapCollapse.hide();
}

//elementos PROJETOS GITHUB
//gerenciador de telas
const windows = document.getElementById("window");
const repositories = document.getElementById("repos");
const perfil = document.getElementById("perfil");
const redes = document.getElementById("redesSociais");

//função navegação entre telas telas
function winRepos() {
  setTimeout(() => {
    repositories.style.display = "block";
    perfil.style.display = "none";
    redes.style.display = "none";
  }, 300);
  fecharCollapse();
}

function winPerfil() {
  setTimeout(() => {
    repositories.style.display = "none";
    perfil.style.display = "block";
    redes.style.display = "none";
  }, 300);

  fecharCollapse();
}

function winRedes() {
  setTimeout(() => {
    repositories.style.display = "none";
    perfil.style.display = "none";
    redes.style.display = "block";
  }, 300);
  fecharCollapse();
}

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
                <p class="dateCard">${Intl.DateTimeFormat("pt-BR").format(
                  new Date(item.created_at)
                )}</p>
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
