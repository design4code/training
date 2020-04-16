export class DownloadContent {

    constructor() {
        this.getDownloads();
    }

    getDownloads() {
        const files = [
            "/src/documents/1_p.md",
            '/src/documents/2_p.md',
            '/src/documents/3_p.md'
        ];
        const downloads = [];
        files.forEach(file => downloads.push(fetch(file).then(resolve => resolve.text())));
        return Promise.all(downloads);
    }
}