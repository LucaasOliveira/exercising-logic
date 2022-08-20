const voters = 1000;
const whiteVotes = 400;
const nullVotes = 100;
const validVotes = 600;

let percentage = 0;
let validation = (whiteVotes + nullVotes + validVotes) == voters;

if (!validation) {
    console.log("Os valores são incompativéis!")
} else {
    percentage = (whiteVotes * 100) / voters;
    console.log(`O percentual de votos brancos é: ${percentage}%`);

    percentage = (nullVotes * 100) / voters;
    console.log(`O percentual de votos nulos é: ${percentage}%`);

    percentage = (validVotes * 100) / voters;
    console.log(`O percentual de votos válidos é: ${percentage}%`);
}
