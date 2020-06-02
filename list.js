// ------------------------------------------------------------------------------------all the ornamnetal elaborations

let ecsf = function(spot, list_in, dur_in){ //chord tone skip fixnum
    lin = list_in.slice(0);
    din = dur_in.slice(0);

    lin[spot] = [v0, v0-1];
    din[spot] = [tempoh[da], tempoh[da]];
    return [lin,  din];
}

let ecsr = function(spot, list_in, dur_in){ //chord tone skip fixnum more randomized
    lin = list_in.slice(0);
    din = dur_in.slice(0);
    let v = [ v0 - 1,  v0 + 1,  v0 + 2,  v0 - 2 ];
    let vt = v[Math.floor(Math.random() * v.length)];

    lin[spot] = [v0, vt];
    din[spot] = [tempoh[da], tempoh[da]];
    return [lin,  din];
}

let ecsa = function(spot, list_in, dur_in){ //chord tone skip array
    lin = list_in.slice(0);
    din = dur_in.slice(0);

    let v = [str(v0) + 'a', '99a'];
    let vt = v[Math.floor(Math.random() * v.length)];

    lin[spot] = [v0, vt, str(va[1]) + 'a', v1];
    din[spot] = [tempoh[da[0]], tempoh[da[0]], tempoh[da[1]], tempoh[da[1]]];
    return [lin,  din];
}

let ela = function(spot, list_in, dur_in){ //line above
    lin = list_in.slice(0);
    din = dur_in.slice(0);

    let v = [str(v0) + 'a', str(v0) + 'a', '99a'];
    let vt = v[Math.floor(Math.random() * v.length)];

    let vx = [str(v0+1) + 'a', '99a', str(v1) + 'a'];
    let vtx = vx[Math.floor(Math.random() * v.length)];

    lin[spot] = [v0, vt, v0+1, vtx];
    din[spot] = ( (da.constructor === Array) ? [tempoh[da[0]], tempoh[da[0]], tempoh[da[1]], tempoh[da[1]]] : [tempoh[da/2], tempoh[da/2], tempoh[da/2], tempoh[da/2]] );
    //din[spot] = [tempoh[da[0]], tempoh[da[0]], tempoh[da[1]], tempoh[da[1]]] if isinstance(da, list) === True else [tempoh[da/2], tempoh[da/2], tempoh[da/2], tempoh[da/2]];
    return [lin,  din];
}

let elb = function(spot, list_in, dur_in){ //line below
    lin = list_in.slice(0);
    din = dur_in.slice(0);

    let v = [str(v0) + 'b', '99a', '99a'];
    let vt = v[Math.floor(Math.random() * v.length)];

    let vx = [str(v0-1) + 'b', '99a', v1-1, '99a'];
    let vtx = vx[Math.floor(Math.random() * v.length)];

    lin[spot] = [v0, vt, v0-1, vtx];
    din[spot] = ( (da.constructor === Array) ? [tempoh[da[0]], tempoh[da[0]], tempoh[da[1]], tempoh[da[1]]] : [tempoh[da/2], tempoh[da/2], tempoh[da/2], tempoh[da/2]] );
    //din[spot] = [tempoh[da[0]], tempoh[da[0]], tempoh[da[1]], tempoh[da[1]]] if isinstance(da, list) === True else [tempoh[da/2], tempoh[da/2], tempoh[da/2], tempoh[da/2]];
    return [lin,  din];
}

let eof = function(spot, list_in, dur_in){ //overreach fixnum
    lin = list_in.slice(0);
    din = dur_in.slice(0);

    let v = [str(v1) + 'a', v1+1];
    let vt = v[Math.floor(Math.random() * v.length)];

    lin[spot] = [v0, vt, v1+1];
    din[spot] = [tempoh[da], tempoh[da]];
    return [lin,  din];
}

let eoa = function(spot, list_in, dur_in){ //overreach array
    lin = list_in.slice(0);
    din = dur_in.slice(0);
    
    let v = [va[1], '99a'];
    let vt = v[Math.floor(Math.random() * v.length)];

    let vx = [[str(va[0]) + 'a', va[0], str(va[1]) + 'a', vt], [str(va[0]) + 'a', va[0], va[1], str(v1) + 'a']];
    let vtx = vx[Math.floor(Math.random() * v.length)];

    lin[spot] = vtx;
    din[spot] = [tempoh[da[0]], tempoh[da[0]], tempoh[da[0]], tempoh[da[0]]];
    return [lin,  din];
}

let enbf = function(spot, list_in, dur_in){ //neighbour below fixnum
    lin = list_in.slice(0);
    din = dur_in.slice(0);

    let v = [v0, v1];
    let vt = v[Math.floor(Math.random() * v.length)];

    lin[spot] = [v0, str(vt) + 'b'];
    din[spot] = [tempoh[da], tempoh[da]];
    return [lin,  din];
}

let enba = function(spot, list_in, dur_in){ //neighbour below array
    lin = list_in.slice(0);
    din = dur_in.slice(0);

    lin[spot] = [va[0], str(va[0]) + 'b',  va[1]];
    din[spot] = [tempoh[da[1]], tempoh[da[1]], da[1]];
    return [lin,  din];
}

let enaf = function(spot, list_in, dur_in){ //neighbour above fixnum
    lin = list_in.slice(0);
    din = dur_in.slice(0);

    let v = [v0, v1];
    let vt = v[Math.floor(Math.random() * v.length)];

    lin[spot] = [v0, str(vt) + 'a'];
    din[spot] = [tempoh[da], tempoh[da]];
    return [lin,  din];
}

let enaa = function(spot, list_in, dur_in){ //neighbour above array
    lin = list_in.slice(0);
    din = dur_in.slice(0);

    let v = [str(va[0]) + 'a', '99a'];
    let vt = v[Math.floor(Math.random() * v.length)];

    let vx = ['a', 'b'];
    let vtx = vx[Math.floor(Math.random() * v.length)];

    lin[spot] = [va[0],  vt,  va[1], str(va[1]) + vtx];
    din[spot] = [tempoh[da[0]], tempoh[da[0]], tempoh[da[0]], tempoh[da[0]]];
    return [lin,  din];
}

let enrf = function(spot, list_in, dur_in){ //neighbour random fixnum
    lin = list_in.slice(0);
    din = dur_in.slice(0);

    let v = ['a', 'b'];
    let vt = v[Math.floor(Math.random() * v.length)];

    lin[spot] = [v0, str(v0)+vt];
    din[spot] = [tempoh[da], tempoh[da]];
    return [lin,  din];
}

let enr_a = function(spot, list_in, dur_in){ //neighbour random a
    lin = list_in.slice(0);
    din = dur_in.slice(0);

    let v = ['a', 'b'];
    let vt = v[Math.floor(Math.random() * v.length)];

    let vx = [va[0]+2, str(va[0]) + 'b', str(va[0])+vt, 99];
    let vtx = vx[Math.floor(Math.random() * v.length)];

    lin[spot] = [va[0], vtx, va[1], str(va[1]) + 'a'];
    din[spot] = [tempoh[da/2], tempoh[da/2], tempoh[da/2], tempoh[da/2]];
    return [lin,  din];
}

let enr_b = function(spot, list_in, dur_in){ //neighbour random b
    lin = list_in.slice(0);
    din = dur_in.slice(0);

    let v = ['b', 'a'];
    let vt = v[Math.floor(Math.random() * v.length)];

    let vx = [va[0]+2, str(va[0]) + 'a', str(va[0]) + vt, 99];
    let vtx = vx[Math.floor(Math.random() * v.length)];

    lin[spot] = [va[0], vtx,  va[1], str(va[1]) + 'b'];
    din[spot] = [tempoh[da/2], tempoh[da/2], tempoh[da/2], tempoh[da/2]];
    return [lin,  din];
}

let enr_c = function(spot, list_in, dur_in){ //neighbour random c
    lin = list_in.slice(0);
    din = dur_in.slice(0);

    let v = ['a', 'b'];
    let vt = v[Math.floor(Math.random() * v.length)];

    let vx = [99, str(va[0]) + vt];
    let vtx = vx[Math.floor(Math.random() * v.length)];

    let vxx = ['a', 'b'];
    let vtxx = vxx[Math.floor(Math.random() * v.length)];

    lin[spot] = [va[0], vtx,  va[1], str(va[1]) + vtxx];
    din[spot] = [tempoh[da/2], tempoh[da/2], tempoh[da/2], tempoh[da/2]];
    return [lin,  din];
}


// ------------------------------------------------------------------------------------define all the functions we will be using below here

let variableAssigner = function(){
    // the point of this function is to have one spot where all the most important variables are set.
    // metreGenerator
    
    lengthRand_MuroBox = 2;
    maxRand_MuroBox = 3;
    offSet_MuroBox = 1;

    lengthRand_4 = 2;
    maxRand_4 = 6;
    lengthRand_3 = 3;
    maxRand_3 = 6;
    offSetDefault = 0;

    // chordGenerator
    deghash = [
        [0,4,5,3],
        [0,4,5,2],
        [5,4,3,4],
        [0,5,3,4],
        [0,3,5,4],
        [3,2,1,0],
        [0,1,4,0],
        [0,3,4,0],
        [0,5,4,0],
        [0,4,3,3],
        [0,3,4,4]
    ];

    // fundamentalLineGenerator

    reachMax = 4;
    reachMin = 2;
    lineSize = 4;

    // fundamentalDurationGenerator

    duration_4 = [s4,s4,s4,s4,s4,s4,s4,s4,s4,s4,s4,s4,s4,s4,s4,s4];
    duration_3 = [s4,s4,s4,s4,s4,s4,s4,s4];

    // consonantSkip

    // The list below, describes a weighted random choice of how large the consonant skip will be. 
    // It performs a random choice from this list.
    cst = [0,0,1,1,1,2,2,2];
    // both cs variables contain relevant information

    // fundamentalElaboration
    spotProbability = [0,1,3,8];

   // elaborationFundamentalCaller
   // the order of calling functions may be important.

   // ornamentalElaboration
   a3 = [0,0,0,0,0,0,2,2,2,2,1,1,1,3];
   spotlr4 = [[0,0,0,0,0,0,0,0],[0,-1,0,-1,0,-1,0,-1],[0,1,0,1,0,1,0,1],[0,-1,1,0,0,-1,1,0]];

    // the next variables contain all the bassline information and variables.
    bassLines = {
        0 : ['fifth','ground','third','ground'],
        1 : ['ground','fifth','third','fifth'],
        2 : ['ground','third','fifth','ground'],
        3 : ['ground','third','fifth','third']
        };

    // bassCheck is a hash that contains the possible sequence of notes played by the possible basslines as strings.
    bassCheck = {
        0 : [['fifth'], ['ground'], ['third'], ['ground']],
        1 : [['ground'], ['fifth'], ['third'], ['fifth']],
        2 : [['ground'],['third'],['fifth'],['ground']],
        3 : [['ground'],['third'],['fifth'],['third']]
        };

    // the dissonance hashe contain the harshest dissonances so they can be removed from possible basslines
    dissonance_MuroBox = {
        0 : [ [4, 'fifth'], [5, 'fifth'], [6, 'fifth'] ],
        1 : [ [1, 'third'], [3, 'third'], [5, 'ground'], [6, 'fifth'] ],
        2 : [ [0, 'third'], [2, 'fifth'], [4, 'third'], [6, 'ground'] ],
        3 : [2, 'fifth'],
        '0a' : [ [5, 'fifth'], [6, 'fifth'] ],
        '1a' : [ [1, 'fifth'], [2, 'fifth'], [3, 'ground'], [4, 'third'], [5, 'ground'], [6, 'ground'] ],
        '2a' : [ [0, 'ground'], [0, 'third'], [2, 'ground'], [2, 'fifth'], [4, 'third'] ],
        '3a' : [ [2, 'third'], [4, 'ground'] ],
        '0b' : [ [3, 'fifth'], [4, 'fifth'], [5, 'third'], [5, 'fifth'], [6, 'third'] ],
        '1b' : [ [1, 'fifth'], [5, 'fifth'], [6, 'fifth'] ],
        '2b' : [ [0, 'ground'], [2, 'fifth'], [4, 'third'], [5, 'ground'] ],
        '3b' : [ [2, 'ground'], [2, 'fifth'] ]
    }

    dissonance_Standard = {
        '0b' : [[0, 'octave'], [2, 'fifth'], [2, 'octave'], [3, 'fifth'], [4, 'fifth'], [5, 'third'], [5, 'fifth'], [6, 'third'], [6, 'fifth']],
        '0a' : [[1, 'octave'],[2, 'octave'],[3, 'octave'],[4, 'fifth'],[4, 'octave'],[5, 'fifth'],[6, 'third'],[5, 'fifth']],
        0 : [[1, 'octave'],[2, 'octave'],[3, 'octave'],[4, 'fifth'],[5, 'third'],[5, 'fifth'],[6, 'third'],[6, 'fifth']],
        '1b' : [[2, 'octave'],[3, 'octave'],[4, 'fifth'],[4, 'octave'],[5, 'fifth'],[6, 'fifth']],
        '1a' : [[2, 'octave'],[5, 'fifth'],[5, 'octave']],
        1 : [[2, 'octave'],[3, 'octave'],[4, 'octave'],[5, 'fifth'],[5, 'octave'],[6, 'fifth']],
        '2b' : [[3, 'fifth'],[5, 'octave'],[6, 'octave']],
        '2a' : [6, 'octave'],
        2 : [[5, 'octave'],[6, 'octave']],
        3 : [[3, 'octave'],[6, 'fifth'],[6, 'octave']],
    };

    dissonance = dissonance_MuroBox;

    dissonanceKeys = ['0b', '0a', '0', '1b', '1a', '1', '2b', '2a', '2', '3'];
}

let metreGenerator = function(){
    // generating which metre we will be using
    // metre = getRandomInt(3,4);

    // the choice of metre has an effect on a number of other variables, I will initialize them here.
    if (metre === 4) {
        lengthRand = lengthRand_4;
        maxRand = maxRand_MuroBox; 
    } else if(metre === 3) {
        lengthRand = lengthRand_3;
        maxRand = maxRand_3;
    } else {
        console.log('metre not supported yet')
    }
}

let chordGenerator = function(){
    // choosing an chord progression from the chord list
    deg = deghash[Math.floor(Math.random()*deghash.length)];

    let i = 0;
    let j = 0;
    let k = 0;
    for (i = 0 ; i < 2 ; i++){
        for (j = 0 ; j < deg.length ; j++){
            for (k = 0 ; k < dur.length ; k++){
                chordList.push(deg[j]);
            }
        }
    }
}

let symmetryGenerator = function(){
    // below I populate the symmetry list with 4 random elements, chosen between 0,1 and 2
    // the only restriction being it cannot be 4 of the same elements.
    while(symmetry.every( (val, i, arr) => val === arr[0] ) ){
        symmetry = Array.from({length: 4}, () => Math.floor(Math.random() * 3));
    }

    // the array below gets all the set of all unique elements in the symmetry array.
    let uniqueElements = Array.from(new Set(symmetry));


    // the part below changes the elements in the symmetry list from ints between 0 and 2 to the strings 'A', 'B' and 'C'
    // the restriction is that the last element is always 'C'

    // if there are only two different elements in symmetry, the last one is replaced with 'C', and the other is replaced with 'A'
    // the one liner to count the amount of unique elements in an array is : Array.from(new Set(symmetry)).length

    if (Array.from(new Set(symmetry)).length === 2){

        // get the last element and replace all occurances of the by 'C'
        let lastElement = symmetry.slice(-1).pop();
        while ( symmetry.includes(lastElement) ) { symmetry.replace(lastElement, 'C'); }

        //deleting the lastElement from the UniqueElement list
        uniqueElements = deleteArrayValue(uniqueElements, lastElement);

        // now replace the other value with, 'A'
        while ( symmetry.includes(uniqueElements[0]) ) { symmetry.replace(uniqueElements[0], 'A'); }

    } else {

        // get the last element and replace all occurances of the by 'C'
        let lastElement = symmetry.slice(-1).pop();
        while ( symmetry.includes(lastElement) ) { symmetry.replace(lastElement, 'C'); }

        //deleting the lastElement from the UniqueElement list
        uniqueElements = deleteArrayValue(uniqueElements, lastElement);

        // now replace the first value with, 'A'
        while ( symmetry.includes(uniqueElements[0]) ) { symmetry.replace(uniqueElements[0], 'A'); }

        // and the second with 'B'
        while ( symmetry.includes(uniqueElements[1]) ) { symmetry.replace(uniqueElements[1], 'B'); }

    }
}

let elaborationSymmetryGenerator = function(){
    // below I populate the symmetry list with 4 random elements, chosen between 0,1 and 2
    // the only restriction being it cannot be 4 of the same elements.
    while(elaborationSymmetry.every( (val, i, arr) => val === arr[0] ) ){
        elaborationSymmetry = Array.from({length: 4}, () => Math.floor(Math.random() * 3));
    }

    // the array below gets all the set of all unique elements in the symmetry array.
    let uniqueElements = Array.from(new Set(elaborationSymmetry));


    // the part below changes the elements in the symmetry list from ints between 0 and 2 to the strings 'A', 'B' and 'C'
    // the restriction is that the last element is always 'C'

    // if there are only two different elements in symmetry, the last one is replaced with 'C', and the other is replaced with 'A'
    // the one liner to count the amount of unique elements in an array is : Array.from(new Set(symmetry)).length

    if (Array.from(new Set(elaborationSymmetry)).length === 2){

        // get the last element and replace all occurances of the by 'C'
        let lastElement = elaborationSymmetry.slice(-1).pop();
        while ( elaborationSymmetry.includes(lastElement) ) { elaborationSymmetry.replace(lastElement, 'C'); }

        //deleting the lastElement from the UniqueElement list
        uniqueElements = deleteArrayValue(uniqueElements, lastElement);

        // now replace the other value with, 'A'
        while ( elaborationSymmetry.includes(uniqueElements[0]) ) { elaborationSymmetry.replace(uniqueElements[0], 'A'); }

    } else {

        // get the last element and replace all occurances of the by 'C'
        let lastElement = elaborationSymmetry.slice(-1).pop();
        while ( elaborationSymmetry.includes(lastElement) ) { elaborationSymmetry.replace(lastElement, 'C'); }

        //deleting the lastElement from the UniqueElement list
        uniqueElements = deleteArrayValue(uniqueElements, lastElement);

        // now replace the first value with, 'A'
        while ( elaborationSymmetry.includes(uniqueElements[0]) ) { elaborationSymmetry.replace(uniqueElements[0], 'A'); }

        // and the second with 'B'
        while ( elaborationSymmetry.includes(uniqueElements[1]) ) { elaborationSymmetry.replace(uniqueElements[1], 'B'); }

    }
}

let fundamentalLineGenerator = function(){
        
    // now that I have the symmetry, it is time to populate it with chord tones (notes that fall within the scale of the chord)
    // to do this I have initialize three lists (l1, l2 and l3). that I will link to 'A' or 'B' or 'C' in the symmetry list.
    // A feature I will add in this version is the distinction between metre's. I will start between a 3/4 and a 4/4 and go from there.

    do{
        // populate the separate root note lists
        l1 = randomArray(lengthRand_MuroBox,maxRand_MuroBox);
        l2 = randomArray(lengthRand_MuroBox,maxRand_MuroBox);
        l3 = randomArray(lengthRand_MuroBox,maxRand_MuroBox);

        offSet = (listF) => { for(var i=0;i<listF.length;i++){ listF[i] += offSet_MuroBox } };
        offSet(l1);
        offSet(l2);
        offSet(l3);

        // concatenating the three lists into 1
        lx = l1.concat(l2,l3);

        // get the highest value
        var min = Math.min.apply(null, lx), max = Math.max.apply(null, lx);

        // reach means the distance between highest and lowest.
        var reach = max - min;
        var size = Array.from(new Set(lx)).length;

    } while (l1 != l2 && l1 != l3 && l2 != l3 && reach <= reachMax && reach > reachMin && lineSize > 4);

    // storing the three root note lists into ltransformation for optimizing purposes
    ltransformation = [l1,l2,l3];

    // Now I need to assign l1, l2 & l3
    // The hash describes consonant tones over each possible chord.
    // the way I decide which of these two base note lists ends up where, is by looking at how many notes are consonant over which chord.
    // Each one of these tests one note pair against each chord, giving 4 values of possible consonances.

    for (i = 0; i < deg.length; i++) {
        
        let x = cthc[deg[i]];
        let y = Array.from(new Set(l1));
        
        ll1[i] = x.diff(y).length;
    }

    for (i = 0; i < deg.length; i++) {
        
        let x = cthc[deg[i]];
        let y = Array.from(new Set(l2));
        
        ll2[i] = x.diff(y).length;
    }

    for (i = 0; i < deg.length; i++) {
        
        let x = cthc[deg[i]];
        let y = Array.from(new Set(l3));
        
        ll3[i] = x.diff(y).length;
    }

    // the next step is to rearrange the lists.
    // now each list represents the possible consonances per chord, for each list ordered from l1 to l3.

    f3 = [ll1[3],ll2[3],ll3[3]];
    f2 = [ll1[2],ll2[2],ll3[2]];
    f1 = [ll1[1],ll2[1],ll3[1]];
    f0 = [ll1[0],ll2[0],ll3[0]];

    // Getting the index of the lowest number in f3, that is the root note pair list that best suits the last chord. (which is always 'C')
    min = indexOfSmallest(f3);

    // by changing the minimum value the higher one, we can find the second lowest as the lowest next time
    f2[min] = f1[min] = f0[min] = 99;

    // population rootlist in accordance to the generated symmetry
    rootList = symmetry.slice(0);

    // the next part populates the 'C' symmetry elements with the optimal root notes.

    for (i = 0; i < rootList.length; i++) {
        if (rootList[i] === 'C') {
            rootList[i] = ltransformation[min];
        }
    }

    // the next variable organizes the sequence of places to replace with lists.
    var orderF = [f0,f1,f2];

    // cycle through the rootlist to check whether we already replaced it.
    for (j = 0; j < 3; j++){
        if (typeof rootList[j] === 'string' || rootList[j] instanceof String) {

            // get the smallest / optimal root notes.
            min = indexOfSmallest(orderF[j]);
            f2[min] = f1[min] = f0[min] = 99;

            // replace them on all instances of the symmetry.
            for (i = 0; i < rootList.length; i++) {
                if (rootList[i] === symmetry[j]) {
                    rootList[i] = ltransformation[min];
                }
            }
        }
    }


    // Next are a couple of lines formatting the rootList
    // Firstly, we flatten it
    rootList = flatten(rootList);

    // Now we double it
    rootList = rootList.concat(rootList);

    // replace last note with 99
    rootList[ rootList.length - 1 ] = 99;

    // and the one before last with a consonant note of the last chord
    let consonantChoice = cthc[deg[deg.length-1]];
    let consonantChosen = consonantChoice[Math.floor(Math.random()*consonantChoice.length)]

    rootList[ rootList.length - 2] = consonantChosen;

    // after having done this, we have created the fundamental line, lfun 
    // it is on this line that elaborations will be performed.
    lfun = symmetry.slice(0);

}

let fundamentalDurationGenerator = function(){
    // the duration of the fundamental line, is actually always the same.
    // so the rhythmic description is hardcoded below.

    // TODO build this out to correspond with the metre: depending on whther were at 3/4 or 4/4, it is going to make more sense to adjust the rhythm of the root notes.
    if (metre === 4) {
        dfun = duration_4;
    } else if(metre === 3) {
        dfun = duration_3;
    } else {
        console.log('metre not supported yet')
    }
}

let elaborationCollectorGenerator = function(){
    // It didn't work as I intended to. I'm going to try it differently
    elaboratedHashList = [lA0, lB0, lC0, lD0];
    elaboratedHashDur = [[dfun[0],dfun[0]],[dfun[0],dfun[0]],[dfun[0],dfun[0]],[dfun[0],dfun[0]]];
    /*
    let i = 0;
    let splitList = [lA0, lB0, lC0, lD0];
    let splitDur = [[dfun[0],dfun[0]],[dfun[0],dfun[0]],[dfun[0],dfun[0]],[dfun[0],dfun[0]]];
    elaboratedHashList = splitList.map( (elaboration) => {
        return [i++,elaboration];
    })
    i = 0;
    elaboratedHashDur = splitDur.map( (elaboration) => {
        return [i++,elaboration];
    })
    */
}

let elaborationHashGenerator = function(){
    elaborationHash = elaborationSymmetry.slice(0);
    /*
    let i = 0;
    elaborationHash = elaborationSymmetry.map( (elaboration) => {
        return [i++,elaboration];
    })
    */
}

let elaborationFormatter = function(){
    // The fundamental list that has been generated before, is now split into four parts.
    // This serves to perform the elaborations according to the structure defined in esym.
    let ltemp = splitArray(rootList,4);
    dfun = splitArray(dfun, 4);

    // The way the elaboration are going to work in this phase, is the following : 
    // lA0 to lD0, are 2 dimensional lists. That means that several lists are contained in one list object.
    // lA0[0], will contain one of the four parts above, originating from the fundamental line we have generated above. 
    // lA0[1] will contain the elaborated version of the line above
    // lA0[2] will contain  the elaborated version of the elaborated version of thelist above
    // and so forth

    // initializing a multidimensional array, putting one of the four parts on the end, and doubling that to the first element.
    lA0 = [ltemp[0], ltemp[0]];
    lB0 = [ltemp[1], ltemp[1]];
    lC0 = [ltemp[2], ltemp[2]];
    lD0 = [ltemp[3], ltemp[3]];

    // esym_x is created in the next line as a numpy array from object esym.
    elaborationSymmetry_x = elaborationSymmetry.slice(0);
    // using this numpy array, we extract the unique elements, and their first occurances. 
    // in fact we omit the unique elements and ax becomes a list containing the first place of each unique element
    // So ['A','A','B','C'] becomes ax = [0,2,3] the indexes of the first occurance of a unique element.
    let temp = [...new Set(elaborationSymmetry_x)];
    for (i = 0; i < temp.length; i++){
        uniqueElementIndex.push(elaborationSymmetry_x.indexOf(temp[i]));
    }

    // [0,1,2,3] is a list that contains the possible indexes, and in nonUniqueElementIndex the indexes that we obtained above are removed, 
    // so we are left with the indexes that are not unique. The purpose of this is to be able to recreate the same elaboration 
    // in a list like ['A','A','B','C'], copying the same elaboration between the first 'A' and the second 'A' 
    // requires knowing the location of the second 'A'
    nonUniqueElementIndex = [0,1,2,3].diff(uniqueElementIndex);
}

let consonantSkip = function(spot, listin, durin, num1 = 99){

    // IMPORTANT you have to return as an array, and then split the files afterwards, call this function like this:

    /*
    var test = consonantSkip(2, rootList, dfun, 3);
    testArr1 = test[0];
    testArr2 = test[1];
    testInt1 = test[2];
    */

    // the next part is the hard part, where the functions begin. 
    // csk is a funtion that is only used within elabf, and elabf2, which are two other functions 
    // that can be described as the fundamental elaborations. There will also be an ornamental elaboration later on. 
    // csk is in fact a 'consonant skip'. What it does is  jump between two notes from the fundamental list over a consonant note.

    // the function csk is always ran in a certain spot in the list. This could mean a consonant skip is between the 4th and 5th element of a fundamental list. 
    // Besides the fundamental note list, there is also the rhythmic note list. In the case above there would be an elaboration between the 4th and 5th element of that list as well.

    // the last argument you can pass to this function, defines whether the size of the consonant skip is already known. 
    // If it is not defined, a random int is chosen, if it is, that int is chosen.

    let r9 = null;
    if (num1 === 99){
        r9 = getRandomInt(0,6);
    } else if (num1 != 99){
        r9 = num1;
    }

    // below I make copies of the note list and durations list, that were given as arguments to work in.
    let lout = listin.slice(0);
    let dout = durin.slice(0);

    // Here I choose the element in the notelist on which, the elaboration will be performed and name it v.
    // I also choose the equivalent spot in the duration list on which to perform the same elaboration and name it w
    let v = listin[spot];
    let w = durin[spot];

    // The list below, describes a weighted random choice of how large the consonant skip will be. 
    // It performs a random choice from this list.
    // const cst = [0,0,1,1,1,2,2,2];

    // There are two possibilities, either you are elaborating on a spot where no elaboration has occured before, and therefore the value in that spot would be an int.
    // or you are performing on a place where one has, and in that case you will be performing it on a list.

    if (typeof v === 'number' || v instanceof Number){
        // cs defines the three possibilities, in case, of an int, of the size of the consonant skip. a note below, a note above, or 2 notes above.
        let cs = [v-1,v+1,v+2];
        
        // writing to the listout, on the correct spot, a list containing the orignal note, and a changed note.
        lout[spot] = [v, cs[cst[r9]]];

        // and splitting the duration of the original note in two half notes.
        dout[spot] = [tempoh[w],tempoh[w]];

        // flagging that an elaboration has been performed
        trk = true;
       
    } else if (v.constructor === Array) {
        // cs here defines 3 possible lists of 4 notes, because you are doubling 2 notes.
        let cs = [[[v[0],v[0]-1],[v[1],v[1]-1]],[[v[0],v[0]+1],[v[1],v[1]+1]],[[v[0],v[0]+2],[v[1],v[1]+2]]];

        // writing to the listout, on the correct spot, a list containing the orignal two notes, and two changed notes.
        lout[spot] = cs[cst[r9]];
        
        // and splitting the original list of two durations, into a list of 4 durations.
        dout[spot] = [tempoh[w[0]],tempoh[w[0]],tempoh[w[0]],tempoh[w[0]]];
        
        // flagging that an elaboration has been performed.
        trk = true;
        
    } else {
        // in the case both of these tests failed, you should flag that no elaboration has been performed.
        trk = false;    
    }
    return [lout, dout, r9];
}

let arpeggio = function(spot, listin, durin){
    // the next function defines the second fundamental elaboration type, namely the arpeggio. 
    // This function always runs in a certain spot of the original list, and checks how much the 
    // difference is between the two notes, the elaboration will be performed on. 
    // If this difference is the interval between two notes of a chord, a third chord tone will be added, 
    // completing the arpeggio in a certain direction.
    // If this requirement is not met no elaboration is performed

    // The arguments in, again are the spot, the list of notes, and the matching list of durations

    // initializing the local variable that remembers whether the arpeggio 'went' up or 'down'
    let tsize = null;


    
    // below I make copies of the note list and durations list, that were given as arguments to work in.
    let lout = listin.slice(0);
    let dout = durin.slice(0);

    // We have to catch an ecxeption concerning the spot in the list, namely if the index of the spot, 
    // is the last possible spot of the list, the spot + 1 will give an index error
    if (spot != listin.length - 1){
        // we have to capture the values in the spots of the original notelists and duration lists, and 
        // the ones in the spot right behind them to compare.
        let xa = listin[spot];
        let xab = listin[spot + 1];

        let ya = durin[spot];
        let yad = durin[spot + 1];

        // again we have to be sure whether we are elaborating on a spot, that has already been elaborated on, so it would be ints,
        // or not, so it would be lists.
        if (typeof xa === 'number' && typeof xab === 'number'){
         
            // the next variable calculates the size of the interval between the two notes.
            let xad = listin[spot+1]-listin[spot];
            // if (xad === xab - xa){console.log('its the same thing');}
            // if the size is 2, and the durations of the 2 notes are the same. We perform an arpeggio up from the first note.
            if (xad === 2 && ya === yad){
                //tsize is a temporary placeholder for size, we will return this value.
                tsize = 'up';

                // Here we will be adding the chord tone that forms the arpeggio.
                lout[spot] = [xa,xa+1];

                // And then we'll half the duration again.
                dout[spot] = [tempoh[ya],tempoh[ya]];

                // flagging, that an elaboration has occured.
                trk = true;

                // if the size is -2, we perform an arpeggio down from the original note.
            } else if (xad === -2 && ya === yad){
                // tsize is a temporary placeholder for size, we will return this value.
                tsize = 'down';
                
                // Here we will be adding the chord tone that forms the arpeggio.
                lout[spot] = [xa,xa-1];

                // And then we'll half the duration again.
                dout[spot] = [tempoh[ya],tempoh[ya]];

                // flagging, that an elaboration has occured.
                trk = true;

            } else {
                //in the case both of these tests failed, you should flag that no elaboration has been performed.
                trk = false; 

            }
            // if an elaboration has already been performed at this spot, we will try and perform another type of arpeggio on the same spot.
        } else if (xa.constructor === Array) {
    
            // the nex variable calculates the size of the interval between the two notes.
            let xad = listin[spot][1]-listin[spot][0];

            // if the size is 2, and the durations of the 2 notes are the same. We perform an arpeggio up from the first note.
            if (xad === 2 && ya === yad) {
                //tsize is a temporary placeholder for size, we will return this value.
                tsize = 'up';

                // Here we will be adding the chord tone that forms the arpeggio.
                lout[spot] = [xa[0],xa[0]+1,xa[1]];

                // And then we'll half the duration again.
                dout[spot] = [tempoh[ya],tempoh[ya],ya];

                // flagging, that an elaboration has occured.
                trk = true;

            } else if (xad === -2 && ya === yad) {
                
                //tsize is a temporary placeholder for size, we will return this value.
                tsize = 'down';

                // Here we will be adding the chord tone that forms the arpeggio.
                lout[spot] = [xa[0],xa[0]-1,xa[1]];

                // And then we'll half the duration again.
                dout[spot] = [tempoh[ya],tempoh[ya],ya];

                // flagging, that an elaboration has occured.
                trk = true;

            } else {
                //in the case both of these tests failed, you should flag that no elaboration has been performed.
                trk = false;

            }
        } else if (xab.constructor === Array){

            // the nex variable calculates the size of the interval between the two notes.
            let xad = listin[spot+1][0]-listin[spot];

            // if the size is 2, and the durations of the 2 notes are the same. We perform an arpeggio up from the first note.
            if (xad === 2 && ya === yad) {
                //tsize is a temporary placeholder for size, we will return this value.
                tsize = 'up';

                // Here we will be adding the chord tone that forms the arpeggio.
                lout[spot] = [xa[0],xa[0]+1];

                // And then we'll half the duration again.
                dout[spot] = [tempoh[ya],tempoh[ya]];

                // flagging, that an elaboration has occured.
                trk = true;

            } else if (xad === -2 && ya === yad) {
                
                //tsize is a temporary placeholder for size, we will return this value.
                tsize = 'down';

                // Here we will be adding the chord tone that forms the arpeggio.
                lout[spot] = [xa[0],xa[0]-1];

                // And then we'll half the duration again.
                dout[spot] = [tempoh[ya],tempoh[ya]];

                // flagging, that an elaboration has occured.
                trk = true;

            } else {
                //in the case both of these tests failed, you should flag that no elaboration has been performed.
                trk = false;

            }    
        }
    } else {
        trk = false;

    }

    return [lout,dout,tsize];

}

let fundamentalElaboration = function(run){
    // the next function is the fundamental elaboration function. 
    // how it works : an elabf function is called on each each unique index of the esymmetry list. These lists are contained within hl. 
    // After this an elabf2 function is called to fill the parts that have to be elaborated in the same way as the first instance of the symmetry.
    // 
    // tha arguments it takes in is a spot, a lbl and a dbl. 
    // These are : the spot is an instance of the ax list, so basically the first unique index in the symmetry.
    // lbl is the specifice list found in hl
    // and dbl is rhythmic counterpart in dl.
    // The way the elabf function is called is as following, (ax[0],hl[ax[0]],hd[ax[0]]) and then the same with a 1 in stead of the zero, and possibly a 3,

    // A new plan has been made, simply by using the variables as I did them in fundamental 2 I will now attempt fundamental 1.
    let n1 = uniqueElementIndex[run];

    // first step : generating a random list
    let etemp = [0,0,0,0];

    // get a random integer between 0 and 10, r is random
    let random = getRandomInt(0,10);

    // I believe the next two lists, serve the purpose of defining the spots where the elaboration occur 
    // The first contains the probability of each spot getting elaborated on. Meaning if the random number 
    // generated above is smaller that the value in the list no elaboration will occur. And the second contains 
    // the possible spot in the order to be elaborated. rp = spotProbability and sp = spotSequence
    let spotSequence = [0,2,1,3];

    // lbl and dbl are taken from hl and dl. In this hash all the lists are contained as the value to a key value pair.
    // We select the specific list upon which we will elaborate below.
    let x = 0
    let y1 = elaboratedHashList[n1][1];
    let z1 = elaboratedHashDur[n1][1];

    var lbl = [];
    var dbl = [];
    
    var temp = [];
    var temp_l = [];
    var temp_d = [];
    var temp_size = 0;

    do {
        // the if statement determines if the randomly generated number is larger than the required probability for an 
        // elaboration to occur on that spot 
        if (random >= spotProbability[x]){
            // calling the arpeggio function, 
            temp = arpeggio(spotSequence[x],y1,z1);
            temp_l = temp[0];
            temp_d = temp[1];
            temp_size = temp[2];

            // if the arpeggio function didn't do anything try the csk.
            if (trk === false){
                // calling the csk functions.
                temp = consonantSkip(spotSequence[x],y1,z1);
                temp_l = temp[0];
                temp_d = temp[1];
                temp_size = temp[2];

                // etemp conatains the description of the elaboration
                etemp[spotSequence[x]] = ['csk',temp_size];

            } else if (trk === true) {
                // and if the arp function actually ran

                // etemp conatains the description of the elaboration
                etemp[spotSequence[x]] = ['arp',temp_size];
            }
        }

        y1 = temp_l;
        z1 = temp_d;

        // sticking the elaborated list to the end of lbl and dbl.
        // why can't i use push??
        lbl = appender(lbl,temp_l);
        dbl = appender(dbl,temp_d);

        x++;

    } while ( x  < 4 );

    lbl.shift();
    dbl.shift();
    elaboratedHashList[n1][1] = lbl.slice(0);
    elaboratedHashDur[n1][1] = dbl.slice(0);
    elabl = etemp.slice(0);

    let c = 0;

    do {
        if (elaborationSymmetry[c] === elaborationSymmetry[n1]){
            elaborationHash[c] = elabl.slice(0);
        }
        c += 1;
    } while (c < 4);

}

let fundamentalElaboration2 = function(run){
    // The next function works to fill out the non-unique elements in the function. It runs on the indexes contained in axr,
    // And the argument run, means the nth time you run it.

    // grab the index form uniqueelementsindex upon which we will elaborate further.
    let n1 = nonUniqueElementIndex[run];

    // defining some empty local lists
    let y1 = [];
    let y2 = [];
    let z1 = [];
    let z2 = [];

    // grab the lists from the elaboratedHashList and elaboratedHashDur
    y1 = elaboratedHashList[n1][1];
    z1 = elaboratedHashDur[n1][1];

    // creating a multidimensional list from the two above lsx : list dsx dur
    let list = [y1.slice(0)];
    let dur = [z1.slice(0)];

    // a list used for cycling through the spots / sp : spotSequence
    let spotSequence = [0,2,1,3];

    // and a counter
    let x = 0;

    do {
        // create a temporary placeholder to store the spot
        let xn = spotSequence[x];

        // el is variable in which we store which specific elaboration we are to perform.
        el = elaborationHash[nonUniqueElementIndex[run]];
      
        if (typeof el[xn] === 'number' || typeof el[x] === 'number'){
            // when dealing with a csk
            if (el[xn] === 'csk'){
                // run a csk function
                temp = consonantSkip(xn, y1, z1, el[x][1]);
                temp_l = temp[0];
                temp_d = temp[1];
                temp_size = temp[2];

            // when dealing with an arpeggio    
            } else if (el[xn] === 'arp'){
                temp = arpeggio(xn, y1, z1);
                temp_l = temp[0];
                temp_d = temp[1];
                temp_size = temp[2];

                if (trk === false){
                    // run a consonant skip anyway
                    temp = consonantSkip(xn, y1, z1);
                    temp_l = temp[0];
                    temp_d = temp[1];
                    temp_size = temp[2];
                }
            }
        } else {
            // when dealing with a csk
            if (el[xn][0] === 'csk'){
                // run a csk function
                temp = consonantSkip(xn, y1, z1, el[xn][1]);
                temp_l = temp[0];
                temp_d = temp[1];
                temp_size = temp[2];

            // when dealing with an arpeggio    
            } else if (el[xn][0] === 'arp'){
                temp = arpeggio(xn, y1, z1);
                temp_l = temp[0];
                temp_d = temp[1];
                temp_size = temp[2];

                if (trk === false){
                    // run a consonant skip anyway
                    temp = consonantSkip(xn, y1, z1);
                    temp_l = temp[0];
                    temp_d = temp[1];
                    temp_size = temp[2];
                }
            }    
        }

        y1 = temp_l.slice(0)
        z1 = temp_d.slice(0)

        list = appender(list,temp_l);
        dur = appender(dur,temp_d);

        x++;
    } while (x < 4);

    list.shift();
    dur.shift();

    elaboratedHashList[n1][1] = list.slice(0);
    elaboratedHashDur[n1][1] = dur.slice(0);

}

let hashwriter = function(){
    // this function runs after fundamentalelaboration, and what is watns to do is take the value of elabl, which is overwritten each time fundamental elaboration is run,
    // and copy it over the correct spot in elaborationhash. elaborationhash is a copy of elaborationsymmetry, and represents an A A B A type structure.
    // so in this case once fundamentalelaboration is ran over A, hashwriter would copy the elable file from the fundamentelelaboration over all A's.

    // initializing a counter
    let c = 0;

    do {
        if (elaborationSymmetry[c] === elaborationSymmetry[part]){
            elaborationHash[c] = elabl.slice(0);
        }
        c += 1;
    } while (c < 4);

    part += 1;
}

let elaborationFundamentalCaller = function(){
    // depending on how many unique elements are in esym, we either call elabf twice and elabf2 twice, or elabf thrice and elabf2 once
    // the array below gets all the set of all unique elements in the symmetry array.
    let uniqueElements = Array.from(new Set(elaborationSymmetry));

    if (uniqueElements.length === 2){

        fundamentalElaboration(0);

        fundamentalElaboration(1);

        fundamentalElaboration2(0);

        fundamentalElaboration2(1);

    } else if (uniqueElements.length === 3){

        fundamentalElaboration(0);

        fundamentalElaboration(1);

        fundamentalElaboration(2);

        fundamentalElaboration2(0);
        
    }
}

let elaborationOrnamentalCaller = function(){

    // below we are running the elabo function on some of the lists, and iterating over them.
    let h_temp = hll4.slice(0);
    let d_temp = hdl4.slice(0);
    let temp = ornamentalElaboration(h_temp,d_temp);
    l_5 = temp[0];
    d_5 = temp[1];

    let x_temp = l_5.slice(0);
    let y_temp = d_5.slice(0);
    let tempx = ornamentalElaboration(x_temp,y_temp);
    l_6 = tempx[0];
    d_6 = tempx[1];

    l_5 = flatten(l_5);
    d_5 = flatten(d_5);
    l_6 = flatten(l_6);
    d_6 = flatten(d_6);
}

let elaborationPostFormatter = function(){
    // because the structure in elaborationHashList and ElaborationHashDur, was such that each key contained all the different elaborated versions 
    // of one of the four parts of the melody line, we now have to split that file, and make new lists like such : 
    // You tke the first list, from all the keys, and put them one behind the other. You do the same for the second 
    // and third, and go on like this.

    hll1 = elaboratedHashList[0][0].concat(elaboratedHashList[1][0], elaboratedHashList[2][0], elaboratedHashList[3][0]);
    hll2 = elaboratedHashList[0][1][0].concat(elaboratedHashList[1][1][0], elaboratedHashList[2][1][0], elaboratedHashList[3][1][0]);
    hll3 = elaboratedHashList[0][1][1].concat(elaboratedHashList[1][1][1], elaboratedHashList[2][1][1], elaboratedHashList[3][1][1]);
    hll4 = elaboratedHashList[0][1][2].concat(elaboratedHashList[1][1][2], elaboratedHashList[2][1][2], elaboratedHashList[3][1][2]);
    hdl1 = elaboratedHashDur[0][0].concat(elaboratedHashDur[1][0], elaboratedHashDur[2][0], elaboratedHashDur[3][0]);
    hdl2 = elaboratedHashDur[0][1][0].concat(elaboratedHashDur[1][1][0], elaboratedHashDur[2][1][0], elaboratedHashDur[3][1][0]);
    hdl3 = elaboratedHashDur[0][1][1].concat(elaboratedHashDur[1][1][1], elaboratedHashDur[2][1][1], elaboratedHashDur[3][1][1]);
    hdl4 = elaboratedHashDur[0][1][2].concat(elaboratedHashDur[1][1][2], elaboratedHashDur[2][1][2], elaboratedHashDur[3][1][2]);

    hll1 = flatten(hll1);
    hll2 = flatten(hll2);
    hll3 = flatten(hll3);
    hll4 = flatten(hll4);
    hdl1 = flatten(hdl1);
    hdl2 = flatten(hdl2);
    hdl3 = flatten(hdl3);
    hdl4 = flatten(hdl4);

    l_1 = hll1;
    d_1 = hdl1;
    l_2 = hll2;
    d_2 = hdl2;
    l_3 = hll3;
    d_3 = hdl3;
    l_4 = hll4;
    d_4 = hdl4;
}

let ornamental = function(spot, listin, durin){
    // # the next function is a rather large one, that is respeonsible for calling all the above functions, and choosing which one according to restrictions.
    // nn is now ornamental

    let lout = listin.slice(0);
    let dout = durin.slice(0);

    // we are defining the max index in the next variable
    let max_index = lout.length;
    let max_index_1 = max_index - 1;

    // defining the spot on which to elaborate and the one after that
    let sp1 = spot;
    let sp2 = spot + 1;
    
    // this whole process should not run id the spot is on the very last element, and we check that by checking the value of the one after taht
    if (sp2 < max_index_1){
        // va, da, vb and db are the elements we find in the listin and durin elements, at the designated spot.
        va = listin[sp1];
        dx = durin[sp1];
        vb = listin[sp2];
        // da = dx[0] if isinstance(dx,list) === True else dx
        da = dx

        if (da != 1){
            // boolean is a flag to see whether or not there allready was a string present in the variable.
            // This means an elaboration has allready ran on that spot.
            var boolean = false;            

            // here we are getting the type of va.
            if (va.constructor === Array){
                va.map(function(e) { if (typeof(e) === 'string') {boolean = true} } );        
            } else {
                if (va === 'string'){
                    boolean = true;
                }
            }
            // If there is no string in vac
            if (boolean === false){
                // well then pass it
                if (typeof(va) === 'string' || typeof(vb) === 'string'){

                    v = 0;
                } else if (va.constructor === Array || vb.constructor === Array){
                    //if one of the two elements we got the from the listins, is a list itself, we're going to take the first 
                    // element of that list, else we'll just take the element itself.
                    if (va.constructor === Array){ 
                        v0 = va[0];
                    } else {
                        v0 = va;
                    }
                    // the next one gave an error message and was unused, so is commented out : d0 = da[0] if isinstance(va,list) === True else da
                    if (vb.constructor === Array){ 
                        v1 = vb[0];
                    } else {
                        v1 = vb;
                    }
                    // the next one gave an error message and was unused, so is commented out :d0 = db[0] if isinstance(vb,list) === True else db
                    // just getting the numeric value of the second one, implies you can use the note behind the string µ
                    // (for instance '1a' becomes 1)
                    let v = v1.toString().replace(/\D/g, "") - v0;

                } else {
                // If there are no strings and no lists, just take the numerical value

                v0 = va;
                v1 = vb;

                // v is the difference between the two notes, that we will be elaboratin on
                v = v1 - v0;
                }

                // If they are the same note
                if (v === 0){
                    // and the first one is an int.
                    if (typeof(va) === 'number'){
                        // You're going to randomly choose one of the following functions.
                        v = [enrf(spot,lout,dout),ecsf(spot,lout,dout)];
                        let temp = v[Math.floor(Math.random() * v.length)];

                        lout = temp[0].slice(0);
                        dout = temp[1].slice(0);
                        e1 += 1;

                        // flag that an elaboration has occured.
                        trk = true;

                    } else if (va.constructor === Array){
                        // if the first element is a list.
                        if (va[0] > va[1]){
                            // in which the first element represents a lower note than the second one
                            let temp = enr_a(spot, lout, dout); 
                            lout = temp[0].slice(0);
                            dout = temp[1].slice(0);

                            e2 += 1;                        

                            // flag that an elaboration has occured
                            trk = true;
                        } else if (va[0] < va[1]){  // If the second element represents a higher note than the first
                            // perform the following
                            let temp = enr_b(spot, lout, dout);
                            lout = temp[0].slice(0);
                            dout = temp[1].slice(0);

                            e3 += 1;

                            // flag that an elaboration has occured.
                            trk = true;
                        } else { // if they are the same note or something even crazier
                            // do this
                            let temp = enr_c(spot, lout, dout);
                            lout = temp[0].slice(0);
                            dout = temp[1]/slice(0);
                            
                            e4 += 1;
                            
                            // and flag that an elaboration has occured.
                            trk = true;
                        }
                    } else {
                        trk = false;
                    }
                } else if (v === 1){ // If the second note is higher than the first.

                    // If the first note is an int
                    if (typeof(va) === 'number'){
                        // perform the following
                        v = [enaf(spot,lout,dout), ecsr(spot,lout,dout)];
                        let temp = v[Math.floor(Math.random() * v.length)];

                        lout = temp[0].slice(0);
                        dout = temp[1].slice(0);
                        e5 += 1;

                        // flag that an elaboration has occured
                        trk = true;
                    } else if (va.contructor === Array){ // if the first element is a list
                        // perform the following
                        let temp = enaa(spot,lout,dout);
                        lout = temp[0].slice(0);
                        dout = temp[1].slice(0)
                        
                        e6 += 1;

                        // flag that an elaboration has occured
                        trk = true;
                    } else {
                        trk = false;
                    }
                } else if (v === -1){ // if the second note is lower than the first

                    // and if the first note is an int
                    if (typeof(va) === 'number'){
                        // perform this
                        v = [ecsf(spot, lout, dout), enbf(spot,lout,dout)];
                        let temp = v[Math.floor(Math.random() * v.length)];

                        lout = temp[0].slice(0);
                        dout = temp[1].slice(0);
                        e7 += 1;

                        // and flag that an elaboration has occured.
                        trk = true;
                    } else if (va.constructor === Array){ // if we're dealing with a list in the first element.
                    
                        // perferm the following
                        let temp = enba(spot,lout,dout);
                        lout = temp[0].slice(0);
                        dout = temp[1].slice(0);
                        e8 += 1;

                        // and flag elaboration has actually happened
                        trk = true;
                    } else {
                        // well you can't draw blood from a stone, can you?
                        trk = false;
                    }
                } else if (v === 2){ // when dealing with larger jumps between notes, in this case 2 notes.

                    // and the first element is an int
                    if (typeof(va) === 'number'){ // perform on of these two function, ran randomly.
                        v = [ela(spot,lout,dout),eof(spot,lout,dout)];
                        let temp = v[Math.floor(Math.random() * v.length)];
                        lout = temp[0].slice(0);
                        dout = temp[1].slice(0);
                        e9 += 1;

                        // don't forget to flag
                        trk = true;
                    } else if (va.constructor === Array){ // when we're dealing with a list, for a first element.
                        // perform this
                        v = [eoa(spot,lout,dout),ela(spot,lout,dout)];
                        let temp = v[Math.floor(Math.random() * v.length)];
                        lout = temp[0].slice(0);
                        dout = temp[1].slice(0);

                        e10 += 1;

                        // and flag it.
                        trk = true;
                    } else {
                        // Well if the shit hits the fan
                        trk = false;
                    }
                } else if (v === -2){ // if the second note is 2 notes lower than the first

                    // and the first element is an int
                    if (typeof va === 'number'){
                        // do one of these
                        v = [ecsf(spot,lout,dout),elb(spot,lout,dout)];
                        let temp = v[Math.floor(Math.random() * v.length)];
                        lout = temp[0].slice(0);
                        dout = temp[1].slice(0);

                        e11 += 1;

                        // and flag it
                        trk = true;

                    // if the first element is a list
                    }else if (va.constructor === Array){ // do one of the following
                        v = [ecsa(spot,lout,dout),elb(spot,lout,dout)];
                        let temp = v[Math.floor(Math.random() * v.length)];
                        lout = temp[0].slice(0);
                        dout = temp[1].slice(0);
                        e12 += 1;

                        // flaaag
                        trk = true;
                    }
                } else if (v >= 3){ // THIS USED TO BE GETNUM MEANING A STRING TURNED INTO A NUMBER if we're jumping three notes in one go

                    // and the first element is an int
                    if (typeof va === 'number'){
                        // do this
                        let temp = eof(spot,lout,dout);
                        lout = temp[0].slice(0);
                        dout = temp[1].slice(0);
                        
                        e13 += 1;
                       
                        // & flag it;
                        trk = true;
                    } else if (va.constructor === Array){ // if the first element is a list
                        // do this.
                        let temp = eoa(spot,lout,dout);
                        lout = temp[0].slice(0);
                        dout = temp[1].slice(0);

                        e14 += 1;

                        // and flaaaag
                        trk = true;
                    } else {
                        // well I guess that's it then.
                        trk = false;
                    }
                } else {
                    console.log('1331');
                }

                let temporary_l = lout.slice(0);
                temporary_l = flatten(temporary_l);
                let temporary_d = dout.slice(0);
                temporary_d = flatten(temporary_d);

                if (temporary_l.length === temporary_d.length){
                    return [lout, dout];
                } else {
                    trk = false;
                    return [listin, durin];
                }

            } else {
                return [lout, dout];
            }
        } else {
            return [lout, dout];
        }
    } else {
        return [lout,dout];
    }
}

let ornamentalElaboration = function(listin, durin){
    // the following elabo function is responsible for directing the nn function above to run several times per melody line, 
    // and deciding at what spots it will run. It will also check whether the function has actually run, and whether it needs 
    // to run once more.

    // initializing two counters below.
    let r6 = 0;
    let r4 = 0;

    let lout = listin.slice(0);
    let dout = durin.slice(0);

    do{
        // choose a random number dfrom the list below. This list represents a weighted random set for choosing the spot.
        let r3 = a3[Math.floor(Math.random() * a3.length)];

        // looping over all the values in r1, and kicking all the instances of the value chosen above in r3 from the list.
        r1 = r1.filter(function(a){return a !== r3});

        // the following lists, loops through each spot in the duration list, and holds the sum of them at that point.
        let sum = 0;
        let duration_sum = [0];


        for (i = 0; i < dout.length; i++) {
            let o = 0;
            if (dout[i].constructor === Array){
                o = dout[i].reduce((x, y) => x + y);
            } else {
            o = Number(dout[i]);
            }

            sum += o;
            duration_sum.push(sum);
        }

        // console.log('this is the duration of the list' + duration_sum);

        // now I am going to get the indexes of the multiples of 16, and store them in spotlr3
        let spotlr3 = [];

        for (i = 0; i < duration_sum.length; i++){
            y = duration_sum[i];
            if (y % 16 === 0){
                spotlr3.push(duration_sum.indexOf(y));
            } 
        }


        spotlr3.pop();

        // using these indexes, that give us the spots of each bar in the melody line, I will now get full lists of the 8 spots in which elaboration will occur.
        // we will cycle through the indexes in the duration_sum list, and either stay on that index, or skip one further, or two. 
        let spotlr = spotlr4[Math.floor(Math.random() * spotlr4.length)];
        let spotlr2 = spotlr.slice(0);


        for (i = 0; i < spotlr.length; i++){
            // add the value in the random spot chosen above to the index.
            spotlr3[i] = spotlr3[i] + spotlr[i];
            spotlr3[i] = spotlr3[i] + r3;
        }

        do {
            // cycling through all the possible spots from the list above,
            let r5 = spotlr3[r4];
            // and perform the nn function on it.
            let temp = ornamental(r5, lout, dout);
            lout = temp[0];
            dout = temp[1];

            r4 = r4 + 1;

        } while(r4 < 8);

        // resetting the loop
        r4 = 0
        r6 += 1
        
    } while (r6 < 3);

    // reset the flag
    trk = false;

    return [lout, dout];
}

let aesthetics = function(aes1, aes2, aes3, aes4, aes5, aes6){
    let aeslist = [aes1, aes2, aes3, aes4, aes5, aes6];

    for (i = 0; i < aeslist.length; i++){
        let x = aeslist[i];

        if (x[x.length-1] + x[x.length-2] + x[x.length-3] === 16 ){
            x[x.length-1] = 4;
            x[x.length-2] = 4;
            x[x.length-3] = 8;
        } 
    }
}

let bassLineGenerator = function(melodyList, durList){   

    let bassList = [];
    let bassDur = [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
    //this hash registers how many dissonances there are
    let bassDissonance = {
        0 : 0,
        1 : 0,
        2 : 0,
        3 : 0,
        };

    let bassChoice = 0;

    let sum = 0;
    let part = 0;
    // quarterNoteList contains all the notes on the beats.
    let quarterNoteList = [];
    let splitList = [];
    let tempArray = []

    for (f = durList.length -1 ; f >= 0; f--){
        if (sum % 4 === 0){
            if (durList[f] === 8){
                quarterNoteList.push('r');
                quarterNoteList.push(melodyList[f]);

                tempArray.push('r');
                tempArray.push(melodyList[f]);

            } else {
                quarterNoteList.push(melodyList[f]);
                tempArray.push(melodyList[f]);

                if (sum % 16 === 0){
                    splitList.push(tempArray);
                    tempArray = [];
                }
            }
    
        }
        sum += durList[f];
    }

    quarterNoteList.reverse();
    splitList.reverse();
    // getting every 4th element from the quarter note list, which is basically where the chord will change

    let dissonantList = quarterNoteList.slice(0);

    
    for ( d = 0 ; d < dissonantList.length ; d++ ){
        dissonantList[d] = [];
    }
    


    
    //cycling through the values in that list
    for ( i = 0 ; i < splitList.length; i++){
        //creating a temporary list that resets every time we cycled throught the melody list
        let templist = [];  
        
        for (h = 0 ; h < splitList[i].length ; h++){
            //selecting the note, and the chord degree at the point we are at
            let theNote = splitList[i][h].toString();
            let theChord = chordList[i];

            //checking whether this melody note has obvious dissonances in the dissonance hash
            if (dissonanceKeys.includes(theNote) === true){
                //selecting all the possible chord degrees and bass notes that are dissonant together
                dissonant_relative = dissonance[theNote];

                for ( j = 0 ; j < dissonant_relative.length ; j++){
                    //checking for a match
                    if (dissonant_relative[j][0] === theChord)
                        //adding the match to the templist
                        templist.push(dissonant_relative[j][1]);
                }
                    //writing the matches to the spot in which we are looking
                    dissonantList[h].push(templist);
                    dissonantList[h] = flatten(dissonantList[h]);


                } else {
                    //writing the boolean None to the spots, were there will be no dissonances
                    dissonantList[h].push(templist);
                    dissonantList[h] = flatten(dissonantList[h]);

            }         
        }
    }         
    
    for (i = 0; i < dissonantList.length ; i++){
        dissonantList[i] = flatten(dissonantList[i].slice(0));
        let superTemp = Array.from(new Set(dissonantList[i]));
        dissonantList[i] = superTemp.slice(0);

    }

    //for every element in the basscheck hash above, that contains all the crossreference lists, we compare the value to the dissonant_list that contains all the no go zones.
    // each key in the basscheck hash contains information about each corresponding bassline in the bassline hash
    // we register in another hash, that uses the same keys how many similarities there are and we will then select the ones with NO similarities.
    // This means no obvious dissonance can be played.
   
    // for each bassline we are cycling through all the possible dissonance and checking if they are similar to the bassnotes in that spot.
    for (j = 0 ; j < dissonantList.length ; j++){

        let bassCount = 0;

        let listOfKeys = [];

        if (j % 4 === 0 && j !== 0 || j === 31){
            let minimum = 0;
            let flagR = false;

            do{
                for( w = 0; w < Object.keys(bassDissonance).length || 4 < minimum; w++ ){

                    if (bassDissonance[w] === minimum){
                        listOfKeys.push(w);
                        flagR = true;
                    }
                }
                minimum += 1;

            
            } while (flagR === false || minimum < 4);
        
        bassChoice = listOfKeys[Math.floor(Math.random() * listOfKeys.length)];
        bassList.push(bassLines[bassChoice]);

        // reset all the variables.
        listOfKeys = [];
        bassDissonance = {
            0 : 0,
            1 : 0,
            2 : 0,
            3 : 0,
            };
        }

        // cycle through all possible basslines
        for (i = 0 ; i < Object.keys(bassCheck).length ; i++){
            let bassTemp = bassCheck[i].slice(0);

            // let v = bassTemp[j];
            if ( typeof dissonantList[j] === 'object' && dissonantList[j] !== null){

                // so if the dissonances in that spot is actually an array I will have to cycle through that array
                let k = 0;
                for (k = 0; k < dissonantList[j].length; k++){

                    if (bassTemp[bassCount].toString() === dissonantList[j][k].toString()){
                        bassDissonance[i] += 1;
                    }
                }

            } else {
                if (bassTemp[basscount].toString() === dissonantList[j].toString()){
                    bassDissonance[i] += 1;                    
                }
            }
        }     
    } 
    
    bassList = flatten(bassList);

    return [ bassList , bassDur];


}

// ------------------------------------------------------------------------------------main function

let main = function(){

    variableAssigner();

    metre = 4;

    metreGenerator();
    chordGenerator();
    symmetryGenerator();
    fundamentalLineGenerator();
    fundamentalDurationGenerator();
    elaborationSymmetryGenerator();
    elaborationHashGenerator();
    elaborationFormatter();
    elaborationCollectorGenerator();


    elaborationFundamentalCaller();
    elaborationPostFormatter();
    elaborationOrnamentalCaller();

    // writing basslines for all the melodic lines
    [b_1, e_1] = bassLineGenerator(l_1, d_1);
    [b_2, e_2] = bassLineGenerator(l_2, d_2);
    [b_3, e_3] = bassLineGenerator(l_3, d_3);
    [b_4, e_4] = bassLineGenerator(l_4, d_4);
    [b_5, e_5] = bassLineGenerator(l_5, d_5);
    [b_6, e_6] = bassLineGenerator(l_6, d_6);


    aesthetics(d_1, d_2, d_3, d_4, d_5, d_6);

}

// ------------------------------------------------------------------------------------small function

// WORKING ON CONVERTING THIS FUNCTION

// this one simply serves so I don't have to change the way I wrote the functions in all the ornamental elaborations.
function str(first) {
    let result = first.toString();
    return result;
}

function appender(org, app) {
    let x = [];
    if (org.filter(Array.isArray).length === 0){
        x.push(org);
        x.push(app);
    } else {
        x = org.slice(0);
        x.push(app);
    }

    return x;
}

// split array into equal parts
function splitArray(array, parts) {
    const chunked_arr = [];
    let size = array.length / parts;
    let index = 0;
    while (index < array.length) {
      chunked_arr.push(array.slice(index, size + index));
      index += size;
    }
    return chunked_arr;
  }

// get the index of the lowest number
function indexOfSmallest(a) {
    var lowest = 0;
    for (var i = 1; i < a.length; i++) {
     if (a[i] < a[lowest]) lowest = i;
    }
    return lowest;
   }
// get a random integer in a certain range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// flatten list
function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

// delete function from list
const deleteArrayValue = function(arr, value) {
    for( let i = 0; i < arr.length; i++){ 
        if ( arr[i] === value) {
            arr.splice(i, 1); 
        }
    }
    return arr;    
}

// getting unique elements from an array
// let uniqueItems = Array.from(new Set(items))

// randomly generated N = 40 length array 0 <= A[N] <= 39
const randomArray = (length, max) => { return Array.from({length: length}, () => Math.floor(Math.random() * max)) };

// function to replace array elements called by, arrayname.replace(to replace, replace by)
Array.prototype.replace = function(t, v) {
    if (this.indexOf(t)!= -1)
        this[this.map((e, i) => [i, e]).filter(e => e[1] === t)[0][0]] = v;
  };

// get the difference between two arrays
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

// Get the max and min value from an array
Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };

//let elementName = arrayName[Math.floor(Math.random()*ArrayName.length)];
// choose random array element

// ------------------------------------------------------------------------------------define all variables to be initialized in variable function here

// from metre generator
var lengthRand_3, lengthRand_4, maxRand_3, maxRand_4, lengthRand_MuroBox, maxRand_MuroBox, offSet_MuroBox;

// fundamentalLineGenerator
var reachMax, reachMin, lineSize;

// fundamentalDurationGenerator
var duration_3, duration_4;

// consonantSkip
var cst;

// fundamentalElaboration
var spotProbability;

// ornamentalElaboration
var a3, spotlr4;

// ------------------------------------------------------------------------------------define all the constants and variables that we will use throughout here

// these variables are used in the ornamental elaboration function
var e1 = 0
var e2 = 0
var e3 = 0
var e4 = 0
var e5 = 0
var e6 = 0
var e7 = 0
var e8 = 0
var e9 = 0
var e10 = 0
var e11 = 0
var e12 = 0
var e13 = 0
var e14 = 0


// only for testing purposes
var testInt1 = null;
var testInt2 = null;
var testInt3 = null;

var testArr1 = [];
var testArr2 = [];
var testArr3 = [];

// the metre of the piece can be generated by chance, either 3/4 or 4/4. 
var metre = 0;

// the next two variables are used to define the root note pairs l1, l2 and l3
var lengthRand = 0;
var maxRand = 0;

// the length of the chords
var dur = [4,4,4,4];

// tempo units
const s1 = 1;
const s2 = 2;
const s3 = 4;
const s4 = 8;

// trk is a boolean used to check whether elaborations has occured
var trk = false;

var cheat = true;

var part = 0;
var part1 = 0;

// this on is used in ornamentalElaboration
var r1 = [0,0,0,0,0,0,2,2,2,2,1,1,1,3];

// below we are designating the lists we acquired at different times during this script to the correct variables.
var l_1 = [];
var d_1 = [];
var l_2 = [];
var d_2 = [];
var l_3 = [];
var d_3 = [];
var l_4 = [];
var d_4 = [];
var l_5 = [];
var d_5 = [];
var l_6 = [];
var d_6 = [];

// the b's are the basslines and the e's are the duration lists of the basslines
var b_1 = [];
var e_1 = [];
var b_2 = [];
var e_2 = [];
var b_3 = [];
var e_3 = [];
var b_4 = [];
var e_4 = [];
var b_5 = [];
var e_5 = [];
var b_6 = [];
var e_6 = [];

// below are the variabels for the basslines
var bassLine = [];
var bassLines = {};
var bassCheck = {};
var dissonance = {};
var dissonance_MuroBox = {};
var dissonance_Standard = {};
var chordList = [];

var fifth;
var third;
var ground;
var octave;


// ------------------------------------------------------------------------------------define all the arrays below here

// deg list is what we will use to store the chord progression
var deg = [];
// array containing all the chord progressions
var deghash = [];

// symmetry is a list that contains various types of structures that will be used for generating notes. e.g : A,A,B,A or A,B,B,A
// this symmetry is used to generate where the base notes will fall, another will be used to determine the placing of elaborations.
// it is initialized below
var symmetry = [0,0,0,0];

// Next we will define a variable named esym. esymmetry is a list. It has the same function as the symmetry list has, because it defines a structure 
// like : A,A,B,A or A, B, A, B. Oly it does this for the placement of elaborations. so, e.g. : 'csk', 'csk', 'arp', 'csk'
var elaborationSymmetry = [0,0,0,0];

// the array that will be used to store the root note list
var rootList = [];

// the next three lists contain all the root lists for chord tone generation
var l1 = [];
var l2 = [];
var l3 = [];

// the next variable is used to store the above 3 lists, for later optimizing
var ltransformation = [];

// the key in this dict is the chord degree, and the value associated with that key contains the consonant notes.
const cthc = [ [2,5] , [9,9] , [0,1,3,4] , [2,5] , [1,4] , [0,2,3,5] , [9,9] ];

// for each of the l1, l2 and l3 lists, I made a mirror list, in which I calculate how many consonant notes are present in that location.
var ll1 = [0,1,2,3];
var ll2 = [0,1,2,3];
var ll3 = [0,1,2,3];

// the lists defining the fundamental line, the very first lines on which will be elaborated.
var lfun = [];
var dfun = [];

// the hashes on which we will be elaborating
var lA0 = [];
var lB0 = [];
var lC0 = [];
var lD0 = [];

// elabl is a multidimensional array, to which all the information describing the csk, or arp function will be written. 
// including their size or direction in case of an arpeggio. This serves so I can reproduce the same song on a mathematical basis.
var elabl = [[]];

// Initializing the matching duration lists, to the lists built two parts above.
var dA0 = [[s4,s4,s4,s4],[s4,s4,s4,s4]];
var dB0 = [[s4,s4,s4,s4],[s4,s4,s4,s4]];
var dC0 = [[s4,s4,s4,s4],[s4,s4,s4,s4]];
var dD0 = [[s4,s4,s4,s4],[s4,s4,s4,s4]];

// some variables for getting the location of  unique elements in the elaborationHash
// ax is now uniqueElementIndex and axr is now nonUniqueElementIndex
var uniqueElementIndex = [];
var nonUniqueElementIndex = [];

// fundamental elabroated lists
var hll1 = [];
var hdl1 = [];
var hll2 = [];
var hdl2 = [];
var hll3 = [];
var hdl3 = [];
var hll4 = [];
var hdl4 = [];


// ------------------------------------------------------------------------------------define all the objects / hashtables here

// hashtable used to translate between tempo units
const tempoh = { [s4] : s3 , [s3] : s2 , [s2] : s1};

// elaboration map used to store which elaborations have been used
var elaborationHash = {};

// map used to store the lists that have been elaborated
var elaboratedHashList = {};
var elaboratedHashDur = {};

// ------------------------------------------------------------------------------------actual code


main();

// ------------------------------------------------------------------------------------toMIDI part


var MidiWriter = require('midi-writer-js');


// Start with a new track, containing all the different tracks in it.

var track = [];

// first track is a metronome
track = new MidiWriter.Track();




// Define an instrument (optional):
var lazy = 11;

track.addEvent(new MidiWriter.ProgramChangeEvent({instrument : lazy}));


// the next object will contain possible bass notes for using during which chord. The key is the name of the note, in the bassline.
// this will contain an multidimensional list. The chord number is ordered here. so bassScale['ground'][0] will give the root note
// or an array of possbile root notes, of the 0 chord, or the C chord.
const bassScale = {
    'ground' : [ ['C4'], ['D4'], ['E4'], ['F4'], ['G4'], ['A5'], ['B5'] ],
    'third' : [ ['E4'], ['F4'], ['G4'], ['A5'], ['B5'], ['C5'], ['D5'] ],
    'fifth' : [ ['G4'], ['A5'], ['B5'], ['C5'], ['D5'], ['E5'], ['F5'] ],
}

const melodyScale = {
    '0' : 'E5',
    '1' : 'G5',
    '2' : 'C6',
    '3' : 'E6',
    '0a' : 'F5',
    '1a' : 'A5',
    '2a' : 'D6',
    '3a' : 'F6',
    '0b' : 'D5',
    '1b' : 'F5',
    '2b' : 'B5',
    '3b' : 'D6'
};


var list = l_6.concat(l_5, l_4, l_3, l_2, l_1);
var dur = d_6.concat(d_5, d_4, d_3, d_2, d_1);

var bass = b_6.concat(b_5, b_4, b_3, b_2, b_1);
var bassDur = e_6.concat(e_5, e_4, e_3, e_2, e_1);
var chordl = [3,3,3,3,2,2,2,2,1,1,1,1,0,0,0,0,3,3,3,3,2,2,2,2,1,1,1,1,0,0,0,0];
var chordList = chordl.concat(chordl, chordl, chordl, chordl, chordl);

console.log(JSON.stringify(bassDur));

// I am mapping out the values in my lists tot the values I need to generate the MIDI files.
var x = list.map( x => melodyScale[x]);
// not found in the 'notehash' gives a null value, this needs to be a '#' value. The next line maps that into a new array.
var melodyList = x.map( x => (x == null) ? x = '#' : x = x);
var bassLine = bass.map( (x, i) => bassScale[x][chordList[i]]);

// the tempo should never progress linearly. I will be using the top end of a sigmoid function to simulte a gradual decrease in bpm.

const k = 200;
function sigmoid(z) {
  return 600 / (1 + Math.exp(-z/k)) - 250 ;
}

var tempo = new Array(dur.reduce((a, b) => a + b, 0)).fill('250');
var tempoTemp = tempo.map( (x, index) => tempo[index + 1] = x - 0.2 );

var tempoList = tempoTemp.map( (x, index) => tempoTemp[index] = sigmoid(x) );

//------------------------------------ the function for loading in each note specifically

// the parser function, cycles through the melody and bass lists and makes one line out of it.

var parser = function(melody, duration, bass, bassduration){
    let result = [];
    let counter = 0;
    let note = 0;
    for (i = 0; i < dur.reduce((a, b) => a + b, 0); i++){
    
        if (counter === i){
            // write the note
            result.push(melody[note]);

    
            // add one to the note variable
            note += 1;
            
            // wait the appropiate amount of notes from the duration list.
            counter += duration[note];
    
        } else {
            // write a null note
            result.push('#');
        }
    }
    
    counter = 0;
    note = 0;
    
    for (i = 0; i < dur.reduce((a, b) => a + b, 0); i++){
    
        if (counter === i){
            // write the note
            if (result[i] === '#'){
                result[i] = bass[note];
            } else {
                result[i] = [result[i] , bass[note][0]];
            } 
    
            // add one to the note variable
            note += 1;
            
            // wait the appropiate amount of notes from the duration list.
            counter += bassduration[note];
    
        } 
    } 
    console.log(JSON.stringify(result));
    return result;
}


var lullabye = parser(melodyList, dur, bassLine, bassDur);

// ------------------------------------ the function below actually writes to the object that will become a midi file.

var writer = function(list, bpm){
    for (i = 0 ; i < list.length; i++){

        track.setTempo(bpm[i]);
        track.addEvent( new MidiWriter.NoteEvent({pitch: list[i], duration: '8', velocity: (list[i] === '#') ? '1' : '64' }));

    }
}

writer(lullabye, tempoList);
console.log(JSON.stringify(chordList));
// ------------------------------------logging to console and generating the file
var write = new MidiWriter.Writer(track);
//console.log(write.dataUri());

write.saveMIDI('midi/test');
