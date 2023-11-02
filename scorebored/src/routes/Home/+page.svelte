
<div class="page">
    <div class = "mainBackground">
        <h1>ScoreBored</h1>
        <h2>"It always seems impossible until it's done." <br>- Nelson Mandela</h2>
    </div>
    <div class = "secondBackground">
    <div class="quantity">
        <h2>Quantity</h2>
        <h5>For tasks that are based on amount</h5>
        <ul>
            <li>Assign number of completions</li>
            <li>Completions are over a period of time</li>
            <li>Input how much is done per day</li>
            <li>Scorebored page will display line chart</li>
        </ul>
        
    </div>
    <div class="separator"></div>
    <div class="checklist">
        <h2>Checklist</h2>
        <h5>For tasks that are based on if it is done</h5>
        <ul>
            <li>Create a list of tasks to be completed</li>
            <li>Assign time period to be completed by</li>
            <li>Check task if you are successful</li>
            <li>Scorebored page will show the success rate</li>
        </ul>
    </div>
</div>
</div>
    
            
        
    
        
  
    
    <style>
     /* Initially set the opacity of all elements to 1 */
body * {
    transition: opacity 0.3s ease-in-out;
}

/* Reduce opacity for all elements except .quantity when hovering over .quantity */
body:hover:not(.quantity) * {
    opacity: 0.5;
}

/* Reduce opacity for all elements except .checklist when hovering over .checklist */
body:hover:not(.checklist) * {
    opacity: 0.5;
}
       
        .mainBackground {
        background: url("https://shorturl.at/dhCW8") no-repeat center center/cover;
        opacity: 0.8;
        height: 100vh;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    .mainBackground h1, .mainBackground h2 {
        text-align: center;
        font-family: 'Noto Serif', serif;
        color: black;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        font-weight: bold; 
        background-color: rgba(255, 255, 255, 0.8);
        padding: 10px 20px; 
        border-radius: 10px; 
        display: flex;
    }
    .mainBackground h1:hover, .mainBackground h2:hover{
        color:#284925;
    }



    .secondBackground{
        display: flex;
        justify-content: center;
    }

        .quantity{
            float: left;
            text-align: center;
            vertical-align: middle;
            width: 50%;
            box-sizing: border-box;
            margin-top: 50px;
            box-shadow: 10px 10px 20px 0px;
            opacity: 0.8;
            border-radius: 100px;
            min-height: 60vh;
            height:fit-content;
            max-width: 45%;
            margin-right: 40px;
        }

        
        
        .quantity h2:hover, .quantity h5:hover, .quantity li:hover::before {
            color: #284925;
        }

        .quantity li{
            text-align: left;
            max-width: 90%;
            padding-top: 10px;
            font-size: large;
        }

        .quantity li:hover{
            background-color: #A4E9BB;
            border-radius: 10px;
        }
        
        

        .separator {
            float:left;
            text-align: center;
            vertical-align: middle;
            width: 50%;
            box-sizing: border-box;
            max-width: 50%;
            margin-top: 50px;
            font-family: Noto Serif;
            opacity: 0.8;
            border-radius: 100px;
            height: 60vh ;
            box-shadow: 10px 10px 20px 0px;

        }

        .separator {
            width: 4px; 
            background-color: #62D658; 
            border-radius: 1000px;
        }

        .checklist{
            float: right;
            text-align: center;
            vertical-align: middle;
            width: 50%;
            box-sizing: border-box;
            max-width: 45%;
            margin-top: 50px;
            font-family: Noto Serif;
            opacity: 0.8;
            border-radius: 100px;
            min-height: 60vh ;
            box-shadow: 10px 10px 20px 0px;
            margin-left: 40px;
            height:fit-content;
        }

        .checklist h2:hover, .checklist h5:hover, .checklist li:hover::before {
            color: #284925;
        }

        .checklist li{
            text-align: left;
            padding-top: 10px;
            max-width: 90%;
            font-size: large;
        }

        .checklist li:hover{
            background-color: #A4E9BB;
            border-radius: 10px;
        }

    </style>

    