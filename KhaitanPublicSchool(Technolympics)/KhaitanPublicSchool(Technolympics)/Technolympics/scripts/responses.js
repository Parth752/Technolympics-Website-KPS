function getBotResponse(input) {

    //rock paper scissors

    if (input == "rock") {

        return "paper, I win!";

    } else if (input == "paper") {

        return "scissors, I win!";

    } else if (input == "scissors") {

        return "rock, I win!";

    } else if (input == "What is OMEN all about?") {

        return "Cyberspace is global domain within the information environment consisting of the interdependent network of information systems infrastructures including the Internet, telecommunications networks, computer systems, and embedded processors and controllers."

    } else if (input == "What products does OMEN sell?") {

        return "OMEN has a wide variety of gaming products. It sell a wide variety of CPU, Mouse, Keyboards, Headphones etc."

    } else if (input == "Help") {
        return "Hi, welcome to OMEN! Here you can play rock,paper & scissor. Also you can ask me What is OMEN all about? or What products does OMEN sell?"
    }

}