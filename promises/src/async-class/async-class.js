export class AsyncClass {
    constructor() {
        this.showDownloads();
    }

    showDownloads() {
        this.getDownloads();
    }

    getDownloads() {
        
         fetch('/src/documents/1_p.md')
             .then( resolve => resolve.text())
             .then( data => {
                 document.querySelector("#content-container pre").innerHTML = data;
             })
             .catch( err => console.log(err));
    }
}