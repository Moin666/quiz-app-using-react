import React from 'react'

import { useState } from 'react';

import '../App.css';

const QuizApp = () => {

const [index, setIndex] =useState(0)
const [score, setScore] =useState(0)
const [scoreDisplay, setScoreDisplay] =useState(false)
const [quizQuestions,setQuizQuestions] = useState([
        {
            question:"HTML Stands For ____________",
            options:["Hyper Text Mark Up","Hyper Text Mask Up", "hypernet MarkUp", "Hyperjava Text Markup"],
            correctOption:["Hyper Text Mark Up"]
        },
         {
            question:"CSS Stands For ____________",
            options:["Cascading Style Sheets","Creative Style Sheets1","Computer Style Sheets","Computer Style Sheets2"],
            correctOption:["Cascading Style Sheets"]
        },
        {
            question:"JS Stands For ____________",
            options:["javascript","java","junior script","temporary"],
            correctOption:["javascript"]
        },
        {
            question:".net is a  ____________",
            options:["framework","API", "Search Engine", "Library"],
            correctOption:["framework"]
        },
        {
            question:"How do you insert a comment in a CSS file?",
            options:["//","*", "##", "<.!"],
            correctOption:["//"]
        }
    ])

const options = (item,index) => {
        return quizQuestions[index].options.map(item => <div key={item} className='mt-5'><button className='custombtn' style={{width:"250px"}} onClick ={() => {indexIncrement(item)}} >{item}</button></div>)
}

const indexIncrement = (item) => {
    let indexIncrementSpread = index;
    indexIncrementSpread++;
    if(item == quizQuestions[index].correctOption){
        setScore(score + 1)
    }
    if(indexIncrementSpread < quizQuestions.length )
    { 
        setIndex(indexIncrementSpread)
    }
    else{
        setScoreDisplay(true)
    }
}
 console.log(index)
 console.log("length of array",quizQuestions.length)

 const length = quizQuestions.length;
  return (
    <section > 
        <div className="container  ">
            <div className={(!scoreDisplay) ? "my-2 w-50  m-auto  bdyColor text-white rounded  bdposition " : "disaplyNone "}  style = {{height:"45vh"}}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className='d-flex flex-column align-items-center justify-content-center w-100' style={{height:"40vh"}}>
                            <h3>Question {index+1}/{length}</h3>
                            <p>{quizQuestions[index].question}</p> 
                            </div>
                        </div>
                        <div className="col-md-6">
                            {options(quizQuestions,index)}    
                        </div>
                    </div>

            <div className='my-5 bg-white text-center rounded' style={{height:"50px"}} >
                        <progress id="file" value={index+1} className='w-75 my-3' max={length}> 32% </progress>
                    </div>
                  
            </div>
        {scoreDisplay && <div className='marginTop' ><h1 className='text-white'>Your Score is {score} </h1></div>} 
        </div>
    </section> 
  )
}

export default QuizApp;
