const fs = require('fs');
const content = fs.readFileSync('c:/Users/Francisco Tembe/.gemini/antigravity/scratch/flag-collision-nextjs/app/components/Game.tsx', 'utf8');

let stack = [];
let lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    for (let j = 0; j < line.length; j++) {
        let char = line[j];
        if (char === '{') stack.push({ char, line: i + 1, col: j + 1 });
        if (char === '}') {
            if (stack.length === 0) {
                console.log(`Unmatched } at line ${i + 1}, col ${j + 1}`);
            } else {
                stack.pop();
            }
        }
        if (char === '(') stack.push({ char, line: i + 1, col: j + 1 });
        if (char === ')') {
            if (stack.length === 0) {
                console.log(`Unmatched ) at line ${i + 1}, col ${j + 1}`);
            } else {
                let last = stack.pop();
                if (last.char !== '(') {
                    console.log(`Mismatched ) for ${last.char} at line ${i + 1}, col ${j + 1}`);
                }
            }
        }
    }
}

if (stack.length > 0) {
    stack.forEach(s => console.log(`Unclosed ${s.char} at line ${s.line}, col ${s.col}`));
} else {
    console.log('Braces balanced!');
}
