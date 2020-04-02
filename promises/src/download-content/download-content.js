export class DownloadContent {

    constructor() {
        this.getDownloads();
    }

    getDownloads() {
        const downloads = [
            "/src/documents/1_p.md",
            '/src/documents/2_p.md',
            '/src/documents/3_p.md'
        ]

         const allDownloads = downloads.map(download => fetch(download)
             .then( resolve => resolve.text())
             .catch( err => console.log(err))
         );
        return Promise.all(allDownloads);
    }
}