window.addEventListener("load", SidenVises);

function SidenVises() {
  //Skjul andre billder
  document.querySelector("#mig_2").classList.add("hide");
  document.querySelector("#mig_3").classList.add("hide");
  document.querySelector("#mig_4").classList.add("hide");

  //Klik på billede
  document.querySelector("#mig_1").addEventListener("click", click_1);
}

function click_1() {
  //vis billede_2
  document.querySelector("#mig_2").classList.remove("hide");

  //skjul andre billeder
  document.querySelector("#mig_1").classList.add("hide");
  document.querySelector("#mig_3").classList.add("hide");
  document.querySelector("#mig_4").classList.add("hide");

  //Klik på billede
  document.querySelector("#mig_2").addEventListener("click", click_2);
}

function click_2() {
  //vis billede_2
  document.querySelector("#mig_3").classList.remove("hide");

  //skjul andre billeder
  document.querySelector("#mig_1").classList.add("hide");
  document.querySelector("#mig_2").classList.add("hide");
  document.querySelector("#mig_4").classList.add("hide");

  //Klik på billede
  document.querySelector("#mig_3").addEventListener("click", click_3);
}

function click_3() {
  //vis billede_2
  document.querySelector("#mig_4").classList.remove("hide");

  //skjul andre billeder
  document.querySelector("#mig_1").classList.add("hide");
  document.querySelector("#mig_2").classList.add("hide");
  document.querySelector("#mig_3").classList.add("hide");

  //Klik på billede
  document.querySelector("#mig_4").addEventListener("click", click_1);
}
