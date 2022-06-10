const sidebar = document.getElementById("sidebar");
const buttonToggleSidebar = document.getElementById("btn-toggle-sidebar");
const buttonReloads = document.querySelectorAll("#reload")

let isShowingSidebar = false;

document.addEventListener("DOMContentLoaded", () => {
  const savedSidebar = localStorage.getItem("sidebar") 

  const newShow = setShowSidebar(savedSidebar ? savedSidebar : false)
  isShowingSidebar = newShow
});

buttonToggleSidebar.addEventListener("click", () => {
  const newShow = setShowSidebar()

  isShowingSidebar = newShow
});

const setShowSidebar = (state= isShowingSidebar) => {
  console.log(state)
  if (state) {
    sidebar.classList.add("show");
    localStorage.setItem("sidebar", !state);
    buttonToggleSidebar.innerText = "tampilkan sidebar"
  } else {
    sidebar.classList.remove("show");
    buttonToggleSidebar.innerText = "sembunyikan sidebar"
    localStorage.removeItem("sidebar")
  }

  return !state
};

for (const br of buttonReloads) {
  br.addEventListener("click", () => {
    location.reload()
  })
}
