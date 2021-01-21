/*
Random Workout
description: creates a random workout for a random body split (Push, Pull, 
Upper, Lower, Full). Includes 4-5 exercises with 3-5 sets x 3-10 reps.

Creator: Derek Lin
Date: 01/21/2021
*/

const generateRandom = (upper, lower=0) =>{
    /*
    description: returns random number between 0 and num-1
    return type: number
    param:
    - upper - upper threshold of random num
    - lower - lower threshold of random num
    */
    return Math.floor(Math.random() * upper) + lower;
}