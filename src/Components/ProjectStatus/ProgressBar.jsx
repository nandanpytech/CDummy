import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

export const progressBarData1={
        
    datasets: [{
      data: [20,30,40,10],
      backgroundColor: [
        'rgba(229, 173, 0, 1)',
        'rgba(252, 195, 20, 0.8)',
        'rgba(255, 192, 0, 0.6)',
        'rgba(252, 195, 20, 0.4)',
      ],
      borderWidth: 0,
    }],
   

}  

export const progressBarData2={
    datasets: [{
      data: [100],
      backgroundColor: [
            'rgba(253, 198, 29, 1)'
      ],
      borderWidth: 0,
    }],
   

}  


const ProgressBar = ({name}) => {
  return (


    <Doughnut
    data={name==="completed"?progressBarData2:progressBarData1}
    options={{
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        rotation:-90,
        circumference:180,
        radius:60
    }}
  />

  
  );
};

export default ProgressBar;
