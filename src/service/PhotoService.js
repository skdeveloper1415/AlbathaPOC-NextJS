export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: 'assets/images/Galleria-img.png',
                thumbnailImageSrc: 'assets/images/Galleria-img.png',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'assets/images/Galleria-img01.png',
                thumbnailImageSrc: 'assets/images/Galleria-img01.png',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'assets/images/Galleria-img02.png',
                thumbnailImageSrc: 'assets/images/Galleria-img02.png',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: 'assets/images/Galleria-img.png',
                thumbnailImageSrc: 'assets/images/Galleria-img.png',
                alt: 'Description for Image 4',
                title: 'Title 4'
            },
            {
                itemImageSrc: 'assets/images/Galleria-img01.png',
                thumbnailImageSrc: 'assets/images/Galleria-img01.png',
                alt: 'Description for Image 5',
                title: 'Title 5'
            }
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};

