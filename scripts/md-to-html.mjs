import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parseArgs } from "node:util";
import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";

const md = markdownIt().use(markdownItFootnote);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
const inputPath = path.isAbsolute(input) ? input : path.resolve(__dirname, input);
const outputPath = path.isAbsolute(output) ? output : path.resolve(__dirname, output);

fs.writeFileSync(outputPath, md.render(fs.readFileSync(inputPath).toString()));
