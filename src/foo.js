const foo = function() {
  console.log('Ran foo()!');
  const date = new Date().toDateString();
  document.getElementById('app-body').innerHTML = `<h1>Hello, world!</h1><p>This is bundled Javascript! Today is: ${date}</p>`;
  if(process.env.NODE_ENV !== "production") {
    console.log('Debug mode!');
  }
}

export default foo;
