//Display Data returned from an API


let url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records?limit=20`
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        //DIV 1 - CARD 0
        document.querySelector('#card0-h2').innerText = `Species: ${data.results[0].species}`
        document.querySelector('#card0-h3').innerText = `Injury: ${data.results[0].injury}`
        document.querySelector('#card0-h4-2').innerText = `${data.results[0].type} Attack`
        document.querySelector('#card0-h4').innerText = `Year: ${data.results[0].year}`
        document.querySelector('#card0-h5').innerText = `Location: ${data.results[0].area}`
        document.querySelector('#card0-h5-2').innerText = `Victim: ${data.results[0].name}, ${data.results[0].sex}`
        document.querySelector('#card0-h6').innerText = `Investigator: ${data.results[0].investigator_or_source}`
        //DIV 2 - CARD 1
        document.querySelector('#card1-h2').innerText = `Species: ${data.results[1].species}`
        document.querySelector('#card1-h3').innerText = `Injury: ${data.results[1].injury}`
        document.querySelector('#card1-h4-2').innerText = `${data.results[1].type} Attack`
        document.querySelector('#card1-h4').innerText = `Year: ${data.results[1].year}`
        document.querySelector('#card1-h5').innerText = `Location: ${data.results[1].area}`
        document.querySelector('#card1-h5-2').innerText = `Victim: ${data.results[1].name}, ${data.results[1].sex}`
        document.querySelector('#card1-h6').innerText = `Investigator: ${data.results[1].investigator_or_source}`
        //DIV 3 - CARD 2
        document.querySelector('#card2-h2').innerText = `Species: ${data.results[2].species}`
        document.querySelector('#card2-h3').innerText = `Injury: ${data.results[1].injury}`
        document.querySelector('#card2-h4-2').innerText = `${data.results[2].type} Attack`
        document.querySelector('#card2-h4').innerText = `Year: ${data.results[2].year}`
        document.querySelector('#card2-h5').innerText = `Location: ${data.results[2].area}`
        document.querySelector('#card2-h5-2').innerText = `Victim: ${data.results[2].name}, ${data.results[2].sex}`
        document.querySelector('#card2-h6').innerText = `Investigator: ${data.results[2].investigator_or_source}`
         //DIV 4 - CARD 3
        document.querySelector('#card3-h2').innerText = `Species: ${data.results[3].species}`
        document.querySelector('#card3-h3').innerText = `Injury: ${data.results[3].injury}`
        document.querySelector('#card3-h4-2').innerText = `${data.results[3].type} Attack`
        document.querySelector('#card3-h4').innerText = `Year: ${data.results[3].year}`
        document.querySelector('#card3-h5').innerText = `Location: ${data.results[3].area}`
        document.querySelector('#card3-h5-2').innerText = `Victim: ${data.results[3].name}, ${data.results[3].sex}`
        document.querySelector('#card3-h6').innerText = `Investigator: ${data.results[3].investigator_or_source}`
         //DIV 3 - CARD 2
        document.querySelector('#card4-h2').innerText = `Species: ${data.results[4].species}`
        document.querySelector('#card4-h3').innerText = `Injury: ${data.results[4].injury}`
        document.querySelector('#card4-h4-2').innerText = `${data.results[4].type} Attack`
        document.querySelector('#card4-h4').innerText = `Year: ${data.results[4].year}`
        document.querySelector('#card4-h5').innerText = `Location: ${data.results[4].area}`
        document.querySelector('#card4-h5-2').innerText = `Victim: ${data.results[4].name}, ${data.results[4].sex}`
        document.querySelector('#card4-h6').innerText = `Investigator: ${data.results[4].investigator_or_source}`
         //DIV 3 - CARD 2
        document.querySelector('#card5-h2').innerText = `Species: ${data.results[5].species}`
        document.querySelector('#card5-h3').innerText = `Injury: ${data.results[5].injury}`
        document.querySelector('#card5-h4-2').innerText = `${data.results[5].type} Attack`
        document.querySelector('#card5-h4').innerText = `Year: ${data.results[5].year}`
        document.querySelector('#card5-h5').innerText = `Location: ${data.results[5].area}`
        document.querySelector('#card5-h5-2').innerText = `Victim: ${data.results[5].name}, ${data.results[5].sex}`
        document.querySelector('#card5-h6').innerText = `Investigator: ${data.results[5].investigator_or_source}`
         //DIV 3 - CARD 2
        document.querySelector('#card6-h2').innerText = `Species: ${data.results[6].species}`
        document.querySelector('#card6-h3').innerText = `Injury: ${data.results[6].injury}`
        document.querySelector('#card6-h4-2').innerText = `${data.results[6].type} Attack`
        document.querySelector('#card6-h4').innerText = `Year: ${data.results[6].year}`
        document.querySelector('#card6-h5').innerText = `Location: ${data.results[6].area}`
        document.querySelector('#card6-h5-2').innerText = `Victim: ${data.results[6].name}, ${data.results[6].sex}`
        document.querySelector('#card6-h6').innerText = `Investigator: ${data.results[6].investigator_or_source}`
         //DIV 3 - CARD 2
        document.querySelector('#card7-h2').innerText = `Species: ${data.results[7].species}`
        document.querySelector('#card7-h3').innerText = `Injury: ${data.results[7].injury}`
        document.querySelector('#card7-h4-2').innerText = `${data.results[7].type} Attack`
        document.querySelector('#card7-h4').innerText = `Year: ${data.results[7].year}`
        document.querySelector('#card7-h5').innerText = `Location: ${data.results[7].area}`
        document.querySelector('#card7-h5-2').innerText = `Victim: ${data.results[7].name}, ${data.results[7].sex}`
        document.querySelector('#card7-h6').innerText = `Investigator: ${data.results[7].investigator_or_source}`
         //DIV 3 - CARD 2
        document.querySelector('#card8-h2').innerText = `Species: ${data.results[8].species}`
        document.querySelector('#card8-h3').innerText = `Injury: ${data.results[8].injury}`
        document.querySelector('#card8-h4-2').innerText = `${data.results[8].type} Attack`
        document.querySelector('#card8-h4').innerText = `Year: ${data.results[8].year}`
        document.querySelector('#card8-h5').innerText = `Location: ${data.results[8].area}`
        document.querySelector('#card8-h5-2').innerText = `Victim: ${data.results[8].name}, ${data.results[8].sex}`
        document.querySelector('#card8-h6').innerText = `Investigator: ${data.results[8].investigator_or_source}`
         //DIV 3 - CARD 2
        document.querySelector('#card9-h2').innerText = `Species: ${data.results[9].species}`
        document.querySelector('#card9-h3').innerText = `Injury: ${data.results[9].injury}`
        document.querySelector('#card9-h4-2').innerText = `${data.results[9].type} Attack`
        document.querySelector('#card9-h4').innerText = `Year: ${data.results[9].year}`
        document.querySelector('#card9-h5').innerText = `Location: ${data.results[9].area}`
        document.querySelector('#card9-h5-2').innerText = `Victim: ${data.results[9].name}, ${data.results[9].sex}`
        document.querySelector('#card9-h6').innerText = `Investigator: ${data.results[9].investigator_or_source}`
         //DIV 3 - CARD 2
        document.querySelector('#card10-h2').innerText = `Species: ${data.results[10].species}`
        document.querySelector('#card10-h3').innerText = `Injury: ${data.results[10].injury}`
        document.querySelector('#card10-h4-2').innerText = `${data.results[10].type} Attack`
        document.querySelector('#card10-h4').innerText = `Year: ${data.results[10].year}`
        document.querySelector('#card10-h5').innerText = `Location: ${data.results[10].area}`
        document.querySelector('#card10-h5-2').innerText = `Victim: ${data.results[10].name}, ${data.results[10].sex}`
        document.querySelector('#card10-h6').innerText = `Investigator: ${data.results[10].investigator_or_source}`
         //DIV 3 - CARD 2
        document.querySelector('#card11-h2').innerText = `Species: ${data.results[11].species}`
        document.querySelector('#card11-h3').innerText = `Injury: ${data.results[11].injury}`
        document.querySelector('#card11-h4-2').innerText = `${data.results[11].type} Attack`
        document.querySelector('#card11-h4').innerText = `Year: ${data.results[11].year}`
        document.querySelector('#card11-h5').innerText = `Location: ${data.results[11].area}`
        document.querySelector('#card11-h5-2').innerText = `Victim: ${data.results[11].name}, ${data.results[11].sex}`
        document.querySelector('#card11-h6').innerText = `Investigator: ${data.results[11].investigator_or_source}`
         //DIV 3 - CARD 2
        document.querySelector('#card12-h2').innerText = `Species: ${data.results[12].species}`
        document.querySelector('#card12-h3').innerText = `Injury: ${data.results[12].injury}`
        document.querySelector('#card12-h4-2').innerText = `${data.results[12].type} Attack`
        document.querySelector('#card12-h4').innerText = `Year: ${data.results[12].year}`
        document.querySelector('#card12-h5').innerText = `Location: ${data.results[12].area}`
        document.querySelector('#card12-h5-2').innerText = `Victim: ${data.results[12].name}, ${data.results[12].sex}`
        document.querySelector('#card12-h6').innerText = `Investigator: ${data.results[12].investigator_or_source}`
         //DIV 3 - CARD 2
        document.querySelector('#card13-h2').innerText = `Species: ${data.results[13].species}`
        document.querySelector('#card13-h3').innerText = `Injury: ${data.results[13].injury}`
        document.querySelector('#card13-h4-2').innerText = `${data.results[13].type} Attack`
        document.querySelector('#card13-h4').innerText = `Year: ${data.results[13].year}`
        document.querySelector('#card13-h5').innerText = `Location: ${data.results[13].area}`
        document.querySelector('#card13-h5-2').innerText = `Victim: ${data.results[13].name}, ${data.results[13].sex}`
        document.querySelector('#card13-h6').innerText = `Investigator: ${data.results[13].investigator_or_source}`
        //DIV 3 - CARD 2
        document.querySelector('#card14-h2').innerText = `Species: ${data.results[14].species}`
        document.querySelector('#card14-h3').innerText = `Injury: ${data.results[14].injury}`
        document.querySelector('#card14-h4-2').innerText = `${data.results[14].type} Attack`
        document.querySelector('#card14-h4').innerText = `Year: ${data.results[14].year}`
        document.querySelector('#card14-h5').innerText = `Location: ${data.results[14].area}`
        document.querySelector('#card14-h5-2').innerText = `Victim: ${data.results[14].name}, ${data.results[14].sex}`
        document.querySelector('#card14-h6').innerText = `Investigator: ${data.results[14].investigator_or_source}`
        //DIV 3 - CARD 2
        document.querySelector('#card15-h2').innerText = `Species: ${data.results[15].species}`
        document.querySelector('#card15-h3').innerText = `Injury: ${data.results[15].injury}`
        document.querySelector('#card15-h4-2').innerText = `${data.results[15].type} Attack`
        document.querySelector('#card15-h4').innerText = `Year: ${data.results[15].year}`
        document.querySelector('#card15-h5').innerText = `Location: ${data.results[15].area}`
        document.querySelector('#card15-h5-2').innerText = `Victim: ${data.results[15].name}, ${data.results[15].sex}`
        document.querySelector('#card15-h6').innerText = `Investigator: ${data.results[15].investigator_or_source}`
         //DIV 3 - CARD 2
        document.querySelector('#card16-h2').innerText = `Species: ${data.results[16].species}`
        document.querySelector('#card16-h3').innerText = `Injury: ${data.results[16].injury}`
        document.querySelector('#card16-h4-2').innerText = `${data.results[16].type} Attack`
        document.querySelector('#card16-h4').innerText = `Year: ${data.results[16].year}`
        document.querySelector('#card16-h5').innerText = `Location: ${data.results[16].area}`
        document.querySelector('#card16-h5-2').innerText = `Victim: ${data.results[16].name}, ${data.results[16].sex}`
        document.querySelector('#card16-h6').innerText = `Investigator: ${data.results[16].investigator_or_source}`
         //DIV 3 - CARD 2
        document.querySelector('#card17-h2').innerText = `Species: ${data.results[17].species}`
        document.querySelector('#card17-h3').innerText = `Injury: ${data.results[17].injury}`
        document.querySelector('#card17-h4-2').innerText = `${data.results[17].type} Attack`
        document.querySelector('#card17-h4').innerText = `Year: ${data.results[17].year}`
        document.querySelector('#card17-h5').innerText = `Location: ${data.results[17].area}`
        document.querySelector('#card17-h5-2').innerText = `Victim: ${data.results[17].name}, ${data.results[17].sex}`
        document.querySelector('#card17-h6').innerText = `Investigator: ${data.results[17].investigator_or_source}`
         //DIV 3 - CARD 2
        document.querySelector('#card18-h2').innerText = `Species: ${data.results[18].species}`
        document.querySelector('#card18-h3').innerText = `Injury: ${data.results[18].injury}`
        document.querySelector('#card18-h4-2').innerText = `${data.results[18].type} Attack`
        document.querySelector('#card18-h4').innerText = `Year: ${data.results[18].year}`
        document.querySelector('#card18-h5').innerText = `Location: ${data.results[18].area}`
        document.querySelector('#card18-h5-2').innerText = `Victim: ${data.results[18].name}, ${data.results[18].sex}`
        document.querySelector('#card18-h6').innerText = `Investigator: ${data.results[18].investigator_or_source}`
         //DIV 3 - CARD 2
        document.querySelector('#card19-h2').innerText = `Species: ${data.results[19].species}`
        document.querySelector('#card19-h3').innerText = `Injury: ${data.results[19].injury}`
        document.querySelector('#card19-h4-2').innerText = `${data.results[19].type} Attack`
        document.querySelector('#card19-h4').innerText = `Year: ${data.results[19].year}`
        document.querySelector('#card19-h5').innerText = `Location: ${data.results[19].area}`
        document.querySelector('#card19-h5-2').innerText = `Victim: ${data.results[19].name}, ${data.results[19].sex}`
        document.querySelector('#card19-h6').innerText = `Investigator: ${data.results[19].investigator_or_source}`
         //DIV 3 - CARD 2
    
    })
    .catch(err => {
    console.log(`error ${err}`)
            
        })