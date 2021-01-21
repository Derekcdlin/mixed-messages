/*
Random Workout
description: creates a random workout for a random body split (Push, Pull, 
Upper, Lower, Full). Includes 4-5 exercises with 3-5 sets x 3-10 reps.

Creator: Derek Lin
Date: 01/21/2021
*/

const generateRandom = (upper, lower=0) =>{
    /*
    description: returns random number between lower and upper-1
    return type: number
    param:
    - upper - upper threshold of random num
    - lower - lower threshold of random num
    */
    return Math.floor(Math.random() * (upper-lower)) + lower;
}

const workouts = {
    /*
    description: object containing all available splits and exercises
    */
    _bodyPart: ['Upper', 'Push', 'Pull', 'Lower', 'Full'],
    _exercises: {
        hPush: ['Bench', 'Incline Bench', 'Decline Bench', 'Dips', 'Pushups', 'Pause Bench', 'Tricep extensions'],
        vPush: ['Shoulder Press', 'Arnold Press', 'Landmine Press', 'Lateral Raises'],
        hPull: ['Deadlifts','Machine Rows', 'Incline Rows', 'Dumbell Rows', 'Deadlift Rows', 'Curls'],
        vPull: ['Pulls Ups', 'Chin Ups', 'Pull Downs', 'Cable Pulls', 'Front Levers'],
        lower: ['Squats', 'Cleans', 'Split Squats', 'Front Squats', 'Romanian Deadlifts', 
                'SL Deadlifts', 'Hip Thrusts', 'Box Jumps', 'Calve Raises', 'Side to Side']
    },
    get bodyPart(){
        return this._bodyPart;
    },
    get exercises(){
        return this._exercises;
    },
    getUpper(num){
        /*
        description: returns random upper exercise
        return: string of exercise name
        param:
        - num - which number exercise
        */
        if(num%2 == 0){
            return this.getPush(num/2);
        }
        else{
            return this.getPull(num/2);
        }
    },
    getPush(num){
        /*
        description: returns random push exercise
        return: string of exercise name
        param:
        - num - which number exercise
        */
        if(num%2 == 0){
            return this.exercises.hPush[generateRandom(this.exercises.hPush.length)];
        }
        else{
            return this.exercises.vPush[generateRandom(this.exercises.vPush.length)];
        }
    },
    getPull(num){
        /*
        description: returns random pull exercise
        return: string of exercise name
        param:
        - num - which number exercise
        */
       if(num%2 == 0){
            return this.exercises.hPull[generateRandom(this.exercises.hPull.length)];
        }
        else{
            return this.exercises.vPull[generateRandom(this.exercises.vPull.length)];
        }
    },
    getLower(){
        /*
        description: returns random lower exercise
        return: string of exercise name
        param: none
        */
        return this.exercises.lower[generateRandom(this.exercises.lower.length)];
    },
    getFull(num){
        /*
        description: returns random full exercise
        return: string of exercise name
        param:
        - num - which number exercise
        */
        if(num%2 == 0){
            return this.getUpper(num/2);
        }
        else{
            return this.getLower();
        }
    }
};

const fullWorkout = [];

const formatList = (list) => {
    /*
    description: formats exercise names for string output
    return type: none
    param:
    - list - list of exercise names
    */
    let longest = 0;
    for(let i = 0; i < list.length; i++){
        if(longest < list[i].length){
            longest = list[i].length;
        }
    }
    
    for(let i = 0; i < list.length; i++){
        for(let j = list[i].length; j < longest; j++){
            list[i] += ' ';
        }
    }
}

const fillWorkout = (list) =>{
    /*
    description: fills in fullWorkout array with all workouts w/ sets and reps
    return type: none
    param:
    - list - list of exercise names
    */
    for(let i = 0; i < list.length; i++){
        const numOfSets = generateRandom(3,6);
        const numOfReps = generateRandom(5,13);
        fullWorkout.push(`${i+1}. ${list[i]}     ${numOfSets}x${numOfReps}`);
    }
}

const generateWorkout = (num) => {
    /*
    description: generates random workout
    return type: none
    param:
    - num - number of exercises;
    */
    if(num > workouts.exercises.lower.length){
        num = workouts.exercises.lower.length;
    }
    const part = workouts.bodyPart[generateRandom(workouts.bodyPart.length)];
    const listOfExercises = [];
    fullWorkout.push(`Workout Split: ${part}`);
    for(let i = 0; i < num; i++){

        let workout;
        switch(part){
            case 'Upper':
                do{
                    workout = workouts.getUpper(i);
                }while(listOfExercises.includes(workout));
                listOfExercises.push(workout);
                break;
            case 'Push':
                do{
                    workout = workouts.getPush(i);
                }while(listOfExercises.includes(workout));
                listOfExercises.push(workout);
                break;
            case 'Pull':
                do{
                    workout = workouts.getPull(i);
                }while(listOfExercises.includes(workout));
                listOfExercises.push(workout);
                break;
            case 'Lower':
                do{
                    workout = workouts.getLower(i);
                }while(listOfExercises.includes(workout));
                listOfExercises.push(workout);
                break;
            case 'Full':
                do{
                    workout = workouts.getFull(i);
                }while(listOfExercises.includes(workout));
                listOfExercises.push(workout);
                break;
        }
    }
    formatList(listOfExercises);
    fillWorkout(listOfExercises);
}

const formatWorkout = (workout) =>{
    /*
    description: formats final workout printout
    return type: none
    param:
    - workout - string containing workout
    */
    const formatted = workout.join('\n')
    console.log(formatted);
}

generateWorkout(generateRandom(4,7));
formatWorkout(fullWorkout);

//test
/*
for(let i = 0; i < 5; i++){
    console.log(`Workout #${i+1}`);
    generateWorkout(generateRandom(4,6));
    formatWorkout(fullWorkout);
    console.log("");
    fullWorkout.length = 0;
}
*/
