// 'use client';
// import React, { useEffect, useState } from 'react';

// export default function StopWatch() {
//     const [time, setTime] = useState(0);
//     const [isRunning, setIsRunning] = useState(false);
//     const [isTimerMode, setIsTimerMode] = useState(false);
//     const [isTimerSet, setIsTimerSet] = useState(false);
//     const [inputHours, setInputHours] = useState(0);
//     const [inputMinutes, setInputMinutes] = useState(0);
//     const [inputSeconds, setInputSeconds] = useState(0);
//     const [isFullScreen, setIsFullScreen] = useState(false);

//     useEffect(() => {
//         let timer=null;
//         if (isRunning) {
//             timer = setInterval(() => {
//                 setTime((prev) => {
//                     if (isTimerMode && prev <= 0) {
//                         setIsRunning(false);
//                         return 0;
//                     }
//                     return isTimerMode ? prev - 1000 : prev + 1000;
//                 });
//             }, 1000);
//         }
//         return () => timer && clearInterval(timer);
//     }, [isRunning, isTimerMode]);

//     const formatTime = (time:number) => {
//         const seconds = Math.floor(time / 1000) % 60;
//         const minutes = Math.floor(time / 60000) % 60;
//         const hours = Math.floor(time / 3600000);
//         return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
//     };

//     const handleSetTimer = () => {
//         const totalMilliseconds = (inputHours * 3600 + inputMinutes * 60 + inputSeconds) * 1000;
//         if (totalMilliseconds > 0) {
//             setTime(totalMilliseconds);
//             setIsRunning(false);
//             setIsTimerSet(true);
//         }
//     };

//     return (
//         <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900 text-white" onClick={() => setIsFullScreen(false)}>
//             <h1 className={`font-bold tracking-wider text-center transition-all duration-500 ${isFullScreen ? 'absolute inset-0 flex items-center justify-center text-[clamp(4rem,10vw,10rem)]' : 'text-[clamp(5rem,13vw,12rem)] mb-8'}`}>
//                 {formatTime(time)}
//             </h1>
//             {!isFullScreen && (
//                 <>
//                     {!isTimerSet && (
//                         <button onClick={(e) => { e.stopPropagation(); setIsTimerMode((prev) => !prev); setTime(0); setIsRunning(false); }}
//                             className="w-auto h-auto px-6 py-3 rounded-2xl mb-4 text-lg md:text-xl bg-blue-500 text-white font-semibold shadow-md transition-transform hover:scale-105">
//                             Switch to {isTimerMode ? 'Stopwatch' : 'Timer'}
//                         </button>
//                     )}
//                     {isTimerMode && !isTimerSet && (
//                         <div className="mb-4 flex gap-2 items-center">
//                             {['hours', 'minutes', 'seconds'].map((unit) => (
//                                 <input key={unit} type="number" value={unit === 'hours' ? inputHours : unit === 'minutes' ? inputMinutes : inputSeconds}
//                                     onChange={(e) => {
//                                         const value = Math.max(0, Number(e.target.value));
//                                         if (unit === 'hours') setInputHours(value);
//                                         if (unit === 'minutes') setInputMinutes(value);
//                                         if (unit === 'seconds') setInputSeconds(value);
//                                     }} className="w-16 px-3 py-2 text-lg text-center bg-white text-black rounded-md" placeholder={unit.charAt(0).toUpperCase() + unit.slice(1)} />
//                             ))}
//                             <button onClick={handleSetTimer} className="px-6 py-3 text-lg bg-gray-700 text-white rounded-2xl shadow-md hover:scale-105">Set Timer</button>
//                         </div>
//                     )}
//                     <div className="flex gap-4">
//                         <button onClick={(e) => { e.stopPropagation(); setIsRunning(!isRunning); setIsFullScreen(isRunning ? false : true); }}
//                             className={`px-6 py-3 text-lg font-semibold shadow-md transition-transform rounded-2xl ${isRunning ? 'bg-yellow-500 text-black' : 'bg-green-600 text-white'} hover:scale-110`}>
//                             {isRunning ? 'Pause' : 'Start'}
//                         </button>
//                         <button onClick={(e) => { e.stopPropagation(); setTime(0); setInputHours(0),setInputMinutes(0),setInputSeconds(0), setIsRunning(false); setIsTimerSet(false); }}
//                             className="px-6 py-3 text-lg bg-red-600 text-white font-semibold rounded-2xl shadow-md hover:scale-110">
//                             Reset
//                         </button>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }

// add style that
// this clock will contain full width and height and over full would be hidden and scroller should not be there


// <GrSchedulePlay />
//  
// export function parseText(text) {
//     const lines = text.split("\n\n"); // Split by double new lines for sections
//     return lines.map((line, index) => {
//       if (line.startsWith("## ")) {
//         return { type: "heading", content: line.replace("## ", ""), id: index };
//       } else if (line.startsWith("* ")) {
//         const items = line.split("\n").map((item) => item.replace("* ", ""));
//         return { type: "list", content: items, id: index };
//       } else {
//         return { type: "paragraph", content: line, id: index };
//       }
//     });
//   }
  
//   console.log(parseText(text));
const data = `{
    "format": "json",
    "data": {
        "date": "Sun Feb 16 2025",
        "title": "JEE Advanced Study Plan - February 16th, 2025",
        "description": "A well-balanced study schedule focusing on Maths, Physics, and Chemistry, designed for effective JEE Advanced preparation.",
        "study_hours": 8,
        "schedule": [
            {
                "time": "6:00 AM - 7:00 AM",
                "subject": "Maths",
                "topic": "Calculus - Integration",
                "activity": "Problem Solving & Concept Revision",
                "notes": "Focus on tricky integration techniques and applications."
            },
            {
                "time": "7:00 AM - 7:15 AM",
                "subject": "Break",
                "activity": "Light exercise, hydration"
            },
            {
                "time": "7:15 AM - 8:45 AM",
                "subject": "Physics",
                "topic": "Electromagnetism - AC Circuits",
                "activity": "Theory & Problem Solving",
                "notes": "Pay attention to phasor diagrams and resonance"
            },
            {
                "time": "8:45 AM - 9:00 AM",
                "subject": "Break",
                "activity": "Refreshments"
            },
            {
                "time": "9:00 AM - 10:30 AM",
                "subject": "Maths",
                "topic": "Coordinate Geometry - Straight Lines",
                "activity": "Practice Problems",
                "notes": "Focus on different forms of equation of a line and their applications."
            },
            {
                "time": "10:30 AM - 11:00 AM",
                "subject": "Break",
                "activity": "Quick walk, light snack"
            },
            {
                "time": "11:00 AM - 12:30 PM",
                "subject": "Chemistry",
                "topic": "Organic Chemistry - Aldehydes, Ketones and Carboxylic Acids",
                "activity": "Concept Review and Practice",
                "notes": "Focus on naming reactions and mechanisms."
            },
            {
                "time": "12:30 PM - 1:30 PM",
                "subject": "Lunch Break",
                "activity": "Lunch & Relaxation"
            },
            {
                "time": "1:30 PM - 2:30 PM",
                "subject": "Physics",
                "topic": "Electromagnetism - Electromagnetic Waves",
                "activity": "Theory and solved examples",
                "notes": "Understand the electromagnetic spectrum and properties of EM waves."
            },
            {
                "time": "2:30 PM - 2:45 PM",
                "subject": "Break",
                "activity": "Short break, stretch"
            },
            {
                "time": "2:45 PM - 4:15 PM",
                "subject": "Maths",
                "topic": "Calculus - Differential Equations",
                "activity": "Problem Solving & Revision of concepts",
                "notes": "Focus on different types of differential equations and their solutions."
            },
            {
                "time": "4:15 PM - 4:30 PM",
                "subject": "Break",
                "activity": "Hydration & light snack"
            },
            {
                "time": "4:30 PM - 5:30 PM",
                "subject": "Chemistry",
                "topic": "Physical Chemistry - Chemical Kinetics",
                "activity": "Revision & Practice Problems",
                "notes": "Focus on rate laws and reaction mechanisms."
            },
            {
                "time": "5:30 PM - 6:00 PM",
                "subject": "Revision",
                "activity": "Review important concepts from all three subjects"
            }
        ],
        "quote": "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.\" - Steve Jobs"
    }
}`;

const newData = JSON.stringify(data);
const data1=JSON.parse(newData)

console.log(data1);

