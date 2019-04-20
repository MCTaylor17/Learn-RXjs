const $output = document.getElementById("output");

const output = (val: any) => {
  const node = document.createElement("li");
  node.textContent = val;
  $output.appendChild(node);
}

const outputLabel = label => E => {
  return output(label + " " + E);
}

const error = E => {
  console.log("Error");
}

const complete = E => {
  console.log("Complete");
}

export default output;

export { output, outputLabel, error, complete };