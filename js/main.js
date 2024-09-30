/* fake-loading */
let fakeLoad = document.getElementById('fake-loading');
let fakeLoadProcess = ()=>{
    fakeLoad.classList.add('on');
    let hideIntro = ()=>{
        fakeLoad.classList.add('off');
    }
    setTimeout(hideIntro, 2000);

}

fakeLoadProcess();
