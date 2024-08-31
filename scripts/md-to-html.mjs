import fs from "fs";
import path from "path";
import process from "process";
import { parseArgs } from "node:util";
import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";

const md = markdownIt().use(markdownItFootnote);

const { values } = parseArgs({
  options: {
    input: {
      type: "string",
      short: "i",
    },
    output: {
      type: "string",
      short: "o",
    },
  },
});
const { input, output } = values;
const inputPath = path.isAbsolute(input) ? input : path.resolve(process.cwd(), input);
const outputPath = path.isAbsolute(output) ? output : path.resolve(process.cwd(), output);

fs.writeFileSync(outputPath, md.render(fs.readFileSync(inputPath).toString()));
