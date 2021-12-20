const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
if (process.argv.length < 3) {
  console.log("You have to provide a name to your app.");
  console.log("For example :");
  console.log("npx create-dmq-app my-app");
  process.exit(1);
}
const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = "https://github.com/dmquinn/mern-boilerplate.git";
try {
  fs.mkdirSync(projectPath);
} catch (err) {
  if (err.code === "EEXIST") {
    console.log(
      `The file ${projectName} already exist in the current directory, please give it another name.`
    );
  } else {
    console.log(err);
  }
  process.exit(1);
}
async function main() {
  try {
    console.log("Downloading files...");
    execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);

    process.chdir(projectPath);

    console.log("Installing dependencies...");
    execSync("npm install");

    console.log("Removing useless files");
    execSync("npx rimraf ./.git");
    fs.rmdirSync(path.join(projectPath, "bin"), { recursive: true });

    console.log("The installation is done, Lets get coding!!");
  } catch (error) {
    console.log(error);
  }
}
main();
