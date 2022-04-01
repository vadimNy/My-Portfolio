window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if (this.scrollY > 200) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
}