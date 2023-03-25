// RelationShip Calculator :-- 

let person1 = prompt("Enter your name");
let person2 = prompt("Enter your partner's name");

const loveMeter = (person1,person2) => {
    let loveValue = loveCalculator();
    console.log(loveValue);
    if(loveValue >= 70) {
      return  alert(`Your loveScore is ${loveValue}, Both ${person1} and ${person2} love each other like Romeo and Juliet`);
    }else if (loveValue<70 && loveValue>=40){
      return  alert(`Your loveScore is ${loveValue}, Both ${person1} and ${person2} have internal affection for each other`);
    }else if(loveValue<40){
       return alert(`Your loveScore is ${loveValue}, Both ${person1} and ${person2} have no feeling for each other`);
    }

}

const loveCalculator = () => {
    const value = Math.random() * 100;
    const loveScore = Math.floor(value) + 1;
    console.log(loveScore);
    return loveScore;
}

loveMeter(person1,person2);