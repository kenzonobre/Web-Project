function handle_body_size() {
    let x = document.getElementById("corpo");

    $ = document.querySelector.bind(document); 
    let altura = $("#footer").clientHeight;

    console.log(altura+"oi")
    console.log(window.innerHeight+"oi")
    x.style.height = ((window.innerHeight-altura))+'px';
}

function handleResize() {
    handle_body_size();
    window.addEventListener('resize', handle_body_size)
  }
  

  