use std::io;
fn main() {
    println!("Guess the number!");

    println!("Please input your guess.");

    let mut guess: String = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");
    guess = guess.trim().to_string();

    if guess == "5" {
        println!("you guessed right, {guess} was the correct answer!");
        return
    }
    println!("You guessed: {guess} - incorrect");
}



fn win() {
    total = total + bet*2;
}

fn win_black_jack(){
    total = total + bet * 3;
}

fn start_hands(){ 
    total = total - bet;
    dealDealerHand();
    dealUserHand();
}