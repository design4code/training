import {DownloadContent} from "./../download-content/download-content.js";

export class PrintContent {
    constructor() {
        this._showDownloads();
    }

    _showDownloads() {
        const downloadedContent = new DownloadContent();

        downloadedContent.getDownloads().then(downloads => {

            const list = document.querySelector("pre");
            const fragment = new DocumentFragment();

            for (let download of downloads) {
                const p = document.createElement("p");
                p.innerHTML = download;
                fragment.appendChild(p)
            }

            list.appendChild(fragment)

        })
    }
}