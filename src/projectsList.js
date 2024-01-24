import shopfrontThumb from './images/shopfront_thumb.png';
import restaurantThumb from './images/restaurant_thumb.png';
import textEditorThumb from './images/text_editor_thumb.png';
import thesaurusThumb from './images/thesaurus_thumb.png';

const projectsList = [
    {
        name: "Madelane",
        description: "A clothing store shopfront with a functional cart. Made in React.",
        thumb: shopfrontThumb,
        link: "./shopfront/",
        github: "https://github.com/christinesn/shopfront/"
    },
    {
        name: "Thesaurus",
        description: "A thesaurus app made in React. Consumes Merriam-Webster's REST API.",
        thumb: thesaurusThumb,
        link: "./thesaurus/",
        github: "https://github.com/christinesn/thesaurus/"
    },
    {
        name: "Diner",
        description: "A responsive restaurant homepage made in React.",
        thumb: restaurantThumb,
        link: "./restaurant/",
        github: "https://github.com/christinesn/restaurant/"
    },
    {
        name: "Writing Space",
        description: "A minimalist writing workspace created with React.",
        thumb: textEditorThumb,
        link: "./text-editor/",
        github: "https://github.com/christinesn/text-editor/"
    }
];

export default projectsList