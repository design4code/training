import {DownloadContent} from "./../download-content/download-content.js";

export class PrintContent {
    constructor() {
        this.showDownloads();
    }

    showDownloads() {
        const downloadedContent = new DownloadContent();

        downloadedContent.getDownloads().then(alldownloads => {

            const list = document.querySelector("pre");

            const fragment = new DocumentFragment();

            for (let download of alldownloads) {
                const p = document.createElement("p");
                p.innerHTML = `${download}`;
                fragment.appendChild(p)
            }

            list.appendChild(fragment)

        })
    }
}