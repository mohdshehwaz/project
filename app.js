fetch('https://jsonplaceholder.typicode.com/posts')
.then(data=>data.json())
.then(data=>categoryList(data))


const magic=[]
const third=[]
const five =[]
const apiData=[]

function categoryList(apidata){
    apiData.push(...apidata)
    apiData.forEach(index => {

        if(index.id%3==0 && index.id%5==0){
            magic.push(index.id)
        }
        else if(index.id%3==0){
            third.push(index.id)
        }
        else if(index.id%5==0){
            five.push(index.id);
        }
    });
    
    
}


const maindiv = document.getElementById('maindivid');

const btnContainer=document.getElementById('buttondiv');

btnContainer.addEventListener('click',function(event){

    //console.log(event.target.id);

    const ch=document.getElementById('maindivid');
    
   try{
    ch.firstChild.remove();
   }catch{

   }

   
})


// function displayMagic(magic,third,five,apiData){

    // for magic button
    const magicbtn =document.getElementById('magicbtn')
    magicbtn.addEventListener('click',e=>{
        e.preventDefault()
        const mainDivChild=document.createElement('div');
        mainDivChild.setAttribute('class','main-div-child');
        const div1 = document.createElement('div')
        div1.style.width='100%'
        div1.style.textAlign='center'
        div1.style.background='grey'
        const head1 = document.createElement('h3')
        head1.textContent='Magic'
        head1.style.height='50px'
        div1.appendChild(head1)

        mainDivChild.appendChild(div1)
        mainDivChild.style.background='lightsalmon'

        maindiv.append(mainDivChild)

        for(index=0;index<magic.length;index++){

            const magicData = apiData.find(element=>{
                    return element.id==magic[index]
            })
            const div1 = document.createElement('div')
            div1.style.width='50rem'

            const userid = document.createElement('p')
            userid.textContent = `userId: ${magicData.userId}`;
            div1.style.textAlign='center'
            div1.appendChild(userid)

            const id = document.createElement('p')
            id.textContent = `id: ${magicData.id}`;
            div1.appendChild(id)

            const title = document.createElement('p')
            title.textContent = `title: ${magicData.title}`;
            div1.appendChild(title)

            const body = document.createElement('p')
            body.textContent = `userId: ${magicData.body}`;
            div1.appendChild(body)
            div1.style.borderBottom='1px solid grey'
            mainDivChild.appendChild(div1)
            
        }
        
        maindiv.append(mainDivChild);

    })
// }

    // for button five
// function displayFive(magic,third,five,apiData){

    const fivebtn =document.getElementById('fivebtn')
    fivebtn.addEventListener('click',e=>{
        e.preventDefault()

        const mainDivChild=document.createElement('div');
        mainDivChild.setAttribute('class','main-div-child');

        const div1 = document.createElement('div')
        div1.style.width='100%'
        div1.style.textAlign='center'
        div1.style.background='grey'
        const head1 = document.createElement('h3')
        head1.textContent='Five'
        head1.style.height='50px'
        div1.appendChild(head1)

        mainDivChild.appendChild(div1)
        mainDivChild.style.background='brown'

        for(index=0;index<five.length;index++){

            const magicData = apiData.find(element=>{
                    return element.id==five[index]
            })
            console.log(magicData)
            const div1 = document.createElement('div')
            div1.style.width='50rem'

            const userid = document.createElement('p')
            userid.textContent = `userId: ${magicData.userId}`;
            div1.style.textAlign='center'
            div1.appendChild(userid)

            const id = document.createElement('p')
            id.textContent = `id: ${magicData.id}`;
            div1.appendChild(id)

            const title = document.createElement('p')
            title.textContent = `title: ${magicData.title}`;
            div1.appendChild(title)

            const body = document.createElement('p')
            body.textContent = `userId: ${magicData.body}`;
            div1.appendChild(body)
            div1.style.borderBottom='1px solid grey'
            mainDivChild.appendChild(div1)
            
        }
        
        maindiv.append(mainDivChild);

    })
// }

    // Third button
// function displayThird(magic,third,five,apiData){


    const thirdbtn =document.getElementById('thirdbtn')
    thirdbtn.addEventListener('click',e=>{
        e.preventDefault()

        const mainDivChild=document.createElement('div');
        mainDivChild.setAttribute('class','main-div-child');

        const div1 = document.createElement('div')
        div1.style.width='100%'
        div1.style.textAlign='center'
        div1.style.background='grey'
        const head1 = document.createElement('h3')
        head1.style.height='50px'
        head1.textContent='Third'
        div1.appendChild(head1)

        mainDivChild.appendChild(div1)
        mainDivChild.style.background='lightgrey'

        for(index=0;index<third.length;index++){

            const magicData = apiData.find(element=>{
                    return element.id==third[index]
            })
            const div1 = document.createElement('div')
            div1.style.width='50rem'

            const userid = document.createElement('p')
            userid.textContent = `userId: ${magicData.userId}`;
            div1.style.textAlign='center'
            div1.appendChild(userid)

            const id = document.createElement('p')
            id.textContent = `id: ${magicData.id}`;
            div1.appendChild(id)

            const title = document.createElement('p')
            title.textContent = `title: ${magicData.title}`;
            div1.appendChild(title)

            const body = document.createElement('p')
            body.textContent = `userId: ${magicData.body}`;
            div1.appendChild(body)
            div1.style.borderBottom='1px solid grey'
            mainDivChild.appendChild(div1)
            
        }
    
        maindiv.append(mainDivChild);


    })
// }