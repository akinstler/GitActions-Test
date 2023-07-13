const core = require("@actions/core");
const github = require("@actions/github");

try {
  //   throw new Error("Some error message");

  core.debug("debug message");
  core.warining("warning message");
  core.error("Error message");

  const name = core.getInput("who-to-greet");
  console.log("Hello " + name);

  core.setSecret(name);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.startGroup("logging object");
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();

  core.exportVariable("hello", "Hello");
} catch (error) {
  core.setFailed(error.message);
  //
}
